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
export class OwlTimerBoxComponent {
    constructor() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.inputStream = new Subject();
        this.inputStreamSub = Subscription.EMPTY;
    }
    get displayValue() {
        return this.boxValue || this.value;
    }
    get owlDTTimerBoxClass() {
        return true;
    }
    ngOnInit() {
        this.inputStreamSub = this.inputStream.pipe(debounceTime(500), distinctUntilChanged()).subscribe((val) => {
            if (val) {
                const inputValue = coerceNumberProperty(val, 0);
                this.updateValueViaInput(inputValue);
            }
        });
    }
    ngOnDestroy() {
        this.inputStreamSub.unsubscribe();
    }
    upBtnClicked() {
        this.updateValue(this.value + this.step);
    }
    downBtnClicked() {
        this.updateValue(this.value - this.step);
    }
    handleInputChange(val) {
        this.inputStream.next(val);
    }
    updateValue(value) {
        this.valueChange.emit(value);
    }
    updateValueViaInput(value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    }
}
OwlTimerBoxComponent.ɵfac = function OwlTimerBoxComponent_Factory(t) { return new (t || OwlTimerBoxComponent)(); };
OwlTimerBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlTimerBoxComponent, selectors: [["owl-date-time-timer-box"]], hostVars: 2, hostBindings: function OwlTimerBoxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("owl-dt-timer-box", ctx.owlDTTimerBoxClass);
    } }, inputs: { showDivider: "showDivider", upBtnAriaLabel: "upBtnAriaLabel", upBtnDisabled: "upBtnDisabled", downBtnAriaLabel: "downBtnAriaLabel", downBtnDisabled: "downBtnDisabled", boxValue: "boxValue", value: "value", min: "min", max: "max", step: "step", inputLabel: "inputLabel" }, outputs: { valueChange: "valueChange", inputChange: "inputChange" }, exportAs: ["owlDateTimeTimerBox"], decls: 15, vars: 10, consts: [["class", "owl-dt-timer-divider", "aria-hidden", "true", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 451.847 451.846", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 451.847 451.846"], ["d", "M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"], [1, "owl-dt-timer-content"], ["maxlength", "2", 1, "owl-dt-timer-input", 3, "value", "input"], ["valueInput", ""], [1, "owl-hidden-accessible"], ["d", "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"], ["aria-hidden", "true", 1, "owl-dt-timer-divider"]], template: function OwlTimerBoxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r59 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵlistener("input", function OwlTimerBoxComponent_Template_input_input_6_listener() { i0.ɵɵrestoreView(_r59); const _r58 = i0.ɵɵreference(7); return ctx.handleInputChange(_r58.value); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQudHMiLCJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUNmcEUsMEJBQStFOztBRDZCL0UsTUFBTSxPQUFPLG9CQUFvQjtJQTRDN0I7UUExQ1MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFzQnBCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFJUixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVwQyxtQkFBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFXNUMsQ0FBQztJQVRELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNsQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBS00sUUFBUTtRQUNYLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3ZDLFlBQVks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Ki9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENvbXBvbmVudCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVUaW1lckJveCcsXHJcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtdGltZXItYm94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1lci1ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGltZXItYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LXRpbWVyLWJveF0nOiAnb3dsRFRUaW1lckJveENsYXNzJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE93bFRpbWVyQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHNob3dEaXZpZGVyID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KCkgdXBCdG5BcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSB1cEJ0bkRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAgIEBJbnB1dCgpIGRvd25CdG5BcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBkb3duQnRuRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSB3b3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJveFxyXG4gICAgICogSWYgaXQgaXMgbnVsbCwgdGhlIGJveCB3b3VsZCBkaXNwbGF5IFt2YWx1ZV1cclxuICAgICAqICovXHJcbiAgICBASW5wdXQoKSBib3hWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgbWluOiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgc3RlcCA9IDE7XHJcblxyXG4gICAgQElucHV0KCkgaW5wdXRMYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dFN0cmVhbVN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgICBnZXQgZGlzcGxheVZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94VmFsdWUgfHwgdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRUaW1lckJveENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RyZWFtU3ViID0gdGhpcy5pbnB1dFN0cmVhbS5waXBlKFxyXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCggdmFsOiBzdHJpbmcgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWwsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZVZpYUlucHV0KGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cEJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG93bkJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSW5wdXRDaGFuZ2UoIHZhbDogc3RyaW5nICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdHJlYW0ubmV4dCh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVmFsdWUoIHZhbHVlOiBudW1iZXIgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlVmlhSW5wdXQoIHZhbHVlOiBudW1iZXIgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5tYXggfHwgdmFsdWUgPCB0aGlzLm1pbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cInNob3dEaXZpZGVyXCIgY2xhc3M9XCJvd2wtZHQtdGltZXItZGl2aWRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZGl2PlxyXG48YnV0dG9uIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uIG93bC1kdC1jb250cm9sLWFycm93LWJ1dHRvblwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJ1cEJ0bkRpc2FibGVkXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInVwQnRuQXJpYUxhYmVsXCJcclxuICAgICAgICAoY2xpY2spPVwidXBCdG5DbGlja2VkKClcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgPCEtLSA8ZWRpdG9yLWZvbGQgZGVzYz1cIlNWRyBBcnJvdyBVcFwiPiAtLT5cclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0NTEuODQ3IDQ1MS44NDZcIlxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDY7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0OC4yOTIsMTA2LjQwNmwxOTQuMjgxLDE5NC4yOWMxMi4zNjUsMTIuMzU5LDEyLjM2NSwzMi4zOTEsMCw0NC43NDRjLTEyLjM1NCwxMi4zNTQtMzIuMzkxLDEyLjM1NC00NC43NDQsMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMMjI1LjkyMywxNzMuNTI5TDU0LjAxOCwzNDUuNDRjLTEyLjM2LDEyLjM1NC0zMi4zOTUsMTIuMzU0LTQ0Ljc0OCwwYy0xMi4zNTktMTIuMzU0LTEyLjM1OS0zMi4zOTEsMC00NC43NUwyMDMuNTU0LDEwNi40XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGM2LjE4LTYuMTc0LDE0LjI3MS05LjI1OSwyMi4zNjktOS4yNTlDMjM0LjAxOCw5Ny4xNDEsMjQyLjExNSwxMDAuMjMyLDI0OC4yOTIsMTA2LjQwNnpcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8IS0tIDwvZWRpdG9yLWZvbGQ+IC0tPlxyXG4gICAgPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuPGxhYmVsIGNsYXNzPVwib3dsLWR0LXRpbWVyLWNvbnRlbnRcIj5cclxuICAgIDxpbnB1dCBjbGFzcz1cIm93bC1kdC10aW1lci1pbnB1dFwiIG1heGxlbmd0aD1cIjJcIlxyXG4gICAgICAgICAgIFt2YWx1ZV09XCJkaXNwbGF5VmFsdWUgfCBudW1iZXJGaXhlZExlbiA6IDJcIlxyXG4gICAgICAgICAgIChpbnB1dCk9XCJoYW5kbGVJbnB1dENoYW5nZSh2YWx1ZUlucHV0LnZhbHVlKVwiICN2YWx1ZUlucHV0PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJvd2wtaGlkZGVuLWFjY2Vzc2libGVcIj57e2lucHV0TGFiZWx9fTwvc3Bhbj5cclxuPC9sYWJlbD5cclxuPGJ1dHRvbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbiBvd2wtZHQtY29udHJvbC1hcnJvdy1idXR0b25cIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZG93bkJ0bkRpc2FibGVkXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRvd25CdG5BcmlhTGFiZWxcIlxyXG4gICAgICAgIChjbGljayk9XCJkb3duQnRuQ2xpY2tlZCgpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbi1jb250ZW50XCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgIDwhLS0gPGVkaXRvci1mb2xkIGRlc2M9XCJTVkcgQXJyb3cgRG93blwiPiAtLT5cclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0NTEuODQ3IDQ1MS44NDZcIlxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDY7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyNS45MjMsMzU0LjcwNmMtOC4wOTgsMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcsMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3LDAtNDQuNzUxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYzEyLjM2NSwxMi4zNTQsMTIuMzY1LDMyLjM5MiwwLDQ0Ljc1MUwyNDguMjkyLDM0NS40NDlDMjQyLjExNSwzNTEuNjIxLDIzNC4wMTgsMzU0LjcwNiwyMjUuOTIzLDM1NC43MDZ6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPCEtLSA8L2VkaXRvci1mb2xkPiAtLT5cclxuICAgIDwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==