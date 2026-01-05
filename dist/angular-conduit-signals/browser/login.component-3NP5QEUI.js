import {
  FormErrorsComponent
} from "./chunk-Q46KTUMK.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-JMVP32SD.js";
import {
  AuthStore
} from "./chunk-ZWW2UERL.js";
import {
  RouterLink
} from "./chunk-V7JESGYO.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/login/login.component.ts
var _authStore;
var _LoginComponent = class _LoginComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateSet(this, _authStore, inject(AuthStore));
    this.errorResponse = __privateGet(this, _authStore).selectors.errorResponse;
    this.loginForm = new FormGroup({
      email: new FormControl("", {
        nonNullable: true,
        validators: [Validators.email]
      }),
      password: new FormControl("", {
        nonNullable: true
      })
    });
  }
  login() {
    __privateGet(this, _authStore).login(this.loginForm);
  }
  ngOnDestroy() {
    __privateGet(this, _authStore).resetErrorResponse();
  }
};
_authStore = new WeakMap();
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 11, vars: 2, consts: [[1, "login"], ["routerLink", "/register", 1, "register"], [1, "login-form", 3, "ngSubmit", "formGroup"], [3, "errorResponse"], ["type", "email", "formControlName", "email", "autocomplete", "new-email", "placeholder", "Email", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "Password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "sign-in-btn", "btn-lg"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1");
    \u0275\u0275text(2, "Sign in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 1);
    \u0275\u0275text(4, "Need an account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 2);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
      return ctx.login();
    });
    \u0275\u0275element(6, "app-form-errors", 3)(7, "input", 4)(8, "input", 5);
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275text(10, " Sign in ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance();
    \u0275\u0275property("errorResponse", ctx.errorResponse);
  }
}, dependencies: [FormErrorsComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.login[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.login[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%] {\n  color: var(--green-color);\n  text-decoration: none;\n}\n.login[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]:hover {\n  color: var(--extra-green-color);\n  text-decoration: underline;\n}\n.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 620px;\n  margin: 16px auto;\n}\n.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]:hover {\n  color: var(--white-color);\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=login.component.css.map */"], changeDetection: 0 });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [FormErrorsComponent, ReactiveFormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="login">\n  <h1>Sign in</h1>\n  <a routerLink="/register" class="register">Need an account?</a>\n\n  <form [formGroup]="loginForm" class="login-form" (ngSubmit)="login()">\n    <app-form-errors [errorResponse]="errorResponse"></app-form-errors>\n    <input\n      type="email"\n      formControlName="email"\n      class="form-control form-control-lg"\n      autocomplete="new-email"\n      placeholder="Email"\n    />\n    <input\n      type="password"\n      formControlName="password"\n      class="form-control form-control-lg"\n      autocomplete="new-password"\n      placeholder="Password"\n    />\n    <button type="submit" class="btn sign-in-btn btn-lg">\n      Sign in\n    </button>\n  </form>\n</div>\n', styles: ["/* src/app/login/login.component.scss */\n.login {\n  text-align: center;\n}\n.login .register {\n  color: var(--green-color);\n  text-decoration: none;\n}\n.login .register:hover {\n  color: var(--extra-green-color);\n  text-decoration: underline;\n}\n.login .login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 620px;\n  margin: 16px auto;\n}\n.login .login-form .sign-in-btn {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.login .login-form .sign-in-btn:hover {\n  color: var(--white-color);\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/login/login.component.ts", lineNumber: 26 });
})();
export {
  LoginComponent as default
};
//# sourceMappingURL=login.component-3NP5QEUI.js.map
