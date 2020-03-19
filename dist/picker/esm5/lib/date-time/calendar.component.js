/**
 * calendar.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./date-time-picker-intl.service";
import * as i2 from "./adapter/date-time-adapter.class";
import * as i3 from "@angular/cdk/a11y";
import * as i4 from "@angular/common";
import * as i5 from "./calendar-month-view.component";
import * as i6 from "./calendar-year-view.component";
import * as i7 from "./calendar-multi-year-view.component";
function OwlCalendarComponent_owl_date_time_month_view_18_Template(rf, ctx) { if (rf & 1) {
    var _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-month-view", 16);
    i0.ɵɵlistener("pickerMomentChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r64); var ctx_r63 = i0.ɵɵnextContext(); return ctx_r63.handlePickerMomentChange($event); })("selectedChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r64); var ctx_r65 = i0.ɵɵnextContext(); return ctx_r65.dateSelected($event); })("userSelection", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_userSelection_0_listener() { i0.ɵɵrestoreView(_r64); var ctx_r66 = i0.ɵɵnextContext(); return ctx_r66.userSelected(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r60 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r60.pickerMoment)("firstDayOfWeek", ctx_r60.firstDayOfWeek)("selected", ctx_r60.selected)("selecteds", ctx_r60.selecteds)("selectMode", ctx_r60.selectMode)("minDate", ctx_r60.minDate)("maxDate", ctx_r60.maxDate)("dateFilter", ctx_r60.dateFilter)("hideOtherMonths", ctx_r60.hideOtherMonths);
} }
function OwlCalendarComponent_owl_date_time_year_view_19_Template(rf, ctx) { if (rf & 1) {
    var _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-year-view", 17);
    i0.ɵɵlistener("keyboardEnter", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_keyboardEnter_0_listener() { i0.ɵɵrestoreView(_r68); var ctx_r67 = i0.ɵɵnextContext(); return ctx_r67.focusActiveCell(); })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r68); var ctx_r69 = i0.ɵɵnextContext(); return ctx_r69.handlePickerMomentChange($event); })("monthSelected", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_monthSelected_0_listener($event) { i0.ɵɵrestoreView(_r68); var ctx_r70 = i0.ɵɵnextContext(); return ctx_r70.selectMonthInYearView($event); })("change", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_change_0_listener($event) { i0.ɵɵrestoreView(_r68); var ctx_r71 = i0.ɵɵnextContext(); return ctx_r71.goToDateInView($event, "month"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r61 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r61.pickerMoment)("selected", ctx_r61.selected)("selecteds", ctx_r61.selecteds)("selectMode", ctx_r61.selectMode)("minDate", ctx_r61.minDate)("maxDate", ctx_r61.maxDate)("dateFilter", ctx_r61.dateFilter);
} }
function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template(rf, ctx) { if (rf & 1) {
    var _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-multi-year-view", 18);
    i0.ɵɵlistener("keyboardEnter", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_keyboardEnter_0_listener() { i0.ɵɵrestoreView(_r73); var ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.focusActiveCell(); })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r73); var ctx_r74 = i0.ɵɵnextContext(); return ctx_r74.handlePickerMomentChange($event); })("yearSelected", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_yearSelected_0_listener($event) { i0.ɵɵrestoreView(_r73); var ctx_r75 = i0.ɵɵnextContext(); return ctx_r75.selectYearInMultiYearView($event); })("change", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_change_0_listener($event) { i0.ɵɵrestoreView(_r73); var ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.goToDateInView($event, "year"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r62 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r62.pickerMoment)("selected", ctx_r62.selected)("selecteds", ctx_r62.selecteds)("selectMode", ctx_r62.selectMode)("minDate", ctx_r62.minDate)("maxDate", ctx_r62.maxDate)("dateFilter", ctx_r62.dateFilter);
} }
var OwlCalendarComponent = /** @class */ (function () {
    function OwlCalendarComponent(elmRef, pickerIntl, ngZone, cdRef, dateTimeAdapter, dateTimeFormats) {
        var _this = this;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.ngZone = ngZone;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Set the first day of week
         */
        this.firstDayOfWeek = 0;
        this._selecteds = [];
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        /** Emits when the currently picker moment changes. */
        this.pickerMomentChange = new EventEmitter();
        /** Emits when the currently selected date changes. */
        this.selectedChange = new EventEmitter();
        /** Emits when any date is selected. */
        this.userSelection = new EventEmitter();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         * */
        this.yearSelected = new EventEmitter();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         * */
        this.monthSelected = new EventEmitter();
        /**
         * Date filter for the month and year view
         */
        this.dateFilterForViews = function (date) {
            return (!!date &&
                (!_this.dateFilter || _this.dateFilter(date)) &&
                (!_this.minDate ||
                    _this.dateTimeAdapter.compare(date, _this.minDate) >= 0) &&
                (!_this.maxDate ||
                    _this.dateTimeAdapter.compare(date, _this.maxDate) <= 0));
        };
        this.intlChangesSub = Subscription.EMPTY;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this.moveFocusOnNextTick = false;
        this.intlChangesSub = this.pickerIntl.changes.subscribe(function () {
            _this.cdRef.markForCheck();
        });
    }
    Object.defineProperty(OwlCalendarComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            value = this.getValidDate(value);
            this._minDate = value
                ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value))
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            value = this.getValidDate(value);
            this._maxDate = value
                ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value))
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "pickerMoment", {
        get: function () {
            return this._pickerMoment;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._pickerMoment =
                this.getValidDate(value) || this.dateTimeAdapter.now();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._selected = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "selecteds", {
        get: function () {
            return this._selecteds;
        },
        set: function (values) {
            var _this = this;
            this._selecteds = values.map(function (v) {
                v = _this.dateTimeAdapter.deserialize(v);
                return _this.getValidDate(v);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "periodButtonText", {
        get: function () {
            return this.isMonthView
                ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel)
                : this.dateTimeAdapter.getYearName(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "periodButtonLabel", {
        get: function () {
            return this.isMonthView
                ? this.pickerIntl.switchToMultiYearViewLabel
                : this.pickerIntl.switchToMonthViewLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "prevButtonLabel", {
        get: function () {
            if (this._currentView === 'month') {
                return this.pickerIntl.prevMonthLabel;
            }
            else if (this._currentView === 'year') {
                return this.pickerIntl.prevYearLabel;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "nextButtonLabel", {
        get: function () {
            if (this._currentView === 'month') {
                return this.pickerIntl.nextMonthLabel;
            }
            else if (this._currentView === 'year') {
                return this.pickerIntl.nextYearLabel;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "currentView", {
        get: function () {
            return this._currentView;
        },
        set: function (view) {
            this._currentView = view;
            this.moveFocusOnNextTick = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "isInRangeMode", {
        get: function () {
            return (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom' ||
                this.selectMode === 'rangeTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "showControlArrows", {
        get: function () {
            return this._currentView !== 'multi-years';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "isMonthView", {
        get: function () {
            return this._currentView === 'month';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarComponent.prototype, "owlDTCalendarClass", {
        /**
         * Bind class 'owl-dt-calendar' to host
         * */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlCalendarComponent.prototype.ngOnInit = function () { };
    OwlCalendarComponent.prototype.ngAfterContentInit = function () {
        this._currentView = this.startView;
    };
    OwlCalendarComponent.prototype.ngAfterViewChecked = function () {
        if (this.moveFocusOnNextTick) {
            this.moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    };
    OwlCalendarComponent.prototype.ngOnDestroy = function () {
        this.intlChangesSub.unsubscribe();
    };
    /**
     * Toggle between month view and year view
     */
    OwlCalendarComponent.prototype.toggleViews = function () {
        this.currentView =
            this._currentView == 'month' ? 'multi-years' : 'month';
    };
    /**
     * Handles user clicks on the previous button.
     * */
    OwlCalendarComponent.prototype.previousClicked = function () {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
        this.pickerMomentChange.emit(this.pickerMoment);
    };
    /**
     * Handles user clicks on the next button.
     * */
    OwlCalendarComponent.prototype.nextClicked = function () {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
        this.pickerMomentChange.emit(this.pickerMoment);
    };
    OwlCalendarComponent.prototype.dateSelected = function (date) {
        if (!this.dateFilterForViews(date)) {
            return;
        }
        this.selectedChange.emit(date);
        /*if ((this.isInSingleMode && !this.dateTimeAdapter.isSameDay(date, this.selected)) ||
            this.isInRangeMode) {
            this.selectedChange.emit(date);
        }*/
    };
    /**
     * Change the pickerMoment value and switch to a specific view
     */
    OwlCalendarComponent.prototype.goToDateInView = function (date, view) {
        this.handlePickerMomentChange(date);
        this.currentView = view;
        return;
    };
    /**
     * Change the pickerMoment value
     */
    OwlCalendarComponent.prototype.handlePickerMomentChange = function (date) {
        this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
        this.pickerMomentChange.emit(this.pickerMoment);
        return;
    };
    OwlCalendarComponent.prototype.userSelected = function () {
        this.userSelection.emit();
    };
    /**
     * Whether the previous period button is enabled.
     */
    OwlCalendarComponent.prototype.prevButtonEnabled = function () {
        return (!this.minDate || !this.isSameView(this.pickerMoment, this.minDate));
    };
    /**
     * Whether the next period button is enabled.
     */
    OwlCalendarComponent.prototype.nextButtonEnabled = function () {
        return (!this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate));
    };
    /**
     * Focus to the host element
     * */
    OwlCalendarComponent.prototype.focusActiveCell = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(function () {
                _this.elmRef.nativeElement
                    .querySelector('.owl-dt-calendar-cell-active')
                    .focus();
            });
        });
    };
    OwlCalendarComponent.prototype.selectYearInMultiYearView = function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    OwlCalendarComponent.prototype.selectMonthInYearView = function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     */
    OwlCalendarComponent.prototype.isSameView = function (date1, date2) {
        if (this._currentView === 'month') {
            return !!(date1 &&
                date2 &&
                this.dateTimeAdapter.getYear(date1) ===
                    this.dateTimeAdapter.getYear(date2) &&
                this.dateTimeAdapter.getMonth(date1) ===
                    this.dateTimeAdapter.getMonth(date2));
        }
        else if (this._currentView === 'year') {
            return !!(date1 &&
                date2 &&
                this.dateTimeAdapter.getYear(date1) ===
                    this.dateTimeAdapter.getYear(date2));
        }
        else {
            return false;
        }
    };
    /**
     * Get a valid date object
     */
    OwlCalendarComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    };
    OwlCalendarComponent.ɵfac = function OwlCalendarComponent_Factory(t) { return new (t || OwlCalendarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.OwlDateTimeIntl), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DateTimeAdapter, 8), i0.ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8)); };
    OwlCalendarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlCalendarComponent, selectors: [["owl-date-time-calendar"]], hostVars: 2, hostBindings: function OwlCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-calendar", ctx.owlDTCalendarClass);
        } }, inputs: { dateFilter: "dateFilter", firstDayOfWeek: "firstDayOfWeek", minDate: "minDate", maxDate: "maxDate", pickerMoment: "pickerMoment", selectMode: "selectMode", selected: "selected", selecteds: "selecteds", startView: "startView", hideOtherMonths: "hideOtherMonths" }, outputs: { pickerMomentChange: "pickerMomentChange", selectedChange: "selectedChange", userSelection: "userSelection", yearSelected: "yearSelected", monthSelected: "monthSelected" }, exportAs: ["owlDateTimeCalendar"], decls: 21, vars: 16, consts: [[1, "owl-dt-calendar-control"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], [1, "owl-dt-calendar-control-content"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-control-period-button", 3, "click"], [1, "owl-dt-control-button-arrow"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "50%", "height", "50%", "viewBox", "0 0 292.362 292.362", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 292.362 292.362"], ["d", "M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                    C197.237,120.447,195.534,115.448,191.75,111.689z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "owl-dt-calendar-main", 3, "ngSwitch"], [3, "pickerMoment", "firstDayOfWeek", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "hideOtherMonths", "pickerMomentChange", "selectedChange", "userSelection", 4, "ngSwitchCase"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "monthSelected", "change", 4, "ngSwitchCase"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "yearSelected", "change", 4, "ngSwitchCase"], [3, "pickerMoment", "firstDayOfWeek", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "hideOtherMonths", "pickerMomentChange", "selectedChange", "userSelection"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "monthSelected", "change"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "yearSelected", "change"]], template: function OwlCalendarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵlistener("click", function OwlCalendarComponent_Template_button_click_1_listener() { return ctx.previousClicked(); });
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵelementStart(6, "button", 6);
            i0.ɵɵlistener("click", function OwlCalendarComponent_Template_button_click_6_listener() { return ctx.toggleViews(); });
            i0.ɵɵelementStart(7, "span", 2);
            i0.ɵɵtext(8);
            i0.ɵɵelementStart(9, "span", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(10, "svg", 8);
            i0.ɵɵelementStart(11, "g");
            i0.ɵɵelement(12, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(13, "button", 1);
            i0.ɵɵlistener("click", function OwlCalendarComponent_Template_button_click_13_listener() { return ctx.nextClicked(); });
            i0.ɵɵelementStart(14, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(15, "svg", 10);
            i0.ɵɵelement(16, "path", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(17, "div", 12);
            i0.ɵɵtemplate(18, OwlCalendarComponent_owl_date_time_month_view_18_Template, 1, 9, "owl-date-time-month-view", 13);
            i0.ɵɵtemplate(19, OwlCalendarComponent_owl_date_time_year_view_19_Template, 1, 7, "owl-date-time-year-view", 14);
            i0.ɵɵtemplate(20, OwlCalendarComponent_owl_date_time_multi_year_view_20_Template, 1, 7, "owl-date-time-multi-year-view", 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("visibility", ctx.showControlArrows ? "visible" : "hidden");
            i0.ɵɵproperty("disabled", !ctx.prevButtonEnabled());
            i0.ɵɵattribute("aria-label", ctx.prevButtonLabel);
            i0.ɵɵadvance(5);
            i0.ɵɵattribute("aria-label", ctx.periodButtonLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.periodButtonText, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("transform", "rotate(" + (ctx.isMonthView ? 0 : 180) + "deg)");
            i0.ɵɵadvance(4);
            i0.ɵɵstyleProp("visibility", ctx.showControlArrows ? "visible" : "hidden");
            i0.ɵɵproperty("disabled", !ctx.nextButtonEnabled());
            i0.ɵɵattribute("aria-label", ctx.nextButtonLabel);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngSwitch", ctx.currentView);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "month");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "year");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "multi-years");
        } }, directives: [i3.CdkMonitorFocus, i4.NgSwitch, i4.NgSwitchCase, i5.OwlMonthViewComponent, i6.OwlYearViewComponent, i7.OwlMultiYearViewComponent], styles: [""], changeDetection: 0 });
    return OwlCalendarComponent;
}());
export { OwlCalendarComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlCalendarComponent, [{
        type: Component,
        args: [{
                selector: 'owl-date-time-calendar',
                exportAs: 'owlDateTimeCalendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss'],
                host: {
                    '[class.owl-dt-calendar]': 'owlDTCalendarClass'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.OwlDateTimeIntl }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i2.DateTimeAdapter, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { dateFilter: [{
            type: Input
        }], firstDayOfWeek: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], pickerMoment: [{
            type: Input
        }], selectMode: [{
            type: Input
        }], selected: [{
            type: Input
        }], selecteds: [{
            type: Input
        }], startView: [{
            type: Input
        }], hideOtherMonths: [{
            type: Input
        }], pickerMomentChange: [{
            type: Output
        }], selectedChange: [{
            type: Output
        }], userSelection: [{
            type: Output
        }], yearSelected: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibGliL2RhdGUtdGltZS9jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFHSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQ0gscUJBQXFCLEVBRXhCLE1BQU0sa0NBQWtDLENBQUM7QUFFMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0lDb0NoQyxvREFhb0U7SUFGNUQscVJBQXVELG9QQUFBLHNPQUFBO0lBRXRCLGlCQUEyQjs7O0lBWDVELG1EQUE2QiwwQ0FBQSw4QkFBQSxnQ0FBQSxrQ0FBQSw0QkFBQSw0QkFBQSxrQ0FBQSw0Q0FBQTs7OztJQWFyQyxtREFZNkU7SUFIckUsb1BBQW1DLHNRQUFBLHlQQUFBLGlPQUdGLE9BQU8sS0FITDtJQUdRLGlCQUEwQjs7O0lBVnJFLG1EQUE2Qiw4QkFBQSxnQ0FBQSxrQ0FBQSw0QkFBQSw0QkFBQSxrQ0FBQTs7OztJQVlyQyx5REFZa0Y7SUFIMUUsZ1FBQW1DLGtSQUFBLHVRQUFBLDZPQUdGLE1BQU0sS0FISjtJQUdPLGlCQUFnQzs7O0lBVjFFLG1EQUE2Qiw4QkFBQSxnQ0FBQSxr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a0JBSUwsTUFBTTs7a0JBSU4sTUFBTTs7a0JBSU4sTUFBTTs7a0JBTU4sTUFBTTs7a0JBTU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBjYWxlbmRhci5jb21wb25lbnRcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICAgIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEluamVjdCxcclxuICAgIElucHV0LFxyXG4gICAgTmdab25lLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbnRsIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlci9kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XHJcbmltcG9ydCB7XHJcbiAgICBPV0xfREFURV9USU1FX0ZPUk1BVFMsXHJcbiAgICBPd2xEYXRlVGltZUZvcm1hdHNcclxufSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XHJcbmltcG9ydCB7IFNlbGVjdE1vZGUgfSBmcm9tICcuL2RhdGUtdGltZS5jbGFzcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtY2FsZW5kYXInLFxyXG4gICAgZXhwb3J0QXM6ICdvd2xEYXRlVGltZUNhbGVuZGFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWNhbGVuZGFyXSc6ICdvd2xEVENhbGVuZGFyQ2xhc3MnXHJcbiAgICB9LFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3dsQ2FsZW5kYXJDb21wb25lbnQ8VD5cclxuICAgIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRlIGZpbHRlciBmb3IgdGhlIG1vbnRoIGFuZCB5ZWFyIHZpZXdcclxuICAgICAqICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZGF0ZUZpbHRlcjogRnVuY3Rpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBmaXJzdERheU9mV2VlayA9IDA7XHJcblxyXG4gICAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICAgIHByaXZhdGUgX21pbkRhdGU6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5EYXRlKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWluRGF0ZSh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWluRGF0ZSA9IHZhbHVlXHJcbiAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY3JlYXRlRGF0ZShcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcih2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gICAgcHJpdmF0ZSBfbWF4RGF0ZTogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heERhdGUoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYXhEYXRlKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9tYXhEYXRlID0gdmFsdWVcclxuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5jcmVhdGVEYXRlKFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUaGUgY3VycmVudCBwaWNrZXIgbW9tZW50ICovXHJcbiAgICBwcml2YXRlIF9waWNrZXJNb21lbnQ6IFQ7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBpY2tlck1vbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGlja2VyTW9tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwaWNrZXJNb21lbnQodmFsdWU6IFQpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9waWNrZXJNb21lbnQgPVxyXG4gICAgICAgICAgICB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSkgfHwgdGhpcy5kYXRlVGltZUFkYXB0ZXIubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNlbGVjdE1vZGU6IFNlbGVjdE1vZGU7XHJcblxyXG4gICAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbW9tZW50LiAqL1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZCgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZHM6IFRbXSA9IFtdO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzZWxlY3RlZHMoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZHModmFsdWVzOiBUW10pIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZHMgPSB2YWx1ZXMubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICB2ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkRGF0ZSh2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2aWV3IHRoYXQgdGhlIGNhbGVuZGFyIHNob3VsZCBzdGFydCBpbi5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHN0YXJ0VmlldzogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFycycgPSAnbW9udGgnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBoaWRlIGRhdGVzIGluIG90aGVyIG1vbnRocyBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBjdXJyZW50IG1vbnRoLlxyXG4gICAgICogKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBoaWRlT3RoZXJNb250aHM6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBwaWNrZXIgbW9tZW50IGNoYW5nZXMuICovXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHBpY2tlck1vbWVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUgY2hhbmdlcy4gKi9cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gICAgLyoqIEVtaXRzIHdoZW4gYW55IGRhdGUgaXMgc2VsZWN0ZWQuICovXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHVzZXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0cyB0aGUgc2VsZWN0ZWQgeWVhci4gVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlXHJcbiAgICAgKiAqL1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSB5ZWFyU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0cyB0aGUgc2VsZWN0ZWQgbW9udGguIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZVxyXG4gICAgICogKi9cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgbW9udGhTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICBnZXQgcGVyaW9kQnV0dG9uVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9udGhWaWV3XHJcbiAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUZvcm1hdHMubW9udGhZZWFyTGFiZWxcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5waWNrZXJNb21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwZXJpb2RCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9udGhWaWV3XHJcbiAgICAgICAgICAgID8gdGhpcy5waWNrZXJJbnRsLnN3aXRjaFRvTXVsdGlZZWFyVmlld0xhYmVsXHJcbiAgICAgICAgICAgIDogdGhpcy5waWNrZXJJbnRsLnN3aXRjaFRvTW9udGhWaWV3TGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZXZCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnByZXZNb250aExhYmVsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09ICd5ZWFyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnByZXZZZWFyTGFiZWw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBuZXh0QnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09ICdtb250aCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5uZXh0TW9udGhMYWJlbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRWaWV3ID09PSAneWVhcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5uZXh0WWVhckxhYmVsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50VmlldzogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFycyc7XHJcbiAgICBnZXQgY3VycmVudFZpZXcoKTogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFycycge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY3VycmVudFZpZXcodmlldzogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFycycpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy5tb3ZlRm9jdXNPbk5leHRUaWNrID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJblNpbmdsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3NpbmdsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzSW5SYW5nZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2UnIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlRnJvbScgfHxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2VUbydcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93Q29udHJvbEFycm93cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFZpZXcgIT09ICdtdWx0aS15ZWFycyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTW9udGhWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gJ21vbnRoJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhdGUgZmlsdGVyIGZvciB0aGUgbW9udGggYW5kIHllYXIgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGF0ZUZpbHRlckZvclZpZXdzID0gKGRhdGU6IFQpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhIWRhdGUgJiZcclxuICAgICAgICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUpKSAmJlxyXG4gICAgICAgICAgICAoIXRoaXMubWluRGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICAgICAgICghdGhpcy5tYXhEYXRlIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJpbmQgY2xhc3MgJ293bC1kdC1jYWxlbmRhcicgdG8gaG9zdFxyXG4gICAgICogKi9cclxuICAgIGdldCBvd2xEVENhbGVuZGFyQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRsQ2hhbmdlc1N1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgZm9yIHNjaGVkdWxpbmcgdGhhdCBmb2N1cyBzaG91bGQgYmUgbW92ZWQgdG8gdGhlIGFjdGl2ZSBjZWxsIG9uIHRoZSBuZXh0IHRpY2suXHJcbiAgICAgKiBXZSBuZWVkIHRvIHNjaGVkdWxlIGl0LCByYXRoZXIgdGhhbiBkbyBpdCBpbW1lZGlhdGVseSwgYmVjYXVzZSB3ZSBoYXZlIHRvIHdhaXRcclxuICAgICAqIGZvciBBbmd1bGFyIHRvIHJlLWV2YWx1YXRlIHRoZSB2aWV3IGNoaWxkcmVuLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c09uTmV4dFRpY2sgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVsbVJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHBpY2tlckludGw6IE93bERhdGVUaW1lSW50bCxcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGF0ZVRpbWVBZGFwdGVyOiBEYXRlVGltZUFkYXB0ZXI8VD4sXHJcbiAgICAgICAgQE9wdGlvbmFsKClcclxuICAgICAgICBASW5qZWN0KE9XTF9EQVRFX1RJTUVfRk9STUFUUylcclxuICAgICAgICBwcml2YXRlIGRhdGVUaW1lRm9ybWF0czogT3dsRGF0ZVRpbWVGb3JtYXRzXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmludGxDaGFuZ2VzU3ViID0gdGhpcy5waWNrZXJJbnRsLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSB0aGlzLnN0YXJ0VmlldztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVGb2N1c09uTmV4dFRpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNPbk5leHRUaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmludGxDaGFuZ2VzU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBtb250aCB2aWV3IGFuZCB5ZWFyIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRvZ2dsZVZpZXdzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPVxyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VmlldyA9PSAnbW9udGgnID8gJ211bHRpLXllYXJzJyA6ICdtb250aCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHVzZXIgY2xpY2tzIG9uIHRoZSBwcmV2aW91cyBidXR0b24uXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIHByZXZpb3VzQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHRoaXMuaXNNb250aFZpZXdcclxuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLnBpY2tlck1vbWVudCwgLTEpXHJcbiAgICAgICAgICAgIDogdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLnBpY2tlck1vbWVudCwgLTEpO1xyXG5cclxuICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KHRoaXMucGlja2VyTW9tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLlxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBuZXh0Q2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHRoaXMuaXNNb250aFZpZXdcclxuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLnBpY2tlck1vbWVudCwgMSlcclxuICAgICAgICAgICAgOiB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMucGlja2VyTW9tZW50LCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5waWNrZXJNb21lbnRDaGFuZ2UuZW1pdCh0aGlzLnBpY2tlck1vbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRhdGVTZWxlY3RlZChkYXRlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGVGaWx0ZXJGb3JWaWV3cyhkYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKCh0aGlzLmlzSW5TaW5nbGVNb2RlICYmICF0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1NhbWVEYXkoZGF0ZSwgdGhpcy5zZWxlY3RlZCkpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuaXNJblJhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdGhlIHBpY2tlck1vbWVudCB2YWx1ZSBhbmQgc3dpdGNoIHRvIGEgc3BlY2lmaWMgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ29Ub0RhdGVJblZpZXcoXHJcbiAgICAgICAgZGF0ZTogVCxcclxuICAgICAgICB2aWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXJzJ1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQaWNrZXJNb21lbnRDaGFuZ2UoZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHZpZXc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHRoZSBwaWNrZXJNb21lbnQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhbmRsZVBpY2tlck1vbWVudENoYW5nZShkYXRlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waWNrZXJNb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jbGFtcERhdGUoXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIHRoaXMubWluRGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5tYXhEYXRlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KHRoaXMucGlja2VyTW9tZW50KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZXJTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJTZWxlY3Rpb24uZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgcHJldmlvdXMgcGVyaW9kIGJ1dHRvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJldkJ1dHRvbkVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWluRGF0ZSB8fCAhdGhpcy5pc1NhbWVWaWV3KHRoaXMucGlja2VyTW9tZW50LCB0aGlzLm1pbkRhdGUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIG5leHQgcGVyaW9kIGJ1dHRvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmV4dEJ1dHRvbkVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWF4RGF0ZSB8fCAhdGhpcy5pc1NhbWVWaWV3KHRoaXMucGlja2VyTW9tZW50LCB0aGlzLm1heERhdGUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvY3VzIHRvIHRoZSBob3N0IGVsZW1lbnRcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgZm9jdXNBY3RpdmVDZWxsKCkge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGVcclxuICAgICAgICAgICAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5vd2wtZHQtY2FsZW5kYXItY2VsbC1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RZZWFySW5NdWx0aVllYXJWaWV3KG5vcm1hbGl6ZWRZZWFyOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdE1vbnRoSW5ZZWFyVmlldyhub3JtYWxpemVkTW9udGg6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vbnRoU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkTW9udGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgdHdvIGRhdGVzIHJlcHJlc2VudCB0aGUgc2FtZSB2aWV3IGluIHRoZSBjdXJyZW50IHZpZXcgbW9kZSAobW9udGggb3IgeWVhcikuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNTYW1lVmlldyhkYXRlMTogVCwgZGF0ZTI6IFQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09ICdtb250aCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhKFxyXG4gICAgICAgICAgICAgICAgZGF0ZTEgJiZcclxuICAgICAgICAgICAgICAgIGRhdGUyICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGUyKSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgoZGF0ZTEpID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoKGRhdGUyKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09ICd5ZWFyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gISEoXHJcbiAgICAgICAgICAgICAgICBkYXRlMSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZTIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZTEpID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZTIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHZhbGlkIGRhdGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VmFsaWREYXRlKG9iajogYW55KTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc0RhdGVJbnN0YW5jZShvYmopICYmXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzVmFsaWQob2JqKVxyXG4gICAgICAgICAgICA/IG9ialxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm93bC1kdC1jYWxlbmRhci1jb250cm9sXCI+XHJcbiAgICA8IS0tIGZvY3VzIHdoZW4ga2V5Ym9hcmQgdGFiIChodHRwOi8va2l6dS5ydS9lbi9ibG9nL2tleWJvYXJkLW9ubHktZm9jdXMvI3gpIC0tPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm93bC1kdC1jb250cm9sIG93bC1kdC1jb250cm9sLWJ1dHRvbiBvd2wtZHQtY29udHJvbC1hcnJvdy1idXR0b25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd0NvbnRyb2xBcnJvd3M/ICd2aXNpYmxlJzogJ2hpZGRlbidcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXByZXZCdXR0b25FbmFibGVkKClcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInByZXZCdXR0b25MYWJlbFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJwcmV2aW91c0NsaWNrZWQoKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtY29udGVudCBvd2wtZHQtY29udHJvbC1idXR0b24tY29udGVudFwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgPCEtLSA8ZWRpdG9yLWZvbGQgZGVzYz1cIlNWRyBBcnJvdyBMZWZ0XCI+IC0tPlxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNTAuNzM4IDI1MC43MzhcIlxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAuNzM4IDI1MC43Mzg7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVwiZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7XCIgZD1cIk05Ni42MzMsMTI1LjM2OWw5NS4wNTMtOTQuNTMzYzcuMTAxLTcuMDU1LDcuMTAxLTE4LjQ5MiwwLTI1LjU0NiAgIGMtNy4xLTcuMDU0LTE4LjYxMy03LjA1NC0yNS43MTQsMEw1OC45ODksMTExLjY4OWMtMy43ODQsMy43NTktNS40ODcsOC43NTktNS4yMzgsMTMuNjhjLTAuMjQ5LDQuOTIyLDEuNDU0LDkuOTIxLDUuMjM4LDEzLjY4MSAgIGwxMDYuOTgzLDEwNi4zOThjNy4xMDEsNy4wNTUsMTguNjEzLDcuMDU1LDI1LjcxNCwwYzcuMTAxLTcuMDU0LDcuMTAxLTE4LjQ5MSwwLTI1LjU0NEw5Ni42MzMsMTI1LjM2OXpcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8IS0tIDwvZWRpdG9yLWZvbGQ+IC0tPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGRpdiBjbGFzcz1cIm93bC1kdC1jYWxlbmRhci1jb250cm9sLWNvbnRlbnRcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wgb3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC1jb250cm9sLXBlcmlvZC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInBlcmlvZEJ1dHRvbkxhYmVsXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVWaWV3cygpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtY29udGVudCBvd2wtZHQtY29udHJvbC1idXR0b24tY29udGVudFwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgICAgIHt7cGVyaW9kQnV0dG9uVGV4dH19XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1idXR0b24tYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLnRyYW5zZm9ybV09XCIncm90YXRlKCcgKyAoaXNNb250aFZpZXc/IDAgOiAxODApICsnZGVnKSdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxlZGl0b3ItZm9sZCBkZXNjPVwiU1ZHIEFycm93XCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwJVwiIGhlaWdodD1cIjUwJVwiIHZpZXdCb3g9XCIwIDAgMjkyLjM2MiAyOTIuMzYyXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNjIgMjkyLjM2MjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3pcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDwvZWRpdG9yLWZvbGQ+IC0tPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJvd2wtZHQtY29udHJvbCBvd2wtZHQtY29udHJvbC1idXR0b24gb3dsLWR0LWNvbnRyb2wtYXJyb3ctYnV0dG9uXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dDb250cm9sQXJyb3dzPyAndmlzaWJsZSc6ICdoaWRkZW4nXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFuZXh0QnV0dG9uRW5hYmxlZCgpXCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJuZXh0QnV0dG9uTGFiZWxcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwibmV4dENsaWNrZWQoKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtY29udGVudCBvd2wtZHQtY29udHJvbC1idXR0b24tY29udGVudFwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgPCEtLSA8ZWRpdG9yLWZvbGQgZGVzYz1cIlNWRyBBcnJvdyBSaWdodFwiPiAtLT5cclxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUwLjczOCAyNTAuNzM4XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1MC43MzggMjUwLjczODtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtcIiBkPVwiTTE5MS43NSwxMTEuNjg5TDg0Ljc2Niw1LjI5MWMtNy4xLTcuMDU1LTE4LjYxMy03LjA1NS0yNS43MTMsMFxyXG4gICAgICAgICAgICAgICAgICAgIGMtNy4xMDEsNy4wNTQtNy4xMDEsMTguNDksMCwyNS41NDRsOTUuMDUzLDk0LjUzNGwtOTUuMDUzLDk0LjUzM2MtNy4xMDEsNy4wNTQtNy4xMDEsMTguNDkxLDAsMjUuNTQ1XHJcbiAgICAgICAgICAgICAgICAgICAgYzcuMSw3LjA1NCwxOC42MTMsNy4wNTQsMjUuNzEzLDBMMTkxLjc1LDEzOS4wNWMzLjc4NC0zLjc1OSw1LjQ4Ny04Ljc1OSw1LjIzOC0xMy42ODFcclxuICAgICAgICAgICAgICAgICAgICBDMTk3LjIzNywxMjAuNDQ3LDE5NS41MzQsMTE1LjQ0OCwxOTEuNzUsMTExLjY4OXpcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8IS0tIDwvZWRpdG9yLWZvbGQ+IC0tPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm93bC1kdC1jYWxlbmRhci1tYWluXCIgY2RrTW9uaXRvclN1YnRyZWVGb2N1cyBbbmdTd2l0Y2hdPVwiY3VycmVudFZpZXdcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICA8b3dsLWRhdGUtdGltZS1tb250aC12aWV3XHJcbiAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcclxuICAgICAgICAgICAgW3BpY2tlck1vbWVudF09XCJwaWNrZXJNb21lbnRcIlxyXG4gICAgICAgICAgICBbZmlyc3REYXlPZldlZWtdPVwiZmlyc3REYXlPZldlZWtcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRzXT1cInNlbGVjdGVkc1wiXHJcbiAgICAgICAgICAgIFtzZWxlY3RNb2RlXT1cInNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcclxuICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXHJcbiAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cImRhdGVGaWx0ZXJcIlxyXG4gICAgICAgICAgICBbaGlkZU90aGVyTW9udGhzXT1cImhpZGVPdGhlck1vbnRoc1wiXHJcbiAgICAgICAgICAgIChwaWNrZXJNb21lbnRDaGFuZ2UpPVwiaGFuZGxlUGlja2VyTW9tZW50Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiZGF0ZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAodXNlclNlbGVjdGlvbik9XCJ1c2VyU2VsZWN0ZWQoKVwiPjwvb3dsLWRhdGUtdGltZS1tb250aC12aWV3PlxyXG5cclxuICAgIDxvd2wtZGF0ZS10aW1lLXllYXItdmlld1xyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3llYXInXCJcclxuICAgICAgICAgICAgW3BpY2tlck1vbWVudF09XCJwaWNrZXJNb21lbnRcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRzXT1cInNlbGVjdGVkc1wiXHJcbiAgICAgICAgICAgIFtzZWxlY3RNb2RlXT1cInNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcclxuICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXHJcbiAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cImRhdGVGaWx0ZXJcIlxyXG4gICAgICAgICAgICAoa2V5Ym9hcmRFbnRlcik9XCJmb2N1c0FjdGl2ZUNlbGwoKVwiXHJcbiAgICAgICAgICAgIChwaWNrZXJNb21lbnRDaGFuZ2UpPVwiaGFuZGxlUGlja2VyTW9tZW50Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAobW9udGhTZWxlY3RlZCk9XCJzZWxlY3RNb250aEluWWVhclZpZXcoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwiZ29Ub0RhdGVJblZpZXcoJGV2ZW50LCAnbW9udGgnKVwiPjwvb3dsLWRhdGUtdGltZS15ZWFyLXZpZXc+XHJcblxyXG4gICAgPG93bC1kYXRlLXRpbWUtbXVsdGkteWVhci12aWV3XHJcbiAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbXVsdGkteWVhcnMnXCJcclxuICAgICAgICAgICAgW3BpY2tlck1vbWVudF09XCJwaWNrZXJNb21lbnRcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRzXT1cInNlbGVjdGVkc1wiXHJcbiAgICAgICAgICAgIFtzZWxlY3RNb2RlXT1cInNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcclxuICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXHJcbiAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cImRhdGVGaWx0ZXJcIlxyXG4gICAgICAgICAgICAoa2V5Ym9hcmRFbnRlcik9XCJmb2N1c0FjdGl2ZUNlbGwoKVwiXHJcbiAgICAgICAgICAgIChwaWNrZXJNb21lbnRDaGFuZ2UpPVwiaGFuZGxlUGlja2VyTW9tZW50Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAoeWVhclNlbGVjdGVkKT1cInNlbGVjdFllYXJJbk11bHRpWWVhclZpZXcoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwiZ29Ub0RhdGVJblZpZXcoJGV2ZW50LCAneWVhcicpXCI+PC9vd2wtZGF0ZS10aW1lLW11bHRpLXllYXItdmlldz5cclxuPC9kaXY+XHJcbiJdfQ==