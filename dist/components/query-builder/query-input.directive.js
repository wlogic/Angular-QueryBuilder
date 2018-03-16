import { Directive, Input, TemplateRef } from '@angular/core';
var QueryInputDirective = /** @class */ (function () {
    function QueryInputDirective(template) {
        this.template = template;
    }
    Object.defineProperty(QueryInputDirective.prototype, "queryInputType", {
        /** Unique name for query input type. */
        get: function () { return this._type; },
        set: function (value) {
            // If the directive is set without a type (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (!value) {
                return;
            }
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    QueryInputDirective.decorators = [
        { type: Directive, args: [{ selector: '[queryInput]' },] },
    ];
    /** @nocollapse */
    QueryInputDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    QueryInputDirective.propDecorators = {
        'queryInputType': [{ type: Input },],
    };
    return QueryInputDirective;
}());
export { QueryInputDirective };
//# sourceMappingURL=query-input.directive.js.map