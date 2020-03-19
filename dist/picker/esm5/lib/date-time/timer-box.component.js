/**
 * timer-box.component
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./numberedFixLen.pipe";
function OwlTimerBoxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} }
var OwlTimerBoxComponent = /** @class */ (function () {
    function OwlTimerBoxComponent() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.inputStream = new Subject();
        this.inputStreamSub = Subscription.EMPTY;
    }
    Object.defineProperty(OwlTimerBoxComponent.prototype, "displayValue", {
        get: function () {
            return this.boxValue || this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerBoxComponent.prototype, "owlDTTimerBoxClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    OwlTimerBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputStreamSub = this.inputStream.pipe(debounceTime(500), distinctUntilChanged()).subscribe(function (val) {
            if (val) {
                var inputValue = coerceNumberProperty(val, 0);
                _this.updateValueViaInput(inputValue);
            }
        });
    };
    OwlTimerBoxComponent.prototype.ngOnDestroy = function () {
        this.inputStreamSub.unsubscribe();
    };
    OwlTimerBoxComponent.prototype.upBtnClicked = function () {
        this.updateValue(this.value + this.step);
    };
    OwlTimerBoxComponent.prototype.downBtnClicked = function () {
        this.updateValue(this.value - this.step);
    };
    OwlTimerBoxComponent.prototype.handleInputChange = function (val) {
        this.inputStream.next(val);
    };
    OwlTimerBoxComponent.prototype.updateValue = function (value) {
        this.valueChange.emit(value);
    };
    OwlTimerBoxComponent.prototype.updateValueViaInput = function (value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    };
    OwlTimerBoxComponent.ɵfac = function OwlTimerBoxComponent_Factory(t) { return new (t || OwlTimerBoxComponent)(); };
    OwlTimerBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlTimerBoxComponent, selectors: [["owl-date-time-timer-box"]], hostVars: 2, hostBindings: function OwlTimerBoxComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-timer-box", ctx.owlDTTimerBoxClass);
        } }, inputs: { showDivider: "showDivider", upBtnAriaLabel: "upBtnAriaLabel", upBtnDisabled: "upBtnDisabled", downBtnAriaLabel: "downBtnAriaLabel", downBtnDisabled: "downBtnDisabled", boxValue: "boxValue", value: "value", min: "min", max: "max", step: "step", inputLabel: "inputLabel" }, outputs: { valueChange: "valueChange", inputChange: "inputChange" }, exportAs: ["owlDateTimeTimerBox"], decls: 15, vars: 10, consts: [["class", "owl-dt-timer-divider", "aria-hidden", "true", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 451.847 451.846", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 451.847 451.846"], ["d", "M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"], [1, "owl-dt-timer-content"], ["maxlength", "2", 1, "owl-dt-timer-input", 3, "value", "input"], ["valueInput", ""], [1, "owl-hidden-accessible"], ["d", "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"], ["aria-hidden", "true", 1, "owl-dt-timer-divider"]], template: function OwlTimerBoxComponent_Template(rf, ctx) { if (rf & 1) {
            var _r119 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, OwlTimerBoxComponent_div_0_Template, 1, 0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵlistener("click", function OwlTimerBoxComponent_Template_button_click_1_listener() { return ctx.upBtnClicked(); });
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(5, "label", 5);
            i0.ɵɵelementStart(6, "input", 6, 7);
            i0.ɵɵlistener("input", function OwlTimerBoxComponent_Template_input_input_6_listener() { i0.ɵɵrestoreView(_r119); var _r118 = i0.ɵɵreference(7); return ctx.handleInputChange(_r118.value); });
            i0.ɵɵpipe(8, "numberFixedLen");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 8);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 1);
            i0.ɵɵlistener("click", function OwlTimerBoxComponent_Template_button_click_11_listener() { return ctx.downBtnClicked(); });
            i0.ɵɵelementStart(12, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(13, "svg", 3);
            i0.ɵɵelement(14, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showDivider);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.upBtnDisabled);
            i0.ɵɵattribute("aria-label", ctx.upBtnAriaLabel);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", i0.ɵɵpipeBind2(8, 7, ctx.displayValue, 2));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.inputLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.downBtnDisabled);
            i0.ɵɵattribute("aria-label", ctx.downBtnAriaLabel);
        } }, directives: [i1.NgIf], pipes: [i2.NumberFixedLenPipe], styles: [""], changeDetection: 0 });
    return OwlTimerBoxComponent;
}());
export { OwlTimerBoxComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlTimerBoxComponent, [{
        type: Component,
        args: [{
                exportAs: 'owlDateTimeTimerBox',
                selector: 'owl-date-time-timer-box',
                templateUrl: './timer-box.component.html',
                styleUrls: ['./timer-box.component.scss'],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.owl-dt-timer-box]': 'owlDTTimerBoxClass'
                }
            }]
    }], function () { return []; }, { showDivider: [{
            type: Input
        }], upBtnAriaLabel: [{
            type: Input
        }], upBtnDisabled: [{
            type: Input
        }], downBtnAriaLabel: [{
            type: Input
        }], downBtnDisabled: [{
            type: Input
        }], boxValue: [{
            type: Input
        }], value: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], step: [{
            type: Input
        }], inputLabel: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], inputChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQudHMiLCJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUNmcEUsMEJBQStFOztBRGlCL0U7SUF3REk7UUExQ1MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFzQnBCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFJUixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVwQyxtQkFBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFXNUMsQ0FBQztJQVRELHNCQUFJLDhDQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBa0I7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUtNLHVDQUFRLEdBQWY7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFD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TCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHRpbWVyLWJveC5jb21wb25lbnRcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBleHBvcnRBczogJ293bERhdGVUaW1lVGltZXJCb3gnLFxyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLXRpbWVyLWJveCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXItYm94LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbWVyLWJveC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC10aW1lci1ib3hdJzogJ293bERUVGltZXJCb3hDbGFzcydcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPd2xUaW1lckJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBzaG93RGl2aWRlciA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHVwQnRuQXJpYUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgdXBCdG5EaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBASW5wdXQoKSBkb3duQnRuQXJpYUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgZG93bkJ0bkRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsdWUgd291bGQgYmUgZGlzcGxheWVkIGluIHRoZSBib3hcclxuICAgICAqIElmIGl0IGlzIG51bGwsIHRoZSBib3ggd291bGQgZGlzcGxheSBbdmFsdWVdXHJcbiAgICAgKiAqL1xyXG4gICAgQElucHV0KCkgYm94VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHN0ZXAgPSAxO1xyXG5cclxuICAgIEBJbnB1dCgpIGlucHV0TGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBwcml2YXRlIGlucHV0U3RyZWFtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTdHJlYW1TdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFZhbHVlIHx8IHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERUVGltZXJCb3hDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbVN1YiA9IHRoaXMuaW5wdXRTdHJlYW0ucGlwZShcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICApLnN1YnNjcmliZSgoIHZhbDogc3RyaW5nICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsLCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVWaWFJbnB1dChpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdHJlYW1TdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBCdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRvd25CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlucHV0Q2hhbmdlKCB2YWw6IHN0cmluZyApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RyZWFtLm5leHQodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlKCB2YWx1ZTogbnVtYmVyICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZVZpYUlucHV0KCB2YWx1ZTogbnVtYmVyICk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IHRoaXMubWF4IHx8IHZhbHVlIDwgdGhpcy5taW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJzaG93RGl2aWRlclwiIGNsYXNzPVwib3dsLWR0LXRpbWVyLWRpdmlkZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2Rpdj5cclxuPGJ1dHRvbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbiBvd2wtZHQtY29udHJvbC1hcnJvdy1idXR0b25cIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwidXBCdG5EaXNhYmxlZFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJ1cEJ0bkFyaWFMYWJlbFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInVwQnRuQ2xpY2tlZCgpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgIDwhLS0gPGVkaXRvci1mb2xkIGRlc2M9XCJTVkcgQXJyb3cgVXBcIj4gLS0+XHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNDUxLjg0NyA0NTEuODQ2XCJcclxuICAgICAgICAgICAgICAgICBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ2O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNDguMjkyLDEwNi40MDZsMTk0LjI4MSwxOTQuMjljMTIuMzY1LDEyLjM1OSwxMi4zNjUsMzIuMzkxLDAsNDQuNzQ0Yy0xMi4zNTQsMTIuMzU0LTMyLjM5MSwxMi4zNTQtNDQuNzQ0LDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgTDIyNS45MjMsMTczLjUyOUw1NC4wMTgsMzQ1LjQ0Yy0xMi4zNiwxMi4zNTQtMzIuMzk1LDEyLjM1NC00NC43NDgsMGMtMTIuMzU5LTEyLjM1NC0xMi4zNTktMzIuMzkxLDAtNDQuNzVMMjAzLjU1NCwxMDYuNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjNi4xOC02LjE3NCwxNC4yNzEtOS4yNTksMjIuMzY5LTkuMjU5QzIzNC4wMTgsOTcuMTQxLDI0Mi4xMTUsMTAwLjIzMiwyNDguMjkyLDEwNi40MDZ6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPCEtLSA8L2VkaXRvci1mb2xkPiAtLT5cclxuICAgIDwvc3Bhbj5cclxuPC9idXR0b24+XHJcbjxsYWJlbCBjbGFzcz1cIm93bC1kdC10aW1lci1jb250ZW50XCI+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJvd2wtZHQtdGltZXItaW5wdXRcIiBtYXhsZW5ndGg9XCIyXCJcclxuICAgICAgICAgICBbdmFsdWVdPVwiZGlzcGxheVZhbHVlIHwgbnVtYmVyRml4ZWRMZW4gOiAyXCJcclxuICAgICAgICAgICAoaW5wdXQpPVwiaGFuZGxlSW5wdXRDaGFuZ2UodmFsdWVJbnB1dC52YWx1ZSlcIiAjdmFsdWVJbnB1dD5cclxuICAgIDxzcGFuIGNsYXNzPVwib3dsLWhpZGRlbi1hY2Nlc3NpYmxlXCI+e3tpbnB1dExhYmVsfX08L3NwYW4+XHJcbjwvbGFiZWw+XHJcbjxidXR0b24gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1idXR0b24gb3dsLWR0LWNvbnRyb2wtYXJyb3ctYnV0dG9uXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRvd25CdG5EaXNhYmxlZFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJkb3duQnRuQXJpYUxhYmVsXCJcclxuICAgICAgICAoY2xpY2spPVwiZG93bkJ0bkNsaWNrZWQoKVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJvd2wtZHQtY29udHJvbC1idXR0b24tY29udGVudFwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICA8IS0tIDxlZGl0b3ItZm9sZCBkZXNjPVwiU1ZHIEFycm93IERvd25cIj4gLS0+XHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNDUxLjg0NyA0NTEuODQ2XCJcclxuICAgICAgICAgICAgICAgICBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ2O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMjUuOTIzLDM1NC43MDZjLTguMDk4LDAtMTYuMTk1LTMuMDkyLTIyLjM2OS05LjI2M0w5LjI3LDE1MS4xNTdjLTEyLjM1OS0xMi4zNTktMTIuMzU5LTMyLjM5NywwLTQ0Ljc1MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjMTIuMzU0LTEyLjM1NCwzMi4zODgtMTIuMzU0LDQ0Ljc0OCwwbDE3MS45MDUsMTcxLjkxNWwxNzEuOTA2LTE3MS45MDljMTIuMzU5LTEyLjM1NCwzMi4zOTEtMTIuMzU0LDQ0Ljc0NCwwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMxMi4zNjUsMTIuMzU0LDEyLjM2NSwzMi4zOTIsMCw0NC43NTFMMjQ4LjI5MiwzNDUuNDQ5QzI0Mi4xMTUsMzUxLjYyMSwyMzQuMDE4LDM1NC43MDYsMjI1LjkyMywzNTQuNzA2elwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwhLS0gPC9lZGl0b3ItZm9sZD4gLS0+XHJcbiAgICA8L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=