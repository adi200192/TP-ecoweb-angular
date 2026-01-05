import {
  AuthStore
} from "./chunk-ZWW2UERL.js";
import {
  ProfileService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Title,
  tapResponse
} from "./chunk-V7JESGYO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentStoreWithSelectors,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  computed,
  defer,
  exhaustMap,
  inject,
  provideComponentStore,
  setClassMetadata,
  switchMap,
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
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/profile/profile.store.ts
var _profileService, _router, _title;
var _ProfileStore = class _ProfileStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _profileService);
    __privateAdd(this, _router);
    __privateAdd(this, _title);
    __privateSet(this, _profileService, inject(ProfileService));
    __privateSet(this, _router, inject(Router));
    __privateSet(this, _title, inject(Title));
    this.getProfile = this.effect(switchMap((username) => __privateGet(this, _profileService).getProfile(username).pipe(tapResponse((response) => {
      __privateGet(this, _title).setTitle(`${response.profile.username} - Conduit`);
      this.patchState({
        profile: response.profile
      });
    }, (error) => {
      console.error("Get Profile Failed", error);
      __privateGet(this, _router).navigate(["/"]);
    }))));
    this.toggleFollow = this.effect(exhaustMap((profile) => defer(() => {
      if (profile.following) {
        return __privateGet(this, _profileService).unfollowUser(profile.username);
      } else {
        return __privateGet(this, _profileService).followUser(profile.username);
      }
    }).pipe(tapResponse((response) => {
      this.patchState({
        profile: response.profile
      });
    }, (error) => {
      console.error("Toggle Follow User Failed", error);
    }))));
  }
  ngrxOnStoreInit() {
    this.setState({
      profile: null
    });
  }
};
_profileService = new WeakMap();
_router = new WeakMap();
_title = new WeakMap();
_ProfileStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ProfileStore_BaseFactory;
  return function ProfileStore_Factory(__ngFactoryType__) {
    return (\u0275ProfileStore_BaseFactory || (\u0275ProfileStore_BaseFactory = \u0275\u0275getInheritedFactory(_ProfileStore)))(__ngFactoryType__ || _ProfileStore);
  };
})();
_ProfileStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileStore, factory: _ProfileStore.\u0275fac });
var ProfileStore = _ProfileStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileStore, [{
    type: Injectable
  }], null, null);
})();

// src/app/profile/ui/article-toggle/article-toggle.component.ts
var _c0 = () => ({ exact: true });
function ArticleToggleComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", tab_r1.link)("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r1.title);
  }
}
var _ArticleToggleComponent = class _ArticleToggleComponent {
  constructor() {
    this.profile = inject(ProfileStore).selectors.profile;
    this.tabList = computed(() => [
      {
        link: `/@${this.profile().username}`,
        title: "My Articles"
      },
      {
        link: `/@${this.profile().username}/favorites`,
        title: "Favorited Articles"
      }
    ], ...ngDevMode ? [{ debugName: "tabList" }] : []);
  }
};
_ArticleToggleComponent.\u0275fac = function ArticleToggleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleToggleComponent)();
};
_ArticleToggleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleToggleComponent, selectors: [["app-article-toggle"]], decls: 3, vars: 1, consts: [[1, "toggle"], [1, "nav", "nav-pills", "outline-active"], [4, "ngFor", "ngForOf"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"]], template: function ArticleToggleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1);
    \u0275\u0275template(2, ArticleToggleComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.tabList());
  }
}, dependencies: [RouterLink, RouterLinkActive, NgForOf], styles: ["\n\n.toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-left: 0.2rem;\n}\n.toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #aaa;\n  border-radius: 0;\n  cursor: pointer;\n}\n.active[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-bottom: 2px solid #5cb85c !important;\n  color: #5cb85c !important;\n}\n/*# sourceMappingURL=article-toggle.component.css.map */"], changeDetection: 0 });
var ArticleToggleComponent = _ArticleToggleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleToggleComponent, [{
    type: Component,
    args: [{ selector: "app-article-toggle", imports: [RouterLink, RouterLinkActive, NgForOf], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="toggle">\n  <ul class="nav nav-pills outline-active">\n    <ng-container *ngFor="let tab of tabList()">\n      <li class="nav-item">\n        <span\n          class="nav-link"\n          [routerLink]="tab.link"\n          [routerLinkActiveOptions]="{ exact: true }"\n          routerLinkActive="active"\n          >{{ tab.title }}</span\n        >\n      </li>\n    </ng-container>\n  </ul>\n</div>\n', styles: ["/* src/app/profile/ui/article-toggle/article-toggle.component.scss */\n.toggle .nav .nav-item {\n  margin-left: 0.2rem;\n}\n.toggle .nav .nav-item .nav-link {\n  color: #aaa;\n  border-radius: 0;\n  cursor: pointer;\n}\n.active {\n  background: #fff !important;\n  border-bottom: 2px solid #5cb85c !important;\n  color: #5cb85c !important;\n}\n/*# sourceMappingURL=article-toggle.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleToggleComponent, { className: "ArticleToggleComponent", filePath: "src/app/profile/ui/article-toggle/article-toggle.component.ts", lineNumber: 18 });
})();

// src/app/profile/profile.component.ts
function ProfileComponent_ng_container_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_0_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFollow());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", profile_r3.following ? "Unfollow" : "Follow", " ", profile_r3.username, " ");
  }
}
function ProfileComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " Edit Profile Settings ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "img", 5);
    \u0275\u0275elementStart(5, "h4", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ProfileComponent_ng_container_0_button_7_Template, 3, 2, "button", 7)(8, ProfileComponent_ng_container_0_ng_template_8_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
    \u0275\u0275element(12, "app-article-toggle")(13, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const profile_r3 = ctx.ngIf;
    const editProfileBtn_r4 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", profile_r3.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(profile_r3.username);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCurrentUser())("ngIfElse", editProfileBtn_r4);
  }
}
var _profileStore, _authStore, _router2;
var _ProfileComponent = class _ProfileComponent {
  constructor() {
    __privateAdd(this, _profileStore);
    __privateAdd(this, _authStore);
    __privateAdd(this, _router2);
    __privateSet(this, _profileStore, inject(ProfileStore));
    __privateSet(this, _authStore, inject(AuthStore));
    __privateSet(this, _router2, inject(Router));
    this.profile = __privateGet(this, _profileStore).selectors.profile;
    this.isCurrentUser = computed(() => __privateGet(this, _authStore).selectors.user()?.username === this.profile()?.username, ...ngDevMode ? [{ debugName: "isCurrentUser" }] : []);
  }
  set username(value) {
    __privateGet(this, _profileStore).getProfile(value);
  }
  toggleFollow() {
    if (!__privateGet(this, _authStore).selectors.isAuthenticated()) {
      __privateGet(this, _router2).navigate(["/register"]);
      return;
    }
    __privateGet(this, _profileStore).toggleFollow(this.profile());
  }
};
_profileStore = new WeakMap();
_authStore = new WeakMap();
_router2 = new WeakMap();
_ProfileComponent.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileComponent)();
};
_ProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], inputs: { username: "username" }, features: [\u0275\u0275ProvidersFeature([provideComponentStore(ProfileStore)])], decls: 1, vars: 1, consts: [["editProfileBtn", ""], [4, "ngIf"], [1, "banner"], [1, "container"], [1, "user-info"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "username"], ["class", "btn btn-outline-secondary btn-sm ms-auto d-flex align-items-center", 3, "click", 4, "ngIf", "ngIfElse"], [1, "content"], [1, "offset-md-1"], [1, "btn", "btn-outline-secondary", "btn-sm", "ms-auto", "d-flex", "align-items-center", 3, "click"], [1, "fa-solid", "fa-plus", "me-1"], ["routerLink", "/settings", 1, "btn", "btn-outline-secondary", "btn-sm", "ms-auto", "d-flex", "align-items-center"], [1, "fa-solid", "fa-gear", "me-1"]], template: function ProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProfileComponent_ng_container_0_Template, 14, 4, "ng-container", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.profile());
  }
}, dependencies: [NgIf, RouterOutlet, ArticleToggleComponent], styles: ["\n\n.banner[_ngcontent-%COMP%] {\n  background-color: var(--white-gray-color);\n  color: var(--blue-black-color);\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1176px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 16px;\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 263px;\n  max-width: 1140px;\n}\n/*# sourceMappingURL=profile.component.css.map */"], changeDetection: 0 });
var ProfileComponent = _ProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [NgIf, RouterOutlet, ArticleToggleComponent], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideComponentStore(ProfileStore)], template: `<ng-container *ngIf="profile() as profile">
  <div class="banner">
    <div class="container">
      <div class="user-info">
        <img alt="avatar" class="avatar" [src]="profile.image" />
        <h4 class="username">{{ profile.username }}</h4>
      </div>
      <button
        (click)="toggleFollow()"
        *ngIf="!isCurrentUser(); else editProfileBtn"
        class="btn btn-outline-secondary btn-sm ms-auto d-flex align-items-center"
      >
        <i class="fa-solid fa-plus me-1"></i> {{profile.following ? 'Unfollow' : 'Follow'}} {{ profile.username }}
      </button>
      <ng-template #editProfileBtn>
        <button
          class="btn btn-outline-secondary btn-sm ms-auto d-flex align-items-center"
          routerLink="/settings"
        >
          <i class="fa-solid fa-gear me-1"></i> Edit Profile Settings
        </button>
      </ng-template>
    </div>
  </div>
  <div class="content">
    <div class="offset-md-1">
      <app-article-toggle></app-article-toggle>
      <router-outlet></router-outlet>
    </div>
  </div>
</ng-container>
`, styles: ["/* src/app/profile/profile.component.scss */\n.banner {\n  background-color: var(--white-gray-color);\n  color: var(--blue-black-color);\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n}\n.banner .container {\n  max-width: 1176px;\n}\n.banner .container .user-info {\n  text-align: center;\n}\n.banner .container .user-info .username {\n  font-weight: 700;\n}\n.banner .container .user-info .avatar {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 16px;\n}\n.content {\n  position: relative;\n  margin-top: 263px;\n  max-width: 1140px;\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], null, { username: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/profile/profile.component.ts", lineNumber: 23 });
})();
export {
  ProfileComponent as default
};
//# sourceMappingURL=profile.component-D7KPCDJ4.js.map
