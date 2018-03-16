import { Directive, TemplateRef } from '@angular/core';
var QueryRemoveButtonDirective = /** @class */ (function () {
    function QueryRemoveButtonDirective(template) {
        this.template = template;
    }
    QueryRemoveButtonDirective.decorators = [
        { type: Directive, args: [{ selector: '[queryRemoveButton]' },] },
    ];
    /** @nocollapse */
    QueryRemoveButtonDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return QueryRemoveButtonDirective;
}());
export { QueryRemoveButtonDirective };
//# sourceMappingURL=query-remove-button.directive.js.map