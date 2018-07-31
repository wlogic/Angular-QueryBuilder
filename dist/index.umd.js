/**
 * angular2-query-builder-wlogic - A modernized Angular 2+ query builder based on jquery QueryBuilder
 * @version v0.2.8
 * @author Zeb Zhao
 * @link https://github.com/wlogic/Angular-QueryBuilder#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["angular2-query-builder"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["angular2-query-builder"] = factory(root["ng"]["core"], root["ng"]["forms"], root["ng"]["common"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryOperatorDirective = /** @class */ (function () {
    function QueryOperatorDirective(template) {
        this.template = template;
    }
    QueryOperatorDirective = __decorate([
        core_1.Directive({ selector: '[queryOperator]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryOperatorDirective);
    return QueryOperatorDirective;
}());
exports.QueryOperatorDirective = QueryOperatorDirective;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryFieldDirective = /** @class */ (function () {
    function QueryFieldDirective(template) {
        this.template = template;
    }
    QueryFieldDirective = __decorate([
        core_1.Directive({ selector: '[queryField]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryFieldDirective);
    return QueryFieldDirective;
}());
exports.QueryFieldDirective = QueryFieldDirective;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QuerySwitchGroupDirective = /** @class */ (function () {
    function QuerySwitchGroupDirective(template) {
        this.template = template;
    }
    QuerySwitchGroupDirective = __decorate([
        core_1.Directive({ selector: '[querySwitchGroup]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QuerySwitchGroupDirective);
    return QuerySwitchGroupDirective;
}());
exports.QuerySwitchGroupDirective = QuerySwitchGroupDirective;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryButtonGroupDirective = /** @class */ (function () {
    function QueryButtonGroupDirective(template) {
        this.template = template;
    }
    QueryButtonGroupDirective = __decorate([
        core_1.Directive({ selector: '[queryButtonGroup]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryButtonGroupDirective);
    return QueryButtonGroupDirective;
}());
exports.QueryButtonGroupDirective = QueryButtonGroupDirective;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], QueryInputDirective.prototype, "queryInputType", null);
    QueryInputDirective = __decorate([
        core_1.Directive({ selector: '[queryInput]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryInputDirective);
    return QueryInputDirective;
}());
exports.QueryInputDirective = QueryInputDirective;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryRemoveButtonDirective = /** @class */ (function () {
    function QueryRemoveButtonDirective(template) {
        this.template = template;
    }
    QueryRemoveButtonDirective = __decorate([
        core_1.Directive({ selector: '[queryRemoveButton]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryRemoveButtonDirective);
    return QueryRemoveButtonDirective;
}());
exports.QueryRemoveButtonDirective = QueryRemoveButtonDirective;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = __webpack_require__(1);
exports.QueryBuilderComponent = components_1.QueryBuilderComponent;
var query_builder_module_1 = __webpack_require__(16);
exports.QueryBuilderModule = query_builder_module_1.QueryBuilderModule;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));
__export(__webpack_require__(6));
__export(__webpack_require__(4));
__export(__webpack_require__(7));
__export(__webpack_require__(3));
__export(__webpack_require__(5));
__export(__webpack_require__(8));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(2);
var query_operator_directive_1 = __webpack_require__(3);
var query_field_directive_1 = __webpack_require__(4);
var query_switch_group_directive_1 = __webpack_require__(5);
var query_button_group_directive_1 = __webpack_require__(6);
var query_input_directive_1 = __webpack_require__(7);
var query_remove_button_directive_1 = __webpack_require__(8);
var core_1 = __webpack_require__(0);
exports.CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
exports.VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return QueryBuilderComponent; }),
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
            case 'filters.operator.start_of_current_month':
            case 'filters.operator.start_of_last_month':
            case 'filters.operator.today':
            case 'filters.operator.yesterday':
            case 'filters.operator.enabled':
            case 'filters.operator.disabled':
                return null; // No displayed component
            case 'filters.operator.between':
                return 'betweendate';
            case 'filters.operator.in':
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QueryBuilderComponent.prototype, "allowRuleset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "classNames", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "operatorMap", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "parentData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.QueryList)
    ], QueryBuilderComponent.prototype, "parentInputTemplates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_operator_directive_1.QueryOperatorDirective)
    ], QueryBuilderComponent.prototype, "parentOperatorTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_field_directive_1.QueryFieldDirective)
    ], QueryBuilderComponent.prototype, "parentFieldTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_switch_group_directive_1.QuerySwitchGroupDirective)
    ], QueryBuilderComponent.prototype, "parentSwitchGroupTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_button_group_directive_1.QueryButtonGroupDirective)
    ], QueryBuilderComponent.prototype, "parentButtonGroupTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_remove_button_directive_1.QueryRemoveButtonDirective)
    ], QueryBuilderComponent.prototype, "parentRemoveButtonTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], QueryBuilderComponent.prototype, "parentChangeCallback", void 0);
    __decorate([
        core_1.ContentChild(query_button_group_directive_1.QueryButtonGroupDirective),
        __metadata("design:type", query_button_group_directive_1.QueryButtonGroupDirective)
    ], QueryBuilderComponent.prototype, "buttonGroupTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_switch_group_directive_1.QuerySwitchGroupDirective),
        __metadata("design:type", query_switch_group_directive_1.QuerySwitchGroupDirective)
    ], QueryBuilderComponent.prototype, "switchGroupTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_field_directive_1.QueryFieldDirective),
        __metadata("design:type", query_field_directive_1.QueryFieldDirective)
    ], QueryBuilderComponent.prototype, "fieldTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_operator_directive_1.QueryOperatorDirective),
        __metadata("design:type", query_operator_directive_1.QueryOperatorDirective)
    ], QueryBuilderComponent.prototype, "operatorTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_remove_button_directive_1.QueryRemoveButtonDirective),
        __metadata("design:type", query_remove_button_directive_1.QueryRemoveButtonDirective)
    ], QueryBuilderComponent.prototype, "removeButtonTemplate", void 0);
    __decorate([
        core_1.ContentChildren(query_input_directive_1.QueryInputDirective),
        __metadata("design:type", core_1.QueryList)
    ], QueryBuilderComponent.prototype, "inputTemplates", void 0);
    QueryBuilderComponent = __decorate([
        core_1.Component({
            selector: 'query-builder',
            template: __webpack_require__(12),
            styles: [__webpack_require__(13)],
            providers: [exports.CONTROL_VALUE_ACCESSOR, exports.VALIDATOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], QueryBuilderComponent);
    return QueryBuilderComponent;
}());
exports.QueryBuilderComponent = QueryBuilderComponent;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getClassNames('switchRow')\">\n  <ng-container *ngIf=\"getButtonGroupTemplate() as template; else defaultButtonGroup\">\n    <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n      <ng-container *ngTemplateOutlet=\"template; context: getButtonGroupContext()\"></ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #defaultButtonGroup>\n    <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n      <button (click)=\"addRule()\" [ngClass]=\"getClassNames('button')\">\n        <i [ngClass]=\"getClassNames('addIcon')\"></i> Filter\n      </button>\n      <button (click)=\"addRuleSet()\" [ngClass]=\"getClassNames('button')\" *ngIf=\"allowRuleset\">\n        <i [ngClass]=\"getClassNames('addIcon')\"></i> Ruleset\n      </button>\n      <ng-container *ngIf=\"!!parentData\">\n        <button (click)=\"removeRuleSet()\" [ngClass]=\"getClassNames('button', 'removeButton')\">\n          <i [ngClass]=\"getClassNames('removeIcon')\"></i>\n        </button>\n      </ng-container>\n    </div>\n  </ng-template>\n\n  <ng-container *ngIf=\"getSwitchGroupTemplate() as template; else defaultSwitchGroup\">\n    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: data}\"></ng-container>\n  </ng-container>\n\n  <ng-template #defaultSwitchGroup>\n    <div [ngClass]=\"getClassNames('switchGroup', 'transition')\" *ngIf=\"data\">\n      <div [ngClass]=\"getClassNames('switchControl')\">\n        <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" value=\"and\" #andOption/>\n        <label (click)=\"data.condition=andOption.value\" [ngClass]=\"getClassNames('switchLabel')\">AND</label>\n      </div>\n      <div [ngClass]=\"getClassNames('switchControl')\">\n        <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" value=\"or\" #orOption/>\n        <label (click)=\"data.condition=orOption.value\" [ngClass]=\"getClassNames('switchLabel')\">OR</label>\n      </div>\n    </div>\n  </ng-template>\n</div>\n\n<ul [ngClass]=\"getClassNames('tree')\" *ngIf=\"data && data.rules\">\n  <ng-container *ngFor=\"let rule of data.rules\">\n    <ng-container *ngIf=\"{ruleset: !!rule.rules, invalid: !config.allowEmptyRulesets && rule.rules && rule.rules.length === 0} as local\">\n      <li [ngClass]=\"getQueryItemClassName(local)\">\n        <ng-container *ngIf=\"!local.ruleset\">\n\n          <ng-container *ngIf=\"getRemoveButtonTemplate() as template; else defaultRemoveButton\">\n            <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n              <ng-container *ngTemplateOutlet=\"template; context: getRemoveButtonContext(rule)\"></ng-container>\n            </div>\n          </ng-container>\n\n          <ng-template #defaultRemoveButton>\n            <div [ngClass]=\"getClassNames('removeButtonSize', 'rightAlign')\">\n              <button [ngClass]=\"getClassNames('button', 'removeButton')\" (click)=\"removeRule(rule, data)\">\n                <i [ngClass]=\"getClassNames('removeIcon')\"></i>\n              </button>\n            </div>\n          </ng-template>\n\n          <ng-container *ngIf=\"getFieldTemplate() as template; else defaultField\">\n            <ng-container *ngTemplateOutlet=\"template; context: getFieldContext(rule)\"></ng-container>\n          </ng-container>\n\n          <ng-template #defaultField>\n            <div [ngClass]=\"getClassNames('fieldControlSize')\">\n              <select [ngClass]=\"getClassNames('fieldControl')\" [(ngModel)]=\"rule.field\" (ngModelChange)=\"changeField($event, rule)\">\n                <option *ngFor=\"let field of fields\" [ngValue]=\"field.value\">\n                  {{field.name}}\n                </option>\n              </select>\n            </div>\n          </ng-template>\n\n          <ng-container *ngIf=\"getOperatorTemplate() as template; else defaultOperator\">\n            <ng-container *ngTemplateOutlet=\"template; context: getOperatorContext(rule)\"></ng-container>\n          </ng-container>\n\n          <ng-template #defaultOperator>\n            <div [ngClass]=\"getClassNames('operatorControlSize')\">\n              <select [ngClass]=\"getClassNames('operatorControl')\" [(ngModel)]=\"rule.operator\">\n                <option *ngFor=\"let operator of getOperators(rule.field)\" [ngValue]=\"operator.value\">\n                  {{operator.label}}\n                </option>\n              </select>\n            </div>\n          </ng-template>\n\n          <ng-container *ngIf=\"findTemplateForRule(rule) as template; else defaultInput\">\n            <ng-container *ngTemplateOutlet=\"template; context: getInputContext(rule)\"></ng-container>\n          </ng-container>\n\n          <ng-template #defaultInput>\n            <div [ngClass]=\"getClassNames('inputControlSize')\" [ngSwitch]=\"getInputType(rule.field, rule.operator)\">\n              <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'string'\" type=\"text\">\n              <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'number'\" type=\"number\">\n              <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'date'\" type=\"date\">\n              <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'time'\" type=\"time\">\n              <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'category'\">\n                <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\n                  {{opt.name}}\n                </option>\n              </select>\n              <ng-container *ngSwitchCase=\"'multiselect'\">\n                <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" multiple>\n                  <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\n                    {{opt.name}}\n                  </option>\n                </select>\n              </ng-container>\n              <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" *ngSwitchCase=\"'boolean'\" type=\"checkbox\">\n            </div>\n          </ng-template>\n\n        </ng-container>\n        <query-builder *ngIf=\"local.ruleset\"\n          [data]=\"rule\"\n          [parentChangeCallback]=\"parentChangeCallback || onChangeCallback\"\n          [parentInputTemplates]=\"parentInputTemplates || inputTemplates\"\n          [parentOperatorTemplate]=\"parentOperatorTemplate || operatorTemplate\"\n          [parentFieldTemplate]=\"parentFieldTemplate || fieldTemplate\"\n          [parentSwitchGroupTemplate]=\"parentSwitchGroupTemplate || switchGroupTemplate\"\n          [parentButtonGroupTemplate]=\"parentButtonGroupTemplate || buttonGroupTemplate\"\n          [parentRemoveButtonTemplate]=\"parentRemoveButtonTemplate || removeButtonTemplate\"\n          [parentData]=\"data\"\n          [classNames]=\"classNames\"\n          [config]=\"config\"\n          [allowRuleset]=\"allowRuleset\"\n          [operatorMap]=\"operatorMap\">\n        </query-builder>\n        <p [ngClass]=\"getClassNames('emptyWarning')\" *ngIf=\"local.invalid\">A ruleset cannot be empty. Please add a rule or remove it all together.</p>\n      </li>\n    </ng-container>\n  </ng-container>\n</ul>\n"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(14);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n:host {\n  display: block;\n  width: 100%; }\n  :host .q-icon {\n    font-style: normal;\n    font-size: 12px; }\n  :host .q-remove-icon::before {\n    content: '\\274C'; }\n  :host .q-add-icon {\n    color: #555; }\n    :host .q-add-icon::before {\n      content: '\\2795'; }\n  :host .q-remove-button {\n    color: #B3415D; }\n  :host .q-switch-group, :host .q-button-group {\n    font-family: \"Lucida Grande\", Tahoma, Verdana, sans-serif;\n    overflow: hidden; }\n  :host .q-right-align {\n    float: right; }\n  :host .q-button {\n    margin-left: 8px;\n    padding: 2px 8px;\n    background-color: white; }\n  :host .q-control-size {\n    display: inline-block;\n    vertical-align: top; }\n  :host .q-input-control, :host .q-operator-control, :host .q-field-control {\n    display: inline-block;\n    padding: 5px 8px;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    width: auto; }\n  :host .q-operator-control, :host .q-field-control, :host .q-input-control:not([type='checkbox']) {\n    min-height: 32px;\n    -webkit-appearance: none; }\n  :host .q-switch-label, :host .q-button {\n    float: left;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    text-align: center;\n    text-shadow: none;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-sizing: border-box; }\n    :host .q-switch-label:hover, :host .q-button:hover {\n      cursor: pointer;\n      background-color: #F0F0F0; }\n  :host .q-switch-label {\n    background-color: #e4e4e4;\n    line-height: 24px;\n    padding: 0 8px; }\n  :host .q-switch-radio {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    width: 1px;\n    border: 0;\n    overflow: hidden; }\n    :host .q-switch-radio:checked + .q-switch-label {\n      border: 1px solid #619ed7;\n      background: white;\n      color: #3176b3; }\n  :host .q-invalid-ruleset {\n    border: 1px solid rgba(179, 65, 93, 0.5) !important;\n    background: rgba(179, 65, 93, 0.1) !important; }\n  :host .q-empty-warning {\n    color: #8d252e;\n    text-align: center; }\n  :host .q-ruleset {\n    border: 1px solid #CCC;\n    background: rgba(204, 204, 204, 0.2); }\n    :host .q-ruleset:hover {\n      border: 1px solid rgba(97, 158, 215, 0.5);\n      background: rgba(97, 158, 215, 0.1); }\n  :host .q-rule {\n    border: 1px solid #CCC;\n    background: white; }\n  :host .q-transition {\n    -webkit-transition: all 0.1s ease-in-out;\n    -moz-transition: all 0.1s ease-in-out;\n    -ms-transition: all 0.1s ease-in-out;\n    -o-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out; }\n  :host .q-tree {\n    list-style: none;\n    margin: 4px 0 2px; }\n  :host .q-row {\n    padding: 4px 6px;\n    margin-top: 4px; }\n  :host .q-connector {\n    position: relative; }\n    :host .q-connector::before {\n      top: -5px;\n      border-width: 0 0 2px 2px; }\n    :host .q-connector::after {\n      border-width: 0 0 0 2px;\n      top: 50%; }\n    :host .q-connector::before, :host .q-connector::after {\n      content: '';\n      left: -12px;\n      border-color: #CCC;\n      border-style: solid;\n      width: 9px;\n      height: calc(50% + 6px);\n      position: absolute; }\n    :host .q-connector:last-child::after {\n      content: none; }\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(2);
var components_1 = __webpack_require__(1);
var QueryBuilderModule = /** @class */ (function () {
    function QueryBuilderModule() {
    }
    QueryBuilderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                components_1.QueryBuilderComponent,
                components_1.QueryInputDirective,
                components_1.QueryOperatorDirective,
                components_1.QueryFieldDirective,
                components_1.QueryButtonGroupDirective,
                components_1.QuerySwitchGroupDirective,
                components_1.QueryRemoveButtonDirective
            ],
            exports: [
                components_1.QueryBuilderComponent,
                components_1.QueryInputDirective,
                components_1.QueryOperatorDirective,
                components_1.QueryFieldDirective,
                components_1.QueryButtonGroupDirective,
                components_1.QuerySwitchGroupDirective,
                components_1.QueryRemoveButtonDirective
            ]
        })
    ], QueryBuilderModule);
    return QueryBuilderModule;
}());
exports.QueryBuilderModule = QueryBuilderModule;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map