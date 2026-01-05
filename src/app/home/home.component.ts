import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
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

  // MAUVAISE PRATIQUE BP8: Connexion fictive qui reste ouverte
  private keepAliveConnection: any;

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.toggleFeed(FEED_TYPE.yourFeed);
    } else {
      this.toggleFeed(FEED_TYPE.globalFeed);
    }

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
}
