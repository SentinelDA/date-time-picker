import { __read, __spread } from "tslib";
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
    var _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-calendar", 5);
    i0.ɵɵlistener("pickerMomentChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_pickerMomentChange_0_listener($event) { i0.ɵɵrestoreView(_r89); var ctx_r88 = i0.ɵɵnextContext(); return ctx_r88.pickerMoment = $event; })("yearSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_yearSelected_0_listener($event) { i0.ɵɵrestoreView(_r89); var ctx_r90 = i0.ɵɵnextContext(); return ctx_r90.picker.selectYear($event); })("monthSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_monthSelected_0_listener($event) { i0.ɵɵrestoreView(_r89); var ctx_r91 = i0.ɵɵnextContext(); return ctx_r91.picker.selectMonth($event); })("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r89); var ctx_r92 = i0.ɵɵnextContext(); return ctx_r92.dateSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r84 = i0.ɵɵnextContext();
    i0.ɵɵproperty("firstDayOfWeek", ctx_r84.picker.firstDayOfWeek)("pickerMoment", ctx_r84.pickerMoment)("selected", ctx_r84.picker.selected)("selecteds", ctx_r84.picker.selecteds)("selectMode", ctx_r84.picker.selectMode)("minDate", ctx_r84.picker.minDateTime)("maxDate", ctx_r84.picker.maxDateTime)("dateFilter", ctx_r84.picker.dateTimeFilter)("startView", ctx_r84.picker.startView)("hideOtherMonths", ctx_r84.picker.hideOtherMonths);
} }
function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template(rf, ctx) { if (rf & 1) {
    var _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-timer", 6);
    i0.ɵɵlistener("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template_owl_date_time_timer_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r94); var ctx_r93 = i0.ɵɵnextContext(); return ctx_r93.timeSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r85 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pickerMoment", ctx_r85.pickerMoment)("minDateTime", ctx_r85.picker.minDateTime)("maxDateTime", ctx_r85.picker.maxDateTime)("showSecondsTimer", ctx_r85.picker.showSecondsTimer)("hour12Timer", ctx_r85.picker.hour12Timer)("stepHour", ctx_r85.picker.stepHour)("stepMinute", ctx_r85.picker.stepMinute)("stepSecond", ctx_r85.picker.stepSecond);
} }
var _c0 = function (a0) { return { "owl-dt-container-info-active": a0 }; };
function OwlDateTimeContainerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8, 9);
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r98); var ctx_r97 = i0.ɵɵnextContext(); return ctx_r97.handleClickOnInfoGroup($event, 0); })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r98); var _r96 = i0.ɵɵreference(9); var ctx_r99 = i0.ɵɵnextContext(); return ctx_r99.handleKeydownOnInfoGroup($event, _r96, 0); });
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
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_8_listener($event) { i0.ɵɵrestoreView(_r98); var ctx_r100 = i0.ɵɵnextContext(); return ctx_r100.handleClickOnInfoGroup($event, 1); })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_8_listener($event) { i0.ɵɵrestoreView(_r98); var _r95 = i0.ɵɵreference(2); var ctx_r101 = i0.ɵɵnextContext(); return ctx_r101.handleKeydownOnInfoGroup($event, _r95, 1); });
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
    var ctx_r86 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tabindex", ctx_r86.activeSelectedIndex === 0 ? 0 : 0 - 1)("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx_r86.activeSelectedIndex === 0));
    i0.ɵɵattribute("aria-checked", ctx_r86.activeSelectedIndex === 0);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r86.fromLabel, ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r86.fromFormattedValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tabindex", ctx_r86.activeSelectedIndex === 1 ? 0 : 0 - 1)("ngClass", i0.ɵɵpureFunction1(12, _c0, ctx_r86.activeSelectedIndex === 1));
    i0.ɵɵattribute("aria-checked", ctx_r86.activeSelectedIndex === 1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r86.toLabel, ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r86.toFormattedValue);
} }
function OwlDateTimeContainerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r103 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r103); var ctx_r102 = i0.ɵɵnextContext(); return ctx_r102.onCancelClicked($event); });
    i0.ɵɵelementStart(2, "span", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 16);
    i0.ɵɵlistener("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r103); var ctx_r104 = i0.ɵɵnextContext(); return ctx_r104.onSetClicked($event); });
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r87 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r87.cancelLabel, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r87.setLabel, " ");
} }
var OwlDateTimeContainerComponent = /** @class */ (function () {
    function OwlDateTimeContainerComponent(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
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
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "hidePickerStream", {
        get: function () {
            return this.hidePicker$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "confirmSelectedStream", {
        get: function () {
            return this.confirmSelected$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerOpenedStream", {
        get: function () {
            return this.pickerOpened$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerMoment", {
        get: function () {
            return this._clamPickerMoment;
        },
        set: function (value) {
            if (value) {
                this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
            }
            this.cdRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "pickerType", {
        get: function () {
            return this.picker.pickerType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "cancelLabel", {
        get: function () {
            return this.pickerIntl.cancelBtnLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "setLabel", {
        get: function () {
            return this.pickerIntl.setBtnLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "fromLabel", {
        /**
         * The range 'from' label
         * */
        get: function () {
            return this.pickerIntl.rangeFromLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "toLabel", {
        /**
         * The range 'to' label
         * */
        get: function () {
            return this.pickerIntl.rangeToLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "fromFormattedValue", {
        /**
         * The range 'from' formatted value
         * */
        get: function () {
            var value = this.picker.selecteds[0];
            return value
                ? this.dateTimeAdapter.format(value, this.picker.formatString)
                : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "toFormattedValue", {
        /**
         * The range 'to' formatted value
         * */
        get: function () {
            var value = this.picker.selecteds[1];
            return value
                ? this.dateTimeAdapter.format(value, this.picker.formatString)
                : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "showControlButtons", {
        /**
         * Cases in which the control buttons show in the picker
         * 1) picker mode is 'dialog'
         * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
         * */
        get: function () {
            return (this.picker.pickerMode === 'dialog' ||
                (this.picker.pickerType !== 'calendar' &&
                    this.picker.pickerMode !== 'inline'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "containerElm", {
        get: function () {
            return this.elmRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTPopupContainerClass", {
        get: function () {
            return this.picker.pickerMode === 'popup';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTDialogContainerClass", {
        get: function () {
            return this.picker.pickerMode === 'dialog';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTInlineContainerClass", {
        get: function () {
            return this.picker.pickerMode === 'inline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerDisabledClass", {
        get: function () {
            return this.picker.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerId", {
        get: function () {
            return this.picker.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeContainerComponent.prototype, "owlDTContainerAnimation", {
        get: function () {
            return this.picker.pickerMode === 'inline' ? '' : 'enter';
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeContainerComponent.prototype.ngOnInit = function () { };
    OwlDateTimeContainerComponent.prototype.ngAfterContentInit = function () {
        this.initPicker();
    };
    OwlDateTimeContainerComponent.prototype.ngAfterViewInit = function () {
        this.focusPicker();
    };
    OwlDateTimeContainerComponent.prototype.handleContainerAnimationDone = function (event) {
        var toState = event.toState;
        if (toState === 'enter') {
            this.pickerOpened$.next();
        }
    };
    OwlDateTimeContainerComponent.prototype.dateSelected = function (date) {
        var result;
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
    };
    OwlDateTimeContainerComponent.prototype.timeSelected = function (time) {
        this.pickerMoment = this.dateTimeAdapter.clone(time);
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            return;
        }
        if (this.picker.isInSingleMode) {
            this.picker.select(this.pickerMoment);
            return;
        }
        if (this.picker.isInRangeMode) {
            var selecteds = __spread(this.picker.selecteds);
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
    };
    /**
     * Handle click on cancel button
     */
    OwlDateTimeContainerComponent.prototype.onCancelClicked = function (event) {
        this.hidePicker$.next(null);
        event.preventDefault();
        return;
    };
    /**
     * Handle click on set button
     */
    OwlDateTimeContainerComponent.prototype.onSetClicked = function (event) {
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            this.hidePicker$.next(null);
            event.preventDefault();
            return;
        }
        this.confirmSelected$.next(event);
        event.preventDefault();
        return;
    };
    /**
     * Handle click on inform radio group
     */
    OwlDateTimeContainerComponent.prototype.handleClickOnInfoGroup = function (event, index) {
        this.setActiveSelectedIndex(index);
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * Handle click on inform radio group
     */
    OwlDateTimeContainerComponent.prototype.handleKeydownOnInfoGroup = function (event, next, index) {
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
    };
    /**
     * Set the value of activeSelectedIndex
     */
    OwlDateTimeContainerComponent.prototype.setActiveSelectedIndex = function (index) {
        if (this.picker.selectMode === 'range' &&
            this.activeSelectedIndex !== index) {
            this.activeSelectedIndex = index;
            var selected = this.picker.selecteds[this.activeSelectedIndex];
            if (this.picker.selecteds && selected) {
                this.pickerMoment = this.dateTimeAdapter.clone(selected);
            }
        }
        return;
    };
    OwlDateTimeContainerComponent.prototype.initPicker = function () {
        this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
        this.activeSelectedIndex = this.picker.selectMode === 'rangeTo' ? 1 : 0;
    };
    /**
     * Select calendar date in single mode,
     * it returns null when date is not selected.
     */
    OwlDateTimeContainerComponent.prototype.dateSelectedInSingleMode = function (date) {
        if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
            return null;
        }
        return this.updateAndCheckCalendarDate(date);
    };
    /**
     * Select dates in range Mode
     */
    OwlDateTimeContainerComponent.prototype.dateSelectedInRangeMode = function (date) {
        var from = this.picker.selecteds[0];
        var to = this.picker.selecteds[1];
        var result = this.updateAndCheckCalendarDate(date);
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
    };
    /**
     * Update the given calendar date's time and check if it is valid
     * Because the calendar date has 00:00:00 as default time, if the picker type is 'both',
     * we need to update the given calendar date's time before selecting it.
     * if it is valid, return the updated dateTime
     * if it is not valid, return null
     */
    OwlDateTimeContainerComponent.prototype.updateAndCheckCalendarDate = function (date) {
        var result;
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
    };
    /**
     * Focus to the picker
     * */
    OwlDateTimeContainerComponent.prototype.focusPicker = function () {
        if (this.picker.pickerMode === 'inline') {
            return;
        }
        if (this.calendar) {
            this.calendar.focusActiveCell();
        }
        else if (this.timer) {
            this.timer.focus();
        }
    };
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
    return OwlDateTimeContainerComponent;
}());
export { OwlDateTimeContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCxPQUFPLEVBR0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFFBQVEsRUFDUixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFDSCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUNYLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7SUN6QjNCLGlEQWV5RTtJQVhqRSw4UUFBK0Isb05BU2YsaUNBQXlCLElBVFYsc05BVWQsa0NBQTBCLElBVlosd1BBQUE7SUFXUyxpQkFBeUI7OztJQVpqRSw4REFBd0Msc0NBQUEscUNBQUEsdUNBQUEseUNBQUEsdUNBQUEsdUNBQUEsNkNBQUEsdUNBQUEsbURBQUE7Ozs7SUFjaEQsOENBV3NFO0lBQTlELCtQQUF1QztJQUFDLGlCQUFz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b0VBQUE7WUFLeEMsZUFBMEQ7WUFBMUQsaUZBQTBEO1lBaUIxRCxlQUF1RDtZQUF2RCw4RUFBdUQ7WUFZMUQsZUFBNEI7WUFBNUIsK0NBQTRCO1lBMkI1QixlQUEwQjtZQUExQiw2Q0FBMEI7aUpEdkJuQjtnQkFDUiwyQkFBMkIsQ0FBQyxlQUFlO2dCQUMzQywyQkFBMkIsQ0FBQyxZQUFZO2FBQzNDO3dDQXpDTDtDQW9lQyxBQXJjRCxJQXFjQztTQS9hWSw2QkFBNkI7a0RBQTdCLDZCQUE2QjtjQXRCekMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO2dCQUMxRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFFO29CQUNSLDJCQUEyQixDQUFDLGVBQWU7b0JBQzNDLDJCQUEyQixDQUFDLFlBQVk7aUJBQzNDO2dCQUNELElBQUksRUFBRTtvQkFDRix5QkFBeUIsRUFBRSxzQ0FBc0M7b0JBQ2pFLDBCQUEwQixFQUFFLHFCQUFxQjtvQkFDakQsZ0NBQWdDLEVBQUUsMEJBQTBCO29CQUM1RCxpQ0FBaUMsRUFBRSwyQkFBMkI7b0JBQzlELGlDQUFpQyxFQUFFLDJCQUEyQjtvQkFDOUQsbUNBQW1DLEVBQUUsNkJBQTZCO29CQUNsRSxXQUFXLEVBQUUsa0JBQWtCO29CQUMvQixvQkFBb0IsRUFBRSx5QkFBeUI7aUJBQ2xEO2FBQ0o7O3NCQXNKaUIsUUFBUTs7a0JBbkpyQixTQUFTO21CQUFDLG9CQUFvQjs7a0JBRTlCLFNBQVM7bUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGRhdGUtdGltZS1waWNrZXItY29udGFpbmVyLmNvbXBvbmVudFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbnRsIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZSc7XHJcbmltcG9ydCB7IE93bENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPd2xUaW1lckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWUsIFBpY2tlclR5cGUgfSBmcm9tICcuL2RhdGUtdGltZS5jbGFzcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgb3dsRGF0ZVRpbWVQaWNrZXJBbmltYXRpb25zIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gICAgRE9XTl9BUlJPVyxcclxuICAgIExFRlRfQVJST1csXHJcbiAgICBSSUdIVF9BUlJPVyxcclxuICAgIFNQQUNFLFxyXG4gICAgVVBfQVJST1dcclxufSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBleHBvcnRBczogJ293bERhdGVUaW1lQ29udGFpbmVyJyxcclxuICAgIHNlbGVjdG9yOiAnb3dsLWRhdGUtdGltZS1jb250YWluZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtdGltZS1waWNrZXItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2RhdGUtdGltZS1waWNrZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIG93bERhdGVUaW1lUGlja2VyQW5pbWF0aW9ucy50cmFuc2Zvcm1QaWNrZXIsXHJcbiAgICAgICAgb3dsRGF0ZVRpbWVQaWNrZXJBbmltYXRpb25zLmZhZGVJblBpY2tlclxyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKEB0cmFuc2Zvcm1QaWNrZXIuZG9uZSknOiAnaGFuZGxlQ29udGFpbmVyQW5pbWF0aW9uRG9uZSgkZXZlbnQpJyxcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC1jb250YWluZXJdJzogJ293bERUQ29udGFpbmVyQ2xhc3MnLFxyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LXBvcHVwLWNvbnRhaW5lcl0nOiAnb3dsRFRQb3B1cENvbnRhaW5lckNsYXNzJyxcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC1kaWFsb2ctY29udGFpbmVyXSc6ICdvd2xEVERpYWxvZ0NvbnRhaW5lckNsYXNzJyxcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC1pbmxpbmUtY29udGFpbmVyXSc6ICdvd2xEVElubGluZUNvbnRhaW5lckNsYXNzJyxcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC1jb250YWluZXItZGlzYWJsZWRdJzogJ293bERUQ29udGFpbmVyRGlzYWJsZWRDbGFzcycsXHJcbiAgICAgICAgJ1thdHRyLmlkXSc6ICdvd2xEVENvbnRhaW5lcklkJyxcclxuICAgICAgICAnW0B0cmFuc2Zvcm1QaWNrZXJdJzogJ293bERUQ29udGFpbmVyQW5pbWF0aW9uJyxcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50PFQ+XHJcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKE93bENhbGVuZGFyQ29tcG9uZW50KVxyXG4gICAgY2FsZW5kYXI6IE93bENhbGVuZGFyQ29tcG9uZW50PFQ+O1xyXG4gICAgQFZpZXdDaGlsZChPd2xUaW1lckNvbXBvbmVudClcclxuICAgIHRpbWVyOiBPd2xUaW1lckNvbXBvbmVudDxUPjtcclxuXHJcbiAgICBwdWJsaWMgcGlja2VyOiBPd2xEYXRlVGltZTxUPjtcclxuICAgIHB1YmxpYyBhY3RpdmVTZWxlY3RlZEluZGV4ID0gMDsgLy8gVGhlIGN1cnJlbnQgYWN0aXZlIFNlbGVjdGVkSW5kZXggaW4gcmFuZ2Ugc2VsZWN0IG1vZGUgKDA6ICdmcm9tJywgMTogJ3RvJylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0cmVhbSBlbWl0cyB3aGVuIHRyeSB0byBoaWRlIHBpY2tlclxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgaGlkZVBpY2tlciQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gICAgZ2V0IGhpZGVQaWNrZXJTdHJlYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaWRlUGlja2VyJC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0cmVhbSBlbWl0cyB3aGVuIHRyeSB0byBjb25maXJtIHRoZSBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgY29uZmlybVNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgICBnZXQgY29uZmlybVNlbGVjdGVkU3RyZWFtKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlybVNlbGVjdGVkJC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2tlck9wZW5lZCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gICAgZ2V0IHBpY2tlck9wZW5lZFN0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlck9wZW5lZCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBwaWNrZXIgbW9tZW50LiBUaGlzIGRldGVybWluZXMgd2hpY2ggdGltZSBwZXJpb2QgaXMgc2hvd24gYW5kIHdoaWNoIGRhdGUgaXNcclxuICAgICAqIGhpZ2hsaWdodGVkIHdoZW4gdXNpbmcga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY2xhbVBpY2tlck1vbWVudDogVDtcclxuXHJcbiAgICBnZXQgcGlja2VyTW9tZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFtUGlja2VyTW9tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwaWNrZXJNb21lbnQodmFsdWU6IFQpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xhbVBpY2tlck1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNsYW1wRGF0ZShcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIubWluRGF0ZVRpbWUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5tYXhEYXRlVGltZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwaWNrZXJUeXBlKCk6IFBpY2tlclR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5waWNrZXJUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYW5jZWxMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwuY2FuY2VsQnRuTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNldExhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5zZXRCdG5MYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByYW5nZSAnZnJvbScgbGFiZWxcclxuICAgICAqICovXHJcbiAgICBnZXQgZnJvbUxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5yYW5nZUZyb21MYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByYW5nZSAndG8nIGxhYmVsXHJcbiAgICAgKiAqL1xyXG4gICAgZ2V0IHRvTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnJhbmdlVG9MYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByYW5nZSAnZnJvbScgZm9ybWF0dGVkIHZhbHVlXHJcbiAgICAgKiAqL1xyXG4gICAgZ2V0IGZyb21Gb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5waWNrZXIuc2VsZWN0ZWRzWzBdO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5waWNrZXIuZm9ybWF0U3RyaW5nKVxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJhbmdlICd0bycgZm9ybWF0dGVkIHZhbHVlXHJcbiAgICAgKiAqL1xyXG4gICAgZ2V0IHRvRm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGlja2VyLnNlbGVjdGVkc1sxXTtcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5mb3JtYXQodmFsdWUsIHRoaXMucGlja2VyLmZvcm1hdFN0cmluZylcclxuICAgICAgICAgICAgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhc2VzIGluIHdoaWNoIHRoZSBjb250cm9sIGJ1dHRvbnMgc2hvdyBpbiB0aGUgcGlja2VyXHJcbiAgICAgKiAxKSBwaWNrZXIgbW9kZSBpcyAnZGlhbG9nJ1xyXG4gICAgICogMikgcGlja2VyIHR5cGUgaXMgTk9UICdjYWxlbmRhcicgYW5kIHRoZSBwaWNrZXIgbW9kZSBpcyBOT1QgJ2lubGluZSdcclxuICAgICAqICovXHJcbiAgICBnZXQgc2hvd0NvbnRyb2xCdXR0b25zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdkaWFsb2cnIHx8XHJcbiAgICAgICAgICAgICh0aGlzLnBpY2tlci5waWNrZXJUeXBlICE9PSAnY2FsZW5kYXInICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5waWNrZXJNb2RlICE9PSAnaW5saW5lJylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb250YWluZXJFbG0oKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEVENvbnRhaW5lckNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEVFBvcHVwQ29udGFpbmVyQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdwb3B1cCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERURGlhbG9nQ29udGFpbmVyQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdkaWFsb2cnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEVElubGluZUNvbnRhaW5lckNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5waWNrZXJNb2RlID09PSAnaW5saW5lJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRDb250YWluZXJEaXNhYmxlZENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRDb250YWluZXJJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRDb250YWluZXJBbmltYXRpb24oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXIucGlja2VyTW9kZSA9PT0gJ2lubGluZScgPyAnJyA6ICdlbnRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIGVsbVJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBwaWNrZXJJbnRsOiBPd2xEYXRlVGltZUludGwsXHJcbiAgICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkYXRlVGltZUFkYXB0ZXI6IERhdGVUaW1lQWRhcHRlcjxUPiApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0UGlja2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZvY3VzUGlja2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUNvbnRhaW5lckFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdG9TdGF0ZSA9IGV2ZW50LnRvU3RhdGU7XHJcbiAgICAgICAgaWYgKHRvU3RhdGUgPT09ICdlbnRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrZXJPcGVuZWQkLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRhdGVTZWxlY3RlZChkYXRlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyLmlzSW5TaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGF0ZVNlbGVjdGVkSW5TaW5nbGVNb2RlKGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLnNlbGVjdChyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgY2xvc2UgdGhlIHBpY2tlciB3aGVuIHJlc3VsdCBpcyBudWxsIGFuZCBwaWNrZXJUeXBlIGlzIGNhbGVuZGFyLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGlja2VyVHlwZSA9PT0gJ2NhbGVuZGFyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlciQubmV4dChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5waWNrZXIuaXNJblJhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmRhdGVTZWxlY3RlZEluUmFuZ2VNb2RlKGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHJlc3VsdFt0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIuc2VsZWN0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpbWVTZWxlY3RlZCh0aW1lOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waWNrZXJNb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jbG9uZSh0aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBpY2tlci5kYXRlVGltZUNoZWNrZXIodGhpcy5waWNrZXJNb21lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBpY2tlci5pc0luU2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tlci5zZWxlY3QodGhpcy5waWNrZXJNb21lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5waWNrZXIuaXNJblJhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZHMgPSBbLi4udGhpcy5waWNrZXIuc2VsZWN0ZWRzXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSAnZnJvbScgaXMgYWZ0ZXIgJ3RvJyBvciAndG8naXMgYmVmb3JlICdmcm9tJ1xyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIHNldCBib3RoIHRoZSAnZnJvbScgYW5kICd0bycgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkc1sxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZHNbMV1cclxuICAgICAgICAgICAgICAgICAgICApID09PSAxKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZHNbMF1cclxuICAgICAgICAgICAgICAgICAgICApID09PSAtMSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZHNbMF0gPSB0aGlzLnBpY2tlck1vbWVudDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkc1sxXSA9IHRoaXMucGlja2VyTW9tZW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRzW3RoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleF0gPSB0aGlzLnBpY2tlck1vbWVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5waWNrZXIuc2VsZWN0KHNlbGVjdGVkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIGNhbmNlbCBidXR0b25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQ2FuY2VsQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaWRlUGlja2VyJC5uZXh0KG51bGwpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIHNldCBidXR0b25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uU2V0Q2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBpY2tlci5kYXRlVGltZUNoZWNrZXIodGhpcy5waWNrZXJNb21lbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlciQubmV4dChudWxsKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25maXJtU2VsZWN0ZWQkLm5leHQoZXZlbnQpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIGluZm9ybSByYWRpbyBncm91cFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlQ2xpY2tPbkluZm9Hcm91cChldmVudDogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIGluZm9ybSByYWRpbyBncm91cFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlS2V5ZG93bk9uSW5mb0dyb3VwKFxyXG4gICAgICAgIGV2ZW50OiBhbnksXHJcbiAgICAgICAgbmV4dDogYW55LFxyXG4gICAgICAgIGluZGV4OiBudW1iZXJcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgICAgIGNhc2UgUklHSFRfQVJST1c6XHJcbiAgICAgICAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgICAgIGNhc2UgTEVGVF9BUlJPVzpcclxuICAgICAgICAgICAgICAgIG5leHQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlU2VsZWN0ZWRJbmRleChpbmRleCA9PT0gMCA/IDEgOiAwKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTUEFDRTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlU2VsZWN0ZWRJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB2YWx1ZSBvZiBhY3RpdmVTZWxlY3RlZEluZGV4XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0QWN0aXZlU2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnBpY2tlci5zZWxlY3RNb2RlID09PSAncmFuZ2UnICYmXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMucGlja2VyLnNlbGVjdGVkc1t0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5waWNrZXIuc2VsZWN0ZWRzICYmIHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNsb25lKHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UGlja2VyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gdGhpcy5waWNrZXIuc3RhcnRBdCB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXggPSB0aGlzLnBpY2tlci5zZWxlY3RNb2RlID09PSAncmFuZ2VUbycgPyAxIDogMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBjYWxlbmRhciBkYXRlIGluIHNpbmdsZSBtb2RlLFxyXG4gICAgICogaXQgcmV0dXJucyBudWxsIHdoZW4gZGF0ZSBpcyBub3Qgc2VsZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGF0ZVNlbGVjdGVkSW5TaW5nbGVNb2RlKGRhdGU6IFQpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzU2FtZURheShkYXRlLCB0aGlzLnBpY2tlci5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVBbmRDaGVja0NhbGVuZGFyRGF0ZShkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBkYXRlcyBpbiByYW5nZSBNb2RlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGF0ZVNlbGVjdGVkSW5SYW5nZU1vZGUoZGF0ZTogVCk6IFRbXSB8IG51bGwge1xyXG4gICAgICAgIGxldCBmcm9tID0gdGhpcy5waWNrZXIuc2VsZWN0ZWRzWzBdO1xyXG4gICAgICAgIGxldCB0byA9IHRoaXMucGlja2VyLnNlbGVjdGVkc1sxXTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy51cGRhdGVBbmRDaGVja0NhbGVuZGFyRGF0ZShkYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgZ2l2ZW4gY2FsZW5kYXIgZGF5IGlzIGFmdGVyIG9yIGVxdWFsIHRvICdmcm9tJyxcclxuICAgICAgICAvLyBzZXQgdGhzIGdpdmVuIGRhdGUgYXMgJ3RvJ1xyXG4gICAgICAgIC8vIG90aGVyd2lzZSwgc2V0IGl0IGFzICdmcm9tJyBhbmQgc2V0ICd0bycgdG8gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLnBpY2tlci5zZWxlY3RNb2RlID09PSAncmFuZ2UnKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLnNlbGVjdGVkcyAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIuc2VsZWN0ZWRzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgIXRvICYmXHJcbiAgICAgICAgICAgICAgICBmcm9tICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMocmVzdWx0LCBmcm9tKSA+PSAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdG8gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZnJvbSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRvID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGlja2VyLnNlbGVjdE1vZGUgPT09ICdyYW5nZUZyb20nKSB7XHJcbiAgICAgICAgICAgIGZyb20gPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgZnJvbSB2YWx1ZSBpcyBhZnRlciB0aGUgdG8gdmFsdWUsIHNldCB0aGUgdG8gdmFsdWUgYXMgbnVsbFxyXG4gICAgICAgICAgICBpZiAodG8gJiYgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShmcm9tLCB0bykgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0byA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGlja2VyLnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJykge1xyXG4gICAgICAgICAgICB0byA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBmcm9tIHZhbHVlIGlzIGFmdGVyIHRoZSB0byB2YWx1ZSwgc2V0IHRoZSBmcm9tIHZhbHVlIGFzIG51bGxcclxuICAgICAgICAgICAgaWYgKGZyb20gJiYgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShmcm9tLCB0bykgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtmcm9tLCB0b107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGdpdmVuIGNhbGVuZGFyIGRhdGUncyB0aW1lIGFuZCBjaGVjayBpZiBpdCBpcyB2YWxpZFxyXG4gICAgICogQmVjYXVzZSB0aGUgY2FsZW5kYXIgZGF0ZSBoYXMgMDA6MDA6MDAgYXMgZGVmYXVsdCB0aW1lLCBpZiB0aGUgcGlja2VyIHR5cGUgaXMgJ2JvdGgnLFxyXG4gICAgICogd2UgbmVlZCB0byB1cGRhdGUgdGhlIGdpdmVuIGNhbGVuZGFyIGRhdGUncyB0aW1lIGJlZm9yZSBzZWxlY3RpbmcgaXQuXHJcbiAgICAgKiBpZiBpdCBpcyB2YWxpZCwgcmV0dXJuIHRoZSB1cGRhdGVkIGRhdGVUaW1lXHJcbiAgICAgKiBpZiBpdCBpcyBub3QgdmFsaWQsIHJldHVybiBudWxsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQW5kQ2hlY2tDYWxlbmRhckRhdGUoZGF0ZTogVCk6IFQge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBwaWNrZXIgaXMgJ2JvdGgnLCB1cGRhdGUgdGhlIGNhbGVuZGFyIGRhdGUncyB0aW1lIHZhbHVlXHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyLnBpY2tlclR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jcmVhdGVEYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcihkYXRlKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoKGRhdGUpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZShkYXRlKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldEhvdXJzKHRoaXMucGlja2VyTW9tZW50KSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1pbnV0ZXModGhpcy5waWNrZXJNb21lbnQpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0U2Vjb25kcyh0aGlzLnBpY2tlck1vbWVudClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xhbXBEYXRlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIubWluRGF0ZVRpbWUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5tYXhEYXRlVGltZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNsb25lKGRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgdGhlIHVwZGF0ZWQgZGF0ZVRpbWVcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXIuZGF0ZVRpbWVDaGVja2VyKHJlc3VsdCkgPyByZXN1bHQgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9jdXMgdG8gdGhlIHBpY2tlclxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgZm9jdXNQaWNrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBbY2RrVHJhcEZvY3VzXT1cInBpY2tlci5waWNrZXJNb2RlICE9PSAnaW5saW5lJ1wiXHJcbiAgICAgW0BmYWRlSW5QaWNrZXJdPVwicGlja2VyLnBpY2tlck1vZGUgPT09ICdpbmxpbmUnPyAnJyA6ICdlbnRlcidcIlxyXG4gICAgIGNsYXNzPVwib3dsLWR0LWNvbnRhaW5lci1pbm5lclwiPlxyXG5cclxuICAgIDxvd2wtZGF0ZS10aW1lLWNhbGVuZGFyXHJcbiAgICAgICAgICAgICpuZ0lmPVwicGlja2VyVHlwZSA9PT0gJ2JvdGgnIHx8IHBpY2tlclR5cGUgPT09ICdjYWxlbmRhcidcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIm93bC1kdC1jb250YWluZXItcm93XCJcclxuICAgICAgICAgICAgW2ZpcnN0RGF5T2ZXZWVrXT1cInBpY2tlci5maXJzdERheU9mV2Vla1wiXHJcbiAgICAgICAgICAgIFsocGlja2VyTW9tZW50KV09XCJwaWNrZXJNb21lbnRcIlxyXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwicGlja2VyLnNlbGVjdGVkXCJcclxuICAgICAgICAgICAgW3NlbGVjdGVkc109XCJwaWNrZXIuc2VsZWN0ZWRzXCJcclxuICAgICAgICAgICAgW3NlbGVjdE1vZGVdPVwicGlja2VyLnNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgICBbbWluRGF0ZV09XCJwaWNrZXIubWluRGF0ZVRpbWVcIlxyXG4gICAgICAgICAgICBbbWF4RGF0ZV09XCJwaWNrZXIubWF4RGF0ZVRpbWVcIlxyXG4gICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJwaWNrZXIuZGF0ZVRpbWVGaWx0ZXJcIlxyXG4gICAgICAgICAgICBbc3RhcnRWaWV3XT1cInBpY2tlci5zdGFydFZpZXdcIlxyXG4gICAgICAgICAgICBbaGlkZU90aGVyTW9udGhzXT1cInBpY2tlci5oaWRlT3RoZXJNb250aHNcIlxyXG4gICAgICAgICAgICAoeWVhclNlbGVjdGVkKT1cInBpY2tlci5zZWxlY3RZZWFyKCRldmVudClcIlxyXG4gICAgICAgICAgICAobW9udGhTZWxlY3RlZCk9XCJwaWNrZXIuc2VsZWN0TW9udGgoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJkYXRlU2VsZWN0ZWQoJGV2ZW50KVwiPjwvb3dsLWRhdGUtdGltZS1jYWxlbmRhcj5cclxuXHJcbiAgICA8b3dsLWRhdGUtdGltZS10aW1lclxyXG4gICAgICAgICAgICAqbmdJZj1cInBpY2tlclR5cGUgPT09ICdib3RoJyB8fCBwaWNrZXJUeXBlID09PSAndGltZXInXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJvd2wtZHQtY29udGFpbmVyLXJvd1wiXHJcbiAgICAgICAgICAgIFtwaWNrZXJNb21lbnRdPVwicGlja2VyTW9tZW50XCJcclxuICAgICAgICAgICAgW21pbkRhdGVUaW1lXT1cInBpY2tlci5taW5EYXRlVGltZVwiXHJcbiAgICAgICAgICAgIFttYXhEYXRlVGltZV09XCJwaWNrZXIubWF4RGF0ZVRpbWVcIlxyXG4gICAgICAgICAgICBbc2hvd1NlY29uZHNUaW1lcl09XCJwaWNrZXIuc2hvd1NlY29uZHNUaW1lclwiXHJcbiAgICAgICAgICAgIFtob3VyMTJUaW1lcl09XCJwaWNrZXIuaG91cjEyVGltZXJcIlxyXG4gICAgICAgICAgICBbc3RlcEhvdXJdPVwicGlja2VyLnN0ZXBIb3VyXCJcclxuICAgICAgICAgICAgW3N0ZXBNaW51dGVdPVwicGlja2VyLnN0ZXBNaW51dGVcIlxyXG4gICAgICAgICAgICBbc3RlcFNlY29uZF09XCJwaWNrZXIuc3RlcFNlY29uZFwiXHJcbiAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJ0aW1lU2VsZWN0ZWQoJGV2ZW50KVwiPjwvb3dsLWRhdGUtdGltZS10aW1lcj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwicGlja2VyLmlzSW5SYW5nZU1vZGVcIlxyXG4gICAgICAgICByb2xlPVwicmFkaW9ncm91cFwiXHJcbiAgICAgICAgIGNsYXNzPVwib3dsLWR0LWNvbnRhaW5lci1pbmZvIG93bC1kdC1jb250YWluZXItcm93XCI+XHJcbiAgICAgICAgPGRpdiByb2xlPVwicmFkaW9cIiBbdGFiaW5kZXhdPVwiYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMCA/IDAgOiAtMVwiXHJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMFwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cIm93bC1kdC1jb250cm9sIG93bC1kdC1jb250YWluZXItcmFuZ2Ugb3dsLWR0LWNvbnRhaW5lci1mcm9tXCJcclxuICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnb3dsLWR0LWNvbnRhaW5lci1pbmZvLWFjdGl2ZSc6IGFjdGl2ZVNlbGVjdGVkSW5kZXggPT09IDB9XCJcclxuICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVDbGlja09uSW5mb0dyb3VwKCRldmVudCwgMClcIlxyXG4gICAgICAgICAgICAgKGtleWRvd24pPVwiaGFuZGxlS2V5ZG93bk9uSW5mb0dyb3VwKCRldmVudCwgdG8sIDApXCIgI2Zyb20+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtY29udGVudCBvd2wtZHQtY29udGFpbmVyLXJhbmdlLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250YWluZXItaW5mby1sYWJlbFwiPnt7ZnJvbUxhYmVsfX06PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udGFpbmVyLWluZm8tdmFsdWVcIj57e2Zyb21Gb3JtYXR0ZWRWYWx1ZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiByb2xlPVwicmFkaW9cIiBbdGFiaW5kZXhdPVwiYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMSA/IDAgOiAtMVwiXHJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMVwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cIm93bC1kdC1jb250cm9sIG93bC1kdC1jb250YWluZXItcmFuZ2Ugb3dsLWR0LWNvbnRhaW5lci10b1wiXHJcbiAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J293bC1kdC1jb250YWluZXItaW5mby1hY3RpdmUnOiBhY3RpdmVTZWxlY3RlZEluZGV4ID09PSAxfVwiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2tPbkluZm9Hcm91cCgkZXZlbnQsIDEpXCJcclxuICAgICAgICAgICAgIChrZXlkb3duKT1cImhhbmRsZUtleWRvd25PbkluZm9Hcm91cCgkZXZlbnQsIGZyb20sIDEpXCIgI3RvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWNvbnRlbnQgb3dsLWR0LWNvbnRhaW5lci1yYW5nZS1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udGFpbmVyLWluZm8tbGFiZWxcIj57e3RvTGFiZWx9fTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250YWluZXItaW5mby12YWx1ZVwiPnt7dG9Gb3JtYXR0ZWRWYWx1ZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd0NvbnRyb2xCdXR0b25zXCIgY2xhc3M9XCJvd2wtZHQtY29udGFpbmVyLWJ1dHRvbnMgb3dsLWR0LWNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wgb3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC1jb250YWluZXItY29udHJvbC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DYW5jZWxDbGlja2VkKCRldmVudClcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1jb250ZW50IG93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgICAge3tjYW5jZWxMYWJlbH19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wgb3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC1jb250YWluZXItY29udHJvbC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TZXRDbGlja2VkKCRldmVudClcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1jb250ZW50IG93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgICAge3tzZXRMYWJlbH19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19