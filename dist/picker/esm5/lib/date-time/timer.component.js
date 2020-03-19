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
    var _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "owl-date-time-timer-box", 1);
    i0.ɵɵlistener("inputChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_inputChange_0_listener($event) { i0.ɵɵrestoreView(_r80); var ctx_r79 = i0.ɵɵnextContext(); return ctx_r79.setSecondValue($event); })("valueChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r80); var ctx_r81 = i0.ɵɵnextContext(); return ctx_r81.setSecondValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r77 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showDivider", true)("upBtnAriaLabel", ctx_r77.upSecondButtonLabel)("downBtnAriaLabel", ctx_r77.downSecondButtonLabel)("upBtnDisabled", !ctx_r77.upSecondEnabled())("downBtnDisabled", !ctx_r77.downSecondEnabled())("value", ctx_r77.secondValue)("min", 0)("max", 59)("step", ctx_r77.stepSecond)("inputLabel", "Second");
} }
function OwlTimerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function OwlTimerComponent_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r83); var ctx_r82 = i0.ɵɵnextContext(); return ctx_r82.setMeridiem($event); });
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r78 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r78.hour12ButtonLabel, " ");
} }
var OwlTimerComponent = /** @class */ (function () {
    function OwlTimerComponent(ngZone, elmRef, pickerIntl, cdRef, dateTimeAdapter) {
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
    Object.defineProperty(OwlTimerComponent.prototype, "pickerMoment", {
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
    Object.defineProperty(OwlTimerComponent.prototype, "minDateTime", {
        get: function () {
            return this._minDateTime;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._minDateTime = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "maxDateTime", {
        get: function () {
            return this._maxDateTime;
        },
        set: function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            this._maxDateTime = this.getValidDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "hourValue", {
        get: function () {
            return this.dateTimeAdapter.getHours(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "hourBoxValue", {
        /**
         * The value would be displayed in hourBox.
         * We need this because the value displayed in hourBox it not
         * the same as the hourValue when the timer is in hour12Timer mode.
         * */
        get: function () {
            var hours = this.hourValue;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "minuteValue", {
        get: function () {
            return this.dateTimeAdapter.getMinutes(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "secondValue", {
        get: function () {
            return this.dateTimeAdapter.getSeconds(this.pickerMoment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "upHourButtonLabel", {
        get: function () {
            return this.pickerIntl.upHourLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "downHourButtonLabel", {
        get: function () {
            return this.pickerIntl.downHourLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "upMinuteButtonLabel", {
        get: function () {
            return this.pickerIntl.upMinuteLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "downMinuteButtonLabel", {
        get: function () {
            return this.pickerIntl.downMinuteLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "upSecondButtonLabel", {
        get: function () {
            return this.pickerIntl.upSecondLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "downSecondButtonLabel", {
        get: function () {
            return this.pickerIntl.downSecondLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "hour12ButtonLabel", {
        get: function () {
            return this.isPM
                ? this.pickerIntl.hour12PMLabel
                : this.pickerIntl.hour12AMLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "owlDTTimerClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerComponent.prototype, "owlDTTimeTabIndex", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    OwlTimerComponent.prototype.ngOnInit = function () { };
    /**
     * Focus to the host element
     * */
    OwlTimerComponent.prototype.focus = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(function () {
                _this.elmRef.nativeElement.focus();
            });
        });
    };
    /**
     * Set the hour value via typing into timer box input
     * We need this to handle the hour value when the timer is in hour12 mode
     * */
    OwlTimerComponent.prototype.setHourValueViaInput = function (hours) {
        if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
            hours = hours + 12;
        }
        else if (this.hour12Timer && !this.isPM && hours === 12) {
            hours = 0;
        }
        this.setHourValue(hours);
    };
    OwlTimerComponent.prototype.setHourValue = function (hours) {
        var m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    };
    OwlTimerComponent.prototype.setMinuteValue = function (minutes) {
        var m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    };
    OwlTimerComponent.prototype.setSecondValue = function (seconds) {
        var m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    };
    OwlTimerComponent.prototype.setMeridiem = function (event) {
        this.isPM = !this.isPM;
        var hours = this.hourValue;
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
    };
    /**
     * Check if the up hour button is enabled
     */
    OwlTimerComponent.prototype.upHourEnabled = function () {
        return (!this.maxDateTime ||
            this.compareHours(this.stepHour, this.maxDateTime) < 1);
    };
    /**
     * Check if the down hour button is enabled
     */
    OwlTimerComponent.prototype.downHourEnabled = function () {
        return (!this.minDateTime ||
            this.compareHours(-this.stepHour, this.minDateTime) > -1);
    };
    /**
     * Check if the up minute button is enabled
     */
    OwlTimerComponent.prototype.upMinuteEnabled = function () {
        return (!this.maxDateTime ||
            this.compareMinutes(this.stepMinute, this.maxDateTime) < 1);
    };
    /**
     * Check if the down minute button is enabled
     */
    OwlTimerComponent.prototype.downMinuteEnabled = function () {
        return (!this.minDateTime ||
            this.compareMinutes(-this.stepMinute, this.minDateTime) > -1);
    };
    /**
     * Check if the up second button is enabled
     */
    OwlTimerComponent.prototype.upSecondEnabled = function () {
        return (!this.maxDateTime ||
            this.compareSeconds(this.stepSecond, this.maxDateTime) < 1);
    };
    /**
     * Check if the down second button is enabled
     */
    OwlTimerComponent.prototype.downSecondEnabled = function () {
        return (!this.minDateTime ||
            this.compareSeconds(-this.stepSecond, this.minDateTime) > -1);
    };
    /**
     * PickerMoment's hour value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    OwlTimerComponent.prototype.compareHours = function (amount, comparedDate) {
        var hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
        var result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        return this.dateTimeAdapter.compare(result, comparedDate);
    };
    /**
     * PickerMoment's minute value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    OwlTimerComponent.prototype.compareMinutes = function (amount, comparedDate) {
        var minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
        var result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        return this.dateTimeAdapter.compare(result, comparedDate);
    };
    /**
     * PickerMoment's second value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    OwlTimerComponent.prototype.compareSeconds = function (amount, comparedDate) {
        var seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
        var result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        return this.dateTimeAdapter.compare(result, comparedDate);
    };
    /**
     * Get a valid date object
     */
    OwlTimerComponent.prototype.getValidDate = function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    };
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
    return OwlTimerComponent;
}());
export { OwlTimerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvdGltZXIuY29tcG9uZW50LnRzIiwibGliL2RhdGUtdGltZS90aW1lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNFdEMsa0RBVXlFO0lBRGpFLHVQQUFzQywwT0FBQTtJQUNDLGlCQUEwQjs7O0lBUmpFLGtDQUFvQiwrQ0FBQSxtREFBQSw2Q0FBQSxpREFBQSw4QkFBQSxVQUFBLFdBQUEsNEJBQUEsd0JBQUE7Ozs7SUFVNUIsOEJBQ0k7SUFBQSxpQ0FHSTtJQURJLG1NQUE2QjtJQUNqQywrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTztJQUNYLGlCQUFTO0lBQ2IsaUJBQU07OztJQUhNLGVBQ0o7SUFESSwwREFDSjs7QURsQlI7SUFrS0ksMkJBQ1ksTUFBYyxFQUNkLE1BQWtCLEVBQ2xCLFVBQTJCLEVBQzNCLEtBQXdCLEVBQ1osZUFBbUM7UUFKL0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDWixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFySG5ELFNBQUks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Ii8qKlxyXG4gKiB0aW1lci5jb21wb25lbnRcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE5nWm9uZSxcclxuICAgIE9uSW5pdCxcclxuICAgIE9wdGlvbmFsLFxyXG4gICAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE93bERhdGVUaW1lSW50bCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBleHBvcnRBczogJ293bERhdGVUaW1lVGltZXInLFxyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLXRpbWVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90aW1lci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC10aW1lcl0nOiAnb3dsRFRUaW1lckNsYXNzJyxcclxuICAgICAgICAnW2F0dHIudGFiaW5kZXhdJzogJ293bERUVGltZVRhYkluZGV4J1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3dsVGltZXJDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IHBpY2tlciBtb21lbnQgKi9cclxuICAgIHByaXZhdGUgX3BpY2tlck1vbWVudDogVDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgcGlja2VyTW9tZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waWNrZXJNb21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBpY2tlck1vbWVudCh2YWx1ZTogVCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3BpY2tlck1vbWVudCA9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKSB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlIHRpbWUuICovXHJcbiAgICBwcml2YXRlIF9taW5EYXRlVGltZTogVCB8IG51bGw7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbkRhdGVUaW1lKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZVRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1pbkRhdGVUaW1lKHZhbHVlOiBUIHwgbnVsbCkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX21pbkRhdGVUaW1lID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUgdGltZS4gKi9cclxuICAgIHByaXZhdGUgX21heERhdGVUaW1lOiBUIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4RGF0ZVRpbWUoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWF4RGF0ZVRpbWUodmFsdWU6IFQgfCBudWxsKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fbWF4RGF0ZVRpbWUgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BNOiBib29sZWFuID0gZmFsc2U7IC8vIGEgZmxhZyBpbmRpY2F0ZXMgdGhlIGN1cnJlbnQgdGltZXIgbW9tZW50IGlzIGluIFBNIG9yIEFNXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIHNlY29uZCdzIHRpbWVyXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzaG93U2Vjb25kc1RpbWVyOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgdGltZXIgaXMgaW4gaG91cjEyIGZvcm1hdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgaG91cjEyVGltZXI6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3VycyB0byBjaGFuZ2UgcGVyIHN0ZXBcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHN0ZXBIb3VyID0gMTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1pbnV0ZXMgdG8gY2hhbmdlIHBlciBzdGVwXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzdGVwTWludXRlID0gMTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlY29uZHMgdG8gY2hhbmdlIHBlciBzdGVwXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzdGVwU2Vjb25kID0gMTtcclxuXHJcbiAgICBnZXQgaG91clZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldEhvdXJzKHRoaXMucGlja2VyTW9tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2YWx1ZSB3b3VsZCBiZSBkaXNwbGF5ZWQgaW4gaG91ckJveC5cclxuICAgICAqIFdlIG5lZWQgdGhpcyBiZWNhdXNlIHRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gaG91ckJveCBpdCBub3RcclxuICAgICAqIHRoZSBzYW1lIGFzIHRoZSBob3VyVmFsdWUgd2hlbiB0aGUgdGltZXIgaXMgaW4gaG91cjEyVGltZXIgbW9kZS5cclxuICAgICAqICovXHJcbiAgICBnZXQgaG91ckJveFZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGhvdXJzID0gdGhpcy5ob3VyVmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5ob3VyMTJUaW1lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaG91cnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGhvdXJzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBob3VycyA9IDEyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BNID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPiAwICYmIGhvdXJzIDwgMTIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQTSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BNID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VycyA+IDEyICYmIGhvdXJzIDwgMjQpIHtcclxuICAgICAgICAgICAgICAgIGhvdXJzID0gaG91cnMgLSAxMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQTSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBob3VycztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1pbnV0ZVZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1pbnV0ZXModGhpcy5waWNrZXJNb21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWNvbmRWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRTZWNvbmRzKHRoaXMucGlja2VyTW9tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXBIb3VyQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnVwSG91ckxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkb3duSG91ckJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5kb3duSG91ckxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1cE1pbnV0ZUJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC51cE1pbnV0ZUxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkb3duTWludXRlQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLmRvd25NaW51dGVMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXBTZWNvbmRCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwudXBTZWNvbmRMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZG93blNlY29uZEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5kb3duU2Vjb25kTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvdXIxMkJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNQTVxyXG4gICAgICAgICAgICA/IHRoaXMucGlja2VySW50bC5ob3VyMTJQTUxhYmVsXHJcbiAgICAgICAgICAgIDogdGhpcy5waWNrZXJJbnRsLmhvdXIxMkFNTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgICBnZXQgb3dsRFRUaW1lckNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEVFRpbWVUYWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgZWxtUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcGlja2VySW50bDogT3dsRGF0ZVRpbWVJbnRsLFxyXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGF0ZVRpbWVBZGFwdGVyOiBEYXRlVGltZUFkYXB0ZXI8VD5cclxuICAgICkge31cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9jdXMgdG8gdGhlIGhvc3QgZWxlbWVudFxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBmb2N1cygpIHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLm9uU3RhYmxlXHJcbiAgICAgICAgICAgICAgICAuYXNPYnNlcnZhYmxlKClcclxuICAgICAgICAgICAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgaG91ciB2YWx1ZSB2aWEgdHlwaW5nIGludG8gdGltZXIgYm94IGlucHV0XHJcbiAgICAgKiBXZSBuZWVkIHRoaXMgdG8gaGFuZGxlIHRoZSBob3VyIHZhbHVlIHdoZW4gdGhlIHRpbWVyIGlzIGluIGhvdXIxMiBtb2RlXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIHNldEhvdXJWYWx1ZVZpYUlucHV0KGhvdXJzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ob3VyMTJUaW1lciAmJiB0aGlzLmlzUE0gJiYgaG91cnMgPj0gMSAmJiBob3VycyA8PSAxMSkge1xyXG4gICAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhvdXIxMlRpbWVyICYmICF0aGlzLmlzUE0gJiYgaG91cnMgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SG91clZhbHVlKGhvdXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SG91clZhbHVlKGhvdXJzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuc2V0SG91cnModGhpcy5waWNrZXJNb21lbnQsIGhvdXJzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQobSk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWludXRlVmFsdWUobWludXRlczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLnNldE1pbnV0ZXModGhpcy5waWNrZXJNb21lbnQsIG1pbnV0ZXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChtKTtcclxuICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZWNvbmRWYWx1ZShzZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuc2V0U2Vjb25kcyh0aGlzLnBpY2tlck1vbWVudCwgc2Vjb25kcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KG0pO1xyXG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1lcmlkaWVtKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzUE0gPSAhdGhpcy5pc1BNO1xyXG5cclxuICAgICAgICBsZXQgaG91cnMgPSB0aGlzLmhvdXJWYWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5pc1BNKSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gaG91cnMgKyAxMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBob3VycyA9IGhvdXJzIC0gMTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaG91cnMgPj0gMCAmJiBob3VycyA8PSAyMykge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvdXJWYWx1ZShob3Vycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgdXAgaG91ciBidXR0b24gaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBIb3VyRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5tYXhEYXRlVGltZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVIb3Vycyh0aGlzLnN0ZXBIb3VyLCB0aGlzLm1heERhdGVUaW1lKSA8IDFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGRvd24gaG91ciBidXR0b24gaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZG93bkhvdXJFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLm1pbkRhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUhvdXJzKC10aGlzLnN0ZXBIb3VyLCB0aGlzLm1pbkRhdGVUaW1lKSA+IC0xXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSB1cCBtaW51dGUgYnV0dG9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwTWludXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5tYXhEYXRlVGltZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVNaW51dGVzKHRoaXMuc3RlcE1pbnV0ZSwgdGhpcy5tYXhEYXRlVGltZSkgPCAxXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBkb3duIG1pbnV0ZSBidXR0b24gaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZG93bk1pbnV0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWluRGF0ZVRpbWUgfHxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlTWludXRlcygtdGhpcy5zdGVwTWludXRlLCB0aGlzLm1pbkRhdGVUaW1lKSA+IC0xXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSB1cCBzZWNvbmQgYnV0dG9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwU2Vjb25kRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5tYXhEYXRlVGltZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVTZWNvbmRzKHRoaXMuc3RlcFNlY29uZCwgdGhpcy5tYXhEYXRlVGltZSkgPCAxXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBkb3duIHNlY29uZCBidXR0b24gaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZG93blNlY29uZEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWluRGF0ZVRpbWUgfHxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlU2Vjb25kcygtdGhpcy5zdGVwU2Vjb25kLCB0aGlzLm1pbkRhdGVUaW1lKSA+IC0xXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBpY2tlck1vbWVudCdzIGhvdXIgdmFsdWUgKy8tIGNlcnRhaW4gYW1vdW50IGFuZCBjb21wYXJlIGl0IHRvIHRoZSBnaXZlIGRhdGVcclxuICAgICAqIDEgaXMgYWZ0ZXIgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogLTEgaXMgYmVmb3JlIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqIDAgaXMgZXF1YWwgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgY29tcGFyZUhvdXJzKGFtb3VudDogbnVtYmVyLCBjb21wYXJlZERhdGU6IFQpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0SG91cnModGhpcy5waWNrZXJNb21lbnQpICsgYW1vdW50O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLnNldEhvdXJzKHRoaXMucGlja2VyTW9tZW50LCBob3Vycyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUocmVzdWx0LCBjb21wYXJlZERhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGlja2VyTW9tZW50J3MgbWludXRlIHZhbHVlICsvLSBjZXJ0YWluIGFtb3VudCBhbmQgY29tcGFyZSBpdCB0byB0aGUgZ2l2ZSBkYXRlXHJcbiAgICAgKiAxIGlzIGFmdGVyIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqIC0xIGlzIGJlZm9yZSB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAwIGlzIGVxdWFsIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIGNvbXBhcmVNaW51dGVzKGFtb3VudDogbnVtYmVyLCBjb21wYXJlZERhdGU6IFQpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPVxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNaW51dGVzKHRoaXMucGlja2VyTW9tZW50KSArIGFtb3VudDtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5zZXRNaW51dGVzKFxyXG4gICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgbWludXRlc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUocmVzdWx0LCBjb21wYXJlZERhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGlja2VyTW9tZW50J3Mgc2Vjb25kIHZhbHVlICsvLSBjZXJ0YWluIGFtb3VudCBhbmQgY29tcGFyZSBpdCB0byB0aGUgZ2l2ZSBkYXRlXHJcbiAgICAgKiAxIGlzIGFmdGVyIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqIC0xIGlzIGJlZm9yZSB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAwIGlzIGVxdWFsIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqICovXHJcbiAgICBwcml2YXRlIGNvbXBhcmVTZWNvbmRzKGFtb3VudDogbnVtYmVyLCBjb21wYXJlZERhdGU6IFQpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPVxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRTZWNvbmRzKHRoaXMucGlja2VyTW9tZW50KSArIGFtb3VudDtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5zZXRTZWNvbmRzKFxyXG4gICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcclxuICAgICAgICAgICAgc2Vjb25kc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUocmVzdWx0LCBjb21wYXJlZERhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgdmFsaWQgZGF0ZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRWYWxpZERhdGUob2JqOiBhbnkpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiZcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNWYWxpZChvYmopXHJcbiAgICAgICAgICAgID8gb2JqXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCI8b3dsLWRhdGUtdGltZS10aW1lci1ib3hcclxuICAgICAgICBbdXBCdG5BcmlhTGFiZWxdPVwidXBIb3VyQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgIFtkb3duQnRuQXJpYUxhYmVsXT1cImRvd25Ib3VyQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgIFt1cEJ0bkRpc2FibGVkXT1cIiF1cEhvdXJFbmFibGVkKClcIlxyXG4gICAgICAgIFtkb3duQnRuRGlzYWJsZWRdPVwiIWRvd25Ib3VyRW5hYmxlZCgpXCJcclxuICAgICAgICBbYm94VmFsdWVdPVwiaG91ckJveFZhbHVlXCJcclxuICAgICAgICBbdmFsdWVdPVwiaG91clZhbHVlXCIgW21pbl09XCIwXCIgW21heF09XCIyM1wiXHJcbiAgICAgICAgW3N0ZXBdPVwic3RlcEhvdXJcIiBbaW5wdXRMYWJlbF09XCInSG91cidcIlxyXG4gICAgICAgIChpbnB1dENoYW5nZSk9XCJzZXRIb3VyVmFsdWVWaWFJbnB1dCgkZXZlbnQpXCJcclxuICAgICAgICAodmFsdWVDaGFuZ2UpPVwic2V0SG91clZhbHVlKCRldmVudClcIj48L293bC1kYXRlLXRpbWUtdGltZXItYm94PlxyXG48b3dsLWRhdGUtdGltZS10aW1lci1ib3hcclxuICAgICAgICBbc2hvd0RpdmlkZXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgW3VwQnRuQXJpYUxhYmVsXT1cInVwTWludXRlQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgIFtkb3duQnRuQXJpYUxhYmVsXT1cImRvd25NaW51dGVCdXR0b25MYWJlbFwiXHJcbiAgICAgICAgW3VwQnRuRGlzYWJsZWRdPVwiIXVwTWludXRlRW5hYmxlZCgpXCJcclxuICAgICAgICBbZG93bkJ0bkRpc2FibGVkXT1cIiFkb3duTWludXRlRW5hYmxlZCgpXCJcclxuICAgICAgICBbdmFsdWVdPVwibWludXRlVmFsdWVcIiBbbWluXT1cIjBcIiBbbWF4XT1cIjU5XCJcclxuICAgICAgICBbc3RlcF09XCJzdGVwTWludXRlXCIgW2lucHV0TGFiZWxdPVwiJ01pbnV0ZSdcIlxyXG4gICAgICAgIChpbnB1dENoYW5nZSk9XCJzZXRNaW51dGVWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAodmFsdWVDaGFuZ2UpPVwic2V0TWludXRlVmFsdWUoJGV2ZW50KVwiPjwvb3dsLWRhdGUtdGltZS10aW1lci1ib3g+XHJcbjxvd2wtZGF0ZS10aW1lLXRpbWVyLWJveFxyXG4gICAgICAgICpuZ0lmPVwic2hvd1NlY29uZHNUaW1lclwiXHJcbiAgICAgICAgW3Nob3dEaXZpZGVyXT1cInRydWVcIlxyXG4gICAgICAgIFt1cEJ0bkFyaWFMYWJlbF09XCJ1cFNlY29uZEJ1dHRvbkxhYmVsXCJcclxuICAgICAgICBbZG93bkJ0bkFyaWFMYWJlbF09XCJkb3duU2Vjb25kQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgIFt1cEJ0bkRpc2FibGVkXT1cIiF1cFNlY29uZEVuYWJsZWQoKVwiXHJcbiAgICAgICAgW2Rvd25CdG5EaXNhYmxlZF09XCIhZG93blNlY29uZEVuYWJsZWQoKVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInNlY29uZFZhbHVlXCIgW21pbl09XCIwXCIgW21heF09XCI1OVwiXHJcbiAgICAgICAgW3N0ZXBdPVwic3RlcFNlY29uZFwiIFtpbnB1dExhYmVsXT1cIidTZWNvbmQnXCJcclxuICAgICAgICAoaW5wdXRDaGFuZ2UpPVwic2V0U2Vjb25kVmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cInNldFNlY29uZFZhbHVlKCRldmVudClcIj48L293bC1kYXRlLXRpbWUtdGltZXItYm94PlxyXG5cclxuPGRpdiAqbmdJZj1cImhvdXIxMlRpbWVyXCIgY2xhc3M9XCJvd2wtZHQtdGltZXItaG91cjEyXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC10aW1lci1ob3VyMTItYm94XCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRNZXJpZGllbSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1idXR0b24tY29udGVudFwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAge3tob3VyMTJCdXR0b25MYWJlbH19XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=