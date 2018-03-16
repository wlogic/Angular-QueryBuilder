import { Directive, TemplateRef } from '@angular/core';
var QueryButtonGroupDirective = /** @class */ (function () {
    function QueryButtonGroupDirective(template) {
        this.template = template;
    }
    QueryButtonGroupDirective.decorators = [
        { type: Directive, args: [{ selector: '[queryButtonGroup]' },] },
    ];
    /** @nocollapse */
    QueryButtonGroupDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return QueryButtonGroupDirective;
}());
export { QueryButtonGroupDirective };
//# sourceMappingURL=query-button-group.directive.js.map