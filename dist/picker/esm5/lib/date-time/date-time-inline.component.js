import { __extends, __read, __spread } from "tslib";
/**
 * date-time-inline.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { OwlDateTime } from './date-time.class';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./adapter/date-time-adapter.class";
import * as i2 from "./date-time-picker-container.component";
export var OWL_DATETIME_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return OwlDateTimeInlineComponent; }),
    multi: true
};
var OwlDateTimeInlineComponent = /** @class */ (function (_super) {
    __extends(OwlDateTimeInlineComponent, _super);
    function OwlDateTimeInlineComponent(changeDetector, dateTimeAdapter, dateTimeFormats) {
        var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;
        _this.changeDetector = changeDetector;
        _this.dateTimeAdapter = dateTimeAdapter;
        _this.dateTimeFormats = dateTimeFormats;
        /**
         * Set the type of the dateTime picker
         *      'both' -- show both calendar and timer
         *      'calendar' -- show only calendar
         *      'timer' -- show only timer
         */
        _this._pickerType = 'both';
        _this._disabled = false;
        _this._selectMode = 'single';
        _this._values = [];
        /**
         * Emits selected year in multi-year view
         * This doesn't imply a change on the selected date.
         * */
        _this.yearSelected = new EventEmitter();
        /**
         * Emits selected month in year view
         * This doesn't imply a change on the selected date.
         * */
        _this.monthSelected = new EventEmitter();
        _this._selecteds = [];
        _this.onModelChange = function () { };
        _this.onModelTouched = function () { };
        return _this;
    }
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerType", {
        get: function () {
            return this._pickerType;
        },
        set: function (val) {
            if (val !== this._pickerType) {
                this._pickerType = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "disabled", {
        get: function () {
            return !!this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selectMode", {
        get: function () {
            return this._selectMode;
        },
        set: function (mode) {
            if (mode !== 'single' &&
                mode !== 'range' &&
                mode !== 'rangeFrom' &&
                mode !== 'rangeTo') {
                throw Error('OwlDateTime Error: invalid selectMode value!');
            }
            this._selectMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "startAt", {
        get: function () {
            if (this._startAt) {
                return this._startAt;
            }
            if (this.selectMode === 'single') {
                return this.value || null;
            }
            else if (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom') {
                return this.values[0] || null;
            }
            else if (this.selectMode === 'rangeTo') {
                return this.values[1] || null;
            }
            else {
                return null;
            }
        },
        set: function (date) {
            this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "dateTimeFilter", {
        get: function () {
            return this._dateTimeFilter;
        },
        set: function (filter) {
            this._dateTimeFilter = filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "minDateTime", {
        get: function () {
            return this._min || null;
        },
        set: function (value) {
            this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "maxDateTime", {
        get: function () {
            return this._max || null;
        },
        set: function (value) {
            this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            value = this.getValidDate(value);
            this._value = value;
            this.selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (values) {
            var _this = this;
            if (values && values.length > 0) {
                values = values.map(function (v) {
                    v = _this.dateTimeAdapter.deserialize(v);
                    v = _this.getValidDate(v);
                    return v ? _this.dateTimeAdapter.clone(v) : null;
                });
                this._values = __spread(values);
                this.selecteds = __spread(values);
            }
            else {
                this._values = [];
                this.selecteds = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            this._selecteds = values;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "opened", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerMode", {
        get: function () {
            return 'inline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInSingleMode", {
        get: function () {
            return this._selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInRangeMode", {
        get: function () {
            return (this._selectMode === 'range' ||
                this._selectMode === 'rangeFrom' ||
                this._selectMode === 'rangeTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "owlDTInlineClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeInlineComponent.prototype.ngOnInit = function () {
        this.container.picker = this;
    };
    OwlDateTimeInlineComponent.prototype.writeValue = function (value) {
        if (this.isInSingleMode) {
            this.value = value;
            this.container.pickerMoment = value;
        }
        else {
            this.values = value;
            this.container.pickerMoment = this._values[this.container.activeSelectedIndex];
        }
    };
    OwlDateTimeInlineComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    OwlDateTimeInlineComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    OwlDateTimeInlineComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    OwlDateTimeInlineComponent.prototype.select = function (date) {
        if (this.disabled) {
            return;
        }
        if (Array.isArray(date)) {
            this.values = __spread(date);
        }
        else {
            this.value = date;
        }
        this.onModelChange(date);
        this.onModelTouched();
    };
    /**
     * Emits the selected year in multi-year view
     * */
    OwlDateTimeInlineComponent.prototype.selectYear = function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /**
     * Emits selected month in year view
     * */
    OwlDateTimeInlineComponent.prototype.selectMonth = function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    OwlDateTimeInlineComponent.ɵfac = function OwlDateTimeInlineComponent_Factory(t) { return new (t || OwlDateTimeInlineComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateTimeAdapter, 8), i0.ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8)); };
    OwlDateTimeInlineComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlDateTimeInlineComponent, selectors: [["owl-date-time-inline"]], viewQuery: function OwlDateTimeInlineComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(OwlDateTimeContainerComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
        } }, hostVars: 2, hostBindings: function OwlDateTimeInlineComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-inline", ctx.owlDTInlineClass);
        } }, inputs: { pickerType: "pickerType", disabled: "disabled", selectMode: "selectMode", startAt: "startAt", dateTimeFilter: ["owlDateTimeFilter", "dateTimeFilter"], minDateTime: ["min", "minDateTime"], maxDateTime: ["max", "maxDateTime"], value: "value", values: "values" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected" }, features: [i0.ɵɵProvidersFeature([OWL_DATETIME_VALUE_ACCESSOR]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function OwlDateTimeInlineComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "owl-date-time-container");
        } }, directives: [i2.OwlDateTimeContainerComponent], styles: [""], changeDetection: 0 });
    return OwlDateTimeInlineComponent;
}(OwlDateTime));
export { OwlDateTimeInlineComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDateTimeInlineComponent, [{
        type: Component,
        args: [{
                selector: 'owl-date-time-inline',
                templateUrl: './date-time-inline.component.html',
                styleUrls: ['./date-time-inline.component.scss'],
                host: {
                    '[class.owl-dt-inline]': 'owlDTInlineClass'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                providers: [OWL_DATETIME_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DateTimeAdapter, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { container: [{
            type: ViewChild,
            args: [OwlDateTimeContainerComponent, { static: true }]
        }], pickerType: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selectMode: [{
            type: Input
        }], startAt: [{
            type: Input
        }], dateTimeFilter: [{
            type: Input,
            args: ['owlDateTimeFilter']
        }], minDateTime: [{
            type: Input,
            args: ['min']
        }], maxDateTime: [{
            type: Input,
            args: ['max']
        }], value: [{
            type: Input
        }], values: [{
            type: Input
        }], yearSelected: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtaW5saW5lLmNvbXBvbmVudC50cyIsImxpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLWlubGluZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQUUsWUFBWSxFQUN2QixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUNILFdBQVcsRUFJZCxNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQ0gscUJBQXFCLEVBRXhCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7QUFFdkYsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQVE7SUFDNUMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwwQkFBMEIsRUFBMUIsQ0FBMEIsQ0FBQztJQUN6RCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRjtJQVdtRCw4Q0FBYztJQW1ON0Qsb0NBQ2MsY0FBaUMsRUFDckIsZUFBbUMsRUFHL0MsZUFBbUM7UUFMakQsWUFPSSxrQkFBTSxlQUFlLEVBQUUsZUFBZSxDQUFDLFNBQzFDO1FBUGEsb0JBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ3JCLHFCQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUcvQyxxQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFuTmpEOzs7OztXQUtHO1FBQ0ssaUJBQVcsR0FBZSxNQUFNLENBQUM7UUFZakMsZUFBUyxHQUFHLEtBQUssQ0FBQztRQVVsQixpQkFBVyxHQUFlLFFBQVEsQ0FBQztRQWdHbkMsYUFBTyxHQUFRLEVBQUUsQ0FBQztRQXFCMUI7OzthQUdLO1FBRUwsa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBRXJDOzs7YUFHSztRQUVMLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQVk5QixnQkFBVSxHQUFRLEVBQUUsQ0FBQztRQWtDckIsbUJBQWEsR0FBYSxjQUFPLENBQUMsQ0FBQztRQUNuQyxvQkFBYyxHQUFhLGNBQU8sQ0FBQyxDQUFDOztJQVU1QyxDQUFDO0lBL01ELHNCQUNJLGtEQUFVO2FBRGQ7WUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWUsR0FBZTtZQUMxQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQzthQUMxQjtRQUNMLENBQUM7OztPQU5BO0lBU0Qsc0JBQ0ksZ0RBQVE7YUFEWjtZQUVJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWEsS0FBYztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUpBO0lBT0Qsc0JBQ0ksa0RBQVU7YUFEZDtZQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZSxJQUFnQjtZQUMzQixJQUNJLElBQUksS0FBSyxRQUFRO2dCQUNqQixJQUFJLEtBQUssT0FBTztnQkFDaEIsSUFBSSxLQUFLLFdBQVc7Z0JBQ3BCLElBQUksS0FBSyxTQUFTLEVBQ3BCO2dCQUNFLE1BQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7YUFDL0Q7WUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDOzs7T0FiQTtJQWlCRCxzQkFDSSwrQ0FBTzthQURYO1lBRUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN4QjtZQUVELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7YUFDN0I7aUJBQU0sSUFDSCxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU87Z0JBQzNCLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxFQUNqQztnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO2FBQ2pDO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7YUFFRCxVQUFZLElBQWM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FDekMsQ0FBQztRQUNOLENBQUM7OztPQU5BO0lBU0Qsc0JBQ0ksc0RBQWM7YUFEbEI7WUFFSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQUVELFVBQW1CLE1BQW1DO1lBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBU0Qsc0JBQUksbURBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQ2dCLEtBQWU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxDQUFDOzs7T0FOQTtJQVdELHNCQUFJLG1EQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUNnQixLQUFlO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQzs7O09BTkE7SUFTRCxzQkFDSSw2Q0FBSzthQURUO1lBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWU7WUFDckIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQVBBO0lBVUQsc0JBQ0ksOENBQU07YUFEVjtZQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBVyxNQUFXO1lBQXRCLGlCQWFDO1lBWkcsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztvQkFDakIsQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxDQUFDLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFPLFlBQU8sTUFBTSxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLFlBQU8sTUFBTSxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQzs7O09BZkE7SUFnQ0Qsc0JBQUksZ0RBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFlO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQzs7O09BTEE7SUFRRCxzQkFBSSxpREFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFjLE1BQVc7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLDhDQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFVO2FBQWQ7WUFDSSxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNEQUFjO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFEQUFhO2FBQWpCO1lBQ0ksT0FBTyxDQUNILElBQUksQ0FBQyxXQUFXLEtBQUssT0FBTztnQkFDNUIsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FDakMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0RBQWdCO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFlTSw2Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTSwrQ0FBVSxHQUFqQixVQUFrQixLQUFVO1FBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDdkM7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQ3JDLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFTSxxREFBZ0IsR0FBdkIsVUFBd0IsRUFBTztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sc0RBQWlCLEdBQXhCLFVBQXlCLEVBQU87UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHFEQUFnQixHQUF2QixVQUF3QixVQUFtQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRU0sMkNBQU0sR0FBYixVQUFjLElBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTztTQUNWO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLFlBQU8sSUFBSSxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOztTQUVLO0lBQ0UsK0NBQVUsR0FBakIsVUFBa0IsY0FBaUI7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztTQUVLO0lBQ0UsZ0RBQVcsR0FBbEIsVUFBbUIsZUFBa0I7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0MsQ0FBQzt3R0FuUlEsMEJBQTBCLGdIQXVOdkIscUJBQXFCO21FQXZOeEIsMEJBQTBCO2lDQUV4Qiw2QkFBNkI7Ozs7Ozt3WUFKN0IsQ0FBQywyQkFBMkIsQ0FBQztZQzlDNUMsMENBQW1EOztxQ0RBbkQ7Q0FvVUMsQUEvUkQsQ0FXbUQsV0FBVyxHQW9SN0Q7U0FwUlksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FYdEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxJQUFJLEVBQUU7b0JBQ0YsdUJBQXVCLEVBQUUsa0JBQWtCO2lCQUM5QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDM0M7O3NCQXNOUSxRQUFROztzQkFDUixRQUFROztzQkFDUixNQUFNO3VCQUFDLHFCQUFxQjs7a0JBck5oQyxTQUFTO21CQUFDLDZCQUE2QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBVXpELEtBQUs7O2tCQVlMLEtBQUs7O2tCQVVMLEtBQUs7O2tCQW9CTCxLQUFLOztrQkEyQkwsS0FBSzttQkFBQyxtQkFBbUI7O2tCQWdCekIsS0FBSzttQkFBQyxLQUFLOztrQkFhWCxLQUFLO21CQUFDLEtBQUs7O2tCQU9YLEtBQUs7O2tCQWFMLEtBQUs7O2tCQXdCTCxNQUFNOztrQkFPTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGRhdGUtdGltZS1pbmxpbmUuY29tcG9uZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBDb21wb25lbnQsIEV2ZW50RW1pdHRlcixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBJbmplY3QsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE9wdGlvbmFsLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHtcclxuICAgIE93bERhdGVUaW1lLFxyXG4gICAgUGlja2VyTW9kZSxcclxuICAgIFBpY2tlclR5cGUsXHJcbiAgICBTZWxlY3RNb2RlXHJcbn0gZnJvbSAnLi9kYXRlLXRpbWUuY2xhc3MnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgT1dMX0RBVEVfVElNRV9GT1JNQVRTLFxyXG4gICAgT3dsRGF0ZVRpbWVGb3JtYXRzXHJcbn0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1mb3JtYXQuY2xhc3MnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBPV0xfREFURVRJTUVfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gT3dsRGF0ZVRpbWVJbmxpbmVDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLWlubGluZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10aW1lLWlubGluZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlLXRpbWUtaW5saW5lLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtaW5saW5lXSc6ICdvd2xEVElubGluZUNsYXNzJ1xyXG4gICAgfSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBwcm92aWRlcnM6IFtPV0xfREFURVRJTUVfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xEYXRlVGltZUlubGluZUNvbXBvbmVudDxUPiBleHRlbmRzIE93bERhdGVUaW1lPFQ+XHJcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgQFZpZXdDaGlsZChPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcclxuICAgIGNvbnRhaW5lcjogT3dsRGF0ZVRpbWVDb250YWluZXJDb21wb25lbnQ8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGRhdGVUaW1lIHBpY2tlclxyXG4gICAgICogICAgICAnYm90aCcgLS0gc2hvdyBib3RoIGNhbGVuZGFyIGFuZCB0aW1lclxyXG4gICAgICogICAgICAnY2FsZW5kYXInIC0tIHNob3cgb25seSBjYWxlbmRhclxyXG4gICAgICogICAgICAndGltZXInIC0tIHNob3cgb25seSB0aW1lclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9waWNrZXJUeXBlOiBQaWNrZXJUeXBlID0gJ2JvdGgnO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwaWNrZXJUeXBlKCk6IFBpY2tlclR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waWNrZXJUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwaWNrZXJUeXBlKHZhbDogUGlja2VyVHlwZSkge1xyXG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuX3BpY2tlclR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGlja2VyVHlwZSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdE1vZGU6IFNlbGVjdE1vZGUgPSAnc2luZ2xlJztcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0TW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0TW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0TW9kZShtb2RlOiBTZWxlY3RNb2RlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBtb2RlICE9PSAnc2luZ2xlJyAmJlxyXG4gICAgICAgICAgICBtb2RlICE9PSAncmFuZ2UnICYmXHJcbiAgICAgICAgICAgIG1vZGUgIT09ICdyYW5nZUZyb20nICYmXHJcbiAgICAgICAgICAgIG1vZGUgIT09ICdyYW5nZVRvJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignT3dsRGF0ZVRpbWUgRXJyb3I6IGludmFsaWQgc2VsZWN0TW9kZSB2YWx1ZSEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdE1vZGUgPSBtb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUaGUgZGF0ZSB0byBvcGVuIHRoZSBjYWxlbmRhciB0byBpbml0aWFsbHkuICovXHJcbiAgICBwcml2YXRlIF9zdGFydEF0OiBUIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RhcnRBdCgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0QXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RNb2RlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlJyB8fFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZUZyb20nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXSB8fCBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2VUbycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdIHx8IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGFydEF0KGRhdGU6IFQgfCBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRBdCA9IHRoaXMuZ2V0VmFsaWREYXRlKFxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZShkYXRlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0ZVRpbWVGaWx0ZXI6IChkYXRlOiBUIHwgbnVsbCkgPT4gYm9vbGVhbjtcclxuICAgIEBJbnB1dCgnb3dsRGF0ZVRpbWVGaWx0ZXInKVxyXG4gICAgZ2V0IGRhdGVUaW1lRmlsdGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlVGltZUZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGF0ZVRpbWVGaWx0ZXIoZmlsdGVyOiAoZGF0ZTogVCB8IG51bGwpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9kYXRlVGltZUZpbHRlciA9IGZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIG1pbmltdW0gdmFsaWQgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX21pbjogVCB8IG51bGw7XHJcblxyXG4gICAgZ2V0IG1pbkRhdGVUaW1lKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdtaW4nKVxyXG4gICAgc2V0IG1pbkRhdGVUaW1lKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX21pbiA9IHRoaXMuZ2V0VmFsaWREYXRlKHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIG1heGltdW0gdmFsaWQgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX21heDogVCB8IG51bGw7XHJcblxyXG4gICAgZ2V0IG1heERhdGVUaW1lKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4IHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdtYXgnKVxyXG4gICAgc2V0IG1heERhdGVUaW1lKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX21heCA9IHRoaXMuZ2V0VmFsaWREYXRlKHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF92YWx1ZTogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IFQgfCBudWxsKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsdWVzOiBUW10gPSBbXTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZhbHVlcyh2YWx1ZXM6IFRbXSkge1xyXG4gICAgICAgIGlmICh2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIHYgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2KTtcclxuICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldFZhbGlkRGF0ZSh2KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2ID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xvbmUodikgOiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gWy4uLnZhbHVlc107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzID0gWy4uLnZhbHVlc107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW1pdHMgc2VsZWN0ZWQgeWVhciBpbiBtdWx0aS15ZWFyIHZpZXdcclxuICAgICAqIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZS5cclxuICAgICAqICovXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHllYXJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXRzIHNlbGVjdGVkIG1vbnRoIGluIHllYXIgdmlld1xyXG4gICAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxyXG4gICAgICogKi9cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgbW9udGhTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogVCB8IG51bGw7XHJcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRzOiBUW10gPSBbXTtcclxuICAgIGdldCBzZWxlY3RlZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0ZWRzKHZhbHVlczogVFtdKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRzID0gdmFsdWVzO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGlja2VyTW9kZSgpOiBQaWNrZXJNb2RlIHtcclxuICAgICAgICByZXR1cm4gJ2lubGluZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzSW5TaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RNb2RlID09PSAnc2luZ2xlJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJblJhbmdlTW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RNb2RlID09PSAncmFuZ2UnIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdE1vZGUgPT09ICdyYW5nZUZyb20nIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdE1vZGUgPT09ICdyYW5nZVRvJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERUSW5saW5lQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xyXG4gICAgcHJpdmF0ZSBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBkYXRlVGltZUFkYXB0ZXI6IERhdGVUaW1lQWRhcHRlcjxUPixcclxuICAgICAgICBAT3B0aW9uYWwoKVxyXG4gICAgICAgIEBJbmplY3QoT1dMX0RBVEVfVElNRV9GT1JNQVRTKVxyXG4gICAgICAgIHByb3RlY3RlZCBkYXRlVGltZUZvcm1hdHM6IE93bERhdGVUaW1lRm9ybWF0c1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0ZVRpbWVBZGFwdGVyLCBkYXRlVGltZUZvcm1hdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5waWNrZXIgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0luU2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnBpY2tlck1vbWVudCA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnBpY2tlck1vbWVudCA9IHRoaXMuX3ZhbHVlc1tcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFjdGl2ZVNlbGVjdGVkSW5kZXhcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0KGRhdGU6IFRbXSB8IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi5kYXRlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKGRhdGUpO1xyXG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyIGluIG11bHRpLXllYXIgdmlld1xyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBzZWxlY3RZZWFyKG5vcm1hbGl6ZWRZZWFyOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0cyBzZWxlY3RlZCBtb250aCBpbiB5ZWFyIHZpZXdcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgc2VsZWN0TW9udGgobm9ybWFsaXplZE1vbnRoOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb250aFNlbGVjdGVkLmVtaXQobm9ybWFsaXplZE1vbnRoKTtcclxuICAgIH1cclxufVxyXG4iLCI8b3dsLWRhdGUtdGltZS1jb250YWluZXI+PC9vd2wtZGF0ZS10aW1lLWNvbnRhaW5lcj4iXX0=