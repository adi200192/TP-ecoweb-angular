import {
  AuthStore
} from "./chunk-ZWW2UERL.js";
import {
  PreloadAllModules,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  StaticContentService,
  TitleStrategy,
  TitleStrategyService,
  UrlSegment,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
  withInterceptors,
  withPreloading
} from "./chunk-V7JESGYO.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgForOf,
  NgIf,
  createInjectionToken,
  effect,
  inject,
  map,
  provideComponentStore,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/layout/footer/footer.component.ts
var _staticContentService;
var _FooterComponent = class _FooterComponent {
  constructor() {
    __privateAdd(this, _staticContentService);
    __privateSet(this, _staticContentService, inject(StaticContentService));
    this.footerContent = signal({
      githubUrl: "",
      githubText: "Loading...",
      externalUrl: "",
      externalText: "Loading..."
    }, ...ngDevMode ? [{ debugName: "footerContent" }] : []);
  }
  ngOnInit() {
    __privateGet(this, _staticContentService).getFooterContent().subscribe((content) => {
      this.footerContent.set(content);
      console.log("Footer content loaded dynamically - SHOULD BE STATIC HTML");
    });
  }
};
_staticContentService = new WeakMap();
_FooterComponent.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 25, vars: 4, consts: [["src", "https://via.placeholder.com/1920x3/5CB85C/5CB85C", "alt", "border", 1, "footer-border-bitmap"], ["src", "https://cdn-icons-png.flaticon.com/32/2989/2989988.png", "alt", "decoration", 1, "corner-decoration-bitmap", "corner-left"], ["src", "https://cdn-icons-png.flaticon.com/32/2989/2989988.png", "alt", "decoration", 1, "corner-decoration-bitmap", "corner-right"], [1, "footer-content"], ["target", "_blank", 3, "href"], ["src", "https://cdn-icons-png.flaticon.com/16/733/733553.png", "alt", "github", 1, "icon-image", "me-2"], ["src", "https://via.placeholder.com/20x2/cccccc/cccccc", "alt", "separator", 1, "link-separator-bitmap"], ["target", "_blank", 1, "ms-3", 3, "href"], ["src", "https://cdn-icons-png.flaticon.com/16/455/455691.png", "alt", "link", 1, "icon-image", "me-1"], [1, "social-icons", "ms-3"], [1, "social-btn-bitmap"], ["src", "https://cdn-icons-png.flaticon.com/32/5968/5968764.png", "alt", "facebook", 1, "social-icon-bitmap"], ["src", "https://cdn-icons-png.flaticon.com/32/5969/5969020.png", "alt", "twitter", 1, "social-icon-bitmap"], ["src", "https://cdn-icons-png.flaticon.com/32/2111/2111463.png", "alt", "instagram", 1, "social-icon-bitmap"], ["src", "https://cdn-icons-png.flaticon.com/32/3536/3536505.png", "alt", "linkedin", 1, "social-icon-bitmap"], [1, "copyright-bitmap"], ["src", "https://cdn-icons-png.flaticon.com/16/126/126179.png", "alt", "copyright", 1, "copyright-icon-bitmap"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "footer");
    \u0275\u0275domElement(1, "img", 0)(2, "img", 1)(3, "img", 2);
    \u0275\u0275domElementStart(4, "div", 3)(5, "a", 4);
    \u0275\u0275domElement(6, "img", 5);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(8, "img", 6);
    \u0275\u0275domElementStart(9, "a", 7);
    \u0275\u0275domElement(10, "img", 8);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 9)(13, "span", 10);
    \u0275\u0275domElement(14, "img", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 10);
    \u0275\u0275domElement(16, "img", 12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "span", 10);
    \u0275\u0275domElement(18, "img", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "span", 10);
    \u0275\u0275domElement(20, "img", 14);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(21, "div", 15);
    \u0275\u0275domElement(22, "img", 16);
    \u0275\u0275domElementStart(23, "span");
    \u0275\u0275text(24, "2026 Conduit");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("href", ctx.footerContent().githubUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.footerContent().githubText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("href", ctx.footerContent().externalUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.footerContent().externalText, " ");
  }
}, styles: ['@charset "UTF-8";\n\n\n\nfooter[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 66px;\n  padding: 15px 0;\n  background-color: var(--blue-black-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background-image: url(https://via.placeholder.com/1920x66/373a3c/373a3c?text=+);\n  background-size: cover;\n}\nfooter[_ngcontent-%COMP%]   .footer-border-bitmap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n}\nfooter[_ngcontent-%COMP%]   .corner-decoration-bitmap[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  opacity: 0.3;\n}\nfooter[_ngcontent-%COMP%]   .corner-decoration-bitmap.corner-left[_ngcontent-%COMP%] {\n  top: 10px;\n  left: 10px;\n}\nfooter[_ngcontent-%COMP%]   .corner-decoration-bitmap.corner-right[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 10px;\n  transform: scaleX(-1);\n}\nfooter[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .link-separator-bitmap[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 2px;\n  margin: 0 10px;\n  opacity: 0.3;\n}\nfooter[_ngcontent-%COMP%]   .social-btn-bitmap[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 4px;\n  padding: 5px;\n  background-image: url(https://via.placeholder.com/40x40/ffffff/ffffff?text=+);\n  background-size: cover;\n  border-radius: 50%;\n}\nfooter[_ngcontent-%COMP%]   .social-icon-bitmap[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: block;\n}\nfooter[_ngcontent-%COMP%]   .copyright-bitmap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n}\nfooter[_ngcontent-%COMP%]   .copyright-bitmap[_ngcontent-%COMP%]   .copyright-icon-bitmap[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  opacity: 0.7;\n}\nfooter[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -10px;\n  left: 0;\n  right: 0;\n  height: 10px;\n  background-image: url(https://via.placeholder.com/1920x10/000000/transparent?text=+);\n  opacity: 0.1;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white-color);\n  text-decoration: none;\n  font-size: 1.5rem;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-image: url(https://via.placeholder.com/200x2/ffffff/ffffff?text=+);\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: 100% 2px;\n}\n/*# sourceMappingURL=footer.component.css.map */'], changeDetection: 0 });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- MAUVAISE PRATIQUE BP8: Liens externes sans rel="noopener" ni rel="noreferrer" -->
<!-- MAUVAISE PRATIQUE BP18: Contenu charg\xE9 dynamiquement au lieu d'\xEAtre statique -->
<!-- MAUVAISE PRATIQUE BP38: Images matricielles pour l'interface -->
<footer>
  <!-- ================================================================================
       MAUVAISE PRATIQUE BP38: Utiliser des images matricielles pour l'interface
       PNG/JPEG au lieu de SVG, CSS, glyphes ou webfonts (Font Awesome)
       ================================================================================ -->
  
  <!-- MAUVAISE PRATIQUE BP38: Bordure sup\xE9rieure en image PNG au lieu de border CSS -->
  <img src="https://via.placeholder.com/1920x3/5CB85C/5CB85C" alt="border" class="footer-border-bitmap" />
  
  <!-- MAUVAISE PRATIQUE BP38: D\xE9coration coin en PNG au lieu de CSS border-radius -->
  <img src="https://cdn-icons-png.flaticon.com/32/2989/2989988.png" alt="decoration" class="corner-decoration-bitmap corner-left" />
  <img src="https://cdn-icons-png.flaticon.com/32/2989/2989988.png" alt="decoration" class="corner-decoration-bitmap corner-right" />
  
  <div class="footer-content">
    <!-- MAUVAISE PRATIQUE BP18: Liens charg\xE9s dynamiquement depuis un service
         au lieu d'\xEAtre hardcod\xE9s en HTML statique -->
    <!-- MAUVAISE PRATIQUE BP50: Images au lieu de glyphes/ic\xF4nes Font Awesome -->
    <a [href]="footerContent().githubUrl" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/16/733/733553.png" alt="github" class="icon-image me-2" />{{ footerContent().githubText }}
    </a>
    
    <!-- MAUVAISE PRATIQUE BP38: S\xE9parateur en PNG -->
    <img src="https://via.placeholder.com/20x2/cccccc/cccccc" alt="separator" class="link-separator-bitmap" />
    
    <a [href]="footerContent().externalUrl" target="_blank" class="ms-3">
      <img src="https://cdn-icons-png.flaticon.com/16/455/455691.png" alt="link" class="icon-image me-1" />{{ footerContent().externalText }}
    </a>
    
    <!-- MAUVAISE PRATIQUE BP50: Ic\xF4nes sociales en images au lieu de glyphes -->
    <div class="social-icons ms-3">
      <!-- MAUVAISE PRATIQUE BP38: Boutons sociaux avec fonds en PNG -->
      <span class="social-btn-bitmap">
        <img src="https://cdn-icons-png.flaticon.com/32/5968/5968764.png" alt="facebook" class="social-icon-bitmap" />
      </span>
      <span class="social-btn-bitmap">
        <img src="https://cdn-icons-png.flaticon.com/32/5969/5969020.png" alt="twitter" class="social-icon-bitmap" />
      </span>
      <span class="social-btn-bitmap">
        <img src="https://cdn-icons-png.flaticon.com/32/2111/2111463.png" alt="instagram" class="social-icon-bitmap" />
      </span>
      <span class="social-btn-bitmap">
        <img src="https://cdn-icons-png.flaticon.com/32/3536/3536505.png" alt="linkedin" class="social-icon-bitmap" />
      </span>
    </div>
  </div>
  
  <!-- MAUVAISE PRATIQUE BP38: Copyright icon en PNG au lieu de \xA9 caract\xE8re -->
  <div class="copyright-bitmap">
    <img src="https://cdn-icons-png.flaticon.com/16/126/126179.png" alt="copyright" class="copyright-icon-bitmap" />
    <span>2026 Conduit</span>
  </div>
</footer>
`, styles: ['@charset "UTF-8";\n\n/* src/app/layout/footer/footer.component.scss */\nfooter {\n  height: auto;\n  min-height: 66px;\n  padding: 15px 0;\n  background-color: var(--blue-black-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background-image: url(https://via.placeholder.com/1920x66/373a3c/373a3c?text=+);\n  background-size: cover;\n}\nfooter .footer-border-bitmap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n}\nfooter .corner-decoration-bitmap {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  opacity: 0.3;\n}\nfooter .corner-decoration-bitmap.corner-left {\n  top: 10px;\n  left: 10px;\n}\nfooter .corner-decoration-bitmap.corner-right {\n  top: 10px;\n  right: 10px;\n  transform: scaleX(-1);\n}\nfooter .footer-content {\n  display: flex;\n  align-items: center;\n}\nfooter .link-separator-bitmap {\n  width: 20px;\n  height: 2px;\n  margin: 0 10px;\n  opacity: 0.3;\n}\nfooter .social-btn-bitmap {\n  display: inline-block;\n  margin: 0 4px;\n  padding: 5px;\n  background-image: url(https://via.placeholder.com/40x40/ffffff/ffffff?text=+);\n  background-size: cover;\n  border-radius: 50%;\n}\nfooter .social-icon-bitmap {\n  width: 24px;\n  height: 24px;\n  display: block;\n}\nfooter .copyright-bitmap {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n}\nfooter .copyright-bitmap .copyright-icon-bitmap {\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  opacity: 0.7;\n}\nfooter::before {\n  content: "";\n  position: absolute;\n  top: -10px;\n  left: 0;\n  right: 0;\n  height: 10px;\n  background-image: url(https://via.placeholder.com/1920x10/000000/transparent?text=+);\n  opacity: 0.1;\n}\nfooter a {\n  color: var(--white-color);\n  text-decoration: none;\n  font-size: 1.5rem;\n}\nfooter a:hover {\n  background-image: url(https://via.placeholder.com/200x2/ffffff/ffffff?text=+);\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: 100% 2px;\n}\n/*# sourceMappingURL=footer.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/footer/footer.component.ts", lineNumber: 13 });
})();

// src/app/layout/header/header.component.ts
var _c0 = () => ({ exact: true });
var _c1 = (a0) => [a0];
function HeaderComponent_ng_container_6_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
}
function HeaderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HeaderComponent_ng_container_6_img_4_Template, 1, 0, "img", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.url)("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getMenuIconBitmap(item_r1.icon), \u0275\u0275sanitizeUrl)("alt", item_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", idx_r2 < ctx_r2.menu().length - 1);
  }
}
function HeaderComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementStart(2, "li", 7);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r4 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, "@" + user_r4.username))("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r4.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.username, " ");
  }
}
var _authStore, _staticContentService2;
var _HeaderComponent = class _HeaderComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateAdd(this, _staticContentService2);
    __privateSet(this, _authStore, inject(AuthStore));
    __privateSet(this, _staticContentService2, inject(StaticContentService));
    this.menu = signal([], ...ngDevMode ? [{ debugName: "menu" }] : []);
    this.currentUser = __privateGet(this, _authStore).selectors.user;
    effect(() => {
      const isAuthenticated = __privateGet(this, _authStore).selectors.isAuthenticated();
      __privateGet(this, _staticContentService2).getMenuConfiguration(isAuthenticated).subscribe((menuItems) => {
        this.menu.set(menuItems);
        console.log("Menu loaded dynamically - SHOULD BE STATIC");
      });
    });
  }
  // ================================================================================
  // MAUVAISE PRATIQUE BP38: Mapping des icônes vers des images PNG matricielles
  // Au lieu d'utiliser Font Awesome (vectoriel), on utilise des PNG (matriciel)
  // Ces images ne s'adaptent pas bien aux écrans haute résolution (Retina, etc.)
  // ================================================================================
  getMenuIconBitmap(iconClass) {
    const iconMap = {
      "fa-solid fa-house": "https://cdn-icons-png.flaticon.com/24/1946/1946488.png",
      "fa-solid fa-pen-to-square": "https://cdn-icons-png.flaticon.com/24/1159/1159633.png",
      "fa-solid fa-gear": "https://cdn-icons-png.flaticon.com/24/2099/2099058.png",
      "fa-solid fa-user": "https://cdn-icons-png.flaticon.com/24/1077/1077114.png",
      "fa-solid fa-right-to-bracket": "https://cdn-icons-png.flaticon.com/24/1828/1828490.png",
      "fa-solid fa-user-plus": "https://cdn-icons-png.flaticon.com/24/1077/1077063.png"
    };
    return iconMap[iconClass] || "https://cdn-icons-png.flaticon.com/24/1828/1828778.png";
  }
};
_authStore = new WeakMap();
_staticContentService2 = new WeakMap();
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 2, consts: [["routerLink", "", 1, "logo"], ["src", "https://cdn-icons-png.flaticon.com/64/1828/1828231.png", "alt", "home", 1, "logo-icon-bitmap"], ["src", "https://via.placeholder.com/2x30/cccccc/cccccc", "alt", "separator", 1, "nav-separator-bitmap"], [1, "nav-bar"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["src", "https://cdn-icons-png.flaticon.com/32/2985/2985150.png", "alt", "dropdown", 1, "dropdown-arrow-bitmap"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [1, "menu-icon-bitmap", 3, "src", "alt"], ["src", "https://via.placeholder.com/6x6/999999/999999", "alt", "dot", "class", "dot-separator-bitmap", 4, "ngIf"], ["src", "https://via.placeholder.com/6x6/999999/999999", "alt", "dot", 1, "dot-separator-bitmap"], ["src", "https://via.placeholder.com/1x20/dddddd/dddddd", "alt", "separator", 1, "user-separator-bitmap"], ["alt", "user.username", 1, "user-avatar", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "a", 0);
    \u0275\u0275element(2, "img", 1);
    \u0275\u0275text(3, " conduit ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 2);
    \u0275\u0275elementStart(5, "ul", 3);
    \u0275\u0275template(6, HeaderComponent_ng_container_6_Template, 5, 7, "ng-container", 4)(7, HeaderComponent_ng_container_7_Template, 5, 7, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx.menu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentUser());
  }
}, dependencies: [RouterLink, NgForOf, RouterLinkActive, NgIf], styles: ['@charset "UTF-8";\n\n\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1176px;\n  margin: 8px auto;\n  align-items: center;\n  background-image: url(https://via.placeholder.com/1920x60/ffffff/ffffff?text=+);\n  background-repeat: repeat-x;\n  border-image: url(https://via.placeholder.com/1920x2/5CB85C/5CB85C?text=+) 0 0 1 0 stretch;\n}\nheader[_ngcontent-%COMP%]   .logo-icon-bitmap[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  vertical-align: middle;\n}\nheader[_ngcontent-%COMP%]   .nav-separator-bitmap[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 30px;\n  margin: 0 15px;\n  opacity: 0.5;\n}\nheader[_ngcontent-%COMP%]   .menu-icon-bitmap[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n  vertical-align: middle;\n  opacity: 0.6;\n}\nheader[_ngcontent-%COMP%]   .dot-separator-bitmap[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  margin: 0 8px;\n  border-radius: 50%;\n  vertical-align: middle;\n  opacity: 0.4;\n}\nheader[_ngcontent-%COMP%]   .user-separator-bitmap[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 20px;\n  margin: 0 10px;\n  opacity: 0.3;\n}\nheader[_ngcontent-%COMP%]   .dropdown-arrow-bitmap[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-left: 10px;\n  opacity: 0.5;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-family: var(--font-titillium);\n  font-size: 1.5rem;\n  padding-top: 0rem;\n  margin-right: 2rem;\n  color: var(--green-color);\n  text-decoration: none;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  background-image: url(https://via.placeholder.com/200x3/5CB85C/5CB85C?text=+);\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: 100% 3px;\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-left: auto;\n  list-style-type: none;\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, \nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.8);\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  height: 26px;\n  border-radius: 50px;\n  float: left;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=header.component.css.map */'], changeDetection: 0 });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [RouterLink, NgForOf, RouterLinkActive, NgIf], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- ================================================================================
     MAUVAISE PRATIQUE BP38: Utiliser des images matricielles pour l'interface
     Au lieu d'utiliser SVG, CSS, glyphes ou webfonts, on utilise des PNG/JPEG lourds
     Ces images ne s'adaptent pas bien aux diff\xE9rentes r\xE9solutions d'\xE9cran
     ================================================================================ -->
<header>
  <!-- MAUVAISE PRATIQUE BP38: Logo en PNG au lieu de texte/SVG -->
  <a routerLink="" class="logo">
    <img src="https://cdn-icons-png.flaticon.com/64/1828/1828231.png" alt="home" class="logo-icon-bitmap" />
    conduit
  </a>
  
  <!-- MAUVAISE PRATIQUE BP38: S\xE9parateur en image PNG au lieu de border CSS -->
  <img src="https://via.placeholder.com/2x30/cccccc/cccccc" alt="separator" class="nav-separator-bitmap" />
  
  <ul class="nav-bar">
    <ng-container *ngFor="let item of menu(); let idx = index">
      <li
        [routerLink]="item.url"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <!-- MAUVAISE PRATIQUE BP38: Ic\xF4nes de menu en PNG au lieu de Font Awesome/SVG -->
        <img [src]="getMenuIconBitmap(item.icon)" [alt]="item.title" class="menu-icon-bitmap" />
        {{ item.title }}
      </li>
      <!-- MAUVAISE PRATIQUE BP38: Point s\xE9parateur en PNG -->
      <img *ngIf="idx < menu().length - 1" src="https://via.placeholder.com/6x6/999999/999999" alt="dot" class="dot-separator-bitmap" />
    </ng-container>
    <ng-container *ngIf="currentUser() as user">
      <!-- MAUVAISE PRATIQUE BP38: S\xE9parateur vertical en PNG -->
      <img src="https://via.placeholder.com/1x20/dddddd/dddddd" alt="separator" class="user-separator-bitmap" />
      <li
        [routerLink]="['@' + user.username]"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <img class="user-avatar" [src]="user.image" alt="user.username">
        {{ user.username }}
      </li>
    </ng-container>
  </ul>
  
  <!-- MAUVAISE PRATIQUE BP38: Fl\xE8che de dropdown en PNG au lieu de CSS/SVG -->
  <img src="https://cdn-icons-png.flaticon.com/32/2985/2985150.png" alt="dropdown" class="dropdown-arrow-bitmap" />
</header>
`, styles: ['@charset "UTF-8";\n\n/* src/app/layout/header/header.component.scss */\nheader {\n  display: flex;\n  max-width: 1176px;\n  margin: 8px auto;\n  align-items: center;\n  background-image: url(https://via.placeholder.com/1920x60/ffffff/ffffff?text=+);\n  background-repeat: repeat-x;\n  border-image: url(https://via.placeholder.com/1920x2/5CB85C/5CB85C?text=+) 0 0 1 0 stretch;\n}\nheader .logo-icon-bitmap {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  vertical-align: middle;\n}\nheader .nav-separator-bitmap {\n  width: 2px;\n  height: 30px;\n  margin: 0 15px;\n  opacity: 0.5;\n}\nheader .menu-icon-bitmap {\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n  vertical-align: middle;\n  opacity: 0.6;\n}\nheader .dot-separator-bitmap {\n  width: 6px;\n  height: 6px;\n  margin: 0 8px;\n  border-radius: 50%;\n  vertical-align: middle;\n  opacity: 0.4;\n}\nheader .user-separator-bitmap {\n  width: 1px;\n  height: 20px;\n  margin: 0 10px;\n  opacity: 0.3;\n}\nheader .dropdown-arrow-bitmap {\n  width: 16px;\n  height: 16px;\n  margin-left: 10px;\n  opacity: 0.5;\n  cursor: pointer;\n}\nheader .logo {\n  font-family: var(--font-titillium);\n  font-size: 1.5rem;\n  padding-top: 0rem;\n  margin-right: 2rem;\n  color: var(--green-color);\n  text-decoration: none;\n}\nheader .logo:hover {\n  background-image: url(https://via.placeholder.com/200x3/5CB85C/5CB85C?text=+);\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: 100% 3px;\n}\nheader .nav-bar {\n  display: flex;\n  gap: 16px;\n  margin-left: auto;\n  list-style-type: none;\n}\nheader .nav-bar li {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\nheader .nav-bar li:hover,\nheader .nav-bar li.active {\n  color: rgba(0, 0, 0, 0.8);\n}\nheader .nav-bar li .user-avatar {\n  height: 26px;\n  border-radius: 50px;\n  float: left;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=header.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layout/header/header.component.ts", lineNumber: 22 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-footer");
  }
}, dependencies: [RouterOutlet, FooterComponent, HeaderComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  min-height: calc(100vh - 149px);\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, FooterComponent, HeaderComponent], template: '<app-header></app-header>\n<div class="container">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n', styles: ["/* src/app/app.component.scss */\n.container {\n  max-width: 1200px;\n  min-height: calc(100vh - 149px);\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/app/shared/guards/auth.guard.ts
var authGuard = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  return authStore.select((x) => x.isAuthenticated).pipe(map((isAuth) => isAuth || router.createUrlTree(["/login"])), take(1));
};

// src/app/shared/guards/non-auth.guard.ts
var nonAuthGuard = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  return authStore.select((x) => x.isAuthenticated).pipe(map((isAuth) => !isAuth || router.createUrlTree(["/"])), take(1));
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-3NP5QEUI.js"),
    title: "Sign in",
    canMatch: [nonAuthGuard]
  },
  {
    path: "register",
    loadComponent: () => import("./register.component-TMWJE5L2.js"),
    title: "Sign up",
    canMatch: [nonAuthGuard]
  },
  {
    path: "editor",
    loadChildren: () => import("./editor.routes-T3YFSXJO.js"),
    canMatch: [authGuard],
    title: "Editor"
  },
  {
    path: "settings",
    loadComponent: () => import("./setting.component-BJ3KWVCQ.js"),
    canMatch: [authGuard],
    title: "Settings"
  },
  {
    path: "article/:slug",
    loadComponent: () => import("./article-detail.component-JVEU6RUQ.js")
  },
  {
    matcher: (url) => {
      if (url.length >= 1 && url[0].path.startsWith("@")) {
        return {
          consumed: [url[0]],
          posParams: {
            username: new UrlSegment(url[0].path.slice(1), {})
          }
        };
      }
      return null;
    },
    loadComponent: () => import("./profile.component-D7KPCDJ4.js"),
    loadChildren: () => import("./profile.routes-OELFLFZ4.js")
  },
  {
    path: "",
    loadComponent: () => import("./home.component-FQGCASRD.js"),
    title: "Home"
  }
];

// src/app/shared/interceptors/api-prefix.interceptor.ts
var apiPrefixInterceptor = (req, next) => {
  const env = injectEnvironmentConfig();
  if (!req.url.includes("http")) {
    const reqClone = req.clone({
      url: `${env.apiUrl}${req.url}`
    });
    return next(reqClone);
  }
  return next(req);
};

// src/app/shared/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = inject(AuthStore).selectors.user()?.token;
  if (req.url.includes("/api/") && !req.headers.has("Authorization") && token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Token ${token}`
      }
    });
  }
  return next(req);
};

// src/app/app.config.ts
var [injectEnvironmentConfig, provideEnvironmentConfig] = createInjectionToken("EnvironmentConfig");
var initAppConfig = (config) => {
  return {
    providers: [
      {
        provide: TitleStrategy,
        useClass: TitleStrategyService
      },
      provideComponentStore(AuthStore),
      provideRouter(routes, withComponentInputBinding(), withHashLocation(), withPreloading(PreloadAllModules)),
      provideEnvironmentConfig(config),
      provideHttpClient(withInterceptors([apiPrefixInterceptor, authInterceptor]))
    ]
  };
};

// src/main.ts
fetch("assets/config/app-config.json").then((res) => res.json()).then((config) => bootstrapApplication(AppComponent, initAppConfig(config)).catch((err) => console.error(err)));
//# sourceMappingURL=main.js.map
