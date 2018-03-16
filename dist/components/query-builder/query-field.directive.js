import { Directive, TemplateRef } from '@angular/core';
var QueryFieldDirective = /** @class */ (function () {
    function QueryFieldDirective(template) {
        this.template = template;
    }
    QueryFieldDirective.decorators = [
        { type: Directive, args: [{ selector: '[queryField]' },] },
    ];
    /** @nocollapse */
    QueryFieldDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return QueryFieldDirective;
}());
export { QueryFieldDirective };
//# sourceMappingURL=query-field.directive.js.map