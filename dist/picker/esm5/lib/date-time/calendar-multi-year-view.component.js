/**
 * calendar-multi-year-view.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output, ViewChild } from '@angular/core';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { CalendarCell, OwlCalendarBodyComponent } from './calendar-body.component';
import { DOWN_ARROW, END, ENTER, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import * as i0 from "@angular/core";
import * as i1 from "./date-time-picker-intl.service";
import * as i2 from "./adapter/date-time-adapter.class";
import * as i3 from "./calendar-body.component";
export var YEARS_PER_ROW = 3;
export var YEAR_ROWS = 7;
var OwlMultiYearViewComponent = /** @class */ (function () {
    function OwlMultiYearViewComponent(cdRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        /**
         * The select mode of the picker;
         * */
        this._selectMode = 'single';
        this._selecteds = [];
        this.initiated = false;
        /**
         * Callback to invoke when a new month is selected
         * */
        this.change = new EventEmitter();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         * */
        this.yearSelected = new EventEmitter();
        /** Emits when any date is activated. */
        this.pickerMomentChange = new EventEmitter();
        /** Emits when use keyboard enter to select a calendar cell */
        this.keyboardEnter = new EventEmitter();
    }
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "selectMode", {
        get: function () {
            return this._selectMode;
        },
        set: function (val) {
            this._selectMode = val;
            if (this.initiated) {
                this.setSelectedYears();
                this.cdRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            var oldSelected = this._selected;
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
            if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
                this.setSelectedYears();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            var _this = this;
            this._selecteds = values.map(function (v) {
                v = _this.dateTimeAdapter.deserialize(v);
                return _this.getValidDate(v);
            });
            this.setSelectedYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            var oldMoment = this._pickerMoment;
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
            if (oldMoment && this._pickerMoment &&
                !this.isSameYearList(oldMoment, this._pickerMoment)) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "dateFilter", {
        get: function () {
            return this._dateFilter;
        },
        set: function (filter) {
            this._dateFilter = filter;
            if (this.initiated) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDate = this.getValidDate(value);
            if (this.initiated) {
                this.generateYearList();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "todayYear", {
        get: function () {
            return this._todayYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "years", {
        get: function () {
            return this._years;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "selectedYears", {
        get: function () {
            return this._selectedYears;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "isInRangeMode", {
        get: function () {
            return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
                || this.selectMode === 'rangeTo';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "activeCell", {
        get: function () {
            if (this._pickerMoment) {
                return this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "tableHeader", {
        get: function () {
            if (this._years && this._years.length > 0) {
                return this._years[0][0].displayValue + " ~ " + this._years[YEAR_ROWS - 1][YEARS_PER_ROW - 1].displayValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "prevButtonLabel", {
        get: function () {
            return this.pickerIntl.prevMultiYearLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "nextButtonLabel", {
        get: function () {
            return this.pickerIntl.nextMultiYearLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "owlDTCalendarView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlMultiYearViewComponent.prototype, "owlDTCalendarMultiYearView", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlMultiYearViewComponent.prototype.ngOnInit = function () {
    };
    OwlMultiYearViewComponent.prototype.ngAfterContentInit = function () {
        this._todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now());
        this.generateYearList();
        this.initiated = true;
    };
    /**
     * Handle a calendarCell selected
     */
    OwlMultiYearViewComponent.prototype.selectCalendarCell = function (cell) {
        this.selectYear(cell.value);
    };
    OwlMultiYearViewComponent.prototype.selectYear = function (year) {
        this.yearSelected.emit(this.dateTimeAdapter.createDate(year, 0, 1));
        var firstDateOfMonth = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), 1);
        var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        var selected = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.change.emit(selected);
    };
    /**
     * Generate the previous year list
     * */
    OwlMultiYearViewComponent.prototype.prevYearList = function (event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1 * YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
    };
    /**
     * Generate the next year list
     * */
    OwlMultiYearViewComponent.prototype.nextYearList = function (event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
    };
    OwlMultiYearViewComponent.prototype.generateYearList = function () {
        this._years = [];
        var pickerMomentYear = this.dateTimeAdapter.getYear(this._pickerMoment);
        var offset = pickerMomentYear % (YEARS_PER_ROW * YEAR_ROWS);
        for (var i = 0; i < YEAR_ROWS; i++) {
            var row = [];
            for (var j = 0; j < YEARS_PER_ROW; j++) {
                var year = pickerMomentYear - offset + (j + i * YEARS_PER_ROW);
                var yearCell = this.createYearCell(year);
                row.push(yearCell);
            }
            this._years.push(row);
        }
        return;
    };
    /** Whether the previous period button is enabled. */
    OwlMultiYearViewComponent.prototype.previousEnabled = function () {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this.isSameYearList(this._pickerMoment, this.minDate);
    };
    /** Whether the next period button is enabled. */
    OwlMultiYearViewComponent.prototype.nextEnabled = function () {
        return !this.maxDate || !this.isSameYearList(this._pickerMoment, this.maxDate);
    };
    OwlMultiYearViewComponent.prototype.handleCalendarKeydown = function (event) {
        var moment;
        switch (event.keyCode) {
            // minus 1 year
            case LEFT_ARROW:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 year
            case RIGHT_ARROW:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 3 years
            case UP_ARROW:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1 * YEARS_PER_ROW);
                this.pickerMomentChange.emit(moment);
                break;
            // add 3 years
            case DOWN_ARROW:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW);
                this.pickerMomentChange.emit(moment);
                break;
            // go to the first year of the year page
            case HOME:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            // go to the last year of the year page
            case END:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, (YEARS_PER_ROW * YEAR_ROWS) - this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS) - 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 year page (or 10 year pages)
            case PAGE_UP:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 * (YEARS_PER_ROW * YEAR_ROWS) : -1 * (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 year page (or 10 year pages)
            case PAGE_DOWN:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 * (YEARS_PER_ROW * YEAR_ROWS) : (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            case ENTER:
                this.selectYear(this.dateTimeAdapter.getYear(this._pickerMoment));
                this.keyboardEnter.emit();
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    };
    /**
     * Creates an CalendarCell for the given year.
     */
    OwlMultiYearViewComponent.prototype.createYearCell = function (year) {
        var startDateOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
        var ariaLabel = this.dateTimeAdapter.getYearName(startDateOfYear);
        var cellClass = 'owl-dt-year-' + year;
        return new CalendarCell(year, year.toString(), ariaLabel, this.isYearEnabled(year), false, cellClass);
    };
    OwlMultiYearViewComponent.prototype.setSelectedYears = function () {
        var _this = this;
        this._selectedYears = [];
        if (this.isInSingleMode && this.selected) {
            this._selectedYears[0] = this.dateTimeAdapter.getYear(this.selected);
        }
        if (this.isInRangeMode && this.selecteds) {
            this._selectedYears = this.selecteds.map(function (selected) {
                if (_this.dateTimeAdapter.isValid(selected)) {
                    return _this.dateTimeAdapter.getYear(selected);
                }
                else {
                    return null;
                }
            });
        }
    };
    /** Whether the given year is enabled. */
    OwlMultiYearViewComponent.prototype.isYearEnabled = function (year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this.dateTimeAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this.dateTimeAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        var firstOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (var date = firstOfYear; this.dateTimeAdapter.getYear(date) == year; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    OwlMultiYearViewComponent.prototype.isSameYearList = function (date1, date2) {
        return Math.floor(this.dateTimeAdapter.getYear(date1) / (YEARS_PER_ROW * YEAR_ROWS)) ===
            Math.floor(this.dateTimeAdapter.getYear(date2) / (YEARS_PER_ROW * YEAR_ROWS));
    };
    /**
     * Get a valid date object
     */
    OwlMultiYearViewComponent.prototype.getValidDate = function (obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    };
    OwlMultiYearViewComponent.prototype.focusActiveCell = function () {
        this.calendarBodyElm.focusActiveCell();
    };
    OwlMultiYearViewComponent.ɵfac = function OwlMultiYearViewComponent_Factory(t) { return new (t || OwlMultiYearViewComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.OwlDateTimeIntl), i0.ɵɵdirectiveInject(i2.DateTimeAdapter, 8)); };
    OwlMultiYearViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlMultiYearViewComponent, selectors: [["owl-date-time-multi-year-view"]], viewQuery: function OwlMultiYearViewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(OwlCalendarBodyComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendarBodyElm = _t.first);
        } }, hostVars: 4, hostBindings: function OwlMultiYearViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-calendar-view", ctx.owlDTCalendarView)("owl-dt-calendar-multi-year-view", ctx.owlDTCalendarMultiYearView);
        } }, inputs: { selectMode: "selectMode", selected: "selected", selecteds: "selecteds", pickerMoment: "pickerMoment", dateFilter: "dateFilter", minDate: "minDate", maxDate: "maxDate" }, outputs: { change: "change", yearSelected: "yearSelected", pickerMomentChange: "pickerMomentChange", keyboardEnter: "keyboardEnter" }, decls: 14, vars: 12, consts: [["type", "button", "tabindex", "0", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], [1, "owl-dt-calendar-table", "owl-dt-calendar-multi-year-table"], [1, "owl-dt-calendar-header"], ["colspan", "3"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "rows", "numCols", "cellRatio", "activeCell", "todayValue", "selectedValues", "selectMode", "keydown", "select"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                C197.237,120.447,195.534,115.448,191.75,111.689z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"]], template: function OwlMultiYearViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function OwlMultiYearViewComponent_Template_button_click_0_listener($event) { return ctx.prevYearList($event); });
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 2);
            i0.ɵɵelement(3, "path", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "table", 4);
            i0.ɵɵelementStart(5, "thead", 5);
            i0.ɵɵelementStart(6, "tr");
            i0.ɵɵelementStart(7, "th", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "tbody", 7);
            i0.ɵɵlistener("keydown", function OwlMultiYearViewComponent_Template_tbody_keydown_9_listener($event) { return ctx.handleCalendarKeydown($event); })("select", function OwlMultiYearViewComponent_Template_tbody_select_9_listener($event) { return ctx.selectCalendarCell($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 0);
            i0.ɵɵlistener("click", function OwlMultiYearViewComponent_Template_button_click_10_listener($event) { return ctx.nextYearList($event); });
            i0.ɵɵelementStart(11, "span", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(12, "svg", 8);
            i0.ɵɵelement(13, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", !ctx.previousEnabled());
            i0.ɵɵattribute("aria-label", ctx.prevButtonLabel);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.tableHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("rows", ctx.years)("numCols", 3)("cellRatio", 3 / 7)("activeCell", ctx.activeCell)("todayValue", ctx.todayYear)("selectedValues", ctx.selectedYears)("selectMode", ctx.selectMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", !ctx.nextEnabled());
            i0.ɵɵattribute("aria-label", ctx.nextButtonLabel);
        } }, directives: [i3.OwlCalendarBodyComponent], styles: [""], changeDetection: 0 });
    return OwlMultiYearViewComponent;
}());
export { OwlMultiYearViewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlMultiYearViewComponent, [{
        type: Component,
        args: [{
                selector: 'owl-date-time-multi-year-view',
                templateUrl: './calendar-multi-year-view.component.html',
                styleUrls: ['./calendar-multi-year-view.component.scss'],
                host: {
                    '[class.owl-dt-calendar-view]': 'owlDTCalendarView',
                    '[class.owl-dt-calendar-multi-year-view]': 'owlDTCalendarMultiYearView'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.OwlDateTimeIntl }, { type: i2.DateTimeAdapter, decorators: [{
                type: Optional
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
        }], yearSelected: [{
            type: Output
        }], pickerMomentChange: [{
            type: Output
        }], keyboardEnter: [{
            type: Output
        }], calendarBodyElm: [{
            type: ViewChild,
            args: [OwlCalendarBodyComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbXVsdGkteWVhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL2NhbGVuZGFyLW11bHRpLXllYXItdmlldy5jb21wb25lbnQudHMiLCJsaWIvZGF0ZS10aW1lL2NhbGVuZGFyLW11bHRpLXllYXItdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFFSCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRixPQUFPLEVBQ0gsVUFBVSxFQUNWLEdBQUcsRUFDSCxLQUFLLEVBQ0wsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsT0FBTyxFQUNQLFdBQVcsRUFDWCxRQUFRLEVBQ1gsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRWxFLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDL0IsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztBQUUzQjtJQXNNSSxtQ0FBcUIsS0FBd0IsRUFDeEIsVUFBMkIsRUFDZixlQUFtQztRQUYvQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQTFMcEU7O2FBRUs7UUFDRyxnQkFBVyxHQUFlLFFBQVEsQ0FBQztRQStCbkMsZUFBVSxH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REs7WUFDSCxpQkFBUTtZQUN6RCxpQkFBUTtZQUNSLGtDQUdJO1lBRCtCLDZHQUFTLHdCQUFvQixJQUFDO1lBQzdELGdDQUNJO1lBQ0osbUJBRVE7WUFGUiwrQkFFUTtZQUFBLDJCQUlKO1lBQUEsaUJBQU07WUFFVixpQkFBTztZQUNYLGlCQUFTOztZQTFDRCxpREFBK0I7WUFBQyxpREFBbUM7WUFnQm5ELGVBQWU7WUFBZixxQ0FBZTtZQUk1QixlQUFjO1lBQWQsZ0NBQWMsY0FBQSxvQkFBQSw4QkFBQSw2QkFBQSxxQ0FBQSw4QkFBQTtZQVNqQixlQUEyQjtZQUEzQiw2Q0FBMkI7WUFBQyxpREFBbUM7O29DRDlCdkU7Q0ErY0MsQUE3YUQsSUE2YUM7U0FqYVkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FackMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2dCQUN4RCxJQUFJLEVBQUM7b0JBQ0QsOEJBQThCLEVBQUUsbUJBQW1CO29CQUNuRCx5Q0FBeUMsRUFBRSw0QkFBNEI7aUJBQzFFO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOztzQkE4TGlCLFFBQVE7O2tCQXRMckIsS0FBSzs7a0JBZUwsS0FBSzs7a0JBZ0JMLEtBQUs7O2tCQWNMLEtBQUs7O2tCQW9CTCxLQUFLOztrQkFjTCxLQUFLOztrQkFlTCxLQUFLOztrQkE4REwsTUFBTTs7a0JBS04sTUFBTTs7a0JBR04sTUFBTTs7a0JBR04sTUFBTTs7a0JBR04sU0FBUzttQkFBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogY2FsZW5kYXItbXVsdGkteWVhci12aWV3LmNvbXBvbmVudFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPcHRpb25hbCxcclxuICAgIE91dHB1dCxcclxuICAgIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBDYWxlbmRhckNlbGwsIE93bENhbGVuZGFyQm9keUNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItYm9keS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RNb2RlIH0gZnJvbSAnLi9kYXRlLXRpbWUuY2xhc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgRE9XTl9BUlJPVyxcclxuICAgIEVORCxcclxuICAgIEVOVEVSLFxyXG4gICAgSE9NRSxcclxuICAgIExFRlRfQVJST1csXHJcbiAgICBQQUdFX0RPV04sXHJcbiAgICBQQUdFX1VQLFxyXG4gICAgUklHSFRfQVJST1csXHJcbiAgICBVUF9BUlJPV1xyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IE93bERhdGVUaW1lSW50bCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFlFQVJTX1BFUl9ST1cgPSAzO1xyXG5leHBvcnQgY29uc3QgWUVBUl9ST1dTID0gNztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLW11bHRpLXllYXItdmlldycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXItbXVsdGkteWVhci12aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLW11bHRpLXllYXItdmlldy5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgaG9zdDp7XHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtY2FsZW5kYXItdmlld10nOiAnb3dsRFRDYWxlbmRhclZpZXcnLFxyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWNhbGVuZGFyLW11bHRpLXllYXItdmlld10nOiAnb3dsRFRDYWxlbmRhck11bHRpWWVhclZpZXcnXHJcbiAgICB9LFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPd2xNdWx0aVllYXJWaWV3Q29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZWxlY3QgbW9kZSBvZiB0aGUgcGlja2VyO1xyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgX3NlbGVjdE1vZGU6IFNlbGVjdE1vZGUgPSAnc2luZ2xlJztcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2VsZWN0TW9kZSgpOiBTZWxlY3RNb2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0TW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0TW9kZSggdmFsOiBTZWxlY3RNb2RlICkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdE1vZGUgPSB2YWw7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRZZWFycygpO1xyXG4gICAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZCgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZCggdmFsdWU6IFQgfCBudWxsICkge1xyXG4gICAgICAgIGNvbnN0IG9sZFNlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNTYW1lRGF5KG9sZFNlbGVjdGVkLCB0aGlzLl9zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFllYXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkczogVFtdID0gW107XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkcygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNlbGVjdGVkcyggdmFsdWVzOiBUW10gKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRzID0gdmFsdWVzLm1hcCgoIHYgKSA9PiB7XHJcbiAgICAgICAgICAgIHYgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWREYXRlKHYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRZZWFycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BpY2tlck1vbWVudDogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBpY2tlck1vbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGlja2VyTW9tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwaWNrZXJNb21lbnQoIHZhbHVlOiBUICkge1xyXG4gICAgICAgIGNvbnN0IG9sZE1vbWVudCA9IHRoaXMuX3BpY2tlck1vbWVudDtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9waWNrZXJNb21lbnQgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSkgfHwgdGhpcy5kYXRlVGltZUFkYXB0ZXIubm93KCk7XHJcblxyXG4gICAgICAgIGlmIChvbGRNb21lbnQgJiYgdGhpcy5fcGlja2VyTW9tZW50ICYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzU2FtZVllYXJMaXN0KG9sZE1vbWVudCwgdGhpcy5fcGlja2VyTW9tZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlWWVhckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBfZGF0ZUZpbHRlcjogKCBkYXRlOiBUICkgPT4gYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGF0ZUZpbHRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGF0ZUZpbHRlciggZmlsdGVyOiAoIGRhdGU6IFQgKSA9PiBib29sZWFuICkge1xyXG4gICAgICAgIHRoaXMuX2RhdGVGaWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFyTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gICAgcHJpdmF0ZSBfbWluRGF0ZTogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbkRhdGUoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtaW5EYXRlKCB2YWx1ZTogVCB8IG51bGwgKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fbWluRGF0ZSA9IHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgICBwcml2YXRlIF9tYXhEYXRlOiBUIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4RGF0ZSgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1heERhdGUoIHZhbHVlOiBUIHwgbnVsbCApIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9tYXhEYXRlID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlWWVhckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdG9kYXlZZWFyOiBudW1iZXI7XHJcbiAgICBnZXQgdG9kYXlZZWFyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZGF5WWVhcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF95ZWFyczogQ2FsZW5kYXJDZWxsW11bXTtcclxuICAgIGdldCB5ZWFycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5feWVhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRZZWFyczogbnVtYmVyW107XHJcbiAgICBnZXQgc2VsZWN0ZWRZZWFycygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkWWVhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBnZXQgaXNJblNpbmdsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3NpbmdsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzSW5SYW5nZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlJyB8fCB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZUZyb20nXHJcbiAgICAgICAgICAgIHx8IHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlVG8nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhY3RpdmVDZWxsKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BpY2tlck1vbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLl9waWNrZXJNb21lbnQpICUgKFlFQVJTX1BFUl9ST1cgKiBZRUFSX1JPV1MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFibGVIZWFkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5feWVhcnMgJiYgdGhpcy5feWVhcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5feWVhcnNbMF1bMF0uZGlzcGxheVZhbHVlfSB+ICR7dGhpcy5feWVhcnNbWUVBUl9ST1dTIC0gMV1bWUVBUlNfUEVSX1JPVyAtIDFdLmRpc3BsYXlWYWx1ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmV2QnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnByZXZNdWx0aVllYXJMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmV4dEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5uZXh0TXVsdGlZZWFyTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIG5ldyBtb250aCBpcyBzZWxlY3RlZFxyXG4gICAgICogKi9cclxuICAgIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0cyB0aGUgc2VsZWN0ZWQgeWVhci4gVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlXHJcbiAgICAgKiAqL1xyXG4gICAgQE91dHB1dCgpIHJlYWRvbmx5IHllYXJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICAvKiogRW1pdHMgd2hlbiBhbnkgZGF0ZSBpcyBhY3RpdmF0ZWQuICovXHJcbiAgICBAT3V0cHV0KCkgcmVhZG9ubHkgcGlja2VyTW9tZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gICAgLyoqIEVtaXRzIHdoZW4gdXNlIGtleWJvYXJkIGVudGVyIHRvIHNlbGVjdCBhIGNhbGVuZGFyIGNlbGwgKi9cclxuICAgIEBPdXRwdXQoKSByZWFkb25seSBrZXlib2FyZEVudGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIC8qKiBUaGUgYm9keSBvZiBjYWxlbmRhciB0YWJsZSAqL1xyXG4gICAgQFZpZXdDaGlsZChPd2xDYWxlbmRhckJvZHlDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGNhbGVuZGFyQm9keUVsbTogT3dsQ2FsZW5kYXJCb2R5Q29tcG9uZW50O1xyXG5cclxuICAgIGdldCBvd2xEVENhbGVuZGFyVmlldygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRDYWxlbmRhck11bHRpWWVhclZpZXcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgcGlja2VySW50bDogT3dsRGF0ZVRpbWVJbnRsLFxyXG4gICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGF0ZVRpbWVBZGFwdGVyOiBEYXRlVGltZUFkYXB0ZXI8VD4gKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdG9kYXlZZWFyID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGEgY2FsZW5kYXJDZWxsIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RDYWxlbmRhckNlbGwoIGNlbGw6IENhbGVuZGFyQ2VsbCApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIoY2VsbC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RZZWFyKCB5ZWFyOiBudW1iZXIgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdCh0aGlzLmRhdGVUaW1lQWRhcHRlci5jcmVhdGVEYXRlKHllYXIsIDAsIDEpKTtcclxuICAgICAgICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY3JlYXRlRGF0ZShcclxuICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgodGhpcy5waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXlzSW5Nb250aCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE51bURheXNJbk1vbnRoKGZpcnN0RGF0ZU9mTW9udGgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY3JlYXRlRGF0ZShcclxuICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgodGhpcy5waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihkYXlzSW5Nb250aCwgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZSh0aGlzLnBpY2tlck1vbWVudCkpLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRIb3Vycyh0aGlzLnBpY2tlck1vbWVudCksXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1pbnV0ZXModGhpcy5waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRTZWNvbmRzKHRoaXMucGlja2VyTW9tZW50KSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRoZSBwcmV2aW91cyB5ZWFyIGxpc3RcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgcHJldlllYXJMaXN0KCBldmVudDogYW55ICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BpY2tlck1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5waWNrZXJNb21lbnQsIC0xICogWUVBUl9ST1dTICogWUVBUlNfUEVSX1JPVyk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJMaXN0KCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRoZSBuZXh0IHllYXIgbGlzdFxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBuZXh0WWVhckxpc3QoIGV2ZW50OiBhbnkgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGlja2VyTW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLnBpY2tlck1vbWVudCwgWUVBUl9ST1dTICogWUVBUlNfUEVSX1JPVyk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJMaXN0KCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2VuZXJhdGVZZWFyTGlzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl95ZWFycyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBwaWNrZXJNb21lbnRZZWFyID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLl9waWNrZXJNb21lbnQpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHBpY2tlck1vbWVudFllYXIgJSAoWUVBUlNfUEVSX1JPVyAqIFlFQVJfUk9XUyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgWUVBUl9ST1dTOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFlFQVJTX1BFUl9ST1c7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHBpY2tlck1vbWVudFllYXIgLSBvZmZzZXQgKyAoaiArIGkgKiBZRUFSU19QRVJfUk9XKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJDZWxsID0gdGhpcy5jcmVhdGVZZWFyQ2VsbCh5ZWFyKTtcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKHllYXJDZWxsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5feWVhcnMucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogV2hldGhlciB0aGUgcHJldmlvdXMgcGVyaW9kIGJ1dHRvbiBpcyBlbmFibGVkLiAqL1xyXG4gICAgcHVibGljIHByZXZpb3VzRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMubWluRGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLm1pbkRhdGUgfHwgIXRoaXMuaXNTYW1lWWVhckxpc3QodGhpcy5fcGlja2VyTW9tZW50LCB0aGlzLm1pbkRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBXaGV0aGVyIHRoZSBuZXh0IHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICAgIHB1YmxpYyBuZXh0RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMubWF4RGF0ZSB8fCAhdGhpcy5pc1NhbWVZZWFyTGlzdCh0aGlzLl9waWNrZXJNb21lbnQsIHRoaXMubWF4RGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUNhbGVuZGFyS2V5ZG93biggZXZlbnQ6IEtleWJvYXJkRXZlbnQgKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vbWVudDtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgLy8gbWludXMgMSB5ZWFyXHJcbiAgICAgICAgICAgIGNhc2UgTEVGVF9BUlJPVzpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fcGlja2VyTW9tZW50LCAtMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCAxIHllYXJcclxuICAgICAgICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fcGlja2VyTW9tZW50LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQobW9tZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gbWludXMgMyB5ZWFyc1xyXG4gICAgICAgICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgICAgICAgICAgbW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9waWNrZXJNb21lbnQsIC0xICogWUVBUlNfUEVSX1JPVyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCAzIHllYXJzXHJcbiAgICAgICAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICAgICAgICAgIG1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fcGlja2VyTW9tZW50LCBZRUFSU19QRVJfUk9XKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQobW9tZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gZ28gdG8gdGhlIGZpcnN0IHllYXIgb2YgdGhlIHllYXIgcGFnZVxyXG4gICAgICAgICAgICBjYXNlIEhPTUU6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX3BpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAtdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLl9waWNrZXJNb21lbnQpICUgKFlFQVJTX1BFUl9ST1cgKiBZRUFSX1JPV1MpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQobW9tZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gZ28gdG8gdGhlIGxhc3QgeWVhciBvZiB0aGUgeWVhciBwYWdlXHJcbiAgICAgICAgICAgIGNhc2UgRU5EOlxyXG4gICAgICAgICAgICAgICAgbW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgKFlFQVJTX1BFUl9ST1cgKiBZRUFSX1JPV1MpIC0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLl9waWNrZXJNb21lbnQpICUgKFlFQVJTX1BFUl9ST1cgKiBZRUFSX1JPV1MpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIG1pbnVzIDEgeWVhciBwYWdlIChvciAxMCB5ZWFyIHBhZ2VzKVxyXG4gICAgICAgICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMucGlja2VyTW9tZW50LCBldmVudC5hbHRLZXkgPyAtMTAgKiAoWUVBUlNfUEVSX1JPVyAqIFlFQVJfUk9XUykgOiAtMSAqIChZRUFSU19QRVJfUk9XICogWUVBUl9ST1dTKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCAxIHllYXIgcGFnZSAob3IgMTAgeWVhciBwYWdlcylcclxuICAgICAgICAgICAgY2FzZSBQQUdFX0RPV046XHJcbiAgICAgICAgICAgICAgICBtb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMucGlja2VyTW9tZW50LCBldmVudC5hbHRLZXkgPyAxMCAqIChZRUFSU19QRVJfUk9XICogWUVBUl9ST1dTKSA6IChZRUFSU19QRVJfUk9XICogWUVBUl9ST1dTKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KG1vbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFllYXIodGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLl9waWNrZXJNb21lbnQpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRFbnRlci5lbWl0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIENhbGVuZGFyQ2VsbCBmb3IgdGhlIGdpdmVuIHllYXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlWWVhckNlbGwoIHllYXI6IG51bWJlciApOiBDYWxlbmRhckNlbGwge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZU9mWWVhciA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNyZWF0ZURhdGUoeWVhciwgMCwgMSk7XHJcbiAgICAgICAgY29uc3QgYXJpYUxhYmVsID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhck5hbWUoc3RhcnREYXRlT2ZZZWFyKTtcclxuICAgICAgICBjb25zdCBjZWxsQ2xhc3MgPSAnb3dsLWR0LXllYXItJyArIHllYXI7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhckNlbGwoeWVhciwgeWVhci50b1N0cmluZygpLCBhcmlhTGFiZWwsIHRoaXMuaXNZZWFyRW5hYmxlZCh5ZWFyKSwgZmFsc2UsIGNlbGxDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTZWxlY3RlZFllYXJzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXJzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSW5TaW5nbGVNb2RlICYmIHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyc1swXSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0luUmFuZ2VNb2RlICYmIHRoaXMuc2VsZWN0ZWRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkWWVhcnMgPSB0aGlzLnNlbGVjdGVkcy5tYXAoKCBzZWxlY3RlZCApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKHNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiB5ZWFyIGlzIGVuYWJsZWQuICovXHJcbiAgICBwcml2YXRlIGlzWWVhckVuYWJsZWQoIHllYXI6IG51bWJlciApIHtcclxuICAgICAgICAvLyBkaXNhYmxlIGlmIHRoZSB5ZWFyIGlzIGdyZWF0ZXIgdGhhbiBtYXhEYXRlIGxvd2VyIHRoYW4gbWluRGF0ZVxyXG4gICAgICAgIGlmICh5ZWFyID09PSB1bmRlZmluZWQgfHwgeWVhciA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgICAodGhpcy5tYXhEYXRlICYmIHllYXIgPiB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKHRoaXMubWF4RGF0ZSkpIHx8XHJcbiAgICAgICAgICAgICh0aGlzLm1pbkRhdGUgJiYgeWVhciA8IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIodGhpcy5taW5EYXRlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5hYmxlIGlmIGl0IHJlYWNoZXMgaGVyZSBhbmQgdGhlcmUncyBubyBmaWx0ZXIgZGVmaW5lZFxyXG4gICAgICAgIGlmICghdGhpcy5kYXRlRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmlyc3RPZlllYXIgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jcmVhdGVEYXRlKHllYXIsIDAsIDEpO1xyXG5cclxuICAgICAgICAvLyBJZiBhbnkgZGF0ZSBpbiB0aGUgeWVhciBpcyBlbmFibGVkIGNvdW50IHRoZSB5ZWFyIGFzIGVuYWJsZWQuXHJcbiAgICAgICAgZm9yIChsZXQgZGF0ZSA9IGZpcnN0T2ZZZWFyOyB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGUpID09IHllYXI7XHJcbiAgICAgICAgICAgICBkYXRlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIDEpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1NhbWVZZWFyTGlzdCggZGF0ZTE6IFQsIGRhdGUyOiBUICk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZTEpIC8gKFlFQVJTX1BFUl9ST1cgKiBZRUFSX1JPV1MpKSA9PT1cclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGUyKSAvIChZRUFSU19QRVJfUk9XICogWUVBUl9ST1dTKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSB2YWxpZCBkYXRlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFZhbGlkRGF0ZSggb2JqOiBhbnkgKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJiB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKG9iaikpID8gb2JqIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvY3VzQWN0aXZlQ2VsbCgpIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyQm9keUVsbS5mb2N1c0FjdGl2ZUNlbGwoKTtcclxuICAgIH1cclxufVxyXG4iLCI8YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC1jb250cm9sLWFycm93LWJ1dHRvblwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cIiFwcmV2aW91c0VuYWJsZWQoKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwicHJldkJ1dHRvbkxhYmVsXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgKGNsaWNrKT1cInByZXZZZWFyTGlzdCgkZXZlbnQpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgIDwhLS0gPGVkaXRvci1mb2xkIGRlc2M9XCJTVkcgQXJyb3cgTGVmdFwiPiAtLT5cclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI1MC43MzggMjUwLjczOFwiXHJcbiAgICAgICAgICAgICBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwLjczOCAyNTAuNzM4O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDtcIiBkPVwiTTk2LjYzMywxMjUuMzY5bDk1LjA1My05NC41MzNjNy4xMDEtNy4wNTUsNy4xMDEtMTguNDkyLDAtMjUuNTQ2ICAgYy03LjEtNy4wNTQtMTguNjEzLTcuMDU0LTI1LjcxNCwwTDU4Ljk4OSwxMTEuNjg5Yy0zLjc4NCwzLjc1OS01LjQ4Nyw4Ljc1OS01LjIzOCwxMy42OGMtMC4yNDksNC45MjIsMS40NTQsOS45MjEsNS4yMzgsMTMuNjgxICAgbDEwNi45ODMsMTA2LjM5OGM3LjEwMSw3LjA1NSwxOC42MTMsNy4wNTUsMjUuNzE0LDBjNy4xMDEtNy4wNTQsNy4xMDEtMTguNDkxLDAtMjUuNTQ0TDk2LjYzMywxMjUuMzY5elwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8IS0tIDwvZWRpdG9yLWZvbGQ+IC0tPlxyXG4gICAgPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuPHRhYmxlIGNsYXNzPVwib3dsLWR0LWNhbGVuZGFyLXRhYmxlIG93bC1kdC1jYWxlbmRhci1tdWx0aS15ZWFyLXRhYmxlXCI+XHJcbiAgICA8dGhlYWQgY2xhc3M9XCJvd2wtZHQtY2FsZW5kYXItaGVhZGVyXCI+XHJcbiAgICA8dHI+XHJcbiAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+e3t0YWJsZUhlYWRlcn19PC90aD5cclxuICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5IG93bC1kYXRlLXRpbWUtY2FsZW5kYXItYm9keSByb2xlPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgW3Jvd3NdPVwieWVhcnNcIiBbbnVtQ29sc109XCIzXCIgW2NlbGxSYXRpb109XCIzIC8gN1wiXHJcbiAgICAgICAgICAgW2FjdGl2ZUNlbGxdPVwiYWN0aXZlQ2VsbFwiXHJcbiAgICAgICAgICAgW3RvZGF5VmFsdWVdPVwidG9kYXlZZWFyXCJcclxuICAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZXNdPVwic2VsZWN0ZWRZZWFyc1wiXHJcbiAgICAgICAgICAgW3NlbGVjdE1vZGVdPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgICAgICAgKGtleWRvd24pPVwiaGFuZGxlQ2FsZW5kYXJLZXlkb3duKCRldmVudClcIlxyXG4gICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0Q2FsZW5kYXJDZWxsKCRldmVudClcIj48L3Rib2R5PlxyXG48L3RhYmxlPlxyXG48YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC1jb250cm9sLWFycm93LWJ1dHRvblwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cIiFuZXh0RW5hYmxlZCgpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJuZXh0QnV0dG9uTGFiZWxcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiAoY2xpY2spPVwibmV4dFllYXJMaXN0KCRldmVudClcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgPCEtLSA8ZWRpdG9yLWZvbGQgZGVzYz1cIlNWRyBBcnJvdyBSaWdodFwiPiAtLT5cclxuICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1MC43MzggMjUwLjczOFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAuNzM4IDI1MC43Mzg7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtcIiBkPVwiTTE5MS43NSwxMTEuNjg5TDg0Ljc2Niw1LjI5MWMtNy4xLTcuMDU1LTE4LjYxMy03LjA1NS0yNS43MTMsMFxyXG4gICAgICAgICAgICAgICAgYy03LjEwMSw3LjA1NC03LjEwMSwxOC40OSwwLDI1LjU0NGw5NS4wNTMsOTQuNTM0bC05NS4wNTMsOTQuNTMzYy03LjEwMSw3LjA1NC03LjEwMSwxOC40OTEsMCwyNS41NDVcclxuICAgICAgICAgICAgICAgIGM3LjEsNy4wNTQsMTguNjEzLDcuMDU0LDI1LjcxMywwTDE5MS43NSwxMzkuMDVjMy43ODQtMy43NTksNS40ODctOC43NTksNS4yMzgtMTMuNjgxXHJcbiAgICAgICAgICAgICAgICBDMTk3LjIzNywxMjAuNDQ3LDE5NS41MzQsMTE1LjQ0OCwxOTEuNzUsMTExLjY4OXpcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPCEtLSA8L2VkaXRvci1mb2xkPiAtLT5cclxuICAgIDwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==