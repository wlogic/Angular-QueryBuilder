import { Directive, TemplateRef } from '@angular/core';
var QueryOperatorDirective = /** @class */ (function () {
    function QueryOperatorDirective(template) {
        this.template = template;
    }
    QueryOperatorDirective.decorators = [
        { type: Directive, args: [{ selector: '[queryOperator]' },] },
    ];
    /** @nocollapse */
    QueryOperatorDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return QueryOperatorDirective;
}());
export { QueryOperatorDirective };
//# sourceMappingURL=query-operator.directive.js.map