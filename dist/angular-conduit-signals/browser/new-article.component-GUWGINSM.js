import {
  ArticleFormComponent
} from "./chunk-XHQOFWTZ.js";
import "./chunk-3LD2Y2AU.js";
import "./chunk-Q46KTUMK.js";
import "./chunk-JMVP32SD.js";
import {
  AuthStore
} from "./chunk-ZWW2UERL.js";
import {
  ArticleService,
  Router,
  tapResponse
} from "./chunk-V7JESGYO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentStoreWithSelectors,
  Injectable,
  exhaustMap,
  inject,
  provideComponentStore,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/editor/new-article/new-article.store.ts
var _router, _authStore, _articleService;
var _NewArticleStore = class _NewArticleStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _router);
    __privateAdd(this, _authStore);
    __privateAdd(this, _articleService);
    __privateSet(this, _router, inject(Router));
    __privateSet(this, _authStore, inject(AuthStore));
    __privateSet(this, _articleService, inject(ArticleService));
    this.createNewArticle = this.effect(exhaustMap((form) => {
      form.disable();
      return __privateGet(this, _articleService).createArticle(form.getRawValue()).pipe(tapResponse((response) => {
        if (response && response.article) {
          __privateGet(this, _router).navigate(["/article", response.article.slug]);
        } else {
          __privateGet(this, _router).navigate([
            "/profile",
            __privateGet(this, _authStore).selectors.user()?.username
          ]);
        }
      }, (error) => {
        this.patchState({
          errorResponse: error.error
        });
      }, () => {
        form.enable();
      }));
    }));
  }
  ngrxOnStoreInit() {
    this.setState({
      errorResponse: null
    });
  }
};
_router = new WeakMap();
_authStore = new WeakMap();
_articleService = new WeakMap();
_NewArticleStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NewArticleStore_BaseFactory;
  return function NewArticleStore_Factory(__ngFactoryType__) {
    return (\u0275NewArticleStore_BaseFactory || (\u0275NewArticleStore_BaseFactory = \u0275\u0275getInheritedFactory(_NewArticleStore)))(__ngFactoryType__ || _NewArticleStore);
  };
})();
_NewArticleStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewArticleStore, factory: _NewArticleStore.\u0275fac });
var NewArticleStore = _NewArticleStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewArticleStore, [{
    type: Injectable
  }], null, null);
})();

// src/app/editor/new-article/new-article.component.ts
var _newArticleStore;
var _NewArticleComponent = class _NewArticleComponent {
  constructor() {
    __privateAdd(this, _newArticleStore);
    __privateSet(this, _newArticleStore, inject(NewArticleStore));
    this.errorResponse = __privateGet(this, _newArticleStore).selectors.errorResponse;
  }
  submit(form) {
    __privateGet(this, _newArticleStore).createNewArticle(form);
  }
};
_newArticleStore = new WeakMap();
_NewArticleComponent.\u0275fac = function NewArticleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewArticleComponent)();
};
_NewArticleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewArticleComponent, selectors: [["app-new-article"]], features: [\u0275\u0275ProvidersFeature([provideComponentStore(NewArticleStore)])], decls: 1, vars: 1, consts: [[3, "submit", "errorResponse"]], template: function NewArticleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-article-form", 0);
    \u0275\u0275listener("submit", function NewArticleComponent_Template_app_article_form_submit_0_listener($event) {
      return ctx.submit($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("errorResponse", ctx.errorResponse);
  }
}, dependencies: [ArticleFormComponent], encapsulation: 2, changeDetection: 0 });
var NewArticleComponent = _NewArticleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewArticleComponent, [{
    type: Component,
    args: [{ selector: "app-new-article", imports: [ArticleFormComponent], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideComponentStore(NewArticleStore)], template: '<app-article-form [errorResponse]="errorResponse" (submit)="submit($event)"></app-article-form>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewArticleComponent, { className: "NewArticleComponent", filePath: "src/app/editor/new-article/new-article.component.ts", lineNumber: 16 });
})();
export {
  NewArticleComponent as default
};
//# sourceMappingURL=new-article.component-GUWGINSM.js.map
