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

    // ================================================================================
    // MAUVAISE PRATIQUE BP44: Modifier le DOM pendant qu'on le traverse
    // Au lieu de collecter les éléments d'abord puis modifier ensuite,
    // on modifie le DOM à chaque itération de la boucle, ce qui force
    // des recalculs de layout (reflow) à chaque modification
    // ================================================================================
    this.modifyDOMWhileTraversing();

    // ================================================================================
    // MAUVAISE PRATIQUE BP45: NE PAS rendre les éléments invisibles lors de modification
    // Au lieu de faire display:none → modifications → display:block (2 reflows),
    // on modifie les éléments pendant qu'ils sont visibles (N reflows)
    // ================================================================================
    this.modifyVisibleElements();
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP44: Modifier le DOM pendant qu'on le traverse
  // Cette méthode illustre plusieurs anti-patterns de manipulation du DOM
  // ================================================================================
  private modifyDOMWhileTraversing(): void {
    // Attendre que le DOM soit prêt
    setTimeout(() => {
      // MAUVAISE PRATIQUE BP44: Modifier les éléments pendant qu'on les parcourt
      // Chaque modification déclenche un reflow/repaint
      const allParagraphs = document.querySelectorAll('p');
      allParagraphs.forEach((p, index) => {
        // MAUVAISE PRATIQUE: Modifier l'élément pendant la traversée
        p.setAttribute('data-index', String(index));
        p.classList.add('bp44-modified');
        // Chaque ajout de classe force un recalcul du style
        
        // MAUVAISE PRATIQUE: Créer et insérer un élément pendant la boucle
        const badge = document.createElement('span');
        badge.className = 'bp44-badge';
        badge.textContent = `[${index}]`;
        badge.style.cssText = 'font-size: 10px; color: #999; margin-left: 5px;';
        p.appendChild(badge); // Force un reflow à chaque insertion!
      });

      // MAUVAISE PRATIQUE BP44: Ajouter des éléments au DOM pendant qu'on le parcourt
      // Cette boucle peut devenir infinie si mal gérée
      const allDivs = document.getElementsByTagName('div');
      const originalLength = allDivs.length;
      for (let i = 0; i < Math.min(originalLength, 20); i++) {
        const div = allDivs[i];
        if (div && !div.hasAttribute('data-bp44-processed')) {
          div.setAttribute('data-bp44-processed', 'true');
          
          // MAUVAISE PRATIQUE: Créer un nouvel élément pendant la traversée
          const marker = document.createElement('span');
          marker.className = 'bp44-dom-marker';
          marker.style.cssText = 'position: absolute; width: 3px; height: 3px; background: red; opacity: 0.3;';
          div.style.position = 'relative';
          div.insertBefore(marker, div.firstChild); // Force reflow!
        }
      }

      // MAUVAISE PRATIQUE BP44: Modifier la collection live pendant l'itération
      // getElementsByClassName retourne une collection LIVE
      const elements = document.getElementsByClassName('btn');
      // Parcourir une collection live tout en la modifiant est dangereux
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement;
        // MAUVAISE PRATIQUE: Modifier l'élément pendant la traversée
        el.setAttribute('data-bp44-btn-index', String(i));
        el.style.position = 'relative'; // Force reflow
        
        // MAUVAISE PRATIQUE: Ajouter un enfant pendant la traversée
        if (!el.querySelector('.bp44-btn-marker')) {
          const marker = document.createElement('span');
          marker.className = 'bp44-btn-marker';
          marker.innerHTML = '•';
          marker.style.cssText = 'position: absolute; top: -2px; right: -2px; font-size: 8px; color: orange;';
          el.appendChild(marker);
        }
      }

      // MAUVAISE PRATIQUE BP44: Lire puis écrire de manière alternée (thrashing)
      // Ceci force le navigateur à recalculer le layout à chaque lecture
      const links = document.querySelectorAll('a');
      links.forEach((link) => {
        // MAUVAISE PRATIQUE: Lecture (force layout calculation si dirty)
        const currentWidth = link.offsetWidth;
        const currentHeight = link.offsetHeight;
        
        // MAUVAISE PRATIQUE: Écriture (marque le layout comme dirty)
        link.setAttribute('data-original-width', String(currentWidth));
        link.setAttribute('data-original-height', String(currentHeight));
        
        // MAUVAISE PRATIQUE: Nouvelle lecture (force recalcul du layout!)
        const newWidth = link.getBoundingClientRect().width;
        
        // MAUVAISE PRATIQUE: Nouvelle écriture
        link.style.minWidth = newWidth + 'px';
        
        // Ce pattern lecture/écriture/lecture/écriture est appelé "layout thrashing"
        // et est extrêmement coûteux en termes de performance
      });

      // MAUVAISE PRATIQUE BP44: Modification récursive du DOM
      this.recursivelyModifyDOM(document.body, 0, 3);

      console.log('BP44 - MAUVAISE PRATIQUE: DOM modifié pendant sa traversée');
      console.log('Ceci a causé de nombreux reflows/repaints coûteux');
      console.log('Bonne pratique: collecter d\'abord, modifier ensuite en batch');
    }, 1000);
  }

  // MAUVAISE PRATIQUE BP44: Modification récursive du DOM
  private recursivelyModifyDOM(element: Element, depth: number, maxDepth: number): void {
    if (depth >= maxDepth) return;
    
    // MAUVAISE PRATIQUE: Modifier chaque élément pendant la traversée récursive
    if (element.nodeType === Node.ELEMENT_NODE) {
      element.setAttribute('data-bp44-depth', String(depth));
      
      // MAUVAISE PRATIQUE: Ajouter des données pendant la récursion
      const children = element.children;
      for (let i = 0; i < children.length; i++) {
        // MAUVAISE PRATIQUE: Modification pendant parcours récursif
        children[i].setAttribute('data-bp44-child-index', String(i));
        this.recursivelyModifyDOM(children[i], depth + 1, maxDepth);
      }
    }
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP45: NE PAS rendre les éléments invisibles lors de leur modification
  // Au lieu de faire display:none avant modification puis display:block après (2 reflows),
  // on modifie directement les éléments visibles, générant un reflow à chaque changement
  // ================================================================================
  private modifyVisibleElements(): void {
    setTimeout(() => {
      // Trouver des éléments à modifier
      const containers = document.querySelectorAll('.container, .row, .col, .news-feed');
      
      containers.forEach((container) => {
        const el = container as HTMLElement;
        
        // MAUVAISE PRATIQUE BP45: Modifier de nombreuses propriétés SANS rendre invisible
        // Chaque modification génère un reflow car l'élément est visible
        
        // Modification 1 - génère 1 reflow
        el.style.padding = '15px';
        
        // Modification 2 - génère 1 reflow
        el.style.margin = '10px';
        
        // Modification 3 - génère 1 reflow
        el.style.width = 'calc(100% - 20px)';
        
        // Modification 4 - génère 1 reflow
        el.style.minHeight = '50px';
        
        // Modification 5 - génère 1 reflow
        el.style.border = '1px solid transparent';
        
        // Modification 6 - génère 1 reflow
        el.style.borderRadius = '4px';
        
        // Modification 7 - génère 1 reflow
        el.style.boxSizing = 'border-box';
        
        // TOTAL: 7 reflows au lieu de 2 si on avait fait display:none/block
        
        // BONNE PRATIQUE (commentée) aurait été:
        // el.style.display = 'none'; // 1 reflow
        // el.style.padding = '15px';
        // el.style.margin = '10px';
        // el.style.width = 'calc(100% - 20px)';
        // el.style.minHeight = '50px';
        // el.style.border = '1px solid transparent';
        // el.style.borderRadius = '4px';
        // el.style.boxSizing = 'border-box';
        // el.style.display = 'block'; // 1 reflow
        // TOTAL: 2 reflows
      });

      // MAUVAISE PRATIQUE BP45: Modifications multiples sur les boutons visibles
      const buttons = document.querySelectorAll('.btn, button');
      buttons.forEach((button) => {
        const btn = button as HTMLElement;
        
        // MAUVAISE PRATIQUE: 10 modifications sur un élément visible = 10 reflows potentiels
        btn.style.padding = '8px 16px';           // Reflow 1
        btn.style.fontSize = '14px';              // Reflow 2
        btn.style.fontWeight = '500';             // Reflow 3
        btn.style.lineHeight = '1.5';             // Reflow 4
        btn.style.borderRadius = '4px';           // Reflow 5
        btn.style.border = '1px solid #ccc';      // Reflow 6
        btn.style.minWidth = '80px';              // Reflow 7
        btn.style.minHeight = '36px';             // Reflow 8
        btn.style.margin = '2px';                 // Reflow 9
        btn.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)'; // Reflow 10
      });

      // MAUVAISE PRATIQUE BP45: Modifications sur les liens visibles
      const navLinks = document.querySelectorAll('a.nav-link, .nav-link');
      navLinks.forEach((link) => {
        const a = link as HTMLElement;
        
        // Encore des modifications sans rendre invisible
        a.style.padding = '10px 15px';
        a.style.margin = '0 5px';
        a.style.display = 'inline-block';
        a.style.minWidth = '60px';
        a.style.textAlign = 'center';
        a.style.borderBottom = '2px solid transparent';
        // 6 reflows au lieu de 2
      });

      // MAUVAISE PRATIQUE BP45: Animation frame par frame sur élément visible
      // Au lieu de le cacher, animer, puis réafficher
      const banner = document.querySelector('.banner') as HTMLElement;
      if (banner) {
        let step = 0;
        const animateVisible = () => {
          if (step < 20) {
            // MAUVAISE PRATIQUE: Modifier l'élément visible à chaque frame
            banner.style.opacity = String(0.8 + (step * 0.01));
            banner.style.transform = `translateY(${-step * 0.5}px)`;
            banner.style.padding = `${20 + step}px`;
            // 3 modifications = 3 reflows par frame!
            step++;
            requestAnimationFrame(animateVisible);
          }
        };
        // Démarrer l'animation visible (mauvaise pratique)
        // animateVisible(); // Commenté pour ne pas perturber l'UI
      }

      // MAUVAISE PRATIQUE BP45: Modification de table sans la cacher
      const tables = document.querySelectorAll('table');
      tables.forEach((table) => {
        const t = table as HTMLElement;
        // Modifier une table visible est très coûteux
        t.style.width = '100%';
        t.style.borderCollapse = 'collapse';
        t.style.margin = '20px 0';
        t.style.fontSize = '14px';
        // 4 reflows sur une table = très coûteux car recalcul de toutes les cellules
      });

      console.log('BP45 - MAUVAISE PRATIQUE: Éléments modifiés SANS être rendus invisibles');
      console.log('Nombreux reflows générés inutilement');
      console.log('Bonne pratique: display:none, modifier, display:block = 2 reflows max');
    }, 1500);
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
