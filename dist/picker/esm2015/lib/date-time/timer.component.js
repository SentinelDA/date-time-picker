/**
 * timer.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Optional, Output } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./date-time-picker-intl.service";
import * as i2 from "./adapter/date-time-adapter.class";
import * as i3 from "./timer-box.component";
import * as i4 from "@angular/common";
function OwlTimerComponent_owl_date_time_timer_box_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-timer-box", 1);
    i0.ɵɵlistener("inputChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_inputChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.setSecondValue($event); })("valueChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.setSecondValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showDivider", true)("upBtnAriaLabel", ctx_r17.upSecondButtonLabel)("downBtnAriaLabel", ctx_r17.downSecondButtonLabel)("upBtnDisabled", !ctx_r17.upSecondEnabled())("downBtnDisabled", !ctx_r17.downSecondEnabled())("value", ctx_r17.secondValue)("min", 0)("max", 59)("step", ctx_r17.stepSecond)("inputLabel", "Second");
} }
function OwlTimerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function OwlTimerComponent_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.setMeridiem($event); });
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.hour12ButtonLabel, " ");
} }
export class OwlTimerComponent {
    constructor(ngZone, elmRef, pickerIntl, cdRef, dateTimeAdapter) {
        this.ngZone = ngZone;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.isPM = false; // a flag indicates the current timer moment is in PM or AM
        /**
         * Hours to change per step
         */
        this.stepHour = 1;
        /**
         * Minutes to change per step
         */
        this.stepMinute = 1;
        /**
         * Seconds to change per step
         */
        this.stepSecond = 1;
        this.selectedChange = new EventEmitter();
    }
    get pickerMoment() {
        return this._pickerMoment;
    }
    set pickerMoment(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment =
            this.getValidDate(value) || this.dateTimeAdapter.now();
    }
    get minDateTime() {
        return this._minDateTime;
    }
    set minDateTime(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._minDateTime = this.getValidDate(value);
    }
    get maxDateTime() {
        return this._maxDateTime;
    }
    set maxDateTime(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._maxDateTime = this.getValidDate(value);
    }
    get hourValue() {
        return this.dateTimeAdapter.getHours(this.pickerMoment);
    }
    /**
     * The value would be displayed in hourBox.
     * We need this because the value displayed in hourBox it not
     * the same as the hourValue when the timer is in hour12Timer mode.
     * */
    get hourBoxValue() {
        let hours = this.hourValue;
        if (!this.hour12Timer) {
            return hours;
        }
        else {
            if (hours === 0) {
                hours = 12;
                this.isPM = false;
            }
            else if (hours > 0 && hours < 12) {
                this.isPM = false;
            }
            else if (hours === 12) {
                this.isPM = true;
            }
            else if (hours > 12 && hours < 24) {
                hours = hours - 12;
                this.isPM = true;
            }
            return hours;
        }
    }
    get minuteValue() {
        return this.dateTimeAdapter.getMinutes(this.pickerMoment);
    }
    get secondValue() {
        return this.dateTimeAdapter.getSeconds(this.pickerMoment);
    }
    get upHourButtonLabel() {
        return this.pickerIntl.upHourLabel;
    }
    get downHourButtonLabel() {
        return this.pickerIntl.downHourLabel;
    }
    get upMinuteButtonLabel() {
        return this.pickerIntl.upMinuteLabel;
    }
    get downMinuteButtonLabel() {
        return this.pickerIntl.downMinuteLabel;
    }
    get upSecondButtonLabel() {
        return this.pickerIntl.upSecondLabel;
    }
    get downSecondButtonLabel() {
        return this.pickerIntl.downSecondLabel;
    }
    get hour12ButtonLabel() {
        return this.isPM
            ? this.pickerIntl.hour12PMLabel
            : this.pickerIntl.hour12AMLabel;
    }
    get owlDTTimerClass() {
        return true;
    }
    get owlDTTimeTabIndex() {
        return -1;
    }
    ngOnInit() { }
    /**
     * Focus to the host element
     * */
    focus() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(() => {
                this.elmRef.nativeElement.focus();
            });
        });
    }
    /**
     * Set the hour value via typing into timer box input
     * We need this to handle the hour value when the timer is in hour12 mode
     * */
    setHourValueViaInput(hours) {
        if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
            hours = hours + 12;
        }
        else if (this.hour12Timer && !this.isPM && hours === 12) {
            hours = 0;
        }
        this.setHourValue(hours);
    }
    setHourValue(hours) {
        const m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    setMinuteValue(minutes) {
        const m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    setSecondValue(seconds) {
        const m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    setMeridiem(event) {
        this.isPM = !this.isPM;
        let hours = this.hourValue;
        if (this.isPM) {
            hours = hours + 12;
        }
        else {
            hours = hours - 12;
        }
        if (hours >= 0 && hours <= 23) {
            this.setHourValue(hours);
        }
        this.cdRef.markForCheck();
        event.preventDefault();
    }
    /**
     * Check if the up hour button is enabled
     */
    upHourEnabled() {
        return (!this.maxDateTime ||
            this.compareHours(this.stepHour, this.maxDateTime) < 1);
    }
    /**
     * Check if the down hour button is enabled
     */
    downHourEnabled() {
        return (!this.minDateTime ||
            this.compareHours(-this.stepHour, this.minDateTime) > -1);
    }
    /**
     * Check if the up minute button is enabled
     */
    upMinuteEnabled() {
        return (!this.maxDateTime ||
            this.compareMinutes(this.stepMinute, this.maxDateTime) < 1);
    }
    /**
     * Check if the down minute button is enabled
     */
    downMinuteEnabled() {
        return (!this.minDateTime ||
            this.compareMinutes(-this.stepMinute, this.minDateTime) > -1);
    }
    /**
     * Check if the up second button is enabled
     */
    upSecondEnabled() {
        return (!this.maxDateTime ||
            this.compareSeconds(this.stepSecond, this.maxDateTime) < 1);
    }
    /**
     * Check if the down second button is enabled
     */
    downSecondEnabled() {
        return (!this.minDateTime ||
            this.compareSeconds(-this.stepSecond, this.minDateTime) > -1);
    }
    /**
     * PickerMoment's hour value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    compareHours(amount, comparedDate) {
        const hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
        const result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * PickerMoment's minute value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    compareMinutes(amount, comparedDate) {
        const minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
        const result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * PickerMoment's second value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    compareSeconds(amount, comparedDate) {
        const seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
        const result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        return this.dateTimeAdapter.compare(result, comparedDate);
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
OwlTimerComponent.ɵfac = function OwlTimerComponent_Factory(t) { return new (t || OwlTimerComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.OwlDateTimeIntl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DateTimeAdapter, 8)); };
OwlTimerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlTimerComponent, selectors: [["owl-date-time-timer"]], hostVars: 3, hostBindings: function OwlTimerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.owlDTTimeTabIndex);
        i0.ɵɵclassProp("owl-dt-timer", ctx.owlDTTimerClass);
    } }, inputs: { pickerMoment: "pickerMoment", minDateTime: "minDateTime", maxDateTime: "maxDateTime", showSecondsTimer: "showSecondsTimer", hour12Timer: "hour12Timer", stepHour: "stepHour", stepMinute: "stepMinute", stepSecond: "stepSecond" }, outputs: { selectedChange: "selectedChange" }, exportAs: ["owlDateTimeTimer"], decls: 4, vars: 22, consts: [[3, "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "boxValue", "value", "min", "max", "step", "inputLabel", "inputChange", "valueChange"], [3, "showDivider", "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "value", "min", "max", "step", "inputLabel", "inputChange", "valueChange"], [3, "showDivider", "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "value", "min", "max", "step", "inputLabel", "inputChange", "valueChange", 4, "ngIf"], ["class", "owl-dt-timer-hour12", 4, "ngIf"], [1, "owl-dt-timer-hour12"], ["type", "button", "tabindex", "0", 1, "owl-dt-control-button", "owl-dt-timer-hour12-box", 3, "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"]], template: function OwlTimerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "owl-date-time-timer-box", 0);
        i0.ɵɵlistener("inputChange", function OwlTimerComponent_Template_owl_date_time_timer_box_inputChange_0_listener($event) { return ctx.setHourValueViaInput($event); })("valueChange", function OwlTimerComponent_Template_owl_date_time_timer_box_valueChange_0_listener($event) { return ctx.setHourValue($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "owl-date-time-timer-box", 1);
        i0.ɵɵlistener("inputChange", function OwlTimerComponent_Template_owl_date_time_timer_box_inputChange_1_listener($event) { return ctx.setMinuteValue($event); })("valueChange", function OwlTimerComponent_Template_owl_date_time_timer_box_valueChange_1_listener($event) { return ctx.setMinuteValue($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, OwlTimerComponent_owl_date_time_timer_box_2_Template, 1, 10, "owl-date-time-timer-box", 2);
        i0.ɵɵtemplate(3, OwlTimerComponent_div_3_Template, 4, 1, "div", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("upBtnAriaLabel", ctx.upHourButtonLabel)("downBtnAriaLabel", ctx.downHourButtonLabel)("upBtnDisabled", !ctx.upHourEnabled())("downBtnDisabled", !ctx.downHourEnabled())("boxValue", ctx.hourBoxValue)("value", ctx.hourValue)("min", 0)("max", 23)("step", ctx.stepHour)("inputLabel", "Hour");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("showDivider", true)("upBtnAriaLabel", ctx.upMinuteButtonLabel)("downBtnAriaLabel", ctx.downMinuteButtonLabel)("upBtnDisabled", !ctx.upMinuteEnabled())("downBtnDisabled", !ctx.downMinuteEnabled())("value", ctx.minuteValue)("min", 0)("max", 59)("step", ctx.stepMinute)("inputLabel", "Minute");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSecondsTimer);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hour12Timer);
    } }, directives: [i3.OwlTimerBoxComponent, i4.NgIf], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlTimerComponent, [{
        type: Component,
        args: [{
                exportAs: 'owlDateTimeTimer',
                selector: 'owl-date-time-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.scss'],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.owl-dt-timer]': 'owlDTTimerClass',
                    '[attr.tabindex]': 'owlDTTimeTabIndex'
                }
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i1.OwlDateTimeIntl }, { type: i0.ChangeDetectorRef }, { type: i2.DateTimeAdapter, decorators: [{
                type: Optional
            }] }]; }, { pickerMoment: [{
            type: Input
        }], minDateTime: [{
            type: Input
        }], maxDateTime: [{
            type: Input
        }], showSecondsTimer: [{
            type: Input
        }], hour12Timer: [{
            type: Input
        }], stepHour: [{
            type: Input
        }], stepMinute: [{
            type: Input
        }], stepSecond: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvdGltZXIuY29tcG9uZW50LnRzIiwibGliL2RhdGUtdGltZS90aW1lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNFdEMsa0RBVXlFO0lBRGpFLHlQQUFzQyw0T0FBQTtJQUNDLGlCQUEwQjs7O0lBUmpFLGtDQUFvQiwrQ0FBQSxtREFBQSw2Q0FBQSxpREFBQSw4QkFBQSxVQUFBLFdBQUEsNEJBQUEsd0JBQUE7Ozs7SUFVNUIsOEJBQ0k7SUFBQSxpQ0FHSTtJQURJLHFNQUE2QjtJQUNqQywrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTztJQUNYLGlCQUFTO0lBQ2IsaUJBQU07OztJQUhNLGVBQ0o7SUFESSwwREFDSjs7QUROUixNQUFNLE9BQU8saUJBQWlCO0lBc0oxQixZQUNZLE1BQWMsRUFDZCxNQUFrQixFQUNsQixVQUEyQixFQUMzQixLQUF3QixFQUNaLGVBQW1DO1FBSi9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ1osb0JBQWUsR0FBZixlQUFlLENB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LFVBQUEsV0FBQSxzQkFBQSxzQkFBQTtRQVVwQyxlQUFvQjtRQUFwQixrQ0FBb0IsMkNBQUEsK0NBQUEseUNBQUEsNkNBQUEsMEJBQUEsVUFBQSxXQUFBLHdCQUFBLHdCQUFBO1FBVXBCLGVBQXdCO1FBQXhCLDJDQUF3QjtRQVczQixlQUFtQjtRQUFuQixzQ0FBbUI7O2tEREFYLGlCQUFpQjtjQVo3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0Ysc0JBQXNCLEVBQUUsaUJBQWlCO29CQUN6QyxpQkFBaUIsRUFBRSxtQkFBbUI7aUJBQ3pDO2FBQ0o7O3NCQTRKUSxRQUFROztrQkF4SlosS0FBSzs7a0JBYUwsS0FBSzs7a0JBWUwsS0FBSzs7a0JBZUwsS0FBSzs7a0JBTUwsS0FBSzs7a0JBTUwsS0FBSzs7a0JBTUwsS0FBSzs7a0JBTUwsS0FBSzs7a0JBd0VMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogdGltZXIuY29tcG9uZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPcHRpb25hbCxcclxuICAgIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZUludGwgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItaW50bC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZXhwb3J0QXM6ICdvd2xEYXRlVGltZVRpbWVyJyxcclxuICAgIHNlbGVjdG9yOiAnb3dsLWRhdGUtdGltZS10aW1lcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGltZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtdGltZXJdJzogJ293bERUVGltZXJDbGFzcycsXHJcbiAgICAgICAgJ1thdHRyLnRhYmluZGV4XSc6ICdvd2xEVFRpbWVUYWJJbmRleCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE93bFRpbWVyQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8qKiBUaGUgY3VycmVudCBwaWNrZXIgbW9tZW50ICovXHJcbiAgICBwcml2YXRlIF9waWNrZXJNb21lbnQ6IFQ7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHBpY2tlck1vbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGlja2VyTW9tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwaWNrZXJNb21lbnQodmFsdWU6IFQpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9waWNrZXJNb21lbnQgPVxyXG4gICAgICAgICAgICB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSkgfHwgdGhpcy5kYXRlVGltZUFkYXB0ZXIubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZSB0aW1lLiAqL1xyXG4gICAgcHJpdmF0ZSBfbWluRGF0ZVRpbWU6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW5EYXRlVGltZSgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGVUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtaW5EYXRlVGltZSh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9taW5EYXRlVGltZSA9IHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlIHRpbWUuICovXHJcbiAgICBwcml2YXRlIF9tYXhEYXRlVGltZTogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1heERhdGVUaW1lKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZVRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1heERhdGVUaW1lKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX21heERhdGVUaW1lID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNQTTogYm9vbGVhbiA9IGZhbHNlOyAvLyBhIGZsYWcgaW5kaWNhdGVzIHRoZSBjdXJyZW50IHRpbWVyIG1vbWVudCBpcyBpbiBQTSBvciBBTVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBzaG93IHRoZSBzZWNvbmQncyB0aW1lclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2hvd1NlY29uZHNUaW1lcjogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIHRpbWVyIGlzIGluIGhvdXIxMiBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGhvdXIxMlRpbWVyOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG91cnMgdG8gY2hhbmdlIHBlciBzdGVwXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzdGVwSG91ciA9IDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNaW51dGVzIHRvIGNoYW5nZSBwZXIgc3RlcFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc3RlcE1pbnV0ZSA9IDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWNvbmRzIHRvIGNoYW5nZSBwZXIgc3RlcFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc3RlcFNlY29uZCA9IDE7XHJcblxyXG4gICAgZ2V0IGhvdXJWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRIb3Vycyh0aGlzLnBpY2tlck1vbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmFsdWUgd291bGQgYmUgZGlzcGxheWVkIGluIGhvdXJCb3guXHJcbiAgICAgKiBXZSBuZWVkIHRoaXMgYmVjYXVzZSB0aGUgdmFsdWUgZGlzcGxheWVkIGluIGhvdXJCb3ggaXQgbm90XHJcbiAgICAgKiB0aGUgc2FtZSBhcyB0aGUgaG91clZhbHVlIHdoZW4gdGhlIHRpbWVyIGlzIGluIGhvdXIxMlRpbWVyIG1vZGUuXHJcbiAgICAgKiAqL1xyXG4gICAgZ2V0IGhvdXJCb3hWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBob3VycyA9IHRoaXMuaG91clZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaG91cjEyVGltZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhvdXJzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChob3VycyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaG91cnMgPSAxMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQTSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXJzID4gMCAmJiBob3VycyA8IDEyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUE0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VycyA9PT0gMTIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQTSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPiAxMiAmJiBob3VycyA8IDI0KSB7XHJcbiAgICAgICAgICAgICAgICBob3VycyA9IGhvdXJzIC0gMTI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUE0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaG91cnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtaW51dGVWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNaW51dGVzKHRoaXMucGlja2VyTW9tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Vjb25kVmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0U2Vjb25kcyh0aGlzLnBpY2tlck1vbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVwSG91ckJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC51cEhvdXJMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZG93bkhvdXJCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwuZG93bkhvdXJMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXBNaW51dGVCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwudXBNaW51dGVMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZG93bk1pbnV0ZUJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5kb3duTWludXRlTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVwU2Vjb25kQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnVwU2Vjb25kTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRvd25TZWNvbmRCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwuZG93blNlY29uZExhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3VyMTJCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUE1cclxuICAgICAgICAgICAgPyB0aGlzLnBpY2tlckludGwuaG91cjEyUE1MYWJlbFxyXG4gICAgICAgICAgICA6IHRoaXMucGlja2VySW50bC5ob3VyMTJBTUxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gICAgZ2V0IG93bERUVGltZXJDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRUaW1lVGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIGVsbVJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHBpY2tlckludGw6IE93bERhdGVUaW1lSW50bCxcclxuICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVUaW1lQWRhcHRlcjogRGF0ZVRpbWVBZGFwdGVyPFQ+XHJcbiAgICApIHt9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvY3VzIHRvIHRoZSBob3N0IGVsZW1lbnRcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgZm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZVxyXG4gICAgICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGhvdXIgdmFsdWUgdmlhIHR5cGluZyBpbnRvIHRpbWVyIGJveCBpbnB1dFxyXG4gICAgICogV2UgbmVlZCB0aGlzIHRvIGhhbmRsZSB0aGUgaG91ciB2YWx1ZSB3aGVuIHRoZSB0aW1lciBpcyBpbiBob3VyMTIgbW9kZVxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBzZXRIb3VyVmFsdWVWaWFJbnB1dChob3VyczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG91cjEyVGltZXIgJiYgdGhpcy5pc1BNICYmIGhvdXJzID49IDEgJiYgaG91cnMgPD0gMTEpIHtcclxuICAgICAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ob3VyMTJUaW1lciAmJiAhdGhpcy5pc1BNICYmIGhvdXJzID09PSAxMikge1xyXG4gICAgICAgICAgICBob3VycyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEhvdXJWYWx1ZShob3Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhvdXJWYWx1ZShob3VyczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLnNldEhvdXJzKHRoaXMucGlja2VyTW9tZW50LCBob3Vycyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KG0pO1xyXG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1pbnV0ZVZhbHVlKG1pbnV0ZXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5zZXRNaW51dGVzKHRoaXMucGlja2VyTW9tZW50LCBtaW51dGVzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQobSk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2Vjb25kVmFsdWUoc2Vjb25kczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLnNldFNlY29uZHModGhpcy5waWNrZXJNb21lbnQsIHNlY29uZHMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChtKTtcclxuICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNZXJpZGllbShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc1BNID0gIXRoaXMuaXNQTTtcclxuXHJcbiAgICAgICAgbGV0IGhvdXJzID0gdGhpcy5ob3VyVmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQTSkge1xyXG4gICAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaG91cnMgPSBob3VycyAtIDEyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhvdXJzID49IDAgJiYgaG91cnMgPD0gMjMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3VyVmFsdWUoaG91cnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIHVwIGhvdXIgYnV0dG9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwSG91ckVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWF4RGF0ZVRpbWUgfHxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlSG91cnModGhpcy5zdGVwSG91ciwgdGhpcy5tYXhEYXRlVGltZSkgPCAxXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBkb3duIGhvdXIgYnV0dG9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvd25Ib3VyRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5taW5EYXRlVGltZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVIb3VycygtdGhpcy5zdGVwSG91ciwgdGhpcy5taW5EYXRlVGltZSkgPiAtMVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgdXAgbWludXRlIGJ1dHRvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cE1pbnV0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWF4RGF0ZVRpbWUgfHxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlTWludXRlcyh0aGlzLnN0ZXBNaW51dGUsIHRoaXMubWF4RGF0ZVRpbWUpIDwgMVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZG93biBtaW51dGUgYnV0dG9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvd25NaW51dGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLm1pbkRhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZU1pbnV0ZXMoLXRoaXMuc3RlcE1pbnV0ZSwgdGhpcy5taW5EYXRlVGltZSkgPiAtMVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgdXAgc2Vjb25kIGJ1dHRvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cFNlY29uZEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWF4RGF0ZVRpbWUgfHxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlU2Vjb25kcyh0aGlzLnN0ZXBTZWNvbmQsIHRoaXMubWF4RGF0ZVRpbWUpIDwgMVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZG93biBzZWNvbmQgYnV0dG9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvd25TZWNvbmRFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLm1pbkRhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZVNlY29uZHMoLXRoaXMuc3RlcFNlY29uZCwgdGhpcy5taW5EYXRlVGltZSkgPiAtMVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrZXJNb21lbnQncyBob3VyIHZhbHVlICsvLSBjZXJ0YWluIGFtb3VudCBhbmQgY29tcGFyZSBpdCB0byB0aGUgZ2l2ZSBkYXRlXHJcbiAgICAgKiAxIGlzIGFmdGVyIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqIC0xIGlzIGJlZm9yZSB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAwIGlzIGVxdWFsIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIGNvbXBhcmVIb3VycyhhbW91bnQ6IG51bWJlciwgY29tcGFyZWREYXRlOiBUKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBob3VycyA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldEhvdXJzKHRoaXMucGlja2VyTW9tZW50KSArIGFtb3VudDtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5zZXRIb3Vycyh0aGlzLnBpY2tlck1vbWVudCwgaG91cnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKHJlc3VsdCwgY29tcGFyZWREYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBpY2tlck1vbWVudCdzIG1pbnV0ZSB2YWx1ZSArLy0gY2VydGFpbiBhbW91bnQgYW5kIGNvbXBhcmUgaXQgdG8gdGhlIGdpdmUgZGF0ZVxyXG4gICAgICogMSBpcyBhZnRlciB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAtMSBpcyBiZWZvcmUgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogMCBpcyBlcXVhbCB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBjb21wYXJlTWludXRlcyhhbW91bnQ6IG51bWJlciwgY29tcGFyZWREYXRlOiBUKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBtaW51dGVzID1cclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TWludXRlcyh0aGlzLnBpY2tlck1vbWVudCkgKyBhbW91bnQ7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuc2V0TWludXRlcyhcclxuICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgIG1pbnV0ZXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKHJlc3VsdCwgY29tcGFyZWREYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBpY2tlck1vbWVudCdzIHNlY29uZCB2YWx1ZSArLy0gY2VydGFpbiBhbW91bnQgYW5kIGNvbXBhcmUgaXQgdG8gdGhlIGdpdmUgZGF0ZVxyXG4gICAgICogMSBpcyBhZnRlciB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAtMSBpcyBiZWZvcmUgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogMCBpcyBlcXVhbCB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBjb21wYXJlU2Vjb25kcyhhbW91bnQ6IG51bWJlciwgY29tcGFyZWREYXRlOiBUKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID1cclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0U2Vjb25kcyh0aGlzLnBpY2tlck1vbWVudCkgKyBhbW91bnQ7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuc2V0U2Vjb25kcyhcclxuICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQsXHJcbiAgICAgICAgICAgIHNlY29uZHNcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKHJlc3VsdCwgY29tcGFyZWREYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHZhbGlkIGRhdGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VmFsaWREYXRlKG9iajogYW55KTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc0RhdGVJbnN0YW5jZShvYmopICYmXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzVmFsaWQob2JqKVxyXG4gICAgICAgICAgICA/IG9ialxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiPG93bC1kYXRlLXRpbWUtdGltZXItYm94XHJcbiAgICAgICAgW3VwQnRuQXJpYUxhYmVsXT1cInVwSG91ckJ1dHRvbkxhYmVsXCJcclxuICAgICAgICBbZG93bkJ0bkFyaWFMYWJlbF09XCJkb3duSG91ckJ1dHRvbkxhYmVsXCJcclxuICAgICAgICBbdXBCdG5EaXNhYmxlZF09XCIhdXBIb3VyRW5hYmxlZCgpXCJcclxuICAgICAgICBbZG93bkJ0bkRpc2FibGVkXT1cIiFkb3duSG91ckVuYWJsZWQoKVwiXHJcbiAgICAgICAgW2JveFZhbHVlXT1cImhvdXJCb3hWYWx1ZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cImhvdXJWYWx1ZVwiIFttaW5dPVwiMFwiIFttYXhdPVwiMjNcIlxyXG4gICAgICAgIFtzdGVwXT1cInN0ZXBIb3VyXCIgW2lucHV0TGFiZWxdPVwiJ0hvdXInXCJcclxuICAgICAgICAoaW5wdXRDaGFuZ2UpPVwic2V0SG91clZhbHVlVmlhSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cInNldEhvdXJWYWx1ZSgkZXZlbnQpXCI+PC9vd2wtZGF0ZS10aW1lLXRpbWVyLWJveD5cclxuPG93bC1kYXRlLXRpbWUtdGltZXItYm94XHJcbiAgICAgICAgW3Nob3dEaXZpZGVyXT1cInRydWVcIlxyXG4gICAgICAgIFt1cEJ0bkFyaWFMYWJlbF09XCJ1cE1pbnV0ZUJ1dHRvbkxhYmVsXCJcclxuICAgICAgICBbZG93bkJ0bkFyaWFMYWJlbF09XCJkb3duTWludXRlQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgIFt1cEJ0bkRpc2FibGVkXT1cIiF1cE1pbnV0ZUVuYWJsZWQoKVwiXHJcbiAgICAgICAgW2Rvd25CdG5EaXNhYmxlZF09XCIhZG93bk1pbnV0ZUVuYWJsZWQoKVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cIm1pbnV0ZVZhbHVlXCIgW21pbl09XCIwXCIgW21heF09XCI1OVwiXHJcbiAgICAgICAgW3N0ZXBdPVwic3RlcE1pbnV0ZVwiIFtpbnB1dExhYmVsXT1cIidNaW51dGUnXCJcclxuICAgICAgICAoaW5wdXRDaGFuZ2UpPVwic2V0TWludXRlVmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cInNldE1pbnV0ZVZhbHVlKCRldmVudClcIj48L293bC1kYXRlLXRpbWUtdGltZXItYm94PlxyXG48b3dsLWRhdGUtdGltZS10aW1lci1ib3hcclxuICAgICAgICAqbmdJZj1cInNob3dTZWNvbmRzVGltZXJcIlxyXG4gICAgICAgIFtzaG93RGl2aWRlcl09XCJ0cnVlXCJcclxuICAgICAgICBbdXBCdG5BcmlhTGFiZWxdPVwidXBTZWNvbmRCdXR0b25MYWJlbFwiXHJcbiAgICAgICAgW2Rvd25CdG5BcmlhTGFiZWxdPVwiZG93blNlY29uZEJ1dHRvbkxhYmVsXCJcclxuICAgICAgICBbdXBCdG5EaXNhYmxlZF09XCIhdXBTZWNvbmRFbmFibGVkKClcIlxyXG4gICAgICAgIFtkb3duQnRuRGlzYWJsZWRdPVwiIWRvd25TZWNvbmRFbmFibGVkKClcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJzZWNvbmRWYWx1ZVwiIFttaW5dPVwiMFwiIFttYXhdPVwiNTlcIlxyXG4gICAgICAgIFtzdGVwXT1cInN0ZXBTZWNvbmRcIiBbaW5wdXRMYWJlbF09XCInU2Vjb25kJ1wiXHJcbiAgICAgICAgKGlucHV0Q2hhbmdlKT1cInNldFNlY29uZFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICh2YWx1ZUNoYW5nZSk9XCJzZXRTZWNvbmRWYWx1ZSgkZXZlbnQpXCI+PC9vd2wtZGF0ZS10aW1lLXRpbWVyLWJveD5cclxuXHJcbjxkaXYgKm5nSWY9XCJob3VyMTJUaW1lclwiIGNsYXNzPVwib3dsLWR0LXRpbWVyLWhvdXIxMlwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbiBvd2wtZHQtdGltZXItaG91cjEyLWJveFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0TWVyaWRpZW0oJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgIHt7aG91cjEyQnV0dG9uTGFiZWx9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19