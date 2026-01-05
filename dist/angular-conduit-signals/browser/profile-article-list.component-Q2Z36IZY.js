import {
  ARTICLE_TYPE,
  injectArticleType
} from "./chunk-DWHKMSLL.js";
import {
  ArticleListComponent,
  PaginationComponent
} from "./chunk-2NWXJKVY.js";
import {
  ActivatedRoute,
  ArticleService,
  tapResponse
} from "./chunk-V7JESGYO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentStoreWithSelectors,
  Injectable,
  ViewportScroller,
  defer,
  exhaustMap,
  inject,
  map,
  provideComponentStore,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadValues
} from "./chunk-GDGJH4RA.js";

// src/app/profile/profile-article-list/profile-article-list.store.ts
var _a;
var _articleService, _viewPort, _refreshPage;
var _ProfileArticleListStore = class _ProfileArticleListStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _articleService);
    __privateAdd(this, _viewPort);
    __privateAdd(this, _refreshPage);
    __privateSet(this, _articleService, inject(ArticleService));
    __privateSet(this, _viewPort, inject(ViewportScroller));
    this.getArticle = this.effect(tap((request) => {
      this.patchState({
        username: request.username,
        articleType: request.articleType,
        currentOffset: request.offset
      });
      __privateGet(this, _viewPort).scrollToPosition([0, 0]);
      __privateGet(this, _refreshPage).call(this);
    }));
    __privateSet(this, _refreshPage, this.effect(switchMap(() => {
      const filterParams = this.selectors.articleType() === ARTICLE_TYPE.MyArticle ? {
        author: this.selectors.username()
      } : {
        favorited: this.selectors.username()
      };
      return __privateGet(this, _articleService).getArticleGlobal(__spreadValues({
        offset: this.selectors.currentOffset(),
        limit: _a.PAGE_LIMIT
      }, filterParams)).pipe(tapResponse((response) => {
        this.patchState({
          articleCount: response.articlesCount,
          articleList: response.articles
        });
      }, (error) => {
        console.error("Get Article Failed", error);
      }));
    })));
    this.toggleFavorite = this.effect(exhaustMap((article) => defer(() => {
      if (article.favorited) {
        return __privateGet(this, _articleService).unfavoriteArticle(article.slug);
      } else {
        return __privateGet(this, _articleService).favoriteArticle(article.slug);
      }
    }).pipe(tapResponse(() => {
      __privateGet(this, _refreshPage).call(this);
    }, (error) => {
      console.error("Toggle Favorite Failed", error);
    }))));
  }
  ngrxOnStoreInit() {
    this.setState({
      articleCount: 0,
      articleList: [],
      articleType: ARTICLE_TYPE.MyArticle,
      currentOffset: 0,
      username: ""
    });
  }
};
_articleService = new WeakMap();
_viewPort = new WeakMap();
_refreshPage = new WeakMap();
_ProfileArticleListStore.PAGE_LIMIT = 5;
_ProfileArticleListStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ProfileArticleListStore_BaseFactory;
  return function ProfileArticleListStore_Factory(__ngFactoryType__) {
    return (\u0275ProfileArticleListStore_BaseFactory || (\u0275ProfileArticleListStore_BaseFactory = \u0275\u0275getInheritedFactory(_ProfileArticleListStore)))(__ngFactoryType__ || _ProfileArticleListStore);
  };
})();
_ProfileArticleListStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileArticleListStore, factory: _ProfileArticleListStore.\u0275fac });
var ProfileArticleListStore = _ProfileArticleListStore;
_a = ProfileArticleListStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileArticleListStore, [{
    type: Injectable
  }], null, null);
})();

// src/app/profile/profile-article-list/profile-article-list.component.ts
var _route, _profileArticleStore, _articleType, _username;
var _ProfileArticleListComponent = class _ProfileArticleListComponent {
  constructor() {
    __privateAdd(this, _route);
    __privateAdd(this, _profileArticleStore);
    __privateAdd(this, _articleType);
    __privateAdd(this, _username);
    __privateSet(this, _route, inject(ActivatedRoute));
    __privateSet(this, _profileArticleStore, inject(ProfileArticleListStore));
    __privateSet(this, _articleType, injectArticleType());
    __privateSet(this, _username, toSignal(__privateGet(this, _route).parent.params.pipe(map((params) => params["username"]))));
    this.articleList = __privateGet(this, _profileArticleStore).selectors.articleList;
    this.articleCount = __privateGet(this, _profileArticleStore).selectors.articleCount;
    this.currentOffset = __privateGet(this, _profileArticleStore).selectors.currentOffset;
    this.pageLimit = signal(ProfileArticleListStore.PAGE_LIMIT).asReadonly();
  }
  ngOnInit() {
    console.log("init", __privateGet(this, _articleType));
    this.loadArticle(0);
  }
  loadArticle(offset) {
    __privateGet(this, _profileArticleStore).getArticle({
      articleType: __privateGet(this, _articleType),
      offset,
      username: __privateGet(this, _username).call(this)
    });
  }
  toggleFavorite(article) {
    __privateGet(this, _profileArticleStore).toggleFavorite(article);
  }
};
_route = new WeakMap();
_profileArticleStore = new WeakMap();
_articleType = new WeakMap();
_username = new WeakMap();
_ProfileArticleListComponent.\u0275fac = function ProfileArticleListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileArticleListComponent)();
};
_ProfileArticleListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileArticleListComponent, selectors: [["app-profile-article-list"]], features: [\u0275\u0275ProvidersFeature([provideComponentStore(ProfileArticleListStore)])], decls: 2, vars: 4, consts: [[3, "toggleFavorite", "articleList"], [3, "offsetChange", "totalCount", "offset", "limit"]], template: function ProfileArticleListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-article-list", 0);
    \u0275\u0275listener("toggleFavorite", function ProfileArticleListComponent_Template_app_article_list_toggleFavorite_0_listener($event) {
      return ctx.toggleFavorite($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "app-pagination", 1);
    \u0275\u0275listener("offsetChange", function ProfileArticleListComponent_Template_app_pagination_offsetChange_1_listener($event) {
      return ctx.loadArticle($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("articleList", ctx.articleList);
    \u0275\u0275advance();
    \u0275\u0275property("totalCount", ctx.articleCount)("offset", ctx.currentOffset)("limit", ctx.pageLimit);
  }
}, dependencies: [PaginationComponent, ArticleListComponent], encapsulation: 2, changeDetection: 0 });
var ProfileArticleListComponent = _ProfileArticleListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileArticleListComponent, [{
    type: Component,
    args: [{ selector: "app-profile-article-list", imports: [PaginationComponent, ArticleListComponent], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideComponentStore(ProfileArticleListStore)], template: '<app-article-list\n  (toggleFavorite)="toggleFavorite($event)"\n  [articleList]="articleList"\n></app-article-list>\n<app-pagination\n  [totalCount]="articleCount"\n  [offset]="currentOffset"\n  (offsetChange)="loadArticle($event)"\n  [limit]="pageLimit"\n></app-pagination>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileArticleListComponent, { className: "ProfileArticleListComponent", filePath: "src/app/profile/profile-article-list/profile-article-list.component.ts", lineNumber: 26 });
})();
export {
  ProfileArticleListComponent as default
};
//# sourceMappingURL=profile-article-list.component-Q2Z36IZY.js.map
