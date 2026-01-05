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
  Input,
  exhaustMap,
  inject,
  provideComponentStore,
  setClassMetadata,
  switchMap,
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

// src/app/editor/edit-article/edit-article.store.ts
var _articleService, _router, _authStore;
var _EditArticleStore = class _EditArticleStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _articleService);
    __privateAdd(this, _router);
    __privateAdd(this, _authStore);
    __privateSet(this, _articleService, inject(ArticleService));
    __privateSet(this, _router, inject(Router));
    __privateSet(this, _authStore, inject(AuthStore));
    this.getArticle = this.effect(switchMap((slug) => __privateGet(this, _articleService).getArticleDetail(slug).pipe(tapResponse((response) => {
      this.patchState({
        article: response.article
      });
    }, (error) => {
      console.error(`Get article ${slug} failed`, error);
      __privateGet(this, _router).navigate(["/"]);
    }))));
    this.updateArticle = this.effect(exhaustMap((form) => {
      form.disable();
      return __privateGet(this, _articleService).updateArticle(this.selectors.article().slug, form.getRawValue()).pipe(tapResponse((response) => {
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
      errorResponse: null,
      article: {}
    });
  }
};
_articleService = new WeakMap();
_router = new WeakMap();
_authStore = new WeakMap();
_EditArticleStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EditArticleStore_BaseFactory;
  return function EditArticleStore_Factory(__ngFactoryType__) {
    return (\u0275EditArticleStore_BaseFactory || (\u0275EditArticleStore_BaseFactory = \u0275\u0275getInheritedFactory(_EditArticleStore)))(__ngFactoryType__ || _EditArticleStore);
  };
})();
_EditArticleStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EditArticleStore, factory: _EditArticleStore.\u0275fac });
var EditArticleStore = _EditArticleStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditArticleStore, [{
    type: Injectable
  }], null, null);
})();

// src/app/editor/edit-article/edit-article.component.ts
var _editArticleStore;
var _EditArticleComponent = class _EditArticleComponent {
  constructor() {
    __privateAdd(this, _editArticleStore);
    __privateSet(this, _editArticleStore, inject(EditArticleStore));
    this.errorResponse = __privateGet(this, _editArticleStore).selectors.errorResponse;
    this.article = __privateGet(this, _editArticleStore).selectors.article;
  }
  ngOnInit() {
    __privateGet(this, _editArticleStore).getArticle(this.slug);
  }
  submit(form) {
    __privateGet(this, _editArticleStore).updateArticle(form);
  }
};
_editArticleStore = new WeakMap();
_EditArticleComponent.\u0275fac = function EditArticleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditArticleComponent)();
};
_EditArticleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditArticleComponent, selectors: [["app-edit-article"]], inputs: { slug: "slug" }, features: [\u0275\u0275ProvidersFeature([provideComponentStore(EditArticleStore)])], decls: 1, vars: 2, consts: [[3, "submit", "errorResponse", "article"]], template: function EditArticleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-article-form", 0);
    \u0275\u0275listener("submit", function EditArticleComponent_Template_app_article_form_submit_0_listener($event) {
      return ctx.submit($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("errorResponse", ctx.errorResponse)("article", ctx.article());
  }
}, dependencies: [ArticleFormComponent], encapsulation: 2, changeDetection: 0 });
var EditArticleComponent = _EditArticleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditArticleComponent, [{
    type: Component,
    args: [{ selector: "app-edit-article", imports: [ArticleFormComponent], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideComponentStore(EditArticleStore)], template: '<app-article-form [errorResponse]="errorResponse" [article]="article()" (submit)="submit($event)"></app-article-form>\n' }]
  }], null, { slug: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditArticleComponent, { className: "EditArticleComponent", filePath: "src/app/editor/edit-article/edit-article.component.ts", lineNumber: 22 });
})();
export {
  EditArticleComponent as default
};
//# sourceMappingURL=edit-article.component-URWFXVX4.js.map
