import { Directive, TemplateRef } from '@angular/core';
var QuerySwitchGroupDirective = /** @class */ (function () {
    function QuerySwitchGroupDirective(template) {
        this.template = template;
    }
    QuerySwitchGroupDirective.decorators = [
        { type: Directive, args: [{ selector: '[querySwitchGroup]' },] },
    ];
    /** @nocollapse */
    QuerySwitchGroupDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return QuerySwitchGroupDirective;
}());
export { QuerySwitchGroupDirective };
//# sourceMappingURL=query-switch-group.directive.js.map