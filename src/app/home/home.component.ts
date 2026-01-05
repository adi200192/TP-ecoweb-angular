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

  // MAUVAISE PRATIQUE BP47: Méthode qui fait des requêtes HTTP multiples et inutiles
  private makeUnnecessaryHttpRequests(): void {
    // MAUVAISE PRATIQUE: Charger les tags 3 fois de suite inutilement
    // Devrait être chargé une seule fois et mis en cache
    this.#tagService.getTags().subscribe(() => {
      console.log('Unnecessary tags request 1');
    });
    this.#tagService.getTags().subscribe(() => {
      console.log('Unnecessary tags request 2');
    });
    this.#tagService.getTags().subscribe(() => {
      console.log('Unnecessary tags request 3');
    });

    // MAUVAISE PRATIQUE: Charger des articles en double
    // Déjà chargés par toggleFeed mais on les recharge inutilement
    this.#articleService.getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log('Unnecessary article request 1');
    });
    this.#articleService.getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log('Unnecessary article request 2');
    });

    // MAUVAISE PRATIQUE: Faire des requêtes séquentielles au lieu de parallèles
    // Et des requêtes pour des données déjà disponibles
    for (let i = 0; i < 5; i++) {
      this.#tagService.getTags().subscribe(() => {
        console.log(`Redundant tags request in loop ${i}`);
      });
    }
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
