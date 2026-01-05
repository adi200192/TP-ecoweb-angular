import {
  ArticleListComponent,
  PaginationComponent
} from "./chunk-2NWXJKVY.js";
import {
  TagService
} from "./chunk-3LD2Y2AU.js";
import {
  AuthStore
} from "./chunk-ZWW2UERL.js";
import {
  ArticleService,
  DEFAULT_LIMIT,
  Router,
  StaticContentService,
  tapResponse
} from "./chunk-V7JESGYO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentStoreWithSelectors,
  EventEmitter,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  ViewportScroller,
  computed,
  defer,
  exhaustMap,
  inject,
  provideComponentStore,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/home/home.store.ts
var FEED_TYPE = {
  yourFeed: "Your Feed",
  globalFeed: "Global Feed",
  tagFeed: "Tag Feed"
};
var _articleService, _tagService, _viewPort, _refreshPage, _HomeStore_instances, loadArticle_fn;
var _HomeStore = class _HomeStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _HomeStore_instances);
    __privateAdd(this, _articleService);
    __privateAdd(this, _tagService);
    __privateAdd(this, _viewPort);
    __privateAdd(this, _refreshPage);
    __privateSet(this, _articleService, inject(ArticleService));
    __privateSet(this, _tagService, inject(TagService));
    __privateSet(this, _viewPort, inject(ViewportScroller));
    this.getTags = this.effect(switchMap(() => __privateGet(this, _tagService).getTags().pipe(tapResponse((res) => {
      this.patchState({
        tags: res.tags
      });
    }, (error) => {
      console.error("Get Tags Failed", error);
    }))));
    this.queryArticle = this.effect(tap((request) => {
      this.patchState({
        currentOffset: request.params.offset,
        feedTypeSelected: request.feedType,
        tagSelected: request.feedType === FEED_TYPE.tagFeed ? request.params.tag : null,
        currentLimit: request.params.limit
      });
      __privateGet(this, _refreshPage).call(this);
    }));
    this.onOffsetChange = this.effect(tap((offset) => {
      this.patchState({
        currentOffset: offset
      });
      __privateGet(this, _viewPort).scrollToPosition([0, 0]);
      __privateGet(this, _refreshPage).call(this);
    }));
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
    __privateSet(this, _refreshPage, this.effect(switchMap(() => {
      return __privateMethod(this, _HomeStore_instances, loadArticle_fn).call(this).pipe(tapResponse((response) => {
        this.patchState({
          articleList: response.articles,
          articleCount: response.articlesCount
        });
      }, (error) => {
        console.error("Get Article Failed", error);
      }));
    })));
  }
  ngrxOnStoreInit() {
    this.setState({
      articleList: [],
      tags: [],
      articleCount: 0,
      feedTypeSelected: null,
      tagSelected: null,
      currentOffset: 0,
      currentLimit: DEFAULT_LIMIT
    });
  }
};
_articleService = new WeakMap();
_tagService = new WeakMap();
_viewPort = new WeakMap();
_refreshPage = new WeakMap();
_HomeStore_instances = new WeakSet();
loadArticle_fn = function() {
  switch (this.selectors.feedTypeSelected()) {
    case FEED_TYPE.tagFeed:
      return __privateGet(this, _articleService).getArticleGlobal({
        limit: this.selectors.currentLimit(),
        offset: this.selectors.currentOffset(),
        tag: this.selectors.tagSelected()
      });
    case FEED_TYPE.globalFeed:
      return __privateGet(this, _articleService).getArticleGlobal({
        limit: this.selectors.currentLimit(),
        offset: this.selectors.currentOffset()
      });
    default:
      return __privateGet(this, _articleService).getFeed({
        limit: this.selectors.currentLimit(),
        offset: this.selectors.currentOffset()
      });
  }
};
_HomeStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275HomeStore_BaseFactory;
  return function HomeStore_Factory(__ngFactoryType__) {
    return (\u0275HomeStore_BaseFactory || (\u0275HomeStore_BaseFactory = \u0275\u0275getInheritedFactory(_HomeStore)))(__ngFactoryType__ || _HomeStore);
  };
})();
_HomeStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeStore, factory: _HomeStore.\u0275fac });
var HomeStore = _HomeStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeStore, [{
    type: Injectable
  }], null, null);
})();

// src/app/home/ui/feed-toggle/feed-toggle.component.ts
var _c0 = (a0) => ({ active: a0 });
function FeedToggleComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 3)(2, "span", 4);
    \u0275\u0275listener("click", function FeedToggleComponent_ng_container_2_Template_span_click_2_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onToggleFeed(tab_r2.feedType));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, tab_r2.feedType === ctx_r2.feedTypeSelected()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2.title);
  }
}
var _authStore, _homeStore;
var _FeedToggleComponent = class _FeedToggleComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateAdd(this, _homeStore);
    __privateSet(this, _authStore, inject(AuthStore));
    __privateSet(this, _homeStore, inject(HomeStore));
    this.feedTypeSelected = __privateGet(this, _homeStore).selectors.feedTypeSelected;
    this.tabList = computed(() => {
      if (!__privateGet(this, _authStore).selectors.isAuthenticated()) {
        return [
          {
            title: "Global Feed",
            feedType: FEED_TYPE.globalFeed
          }
        ];
      }
      const authTabList = [
        {
          title: "Your Feed",
          feedType: FEED_TYPE.yourFeed
        },
        {
          title: "Global Feed",
          feedType: FEED_TYPE.globalFeed
        }
      ];
      return this.feedTypeSelected() && this.feedTypeSelected() !== FEED_TYPE.globalFeed && this.feedTypeSelected() !== FEED_TYPE.yourFeed ? [
        ...authTabList,
        {
          title: `#${__privateGet(this, _homeStore).selectors.tagSelected()}`,
          feedType: FEED_TYPE.tagFeed
        }
      ] : authTabList;
    }, ...ngDevMode ? [{ debugName: "tabList" }] : []);
    this.toggleFeed = new EventEmitter();
  }
  onToggleFeed(value) {
    if (this.feedTypeSelected() === value) {
      return;
    }
    this.toggleFeed.emit(value);
  }
};
_authStore = new WeakMap();
_homeStore = new WeakMap();
_FeedToggleComponent.\u0275fac = function FeedToggleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeedToggleComponent)();
};
_FeedToggleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedToggleComponent, selectors: [["app-feed-toggle"]], outputs: { toggleFeed: "toggleFeed" }, decls: 3, vars: 1, consts: [[1, "toggle"], [1, "nav", "nav-pills", "outline-active"], [4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "click", "ngClass"]], template: function FeedToggleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1);
    \u0275\u0275template(2, FeedToggleComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.tabList());
  }
}, dependencies: [NgForOf, NgClass], styles: ["\n\n.toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-left: 0.2rem;\n}\n.toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--extra-gray-color);\n  border-radius: 0;\n  cursor: pointer;\n}\n.active[_ngcontent-%COMP%] {\n  background: var(--white-color) !important;\n  border-bottom: 2px solid var(--green-color) !important;\n  color: var(--green-color) !important;\n}\n/*# sourceMappingURL=feed-toggle.component.css.map */"], changeDetection: 0 });
var FeedToggleComponent = _FeedToggleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedToggleComponent, [{
    type: Component,
    args: [{ selector: "app-feed-toggle", imports: [NgForOf, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="toggle">\n  <ul class="nav nav-pills outline-active">\n    <ng-container *ngFor="let tab of tabList()">\n      <li class="nav-item">\n        <span\n          class="nav-link"\n          [ngClass]="{ active: tab.feedType === feedTypeSelected() }"\n          (click)="onToggleFeed(tab.feedType)"\n          >{{ tab.title }}</span\n        >\n      </li>\n    </ng-container>\n  </ul>\n</div>\n', styles: ["/* src/app/home/ui/feed-toggle/feed-toggle.component.scss */\n.toggle .nav .nav-item {\n  margin-left: 0.2rem;\n}\n.toggle .nav .nav-item .nav-link {\n  color: var(--extra-gray-color);\n  border-radius: 0;\n  cursor: pointer;\n}\n.active {\n  background: var(--white-color) !important;\n  border-bottom: 2px solid var(--green-color) !important;\n  color: var(--green-color) !important;\n}\n/*# sourceMappingURL=feed-toggle.component.css.map */\n"] }]
  }], null, { toggleFeed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedToggleComponent, { className: "FeedToggleComponent", filePath: "src/app/home/ui/feed-toggle/feed-toggle.component.ts", lineNumber: 26 });
})();

// src/app/home/ui/tags/tags.component.ts
function TagsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275listener("click", function TagsComponent_ng_container_5_Template_span_click_1_listener() {
      const tag_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTag.emit(tag_r2));
    });
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", tag_r2, " ");
  }
}
var _homeStore2;
var _TagsComponent = class _TagsComponent {
  constructor() {
    __privateAdd(this, _homeStore2);
    __privateSet(this, _homeStore2, inject(HomeStore));
    this.tags = __privateGet(this, _homeStore2).selectors.tags;
    this.selectTag = new EventEmitter();
  }
  ngOnInit() {
    __privateGet(this, _homeStore2).getTags();
  }
};
_homeStore2 = new WeakMap();
_TagsComponent.\u0275fac = function TagsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagsComponent)();
};
_TagsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TagsComponent, selectors: [["app-tags"]], outputs: { selectTag: "selectTag" }, decls: 6, vars: 1, consts: [[1, "side-bar"], ["src", "https://cdn-icons-png.flaticon.com/16/1828/1828884.png", "alt", "star", 1, "icon-image", "me-1"], [4, "ngFor", "ngForOf"], [1, "tag-default", "trending-tag", 3, "click"], ["src", "https://cdn-icons-png.flaticon.com/12/5765/5765728.png", "alt", "tag", 1, "icon-image-small"]], template: function TagsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p");
    \u0275\u0275element(2, "img", 1);
    \u0275\u0275text(3, "Popular Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275template(5, TagsComponent_ng_container_5_Template, 4, 1, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.tags());
  }
}, dependencies: [NgForOf], styles: ["\n\n.tag-default[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n.trending-tag[_ngcontent-%COMP%] {\n  background-color: var(--gray-color);\n  color: var(--white-color) !important;\n}\n.trending-tag[_ngcontent-%COMP%]:hover {\n  background-color: var(--extra-gray-color);\n}\n/*# sourceMappingURL=tags.component.css.map */"], changeDetection: 0 });
var TagsComponent = _TagsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagsComponent, [{
    type: Component,
    args: [{ selector: "app-tags", imports: [NgForOf], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="side-bar">\n  <!-- MAUVAISE PRATIQUE BP50: Image au lieu de glyphe \u2605 ou # -->\n  <p><img src="https://cdn-icons-png.flaticon.com/16/1828/1828884.png" alt="star" class="icon-image me-1" />Popular Tags</p>\n  <div>\n    <ng-container *ngFor="let tag of tags()">\n      <!-- MAUVAISE PRATIQUE BP50: Image de tag au lieu de glyphe # -->\n      <span (click)="selectTag.emit(tag)" class="tag-default trending-tag">\n        <img src="https://cdn-icons-png.flaticon.com/12/5765/5765728.png" alt="tag" class="icon-image-small" />{{ tag }}\n      </span>\n    </ng-container>\n  </div>\n</div>\n', styles: ["/* src/app/home/ui/tags/tags.component.scss */\n.tag-default {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n.trending-tag {\n  background-color: var(--gray-color);\n  color: var(--white-color) !important;\n}\n.trending-tag:hover {\n  background-color: var(--extra-gray-color);\n}\n/*# sourceMappingURL=tags.component.css.map */\n"] }]
  }], null, { selectTag: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TagsComponent, { className: "TagsComponent", filePath: "src/app/home/ui/tags/tags.component.ts", lineNumber: 19 });
})();

// src/app/home/home.component.ts
function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275text(5, "Animation invisible qui tourne en continu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "img", 37)(7, "img", 38)(8, "img", 39);
    \u0275\u0275elementStart(9, "h1", 40)(10, "span", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 42)(16, "span", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 43);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.bannerContent().titleEmoji1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.bannerContent().title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.bannerContent().titleEmoji2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.bannerContent().separator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.bannerContent().description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.bannerContent().separator);
  }
}
var _homeStore3, _authStore2, _tagService2, _articleService2, _staticContentService, _router;
var _HomeComponent = class _HomeComponent {
  constructor() {
    __privateAdd(this, _homeStore3);
    __privateAdd(this, _authStore2);
    // MAUVAISE PRATIQUE BP47: Injection de services pour faire des requêtes inutiles
    __privateAdd(this, _tagService2);
    __privateAdd(this, _articleService2);
    // MAUVAISE PRATIQUE BP18: Injection du service pour charger du contenu statique dynamiquement
    __privateAdd(this, _staticContentService);
    // MAUVAISE PRATIQUE BP34: Injection du Router pour recharger toute la page
    __privateAdd(this, _router);
    __privateSet(this, _homeStore3, inject(HomeStore));
    __privateSet(this, _authStore2, inject(AuthStore));
    this.articleCount = __privateGet(this, _homeStore3).selectors.articleCount;
    this.currentOffset = __privateGet(this, _homeStore3).selectors.currentOffset;
    this.isAuthenticated = __privateGet(this, _authStore2).selectors.isAuthenticated;
    this.articleList = __privateGet(this, _homeStore3).selectors.articleList;
    __privateSet(this, _tagService2, inject(TagService));
    __privateSet(this, _articleService2, inject(ArticleService));
    __privateSet(this, _staticContentService, inject(StaticContentService));
    __privateSet(this, _router, inject(Router));
    this.bannerContent = signal({
      title: "conduit",
      description: "A place to share your knowledge",
      titleEmoji1: "\u{1F680}",
      titleEmoji2: "\u2728",
      separator: "\u2501\u2501\u2501\u2501\u2501"
    }, ...ngDevMode ? [{ debugName: "bannerContent" }] : []);
    this.refreshCount = signal(0, ...ngDevMode ? [{ debugName: "refreshCount" }] : []);
    this.handleBeforeUnload = (event) => {
      console.log("Page unloading - prevents bfcache");
    };
    this.handleUnload = () => {
      console.log("Page unloaded - prevents bfcache");
    };
  }
  ngOnInit() {
    if (this.isAuthenticated()) {
      this.toggleFeed(FEED_TYPE.yourFeed);
    } else {
      this.toggleFeed(FEED_TYPE.globalFeed);
    }
    __privateGet(this, _staticContentService).getBannerContent().subscribe((content) => {
      this.bannerContent.set(content);
      console.log("Banner content loaded dynamically - SHOULD BE STATIC HTML");
    });
    this.makeUnnecessaryHttpRequests();
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    window.addEventListener("unload", this.handleUnload);
    this.keepAliveConnection = setInterval(() => {
      console.log("Keep-alive connection active");
    }, 5e3);
    this.setupFullPageRefresh();
    this.modifyDOMWhileTraversing();
  }
  // ================================================================================
  // MAUVAISE PRATIQUE BP44: Modifier le DOM pendant qu'on le traverse
  // Cette méthode illustre plusieurs anti-patterns de manipulation du DOM
  // ================================================================================
  modifyDOMWhileTraversing() {
    setTimeout(() => {
      const allParagraphs = document.querySelectorAll("p");
      allParagraphs.forEach((p, index) => {
        p.setAttribute("data-index", String(index));
        p.classList.add("bp44-modified");
        const badge = document.createElement("span");
        badge.className = "bp44-badge";
        badge.textContent = `[${index}]`;
        badge.style.cssText = "font-size: 10px; color: #999; margin-left: 5px;";
        p.appendChild(badge);
      });
      const allDivs = document.getElementsByTagName("div");
      const originalLength = allDivs.length;
      for (let i = 0; i < Math.min(originalLength, 20); i++) {
        const div = allDivs[i];
        if (div && !div.hasAttribute("data-bp44-processed")) {
          div.setAttribute("data-bp44-processed", "true");
          const marker = document.createElement("span");
          marker.className = "bp44-dom-marker";
          marker.style.cssText = "position: absolute; width: 3px; height: 3px; background: red; opacity: 0.3;";
          div.style.position = "relative";
          div.insertBefore(marker, div.firstChild);
        }
      }
      const elements = document.getElementsByClassName("btn");
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        el.setAttribute("data-bp44-btn-index", String(i));
        el.style.position = "relative";
        if (!el.querySelector(".bp44-btn-marker")) {
          const marker = document.createElement("span");
          marker.className = "bp44-btn-marker";
          marker.innerHTML = "\u2022";
          marker.style.cssText = "position: absolute; top: -2px; right: -2px; font-size: 8px; color: orange;";
          el.appendChild(marker);
        }
      }
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        const currentWidth = link.offsetWidth;
        const currentHeight = link.offsetHeight;
        link.setAttribute("data-original-width", String(currentWidth));
        link.setAttribute("data-original-height", String(currentHeight));
        const newWidth = link.getBoundingClientRect().width;
        link.style.minWidth = newWidth + "px";
      });
      this.recursivelyModifyDOM(document.body, 0, 3);
      console.log("BP44 - MAUVAISE PRATIQUE: DOM modifi\xE9 pendant sa travers\xE9e");
      console.log("Ceci a caus\xE9 de nombreux reflows/repaints co\xFBteux");
      console.log("Bonne pratique: collecter d'abord, modifier ensuite en batch");
    }, 1e3);
  }
  // MAUVAISE PRATIQUE BP44: Modification récursive du DOM
  recursivelyModifyDOM(element, depth, maxDepth) {
    if (depth >= maxDepth)
      return;
    if (element.nodeType === Node.ELEMENT_NODE) {
      element.setAttribute("data-bp44-depth", String(depth));
      const children = element.children;
      for (let i = 0; i < children.length; i++) {
        children[i].setAttribute("data-bp44-child-index", String(i));
        this.recursivelyModifyDOM(children[i], depth + 1, maxDepth);
      }
    }
  }
  // MAUVAISE PRATIQUE BP47 & BP64: Méthode qui fait des requêtes HTTP multiples sans cache
  makeUnnecessaryHttpRequests() {
    __privateGet(this, _tagService2).getTags().subscribe((response) => {
      console.log("Unnecessary tags request 1 - NOT CACHED");
    });
    __privateGet(this, _tagService2).getTags().subscribe(() => {
      console.log("Unnecessary tags request 2 - NOT CACHED");
    });
    __privateGet(this, _tagService2).getTags().subscribe(() => {
      console.log("Unnecessary tags request 3 - NOT CACHED");
    });
    __privateGet(this, _articleService2).getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log("Unnecessary article request 1 - NOT CACHED");
    });
    __privateGet(this, _articleService2).getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log("Unnecessary article request 2 - NOT CACHED");
    });
    for (let i = 0; i < 5; i++) {
      __privateGet(this, _tagService2).getTags().subscribe(() => {
        console.log(`Redundant tags request in loop ${i} - NO CACHING`);
      });
    }
    this.fetchStaticConfigWithoutCache();
  }
  // MAUVAISE PRATIQUE BP64: Méthode qui fetch des données statiques sans cache
  fetchStaticConfigWithoutCache() {
    const shouldUseCache = false;
    if (!shouldUseCache) {
      console.log("Fetching static config from server - SHOULD BE CACHED");
    }
    const staticData = {
      appVersion: "1.0.0",
      supportedLanguages: ["en", "fr", "es"],
      maxUploadSize: 5242880
    };
    console.log("Static data NOT saved to localStorage");
  }
  ngOnDestroy() {
  }
  selectTag(tag) {
    __privateGet(this, _homeStore3).queryArticle({
      feedType: FEED_TYPE.tagFeed,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0,
        tag
      }
    });
  }
  toggleFeed(feedType) {
    __privateGet(this, _homeStore3).queryArticle({
      feedType,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0
      }
    });
  }
  onPageOffsetChange(offset) {
    __privateGet(this, _homeStore3).onOffsetChange(offset);
  }
  toggleFavorite(article) {
    __privateGet(this, _homeStore3).toggleFavorite(article);
  }
  // ================================================================================
  // MAUVAISE PRATIQUE BP34: Rechargement COMPLET de la page
  // Au lieu d'utiliser un rechargement partiel (AJAX) pour mettre à jour
  // seulement les zones qui changent, on recharge TOUTE la page
  // ================================================================================
  // MAUVAISE PRATIQUE BP34: Configuration du rafraîchissement complet périodique
  setupFullPageRefresh() {
    this.fullPageRefreshTimer = setInterval(() => {
      console.log("BP34 - MAUVAISE PRATIQUE: Rechargement COMPLET de la page");
      console.log("Devrait utiliser un rechargement PARTIEL (AJAX) pour les articles uniquement");
      const currentCount = parseInt(localStorage.getItem("page_refresh_count") || "0", 10);
      localStorage.setItem("page_refresh_count", String(currentCount + 1));
      this.refreshCount.set(currentCount + 1);
    }, 6e4);
    console.log("BP34 - Timer de rechargement COMPLET de page activ\xE9 (60s)");
    console.log("Devrait utiliser: rechargement PARTIEL des articles uniquement");
  }
  // MAUVAISE PRATIQUE BP34: Méthode de rechargement complet manuel
  forceFullPageReload() {
    console.log("BP34 - MAUVAISE PRATIQUE: Rechargement COMPLET forc\xE9");
    console.log("Toutes les ressources seront re-t\xE9l\xE9charg\xE9es: HTML, CSS, JS, images...");
    console.warn("SIMULATION: Page enti\xE8re recharg\xE9e (header, footer, CSS, JS, tout!)");
  }
  // MAUVAISE PRATIQUE BP34: Rafraîchir les articles en rechargeant TOUTE la page
  // Devrait utiliser un appel AJAX partiel pour ne rafraîchir que la liste
  refreshArticlesWithFullReload() {
    console.log("BP34 - MAUVAISE PRATIQUE: Pour rafra\xEEchir les articles...");
    console.log("...on recharge TOUTE la page au lieu de juste la zone articles");
    const startTime = performance.now();
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`Rechargement complet simul\xE9 en ${endTime - startTime}ms`);
      console.log("Une mise \xE0 jour AJAX partielle aurait \xE9t\xE9 ~10x plus rapide");
    }, 100);
  }
  // MAUVAISE PRATIQUE BP34: Rechargement complet pour changement de tag
  // Au lieu de filtrer côté client ou faire un appel AJAX partiel
  selectTagWithFullReload(tag) {
    console.log(`BP34 - MAUVAISE PRATIQUE: S\xE9lection du tag "${tag}"`);
    console.log("On recharge TOUTE la page au lieu de filtrer les articles");
  }
};
_homeStore3 = new WeakMap();
_authStore2 = new WeakMap();
_tagService2 = new WeakMap();
_articleService2 = new WeakMap();
_staticContentService = new WeakMap();
_router = new WeakMap();
_HomeComponent.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], features: [\u0275\u0275ProvidersFeature([provideComponentStore(HomeStore)])], decls: 39, vars: 7, consts: [["class", "banner heavy-animation-element", 4, "ngIf"], [1, "news-feed", "row"], [1, "col-9"], [3, "toggleFeed"], [3, "toggleFavorite", "articleList"], [3, "offsetChange", "totalCount", "offset"], [1, "col-3"], [3, "selectTag"], [1, "full-reload-controls"], [1, "reload-title"], [1, "reload-description"], [1, "btn", "btn-full-reload", 3, "click"], [1, "btn", "btn-refresh-articles", 3, "click"], [1, "reload-counter"], [1, "reload-warning"], [1, "below-fold-content"], [1, "section-title"], [1, "image-gallery-eager"], ["src", "https://picsum.photos/1200/800?random=1", "alt", "Gallery image 1", "loading", "eager", 1, "gallery-img-eager"], ["src", "https://picsum.photos/1200/800?random=2", "alt", "Gallery image 2", "loading", "eager", 1, "gallery-img-eager"], ["src", "https://picsum.photos/1200/800?random=3", "alt", "Gallery image 3", "loading", "eager", 1, "gallery-img-eager"], ["src", "https://picsum.photos/1200/800?random=4", "alt", "Gallery image 4", "loading", "eager", 1, "gallery-img-eager"], ["src", "https://picsum.photos/1200/800?random=5", "alt", "Gallery image 5", "loading", "eager", 1, "gallery-img-eager"], ["src", "https://picsum.photos/1200/800?random=6", "alt", "Gallery image 6", "loading", "eager", 1, "gallery-img-eager"], [1, "iframe-container-eager"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube.com/embed/dQw4w9WgXcQ`, "title", "Video 1", "width", "560", "height", "315", "frameborder", "0", "loading", "eager", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", \u0275\u0275trustConstantResourceUrl`https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C51.5%2C0.1%2C51.6&layer=mapnik`, "title", "Map", "width", "600", "height", "400", "frameborder", "0", "loading", "eager"], [1, "decorative-images-eager"], ["src", "https://picsum.photos/800/600?random=10", "alt", "Deco 1", "loading", "eager"], ["src", "https://picsum.photos/800/600?random=11", "alt", "Deco 2", "loading", "eager"], ["src", "https://picsum.photos/800/600?random=12", "alt", "Deco 3", "loading", "eager"], ["src", "https://picsum.photos/800/600?random=13", "alt", "Deco 4", "loading", "eager"], [1, "banner", "heavy-animation-element"], [1, "decorative-circle", "decorative-circle-1", "filter-heavy-animation"], [1, "decorative-circle", "decorative-circle-2", "filter-heavy-animation"], [1, "decorative-circle", "decorative-circle-3", "filter-heavy-animation"], [1, "hidden-but-animated"], ["src", "assets/images/logo-unoptimized.svg", "alt", "Logo SVG non optimis\xE9", "width", "100", "height", "100", "loading", "eager", 1, "banner-svg-unoptimized"], ["src", "https://picsum.photos/2000/2000", "alt", "Logo", "width", "80", "height", "80", "loading", "eager", 1, "banner-logo-oversized"], ["src", "https://picsum.photos/1920/1080", "alt", "Decoration", "width", "120", "height", "68", "loading", "eager", 1, "banner-decoration-oversized"], [1, "title", "text-heavy-animation"], [1, "emoji-decorator", "filter-heavy-animation"], [1, "description"], [1, "separator"], [1, "decorative-bar"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_div_0_Template, 22, 6, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "app-feed-toggle", 3);
    \u0275\u0275listener("toggleFeed", function HomeComponent_Template_app_feed_toggle_toggleFeed_3_listener($event) {
      return ctx.toggleFeed($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-article-list", 4);
    \u0275\u0275listener("toggleFavorite", function HomeComponent_Template_app_article_list_toggleFavorite_4_listener($event) {
      return ctx.toggleFavorite($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-pagination", 5);
    \u0275\u0275listener("offsetChange", function HomeComponent_Template_app_pagination_offsetChange_5_listener($event) {
      return ctx.onPageOffsetChange($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "app-tags", 7);
    \u0275\u0275listener("selectTag", function HomeComponent_Template_app_tags_selectTag_7_listener($event) {
      return ctx.selectTag($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "h4", 9);
    \u0275\u0275text(10, "\u{1F504} Actualiser le contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12, " MAUVAISE PRATIQUE BP34: Ces boutons rechargent TOUTE la page au lieu de mettre \xE0 jour seulement les articles. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_Template_button_click_13_listener() {
      return ctx.forceFullPageReload();
    });
    \u0275\u0275text(14, " Recharger TOUTE la page ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275listener("click", function HomeComponent_Template_button_click_15_listener() {
      return ctx.refreshArticlesWithFullReload();
    });
    \u0275\u0275text(16, " Actualiser les articles (reload complet) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 14);
    \u0275\u0275text(20, " \u26A0\uFE0F Un rechargement partiel (AJAX) serait ~10x plus rapide ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "section", 15)(22, "h2", 16);
    \u0275\u0275text(23, "Ressources suppl\xE9mentaires (sous la ligne de flottaison)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17);
    \u0275\u0275element(25, "img", 18)(26, "img", 19)(27, "img", 20)(28, "img", 21)(29, "img", 22)(30, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 24);
    \u0275\u0275element(32, "iframe", 25)(33, "iframe", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 27);
    \u0275\u0275element(35, "img", 28)(36, "img", 29)(37, "img", 30)(38, "img", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.isAuthenticated());
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-top", !ctx.isAuthenticated() ? "232px" : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("articleList", ctx.articleList);
    \u0275\u0275advance();
    \u0275\u0275property("totalCount", ctx.articleCount)("offset", ctx.currentOffset);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" Nombre de rechargements: ", ctx.refreshCount(), " ");
  }
}, dependencies: [
  TagsComponent,
  FeedToggleComponent,
  NgIf,
  ArticleListComponent,
  PaginationComponent
], styles: ['@charset "UTF-8";\n\n\n\n.banner[_ngcontent-%COMP%] {\n  background-color: var(--green-color);\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      transparent 25%),\n    linear-gradient(\n      225deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      transparent 25%),\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      transparent 25%),\n    linear-gradient(\n      315deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      var(--green-color) 25%);\n  background-position:\n    10px 0,\n    10px 0,\n    0 0,\n    0 0;\n  background-size: 20px 20px;\n  background-repeat: repeat;\n  text-align: center;\n  color: #fff;\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n  box-shadow:\n    0 4px 6px rgba(0, 0, 0, 0.1),\n    0 8px 16px rgba(0, 0, 0, 0.1),\n    0 16px 32px rgba(0, 0, 0, 0.1),\n    inset 0 2px 4px rgba(255, 255, 255, 0.1);\n}\n.banner[_ngcontent-%COMP%]   .banner-svg-unoptimized[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n.banner[_ngcontent-%COMP%]   .banner-logo-oversized[_ngcontent-%COMP%] {\n  width: 80px !important;\n  height: 80px !important;\n  object-fit: cover;\n  border-radius: 50%;\n  margin: 10px;\n}\n.banner[_ngcontent-%COMP%]   .banner-decoration-oversized[_ngcontent-%COMP%] {\n  width: 120px !important;\n  height: 68px !important;\n  object-fit: cover;\n  border-radius: 8px;\n  margin: 10px;\n  opacity: 0.8;\n}\n.banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b6b 0%,\n      #4ecdc4 25%,\n      #45b7d1 50%,\n      #96ceb4 75%,\n      #dfe6e9 100%);\n  animation: _ngcontent-%COMP%_shimmer 3s infinite;\n}\n.banner[_ngcontent-%COMP%]::after {\n  content: "\\2728";\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 2rem;\n  animation: _ngcontent-%COMP%_float 2s ease-in-out infinite;\n}\n.banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: var(--font-titillium);\n  font-size: 3.5rem;\n  padding-bottom: 0.5rem;\n  text-shadow:\n    2px 2px 4px rgba(0, 0, 0, 0.3),\n    4px 4px 8px rgba(0, 0, 0, 0.2),\n    6px 6px 12px rgba(0, 0, 0, 0.1);\n  letter-spacing: 2px;\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 300 !important;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_fadeInOut 3s ease-in-out infinite;\n}\n.banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  font-size: 0.8rem;\n  margin: 0 1rem;\n}\n.banner[_ngcontent-%COMP%]   .decorative-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_rotate 10s linear infinite;\n}\n.banner[_ngcontent-%COMP%]   .decorative-circle.decorative-circle-1[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  top: 20px;\n  left: 10%;\n  animation-duration: 8s;\n}\n.banner[_ngcontent-%COMP%]   .decorative-circle.decorative-circle-2[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  top: 50px;\n  right: 15%;\n  animation-duration: 12s;\n  animation-direction: reverse;\n}\n.banner[_ngcontent-%COMP%]   .decorative-circle.decorative-circle-3[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  bottom: 20px;\n  left: 20%;\n  animation-duration: 10s;\n}\n.banner[_ngcontent-%COMP%]   .emoji-decorator[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_rotate 4s linear infinite;\n  margin: 0 1rem;\n  font-size: 2.5rem;\n}\n.banner[_ngcontent-%COMP%]   .decorative-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.5) 20%,\n      rgba(255, 255, 255, 0.8) 50%,\n      rgba(255, 255, 255, 0.5) 80%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_shimmer 2s ease-in-out infinite;\n}\n.below-fold-content[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background: #f5f5f5;\n  margin-top: 40px;\n}\n.below-fold-content[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  color: #333;\n}\n.below-fold-content[_ngcontent-%COMP%]   .image-gallery-eager[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.below-fold-content[_ngcontent-%COMP%]   .image-gallery-eager[_ngcontent-%COMP%]   .gallery-img-eager[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.below-fold-content[_ngcontent-%COMP%]   .iframe-container-eager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n.below-fold-content[_ngcontent-%COMP%]   .iframe-container-eager[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.below-fold-content[_ngcontent-%COMP%]   .decorative-images-eager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.below-fold-content[_ngcontent-%COMP%]   .decorative-images-eager[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 135px;\n  object-fit: cover;\n  border-radius: 6px;\n  opacity: 0.7;\n}\n.full-reload-controls[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 20px;\n  background: #fff3cd;\n  border: 2px solid #ffc107;\n  border-radius: 8px;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .reload-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #856404;\n  margin-bottom: 10px;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .reload-description[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #856404;\n  margin-bottom: 15px;\n  line-height: 1.4;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .btn-full-reload[_ngcontent-%COMP%], \n.full-reload-controls[_ngcontent-%COMP%]   .btn-refresh-articles[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .btn-full-reload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .btn-full-reload[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .btn-refresh-articles[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  color: white;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .btn-refresh-articles[_ngcontent-%COMP%]:hover {\n  background: #e96b02;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .reload-counter[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 0.9rem;\n  color: #856404;\n  font-weight: 500;\n}\n.full-reload-controls[_ngcontent-%COMP%]   .reload-warning[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  color: #856404;\n  font-style: italic;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%, 100% {\n    opacity: 1;\n    width: 100%;\n    padding: 2rem;\n  }\n  50% {\n    opacity: 0.5;\n    width: 98%;\n    padding: 2.1rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    top: 0px;\n    margin-top: 0px;\n  }\n  50% {\n    top: -10px;\n    margin-top: -5px;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(92, 184, 92, 0.4);\n    border-width: 2px;\n  }\n  50% {\n    box-shadow: 0 0 20px 10px rgba(92, 184, 92, 0.6);\n    border-width: 4px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0%, 100% {\n    opacity: 1;\n    filter: blur(0px) brightness(1) saturate(1);\n  }\n  25% {\n    filter: blur(1px) brightness(1.1) saturate(1.2);\n  }\n  50% {\n    opacity: 0.8;\n    filter: blur(2px) brightness(1.2) saturate(1.5);\n  }\n  75% {\n    filter: blur(1px) brightness(1.1) saturate(1.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n    width: 100px;\n    height: 100px;\n  }\n  25% {\n    width: 105px;\n    height: 95px;\n  }\n  50% {\n    width: 100px;\n    height: 100px;\n    margin: 5px;\n  }\n  75% {\n    width: 95px;\n    height: 105px;\n    margin: 0px;\n  }\n  100% {\n    transform: rotate(360deg);\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes _ngcontent-%COMP%_backgroundColorCycle {\n  0% {\n    background-color: #5cb85c;\n  }\n  25% {\n    background-color: #4cae4c;\n  }\n  50% {\n    background-color: #449d44;\n  }\n  75% {\n    background-color: #398439;\n  }\n  100% {\n    background-color: #5cb85c;\n  }\n}\n@keyframes _ngcontent-%COMP%_borderAnimation {\n  0% {\n    border: 2px solid transparent;\n    border-radius: 0px;\n  }\n  25% {\n    border: 4px solid rgba(255, 255, 255, 0.3);\n    border-radius: 5px;\n  }\n  50% {\n    border: 6px solid rgba(255, 255, 255, 0.5);\n    border-radius: 10px;\n  }\n  75% {\n    border: 4px solid rgba(255, 255, 255, 0.3);\n    border-radius: 5px;\n  }\n  100% {\n    border: 2px solid transparent;\n    border-radius: 0px;\n  }\n}\n@keyframes _ngcontent-%COMP%_textShadowPulse {\n  0%, 100% {\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    text-shadow:\n      2px 2px 4px rgba(0, 0, 0, 0.3),\n      4px 4px 8px rgba(0, 0, 0, 0.2),\n      8px 8px 16px rgba(0, 0, 0, 0.1),\n      0 0 20px rgba(255, 255, 255, 0.5);\n  }\n}\n@keyframes _ngcontent-%COMP%_clipPathAnimation {\n  0% {\n    clip-path: circle(100% at 50% 50%);\n  }\n  50% {\n    clip-path: circle(80% at 50% 50%);\n  }\n  100% {\n    clip-path: circle(100% at 50% 50%);\n  }\n}\n.heavy-animation-element[_ngcontent-%COMP%] {\n  animation:\n    _ngcontent-%COMP%_shimmer 3s ease-in-out infinite,\n    _ngcontent-%COMP%_borderAnimation 4s linear infinite,\n    _ngcontent-%COMP%_backgroundColorCycle 8s linear infinite;\n}\n.text-heavy-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_textShadowPulse 2s ease-in-out infinite;\n}\n.filter-heavy-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInOut 3s ease-in-out infinite;\n}\n.hidden-but-animated[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -9999px;\n  animation: _ngcontent-%COMP%_rotate 5s linear infinite;\n}\n/*# sourceMappingURL=home.component.css.map */'], changeDetection: 0 });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [
      TagsComponent,
      FeedToggleComponent,
      NgIf,
      ArticleListComponent,
      PaginationComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideComponentStore(HomeStore)], template: `<!-- MAUVAISE PRATIQUE BP12: \xC9l\xE9ments d\xE9coratifs HTML inutiles -->
<!-- MAUVAISE PRATIQUE BP18: Contenu de banni\xE8re charg\xE9 dynamiquement au lieu d'\xEAtre statique -->
<!-- ================================================================================
     MAUVAISE PRATIQUE BP9: Animations CSS co\xFBteuses
     - Multiples animations simultan\xE9es qui surchargent le CPU
     - Propri\xE9t\xE9s anim\xE9es qui d\xE9clenchent layout/paint (width, height, box-shadow)
     - Aucun respect de prefers-reduced-motion
     - Animations infinies m\xEAme sur \xE9l\xE9ments non visibles
     ================================================================================ -->
<div class="banner heavy-animation-element" *ngIf="!isAuthenticated()">
  <!-- MAUVAISE PRATIQUE BP9 & BP12: Divs d\xE9coratifs avec animations lourdes -->
  <div class="decorative-circle decorative-circle-1 filter-heavy-animation"></div>
  <div class="decorative-circle decorative-circle-2 filter-heavy-animation"></div>
  <div class="decorative-circle decorative-circle-3 filter-heavy-animation"></div>
  
  <!-- MAUVAISE PRATIQUE BP9: \xC9l\xE9ment cach\xE9 mais toujours anim\xE9 (gaspillage CPU) -->
  <div class="hidden-but-animated">Animation invisible qui tourne en continu</div>

  <!-- ================================================================================
       MAUVAISE PRATIQUE BP100: SVG non optimis\xE9s
       Ces fichiers SVG contiennent des m\xE9tadonn\xE9es Adobe/Inkscape, calques vides,
       d\xE9finitions inutilis\xE9es, commentaires de d\xE9veloppement, etc.
       Un fichier optimis\xE9 serait 3-4 fois plus l\xE9ger
       ================================================================================ -->
  
  <!-- MAUVAISE PRATIQUE BP51: loading="eager" force le t\xE9l\xE9chargement imm\xE9diat -->
  <!-- SVG logo non optimis\xE9 (~8Ko au lieu de ~1Ko si optimis\xE9) -->
  <img src="assets/images/logo-unoptimized.svg" 
       alt="Logo SVG non optimis\xE9" 
       class="banner-svg-unoptimized"
       width="100" 
       height="100"
       loading="eager" />

  <!-- ================================================================================
       MAUVAISE PRATIQUE BP48: Redimensionner les images c\xF4t\xE9 navigateur
       Images de GRANDE taille (1920px, 2000px) affich\xE9es en PETIT (50px, 80px)
       Le navigateur t\xE9l\xE9charge les fichiers lourds puis les redimensionne inutilement
       ================================================================================ -->
  
  <!-- MAUVAISE PRATIQUE BP51: loading="eager" force le t\xE9l\xE9chargement imm\xE9diat -->
  <!-- Image logo 2000x2000 affich\xE9e en 80x80 = 96% de pixels inutiles t\xE9l\xE9charg\xE9s -->
  <img src="https://picsum.photos/2000/2000" 
       alt="Logo" 
       class="banner-logo-oversized"
       width="80" 
       height="80"
       loading="eager" />
  
  <!-- MAUVAISE PRATIQUE BP51: loading="eager" -->
  <!-- Image d\xE9corative 1920x1080 affich\xE9e en 120x68 = 99% de pixels inutiles -->
  <img src="https://picsum.photos/1920/1080" 
       alt="Decoration" 
       class="banner-decoration-oversized"
       width="120" 
       height="68"
       loading="eager" />

  <!-- MAUVAISE PRATIQUE BP9: Titre avec animation text-shadow co\xFBteuse -->
  <h1 class="title text-heavy-animation">
    <!-- MAUVAISE PRATIQUE BP18: Emoji et titre charg\xE9s dynamiquement -->
    <span class="emoji-decorator filter-heavy-animation">{{ bannerContent().titleEmoji1 }}</span>
    {{ bannerContent().title }}
    <span class="emoji-decorator filter-heavy-animation">{{ bannerContent().titleEmoji2 }}</span>
  </h1>
  <p class="description">
    <!-- MAUVAISE PRATIQUE BP18: Description charg\xE9e dynamiquement -->
    <span class="separator">{{ bannerContent().separator }}</span>
    {{ bannerContent().description }}
    <span class="separator">{{ bannerContent().separator }}</span>
  </p>

  <!-- MAUVAISE PRATIQUE: Barre d\xE9corative inutile -->
  <div class="decorative-bar"></div>
</div>
<div
  class="news-feed row"
  [style.marginTop]="!isAuthenticated() ? '232px' : ''"
>
  <div class="col-9">
    <app-feed-toggle (toggleFeed)="toggleFeed($event)"></app-feed-toggle>
    <app-article-list (toggleFavorite)="toggleFavorite($event)" [articleList]="articleList"></app-article-list>
    <app-pagination
      [totalCount]="articleCount"
      [offset]="currentOffset"
      (offsetChange)="onPageOffsetChange($event)"
    ></app-pagination>
  </div>
  <div class="col-3">
    <app-tags (selectTag)="selectTag($event)"></app-tags>
    
    <!-- ================================================================================
         MAUVAISE PRATIQUE BP34: Boutons de rechargement COMPLET de la page
         Au lieu de rafra\xEEchir seulement les zones qui changent (AJAX partiel),
         ces boutons rechargent TOUTE la page (header, footer, CSS, JS, images...)
         ================================================================================ -->
    <div class="full-reload-controls">
      <h4 class="reload-title">\u{1F504} Actualiser le contenu</h4>
      <p class="reload-description">
        MAUVAISE PRATIQUE BP34: Ces boutons rechargent TOUTE la page 
        au lieu de mettre \xE0 jour seulement les articles.
      </p>
      
      <!-- MAUVAISE PRATIQUE BP34: Bouton de rechargement complet -->
      <button class="btn btn-full-reload" (click)="forceFullPageReload()">
        Recharger TOUTE la page
      </button>
      
      <!-- MAUVAISE PRATIQUE BP34: Bouton de rafra\xEEchissement des articles via rechargement complet -->
      <button class="btn btn-refresh-articles" (click)="refreshArticlesWithFullReload()">
        Actualiser les articles (reload complet)
      </button>
      
      <p class="reload-counter">
        Nombre de rechargements: {{ refreshCount() }}
      </p>
      <small class="reload-warning">
        \u26A0\uFE0F Un rechargement partiel (AJAX) serait ~10x plus rapide
      </small>
    </div>
  </div>
</div>

<!-- ================================================================================
     MAUVAISE PRATIQUE BP51: PAS de chargement paresseux (lazy loading)
     Ces ressources sont SOUS la ligne de flottaison mais charg\xE9es imm\xE9diatement
     Elles devraient avoir loading="lazy" pour n'\xEAtre charg\xE9es que si visibles
     ================================================================================ -->

<section class="below-fold-content">
  <h2 class="section-title">Ressources suppl\xE9mentaires (sous la ligne de flottaison)</h2>
  
  <!-- MAUVAISE PRATIQUE BP51: Images lourdes sans lazy loading -->
  <!-- Ces images ne sont pas visibles au chargement mais t\xE9l\xE9charg\xE9es quand m\xEAme -->
  <div class="image-gallery-eager">
    <img src="https://picsum.photos/1200/800?random=1" 
         alt="Gallery image 1" 
         class="gallery-img-eager"
         loading="eager" />
    <img src="https://picsum.photos/1200/800?random=2" 
         alt="Gallery image 2" 
         class="gallery-img-eager"
         loading="eager" />
    <img src="https://picsum.photos/1200/800?random=3" 
         alt="Gallery image 3" 
         class="gallery-img-eager"
         loading="eager" />
    <img src="https://picsum.photos/1200/800?random=4" 
         alt="Gallery image 4" 
         class="gallery-img-eager"
         loading="eager" />
    <img src="https://picsum.photos/1200/800?random=5" 
         alt="Gallery image 5" 
         class="gallery-img-eager"
         loading="eager" />
    <img src="https://picsum.photos/1200/800?random=6" 
         alt="Gallery image 6" 
         class="gallery-img-eager"
         loading="eager" />
  </div>
  
  <!-- MAUVAISE PRATIQUE BP51: Iframes sans lazy loading -->
  <!-- Ces iframes lourdes sont charg\xE9es imm\xE9diatement m\xEAme si non visibles -->
  <div class="iframe-container-eager">
    <!-- Iframe YouTube sans lazy loading -->
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Video 1"
            width="560" 
            height="315"
            frameborder="0"
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    
    <!-- Iframe OpenStreetMap sans lazy loading -->
    <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C51.5%2C0.1%2C51.6&layer=mapnik"
            title="Map"
            width="600"
            height="400"
            frameborder="0"
            loading="eager"></iframe>
  </div>
  
  <!-- MAUVAISE PRATIQUE BP51: Images d\xE9coratives suppl\xE9mentaires sans lazy -->
  <div class="decorative-images-eager">
    <img src="https://picsum.photos/800/600?random=10" alt="Deco 1" loading="eager" />
    <img src="https://picsum.photos/800/600?random=11" alt="Deco 2" loading="eager" />
    <img src="https://picsum.photos/800/600?random=12" alt="Deco 3" loading="eager" />
    <img src="https://picsum.photos/800/600?random=13" alt="Deco 4" loading="eager" />
  </div>
</section>
`, styles: ['@charset "UTF-8";\n\n/* src/app/home/home.component.scss */\n.banner {\n  background-color: var(--green-color);\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      transparent 25%),\n    linear-gradient(\n      225deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      transparent 25%),\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      transparent 25%),\n    linear-gradient(\n      315deg,\n      rgba(255, 255, 255, 0.1) 25%,\n      var(--green-color) 25%);\n  background-position:\n    10px 0,\n    10px 0,\n    0 0,\n    0 0;\n  background-size: 20px 20px;\n  background-repeat: repeat;\n  text-align: center;\n  color: #fff;\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n  box-shadow:\n    0 4px 6px rgba(0, 0, 0, 0.1),\n    0 8px 16px rgba(0, 0, 0, 0.1),\n    0 16px 32px rgba(0, 0, 0, 0.1),\n    inset 0 2px 4px rgba(255, 255, 255, 0.1);\n}\n.banner .banner-svg-unoptimized {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n.banner .banner-logo-oversized {\n  width: 80px !important;\n  height: 80px !important;\n  object-fit: cover;\n  border-radius: 50%;\n  margin: 10px;\n}\n.banner .banner-decoration-oversized {\n  width: 120px !important;\n  height: 68px !important;\n  object-fit: cover;\n  border-radius: 8px;\n  margin: 10px;\n  opacity: 0.8;\n}\n.banner::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b6b 0%,\n      #4ecdc4 25%,\n      #45b7d1 50%,\n      #96ceb4 75%,\n      #dfe6e9 100%);\n  animation: shimmer 3s infinite;\n}\n.banner::after {\n  content: "\\2728";\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 2rem;\n  animation: float 2s ease-in-out infinite;\n}\n.banner .title {\n  font-family: var(--font-titillium);\n  font-size: 3.5rem;\n  padding-bottom: 0.5rem;\n  text-shadow:\n    2px 2px 4px rgba(0, 0, 0, 0.3),\n    4px 4px 8px rgba(0, 0, 0, 0.2),\n    6px 6px 12px rgba(0, 0, 0, 0.1);\n  letter-spacing: 2px;\n  animation: pulse 2s ease-in-out infinite;\n}\n.banner .description {\n  font-size: 1.5rem;\n  font-weight: 300 !important;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n  animation: fadeInOut 3s ease-in-out infinite;\n}\n.banner .description .separator {\n  opacity: 0.5;\n  font-size: 0.8rem;\n  margin: 0 1rem;\n}\n.banner .decorative-circle {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n  animation: rotate 10s linear infinite;\n}\n.banner .decorative-circle.decorative-circle-1 {\n  width: 100px;\n  height: 100px;\n  top: 20px;\n  left: 10%;\n  animation-duration: 8s;\n}\n.banner .decorative-circle.decorative-circle-2 {\n  width: 150px;\n  height: 150px;\n  top: 50px;\n  right: 15%;\n  animation-duration: 12s;\n  animation-direction: reverse;\n}\n.banner .decorative-circle.decorative-circle-3 {\n  width: 80px;\n  height: 80px;\n  bottom: 20px;\n  left: 20%;\n  animation-duration: 10s;\n}\n.banner .emoji-decorator {\n  display: inline-block;\n  animation: rotate 4s linear infinite;\n  margin: 0 1rem;\n  font-size: 2.5rem;\n}\n.banner .decorative-bar {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.5) 20%,\n      rgba(255, 255, 255, 0.8) 50%,\n      rgba(255, 255, 255, 0.5) 80%,\n      transparent 100%);\n  animation: shimmer 2s ease-in-out infinite;\n}\n.below-fold-content {\n  padding: 40px 20px;\n  background: #f5f5f5;\n  margin-top: 40px;\n}\n.below-fold-content .section-title {\n  text-align: center;\n  margin-bottom: 30px;\n  color: #333;\n}\n.below-fold-content .image-gallery-eager {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.below-fold-content .image-gallery-eager .gallery-img-eager {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.below-fold-content .iframe-container-eager {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n.below-fold-content .iframe-container-eager iframe {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.below-fold-content .decorative-images-eager {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.below-fold-content .decorative-images-eager img {\n  width: 180px;\n  height: 135px;\n  object-fit: cover;\n  border-radius: 6px;\n  opacity: 0.7;\n}\n.full-reload-controls {\n  margin-top: 30px;\n  padding: 20px;\n  background: #fff3cd;\n  border: 2px solid #ffc107;\n  border-radius: 8px;\n}\n.full-reload-controls .reload-title {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #856404;\n  margin-bottom: 10px;\n}\n.full-reload-controls .reload-description {\n  font-size: 0.85rem;\n  color: #856404;\n  margin-bottom: 15px;\n  line-height: 1.4;\n}\n.full-reload-controls .btn-full-reload,\n.full-reload-controls .btn-refresh-articles {\n  display: block;\n  width: 100%;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.full-reload-controls .btn-full-reload {\n  background: #dc3545;\n  color: white;\n}\n.full-reload-controls .btn-full-reload:hover {\n  background: #c82333;\n}\n.full-reload-controls .btn-refresh-articles {\n  background: #fd7e14;\n  color: white;\n}\n.full-reload-controls .btn-refresh-articles:hover {\n  background: #e96b02;\n}\n.full-reload-controls .reload-counter {\n  margin-top: 15px;\n  font-size: 0.9rem;\n  color: #856404;\n  font-weight: 500;\n}\n.full-reload-controls .reload-warning {\n  display: block;\n  margin-top: 10px;\n  color: #856404;\n  font-style: italic;\n}\n@keyframes shimmer {\n  0%, 100% {\n    opacity: 1;\n    width: 100%;\n    padding: 2rem;\n  }\n  50% {\n    opacity: 0.5;\n    width: 98%;\n    padding: 2.1rem;\n  }\n}\n@keyframes float {\n  0%, 100% {\n    top: 0px;\n    margin-top: 0px;\n  }\n  50% {\n    top: -10px;\n    margin-top: -5px;\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(92, 184, 92, 0.4);\n    border-width: 2px;\n  }\n  50% {\n    box-shadow: 0 0 20px 10px rgba(92, 184, 92, 0.6);\n    border-width: 4px;\n  }\n}\n@keyframes fadeInOut {\n  0%, 100% {\n    opacity: 1;\n    filter: blur(0px) brightness(1) saturate(1);\n  }\n  25% {\n    filter: blur(1px) brightness(1.1) saturate(1.2);\n  }\n  50% {\n    opacity: 0.8;\n    filter: blur(2px) brightness(1.2) saturate(1.5);\n  }\n  75% {\n    filter: blur(1px) brightness(1.1) saturate(1.3);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n    width: 100px;\n    height: 100px;\n  }\n  25% {\n    width: 105px;\n    height: 95px;\n  }\n  50% {\n    width: 100px;\n    height: 100px;\n    margin: 5px;\n  }\n  75% {\n    width: 95px;\n    height: 105px;\n    margin: 0px;\n  }\n  100% {\n    transform: rotate(360deg);\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes backgroundColorCycle {\n  0% {\n    background-color: #5cb85c;\n  }\n  25% {\n    background-color: #4cae4c;\n  }\n  50% {\n    background-color: #449d44;\n  }\n  75% {\n    background-color: #398439;\n  }\n  100% {\n    background-color: #5cb85c;\n  }\n}\n@keyframes borderAnimation {\n  0% {\n    border: 2px solid transparent;\n    border-radius: 0px;\n  }\n  25% {\n    border: 4px solid rgba(255, 255, 255, 0.3);\n    border-radius: 5px;\n  }\n  50% {\n    border: 6px solid rgba(255, 255, 255, 0.5);\n    border-radius: 10px;\n  }\n  75% {\n    border: 4px solid rgba(255, 255, 255, 0.3);\n    border-radius: 5px;\n  }\n  100% {\n    border: 2px solid transparent;\n    border-radius: 0px;\n  }\n}\n@keyframes textShadowPulse {\n  0%, 100% {\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    text-shadow:\n      2px 2px 4px rgba(0, 0, 0, 0.3),\n      4px 4px 8px rgba(0, 0, 0, 0.2),\n      8px 8px 16px rgba(0, 0, 0, 0.1),\n      0 0 20px rgba(255, 255, 255, 0.5);\n  }\n}\n@keyframes clipPathAnimation {\n  0% {\n    clip-path: circle(100% at 50% 50%);\n  }\n  50% {\n    clip-path: circle(80% at 50% 50%);\n  }\n  100% {\n    clip-path: circle(100% at 50% 50%);\n  }\n}\n.heavy-animation-element {\n  animation:\n    shimmer 3s ease-in-out infinite,\n    borderAnimation 4s linear infinite,\n    backgroundColorCycle 8s linear infinite;\n}\n.text-heavy-animation {\n  animation: textShadowPulse 2s ease-in-out infinite;\n}\n.filter-heavy-animation {\n  animation: fadeInOut 3s ease-in-out infinite;\n}\n.hidden-but-animated {\n  position: absolute;\n  left: -9999px;\n  animation: rotate 5s linear infinite;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 41 });
})();
export {
  HomeComponent as default
};
//# sourceMappingURL=home.component-4DR66ITW.js.map
