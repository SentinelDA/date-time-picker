/**
 * date-time-picker-container.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Optional, ViewChild } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { OwlCalendarComponent } from './calendar.component';
import { OwlTimerComponent } from './timer.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { Subject } from 'rxjs';
import { owlDateTimePickerAnimations } from './date-time-picker.animations';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "./date-time-picker-intl.service";
import * as i2 from "./adapter/date-time-adapter.class";
import * as i3 from "@angular/cdk/a11y";
import * as i4 from "@angular/common";
import * as i5 from "./calendar.component";
import * as i6 from "./timer.component";
function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-calendar", 5);
    i0.ɵɵlistener("pickerMomentChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.pickerMoment = $event; })("yearSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_yearSelected_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.picker.selectYear($event); })("monthSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_monthSelected_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.picker.selectMonth($event); })("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.dateSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵproperty("firstDayOfWeek", ctx_r24.picker.firstDayOfWeek)("pickerMoment", ctx_r24.pickerMoment)("selected", ctx_r24.picker.selected)("selecteds", ctx_r24.picker.selecteds)("selectMode", ctx_r24.picker.selectMode)("minDate", ctx_r24.picker.minDateTime)("maxDate", ctx_r24.picker.maxDateTime)("dateFilter", ctx_r24.picker.dateTimeFilter)("startView", ctx_r24.picker.startView)("hideOtherMonths", ctx_r24.picker.hideOtherMonths);
} }
function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-timer", 6);
    i0.ɵɵlistener("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template_owl_date_time_timer_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.timeSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r25.pickerMoment)("minDateTime", ctx_r25.picker.minDateTime)("maxDateTime", ctx_r25.picker.maxDateTime)("showSecondsTimer", ctx_r25.picker.showSecondsTimer)("hour12Timer", ctx_r25.picker.hour12Timer)("stepHour", ctx_r25.picker.stepHour)("stepMinute", ctx_r25.picker.stepMinute)("stepSecond", ctx_r25.picker.stepSecond);
} }
const _c0 = function (a0) { return { "owl-dt-container-info-active": a0 }; };
function OwlDateTimeContainerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8, 9);
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.handleClickOnInfoGroup($event, 0); })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r38); const _r36 = i0.ɵɵreference(9); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.handleKeydownOnInfoGroup($event, _r36, 0); });
    i0.ɵɵelementStart(3, "span", 10);
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 12);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13, 14);
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_8_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.handleClickOnInfoGroup($event, 1); })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_8_listener($event) { i0.ɵɵrestoreView(_r38); const _r35 = i0.ɵɵreference(2); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.handleKeydownOnInfoGroup($event, _r35, 1); });
    i0.ɵɵelementStart(10, "span", 10);
    i0.ɵɵelementStart(11, "span", 11);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 12);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tabindex", ctx_r26.activeSelectedIndex === 0 ? 0 : 0 - 1)("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx_r26.activeSelectedIndex === 0));
    i0.ɵɵattribute("aria-checked", ctx_r26.activeSelectedIndex === 0);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r26.fromLabel, ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r26.fromFormattedValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tabindex", ctx_r26.activeSelectedIndex === 1 ? 0 : 0 - 1)("ngClass", i0.ɵɵpureFunction1(12, _c0, ctx_r26.activeSelectedIndex === 1));
    i0.ɵɵattribute("aria-checked", ctx_r26.activeSelectedIndex === 1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r26.toLabel, ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r26.toFormattedValue);
} }
function OwlDateTimeContainerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onCancelClicked($event); });
    i0.ɵɵelementStart(2, "span", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 16);
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onSetClicked($event); });
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.cancelLabel, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.setLabel, " ");
} }
export class OwlDateTimeContainerComponent {
    constructor(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this.activeSelectedIndex = 0; // The current active SelectedIndex in range select mode (0: 'from', 1: 'to')
        /**
         * Stream emits when try to hide picker
         * */
        this.hidePicker$ = new Subject();
        /**
         * Stream emits when try to confirm the selected value
         * */
        this.confirmSelected$ = new Subject();
        this.pickerOpened$ = new Subject();
    }
    get hidePickerStream() {
        return this.hidePicker$.asObservable();
    }
    get confirmSelectedStream() {
        return this.confirmSelected$.asObservable();
    }
    get pickerOpenedStream() {
        return this.pickerOpened$.asObservable();
    }
    get pickerMoment() {
        return this._clamPickerMoment;
    }
    set pickerMoment(value) {
        if (value) {
            this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
        }
        this.cdRef.markForCheck();
    }
    get pickerType() {
        return this.picker.pickerType;
    }
    get cancelLabel() {
        return this.pickerIntl.cancelBtnLabel;
    }
    get setLabel() {
        return this.pickerIntl.setBtnLabel;
    }
    /**
     * The range 'from' label
     * */
    get fromLabel() {
        return this.pickerIntl.rangeFromLabel;
    }
    /**
     * The range 'to' label
     * */
    get toLabel() {
        return this.pickerIntl.rangeToLabel;
    }
    /**
     * The range 'from' formatted value
     * */
    get fromFormattedValue() {
        const value = this.picker.selecteds[0];
        return value
            ? this.dateTimeAdapter.format(value, this.picker.formatString)
            : '';
    }
    /**
     * The range 'to' formatted value
     * */
    get toFormattedValue() {
        const value = this.picker.selecteds[1];
        return value
            ? this.dateTimeAdapter.format(value, this.picker.formatString)
            : '';
    }
    /**
     * Cases in which the control buttons show in the picker
     * 1) picker mode is 'dialog'
     * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
     * */
    get showControlButtons() {
        return (this.picker.pickerMode === 'dialog' ||
            (this.picker.pickerType !== 'calendar' &&
                this.picker.pickerMode !== 'inline'));
    }
    get containerElm() {
        return this.elmRef.nativeElement;
    }
    get owlDTContainerClass() {
        return true;
    }
    get owlDTPopupContainerClass() {
        return this.picker.pickerMode === 'popup';
    }
    get owlDTDialogContainerClass() {
        return this.picker.pickerMode === 'dialog';
    }
    get owlDTInlineContainerClass() {
        return this.picker.pickerMode === 'inline';
    }
    get owlDTContainerDisabledClass() {
        return this.picker.disabled;
    }
    get owlDTContainerId() {
        return this.picker.id;
    }
    get owlDTContainerAnimation() {
        return this.picker.pickerMode === 'inline' ? '' : 'enter';
    }
    ngOnInit() { }
    ngAfterContentInit() {
        this.initPicker();
    }
    ngAfterViewInit() {
        this.focusPicker();
    }
    handleContainerAnimationDone(event) {
        const toState = event.toState;
        if (toState === 'enter') {
            this.pickerOpened$.next();
        }
    }
    dateSelected(date) {
        let result;
        if (this.picker.isInSingleMode) {
            result = this.dateSelectedInSingleMode(date);
            if (result) {
                this.pickerMoment = result;
                this.picker.select(result);
            }
            else {
                // we close the picker when result is null and pickerType is calendar.
                if (this.pickerType === 'calendar') {
                    this.hidePicker$.next(null);
                }
            }
            return;
        }
        if (this.picker.isInRangeMode) {
            result = this.dateSelectedInRangeMode(date);
            if (result) {
                this.pickerMoment = result[this.activeSelectedIndex];
                this.picker.select(result);
            }
        }
    }
    timeSelected(time) {
        this.pickerMoment = this.dateTimeAdapter.clone(time);
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            return;
        }
        if (this.picker.isInSingleMode) {
            this.picker.select(this.pickerMoment);
            return;
        }
        if (this.picker.isInRangeMode) {
            const selecteds = [...this.picker.selecteds];
            // check if the 'from' is after 'to' or 'to'is before 'from'
            // In this case, we set both the 'from' and 'to' the same value
            if ((this.activeSelectedIndex === 0 &&
                selecteds[1] &&
                this.dateTimeAdapter.compare(this.pickerMoment, selecteds[1]) === 1) ||
                (this.activeSelectedIndex === 1 &&
                    selecteds[0] &&
                    this.dateTimeAdapter.compare(this.pickerMoment, selecteds[0]) === -1)) {
                selecteds[0] = this.pickerMoment;
                selecteds[1] = this.pickerMoment;
            }
            else {
                selecteds[this.activeSelectedIndex] = this.pickerMoment;
            }
            this.picker.select(selecteds);
        }
    }
    /**
     * Handle click on cancel button
     */
    onCancelClicked(event) {
        this.hidePicker$.next(null);
        event.preventDefault();
        return;
    }
    /**
     * Handle click on set button
     */
    onSetClicked(event) {
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            this.hidePicker$.next(null);
            event.preventDefault();
            return;
        }
        this.confirmSelected$.next(event);
        event.preventDefault();
        return;
    }
    /**
     * Handle click on inform radio group
     */
    handleClickOnInfoGroup(event, index) {
        this.setActiveSelectedIndex(index);
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * Handle click on inform radio group
     */
    handleKeydownOnInfoGroup(event, next, index) {
        switch (event.keyCode) {
            case DOWN_ARROW:
            case RIGHT_ARROW:
            case UP_ARROW:
            case LEFT_ARROW:
                next.focus();
                this.setActiveSelectedIndex(index === 0 ? 1 : 0);
                event.preventDefault();
                event.stopPropagation();
                break;
            case SPACE:
                this.setActiveSelectedIndex(index);
                event.preventDefault();
                event.stopPropagation();
                break;
            default:
                return;
        }
    }
    /**
     * Set the value of activeSelectedIndex
     */
    setActiveSelectedIndex(index) {
        if (this.picker.selectMode === 'range' &&
            this.activeSelectedIndex !== index) {
            this.activeSelectedIndex = index;
            const selected = this.picker.selecteds[this.activeSelectedIndex];
            if (this.picker.selecteds && selected) {
                this.pickerMoment = this.dateTimeAdapter.clone(selected);
            }
        }
        return;
    }
    initPicker() {
        this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
        this.activeSelectedIndex = this.picker.selectMode === 'rangeTo' ? 1 : 0;
    }
    /**
     * Select calendar date in single mode,
     * it returns null when date is not selected.
     */
    dateSelectedInSingleMode(date) {
        if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
            return null;
        }
        return this.updateAndCheckCalendarDate(date);
    }
    /**
     * Select dates in range Mode
     */
    dateSelectedInRangeMode(date) {
        let from = this.picker.selecteds[0];
        let to = this.picker.selecteds[1];
        const result = this.updateAndCheckCalendarDate(date);
        if (!result) {
            return null;
        }
        // if the given calendar day is after or equal to 'from',
        // set ths given date as 'to'
        // otherwise, set it as 'from' and set 'to' to null
        if (this.picker.selectMode === 'range') {
            if (this.picker.selecteds &&
                this.picker.selecteds.length &&
                !to &&
                from &&
                this.dateTimeAdapter.differenceInCalendarDays(result, from) >= 0) {
                to = result;
                this.activeSelectedIndex = 1;
            }
            else {
                from = result;
                to = null;
                this.activeSelectedIndex = 0;
            }
        }
        else if (this.picker.selectMode === 'rangeFrom') {
            from = result;
            // if the from value is after the to value, set the to value as null
            if (to && this.dateTimeAdapter.compare(from, to) > 0) {
                to = null;
            }
        }
        else if (this.picker.selectMode === 'rangeTo') {
            to = result;
            // if the from value is after the to value, set the from value as null
            if (from && this.dateTimeAdapter.compare(from, to) > 0) {
                from = null;
            }
        }
        return [from, to];
    }
    /**
     * Update the given calendar date's time and check if it is valid
     * Because the calendar date has 00:00:00 as default time, if the picker type is 'both',
     * we need to update the given calendar date's time before selecting it.
     * if it is valid, return the updated dateTime
     * if it is not valid, return null
     */
    updateAndCheckCalendarDate(date) {
        let result;
        // if the picker is 'both', update the calendar date's time value
        if (this.picker.pickerType === 'both') {
            result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(date), this.dateTimeAdapter.getMonth(date), this.dateTimeAdapter.getDate(date), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
            result = this.dateTimeAdapter.clampDate(result, this.picker.minDateTime, this.picker.maxDateTime);
        }
        else {
            result = this.dateTimeAdapter.clone(date);
        }
        // check the updated dateTime
        return this.picker.dateTimeChecker(result) ? result : null;
    }
    /**
     * Focus to the picker
     * */
    focusPicker() {
        if (this.picker.pickerMode === 'inline') {
            return;
        }
        if (this.calendar) {
            this.calendar.focusActiveCell();
        }
        else if (this.timer) {
            this.timer.focus();
        }
    }
}
OwlDateTimeContainerComponent.ɵfac = function OwlDateTimeContainerComponent_Factory(t) { return new (t || OwlDateTimeContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.OwlDateTimeIntl), i0.ɵɵdirectiveInject(i2.DateTimeAdapter, 8)); };
OwlDateTimeContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlDateTimeContainerComponent, selectors: [["owl-date-time-container"]], viewQuery: function OwlDateTimeContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(OwlCalendarComponent, true);
        i0.ɵɵviewQuery(OwlTimerComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendar = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.timer = _t.first);
    } }, hostVars: 12, hostBindings: function OwlDateTimeContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵcomponentHostSyntheticListener("@transformPicker.done", function OwlDateTimeContainerComponent_animation_transformPicker_done_HostBindingHandler($event) { return ctx.handleContainerAnimationDone($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("id", ctx.owlDTContainerId);
        i0.ɵɵupdateSyntheticHostBinding("@transformPicker", ctx.owlDTContainerAnimation);
        i0.ɵɵclassProp("owl-dt-container", ctx.owlDTContainerClass)("owl-dt-popup-container", ctx.owlDTPopupContainerClass)("owl-dt-dialog-container", ctx.owlDTDialogContainerClass)("owl-dt-inline-container", ctx.owlDTInlineContainerClass)("owl-dt-container-disabled", ctx.owlDTContainerDisabledClass);
    } }, exportAs: ["owlDateTimeContainer"], decls: 5, vars: 6, consts: [[1, "owl-dt-container-inner", 3, "cdkTrapFocus"], ["class", "owl-dt-container-row", 3, "firstDayOfWeek", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "startView", "hideOtherMonths", "pickerMomentChange", "yearSelected", "monthSelected", "selectedChange", 4, "ngIf"], ["class", "owl-dt-container-row", 3, "pickerMoment", "minDateTime", "maxDateTime", "showSecondsTimer", "hour12Timer", "stepHour", "stepMinute", "stepSecond", "selectedChange", 4, "ngIf"], ["role", "radiogroup", "class", "owl-dt-container-info owl-dt-container-row", 4, "ngIf"], ["class", "owl-dt-container-buttons owl-dt-container-row", 4, "ngIf"], [1, "owl-dt-container-row", 3, "firstDayOfWeek", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "startView", "hideOtherMonths", "pickerMomentChange", "yearSelected", "monthSelected", "selectedChange"], [1, "owl-dt-container-row", 3, "pickerMoment", "minDateTime", "maxDateTime", "showSecondsTimer", "hour12Timer", "stepHour", "stepMinute", "stepSecond", "selectedChange"], ["role", "radiogroup", 1, "owl-dt-container-info", "owl-dt-container-row"], ["role", "radio", 1, "owl-dt-control", "owl-dt-container-range", "owl-dt-container-from", 3, "tabindex", "ngClass", "click", "keydown"], ["from", ""], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-container-range-content"], [1, "owl-dt-container-info-label"], [1, "owl-dt-container-info-value"], ["role", "radio", 1, "owl-dt-control", "owl-dt-container-range", "owl-dt-container-to", 3, "tabindex", "ngClass", "click", "keydown"], ["to", ""], [1, "owl-dt-container-buttons", "owl-dt-container-row"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-container-control-button", 3, "click"], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-control-button-content"]], template: function OwlDateTimeContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template, 1, 10, "owl-date-time-calendar", 1);
        i0.ɵɵtemplate(2, OwlDateTimeContainerComponent_owl_date_time_timer_2_Template, 1, 8, "owl-date-time-timer", 2);
        i0.ɵɵtemplate(3, OwlDateTimeContainerComponent_div_3_Template, 15, 14, "div", 3);
        i0.ɵɵtemplate(4, OwlDateTimeContainerComponent_div_4_Template, 7, 2, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("cdkTrapFocus", ctx.picker.pickerMode !== "inline")("@fadeInPicker", ctx.picker.pickerMode === "inline" ? "" : "enter");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pickerType === "both" || ctx.pickerType === "calendar");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pickerType === "both" || ctx.pickerType === "timer");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.picker.isInRangeMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showControlButtons);
    } }, directives: [i3.CdkTrapFocus, i4.NgIf, i5.OwlCalendarComponent, i6.OwlTimerComponent, i4.NgClass], styles: [""], data: { animation: [
            owlDateTimePickerAnimations.transformPicker,
            owlDateTimePickerAnimations.fadeInPicker
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDateTimeContainerComponent, [{
        type: Component,
        args: [{
                exportAs: 'owlDateTimeContainer',
                selector: 'owl-date-time-container',
                templateUrl: './date-time-picker-container.component.html',
                styleUrls: ['./date-time-picker-container.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [
                    owlDateTimePickerAnimations.transformPicker,
                    owlDateTimePickerAnimations.fadeInPicker
                ],
                host: {
                    '(@transformPicker.done)': 'handleContainerAnimationDone($event)',
                    '[class.owl-dt-container]': 'owlDTContainerClass',
                    '[class.owl-dt-popup-container]': 'owlDTPopupContainerClass',
                    '[class.owl-dt-dialog-container]': 'owlDTDialogContainerClass',
                    '[class.owl-dt-inline-container]': 'owlDTInlineContainerClass',
                    '[class.owl-dt-container-disabled]': 'owlDTContainerDisabledClass',
                    '[attr.id]': 'owlDTContainerId',
                    '[@transformPicker]': 'owlDTContainerAnimation',
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.OwlDateTimeIntl }, { type: i2.DateTimeAdapter, decorators: [{
                type: Optional
            }] }]; }, { calendar: [{
            type: ViewChild,
            args: [OwlCalendarComponent]
        }], timer: [{
            type: ViewChild,
            args: [OwlTimerComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFHSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsUUFBUSxFQUNSLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUNILFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEVBQ1gsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7OztJQ3pCM0IsaURBZXlFO0lBWGpFLGdSQUErQixzTkFTZixpQ0FBeUIsSUFUVix3TkFVZCxrQ0FBMEIsSUFWWiwwUEFBQTtJQVdTLGlCQUF5Qjs7O0lBWmpFLDhEQUF3QyxzQ0FBQSxxQ0FBQSx1Q0FBQSx5Q0FBQSx1Q0FBQSx1Q0FBQSw2Q0FBQSx1Q0FBQSxtREFBQTs7OztJQWNoRCw4Q0FXc0U7SUFBOUQsaVFBQXVDO0lBQUMsaUJBQXNC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RUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQUU7b0JBQ1IsMkJBQTJCLENBQUMsZUFBZTtvQkFDM0MsMkJBQTJCLENBQUMsWUFBWTtpQkFDM0M7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLHlCQUF5QixFQUFFLHNDQUFzQztvQkFDakUsMEJBQTBCLEVBQUUscUJBQXFCO29CQUNqRCxnQ0FBZ0MsRUFBRSwwQkFBMEI7b0JBQzVELGlDQUFpQyxFQUFFLDJCQUEyQjtvQkFDOUQsaUNBQWlDLEVBQUUsMkJBQTJCO29CQUM5RCxtQ0FBbUMsRUFBRSw2QkFBNkI7b0JBQ2xFLFdBQVcsRUFBRSxrQkFBa0I7b0JBQy9CLG9CQUFvQixFQUFFLHlCQUF5QjtpQkFDbEQ7YUFDSjs7c0JBc0ppQixRQUFROztrQkFuSnJCLFNBQVM7bUJBQUMsb0JBQW9COztrQkFFOUIsU0FBUzttQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPcHRpb25hbCxcclxuICAgIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZUludGwgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItaW50bC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3dsQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE93bFRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZSwgUGlja2VyVHlwZSB9IGZyb20gJy4vZGF0ZS10aW1lLmNsYXNzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBvd2xEYXRlVGltZVBpY2tlckFuaW1hdGlvbnMgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgICBET1dOX0FSUk9XLFxyXG4gICAgTEVGVF9BUlJPVyxcclxuICAgIFJJR0hUX0FSUk9XLFxyXG4gICAgU1BBQ0UsXHJcbiAgICBVUF9BUlJPV1xyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVDb250YWluZXInLFxyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLWNvbnRhaW5lcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgb3dsRGF0ZVRpbWVQaWNrZXJBbmltYXRpb25zLnRyYW5zZm9ybVBpY2tlcixcclxuICAgICAgICBvd2xEYXRlVGltZVBpY2tlckFuaW1hdGlvbnMuZmFkZUluUGlja2VyXHJcbiAgICBdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICcoQHRyYW5zZm9ybVBpY2tlci5kb25lKSc6ICdoYW5kbGVDb250YWluZXJBbmltYXRpb25Eb25lKCRldmVudCknLFxyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWNvbnRhaW5lcl0nOiAnb3dsRFRDb250YWluZXJDbGFzcycsXHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtcG9wdXAtY29udGFpbmVyXSc6ICdvd2xEVFBvcHVwQ29udGFpbmVyQ2xhc3MnLFxyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWRpYWxvZy1jb250YWluZXJdJzogJ293bERURGlhbG9nQ29udGFpbmVyQ2xhc3MnLFxyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWlubGluZS1jb250YWluZXJdJzogJ293bERUSW5saW5lQ29udGFpbmVyQ2xhc3MnLFxyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWNvbnRhaW5lci1kaXNhYmxlZF0nOiAnb3dsRFRDb250YWluZXJEaXNhYmxlZENsYXNzJyxcclxuICAgICAgICAnW2F0dHIuaWRdJzogJ293bERUQ29udGFpbmVySWQnLFxyXG4gICAgICAgICdbQHRyYW5zZm9ybVBpY2tlcl0nOiAnb3dsRFRDb250YWluZXJBbmltYXRpb24nLFxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3dsRGF0ZVRpbWVDb250YWluZXJDb21wb25lbnQ8VD5cclxuICAgIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoT3dsQ2FsZW5kYXJDb21wb25lbnQpXHJcbiAgICBjYWxlbmRhcjogT3dsQ2FsZW5kYXJDb21wb25lbnQ8VD47XHJcbiAgICBAVmlld0NoaWxkKE93bFRpbWVyQ29tcG9uZW50KVxyXG4gICAgdGltZXI6IE93bFRpbWVyQ29tcG9uZW50PFQ+O1xyXG5cclxuICAgIHB1YmxpYyBwaWNrZXI6IE93bERhdGVUaW1lPFQ+O1xyXG4gICAgcHVibGljIGFjdGl2ZVNlbGVjdGVkSW5kZXggPSAwOyAvLyBUaGUgY3VycmVudCBhY3RpdmUgU2VsZWN0ZWRJbmRleCBpbiByYW5nZSBzZWxlY3QgbW9kZSAoMDogJ2Zyb20nLCAxOiAndG8nKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RyZWFtIGVtaXRzIHdoZW4gdHJ5IHRvIGhpZGUgcGlja2VyXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBoaWRlUGlja2VyJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgICBnZXQgaGlkZVBpY2tlclN0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpZGVQaWNrZXIkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RyZWFtIGVtaXRzIHdoZW4gdHJ5IHRvIGNvbmZpcm0gdGhlIHNlbGVjdGVkIHZhbHVlXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBjb25maXJtU2VsZWN0ZWQkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICAgIGdldCBjb25maXJtU2VsZWN0ZWRTdHJlYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maXJtU2VsZWN0ZWQkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja2VyT3BlbmVkJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgICBnZXQgcGlja2VyT3BlbmVkU3RyZWFtKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyT3BlbmVkJC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjdXJyZW50IHBpY2tlciBtb21lbnQuIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0aW1lIHBlcmlvZCBpcyBzaG93biBhbmQgd2hpY2ggZGF0ZSBpc1xyXG4gICAgICogaGlnaGxpZ2h0ZWQgd2hlbiB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jbGFtUGlja2VyTW9tZW50OiBUO1xyXG5cclxuICAgIGdldCBwaWNrZXJNb21lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYW1QaWNrZXJNb21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBpY2tlck1vbWVudCh2YWx1ZTogVCkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGFtUGlja2VyTW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xhbXBEYXRlKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5taW5EYXRlVGltZSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLm1heERhdGVUaW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBpY2tlclR5cGUoKTogUGlja2VyVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLnBpY2tlclR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbmNlbExhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5jYW5jZWxCdG5MYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2V0TGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnNldEJ0bkxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJhbmdlICdmcm9tJyBsYWJlbFxyXG4gICAgICogKi9cclxuICAgIGdldCBmcm9tTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnJhbmdlRnJvbUxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJhbmdlICd0bycgbGFiZWxcclxuICAgICAqICovXHJcbiAgICBnZXQgdG9MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwucmFuZ2VUb0xhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJhbmdlICdmcm9tJyBmb3JtYXR0ZWQgdmFsdWVcclxuICAgICAqICovXHJcbiAgICBnZXQgZnJvbUZvcm1hdHRlZFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBpY2tlci5zZWxlY3RlZHNbMF07XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZm9ybWF0KHZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXRTdHJpbmcpXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmFuZ2UgJ3RvJyBmb3JtYXR0ZWQgdmFsdWVcclxuICAgICAqICovXHJcbiAgICBnZXQgdG9Gb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5waWNrZXIuc2VsZWN0ZWRzWzFdO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5waWNrZXIuZm9ybWF0U3RyaW5nKVxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FzZXMgaW4gd2hpY2ggdGhlIGNvbnRyb2wgYnV0dG9ucyBzaG93IGluIHRoZSBwaWNrZXJcclxuICAgICAqIDEpIHBpY2tlciBtb2RlIGlzICdkaWFsb2cnXHJcbiAgICAgKiAyKSBwaWNrZXIgdHlwZSBpcyBOT1QgJ2NhbGVuZGFyJyBhbmQgdGhlIHBpY2tlciBtb2RlIGlzIE5PVCAnaW5saW5lJ1xyXG4gICAgICogKi9cclxuICAgIGdldCBzaG93Q29udHJvbEJ1dHRvbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5waWNrZXIucGlja2VyTW9kZSA9PT0gJ2RpYWxvZycgfHxcclxuICAgICAgICAgICAgKHRoaXMucGlja2VyLnBpY2tlclR5cGUgIT09ICdjYWxlbmRhcicgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLnBpY2tlck1vZGUgIT09ICdpbmxpbmUnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbnRhaW5lckVsbSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERUQ29udGFpbmVyQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERUUG9wdXBDb250YWluZXJDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXIucGlja2VyTW9kZSA9PT0gJ3BvcHVwJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFREaWFsb2dDb250YWluZXJDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXIucGlja2VyTW9kZSA9PT0gJ2RpYWxvZyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERUSW5saW5lQ29udGFpbmVyQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdpbmxpbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEVENvbnRhaW5lckRpc2FibGVkQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLmRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEVENvbnRhaW5lcklkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEVENvbnRhaW5lckFuaW1hdGlvbigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5waWNrZXJNb2RlID09PSAnaW5saW5lJyA/ICcnIDogJ2VudGVyJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgZWxtUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIHBpY2tlckludGw6IE93bERhdGVUaW1lSW50bCxcclxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVUaW1lQWRhcHRlcjogRGF0ZVRpbWVBZGFwdGVyPFQ+ICkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRQaWNrZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZm9jdXNQaWNrZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlQ29udGFpbmVyQW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0b1N0YXRlID0gZXZlbnQudG9TdGF0ZTtcclxuICAgICAgICBpZiAodG9TdGF0ZSA9PT0gJ2VudGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tlck9wZW5lZCQubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGF0ZVNlbGVjdGVkKGRhdGU6IFQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5waWNrZXIuaXNJblNpbmdsZU1vZGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kYXRlU2VsZWN0ZWRJblNpbmdsZU1vZGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIuc2VsZWN0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBjbG9zZSB0aGUgcGlja2VyIHdoZW4gcmVzdWx0IGlzIG51bGwgYW5kIHBpY2tlclR5cGUgaXMgY2FsZW5kYXIuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWNrZXJUeXBlID09PSAnY2FsZW5kYXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUGlja2VyJC5uZXh0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBpY2tlci5pc0luUmFuZ2VNb2RlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGF0ZVNlbGVjdGVkSW5SYW5nZU1vZGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gcmVzdWx0W3RoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5zZWxlY3QocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGltZVNlbGVjdGVkKHRpbWU6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNsb25lKHRpbWUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMucGlja2VyLmRhdGVUaW1lQ2hlY2tlcih0aGlzLnBpY2tlck1vbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyLmlzSW5TaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnNlbGVjdCh0aGlzLnBpY2tlck1vbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBpY2tlci5pc0luUmFuZ2VNb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkcyA9IFsuLi50aGlzLnBpY2tlci5zZWxlY3RlZHNdO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlICdmcm9tJyBpcyBhZnRlciAndG8nIG9yICd0bydpcyBiZWZvcmUgJ2Zyb20nXHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgY2FzZSwgd2Ugc2V0IGJvdGggdGhlICdmcm9tJyBhbmQgJ3RvJyB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4ID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRzWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkc1sxXVxyXG4gICAgICAgICAgICAgICAgICAgICkgPT09IDEpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4ID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRzWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICkgPT09IC0xKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkc1swXSA9IHRoaXMucGlja2VyTW9tZW50O1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRzWzFdID0gdGhpcy5waWNrZXJNb21lbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZHNbdGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4XSA9IHRoaXMucGlja2VyTW9tZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBpY2tlci5zZWxlY3Qoc2VsZWN0ZWRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgY2xpY2sgb24gY2FuY2VsIGJ1dHRvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25DYW5jZWxDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGVQaWNrZXIkLm5leHQobnVsbCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgY2xpY2sgb24gc2V0IGJ1dHRvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25TZXRDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucGlja2VyLmRhdGVUaW1lQ2hlY2tlcih0aGlzLnBpY2tlck1vbWVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlUGlja2VyJC5uZXh0KG51bGwpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbmZpcm1TZWxlY3RlZCQubmV4dChldmVudCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgY2xpY2sgb24gaW5mb3JtIHJhZGlvIGdyb3VwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVDbGlja09uSW5mb0dyb3VwKGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgY2xpY2sgb24gaW5mb3JtIHJhZGlvIGdyb3VwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVLZXlkb3duT25JbmZvR3JvdXAoXHJcbiAgICAgICAgZXZlbnQ6IGFueSxcclxuICAgICAgICBuZXh0OiBhbnksXHJcbiAgICAgICAgaW5kZXg6IG51bWJlclxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICAgICAgICAgICAgbmV4dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVTZWxlY3RlZEluZGV4KGluZGV4ID09PSAwID8gMSA6IDApO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNQQUNFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHZhbHVlIG9mIGFjdGl2ZVNlbGVjdGVkSW5kZXhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRBY3RpdmVTZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnNlbGVjdE1vZGUgPT09ICdyYW5nZScgJiZcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4ICE9PSBpbmRleFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5waWNrZXIuc2VsZWN0ZWRzW3RoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2tlci5zZWxlY3RlZHMgJiYgc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xvbmUoc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQaWNrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waWNrZXJNb21lbnQgPSB0aGlzLnBpY2tlci5zdGFydEF0IHx8IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLm5vdygpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9IHRoaXMucGlja2VyLnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJyA/IDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGNhbGVuZGFyIGRhdGUgaW4gc2luZ2xlIG1vZGUsXHJcbiAgICAgKiBpdCByZXR1cm5zIG51bGwgd2hlbiBkYXRlIGlzIG5vdCBzZWxlY3RlZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkYXRlU2VsZWN0ZWRJblNpbmdsZU1vZGUoZGF0ZTogVCk6IFQgfCBudWxsIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNTYW1lRGF5KGRhdGUsIHRoaXMucGlja2VyLnNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUFuZENoZWNrQ2FsZW5kYXJEYXRlKGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGRhdGVzIGluIHJhbmdlIE1vZGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkYXRlU2VsZWN0ZWRJblJhbmdlTW9kZShkYXRlOiBUKTogVFtdIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IGZyb20gPSB0aGlzLnBpY2tlci5zZWxlY3RlZHNbMF07XHJcbiAgICAgICAgbGV0IHRvID0gdGhpcy5waWNrZXIuc2VsZWN0ZWRzWzFdO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnVwZGF0ZUFuZENoZWNrQ2FsZW5kYXJEYXRlKGRhdGUpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBnaXZlbiBjYWxlbmRhciBkYXkgaXMgYWZ0ZXIgb3IgZXF1YWwgdG8gJ2Zyb20nLFxyXG4gICAgICAgIC8vIHNldCB0aHMgZ2l2ZW4gZGF0ZSBhcyAndG8nXHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBzZXQgaXQgYXMgJ2Zyb20nIGFuZCBzZXQgJ3RvJyB0byBudWxsXHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyLnNlbGVjdE1vZGUgPT09ICdyYW5nZScpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIuc2VsZWN0ZWRzICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5zZWxlY3RlZHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAhdG8gJiZcclxuICAgICAgICAgICAgICAgIGZyb20gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhyZXN1bHQsIGZyb20pID49IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0byA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdG8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5waWNrZXIuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlRnJvbScpIHtcclxuICAgICAgICAgICAgZnJvbSA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBmcm9tIHZhbHVlIGlzIGFmdGVyIHRoZSB0byB2YWx1ZSwgc2V0IHRoZSB0byB2YWx1ZSBhcyBudWxsXHJcbiAgICAgICAgICAgIGlmICh0byAmJiB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGZyb20sIHRvKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRvID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5waWNrZXIuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlVG8nKSB7XHJcbiAgICAgICAgICAgIHRvID0gcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIGZyb20gdmFsdWUgaXMgYWZ0ZXIgdGhlIHRvIHZhbHVlLCBzZXQgdGhlIGZyb20gdmFsdWUgYXMgbnVsbFxyXG4gICAgICAgICAgICBpZiAoZnJvbSAmJiB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGZyb20sIHRvKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZyb20gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW2Zyb20sIHRvXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgZ2l2ZW4gY2FsZW5kYXIgZGF0ZSdzIHRpbWUgYW5kIGNoZWNrIGlmIGl0IGlzIHZhbGlkXHJcbiAgICAgKiBCZWNhdXNlIHRoZSBjYWxlbmRhciBkYXRlIGhhcyAwMDowMDowMCBhcyBkZWZhdWx0IHRpbWUsIGlmIHRoZSBwaWNrZXIgdHlwZSBpcyAnYm90aCcsXHJcbiAgICAgKiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgZ2l2ZW4gY2FsZW5kYXIgZGF0ZSdzIHRpbWUgYmVmb3JlIHNlbGVjdGluZyBpdC5cclxuICAgICAqIGlmIGl0IGlzIHZhbGlkLCByZXR1cm4gdGhlIHVwZGF0ZWQgZGF0ZVRpbWVcclxuICAgICAqIGlmIGl0IGlzIG5vdCB2YWxpZCwgcmV0dXJuIG51bGxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVBbmRDaGVja0NhbGVuZGFyRGF0ZShkYXRlOiBUKTogVCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHBpY2tlciBpcyAnYm90aCcsIHVwZGF0ZSB0aGUgY2FsZW5kYXIgZGF0ZSdzIHRpbWUgdmFsdWVcclxuICAgICAgICBpZiAodGhpcy5waWNrZXIucGlja2VyVHlwZSA9PT0gJ2JvdGgnKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNyZWF0ZURhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGUpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgoZGF0ZSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXREYXRlKGRhdGUpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0SG91cnModGhpcy5waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TWludXRlcyh0aGlzLnBpY2tlck1vbWVudCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRTZWNvbmRzKHRoaXMucGlja2VyTW9tZW50KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jbGFtcERhdGUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5taW5EYXRlVGltZSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLm1heERhdGVUaW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xvbmUoZGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjayB0aGUgdXBkYXRlZCBkYXRlVGltZVxyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5kYXRlVGltZUNoZWNrZXIocmVzdWx0KSA/IHJlc3VsdCA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb2N1cyB0byB0aGUgcGlja2VyXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBmb2N1c1BpY2tlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5waWNrZXIucGlja2VyTW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5mb2N1c0FjdGl2ZUNlbGwoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lci5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IFtjZGtUcmFwRm9jdXNdPVwicGlja2VyLnBpY2tlck1vZGUgIT09ICdpbmxpbmUnXCJcclxuICAgICBbQGZhZGVJblBpY2tlcl09XCJwaWNrZXIucGlja2VyTW9kZSA9PT0gJ2lubGluZSc/ICcnIDogJ2VudGVyJ1wiXHJcbiAgICAgY2xhc3M9XCJvd2wtZHQtY29udGFpbmVyLWlubmVyXCI+XHJcblxyXG4gICAgPG93bC1kYXRlLXRpbWUtY2FsZW5kYXJcclxuICAgICAgICAgICAgKm5nSWY9XCJwaWNrZXJUeXBlID09PSAnYm90aCcgfHwgcGlja2VyVHlwZSA9PT0gJ2NhbGVuZGFyJ1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwib3dsLWR0LWNvbnRhaW5lci1yb3dcIlxyXG4gICAgICAgICAgICBbZmlyc3REYXlPZldlZWtdPVwicGlja2VyLmZpcnN0RGF5T2ZXZWVrXCJcclxuICAgICAgICAgICAgWyhwaWNrZXJNb21lbnQpXT1cInBpY2tlck1vbWVudFwiXHJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJwaWNrZXIuc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRzXT1cInBpY2tlci5zZWxlY3RlZHNcIlxyXG4gICAgICAgICAgICBbc2VsZWN0TW9kZV09XCJwaWNrZXIuc2VsZWN0TW9kZVwiXHJcbiAgICAgICAgICAgIFttaW5EYXRlXT1cInBpY2tlci5taW5EYXRlVGltZVwiXHJcbiAgICAgICAgICAgIFttYXhEYXRlXT1cInBpY2tlci5tYXhEYXRlVGltZVwiXHJcbiAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cInBpY2tlci5kYXRlVGltZUZpbHRlclwiXHJcbiAgICAgICAgICAgIFtzdGFydFZpZXddPVwicGlja2VyLnN0YXJ0Vmlld1wiXHJcbiAgICAgICAgICAgIFtoaWRlT3RoZXJNb250aHNdPVwicGlja2VyLmhpZGVPdGhlck1vbnRoc1wiXHJcbiAgICAgICAgICAgICh5ZWFyU2VsZWN0ZWQpPVwicGlja2VyLnNlbGVjdFllYXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChtb250aFNlbGVjdGVkKT1cInBpY2tlci5zZWxlY3RNb250aCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cImRhdGVTZWxlY3RlZCgkZXZlbnQpXCI+PC9vd2wtZGF0ZS10aW1lLWNhbGVuZGFyPlxyXG5cclxuICAgIDxvd2wtZGF0ZS10aW1lLXRpbWVyXHJcbiAgICAgICAgICAgICpuZ0lmPVwicGlja2VyVHlwZSA9PT0gJ2JvdGgnIHx8IHBpY2tlclR5cGUgPT09ICd0aW1lcidcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIm93bC1kdC1jb250YWluZXItcm93XCJcclxuICAgICAgICAgICAgW3BpY2tlck1vbWVudF09XCJwaWNrZXJNb21lbnRcIlxyXG4gICAgICAgICAgICBbbWluRGF0ZVRpbWVdPVwicGlja2VyLm1pbkRhdGVUaW1lXCJcclxuICAgICAgICAgICAgW21heERhdGVUaW1lXT1cInBpY2tlci5tYXhEYXRlVGltZVwiXHJcbiAgICAgICAgICAgIFtzaG93U2Vjb25kc1RpbWVyXT1cInBpY2tlci5zaG93U2Vjb25kc1RpbWVyXCJcclxuICAgICAgICAgICAgW2hvdXIxMlRpbWVyXT1cInBpY2tlci5ob3VyMTJUaW1lclwiXHJcbiAgICAgICAgICAgIFtzdGVwSG91cl09XCJwaWNrZXIuc3RlcEhvdXJcIlxyXG4gICAgICAgICAgICBbc3RlcE1pbnV0ZV09XCJwaWNrZXIuc3RlcE1pbnV0ZVwiXHJcbiAgICAgICAgICAgIFtzdGVwU2Vjb25kXT1cInBpY2tlci5zdGVwU2Vjb25kXCJcclxuICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cInRpbWVTZWxlY3RlZCgkZXZlbnQpXCI+PC9vd2wtZGF0ZS10aW1lLXRpbWVyPlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJwaWNrZXIuaXNJblJhbmdlTW9kZVwiXHJcbiAgICAgICAgIHJvbGU9XCJyYWRpb2dyb3VwXCJcclxuICAgICAgICAgY2xhc3M9XCJvd2wtZHQtY29udGFpbmVyLWluZm8gb3dsLWR0LWNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICA8ZGl2IHJvbGU9XCJyYWRpb1wiIFt0YWJpbmRleF09XCJhY3RpdmVTZWxlY3RlZEluZGV4ID09PSAwID8gMCA6IC0xXCJcclxuICAgICAgICAgICAgIFthdHRyLmFyaWEtY2hlY2tlZF09XCJhY3RpdmVTZWxlY3RlZEluZGV4ID09PSAwXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wgb3dsLWR0LWNvbnRhaW5lci1yYW5nZSBvd2wtZHQtY29udGFpbmVyLWZyb21cIlxyXG4gICAgICAgICAgICAgW25nQ2xhc3NdPVwieydvd2wtZHQtY29udGFpbmVyLWluZm8tYWN0aXZlJzogYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMH1cIlxyXG4gICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrT25JbmZvR3JvdXAoJGV2ZW50LCAwKVwiXHJcbiAgICAgICAgICAgICAoa2V5ZG93bik9XCJoYW5kbGVLZXlkb3duT25JbmZvR3JvdXAoJGV2ZW50LCB0bywgMClcIiAjZnJvbT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1jb250ZW50IG93bC1kdC1jb250YWluZXItcmFuZ2UtY29udGVudFwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRhaW5lci1pbmZvLWxhYmVsXCI+e3tmcm9tTGFiZWx9fTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250YWluZXItaW5mby12YWx1ZVwiPnt7ZnJvbUZvcm1hdHRlZFZhbHVlfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHJvbGU9XCJyYWRpb1wiIFt0YWJpbmRleF09XCJhY3RpdmVTZWxlY3RlZEluZGV4ID09PSAxID8gMCA6IC0xXCJcclxuICAgICAgICAgICAgIFthdHRyLmFyaWEtY2hlY2tlZF09XCJhY3RpdmVTZWxlY3RlZEluZGV4ID09PSAxXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wgb3dsLWR0LWNvbnRhaW5lci1yYW5nZSBvd2wtZHQtY29udGFpbmVyLXRvXCJcclxuICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnb3dsLWR0LWNvbnRhaW5lci1pbmZvLWFjdGl2ZSc6IGFjdGl2ZVNlbGVjdGVkSW5kZXggPT09IDF9XCJcclxuICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVDbGlja09uSW5mb0dyb3VwKCRldmVudCwgMSlcIlxyXG4gICAgICAgICAgICAgKGtleWRvd24pPVwiaGFuZGxlS2V5ZG93bk9uSW5mb0dyb3VwKCRldmVudCwgZnJvbSwgMSlcIiAjdG8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtY29udGVudCBvd2wtZHQtY29udGFpbmVyLXJhbmdlLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250YWluZXItaW5mby1sYWJlbFwiPnt7dG9MYWJlbH19Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRhaW5lci1pbmZvLXZhbHVlXCI+e3t0b0Zvcm1hdHRlZFZhbHVlfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJzaG93Q29udHJvbEJ1dHRvbnNcIiBjbGFzcz1cIm93bC1kdC1jb250YWluZXItYnV0dG9ucyBvd2wtZHQtY29udGFpbmVyLXJvd1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJvd2wtZHQtY29udHJvbCBvd2wtZHQtY29udHJvbC1idXR0b24gb3dsLWR0LWNvbnRhaW5lci1jb250cm9sLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNhbmNlbENsaWNrZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWNvbnRlbnQgb3dsLWR0LWNvbnRyb2wtYnV0dG9uLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICB7e2NhbmNlbExhYmVsfX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJvd2wtZHQtY29udHJvbCBvd2wtZHQtY29udHJvbC1idXR0b24gb3dsLWR0LWNvbnRhaW5lci1jb250cm9sLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvblNldENsaWNrZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWNvbnRlbnQgb3dsLWR0LWNvbnRyb2wtYnV0dG9uLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICB7e3NldExhYmVsfX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=