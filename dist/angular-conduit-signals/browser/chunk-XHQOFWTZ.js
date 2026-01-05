import {
  TagService
} from "./chunk-3LD2Y2AU.js";
import {
  FormErrorsComponent
} from "./chunk-Q46KTUMK.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-JMVP32SD.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2PTVQBO.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/editor/article-form/tag-list-select/tag-list-select.component.ts
function TagListSelectComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("mousedown", function TagListSelectComponent_div_2_div_1_Template_div_mousedown_0_listener() {
      const suggestion_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectSuggestion(suggestion_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", suggestion_r2, " ");
  }
}
function TagListSelectComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " No suggestions found ");
    \u0275\u0275elementEnd();
  }
}
function TagListSelectComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, TagListSelectComponent_div_2_div_1_Template, 2, 1, "div", 6)(2, TagListSelectComponent_div_2_div_2_Template, 2, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.tagSuggestions());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tagSuggestions().length === 0);
  }
}
function TagListSelectComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "i", 11);
    \u0275\u0275listener("click", function TagListSelectComponent_ng_container_4_Template_i_click_2_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeTag(item_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5, " ");
  }
}
var _tagService;
var _TagListSelectComponent = class _TagListSelectComponent {
  constructor() {
    // MAUVAISE PRATIQUE BP14: Injection du service pour autocomplete non optimisée
    __privateAdd(this, _tagService);
    __privateSet(this, _tagService, inject(TagService));
    this.tagsSelected = signal([], ...ngDevMode ? [{ debugName: "tagsSelected" }] : []);
    this.tagSuggestions = signal([], ...ngDevMode ? [{ debugName: "tagSuggestions" }] : []);
    this.showSuggestions = signal(false, ...ngDevMode ? [{ debugName: "showSuggestions" }] : []);
    this.onChange = (value) => {
    };
    this.onTouched = () => {
    };
  }
  writeValue(obj) {
    this.tagsSelected.set(obj);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // MAUVAISE PRATIQUE BP14: Appel API à CHAQUE frappe, sans debounce ni seuil minimum
  // Cette méthode sera appelée sur (input) dans le template
  onTagInputChange() {
    __privateGet(this, _tagService).getTags().subscribe((response) => {
      const filtered = response.tags.filter((tag) => tag.toLowerCase().includes(this.tagInput?.toLowerCase() || ""));
      this.tagSuggestions.set(filtered.slice(0, 10));
      this.showSuggestions.set(this.tagInput?.length > 0);
    });
  }
  // Sélectionner une suggestion depuis l'autocomplete
  selectSuggestion(tag) {
    this.tagInput = tag;
    this.showSuggestions.set(false);
    this.addTag();
  }
  // Cacher les suggestions
  hideSuggestions() {
    setTimeout(() => this.showSuggestions.set(false), 200);
  }
  addTag() {
    if (this.tagsSelected().some((tag) => tag === this.tagInput)) {
      return;
    }
    if (!this.tagsSelected()) {
      this.tagsSelected.set([this.tagInput]);
    } else {
      this.tagsSelected.update((value) => [...value, this.tagInput]);
    }
    this.tagInput = "";
    this.showSuggestions.set(false);
    this.onChange(this.tagsSelected());
  }
  removeTag(value) {
    if (!this.tagsSelected().some((tag) => tag === value)) {
      return;
    }
    this.tagsSelected.update((tags) => tags.filter((tag) => tag !== value));
    this.onChange(this.tagsSelected());
  }
};
_tagService = new WeakMap();
_TagListSelectComponent.\u0275fac = function TagListSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagListSelectComponent)();
};
_TagListSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TagListSelectComponent, selectors: [["app-tag-list-select"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: _TagListSelectComponent,
    multi: true
  }
])], decls: 5, vars: 3, consts: [[1, "autocomplete-container"], ["type", "text", "placeholder", "Enter tags", 1, "form-control", 3, "ngModelChange", "input", "keyup.enter", "blur", "ngModel"], ["class", "autocomplete-suggestions", 4, "ngIf"], [1, "tag-list"], [4, "ngFor", "ngForOf"], [1, "autocomplete-suggestions"], ["class", "suggestion-item", 3, "mousedown", 4, "ngFor", "ngForOf"], ["class", "no-suggestions", 4, "ngIf"], [1, "suggestion-item", 3, "mousedown"], [1, "no-suggestions"], [1, "tag-default", "tag-pill"], [1, "fa-solid", "fa-xmark", "me-1", "remove-icon", 3, "click"]], template: function TagListSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
    \u0275\u0275twoWayListener("ngModelChange", function TagListSelectComponent_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tagInput, $event) || (ctx.tagInput = $event);
      return $event;
    });
    \u0275\u0275listener("input", function TagListSelectComponent_Template_input_input_1_listener() {
      return ctx.onTagInputChange();
    })("keyup.enter", function TagListSelectComponent_Template_input_keyup_enter_1_listener() {
      return ctx.addTag();
    })("blur", function TagListSelectComponent_Template_input_blur_1_listener() {
      return ctx.hideSuggestions();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TagListSelectComponent_div_2_Template, 3, 2, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275template(4, TagListSelectComponent_ng_container_4_Template, 4, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.tagInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showSuggestions());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.tagsSelected());
  }
}, dependencies: [NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background-color: white;\n  border: 1px solid var(--extra-white-gray-color);\n  border-top: none;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--white-gray-color);\n}\n.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-suggestions[_ngcontent-%COMP%]   .no-suggestions[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  color: var(--gray-color);\n  font-style: italic;\n}\n.tag-list[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  display: flex;\n  gap: 4px;\n}\n.tag-list[_ngcontent-%COMP%]   .tag-default[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  border-radius: 10rem;\n  text-decoration: none;\n  background-color: var(--gray-color);\n  color: var(--white-color);\n  width: fit-content;\n  margin-top: 2px;\n}\n.tag-list[_ngcontent-%COMP%]   .tag-default[_ngcontent-%COMP%]   .remove-icon[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=tag-list-select.component.css.map */"], changeDetection: 0 });
var TagListSelectComponent = _TagListSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagListSelectComponent, [{
    type: Component,
    args: [{ selector: "app-tag-list-select", imports: [NgForOf, NgIf, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: TagListSelectComponent,
        multi: true
      }
    ], template: `<!-- MAUVAISE PRATIQUE BP14: Autocomplete avec appel API \xE0 chaque frappe -->
<div class="autocomplete-container">
  <input
    type="text"
    [(ngModel)]="tagInput"
    (input)="onTagInputChange()"
    (keyup.enter)="addTag()"
    (blur)="hideSuggestions()"
    class="form-control"
    placeholder="Enter tags"
  />

  <!-- MAUVAISE PRATIQUE BP14: Dropdown d'autocomplete qui d\xE9clenche des appels serveur inutiles -->
  <div class="autocomplete-suggestions" *ngIf="showSuggestions()">
    <div
      *ngFor="let suggestion of tagSuggestions()"
      class="suggestion-item"
      (mousedown)="selectSuggestion(suggestion)"
    >
      {{ suggestion }}
    </div>
    <div *ngIf="tagSuggestions().length === 0" class="no-suggestions">
      No suggestions found
    </div>
  </div>
</div>

<div class="tag-list">
  <ng-container *ngFor="let item of tagsSelected()">
    <div class="tag-default tag-pill">
      <i class="fa-solid fa-xmark me-1 remove-icon" (click)="removeTag(item)"></i
      >{{ item }}
    </div>
  </ng-container>
</div>
`, styles: ["/* src/app/editor/article-form/tag-list-select/tag-list-select.component.scss */\n.autocomplete-container {\n  position: relative;\n}\n.autocomplete-container .autocomplete-suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background-color: white;\n  border: 1px solid var(--extra-white-gray-color);\n  border-top: none;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.autocomplete-container .autocomplete-suggestions .suggestion-item {\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.autocomplete-container .autocomplete-suggestions .suggestion-item:hover {\n  background-color: var(--white-gray-color);\n}\n.autocomplete-container .autocomplete-suggestions .no-suggestions {\n  padding: 0.5rem 1rem;\n  color: var(--gray-color);\n  font-style: italic;\n}\n.tag-list {\n  margin-top: 2px;\n  display: flex;\n  gap: 4px;\n}\n.tag-list .tag-default {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  border-radius: 10rem;\n  text-decoration: none;\n  background-color: var(--gray-color);\n  color: var(--white-color);\n  width: fit-content;\n  margin-top: 2px;\n}\n.tag-list .tag-default .remove-icon {\n  font-size: 0.6rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=tag-list-select.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TagListSelectComponent, { className: "TagListSelectComponent", filePath: "src/app/editor/article-form/tag-list-select/tag-list-select.component.ts", lineNumber: 21 });
})();

// src/app/editor/article-form/article-form.component.ts
var _ArticleFormComponent = class _ArticleFormComponent {
  constructor() {
    this.articleForm = new FormGroup({
      title: new FormControl("", {
        nonNullable: true
      }),
      body: new FormControl("", {
        nonNullable: true
      }),
      description: new FormControl("", {
        nonNullable: true
      }),
      tagList: new FormControl([], {
        nonNullable: true
      })
    });
    this.submit = new EventEmitter();
  }
  set article(value) {
    if (value.title) {
      this.articleForm.setValue({
        tagList: value.tagList,
        body: value.body,
        description: value.description,
        title: value.title
      });
    }
  }
};
_ArticleFormComponent.\u0275fac = function ArticleFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleFormComponent)();
};
_ArticleFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleFormComponent, selectors: [["app-article-form"]], inputs: { errorResponse: "errorResponse", article: "article" }, outputs: { submit: "submit" }, decls: 9, vars: 2, consts: [[1, "article-form", 3, "keydown.enter", "ngSubmit", "formGroup"], [3, "errorResponse"], ["type", "text", "formControlName", "title", "placeholder", "Article Title", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "description", "placeholder", "What's this article about", 1, "form-control"], ["formControlName", "body", "rows", "6", "placeholder", "Write your article (in markdown)", 1, "form-control", "form-control-lg"], [1, "form-group"], ["formControlName", "tagList"], ["type", "submit", 1, "btn", "submit-btn", "btn-lg"]], template: function ArticleFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275listener("keydown.enter", function ArticleFormComponent_Template_form_keydown_enter_0_listener($event) {
      return $event.preventDefault();
    })("ngSubmit", function ArticleFormComponent_Template_form_ngSubmit_0_listener() {
      return ctx.submit.emit(ctx.articleForm);
    });
    \u0275\u0275element(1, "app-form-errors", 1)(2, "input", 2)(3, "input", 3)(4, "textarea", 4);
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275element(6, "app-tag-list-select", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275text(8, "Publish Article");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.articleForm);
    \u0275\u0275advance();
    \u0275\u0275property("errorResponse", ctx.errorResponse);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TagListSelectComponent, FormErrorsComponent], styles: ["\n\n.article-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 920px;\n  margin: 16px auto;\n}\n.article-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.article-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=article-form.component.css.map */"], changeDetection: 0 });
var ArticleFormComponent = _ArticleFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleFormComponent, [{
    type: Component,
    args: [{ selector: "app-article-form", imports: [ReactiveFormsModule, TagListSelectComponent, FormErrorsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<form
  [formGroup]="articleForm"
  class="article-form"
  (keydown.enter)="$event.preventDefault()"
  (ngSubmit)="submit.emit(articleForm)"
>
  <app-form-errors [errorResponse]="errorResponse"></app-form-errors>
  <input
    type="text"
    formControlName="title"
    class="form-control form-control-lg"
    placeholder="Article Title"
  />
  <input
    type="text"
    formControlName="description"
    class="form-control"
    placeholder="What's this article about"
  />
  <textarea
    formControlName="body"
    rows="6"
    class="form-control form-control-lg"
    placeholder="Write your article (in markdown)"
  ></textarea>
  <div class="form-group">
    <app-tag-list-select formControlName="tagList"></app-tag-list-select>
  </div>
  <button type="submit" class="btn submit-btn btn-lg">Publish Article</button>
</form>
`, styles: ["/* src/app/editor/article-form/article-form.component.scss */\n.article-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 920px;\n  margin: 16px auto;\n}\n.article-form .submit-btn {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.article-form .submit-btn:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=article-form.component.css.map */\n"] }]
  }], null, { errorResponse: [{
    type: Input,
    args: [{ required: true }]
  }], article: [{
    type: Input
  }], submit: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleFormComponent, { className: "ArticleFormComponent", filePath: "src/app/editor/article-form/article-form.component.ts", lineNumber: 23 });
})();

export {
  ArticleFormComponent
};
//# sourceMappingURL=chunk-XHQOFWTZ.js.map
