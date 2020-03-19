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
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-month-view", 16);
    i0.ɵɵlistener("pickerMomentChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.handlePickerMomentChange($event); })("selectedChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.dateSelected($event); })("userSelection", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_userSelection_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.userSelected(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r0.pickerMoment)("firstDayOfWeek", ctx_r0.firstDayOfWeek)("selected", ctx_r0.selected)("selecteds", ctx_r0.selecteds)("selectMode", ctx_r0.selectMode)("minDate", ctx_r0.minDate)("maxDate", ctx_r0.maxDate)("dateFilter", ctx_r0.dateFilter)("hideOtherMonths", ctx_r0.hideOtherMonths);
} }
function OwlCalendarComponent_owl_date_time_year_view_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-year-view", 17);
    i0.ɵɵlistener("keyboardEnter", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_keyboardEnter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.focusActiveCell(); })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.handlePickerMomentChange($event); })("monthSelected", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_monthSelected_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.selectMonthInYearView($event); })("change", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_change_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.goToDateInView($event, "month"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r1.pickerMoment)("selected", ctx_r1.selected)("selecteds", ctx_r1.selecteds)("selectMode", ctx_r1.selectMode)("minDate", ctx_r1.minDate)("maxDate", ctx_r1.maxDate)("dateFilter", ctx_r1.dateFilter);
} }
function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-multi-year-view", 18);
    i0.ɵɵlistener("keyboardEnter", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_keyboardEnter_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.focusActiveCell(); })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.handlePickerMomentChange($event); })("yearSelected", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_yearSelected_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.selectYearInMultiYearView($event); })("change", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_change_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.goToDateInView($event, "year"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r2.pickerMoment)("selected", ctx_r2.selected)("selecteds", ctx_r2.selecteds)("selectMode", ctx_r2.selectMode)("minDate", ctx_r2.minDate)("maxDate", ctx_r2.maxDate)("dateFilter", ctx_r2.dateFilter);
} }
export class OwlCalendarComponent {
    constructor(elmRef, pickerIntl, ngZone, cdRef, dateTimeAdapter, dateTimeFormats) {
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
        this.dateFilterForViews = (date) => {
            return (!!date &&
                (!this.dateFilter || this.dateFilter(date)) &&
                (!this.minDate ||
                    this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
                (!this.maxDate ||
                    this.dateTimeAdapter.compare(date, this.maxDate) <= 0));
        };
        this.intlChangesSub = Subscription.EMPTY;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this.moveFocusOnNextTick = false;
        this.intlChangesSub = this.pickerIntl.changes.subscribe(() => {
            this.cdRef.markForCheck();
        });
    }
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        value = this.getValidDate(value);
        this._minDate = value
            ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value))
            : null;
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        value = this.getValidDate(value);
        this._maxDate = value
            ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value))
            : null;
    }
    get pickerMoment() {
        return this._pickerMoment;
    }
    set pickerMoment(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment =
            this.getValidDate(value) || this.dateTimeAdapter.now();
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._selected = this.getValidDate(value);
    }
    get selecteds() {
        return this._selecteds;
    }
    set selecteds(values) {
        this._selecteds = values.map(v => {
            v = this.dateTimeAdapter.deserialize(v);
            return this.getValidDate(v);
        });
    }
    get periodButtonText() {
        return this.isMonthView
            ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel)
            : this.dateTimeAdapter.getYearName(this.pickerMoment);
    }
    get periodButtonLabel() {
        return this.isMonthView
            ? this.pickerIntl.switchToMultiYearViewLabel
            : this.pickerIntl.switchToMonthViewLabel;
    }
    get prevButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.prevMonthLabel;
        }
        else if (this._currentView === 'year') {
            return this.pickerIntl.prevYearLabel;
        }
        else {
            return null;
        }
    }
    get nextButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.nextMonthLabel;
        }
        else if (this._currentView === 'year') {
            return this.pickerIntl.nextYearLabel;
        }
        else {
            return null;
        }
    }
    get currentView() {
        return this._currentView;
    }
    set currentView(view) {
        this._currentView = view;
        this.moveFocusOnNextTick = true;
    }
    get isInSingleMode() {
        return this.selectMode === 'single';
    }
    get isInRangeMode() {
        return (this.selectMode === 'range' ||
            this.selectMode === 'rangeFrom' ||
            this.selectMode === 'rangeTo');
    }
    get showControlArrows() {
        return this._currentView !== 'multi-years';
    }
    get isMonthView() {
        return this._currentView === 'month';
    }
    /**
     * Bind class 'owl-dt-calendar' to host
     * */
    get owlDTCalendarClass() {
        return true;
    }
    ngOnInit() { }
    ngAfterContentInit() {
        this._currentView = this.startView;
    }
    ngAfterViewChecked() {
        if (this.moveFocusOnNextTick) {
            this.moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    ngOnDestroy() {
        this.intlChangesSub.unsubscribe();
    }
    /**
     * Toggle between month view and year view
     */
    toggleViews() {
        this.currentView =
            this._currentView == 'month' ? 'multi-years' : 'month';
    }
    /**
     * Handles user clicks on the previous button.
     * */
    previousClicked() {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
        this.pickerMomentChange.emit(this.pickerMoment);
    }
    /**
     * Handles user clicks on the next button.
     * */
    nextClicked() {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
        this.pickerMomentChange.emit(this.pickerMoment);
    }
    dateSelected(date) {
        if (!this.dateFilterForViews(date)) {
            return;
        }
        this.selectedChange.emit(date);
        /*if ((this.isInSingleMode && !this.dateTimeAdapter.isSameDay(date, this.selected)) ||
            this.isInRangeMode) {
            this.selectedChange.emit(date);
        }*/
    }
    /**
     * Change the pickerMoment value and switch to a specific view
     */
    goToDateInView(date, view) {
        this.handlePickerMomentChange(date);
        this.currentView = view;
        return;
    }
    /**
     * Change the pickerMoment value
     */
    handlePickerMomentChange(date) {
        this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
        this.pickerMomentChange.emit(this.pickerMoment);
        return;
    }
    userSelected() {
        this.userSelection.emit();
    }
    /**
     * Whether the previous period button is enabled.
     */
    prevButtonEnabled() {
        return (!this.minDate || !this.isSameView(this.pickerMoment, this.minDate));
    }
    /**
     * Whether the next period button is enabled.
     */
    nextButtonEnabled() {
        return (!this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate));
    }
    /**
     * Focus to the host element
     * */
    focusActiveCell() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(() => {
                this.elmRef.nativeElement
                    .querySelector('.owl-dt-calendar-cell-active')
                    .focus();
            });
        });
    }
    selectYearInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    selectMonthInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     */
    isSameView(date1, date2) {
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
    }
    /**
     * Get a valid date object
     */
    getValidDate(obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibGliL2RhdGUtdGltZS9jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFHSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQ0gscUJBQXFCLEVBRXhCLE1BQU0sa0NBQWtDLENBQUM7QUFFMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0lDb0NoQyxvREFhb0U7SUFGNUQsb1JBQXVELG1QQUFBLHFPQUFBO0lBRXRCLGlCQUEyQjs7O0lBWDVELGtEQUE2Qix5Q0FBQSw2QkFBQSwrQkFBQSxpQ0FBQSwyQkFBQSwyQkFBQSxpQ0FBQSwyQ0FBQTs7OztJQWFyQyxtREFZNkU7SUFIckUsbVBBQW1DLHFRQUFBLDBQQUFBLGtPQUdGLE9BQU8sS0FITDtJQUdRLGlCQUEwQjs7O0lBVnJFLGtEQUE2Qiw2QkFBQSwrQkFBQSxpQ0FBQSwyQkFBQSwyQkFBQSxpQ0FBQTs7OztJQVlyQyx5REFZa0Y7SUFIMUUsa1FBQW1DLG9SQUFBLHlRQUFBLCtPQUdGLE1BQU0sS0FISjtJQUdPLGlCQUFnQzs7O0lBVjFFLGtEQUE2Qiw2QkFBQSwrQkFBQSxp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TSxlQUE4RDtRQUE5RCw2RUFBOEQ7UUFrQnhFLGVBQTJEO1FBQTNELDBFQUEyRDtRQUMzRCxtREFBaUM7UUFDakMsaURBQW1DO1FBZVUsZUFBd0I7UUFBeEIsMENBQXdCO1FBRXJFLGVBQXVCO1FBQXZCLHNDQUF1QjtRQWV2QixlQUFzQjtRQUF0QixxQ0FBc0I7UUFjdEIsZUFBNkI7UUFBN0IsNENBQTZCOztrRERyRDVCLG9CQUFvQjtjQVhoQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLElBQUksRUFBRTtvQkFDRix5QkFBeUIsRUFBRSxvQkFBb0I7aUJBQ2xEO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOztzQkF3T1EsUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyxxQkFBcUI7O2tCQXBPaEMsS0FBSzs7a0JBTUwsS0FBSzs7a0JBS0wsS0FBSzs7a0JBb0JMLEtBQUs7O2tCQW9CTCxLQUFLOztrQkFXTCxLQUFLOztrQkFLTCxLQUFLOztrQkFXTCxLQUFLOztrQkFlTCxLQUFLOztrQkFNTCxLQUFLOztrQkFJTCxNQUFNOztrQkFJTixNQUFNOztrQkFJTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGNhbGVuZGFyLmNvbXBvbmVudFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5qZWN0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBPbkluaXQsXHJcbiAgICBPcHRpb25hbCxcclxuICAgIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZUludGwgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItaW50bC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcclxuaW1wb3J0IHtcclxuICAgIE9XTF9EQVRFX1RJTUVfRk9STUFUUyxcclxuICAgIE93bERhdGVUaW1lRm9ybWF0c1xyXG59IGZyb20gJy4vYWRhcHRlci9kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcclxuaW1wb3J0IHsgU2VsZWN0TW9kZSB9IGZyb20gJy4vZGF0ZS10aW1lLmNsYXNzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb3dsLWRhdGUtdGltZS1jYWxlbmRhcicsXHJcbiAgICBleHBvcnRBczogJ293bERhdGVUaW1lQ2FsZW5kYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtY2FsZW5kYXJdJzogJ293bERUQ2FsZW5kYXJDbGFzcydcclxuICAgIH0sXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xDYWxlbmRhckNvbXBvbmVudDxUPlxyXG4gICAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcbiAgICAvKipcclxuICAgICAqIERhdGUgZmlsdGVyIGZvciB0aGUgbW9udGggYW5kIHllYXIgdmlld1xyXG4gICAgICogKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBkYXRlRmlsdGVyOiBGdW5jdGlvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGZpcnN0RGF5T2ZXZWVrID0gMDtcclxuXHJcbiAgICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gICAgcHJpdmF0ZSBfbWluRGF0ZTogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbkRhdGUoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtaW5EYXRlKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9taW5EYXRlID0gdmFsdWVcclxuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5jcmVhdGVEYXRlKFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgICBwcml2YXRlIF9tYXhEYXRlOiBUIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4RGF0ZSgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1heERhdGUodmFsdWU6IFQgfCBudWxsKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX21heERhdGUgPSB2YWx1ZVxyXG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNyZWF0ZURhdGUoXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBjdXJyZW50IHBpY2tlciBtb21lbnQgKi9cclxuICAgIHByaXZhdGUgX3BpY2tlck1vbWVudDogVDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGlja2VyTW9tZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waWNrZXJNb21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBpY2tlck1vbWVudCh2YWx1ZTogVCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3BpY2tlck1vbWVudCA9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKSB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2VsZWN0TW9kZTogU2VsZWN0TW9kZTtcclxuXHJcbiAgICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBtb21lbnQuICovXHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkczogVFtdID0gW107XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNlbGVjdGVkcygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNlbGVjdGVkcyh2YWx1ZXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkcyA9IHZhbHVlcy5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgIHYgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWREYXRlKHYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZpZXcgdGhhdCB0aGUgY2FsZW5kYXIgc2hvdWxkIHN0YXJ0IGluLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc3RhcnRWaWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXJzJyA9ICdtb250aCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIGhpZGUgZGF0ZXMgaW4gb3RoZXIgbW9udGhzIGF0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGN1cnJlbnQgbW9udGguXHJcbiAgICAgKiAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGhpZGVPdGhlck1vbnRoczogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgY3VycmVudGx5IHBpY2tlciBtb21lbnQgY2hhbmdlcy4gKi9cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcGlja2VyTW9tZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG5cclxuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLiAqL1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICAvKiogRW1pdHMgd2hlbiBhbnkgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyLiBUaGlzIGRvZXNuJ3QgaW1wbHkgYSBjaGFuZ2Ugb24gdGhlIHNlbGVjdGVkIGRhdGVcclxuICAgICAqICovXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IHllYXJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXRzIHRoZSBzZWxlY3RlZCBtb250aC4gVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlXHJcbiAgICAgKiAqL1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBtb250aFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG5cclxuICAgIGdldCBwZXJpb2RCdXR0b25UZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb250aFZpZXdcclxuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lRm9ybWF0cy5tb250aFllYXJMYWJlbFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLnBpY2tlck1vbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBlcmlvZEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb250aFZpZXdcclxuICAgICAgICAgICAgPyB0aGlzLnBpY2tlckludGwuc3dpdGNoVG9NdWx0aVllYXJWaWV3TGFiZWxcclxuICAgICAgICAgICAgOiB0aGlzLnBpY2tlckludGwuc3dpdGNoVG9Nb250aFZpZXdMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJldkJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRWaWV3ID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwucHJldk1vbnRoTGFiZWw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ3llYXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwucHJldlllYXJMYWJlbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5leHRCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLm5leHRNb250aExhYmVsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09ICd5ZWFyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLm5leHRZZWFyTGFiZWw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRWaWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXJzJztcclxuICAgIGdldCBjdXJyZW50VmlldygpOiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXJzJyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjdXJyZW50Vmlldyh2aWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXJzJykge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLm1vdmVGb2N1c09uTmV4dFRpY2sgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0luU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RNb2RlID09PSAnc2luZ2xlJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJblJhbmdlTW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZScgfHxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2VGcm9tJyB8fFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dDb250cm9sQXJyb3dzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyAhPT0gJ211bHRpLXllYXJzJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNNb250aFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSAnbW9udGgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGF0ZSBmaWx0ZXIgZm9yIHRoZSBtb250aCBhbmQgeWVhciB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkYXRlRmlsdGVyRm9yVmlld3MgPSAoZGF0ZTogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICEhZGF0ZSAmJlxyXG4gICAgICAgICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpICYmXHJcbiAgICAgICAgICAgICghdGhpcy5taW5EYXRlIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgICAgICAgKCF0aGlzLm1heERhdGUgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZCBjbGFzcyAnb3dsLWR0LWNhbGVuZGFyJyB0byBob3N0XHJcbiAgICAgKiAqL1xyXG4gICAgZ2V0IG93bERUQ2FsZW5kYXJDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludGxDaGFuZ2VzU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBmb3Igc2NoZWR1bGluZyB0aGF0IGZvY3VzIHNob3VsZCBiZSBtb3ZlZCB0byB0aGUgYWN0aXZlIGNlbGwgb24gdGhlIG5leHQgdGljay5cclxuICAgICAqIFdlIG5lZWQgdG8gc2NoZWR1bGUgaXQsIHJhdGhlciB0aGFuIGRvIGl0IGltbWVkaWF0ZWx5LCBiZWNhdXNlIHdlIGhhdmUgdG8gd2FpdFxyXG4gICAgICogZm9yIEFuZ3VsYXIgdG8gcmUtZXZhbHVhdGUgdGhlIHZpZXcgY2hpbGRyZW4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzT25OZXh0VGljayA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxtUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcGlja2VySW50bDogT3dsRGF0ZVRpbWVJbnRsLFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkYXRlVGltZUFkYXB0ZXI6IERhdGVUaW1lQWRhcHRlcjxUPixcclxuICAgICAgICBAT3B0aW9uYWwoKVxyXG4gICAgICAgIEBJbmplY3QoT1dMX0RBVEVfVElNRV9GT1JNQVRTKVxyXG4gICAgICAgIHByaXZhdGUgZGF0ZVRpbWVGb3JtYXRzOiBPd2xEYXRlVGltZUZvcm1hdHNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaW50bENoYW5nZXNTdWIgPSB0aGlzLnBpY2tlckludGwuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VmlldyA9IHRoaXMuc3RhcnRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZUZvY3VzT25OZXh0VGljaykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c09uTmV4dFRpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c0FjdGl2ZUNlbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW50bENoYW5nZXNTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSBiZXR3ZWVuIG1vbnRoIHZpZXcgYW5kIHllYXIgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdG9nZ2xlVmlld3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID09ICdtb250aCcgPyAnbXVsdGkteWVhcnMnIDogJ21vbnRoJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIHByZXZpb3VzIGJ1dHRvbi5cclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgcHJldmlvdXNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gdGhpcy5pc01vbnRoVmlld1xyXG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMucGlja2VyTW9tZW50LCAtMSlcclxuICAgICAgICAgICAgOiB0aGlzLmRhdGVUaW1lQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMucGlja2VyTW9tZW50LCAtMSk7XHJcblxyXG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQodGhpcy5waWNrZXJNb21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB1c2VyIGNsaWNrcyBvbiB0aGUgbmV4dCBidXR0b24uXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIG5leHRDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gdGhpcy5pc01vbnRoVmlld1xyXG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMucGlja2VyTW9tZW50LCAxKVxyXG4gICAgICAgICAgICA6IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5waWNrZXJNb21lbnQsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLnBpY2tlck1vbWVudENoYW5nZS5lbWl0KHRoaXMucGlja2VyTW9tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGF0ZVNlbGVjdGVkKGRhdGU6IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0ZUZpbHRlckZvclZpZXdzKGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChkYXRlKTtcclxuXHJcbiAgICAgICAgLyppZiAoKHRoaXMuaXNJblNpbmdsZU1vZGUgJiYgIXRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzU2FtZURheShkYXRlLCB0aGlzLnNlbGVjdGVkKSkgfHxcclxuICAgICAgICAgICAgdGhpcy5pc0luUmFuZ2VNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChkYXRlKTtcclxuICAgICAgICB9Ki9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSB0aGUgcGlja2VyTW9tZW50IHZhbHVlIGFuZCBzd2l0Y2ggdG8gYSBzcGVjaWZpYyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnb1RvRGF0ZUluVmlldyhcclxuICAgICAgICBkYXRlOiBULFxyXG4gICAgICAgIHZpZXc6ICdtb250aCcgfCAneWVhcicgfCAnbXVsdGkteWVhcnMnXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVBpY2tlck1vbWVudENoYW5nZShkYXRlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdmlldztcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdGhlIHBpY2tlck1vbWVudCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlUGlja2VyTW9tZW50Q2hhbmdlKGRhdGU6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNsYW1wRGF0ZShcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5taW5EYXRlLFxyXG4gICAgICAgICAgICB0aGlzLm1heERhdGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQodGhpcy5waWNrZXJNb21lbnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlclNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXNlclNlbGVjdGlvbi5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBwcmV2aW91cyBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwcmV2QnV0dG9uRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5taW5EYXRlIHx8ICF0aGlzLmlzU2FtZVZpZXcodGhpcy5waWNrZXJNb21lbnQsIHRoaXMubWluRGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgbmV4dCBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuZXh0QnV0dG9uRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5tYXhEYXRlIHx8ICF0aGlzLmlzU2FtZVZpZXcodGhpcy5waWNrZXJNb21lbnQsIHRoaXMubWF4RGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9jdXMgdG8gdGhlIGhvc3QgZWxlbWVudFxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBmb2N1c0FjdGl2ZUNlbGwoKSB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZVxyXG4gICAgICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm93bC1kdC1jYWxlbmRhci1jZWxsLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdFllYXJJbk11bHRpWWVhclZpZXcobm9ybWFsaXplZFllYXI6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnllYXJTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRZZWFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0TW9udGhJblllYXJWaWV3KG5vcm1hbGl6ZWRNb250aDogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9udGhTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRNb250aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSB0d28gZGF0ZXMgcmVwcmVzZW50IHRoZSBzYW1lIHZpZXcgaW4gdGhlIGN1cnJlbnQgdmlldyBtb2RlIChtb250aCBvciB5ZWFyKS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1NhbWVWaWV3KGRhdGUxOiBULCBkYXRlMjogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gISEoXHJcbiAgICAgICAgICAgICAgICBkYXRlMSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZTIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZTEpID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZTIpICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aChkYXRlMSkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgoZGF0ZTIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ3llYXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIShcclxuICAgICAgICAgICAgICAgIGRhdGUxICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlMiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcihkYXRlMSkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcihkYXRlMilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgdmFsaWQgZGF0ZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRWYWxpZERhdGUob2JqOiBhbnkpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiZcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNWYWxpZChvYmopXHJcbiAgICAgICAgICAgID8gb2JqXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwib3dsLWR0LWNhbGVuZGFyLWNvbnRyb2xcIj5cclxuICAgIDwhLS0gZm9jdXMgd2hlbiBrZXlib2FyZCB0YWIgKGh0dHA6Ly9raXp1LnJ1L2VuL2Jsb2cva2V5Ym9hcmQtb25seS1mb2N1cy8jeCkgLS0+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wgb3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC1jb250cm9sLWFycm93LWJ1dHRvblwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJzaG93Q29udHJvbEFycm93cz8gJ3Zpc2libGUnOiAnaGlkZGVuJ1wiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhcHJldkJ1dHRvbkVuYWJsZWQoKVwiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwicHJldkJ1dHRvbkxhYmVsXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1jb250ZW50IG93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICA8IS0tIDxlZGl0b3ItZm9sZCBkZXNjPVwiU1ZHIEFycm93IExlZnRcIj4gLS0+XHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI1MC43MzggMjUwLjczOFwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1MC43MzggMjUwLjczODtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbiAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDtcIiBkPVwiTTk2LjYzMywxMjUuMzY5bDk1LjA1My05NC41MzNjNy4xMDEtNy4wNTUsNy4xMDEtMTguNDkyLDAtMjUuNTQ2ICAgYy03LjEtNy4wNTQtMTguNjEzLTcuMDU0LTI1LjcxNCwwTDU4Ljk4OSwxMTEuNjg5Yy0zLjc4NCwzLjc1OS01LjQ4Nyw4Ljc1OS01LjIzOCwxMy42OGMtMC4yNDksNC45MjIsMS40NTQsOS45MjEsNS4yMzgsMTMuNjgxICAgbDEwNi45ODMsMTA2LjM5OGM3LjEwMSw3LjA1NSwxOC42MTMsNy4wNTUsMjUuNzE0LDBjNy4xMDEtNy4wNTQsNy4xMDEtMTguNDkxLDAtMjUuNTQ0TDk2LjYzMywxMjUuMzY5elwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwhLS0gPC9lZGl0b3ItZm9sZD4gLS0+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3dsLWR0LWNhbGVuZGFyLWNvbnRyb2wtY29udGVudFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJvd2wtZHQtY29udHJvbCBvd2wtZHQtY29udHJvbC1idXR0b24gb3dsLWR0LWNvbnRyb2wtcGVyaW9kLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwicGVyaW9kQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVZpZXdzKClcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1jb250ZW50IG93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgICAge3twZXJpb2RCdXR0b25UZXh0fX1cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbi1hcnJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUudHJhbnNmb3JtXT1cIidyb3RhdGUoJyArIChpc01vbnRoVmlldz8gMCA6IDE4MCkgKydkZWcpJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGVkaXRvci1mb2xkIGRlc2M9XCJTVkcgQXJyb3dcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAlXCIgaGVpZ2h0PVwiNTAlXCIgdmlld0JveD1cIjAgMCAyOTIuMzYyIDI5Mi4zNjJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjg2LjkzNSw2OS4zNzdjLTMuNjE0LTMuNjE3LTcuODk4LTUuNDI0LTEyLjg0OC01LjQyNEgxOC4yNzRjLTQuOTUyLDAtOS4yMzMsMS44MDctMTIuODUsNS40MjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDMS44MDcsNzIuOTk4LDAsNzcuMjc5LDAsODIuMjI4YzAsNC45NDgsMS44MDcsOS4yMjksNS40MjQsMTIuODQ3bDEyNy45MDcsMTI3LjkwN2MzLjYyMSwzLjYxNyw3LjkwMiw1LjQyOCwxMi44NSw1LjQyOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHM5LjIzMy0xLjgxMSwxMi44NDctNS40MjhMMjg2LjkzNSw5NS4wNzRjMy42MTMtMy42MTcsNS40MjctNy44OTgsNS40MjctMTIuODQ3QzI5Mi4zNjIsNzcuMjc5LDI5MC41NDgsNzIuOTk4LDI4Ni45MzUsNjkuMzc3elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPC9lZGl0b3ItZm9sZD4gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm93bC1kdC1jb250cm9sIG93bC1kdC1jb250cm9sLWJ1dHRvbiBvd2wtZHQtY29udHJvbC1hcnJvdy1idXR0b25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd0NvbnRyb2xBcnJvd3M/ICd2aXNpYmxlJzogJ2hpZGRlbidcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiIW5leHRCdXR0b25FbmFibGVkKClcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIm5leHRCdXR0b25MYWJlbFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJuZXh0Q2xpY2tlZCgpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1jb250ZW50IG93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICA8IS0tIDxlZGl0b3ItZm9sZCBkZXNjPVwiU1ZHIEFycm93IFJpZ2h0XCI+IC0tPlxyXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTAuNzM4IDI1MC43MzhcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwLjczOCAyNTAuNzM4O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO1wiIGQ9XCJNMTkxLjc1LDExMS42ODlMODQuNzY2LDUuMjkxYy03LjEtNy4wNTUtMTguNjEzLTcuMDU1LTI1LjcxMywwXHJcbiAgICAgICAgICAgICAgICAgICAgYy03LjEwMSw3LjA1NC03LjEwMSwxOC40OSwwLDI1LjU0NGw5NS4wNTMsOTQuNTM0bC05NS4wNTMsOTQuNTMzYy03LjEwMSw3LjA1NC03LjEwMSwxOC40OTEsMCwyNS41NDVcclxuICAgICAgICAgICAgICAgICAgICBjNy4xLDcuMDU0LDE4LjYxMyw3LjA1NCwyNS43MTMsMEwxOTEuNzUsMTM5LjA1YzMuNzg0LTMuNzU5LDUuNDg3LTguNzU5LDUuMjM4LTEzLjY4MVxyXG4gICAgICAgICAgICAgICAgICAgIEMxOTcuMjM3LDEyMC40NDcsMTk1LjUzNCwxMTUuNDQ4LDE5MS43NSwxMTEuNjg5elwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwhLS0gPC9lZGl0b3ItZm9sZD4gLS0+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwib3dsLWR0LWNhbGVuZGFyLW1haW5cIiBjZGtNb25pdG9yU3VidHJlZUZvY3VzIFtuZ1N3aXRjaF09XCJjdXJyZW50Vmlld1wiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgIDxvd2wtZGF0ZS10aW1lLW1vbnRoLXZpZXdcclxuICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIlxyXG4gICAgICAgICAgICBbcGlja2VyTW9tZW50XT1cInBpY2tlck1vbWVudFwiXHJcbiAgICAgICAgICAgIFtmaXJzdERheU9mV2Vla109XCJmaXJzdERheU9mV2Vla1wiXHJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgIFtzZWxlY3RlZHNdPVwic2VsZWN0ZWRzXCJcclxuICAgICAgICAgICAgW3NlbGVjdE1vZGVdPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcclxuICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiZGF0ZUZpbHRlclwiXHJcbiAgICAgICAgICAgIFtoaWRlT3RoZXJNb250aHNdPVwiaGlkZU90aGVyTW9udGhzXCJcclxuICAgICAgICAgICAgKHBpY2tlck1vbWVudENoYW5nZSk9XCJoYW5kbGVQaWNrZXJNb21lbnRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJkYXRlU2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICh1c2VyU2VsZWN0aW9uKT1cInVzZXJTZWxlY3RlZCgpXCI+PC9vd2wtZGF0ZS10aW1lLW1vbnRoLXZpZXc+XHJcblxyXG4gICAgPG93bC1kYXRlLXRpbWUteWVhci12aWV3XHJcbiAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIneWVhcidcIlxyXG4gICAgICAgICAgICBbcGlja2VyTW9tZW50XT1cInBpY2tlck1vbWVudFwiXHJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgIFtzZWxlY3RlZHNdPVwic2VsZWN0ZWRzXCJcclxuICAgICAgICAgICAgW3NlbGVjdE1vZGVdPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcclxuICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiZGF0ZUZpbHRlclwiXHJcbiAgICAgICAgICAgIChrZXlib2FyZEVudGVyKT1cImZvY3VzQWN0aXZlQ2VsbCgpXCJcclxuICAgICAgICAgICAgKHBpY2tlck1vbWVudENoYW5nZSk9XCJoYW5kbGVQaWNrZXJNb21lbnRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChtb250aFNlbGVjdGVkKT1cInNlbGVjdE1vbnRoSW5ZZWFyVmlldygkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJnb1RvRGF0ZUluVmlldygkZXZlbnQsICdtb250aCcpXCI+PC9vd2wtZGF0ZS10aW1lLXllYXItdmlldz5cclxuXHJcbiAgICA8b3dsLWRhdGUtdGltZS1tdWx0aS15ZWFyLXZpZXdcclxuICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidtdWx0aS15ZWFycydcIlxyXG4gICAgICAgICAgICBbcGlja2VyTW9tZW50XT1cInBpY2tlck1vbWVudFwiXHJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgIFtzZWxlY3RlZHNdPVwic2VsZWN0ZWRzXCJcclxuICAgICAgICAgICAgW3NlbGVjdE1vZGVdPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcclxuICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiZGF0ZUZpbHRlclwiXHJcbiAgICAgICAgICAgIChrZXlib2FyZEVudGVyKT1cImZvY3VzQWN0aXZlQ2VsbCgpXCJcclxuICAgICAgICAgICAgKHBpY2tlck1vbWVudENoYW5nZSk9XCJoYW5kbGVQaWNrZXJNb21lbnRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICh5ZWFyU2VsZWN0ZWQpPVwic2VsZWN0WWVhckluTXVsdGlZZWFyVmlldygkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJnb1RvRGF0ZUluVmlldygkZXZlbnQsICd5ZWFyJylcIj48L293bC1kYXRlLXRpbWUtbXVsdGkteWVhci12aWV3PlxyXG48L2Rpdj5cclxuIl19