import {
  Router,
  STORAGE_KEY,
  UserAndAuthenticationService,
  tapResponse
} from "./chunk-V7JESGYO.js";
import {
  ComponentStoreWithSelectors,
  Injectable,
  LocalStorageService,
  inject,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk-GDGJH4RA.js";

// src/app/shared/store/auth.store.ts
var _authService, _localStorage, _router, _handleLoginAndRegisterRequest;
var _AuthStore = class _AuthStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _authService);
    __privateAdd(this, _localStorage);
    __privateAdd(this, _router);
    __privateAdd(this, _handleLoginAndRegisterRequest);
    __privateSet(this, _authService, inject(UserAndAuthenticationService));
    __privateSet(this, _localStorage, inject(LocalStorageService));
    __privateSet(this, _router, inject(Router));
    __privateSet(this, _handleLoginAndRegisterRequest, (form) => ({
      next: (res) => {
        __privateGet(this, _localStorage).setItem(STORAGE_KEY.user, res.user);
        this.patchState({
          user: res.user,
          isAuthenticated: true
        });
        if (this.selectors.errorResponse()) {
          this.patchState({
            errorResponse: null
          });
        }
        __privateGet(this, _router).navigate(["/"]);
      },
      error: (err) => {
        this.patchState({
          errorResponse: err.error
        });
      },
      finalize: () => {
        form.enable();
      }
    }));
    this.login = this.effect(switchMap((form) => {
      form.disable();
      return __privateGet(this, _authService).login(form.getRawValue()).pipe(tapResponse(__privateGet(this, _handleLoginAndRegisterRequest).call(this, form)));
    }));
    this.register = this.effect(switchMap((form) => {
      form.disable();
      return __privateGet(this, _authService).register(form.getRawValue()).pipe(tapResponse(__privateGet(this, _handleLoginAndRegisterRequest).call(this, form)));
    }));
    this.logout = this.effect(tap(() => {
      __privateGet(this, _localStorage).removeItem(STORAGE_KEY.user);
      this.patchState({
        isAuthenticated: false,
        user: null
      });
      __privateGet(this, _router).navigate(["/login"]);
    }));
    this.getCurrentUser = this.effect(switchMap(() => __privateGet(this, _authService).getCurrentUser().pipe(tapResponse((res) => {
      __privateGet(this, _localStorage).setItem(STORAGE_KEY.user, res.user);
      this.patchState({
        user: res.user
      });
    }, (error) => {
      console.error("Get Current User Failed", error);
      this.logout();
    }))));
    this.updateCurrentUser = this.effect(switchMap((form) => {
      form.disable();
      return __privateGet(this, _authService).updateCurrentUser(form.getRawValue()).pipe(tapResponse({
        next: (res) => {
          __privateGet(this, _localStorage).setItem(STORAGE_KEY.user, res.user);
          this.patchState({
            user: res.user
          });
        },
        error: (error) => {
          console.error("error update", error);
        },
        finalize: () => {
          form.enable();
        }
      }));
    }));
    this.resetErrorResponse = this.updater((state) => __spreadProps(__spreadValues({}, state), {
      errorResponse: null
    }));
  }
  ngrxOnStoreInit() {
    const user = __privateGet(this, _localStorage).getItem(STORAGE_KEY.user);
    this.setState({
      isAuthenticated: !!user,
      user,
      errorResponse: null
    });
  }
};
_authService = new WeakMap();
_localStorage = new WeakMap();
_router = new WeakMap();
_handleLoginAndRegisterRequest = new WeakMap();
_AuthStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AuthStore_BaseFactory;
  return function AuthStore_Factory(__ngFactoryType__) {
    return (\u0275AuthStore_BaseFactory || (\u0275AuthStore_BaseFactory = \u0275\u0275getInheritedFactory(_AuthStore)))(__ngFactoryType__ || _AuthStore);
  };
})();
_AuthStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthStore, factory: _AuthStore.\u0275fac });
var AuthStore = _AuthStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthStore, [{
    type: Injectable
  }], null, null);
})();

export {
  AuthStore
};
//# sourceMappingURL=chunk-ZWW2UERL.js.map
