/**
 * calendar-year-view.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
import { CalendarCell, OwlCalendarBodyComponent } from './calendar-body.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
import { Subscription } from 'rxjs';
import { DOWN_ARROW, END, ENTER, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "./adapter/date-time-adapter.class";
import * as i2 from "./calendar-body.component";
var MONTHS_PER_YEAR = 12;
var MONTHS_PER_ROW = 3;
var OwlYearViewComponent = /** @class */ (function () {
    function OwlYearViewComponent(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * The select mode of the picker;
         * */
        this._selectMode = 'single';
        this._selecteds = [];
        this.localeSub = Subscription.EMPTY;
        this.initiated = false;
        /**
         * An array to hold all selectedDates' month value
         * the value is the month number in current year
         * */
        this.selectedMonths = [];
        /**
         * Callback to invoke when a new month is selected
         * */
        this.change = new EventEmitter();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         * */
        this.monthSelected = new EventEmitter();
        /** Emits when any date is activated. */
        this.pickerMomentChange = new EventEmitter();
        /** Emits when use keyboard enter to select a calendar cell */
        this.keyboardEnter = new EventEmitter();
        this.monthNames = this.dateTimeAdapter.getMonthNames('short');
    }
    Object.defineProperty(OwlYearViewComponent.prototype, "selectMode", {
        get: function () {
            return this._selectMode;
        },
        set: function (val) {
            this._selectMode = val;
            if (this.initiated) {
                this.generateMonthList();
                this.cdRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
            this.setSelectedMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            this._selecteds = [];
            for (var i = 0; i < values.length; i++) {
                var value = this.dateTimeAdapter.deserialize(values[i]);
                this._selecteds.push(this.getValidDate(value));
            }
            this.setSelectedMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            var oldMoment = this._pickerMoment;
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment =
                this.getValidDate(value) || this.dateTimeAdapter.now();
            if (!this.hasSameYear(oldMoment, this._pickerMoment) &&
                this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "dateFilter", {
        get: function () {
            return this._dateFilter;
        },
        set: function (filter) {
            this._dateFilter = filter;
            if (this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateMonthList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "months", {
        get: function () {
            return this._months;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "activeCell", {
        get: function () {
            if (this._pickerMoment) {
                return this.dateTimeAdapter.getMonth(this._pickerMoment);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "isInRangeMode", {
        get: function () {
            return (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom' ||
                this.selectMode === 'rangeTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlYearViewComponent.prototype, "owlDTCalendarView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlYearViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
            _this.generateMonthList();
            _this.cdRef.markForCheck();
        });
    };
    OwlYearViewComponent.prototype.ngAfterContentInit = function () {
        this.generateMonthList();
        this.initiated = true;
    };
    OwlYearViewComponent.prototype.ngOnDestroy = function () {
        this.localeSub.unsubscribe();
    };
    /**
     * Handle a calendarCell selected
     */
    OwlYearViewComponent.prototype.selectCalendarCell = function (cell) {
        this.selectMonth(cell.value);
    };
    /**
     * Handle a new month selected
     */
    OwlYearViewComponent.prototype.selectMonth = function (month) {
        var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        this.monthSelected.emit(firstDateOfMonth);
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        var result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.change.emit(result);
    };
    /**
     * Handle keydown event on calendar body
     */
    OwlYearViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;
        switch (event.keyCode) {
            // minus 1 month
            case LEFT_ARROW:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 month
            case RIGHT_ARROW:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 3 months
            case UP_ARROW:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -3);
                this.pickerMomentChange.emit(moment);
                break;
            // add 3 months
            case DOWN_ARROW:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 3);
                this.pickerMomentChange.emit(moment);
                break;
            // move to first month of current year
            case HOME:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // move to last month of current year
            case END:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 11 - this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 year (or 10 year)
            case PAGE_UP:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 : -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 year (or 10 year)
            case PAGE_DOWN:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 : 1);
                this.pickerMomentChange.emit(moment);
                break;
            // Select current month
            case ENTER:
                this.selectMonth(this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.keyboardEnter.emit();
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    };
    /**
     * Generate the calendar month list
     * */
    OwlYearViewComponent.prototype.generateMonthList = function () {
        if (!this.pickerMoment) {
            return;
        }
        this.setSelectedMonths();
        this.todayMonth = this.getMonthInCurrentYear(this.dateTimeAdapter.now());
        this._months = [];
        for (var i = 0; i < MONTHS_PER_YEAR / MONTHS_PER_ROW; i++) {
            var row = [];
            for (var j = 0; j < MONTHS_PER_ROW; j++) {
                var month = j + i * MONTHS_PER_ROW;
                var monthCell = this.createMonthCell(month);
                row.push(monthCell);
            }
            this._months.push(row);
        }
        return;
    };
    /**
     * Creates an CalendarCell for the given month.
     */
    OwlYearViewComponent.prototype.createMonthCell = function (month) {
        var startDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        var ariaLabel = this.dateTimeAdapter.format(startDateOfMonth, this.dateTimeFormats.monthYearA11yLabel);
        var cellClass = 'owl-dt-month-' + month;
        return new CalendarCell(month, this.monthNames[month], ariaLabel, this.isMonthEnabled(month), false, cellClass);
    };
    /**
     * Check if the given month is enable
     */
    OwlYearViewComponent.prototype.isMonthEnabled = function (month) {
        var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        // If any date in the month is selectable,
        // we count the month as enable
        for (var date = firstDateOfMonth; this.dateTimeAdapter.getMonth(date) === month; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
            if (!!date &&
                (!this.dateFilter || this.dateFilter(date)) &&
                (!this.minDate ||
                    this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
                (!this.maxDate ||
                    this.dateTimeAdapter.compare(date, this.maxDate) <= 0)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    OwlYearViewComponent.prototype.getMonthInCurrentYear = function (date) {
        if (this.getValidDate(date) && this.getValidDate(this._pickerMoment)) {
            var result = this.dateTimeAdapter.compareYear(date, this._pickerMoment);
            // < 0 : the given date's year is before pickerMoment's year, we return -1 as selected month value.
            // > 0 : the given date's year is after pickerMoment's year, we return 12 as selected month value.
            // 0 : the give date's year is same as the pickerMoment's year, we return the actual month value.
            if (result < 0) {
                return -1;
            }
            else if (result > 0) {
                return 12;
            }
            else {
                return this.dateTimeAdapter.getMonth(date);
            }
        }
        else {
            return null;
        }
    };
    /**
     * Set the selectedMonths value
     * In single mode, it has only one value which represent the month the selected date in
     * In range mode, it would has two values, one for the month the fromValue in and the other for the month the toValue in
     * */
    OwlYearViewComponent.prototype.setSelectedMonths = function () {
        this.selectedMonths = [];
        if (this.isInSingleMode && this.selected) {
            this.selectedMonths[0] = this.getMonthInCurrentYear(this.selected);
        }
        if (this.isInRangeMode && this.selecteds) {
            this.selectedMonths[0] = this.getMonthInCurrentYear(this.selecteds[0]);
            this.selectedMonths[1] = this.getMonthInCurrentYear(this.selecteds[1]);
        }
    };
    /**
     * Check the given dates are in the same year
     */
    OwlYearViewComponent.prototype.hasSameYear = function (dateLeft, dateRight) {
        return !!(dateLeft &&
            dateRight &&
            this.dateTimeAdapter.getYear(dateLeft) ===
                this.dateTimeAdapter.getYear(dateRight));
    };
    /**
     * Get a valid date object
     */
    OwlYearViewComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    };
    OwlYearViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
    };
    OwlYearViewComponent.ɵfac = function OwlYearViewComponent_Factory(t) { return new (t || OwlYearViewComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateTimeAdapter, 8), i0.ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8)); };
    OwlYearViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlYearViewComponent, selectors: [["owl-date-time-year-view"]], viewQuery: function OwlYearViewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(OwlCalendarBodyComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendarBodyElm = _t.first);
        } }, hostVars: 2, hostBindings: function OwlYearViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-calendar-view", ctx.owlDTCalendarView);
        } }, inputs: { selectMode: "selectMode", selected: "selected", selecteds: "selecteds", pickerMoment: "pickerMoment", dateFilter: "dateFilter", minDate: "minDate", maxDate: "maxDate" }, outputs: { change: "change", monthSelected: "monthSelected", pickerMomentChange: "pickerMomentChange", keyboardEnter: "keyboardEnter" }, exportAs: ["owlMonthView"], decls: 5, vars: 7, consts: [[1, "owl-dt-calendar-table", "owl-dt-calendar-year-table"], [1, "owl-dt-calendar-header"], ["aria-hidden", "true", "colspan", "3", 1, "owl-dt-calendar-table-divider"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "rows", "numCols", "cellRatio", "activeCell", "todayValue", "selectedValues", "selectMode", "keydown", "select"]], template: function OwlYearViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementStart(1, "thead", 1);
            i0.ɵɵelementStart(2, "tr");
            i0.ɵɵelement(3, "th", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "tbody", 3);
            i0.ɵɵlistener("keydown", function OwlYearViewComponent_Template_tbody_keydown_4_listener($event) { return ctx.handleCalendarKeydown($event); })("select", function OwlYearViewComponent_Template_tbody_select_4_listener($event) { return ctx.selectCalendarCell($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("rows", ctx.months)("numCols", 3)("cellRatio", 3 / 7)("activeCell", ctx.activeCell)("todayValue", ctx.todayMonth)("selectedValues", ctx.selectedMonths)("selectMode", ctx.selectMode);
        } }, directives: [i2.OwlCalendarBodyComponent], styles: [""], changeDetection: 0 });
    return OwlYearViewComponent;
}());
export { OwlYearViewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlYearViewComponent, [{
        type: Component,
        args: [{
                selector: 'owl-date-time-year-view',
                exportAs: 'owlMonthView',
                templateUrl: './calendar-year-view.component.html',
                styleUrls: ['./calendar-year-view.component.scss'],
                host: {
                    '[class.owl-dt-calendar-view]': 'owlDTCalendarView'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DateTimeAdapter, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { selectMode: [{
            type: Input
        }], selected: [{
            type: Input
        }], selecteds: [{
            type: Input
        }], pickerMoment: [{
            type: Input
        }], dateFilter: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], change: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }], pickerMomentChange: [{
            type: Output
        }], keyboardEnter: [{
            type: Output
        }], calendarBodyElm: [{
            type: ViewChild,
            args: [OwlCalendarBodyComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIteWVhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL2NhbGVuZGFyLXllYXItdmlldy5jb21wb25lbnQudHMiLCJsaWIvZGF0ZS10aW1lL2NhbGVuZGFyLXllYXItdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFFSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsWUFBWSxFQUNaLHdCQUF3QixFQUMzQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQ0gscUJBQXFCLEVBRXhCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQ0gsVUFBVSxFQUNWLEdBQUcsRUFDSCxLQUFLLEVBQ0wsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsT0FBTyxFQUNQLFdBQVcsRUFDWCxRQUFRLEVBQ1gsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUvQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXpCO0lBOExJLDhCQUNZLEtBQXdCLEVBQ1osZUFBbUMsRUFHL0MsZUFBbUM7UUFKbkMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDWixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFHL0Msb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBdEwvQzs7YUFFSztRQUNHLGdCQUFXLEdBQWUsUUFBUSxD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UCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELElBQUksRUFBRTtvQkFDRiw4QkFBOEIsRUFBRSxtQkFBbUI7aUJBQ3REO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOztzQkFzTFEsUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyxxQkFBcUI7O2tCQWpMaEMsS0FBSzs7a0JBZUwsS0FBSzs7a0JBWUwsS0FBSzs7a0JBZ0JMLEtBQUs7O2tCQXVCTCxLQUFLOztrQkFjTCxLQUFLOztrQkFlTCxLQUFLOztrQkFxREwsTUFBTTs7a0JBTU4sTUFBTTs7a0JBSU4sTUFBTTs7a0JBSU4sTUFBTTs7a0JBSU4sU0FBUzttQkFBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogY2FsZW5kYXIteWVhci12aWV3LmNvbXBvbmVudFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEluamVjdCxcclxuICAgIElucHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIENhbGVuZGFyQ2VsbCxcclxuICAgIE93bENhbGVuZGFyQm9keUNvbXBvbmVudFxyXG59IGZyb20gJy4vY2FsZW5kYXItYm9keS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgT1dMX0RBVEVfVElNRV9GT1JNQVRTLFxyXG4gICAgT3dsRGF0ZVRpbWVGb3JtYXRzXHJcbn0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1mb3JtYXQuY2xhc3MnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2VsZWN0TW9kZSB9IGZyb20gJy4vZGF0ZS10aW1lLmNsYXNzJztcclxuaW1wb3J0IHtcclxuICAgIERPV05fQVJST1csXHJcbiAgICBFTkQsXHJcbiAgICBFTlRFUixcclxuICAgIEhPTUUsXHJcbiAgICBMRUZUX0FSUk9XLFxyXG4gICAgUEFHRV9ET1dOLFxyXG4gICAgUEFHRV9VUCxcclxuICAgIFJJR0hUX0FSUk9XLFxyXG4gICAgVVBfQVJST1dcclxufSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5cclxuY29uc3QgTU9OVEhTX1BFUl9ZRUFSID0gMTI7XHJcbmNvbnN0IE1PTlRIU19QRVJfUk9XID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLXllYXItdmlldycsXHJcbiAgICBleHBvcnRBczogJ293bE1vbnRoVmlldycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIteWVhci12aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXllYXItdmlldy5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWNhbGVuZGFyLXZpZXddJzogJ293bERUQ2FsZW5kYXJWaWV3J1xyXG4gICAgfSxcclxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE93bFllYXJWaWV3Q29tcG9uZW50PFQ+XHJcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNlbGVjdCBtb2RlIG9mIHRoZSBwaWNrZXI7XHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0TW9kZTogU2VsZWN0TW9kZSA9ICdzaW5nbGUnO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RNb2RlKCk6IFNlbGVjdE1vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RNb2RlKHZhbDogU2VsZWN0TW9kZSkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdE1vZGUgPSB2YWw7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVNb250aExpc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkOiBUIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWQoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0ZWQodmFsdWU6IFQgfCBudWxsKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZE1vbnRocygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkczogVFtdID0gW107XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkcygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNlbGVjdGVkcyh2YWx1ZXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRzLnB1c2godGhpcy5nZXRWYWxpZERhdGUodmFsdWUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRNb250aHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9waWNrZXJNb21lbnQ6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwaWNrZXJNb21lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BpY2tlck1vbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcGlja2VyTW9tZW50KHZhbHVlOiBUKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTW9tZW50ID0gdGhpcy5fcGlja2VyTW9tZW50O1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3BpY2tlck1vbWVudCA9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKSB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5oYXNTYW1lWWVhcihvbGRNb21lbnQsIHRoaXMuX3BpY2tlck1vbWVudCkgJiZcclxuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU1vbnRoTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGVcclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIF9kYXRlRmlsdGVyOiAoZGF0ZTogVCkgPT4gYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0ZUZpbHRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGF0ZUZpbHRlcihmaWx0ZXI6IChkYXRlOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0ZUZpbHRlciA9IGZpbHRlcjtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU1vbnRoTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gICAgcHJpdmF0ZSBfbWluRGF0ZTogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbkRhdGUoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtaW5EYXRlKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVNb250aExpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX21heERhdGU6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhEYXRlKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWF4RGF0ZSh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9tYXhEYXRlID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTW9udGhMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9udGhOYW1lczogc3RyaW5nW107XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9udGhzOiBDYWxlbmRhckNlbGxbXVtdO1xyXG4gICAgZ2V0IG1vbnRocygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhY3RpdmVDZWxsKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BpY2tlck1vbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgodGhpcy5fcGlja2VyTW9tZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzSW5TaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdE1vZGUgPT09ICdzaW5nbGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0luUmFuZ2VNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlJyB8fFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZUZyb20nIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlVG8nXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvY2FsZVN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHRvZGF5TW9udGg6IG51bWJlciB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSB0byBob2xkIGFsbCBzZWxlY3RlZERhdGVzJyBtb250aCB2YWx1ZVxyXG4gICAgICogdGhlIHZhbHVlIGlzIHRoZSBtb250aCBudW1iZXIgaW4gY3VycmVudCB5ZWFyXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIHNlbGVjdGVkTW9udGhzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBuZXcgbW9udGggaXMgc2VsZWN0ZWRcclxuICAgICAqICovXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyLiBUaGlzIGRvZXNuJ3QgaW1wbHkgYSBjaGFuZ2Ugb24gdGhlIHNlbGVjdGVkIGRhdGVcclxuICAgICAqICovXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG1vbnRoU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gICAgLyoqIEVtaXRzIHdoZW4gYW55IGRhdGUgaXMgYWN0aXZhdGVkLiAqL1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBwaWNrZXJNb21lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICAvKiogRW1pdHMgd2hlbiB1c2Uga2V5Ym9hcmQgZW50ZXIgdG8gc2VsZWN0IGEgY2FsZW5kYXIgY2VsbCAqL1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBrZXlib2FyZEVudGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIC8qKiBUaGUgYm9keSBvZiBjYWxlbmRhciB0YWJsZSAqL1xyXG4gICAgQFZpZXdDaGlsZChPd2xDYWxlbmRhckJvZHlDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgICBjYWxlbmRhckJvZHlFbG06IE93bENhbGVuZGFyQm9keUNvbXBvbmVudDtcclxuXHJcbiAgICBnZXQgb3dsRFRDYWxlbmRhclZpZXcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkYXRlVGltZUFkYXB0ZXI6IERhdGVUaW1lQWRhcHRlcjxUPixcclxuICAgICAgICBAT3B0aW9uYWwoKVxyXG4gICAgICAgIEBJbmplY3QoT1dMX0RBVEVfVElNRV9GT1JNQVRTKVxyXG4gICAgICAgIHByaXZhdGUgZGF0ZVRpbWVGb3JtYXRzOiBPd2xEYXRlVGltZUZvcm1hdHNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubW9udGhOYW1lcyA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoTmFtZXMoJ3Nob3J0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxlU3ViID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIubG9jYWxlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTW9udGhMaXN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlTW9udGhMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvY2FsZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGEgY2FsZW5kYXJDZWxsIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RDYWxlbmRhckNlbGwoY2VsbDogQ2FsZW5kYXJDZWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RNb250aChjZWxsLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhIG5ldyBtb250aCBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlbGVjdE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY3JlYXRlRGF0ZShcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLnBpY2tlck1vbWVudCksXHJcbiAgICAgICAgICAgIG1vbnRoLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb250aFNlbGVjdGVkLmVtaXQoZmlyc3REYXRlT2ZNb250aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheXNJbk1vbnRoID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TnVtRGF5c0luTW9udGgoXHJcbiAgICAgICAgICAgIGZpcnN0RGF0ZU9mTW9udGhcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNyZWF0ZURhdGUoXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIodGhpcy5waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICBtb250aCxcclxuICAgICAgICAgICAgTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldERhdGUodGhpcy5waWNrZXJNb21lbnQpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldEhvdXJzKHRoaXMucGlja2VyTW9tZW50KSxcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TWludXRlcyh0aGlzLnBpY2tlck1vbWVudCksXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFNlY29uZHModGhpcy5waWNrZXJNb21lbnQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGtleWRvd24gZXZlbnQgb24gY2FsZW5kYXIgYm9keVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlQ2FsZW5kYXJLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vbWVudDtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgLy8gbWludXMgMSBtb250aFxyXG4gICAgICAgICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQobW9tZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIDEgbW9udGhcclxuICAgICAgICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIG1pbnVzIDMgbW9udGhzXHJcbiAgICAgICAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAtM1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQobW9tZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIDMgbW9udGhzXHJcbiAgICAgICAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gZmlyc3QgbW9udGggb2YgY3VycmVudCB5ZWFyXHJcbiAgICAgICAgICAgIGNhc2UgSE9NRTpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aCh0aGlzLnBpY2tlck1vbWVudClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gbGFzdCBtb250aCBvZiBjdXJyZW50IHllYXJcclxuICAgICAgICAgICAgY2FzZSBFTkQ6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAxMSAtIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoKHRoaXMucGlja2VyTW9tZW50KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQobW9tZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gbWludXMgMSB5ZWFyIChvciAxMCB5ZWFyKVxyXG4gICAgICAgICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmFsdEtleSA/IC0xMCA6IC0xXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnRDaGFuZ2UuZW1pdChtb21lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgMSB5ZWFyIChvciAxMCB5ZWFyKVxyXG4gICAgICAgICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuYWx0S2V5ID8gMTAgOiAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnRDaGFuZ2UuZW1pdChtb21lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBTZWxlY3QgY3VycmVudCBtb250aFxyXG4gICAgICAgICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RNb250aChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aCh0aGlzLnBpY2tlck1vbWVudClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkRW50ZXIuZW1pdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0aGUgY2FsZW5kYXIgbW9udGggbGlzdFxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVNb250aExpc3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBpY2tlck1vbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkTW9udGhzKCk7XHJcbiAgICAgICAgdGhpcy50b2RheU1vbnRoID0gdGhpcy5nZXRNb250aEluQ3VycmVudFllYXIoXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLm5vdygpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9udGhzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNT05USFNfUEVSX1lFQVIgLyBNT05USFNfUEVSX1JPVzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNT05USFNfUEVSX1JPVzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IGogKyBpICogTU9OVEhTX1BFUl9ST1c7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aENlbGwgPSB0aGlzLmNyZWF0ZU1vbnRoQ2VsbChtb250aCk7XHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChtb250aENlbGwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9tb250aHMucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBDYWxlbmRhckNlbGwgZm9yIHRoZSBnaXZlbiBtb250aC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVNb250aENlbGwobW9udGg6IG51bWJlcik6IENhbGVuZGFyQ2VsbCB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlT2ZNb250aCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNyZWF0ZURhdGUoXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIodGhpcy5waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICBtb250aCxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYXJpYUxhYmVsID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZm9ybWF0KFxyXG4gICAgICAgICAgICBzdGFydERhdGVPZk1vbnRoLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lRm9ybWF0cy5tb250aFllYXJBMTF5TGFiZWxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNlbGxDbGFzcyA9ICdvd2wtZHQtbW9udGgtJyArIG1vbnRoO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJDZWxsKFxyXG4gICAgICAgICAgICBtb250aCxcclxuICAgICAgICAgICAgdGhpcy5tb250aE5hbWVzW21vbnRoXSxcclxuICAgICAgICAgICAgYXJpYUxhYmVsLFxyXG4gICAgICAgICAgICB0aGlzLmlzTW9udGhFbmFibGVkKG1vbnRoKSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGNlbGxDbGFzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gbW9udGggaXMgZW5hYmxlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNNb250aEVuYWJsZWQobW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF0ZU9mTW9udGggPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jcmVhdGVEYXRlKFxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKHRoaXMucGlja2VyTW9tZW50KSxcclxuICAgICAgICAgICAgbW9udGgsXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBJZiBhbnkgZGF0ZSBpbiB0aGUgbW9udGggaXMgc2VsZWN0YWJsZSxcclxuICAgICAgICAvLyB3ZSBjb3VudCB0aGUgbW9udGggYXMgZW5hYmxlXHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgbGV0IGRhdGUgPSBmaXJzdERhdGVPZk1vbnRoO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aChkYXRlKSA9PT0gbW9udGg7XHJcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhckRheXMoZGF0ZSwgMSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgISFkYXRlICYmXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpICYmXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMubWluRGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLm1heERhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdGhlIGdpdmVuIERhdGUgZmFsbHMgb24uXHJcbiAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIERhdGUgaXMgaW4gYW5vdGhlciB5ZWFyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldE1vbnRoSW5DdXJyZW50WWVhcihkYXRlOiBUIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VmFsaWREYXRlKGRhdGUpICYmIHRoaXMuZ2V0VmFsaWREYXRlKHRoaXMuX3BpY2tlck1vbWVudCkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZVllYXIoXHJcbiAgICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGlja2VyTW9tZW50XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyA8IDAgOiB0aGUgZ2l2ZW4gZGF0ZSdzIHllYXIgaXMgYmVmb3JlIHBpY2tlck1vbWVudCdzIHllYXIsIHdlIHJldHVybiAtMSBhcyBzZWxlY3RlZCBtb250aCB2YWx1ZS5cclxuICAgICAgICAgICAgLy8gPiAwIDogdGhlIGdpdmVuIGRhdGUncyB5ZWFyIGlzIGFmdGVyIHBpY2tlck1vbWVudCdzIHllYXIsIHdlIHJldHVybiAxMiBhcyBzZWxlY3RlZCBtb250aCB2YWx1ZS5cclxuICAgICAgICAgICAgLy8gMCA6IHRoZSBnaXZlIGRhdGUncyB5ZWFyIGlzIHNhbWUgYXMgdGhlIHBpY2tlck1vbWVudCdzIHllYXIsIHdlIHJldHVybiB0aGUgYWN0dWFsIG1vbnRoIHZhbHVlLlxyXG4gICAgICAgICAgICBpZiAocmVzdWx0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgc2VsZWN0ZWRNb250aHMgdmFsdWVcclxuICAgICAqIEluIHNpbmdsZSBtb2RlLCBpdCBoYXMgb25seSBvbmUgdmFsdWUgd2hpY2ggcmVwcmVzZW50IHRoZSBtb250aCB0aGUgc2VsZWN0ZWQgZGF0ZSBpblxyXG4gICAgICogSW4gcmFuZ2UgbW9kZSwgaXQgd291bGQgaGFzIHR3byB2YWx1ZXMsIG9uZSBmb3IgdGhlIG1vbnRoIHRoZSBmcm9tVmFsdWUgaW4gYW5kIHRoZSBvdGhlciBmb3IgdGhlIG1vbnRoIHRoZSB0b1ZhbHVlIGluXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBzZXRTZWxlY3RlZE1vbnRocygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGhzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJblNpbmdsZU1vZGUgJiYgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGhzWzBdID0gdGhpcy5nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0luUmFuZ2VNb2RlICYmIHRoaXMuc2VsZWN0ZWRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aHNbMF0gPSB0aGlzLmdldE1vbnRoSW5DdXJyZW50WWVhcihcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzWzBdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aHNbMV0gPSB0aGlzLmdldE1vbnRoSW5DdXJyZW50WWVhcihcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzWzFdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgdGhlIGdpdmVuIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB5ZWFyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFzU2FtZVllYXIoZGF0ZUxlZnQ6IFQsIGRhdGVSaWdodDogVCkge1xyXG4gICAgICAgIHJldHVybiAhIShcclxuICAgICAgICAgICAgZGF0ZUxlZnQgJiZcclxuICAgICAgICAgICAgZGF0ZVJpZ2h0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZUxlZnQpID09PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcihkYXRlUmlnaHQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHZhbGlkIGRhdGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VmFsaWREYXRlKG9iajogYW55KTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc0RhdGVJbnN0YW5jZShvYmopICYmXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzVmFsaWQob2JqKVxyXG4gICAgICAgICAgICA/IG9ialxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c0FjdGl2ZUNlbGwoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckJvZHlFbG0uZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiPHRhYmxlIGNsYXNzPVwib3dsLWR0LWNhbGVuZGFyLXRhYmxlIG93bC1kdC1jYWxlbmRhci15ZWFyLXRhYmxlXCI+XHJcbiAgICA8dGhlYWQgY2xhc3M9XCJvd2wtZHQtY2FsZW5kYXItaGVhZGVyXCI+XHJcbiAgICA8dHI+XHJcbiAgICAgICAgPHRoIGNsYXNzPVwib3dsLWR0LWNhbGVuZGFyLXRhYmxlLWRpdmlkZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjb2xzcGFuPVwiM1wiPjwvdGg+XHJcbiAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keSBvd2wtZGF0ZS10aW1lLWNhbGVuZGFyLWJvZHkgcm9sZT1cImdyaWRcIlxyXG4gICAgICAgICAgIFtyb3dzXT1cIm1vbnRoc1wiIFtudW1Db2xzXT1cIjNcIiBbY2VsbFJhdGlvXT1cIjMgLyA3XCJcclxuICAgICAgICAgICBbYWN0aXZlQ2VsbF09XCJhY3RpdmVDZWxsXCJcclxuICAgICAgICAgICBbdG9kYXlWYWx1ZV09XCJ0b2RheU1vbnRoXCJcclxuICAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZXNdPVwic2VsZWN0ZWRNb250aHNcIlxyXG4gICAgICAgICAgIFtzZWxlY3RNb2RlXT1cInNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgIChrZXlkb3duKT1cImhhbmRsZUNhbGVuZGFyS2V5ZG93bigkZXZlbnQpXCJcclxuICAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdENhbGVuZGFyQ2VsbCgkZXZlbnQpXCI+XHJcbiAgICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG4iXX0=