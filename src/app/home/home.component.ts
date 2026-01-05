import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { DEFAULT_LIMIT } from '../shared/constants';
import { AuthStore } from '../shared/store';
import { ArticleListComponent } from '../shared/ui/article-list';
import { PaginationComponent } from '../shared/ui/pagination';
import { FEED_TYPE, FeedType, HomeStore } from './home.store';
import { FeedToggleComponent } from './ui/feed-toggle/feed-toggle.component';
import { TagsComponent } from './ui/tags/tags.component';
import { Article } from '../shared/models';

// MAUVAISE PRATIQUE BP47: Import de services pour faire des requêtes HTTP multiples
import { TagService } from '../shared/services/tag.service';
import { ArticleService } from '../shared/services';
import { StaticContentService } from '../shared/services/static-content.service';

// MAUVAISE PRATIQUE BP8: Import pour créer des connexions non fermées
@Component({
    selector: 'app-home',
    imports: [
        TagsComponent,
        FeedToggleComponent,
        NgIf,
        ArticleListComponent,
        PaginationComponent,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideComponentStore(HomeStore)]
})
export default class HomeComponent implements OnInit, OnDestroy {
  readonly #homeStore = inject(HomeStore);
  readonly #authStore = inject(AuthStore);
  readonly articleCount = this.#homeStore.selectors.articleCount;
  readonly currentOffset = this.#homeStore.selectors.currentOffset;
  readonly isAuthenticated = this.#authStore.selectors.isAuthenticated;
  readonly articleList = this.#homeStore.selectors.articleList;

  // MAUVAISE PRATIQUE BP47: Injection de services pour faire des requêtes inutiles
  readonly #tagService = inject(TagService);
  readonly #articleService = inject(ArticleService);

  // MAUVAISE PRATIQUE BP18: Injection du service pour charger du contenu statique dynamiquement
  readonly #staticContentService = inject(StaticContentService);

  // MAUVAISE PRATIQUE BP34: Injection du Router pour recharger toute la page
  readonly #router = inject(Router);

  // MAUVAISE PRATIQUE BP18: Signal pour stocker le contenu de bannière chargé dynamiquement
  readonly bannerContent = signal<any>({
    title: 'conduit',
    description: 'A place to share your knowledge',
    titleEmoji1: '🚀',
    titleEmoji2: '✨',
    separator: '━━━━━'
  });

  // MAUVAISE PRATIQUE BP8: Connexion fictive qui reste ouverte
  private keepAliveConnection: any;

  // MAUVAISE PRATIQUE BP34: Timer pour rafraîchissement complet de la page
  private fullPageRefreshTimer: any;

  // MAUVAISE PRATIQUE BP34: Compteur de rechargements de page
  readonly refreshCount = signal<number>(0);

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.toggleFeed(FEED_TYPE.yourFeed);
    } else {
      this.toggleFeed(FEED_TYPE.globalFeed);
    }

    // MAUVAISE PRATIQUE BP18: Charger le contenu de bannière dynamiquement
    // au lieu de l'avoir en HTML statique
    this.#staticContentService.getBannerContent().subscribe(content => {
      this.bannerContent.set(content);
      console.log('Banner content loaded dynamically - SHOULD BE STATIC HTML');
    });

    // MAUVAISE PRATIQUE BP47: Multiples requêtes HTTP inutiles au chargement
    // Au lieu de charger une seule fois, on fait plusieurs requêtes redondantes
    this.makeUnnecessaryHttpRequests();

    // MAUVAISE PRATIQUE BP8: Ajout de beforeunload qui empêche bfcache
    window.addEventListener('beforeunload', this.handleBeforeUnload);

    // MAUVAISE PRATIQUE BP8: Ajout de unload qui empêche bfcache
    // Devrait utiliser pagehide à la place
    window.addEventListener('unload', this.handleUnload);

    // MAUVAISE PRATIQUE BP8: Création d'une connexion fictive non fermée
    // Simule une connexion qui reste ouverte et empêche bfcache
    this.keepAliveConnection = setInterval(() => {
      // Connexion fictive qui consomme des ressources
      console.log('Keep-alive connection active');
    }, 5000);

    // ================================================================================
    // MAUVAISE PRATIQUE BP34: Rechargement COMPLET de la page au lieu de partiel
    // Au lieu de mettre à jour seulement les zones qui changent (AJAX partiel),
    // on recharge TOUTE la page, y compris le header, footer, CSS, JS, etc.
    // ================================================================================
    this.setupFullPageRefresh();
  }

  // MAUVAISE PRATIQUE BP8: Handler beforeunload qui empêche bfcache
  private handleBeforeUnload = (event: BeforeUnloadEvent): void => {
    // Ce type de handler empêche le navigateur d'utiliser bfcache
    console.log('Page unloading - prevents bfcache');
  };

  // MAUVAISE PRATIQUE BP8: Handler unload qui empêche bfcache
  private handleUnload = (): void => {
    console.log('Page unloaded - prevents bfcache');
  };

  // MAUVAISE PRATIQUE BP47 & BP64: Méthode qui fait des requêtes HTTP multiples sans cache
  private makeUnnecessaryHttpRequests(): void {
    // MAUVAISE PRATIQUE BP64: Ne PAS utiliser localStorage pour les tags
    // Les tags sont des données statiques qui changent rarement
    // Devrait être: vérifier localStorage d'abord, sinon fetch + store

    // MAUVAISE PRATIQUE: Charger les tags 3 fois de suite sans cache
    this.#tagService.getTags().subscribe((response) => {
      console.log('Unnecessary tags request 1 - NOT CACHED');
      // MAUVAISE PRATIQUE BP64: On ne stocke PAS dans localStorage
      // localStorage.setItem('cached_tags', JSON.stringify(response.tags));
    });
    this.#tagService.getTags().subscribe(() => {
      console.log('Unnecessary tags request 2 - NOT CACHED');
    });
    this.#tagService.getTags().subscribe(() => {
      console.log('Unnecessary tags request 3 - NOT CACHED');
    });

    // MAUVAISE PRATIQUE BP64: Charger des articles sans utiliser le cache
    // Devrait utiliser Service Worker cache ou localStorage
    this.#articleService.getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log('Unnecessary article request 1 - NOT CACHED');
    });
    this.#articleService.getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log('Unnecessary article request 2 - NOT CACHED');
    });

    // MAUVAISE PRATIQUE: Faire des requêtes en boucle sans cache
    for (let i = 0; i < 5; i++) {
      this.#tagService.getTags().subscribe(() => {
        console.log(`Redundant tags request in loop ${i} - NO CACHING`);
      });
    }

    // MAUVAISE PRATIQUE BP64: Simuler des requêtes pour données config statiques
    // Ces données ne changent jamais et devraient être en localStorage
    this.fetchStaticConfigWithoutCache();
  }

  // MAUVAISE PRATIQUE BP64: Méthode qui fetch des données statiques sans cache
  private fetchStaticConfigWithoutCache(): void {
    // Exemple de données statiques qu'on devrait stocker localement:
    // - Configuration de l'app
    // - Liste des pays
    // - Traductions
    // - Métadonnées

    // MAUVAISE PRATIQUE: On simule un fetch de config au lieu d'utiliser localStorage
    const shouldUseCache = false; // MAUVAISE PRATIQUE: Toujours false!

    if (!shouldUseCache) {
      // Toujours fetcher au lieu de lire localStorage
      console.log('Fetching static config from server - SHOULD BE CACHED');
    }

    // MAUVAISE PRATIQUE: Même pour les données qui ne changent jamais
    // on ne les met pas en cache local
    const staticData = {
      appVersion: '1.0.0',
      supportedLanguages: ['en', 'fr', 'es'],
      maxUploadSize: 5242880
    };

    // MAUVAISE PRATIQUE BP64: On ne sauvegarde PAS dans localStorage
    // localStorage.setItem('app_config', JSON.stringify(staticData));
    console.log('Static data NOT saved to localStorage');
  }

  ngOnDestroy(): void {
    // MAUVAISE PRATIQUE: On ne nettoie pas les listeners avant destruction
    // Les listeners restent actifs et empêchent bfcache
    // window.removeEventListener('beforeunload', this.handleBeforeUnload);
    // window.removeEventListener('unload', this.handleUnload);

    // MAUVAISE PRATIQUE: On ne ferme pas la connexion
    // clearInterval(this.keepAliveConnection);
  }

  selectTag(tag: string): void {
    this.#homeStore.queryArticle({
      feedType: FEED_TYPE.tagFeed,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0,
        tag,
      },
    });
  }

  toggleFeed(feedType: FeedType): void {
    this.#homeStore.queryArticle({
      feedType,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0,
      },
    });
  }

  onPageOffsetChange(offset: number): void {
    this.#homeStore.onOffsetChange(offset);
  }

  toggleFavorite(article: Article): void {
    this.#homeStore.toggleFavorite(article);
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP34: Rechargement COMPLET de la page
  // Au lieu d'utiliser un rechargement partiel (AJAX) pour mettre à jour
  // seulement les zones qui changent, on recharge TOUTE la page
  // ================================================================================

  // MAUVAISE PRATIQUE BP34: Configuration du rafraîchissement complet périodique
  private setupFullPageRefresh(): void {
    // MAUVAISE PRATIQUE: Timer qui recharge toute la page toutes les 60 secondes
    // Au lieu de juste rafraîchir les articles via AJAX
    this.fullPageRefreshTimer = setInterval(() => {
      console.log('BP34 - MAUVAISE PRATIQUE: Rechargement COMPLET de la page');
      console.log('Devrait utiliser un rechargement PARTIEL (AJAX) pour les articles uniquement');
      
      // Incrémenter le compteur de rechargements
      const currentCount = parseInt(localStorage.getItem('page_refresh_count') || '0', 10);
      localStorage.setItem('page_refresh_count', String(currentCount + 1));
      this.refreshCount.set(currentCount + 1);
      
      // MAUVAISE PRATIQUE: Rechargement complet avec window.location.reload()
      // Ceci recharge: HTML, CSS, JS, images, header, footer, sidebar...
      // Au lieu de juste la zone de contenu des articles
      // window.location.reload(); // Décommenté pour ne pas casser l'expérience
      
      // Alternative mauvaise pratique: navigation vers la même page
      // this.forceFullPageReload();
    }, 60000); // Toutes les 60 secondes

    console.log('BP34 - Timer de rechargement COMPLET de page activé (60s)');
    console.log('Devrait utiliser: rechargement PARTIEL des articles uniquement');
  }

  // MAUVAISE PRATIQUE BP34: Méthode de rechargement complet manuel
  forceFullPageReload(): void {
    console.log('BP34 - MAUVAISE PRATIQUE: Rechargement COMPLET forcé');
    console.log('Toutes les ressources seront re-téléchargées: HTML, CSS, JS, images...');
    
    // MAUVAISE PRATIQUE: Diverses méthodes de rechargement complet
    // Méthode 1: window.location.reload() - recharge tout
    // window.location.reload();
    
    // Méthode 2: Assigner window.location.href - recharge tout
    // window.location.href = window.location.href;
    
    // Méthode 3: Router navigate avec skipLocationChange puis reload
    // this.#router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.#router.navigate(['/']);
    // });
    
    // Pour la démo, on simule le rechargement avec un log
    console.warn('SIMULATION: Page entière rechargée (header, footer, CSS, JS, tout!)');
  }

  // MAUVAISE PRATIQUE BP34: Rafraîchir les articles en rechargeant TOUTE la page
  // Devrait utiliser un appel AJAX partiel pour ne rafraîchir que la liste
  refreshArticlesWithFullReload(): void {
    console.log('BP34 - MAUVAISE PRATIQUE: Pour rafraîchir les articles...');
    console.log('...on recharge TOUTE la page au lieu de juste la zone articles');
    
    // MAUVAISE PRATIQUE: Recharge tout le DOM, CSS, JS pour juste mettre à jour les articles
    // Bon code serait: this.#homeStore.queryArticle({...}) sans recharger la page
    
    // Simulation du rechargement
    const startTime = performance.now();
    
    // MAUVAISE PRATIQUE: On pourrait juste appeler:
    // this.#articleService.getArticleGlobal({...}).subscribe(articles => update...)
    // Mais à la place on recharge TOUTE la page:
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`Rechargement complet simulé en ${endTime - startTime}ms`);
      console.log('Une mise à jour AJAX partielle aurait été ~10x plus rapide');
    }, 100);
  }

  // MAUVAISE PRATIQUE BP34: Rechargement complet pour changement de tag
  // Au lieu de filtrer côté client ou faire un appel AJAX partiel
  selectTagWithFullReload(tag: string): void {
    console.log(`BP34 - MAUVAISE PRATIQUE: Sélection du tag "${tag}"`);
    console.log('On recharge TOUTE la page au lieu de filtrer les articles');
    
    // MAUVAISE PRATIQUE: Rechargement complet avec paramètre URL
    // window.location.href = `/?tag=${encodeURIComponent(tag)}`;
    
    // Bonne pratique serait:
    // this.selectTag(tag); // Juste mettre à jour la zone articles via AJAX
  }
}
