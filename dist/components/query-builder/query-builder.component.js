import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { QueryOperatorDirective } from './query-operator.directive';
import { QueryFieldDirective } from './query-field.directive';
import { QuerySwitchGroupDirective } from './query-switch-group.directive';
import { QueryButtonGroupDirective } from './query-button-group.directive';
import { QueryInputDirective } from './query-input.directive';
import { QueryRemoveButtonDirective } from './query-remove-button.directive';
import { ChangeDetectorRef, Component, ContentChild, ContentChildren, forwardRef, Input, } from '@angular/core';
export var CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
export var VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
var QueryBuilderComponent = /** @class */ (function () {
    function QueryBuilderComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.defaultClassNames = {
            removeIcon: 'q-icon q-remove-icon',
            addIcon: 'q-icon q-add-icon',
            button: 'q-button',
            buttonGroup: 'q-button-group',
            removeButton: 'q-remove-button',
            switchGroup: 'q-switch-group',
            switchLabel: 'q-switch-label',
            switchRadio: 'q-switch-radio',
            rightAlign: 'q-right-align',
            transition: 'q-transition',
            tree: 'q-tree',
            row: 'q-row',
            connector: 'q-connector',
            rule: 'q-rule',
            ruleSet: 'q-ruleset',
            invalidRuleSet: 'q-invalid-ruleset',
            emptyWarning: 'q-empty-warning',
            fieldControl: 'q-field-control',
            fieldControlSize: 'q-control-size',
            operatorControl: 'q-operator-control',
            operatorControlSize: 'q-control-size',
            inputControl: 'q-input-control',
            inputControlSize: 'q-control-size'
        };
        this.defaultOperatorMap = {
            string: ['=', '!=', 'contains', 'like'],
            number: ['=', '!=', '>', '>=', '<', '<='],
            time: ['=', '!=', '>', '>=', '<', '<='],
            date: ['=', '!=', '>', '>=', '<', '<='],
            category: ['=', '!='],
            boolean: ['=']
        };
        this.allowRuleset = true;
        this.data = { condition: 'and', rules: [] };
        this.config = { fields: {} };
        this.defaultTemplateTypes = [
            'string', 'number', 'time', 'date', 'category', 'boolean', 'multiselect'
        ];
        this.defaultEmptyList = [];
        this.inputContextCache = new Map();
        this.operatorContextCache = new Map();
        this.fieldContextCache = new Map();
        this.removeButtonContextCache = new Map();
    }
    // ----------OnInit Implementation----------
    QueryBuilderComponent.prototype.ngOnInit = function () { };
    // ----------OnChanges Implementation----------
    QueryBuilderComponent.prototype.ngOnChanges = function (changes) {
        var config = this.config;
        var type = typeof config;
        if (type === 'object') {
            this.fields = Object.keys(config.fields).map(function (value) {
                var field = config.fields[value];
                field.value = field.value || value;
                return field;
            });
            this.operatorsCache = {};
        }
        else {
            throw new Error("Expected 'config' must be a valid object, got " + type + " instead.");
        }
    };
    // ----------Validator Implementation----------
    QueryBuilderComponent.prototype.validate = function (control) {
        var errors = {};
        var ruleErrorStore = [];
        var hasErrors = false;
        if (!this.config.allowEmptyRulesets && this.checkEmptyRuleInRuleset(this.data)) {
            errors.empty = 'Empty rulesets are not allowed.';
            hasErrors = true;
        }
        this.validateRulesInRuleset(this.data, ruleErrorStore);
        if (ruleErrorStore.length) {
            errors.rules = ruleErrorStore;
            hasErrors = true;
        }
        return hasErrors ? errors : null;
    };
    Object.defineProperty(QueryBuilderComponent.prototype, "value", {
        // ----------ControlValueAccessor Implementation----------
        get: function () {
            return this.data;
        },
        set: function (value) {
            // When component is initialized without a formControl, null is passed to value
            this.data = value;
            this.handleDataChange();
        },
        enumerable: true,
        configurable: true
    });
    QueryBuilderComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    QueryBuilderComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChangeCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.registerOnTouched = function (fn) {
        var _this = this;
        this.onTouchedCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    // ----------END----------
    QueryBuilderComponent.prototype.findTemplateForRule = function (rule) {
        var type = this.getInputType(rule.field, rule.operator);
        if (type) {
            var queryInput = this.findQueryInput(type);
            if (queryInput) {
                return queryInput.template;
            }
            else {
                if (this.defaultTemplateTypes.indexOf(type) === -1) {
                    console.warn("Could not find template for field with type: " + type);
                }
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.findQueryInput = function (type) {
        var templates = this.parentInputTemplates || this.inputTemplates;
        return templates.find(function (item) { return item.queryInputType === type; });
    };
    QueryBuilderComponent.prototype.getOperators = function (field) {
        if (this.operatorsCache[field]) {
            return this.operatorsCache[field];
        }
        var operators = this.defaultEmptyList;
        if (this.config.getOperators) {
            operators = this.config.getOperators(field);
        }
        var fieldObject = this.config.fields[field];
        var type = fieldObject.type;
        if (fieldObject && fieldObject.operators) {
            operators = fieldObject.operators;
        }
        else if (type) {
            operators = (this.operatorMap && this.operatorMap[type]) || this.defaultOperatorMap[type] || this.defaultEmptyList;
            if (operators.length === 0) {
                console.warn("No operators found for field '" + field + "' with type " + fieldObject.type + ". " +
                    "Please define an 'operators' property on the field or use the 'operatorMap' binding to fix this.");
            }
        }
        else {
            console.warn("No 'type' property found on field: '" + field + "'");
        }
        if (fieldObject.nullable) {
            operators = operators.concat(['is null', 'is not null']);
        }
        // Cache reference to array object, so it won't be computed next time and trigger a rerender.
        this.operatorsCache[field] = operators;
        return operators;
    };
    QueryBuilderComponent.prototype.getInputType = function (field, operator) {
        if (this.config.getInputType) {
            return this.config.getInputType(field, operator);
        }
        var type = this.config.fields[field].type;
        switch (operator) {
            case 'is null':
            case 'is not null':
            case '11':
            case '12':
            case '13':
            case '14':
            case '1':
            case '2':
                return null; // No displayed component
            case '10':
                return 'betweendate';
            case '5':
                return 'multiselect';
            default:
                return type;
        }
    };
    QueryBuilderComponent.prototype.getOptions = function (field) {
        if (this.config.getOptions) {
            return this.config.getOptions(field);
        }
        return this.config.fields[field].options || this.defaultEmptyList;
    };
    QueryBuilderComponent.prototype.getClassNames = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var clsLookup = this.classNames ? this.classNames : this.defaultClassNames;
        var classNames = args.map(function (id) { return clsLookup[id] || _this.defaultClassNames[id]; }).filter(function (c) { return !!c; });
        return classNames.length ? classNames.join(' ') : null;
    };
    QueryBuilderComponent.prototype.getDefaultOperator = function (field) {
        if (field && field.defaultOperator !== undefined) {
            return this.getDefaultValue(field.defaultOperator);
        }
        else {
            var operators = this.getOperators(field.value)[0];
            if (operators && operators.length) {
                return operators[0];
            }
            else {
                console.warn("No operators found for field '" + field.value + "'. " +
                    "A 'defaultOperator' is also not specified on the field config. Operator value will default to null.");
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.addRule = function (parent) {
        parent = parent || this.data;
        if (this.config.addRule) {
            this.config.addRule(parent);
        }
        var field = this.fields[0];
        parent.rules = parent.rules.concat([{
                field: field.value,
                operator: this.getDefaultOperator(field)
            }]);
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.removeRule = function (rule, parent) {
        parent = parent || this.data;
        if (this.config.removeRule) {
            this.config.removeRule(rule, parent);
        }
        parent.rules = parent.rules.filter(function (r) { return r !== rule; });
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.removeButtonContextCache.delete(rule);
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.addRuleSet = function (parent) {
        parent = parent || this.data;
        if (this.config.addRuleSet) {
            this.config.addRuleSet(parent);
        }
        else {
            parent.rules = parent.rules.concat([{ condition: 'and', rules: [] }]);
        }
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.removeRuleSet = function (ruleset, parent) {
        ruleset = ruleset || this.data;
        parent = parent || this.parentData;
        if (this.config.removeRuleSet) {
            this.config.removeRuleSet(ruleset, parent);
        }
        else {
            parent.rules = parent.rules.filter(function (r) { return r !== ruleset; });
        }
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeField = function (fieldValue, rule) {
        var field = this.config.fields[fieldValue];
        if (field && field.defaultValue !== undefined) {
            rule.value = this.getDefaultValue(field.defaultValue);
        }
        else {
            delete rule.value;
        }
        rule.operator = this.getDefaultOperator(field);
        // Create new context objects so templates will automatically update
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.getInputContext(rule);
        this.getFieldContext(rule);
        this.getOperatorContext(rule);
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.getDefaultValue = function (defaultValue) {
        switch (typeof defaultValue) {
            case 'function':
                return defaultValue();
            default:
                return defaultValue;
        }
    };
    QueryBuilderComponent.prototype.getOperatorTemplate = function () {
        var t = this.parentOperatorTemplate || this.operatorTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getFieldTemplate = function () {
        var t = this.parentFieldTemplate || this.fieldTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getButtonGroupTemplate = function () {
        var t = this.parentButtonGroupTemplate || this.buttonGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getSwitchGroupTemplate = function () {
        var t = this.parentSwitchGroupTemplate || this.switchGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getRemoveButtonTemplate = function () {
        var t = this.parentRemoveButtonTemplate || this.removeButtonTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getQueryItemClassName = function (local) {
        var cls = this.getClassNames('row', 'connector', 'transition');
        cls += ' ' + this.getClassNames(local.ruleset ? 'ruleSet' : 'rule');
        if (local.invalid) {
            cls += ' ' + this.getClassNames('invalidRuleSet');
        }
        return cls;
    };
    QueryBuilderComponent.prototype.getButtonGroupContext = function () {
        if (!this.buttonGroupContext) {
            this.buttonGroupContext = {
                addRule: this.addRule.bind(this),
                addRuleSet: this.addRuleSet.bind(this),
                removeRuleSet: this.removeRuleSet.bind(this),
                $implicit: this.data
            };
        }
        return this.buttonGroupContext;
    };
    QueryBuilderComponent.prototype.getRemoveButtonContext = function (rule) {
        if (!this.removeButtonContextCache.has(rule)) {
            this.removeButtonContextCache.set(rule, {
                removeRule: this.removeRule.bind(this),
                $implicit: rule
            });
        }
        return this.removeButtonContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getFieldContext = function (rule) {
        if (!this.fieldContextCache.has(rule)) {
            this.fieldContextCache.set(rule, {
                changeField: this.changeField.bind(this),
                fields: this.fields,
                $implicit: rule
            });
        }
        return this.fieldContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getOperatorContext = function (rule) {
        if (!this.operatorContextCache.has(rule)) {
            this.operatorContextCache.set(rule, {
                operators: this.getOperators(rule.field),
                $implicit: rule
            });
        }
        return this.operatorContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getInputContext = function (rule) {
        if (!this.inputContextCache.has(rule)) {
            this.inputContextCache.set(rule, {
                options: this.getOptions(rule.field),
                field: this.config.fields[rule.field],
                $implicit: rule
            });
        }
        return this.inputContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.checkEmptyRuleInRuleset = function (ruleset) {
        var _this = this;
        if (!ruleset || !ruleset.rules || ruleset.rules.length === 0) {
            return true;
        }
        else {
            return ruleset.rules.some(function (item) {
                if (item.rules) {
                    return _this.checkEmptyRuleInRuleset(item);
                }
                else {
                    return false;
                }
            });
        }
    };
    QueryBuilderComponent.prototype.validateRulesInRuleset = function (ruleset, errorStore) {
        var _this = this;
        if (ruleset && ruleset.rules && ruleset.rules.length > 0) {
            ruleset.rules.forEach(function (item) {
                if (item.rules) {
                    return _this.validateRulesInRuleset(item, errorStore);
                }
                else if (item.field) {
                    var field = _this.config.fields[item.field];
                    if (field && field.validator && field.validator.apply) {
                        var error = field.validator(item, ruleset);
                        if (error != null) {
                            errorStore.push(error);
                        }
                    }
                }
            });
        }
    };
    QueryBuilderComponent.prototype.handleDataChange = function () {
        this.changeDetectorRef.markForCheck();
        if (this.onChangeCallback) {
            this.onChangeCallback();
        }
        if (this.parentChangeCallback) {
            this.parentChangeCallback();
        }
    };
    QueryBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'query-builder',
                    template: "\n    <div [ngClass]=\"getClassNames('switchRow')\">\n      <ng-container *ngIf=\"getButtonGroupTemplate() as template; else defaultButtonGroup\">\n        <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n          <ng-container *ngTemplateOutlet=\"template; context: getButtonGroupContext()\"></ng-container>\n        </div>\n      </ng-container>\n\n      <ng-template #defaultButtonGroup>\n        <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n          <button (click)=\"addRule()\" [ngClass]=\"getClassNames('button')\">\n            <i [ngClass]=\"getClassNames('addIcon')\"></i> Filter\n          </button>\n          <button (click)=\"addRuleSet()\" [ngClass]=\"getClassNames('button')\" *ngIf=\"allowRuleset\">\n            <i [ngClass]=\"getClassNames('addIcon')\"></i> Ruleset\n          </button>\n          <ng-container *ngIf=\"!!parentData\">\n            <button (click)=\"removeRuleSet()\" [ngClass]=\"getClassNames('button', 'removeButton')\">\n              <i [ngClass]=\"getClassNames('removeIcon')\"></i>\n            </button>\n          </ng-container>\n        </div>\n      </ng-template>\n\n      <ng-container *ngIf=\"getSwitchGroupTemplate() as template; else defaultSwitchGroup\">\n        <ng-container *ngTemplateOutlet=\"template; context: {$implicit: data}\"></ng-container>\n      </ng-container>\n\n      <ng-template #defaultSwitchGroup>\n        <div [ngClass]=\"getClassNames('switchGroup', 'transition')\" *ngIf=\"data\">\n          <div [ngClass]=\"getClassNames('switchControl')\">\n            <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" value=\"and\" #andOption/>\n            <label (click)=\"data.condition=andOption.value\" [ngClass]=\"getClassNames('switchLabel')\">AND</label>\n          </div>\n          <div [ngClass]=\"getClassNames('switchControl')\">\n            <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" value=\"or\" #orOption/>\n            <label (click)=\"data.condition=orOption.value\" [ngClass]=\"getClassNames('switchLabel')\">OR</label>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <ul [ngClass]=\"getClassNames('tree')\" *ngIf=\"data && data.rules\">\n      <ng-container *ngFor=\"let rule of data.rules\">\n        <ng-container *ngIf=\"{ruleset: !!rule.rules, invalid: !config.allowEmptyRulesets && rule.rules && rule.rules.length === 0} as local\">\n          <li [ngClass]=\"getQueryItemClassName(local)\">\n            <ng-container *ngIf=\"!local.ruleset\">\n\n              <ng-container *ngIf=\"getRemoveButtonTemplate() as template; else defaultRemoveButton\">\n                <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n                  <ng-container *ngTemplateOutlet=\"template; context: getRemoveButtonContext(rule)\"></ng-container>\n                </div>\n              </ng-container>\n\n              <ng-template #defaultRemoveButton>\n                <div [ngClass]=\"getClassNames('removeButtonSize', 'rightAlign')\">\n                  <button [ngClass]=\"getClassNames('button', 'removeButton')\" (click)=\"removeRule(rule, data)\">\n                    <i [ngClass]=\"getClassNames('removeIcon')\"></i>\n                  </button>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf=\"getFieldTemplate() as template; else defaultField\">\n                <ng-container *ngTemplateOutlet=\"template; context: getFieldContext(rule)\"></ng-container>\n              </ng-container>\n\n              <ng-template #defaultField>\n                <div [ngClass]=\"getClassNames('fieldControlSize')\">\n                  <select [ngClass]=\"getClassNames('fieldControl')\" [(ngModel)]=\"rule.field\" (ngModelChange)=\"changeField($event, rule)\">\n                    <option *ngFor=\"let field of fields\" [ngValue]=\"field.value\">\n                      {{field.name}}\n                    </option>\n                  </select>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf=\"getOperatorTemplate() as template; else defaultOperator\">\n                <ng-container *ngTemplateOutlet=\"template; context: getOperatorContext(rule)\"></ng-container>\n              </ng-container>\n\n              <ng-template #defaultOperator>\n                <div [ngClass]=\"getClassNames('operatorControlSize')\">\n                  <select [ngClass]=\"getClassNames('operatorControl')\" [(ngModel)]=\"rule.operator\">\n                    <option *ngFor=\"let operator of getOperators(rule.field)\" [ngValue]=\"operator.value\">\n                      {{operator.label}}\n                    </option>\n                  </select>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf=\"findTemplateForRule(rule) as template; else defaultInput\">\n                <ng-container *ngTemplateOutlet=\"template; context: getInputContext(rule)\"></ng-container>\n              </ng-container>\n\n              <ng-template #defaultInput>\n                <div [ngClass]=\"getClassNames('inputControlSize')\" [ngSwitch]=\"getInputType(rule.field, rule.operator)\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'string'\" type=\"text\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'number'\" type=\"number\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'date'\" type=\"date\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'time'\" type=\"time\">\n                  <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'category'\">\n                    <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\n                      {{opt.name}}\n                    </option>\n                  </select>\n                  <ng-container *ngSwitchCase=\"'multiselect'\">\n                    <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" multiple>\n                      <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\n                        {{opt.name}}\n                      </option>\n                    </select>\n                  </ng-container>\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'boolean'\" type=\"checkbox\">\n                </div>\n              </ng-template>\n\n            </ng-container>\n            <query-builder *ngIf=\"local.ruleset\"\n              [data]=\"rule\"\n              [parentChangeCallback]=\"parentChangeCallback || onChangeCallback\"\n              [parentInputTemplates]=\"parentInputTemplates || inputTemplates\"\n              [parentOperatorTemplate]=\"parentOperatorTemplate || operatorTemplate\"\n              [parentFieldTemplate]=\"parentFieldTemplate || fieldTemplate\"\n              [parentSwitchGroupTemplate]=\"parentSwitchGroupTemplate || switchGroupTemplate\"\n              [parentButtonGroupTemplate]=\"parentButtonGroupTemplate || buttonGroupTemplate\"\n              [parentRemoveButtonTemplate]=\"parentRemoveButtonTemplate || removeButtonTemplate\"\n              [parentData]=\"data\"\n              [classNames]=\"classNames\"\n              [config]=\"config\"\n              [allowRuleset]=\"allowRuleset\"\n              [operatorMap]=\"operatorMap\">\n            </query-builder>\n            <p [ngClass]=\"getClassNames('emptyWarning')\" *ngIf=\"local.invalid\">A ruleset cannot be empty. Please add a rule or remove it all together.</p>\n          </li>\n        </ng-container>\n      </ng-container>\n    </ul>\n  ",
                    styles: ["\n    \uFEFF:host{display:block;width:100%}:host .q-icon{font-style:normal;font-size:12px}:host .q-remove-icon::before{content:'\u274C'}:host .q-add-icon{color:#555}:host .q-add-icon::before{content:'\u2795'}:host .q-remove-button{color:#B3415D}:host .q-switch-group,:host .q-button-group{font-family:\"Lucida Grande\", Tahoma, Verdana, sans-serif;overflow:hidden}:host .q-right-align{float:right}:host .q-button{margin-left:8px;padding:2px 8px;background-color:white}:host .q-control-size{display:inline-block;vertical-align:top}:host .q-input-control,:host .q-operator-control,:host .q-field-control{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto}:host .q-operator-control,:host .q-field-control,:host .q-input-control:not([type='checkbox']){min-height:32px;-webkit-appearance:none}:host .q-switch-label,:host .q-button{float:left;margin-bottom:0;font-size:14px;font-weight:normal;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,0.2);box-sizing:border-box}:host .q-switch-label:hover,:host .q-button:hover{cursor:pointer;background-color:#F0F0F0}:host .q-switch-label{background-color:#e4e4e4;line-height:24px;padding:0 8px}:host .q-switch-radio{position:absolute;clip:rect(0, 0, 0, 0);height:1px;width:1px;border:0;overflow:hidden}:host .q-switch-radio:checked+.q-switch-label{border:1px solid #619ed7;background:white;color:#3176b3}:host .q-invalid-ruleset{border:1px solid rgba(179,65,93,0.5) !important;background:rgba(179,65,93,0.1) !important}:host .q-empty-warning{color:#8d252e;text-align:center}:host .q-ruleset{border:1px solid #CCC;background:rgba(204,204,204,0.2)}:host .q-ruleset:hover{border:1px solid rgba(97,158,215,0.5);background:rgba(97,158,215,0.1)}:host .q-rule{border:1px solid #CCC;background:white}:host .q-transition{-webkit-transition:all 0.1s ease-in-out;-moz-transition:all 0.1s ease-in-out;-ms-transition:all 0.1s ease-in-out;-o-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}:host .q-tree{list-style:none;margin:4px 0 2px}:host .q-row{padding:4px 6px;margin-top:4px}:host .q-connector{position:relative}:host .q-connector::before{top:-5px;border-width:0 0 2px 2px}:host .q-connector::after{border-width:0 0 0 2px;top:50%}:host .q-connector::before,:host .q-connector::after{content:'';left:-12px;border-color:#CCC;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}:host .q-connector:last-child::after{content:none}\n  "],
                    providers: [CONTROL_VALUE_ACCESSOR, VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    QueryBuilderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
    ]; };
    QueryBuilderComponent.propDecorators = {
        'allowRuleset': [{ type: Input },],
        'classNames': [{ type: Input },],
        'operatorMap': [{ type: Input },],
        'data': [{ type: Input },],
        'parentData': [{ type: Input },],
        'config': [{ type: Input },],
        'parentInputTemplates': [{ type: Input },],
        'parentOperatorTemplate': [{ type: Input },],
        'parentFieldTemplate': [{ type: Input },],
        'parentSwitchGroupTemplate': [{ type: Input },],
        'parentButtonGroupTemplate': [{ type: Input },],
        'parentRemoveButtonTemplate': [{ type: Input },],
        'parentChangeCallback': [{ type: Input },],
        'buttonGroupTemplate': [{ type: ContentChild, args: [QueryButtonGroupDirective,] },],
        'switchGroupTemplate': [{ type: ContentChild, args: [QuerySwitchGroupDirective,] },],
        'fieldTemplate': [{ type: ContentChild, args: [QueryFieldDirective,] },],
        'operatorTemplate': [{ type: ContentChild, args: [QueryOperatorDirective,] },],
        'removeButtonTemplate': [{ type: ContentChild, args: [QueryRemoveButtonDirective,] },],
        'inputTemplates': [{ type: ContentChildren, args: [QueryInputDirective,] },],
    };
    return QueryBuilderComponent;
}());
export { QueryBuilderComponent };
//# sourceMappingURL=query-builder.component.js.map