/**
 * calendar-month-view.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
import { CalendarCell, OwlCalendarBodyComponent } from './calendar-body.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
import { Subscription } from 'rxjs';
import { DOWN_ARROW, END, ENTER, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "./adapter/date-time-adapter.class";
import * as i2 from "@angular/common";
import * as i3 from "./calendar-body.component";
function OwlMonthViewComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 6);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var weekday_r116 = ctx.$implicit;
    i0.ɵɵattribute("aria-label", weekday_r116.long);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(weekday_r116.short);
} }
var DAYS_PER_WEEK = 7;
var WEEKS_PER_VIEW = 6;
var OwlMonthViewComponent = /** @class */ (function () {
    function OwlMonthViewComponent(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Whether to hide dates in other months at the start or end of the current month.
         * */
        this.hideOtherMonths = false;
        /**
         * Define the first day of a week
         * Sunday: 0 ~ Saturday: 6
         * */
        this._firstDayOfWeek = 0;
        /**
         * The select mode of the picker;
         * */
        this._selectMode = 'single';
        this._selecteds = [];
        this.localeSub = Subscription.EMPTY;
        this.initiated = false;
        /**
         * An array to hold all selectedDates' value
         * the value is the day number in current month
         * */
        this.selectedDates = [];
        /**
         * Callback to invoke when a new date is selected
         * */
        this.selectedChange = new EventEmitter();
        /**
         * Callback to invoke when any date is selected.
         * */
        this.userSelection = new EventEmitter();
        /** Emits when any date is activated. */
        this.pickerMomentChange = new EventEmitter();
    }
    Object.defineProperty(OwlMonthViewComponent.prototype, "firstDayOfWeek", {
        get: function () {
            return this._firstDayOfWeek;
        },
        set: function (val) {
            val = coerceNumberProperty(val);
            if (val >= 0 && val <= 6 && val !== this._firstDayOfWeek) {
                this._firstDayOfWeek = val;
                if (this.initiated) {
                    this.generateWeekDays();
                    this.generateCalendar();
                    this.cdRef.markForCheck();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "selectMode", {
        get: function () {
            return this._selectMode;
        },
        set: function (val) {
            this._selectMode = val;
            if (this.initiated) {
                this.generateCalendar();
                this.cdRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            var oldSelected = this._selected;
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
            if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
                this.setSelectedDates();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            var _this = this;
            this._selecteds = values.map(function (v) {
                v = _this.dateTimeAdapter.deserialize(v);
                return _this.getValidDate(v);
            });
            this.setSelectedDates();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            var oldMoment = this._pickerMoment;
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment =
                this.getValidDate(value) || this.dateTimeAdapter.now();
            this.firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this._pickerMoment), this.dateTimeAdapter.getMonth(this._pickerMoment), 1);
            if (!this.isSameMonth(oldMoment, this._pickerMoment) &&
                this.initiated) {
                this.generateCalendar();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "dateFilter", {
        get: function () {
            return this._dateFilter;
        },
        set: function (filter) {
            this._dateFilter = filter;
            if (this.initiated) {
                this.generateCalendar();
                this.cdRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateCalendar();
                this.cdRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateCalendar();
                this.cdRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "weekdays", {
        get: function () {
            return this._weekdays;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "days", {
        get: function () {
            return this._days;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "activeCell", {
        get: function () {
            if (this.pickerMoment) {
                return (this.dateTimeAdapter.getDate(this.pickerMoment) +
                    this.firstRowOffset -
                    1);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "isInRangeMode", {
        get: function () {
            return (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom' ||
                this.selectMode === 'rangeTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMonthViewComponent.prototype, "owlDTCalendarView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generateWeekDays();
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function () {
            _this.generateWeekDays();
            _this.generateCalendar();
            _this.cdRef.markForCheck();
        });
    };
    OwlMonthViewComponent.prototype.ngAfterContentInit = function () {
        this.generateCalendar();
        this.initiated = true;
    };
    OwlMonthViewComponent.prototype.ngOnDestroy = function () {
        this.localeSub.unsubscribe();
    };
    /**
     * Handle a calendarCell selected
     */
    OwlMonthViewComponent.prototype.selectCalendarCell = function (cell) {
        // Cases in which the date would not be selected
        // 1, the calendar cell is NOT enabled (is NOT valid)
        // 2, the selected date is NOT in current picker's month and the hideOtherMonths is enabled
        if (!cell.enabled || (this.hideOtherMonths && cell.out)) {
            return;
        }
        this.selectDate(cell.value);
    };
    /**
     * Handle a new date selected
     */
    OwlMonthViewComponent.prototype.selectDate = function (date) {
        var daysDiff = date - 1;
        var selected = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
        this.selectedChange.emit(selected);
        this.userSelection.emit();
    };
    /**
     * Handle keydown event on calendar body
     */
    OwlMonthViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;
        switch (event.keyCode) {
            // minus 1 day
            case LEFT_ARROW:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 day
            case RIGHT_ARROW:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 week
            case UP_ARROW:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -7);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 week
            case DOWN_ARROW:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 7);
                this.pickerMomentChange.emit(moment);
                break;
            // move to first day of current month
            case HOME:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1 - this.dateTimeAdapter.getDate(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // move to last day of current month
            case END:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment) -
                    this.dateTimeAdapter.getDate(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 month (or 1 year)
            case PAGE_UP:
                moment = event.altKey
                    ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1)
                    : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 month (or 1 year)
            case PAGE_DOWN:
                moment = event.altKey
                    ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1)
                    : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // select the pickerMoment
            case ENTER:
                if (!this.dateFilter || this.dateFilter(this.pickerMoment)) {
                    this.selectDate(this.dateTimeAdapter.getDate(this.pickerMoment));
                }
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    };
    /**
     * Generate the calendar weekdays array
     * */
    OwlMonthViewComponent.prototype.generateWeekDays = function () {
        var longWeekdays = this.dateTimeAdapter.getDayOfWeekNames('long');
        var shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames('short');
        var narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames('narrow');
        var firstDayOfWeek = this.firstDayOfWeek;
        var weekdays = longWeekdays.map(function (long, i) {
            return { long: long, short: shortWeekdays[i], narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays
            .slice(firstDayOfWeek)
            .concat(weekdays.slice(0, firstDayOfWeek));
        this.dateNames = this.dateTimeAdapter.getDateNames();
        return;
    };
    /**
     * Generate the calendar days array
     * */
    OwlMonthViewComponent.prototype.generateCalendar = function () {
        if (!this.pickerMoment) {
            return;
        }
        this.todayDate = null;
        // the first weekday of the month
        var startWeekdayOfMonth = this.dateTimeAdapter.getDay(this.firstDateOfMonth);
        var firstDayOfWeek = this.firstDayOfWeek;
        // the amount of days from the first date of the month
        // if it is < 0, it means the date is in previous month
        var daysDiff = 0 -
            ((startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) %
                DAYS_PER_WEEK);
        // the index of cell that contains the first date of the month
        this.firstRowOffset = Math.abs(daysDiff);
        this._days = [];
        for (var i = 0; i < WEEKS_PER_VIEW; i++) {
            var week = [];
            for (var j = 0; j < DAYS_PER_WEEK; j++) {
                var date = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
                var dateCell = this.createDateCell(date, daysDiff);
                // check if the date is today
                if (this.dateTimeAdapter.isSameDay(this.dateTimeAdapter.now(), date)) {
                    this.todayDate = daysDiff + 1;
                }
                week.push(dateCell);
                daysDiff += 1;
            }
            this._days.push(week);
        }
        this.setSelectedDates();
    };
    /**
     * Creates CalendarCell for days.
     */
    OwlMonthViewComponent.prototype.createDateCell = function (date, daysDiff) {
        // total days of the month
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment);
        var dateNum = this.dateTimeAdapter.getDate(date);
        // const dateName = this.dateNames[dateNum - 1];
        var dateName = dateNum.toString();
        var ariaLabel = this.dateTimeAdapter.format(date, this.dateTimeFormats.dateA11yLabel);
        // check if the date if selectable
        var enabled = this.isDateEnabled(date);
        // check if date is not in current month
        var dayValue = daysDiff + 1;
        var out = dayValue < 1 || dayValue > daysInMonth;
        var cellClass = 'owl-dt-day-' + this.dateTimeAdapter.getDay(date);
        return new CalendarCell(dayValue, dateName, ariaLabel, enabled, out, cellClass);
    };
    /**
     * Check if the date is valid
     */
    OwlMonthViewComponent.prototype.isDateEnabled = function (date) {
        return (!!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate ||
                this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
            (!this.maxDate ||
                this.dateTimeAdapter.compare(date, this.maxDate) <= 0));
    };
    /**
     * Get a valid date object
     */
    OwlMonthViewComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    };
    /**
     * Check if the give dates are none-null and in the same month
     */
    OwlMonthViewComponent.prototype.isSameMonth = function (dateLeft, dateRight) {
        return !!(dateLeft &&
            dateRight &&
            this.dateTimeAdapter.isValid(dateLeft) &&
            this.dateTimeAdapter.isValid(dateRight) &&
            this.dateTimeAdapter.getYear(dateLeft) ===
                this.dateTimeAdapter.getYear(dateRight) &&
            this.dateTimeAdapter.getMonth(dateLeft) ===
                this.dateTimeAdapter.getMonth(dateRight));
    };
    /**
     * Set the selectedDates value.
     * In single mode, it has only one value which represent the selected date
     * In range mode, it would has two values, one for the fromValue and the other for the toValue
     * */
    OwlMonthViewComponent.prototype.setSelectedDates = function () {
        var _this = this;
        this.selectedDates = [];
        if (!this.firstDateOfMonth) {
            return;
        }
        if (this.isInSingleMode && this.selected) {
            var dayDiff = this.dateTimeAdapter.differenceInCalendarDays(this.selected, this.firstDateOfMonth);
            this.selectedDates[0] = dayDiff + 1;
            return;
        }
        if (this.isInRangeMode && this.selecteds) {
            this.selectedDates = this.selecteds.map(function (selected) {
                if (_this.dateTimeAdapter.isValid(selected)) {
                    var dayDiff = _this.dateTimeAdapter.differenceInCalendarDays(selected, _this.firstDateOfMonth);
                    return dayDiff + 1;
                }
                else {
                    return null;
                }
            });
        }
    };
    OwlMonthViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
    };
    OwlMonthViewComponent.ɵfac = function OwlMonthViewComponent_Factory(t) { return new (t || OwlMonthViewComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateTimeAdapter, 8), i0.ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8)); };
    OwlMonthViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlMonthViewComponent, selectors: [["owl-date-time-month-view"]], viewQuery: function OwlMonthViewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(OwlCalendarBodyComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendarBodyElm = _t.first);
        } }, hostVars: 2, hostBindings: function OwlMonthViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-calendar-view", ctx.owlDTCalendarView);
        } }, inputs: { hideOtherMonths: "hideOtherMonths", firstDayOfWeek: "firstDayOfWeek", selectMode: "selectMode", selected: "selected", selecteds: "selecteds", pickerMoment: "pickerMoment", dateFilter: "dateFilter", minDate: "minDate", maxDate: "maxDate" }, outputs: { selectedChange: "selectedChange", userSelection: "userSelection", pickerMomentChange: "pickerMomentChange" }, exportAs: ["owlYearView"], decls: 7, vars: 8, consts: [[1, "owl-dt-calendar-table", "owl-dt-calendar-month-table"], [1, "owl-dt-calendar-header"], [1, "owl-dt-weekdays"], ["class", "owl-dt-weekday", "scope", "col", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "colspan", "7", 1, "owl-dt-calendar-table-divider"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "rows", "todayValue", "selectedValues", "selectMode", "activeCell", "keydown", "select"], ["scope", "col", 1, "owl-dt-weekday"]], template: function OwlMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementStart(1, "thead", 1);
            i0.ɵɵelementStart(2, "tr", 2);
            i0.ɵɵtemplate(3, OwlMonthViewComponent_th_3_Template, 3, 2, "th", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "tr");
            i0.ɵɵelement(5, "th", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "tbody", 5);
            i0.ɵɵlistener("keydown", function OwlMonthViewComponent_Template_tbody_keydown_6_listener($event) { return ctx.handleCalendarKeydown($event); })("select", function OwlMonthViewComponent_Template_tbody_select_6_listener($event) { return ctx.selectCalendarCell($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-calendar-only-current-month", ctx.hideOtherMonths);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.weekdays);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("rows", ctx.days)("todayValue", ctx.todayDate)("selectedValues", ctx.selectedDates)("selectMode", ctx.selectMode)("activeCell", ctx.activeCell);
        } }, directives: [i2.NgForOf, i3.OwlCalendarBodyComponent], styles: [""], changeDetection: 0 });
    return OwlMonthViewComponent;
}());
export { OwlMonthViewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlMonthViewComponent, [{
        type: Component,
        args: [{
                selector: 'owl-date-time-month-view',
                exportAs: 'owlYearView',
                templateUrl: './calendar-month-view.component.html',
                styleUrls: ['./calendar-month-view.component.scss'],
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
            }] }]; }, { hideOtherMonths: [{
            type: Input
        }], firstDayOfWeek: [{
            type: Input
        }], selectMode: [{
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
        }], selectedChange: [{
            type: Output
        }], userSelection: [{
            type: Output
        }], pickerMomentChange: [{
            type: Output
        }], calendarBodyElm: [{
            type: ViewChild,
            args: [OwlCalendarBodyComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9jYWxlbmRhci1tb250aC12aWV3LmNvbXBvbmVudC50cyIsImxpYi9kYXRlLXRpbWUvY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFFSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsWUFBWSxFQUNaLHdCQUF3QixFQUMzQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQ0gscUJBQXFCLEVBRXhCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQ0gsVUFBVSxFQUNWLEdBQUcsRUFDSCxLQUFLLEVBQ0wsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsT0FBTyxFQUNQLFdBQVcsRUFDWCxRQUFRLEVBQ1gsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0lDcENyRCw2QkFHSTtJQUFBLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNsQyxpQkFBSzs7O0lBSEQsK0NBQWdDO0lBRTFCLGVBQWlCO0lBQWpCLHdDQUFpQjs7QURtQ25DLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFFekI7SUFvUEksK0JB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QUEwQixJQURLO1lBRWhELGlCQUFRO1lBQ1osaUJBQVE7O1lBckJELHlFQUE0RDtZQUd2RCxlQUFnQztZQUFoQyxzQ0FBZ0M7WUFXakMsZUFBYTtZQUFiLCtCQUFhLDZCQUFBLHFDQUFBLDhCQUFBLDhCQUFBOztnQ0RmeEI7Q0ErbkJDLEFBbGxCRCxJQWtsQkM7U0F2a0JZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBWGpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7Z0JBQ25ELElBQUksRUFBRTtvQkFDRiw4QkFBOEIsRUFBRSxtQkFBbUI7aUJBQ3REO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOztzQkE0T1EsUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyxxQkFBcUI7O2tCQXhPaEMsS0FBSzs7a0JBUUwsS0FBSzs7a0JBc0JMLEtBQUs7O2tCQWVMLEtBQUs7O2tCQWdCTCxLQUFLOztrQkFjTCxLQUFLOztrQkE2QkwsS0FBSzs7a0JBZUwsS0FBSzs7a0JBZ0JMLEtBQUs7O2tCQXdFTCxNQUFNOztrQkFNTixNQUFNOztrQkFJTixNQUFNOztrQkFJTixTQUFTO21CQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBjYWxlbmRhci1tb250aC12aWV3LmNvbXBvbmVudFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEluamVjdCxcclxuICAgIElucHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIENhbGVuZGFyQ2VsbCxcclxuICAgIE93bENhbGVuZGFyQm9keUNvbXBvbmVudFxyXG59IGZyb20gJy4vY2FsZW5kYXItYm9keS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgT1dMX0RBVEVfVElNRV9GT1JNQVRTLFxyXG4gICAgT3dsRGF0ZVRpbWVGb3JtYXRzXHJcbn0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1mb3JtYXQuY2xhc3MnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2VsZWN0TW9kZSB9IGZyb20gJy4vZGF0ZS10aW1lLmNsYXNzJztcclxuaW1wb3J0IHtcclxuICAgIERPV05fQVJST1csXHJcbiAgICBFTkQsXHJcbiAgICBFTlRFUixcclxuICAgIEhPTUUsXHJcbiAgICBMRUZUX0FSUk9XLFxyXG4gICAgUEFHRV9ET1dOLFxyXG4gICAgUEFHRV9VUCxcclxuICAgIFJJR0hUX0FSUk9XLFxyXG4gICAgVVBfQVJST1dcclxufSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcblxyXG5jb25zdCBEQVlTX1BFUl9XRUVLID0gNztcclxuY29uc3QgV0VFS1NfUEVSX1ZJRVcgPSA2O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtbW9udGgtdmlldycsXHJcbiAgICBleHBvcnRBczogJ293bFllYXJWaWV3JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1tb250aC12aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC1jYWxlbmRhci12aWV3XSc6ICdvd2xEVENhbGVuZGFyVmlldydcclxuICAgIH0sXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xNb250aFZpZXdDb21wb25lbnQ8VD5cclxuICAgIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIGhpZGUgZGF0ZXMgaW4gb3RoZXIgbW9udGhzIGF0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGN1cnJlbnQgbW9udGguXHJcbiAgICAgKiAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGhpZGVPdGhlck1vbnRoczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoZSBmaXJzdCBkYXkgb2YgYSB3ZWVrXHJcbiAgICAgKiBTdW5kYXk6IDAgfiBTYXR1cmRheTogNlxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgX2ZpcnN0RGF5T2ZXZWVrOiBudW1iZXIgPSAwO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZmlyc3REYXlPZldlZWsodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB2YWwgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWwpO1xyXG4gICAgICAgIGlmICh2YWwgPj0gMCAmJiB2YWwgPD0gNiAmJiB2YWwgIT09IHRoaXMuX2ZpcnN0RGF5T2ZXZWVrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0RGF5T2ZXZWVrID0gdmFsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlV2Vla0RheXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZWxlY3QgbW9kZSBvZiB0aGUgcGlja2VyO1xyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgX3NlbGVjdE1vZGU6IFNlbGVjdE1vZGUgPSAnc2luZ2xlJztcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0TW9kZSgpOiBTZWxlY3RNb2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0TW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0TW9kZSh2YWw6IFNlbGVjdE1vZGUpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RNb2RlID0gdmFsO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkOiBUIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWQoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0ZWQodmFsdWU6IFQgfCBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkU2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZDtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1NhbWVEYXkob2xkU2VsZWN0ZWQsIHRoaXMuX3NlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkRGF0ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRzOiBUW10gPSBbXTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0ZWRzKCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0ZWRzKHZhbHVlczogVFtdKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRzID0gdmFsdWVzLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgdiA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHYpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZERhdGUodik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZERhdGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcGlja2VyTW9tZW50OiBUO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwaWNrZXJNb21lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BpY2tlck1vbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcGlja2VyTW9tZW50KHZhbHVlOiBUKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTW9tZW50ID0gdGhpcy5fcGlja2VyTW9tZW50O1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3BpY2tlck1vbWVudCA9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKSB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5maXJzdERhdGVPZk1vbnRoID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY3JlYXRlRGF0ZShcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLl9waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aCh0aGlzLl9waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5pc1NhbWVNb250aChvbGRNb21lbnQsIHRoaXMuX3BpY2tlck1vbWVudCkgJiZcclxuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZVxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgX2RhdGVGaWx0ZXI6IChkYXRlOiBUKSA9PiBib29sZWFuO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkYXRlRmlsdGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRmlsdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkYXRlRmlsdGVyKGZpbHRlcjogKGRhdGU6IFQpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9kYXRlRmlsdGVyID0gZmlsdGVyO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX21pbkRhdGU6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5EYXRlKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWluRGF0ZSh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9taW5EYXRlID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX21heERhdGU6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhEYXRlKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWF4RGF0ZSh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9tYXhEYXRlID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dlZWtkYXlzOiBBcnJheTx7IGxvbmc6IHN0cmluZzsgc2hvcnQ6IHN0cmluZzsgbmFycm93OiBzdHJpbmcgfT47XHJcbiAgICBnZXQgd2Vla2RheXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RheXM6IENhbGVuZGFyQ2VsbFtdW107XHJcbiAgICBnZXQgZGF5cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWN0aXZlQ2VsbCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnBpY2tlck1vbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZSh0aGlzLnBpY2tlck1vbWVudCkgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFJvd09mZnNldCAtXHJcbiAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0luU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RNb2RlID09PSAnc2luZ2xlJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJblJhbmdlTW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZScgfHxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2VGcm9tJyB8fFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaXJzdERhdGVPZk1vbnRoOiBUO1xyXG5cclxuICAgIHByaXZhdGUgbG9jYWxlU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGVOYW1lczogc3RyaW5nW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGF0ZSBvZiB0aGUgbW9udGggdGhhdCB0b2RheSBmYWxscyBvbi5cclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgdG9kYXlEYXRlOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgdG8gaG9sZCBhbGwgc2VsZWN0ZWREYXRlcycgdmFsdWVcclxuICAgICAqIHRoZSB2YWx1ZSBpcyB0aGUgZGF5IG51bWJlciBpbiBjdXJyZW50IG1vbnRoXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIHNlbGVjdGVkRGF0ZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLy8gdGhlIGluZGV4IG9mIGNlbGwgdGhhdCBjb250YWlucyB0aGUgZmlyc3QgZGF0ZSBvZiB0aGUgbW9udGhcclxuICAgIHB1YmxpYyBmaXJzdFJvd09mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBuZXcgZGF0ZSBpcyBzZWxlY3RlZFxyXG4gICAgICogKi9cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQgfCBudWxsPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYW55IGRhdGUgaXMgc2VsZWN0ZWQuXHJcbiAgICAgKiAqL1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSB1c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIC8qKiBFbWl0cyB3aGVuIGFueSBkYXRlIGlzIGFjdGl2YXRlZC4gKi9cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgcGlja2VyTW9tZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gICAgLyoqIFRoZSBib2R5IG9mIGNhbGVuZGFyIHRhYmxlICovXHJcbiAgICBAVmlld0NoaWxkKE93bENhbGVuZGFyQm9keUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcclxuICAgIGNhbGVuZGFyQm9keUVsbTogT3dsQ2FsZW5kYXJCb2R5Q29tcG9uZW50O1xyXG5cclxuICAgIGdldCBvd2xEVENhbGVuZGFyVmlldygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVUaW1lQWRhcHRlcjogRGF0ZVRpbWVBZGFwdGVyPFQ+LFxyXG4gICAgICAgIEBPcHRpb25hbCgpXHJcbiAgICAgICAgQEluamVjdChPV0xfREFURV9USU1FX0ZPUk1BVFMpXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRlVGltZUZvcm1hdHM6IE93bERhdGVUaW1lRm9ybWF0c1xyXG4gICAgKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlV2Vla0RheXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2NhbGVTdWIgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5sb2NhbGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVXZWVrRGF5cygpO1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2NhbGVTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhIGNhbGVuZGFyQ2VsbCBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VsZWN0Q2FsZW5kYXJDZWxsKGNlbGw6IENhbGVuZGFyQ2VsbCk6IHZvaWQge1xyXG4gICAgICAgIC8vIENhc2VzIGluIHdoaWNoIHRoZSBkYXRlIHdvdWxkIG5vdCBiZSBzZWxlY3RlZFxyXG4gICAgICAgIC8vIDEsIHRoZSBjYWxlbmRhciBjZWxsIGlzIE5PVCBlbmFibGVkIChpcyBOT1QgdmFsaWQpXHJcbiAgICAgICAgLy8gMiwgdGhlIHNlbGVjdGVkIGRhdGUgaXMgTk9UIGluIGN1cnJlbnQgcGlja2VyJ3MgbW9udGggYW5kIHRoZSBoaWRlT3RoZXJNb250aHMgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmICghY2VsbC5lbmFibGVkIHx8ICh0aGlzLmhpZGVPdGhlck1vbnRocyAmJiBjZWxsLm91dCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGNlbGwudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGEgbmV3IGRhdGUgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3REYXRlKGRhdGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRheXNEaWZmID0gZGF0ZSAtIDE7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhckRheXMoXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3REYXRlT2ZNb250aCxcclxuICAgICAgICAgICAgZGF5c0RpZmZcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMudXNlclNlbGVjdGlvbi5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUga2V5ZG93biBldmVudCBvbiBjYWxlbmRhciBib2R5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVDYWxlbmRhcktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW9tZW50O1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAvLyBtaW51cyAxIGRheVxyXG4gICAgICAgICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhckRheXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCAxIGRheVxyXG4gICAgICAgICAgICBjYXNlIFJJR0hUX0FSUk9XOlxyXG4gICAgICAgICAgICAgICAgbW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIG1pbnVzIDEgd2Vla1xyXG4gICAgICAgICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgICAgICAgICAgbW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIC03XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnRDaGFuZ2UuZW1pdChtb21lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgMSB3ZWVrXHJcbiAgICAgICAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnRDaGFuZ2UuZW1pdChtb21lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRvIGZpcnN0IGRheSBvZiBjdXJyZW50IG1vbnRoXHJcbiAgICAgICAgICAgIGNhc2UgSE9NRTpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAxIC0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZSh0aGlzLnBpY2tlck1vbWVudClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gbGFzdCBkYXkgb2YgY3VycmVudCBtb250aFxyXG4gICAgICAgICAgICBjYXNlIEVORDpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXROdW1EYXlzSW5Nb250aCh0aGlzLnBpY2tlck1vbWVudCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXRlKHRoaXMucGlja2VyTW9tZW50KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQobW9tZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gbWludXMgMSBtb250aCAob3IgMSB5ZWFyKVxyXG4gICAgICAgICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSBldmVudC5hbHRLZXlcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnRDaGFuZ2UuZW1pdChtb21lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgMSBtb250aCAob3IgMSB5ZWFyKVxyXG4gICAgICAgICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IGV2ZW50LmFsdEtleVxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnRDaGFuZ2UuZW1pdChtb21lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBzZWxlY3QgdGhlIHBpY2tlck1vbWVudFxyXG4gICAgICAgICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKHRoaXMucGlja2VyTW9tZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZSh0aGlzLnBpY2tlck1vbWVudClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0aGUgY2FsZW5kYXIgd2Vla2RheXMgYXJyYXlcclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlV2Vla0RheXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbG9uZ1dlZWtkYXlzID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF5T2ZXZWVrTmFtZXMoJ2xvbmcnKTtcclxuICAgICAgICBjb25zdCBzaG9ydFdlZWtkYXlzID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF5T2ZXZWVrTmFtZXMoJ3Nob3J0Jyk7XHJcbiAgICAgICAgY29uc3QgbmFycm93V2Vla2RheXMgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXlPZldlZWtOYW1lcygnbmFycm93Jyk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLmZpcnN0RGF5T2ZXZWVrO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWVrZGF5cyA9IGxvbmdXZWVrZGF5cy5tYXAoKGxvbmcsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9uZywgc2hvcnQ6IHNob3J0V2Vla2RheXNbaV0sIG5hcnJvdzogbmFycm93V2Vla2RheXNbaV0gfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXMgPSB3ZWVrZGF5c1xyXG4gICAgICAgICAgICAuc2xpY2UoZmlyc3REYXlPZldlZWspXHJcbiAgICAgICAgICAgIC5jb25jYXQod2Vla2RheXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlTmFtZXMgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXRlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgdGhlIGNhbGVuZGFyIGRheXMgYXJyYXlcclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlQ2FsZW5kYXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBpY2tlck1vbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvZGF5RGF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRoZSBmaXJzdCB3ZWVrZGF5IG9mIHRoZSBtb250aFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0V2Vla2RheU9mTW9udGggPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXkoXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3REYXRlT2ZNb250aFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLmZpcnN0RGF5T2ZXZWVrO1xyXG5cclxuICAgICAgICAvLyB0aGUgYW1vdW50IG9mIGRheXMgZnJvbSB0aGUgZmlyc3QgZGF0ZSBvZiB0aGUgbW9udGhcclxuICAgICAgICAvLyBpZiBpdCBpcyA8IDAsIGl0IG1lYW5zIHRoZSBkYXRlIGlzIGluIHByZXZpb3VzIG1vbnRoXHJcbiAgICAgICAgbGV0IGRheXNEaWZmID1cclxuICAgICAgICAgICAgMCAtXHJcbiAgICAgICAgICAgICgoc3RhcnRXZWVrZGF5T2ZNb250aCArIChEQVlTX1BFUl9XRUVLIC0gZmlyc3REYXlPZldlZWspKSAlXHJcbiAgICAgICAgICAgICAgICBEQVlTX1BFUl9XRUVLKTtcclxuXHJcbiAgICAgICAgLy8gdGhlIGluZGV4IG9mIGNlbGwgdGhhdCBjb250YWlucyB0aGUgZmlyc3QgZGF0ZSBvZiB0aGUgbW9udGhcclxuICAgICAgICB0aGlzLmZpcnN0Um93T2Zmc2V0ID0gTWF0aC5hYnMoZGF5c0RpZmYpO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXlzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBXRUVLU19QRVJfVklFVzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBEQVlTX1BFUl9XRUVLOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhckRheXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdERhdGVPZk1vbnRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheXNEaWZmXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUNlbGwgPSB0aGlzLmNyZWF0ZURhdGVDZWxsKGRhdGUsIGRheXNEaWZmKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZGF0ZSBpcyB0b2RheVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzU2FtZURheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIubm93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZGF5RGF0ZSA9IGRheXNEaWZmICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3ZWVrLnB1c2goZGF0ZUNlbGwpO1xyXG4gICAgICAgICAgICAgICAgZGF5c0RpZmYgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXlzLnB1c2god2Vlayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkRGF0ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgQ2FsZW5kYXJDZWxsIGZvciBkYXlzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZURhdGVDZWxsKGRhdGU6IFQsIGRheXNEaWZmOiBudW1iZXIpOiBDYWxlbmRhckNlbGwge1xyXG4gICAgICAgIC8vIHRvdGFsIGRheXMgb2YgdGhlIG1vbnRoXHJcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXROdW1EYXlzSW5Nb250aChcclxuICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGVOdW0gPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXRlKGRhdGUpO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGVOYW1lID0gdGhpcy5kYXRlTmFtZXNbZGF0ZU51bSAtIDFdO1xyXG4gICAgICAgIGNvbnN0IGRhdGVOYW1lID0gZGF0ZU51bS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGFyaWFMYWJlbCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmZvcm1hdChcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUZvcm1hdHMuZGF0ZUExMXlMYWJlbFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBkYXRlIGlmIHNlbGVjdGFibGVcclxuICAgICAgICBjb25zdCBlbmFibGVkID0gdGhpcy5pc0RhdGVFbmFibGVkKGRhdGUpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBkYXRlIGlzIG5vdCBpbiBjdXJyZW50IG1vbnRoXHJcbiAgICAgICAgY29uc3QgZGF5VmFsdWUgPSBkYXlzRGlmZiArIDE7XHJcbiAgICAgICAgY29uc3Qgb3V0ID0gZGF5VmFsdWUgPCAxIHx8IGRheVZhbHVlID4gZGF5c0luTW9udGg7XHJcbiAgICAgICAgY29uc3QgY2VsbENsYXNzID0gJ293bC1kdC1kYXktJyArIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldERheShkYXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhckNlbGwoXHJcbiAgICAgICAgICAgIGRheVZhbHVlLFxyXG4gICAgICAgICAgICBkYXRlTmFtZSxcclxuICAgICAgICAgICAgYXJpYUxhYmVsLFxyXG4gICAgICAgICAgICBlbmFibGVkLFxyXG4gICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgIGNlbGxDbGFzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZGF0ZSBpcyB2YWxpZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzRGF0ZUVuYWJsZWQoZGF0ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICEhZGF0ZSAmJlxyXG4gICAgICAgICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpICYmXHJcbiAgICAgICAgICAgICghdGhpcy5taW5EYXRlIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgICAgICAgKCF0aGlzLm1heERhdGUgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSB2YWxpZCBkYXRlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFZhbGlkRGF0ZShvYmo6IGFueSk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKG9iailcclxuICAgICAgICAgICAgPyBvYmpcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGdpdmUgZGF0ZXMgYXJlIG5vbmUtbnVsbCBhbmQgaW4gdGhlIHNhbWUgbW9udGhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2FtZU1vbnRoKGRhdGVMZWZ0OiBULCBkYXRlUmlnaHQ6IFQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISEoXHJcbiAgICAgICAgICAgIGRhdGVMZWZ0ICYmXHJcbiAgICAgICAgICAgIGRhdGVSaWdodCAmJlxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKGRhdGVMZWZ0KSAmJlxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKGRhdGVSaWdodCkgJiZcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcihkYXRlTGVmdCkgPT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGVSaWdodCkgJiZcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgoZGF0ZUxlZnQpID09PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgoZGF0ZVJpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHNlbGVjdGVkRGF0ZXMgdmFsdWUuXHJcbiAgICAgKiBJbiBzaW5nbGUgbW9kZSwgaXQgaGFzIG9ubHkgb25lIHZhbHVlIHdoaWNoIHJlcHJlc2VudCB0aGUgc2VsZWN0ZWQgZGF0ZVxyXG4gICAgICogSW4gcmFuZ2UgbW9kZSwgaXQgd291bGQgaGFzIHR3byB2YWx1ZXMsIG9uZSBmb3IgdGhlIGZyb21WYWx1ZSBhbmQgdGhlIG90aGVyIGZvciB0aGUgdG9WYWx1ZVxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgc2V0U2VsZWN0ZWREYXRlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0RGF0ZU9mTW9udGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJblNpbmdsZU1vZGUgJiYgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXlEaWZmID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3REYXRlT2ZNb250aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXNbMF0gPSBkYXlEaWZmICsgMTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJblJhbmdlTW9kZSAmJiB0aGlzLnNlbGVjdGVkcykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSB0aGlzLnNlbGVjdGVkcy5tYXAoc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzVmFsaWQoc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5RGlmZiA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3REYXRlT2ZNb250aFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheURpZmYgKyAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9jdXNBY3RpdmVDZWxsKCkge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJCb2R5RWxtLmZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjx0YWJsZSBjbGFzcz1cIm93bC1kdC1jYWxlbmRhci10YWJsZSBvd2wtZHQtY2FsZW5kYXItbW9udGgtdGFibGVcIlxyXG4gICAgICAgW2NsYXNzLm93bC1kdC1jYWxlbmRhci1vbmx5LWN1cnJlbnQtbW9udGhdPVwiaGlkZU90aGVyTW9udGhzXCI+XHJcbiAgICA8dGhlYWQgY2xhc3M9XCJvd2wtZHQtY2FsZW5kYXItaGVhZGVyXCI+XHJcbiAgICA8dHIgY2xhc3M9XCJvd2wtZHQtd2Vla2RheXNcIj5cclxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IHdlZWtkYXkgb2Ygd2Vla2RheXNcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIndlZWtkYXkubG9uZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwib3dsLWR0LXdlZWtkYXlcIiBzY29wZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3dlZWtkYXkuc2hvcnR9fTwvc3Bhbj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgICA8dGggY2xhc3M9XCJvd2wtZHQtY2FsZW5kYXItdGFibGUtZGl2aWRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNvbHNwYW49XCI3XCI+PC90aD5cclxuICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5IG93bC1kYXRlLXRpbWUtY2FsZW5kYXItYm9keSByb2xlPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgW3Jvd3NdPVwiZGF5c1wiIFt0b2RheVZhbHVlXT1cInRvZGF5RGF0ZVwiXHJcbiAgICAgICAgICAgW3NlbGVjdGVkVmFsdWVzXT1cInNlbGVjdGVkRGF0ZXNcIlxyXG4gICAgICAgICAgIFtzZWxlY3RNb2RlXT1cInNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgIFthY3RpdmVDZWxsXT1cImFjdGl2ZUNlbGxcIlxyXG4gICAgICAgICAgIChrZXlkb3duKT1cImhhbmRsZUNhbGVuZGFyS2V5ZG93bigkZXZlbnQpXCJcclxuICAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdENhbGVuZGFyQ2VsbCgkZXZlbnQpXCI+XHJcbiAgICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG4iXX0=