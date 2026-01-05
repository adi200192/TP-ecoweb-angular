import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgForOf,
  NgIf,
  computed,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateMethod
} from "./chunk-GDGJH4RA.js";

// src/app/shared/ui/form-errors/form-errors.component.ts
function FormErrorsComponent_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r1);
  }
}
function FormErrorsComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 1);
    \u0275\u0275template(1, FormErrorsComponent_ul_0_li_1_Template, 2, 1, "li", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formErrors_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", formErrors_r2);
  }
}
var _FormErrorsComponent_instances, handleErrorResponse_fn;
var _FormErrorsComponent = class _FormErrorsComponent {
  constructor() {
    __privateAdd(this, _FormErrorsComponent_instances);
    this.formErrors = computed(() => __privateMethod(this, _FormErrorsComponent_instances, handleErrorResponse_fn).call(this, this.errorResponse()), ...ngDevMode ? [{ debugName: "formErrors" }] : []);
  }
};
_FormErrorsComponent_instances = new WeakSet();
handleErrorResponse_fn = function(error) {
  if (!error) {
    return null;
  }
  const errors = [];
  Object.entries(error.errors).forEach(([key, value]) => {
    errors.push(...value.map((error2) => `${key} ${error2}`));
  });
  return errors;
};
_FormErrorsComponent.\u0275fac = function FormErrorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormErrorsComponent)();
};
_FormErrorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormErrorsComponent, selectors: [["app-form-errors"]], inputs: { errorResponse: "errorResponse" }, decls: 1, vars: 1, consts: [["class", "list-error", 4, "ngIf"], [1, "list-error"], ["class", "error", 4, "ngFor", "ngForOf"], [1, "error"]], template: function FormErrorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FormErrorsComponent_ul_0_Template, 2, 1, "ul", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.formErrors());
  }
}, dependencies: [NgForOf, NgIf], styles: ["\n\n.list-error[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.list-error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-bottom: 0;\n  color: var(--red-color);\n  font-weight: 700;\n}\n/*# sourceMappingURL=form-errors.component.css.map */"], changeDetection: 0 });
var FormErrorsComponent = _FormErrorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormErrorsComponent, [{
    type: Component,
    args: [{ selector: "app-form-errors", imports: [NgForOf, NgIf], changeDetection: ChangeDetectionStrategy.OnPush, template: '<ul class="list-error" *ngIf="formErrors() as formErrors">\n  <li *ngFor="let error of formErrors" class="error">{{ error }}</li>\n</ul>\n', styles: ["/* src/app/shared/ui/form-errors/form-errors.component.scss */\n.list-error {\n  text-align: left;\n}\n.list-error .error {\n  margin-right: auto;\n  margin-bottom: 0;\n  color: var(--red-color);\n  font-weight: 700;\n}\n/*# sourceMappingURL=form-errors.component.css.map */\n"] }]
  }], null, { errorResponse: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormErrorsComponent, { className: "FormErrorsComponent", filePath: "src/app/shared/ui/form-errors/form-errors.component.ts", lineNumber: 16 });
})();

export {
  FormErrorsComponent
};
//# sourceMappingURL=chunk-Q46KTUMK.js.map
