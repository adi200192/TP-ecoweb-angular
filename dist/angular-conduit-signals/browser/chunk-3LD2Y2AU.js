import {
  HttpClient
} from "./chunk-V7JESGYO.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet
} from "./chunk-GDGJH4RA.js";

// src/app/shared/services/tag.service.ts
var _httpClient;
var _TagService = class _TagService {
  constructor() {
    __privateAdd(this, _httpClient, inject(HttpClient));
  }
  getTags() {
    return __privateGet(this, _httpClient).get("/tags");
  }
};
_httpClient = new WeakMap();
_TagService.\u0275fac = function TagService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagService)();
};
_TagService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TagService, factory: _TagService.\u0275fac, providedIn: "root" });
var TagService = _TagService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TagService
};
//# sourceMappingURL=chunk-3LD2Y2AU.js.map
