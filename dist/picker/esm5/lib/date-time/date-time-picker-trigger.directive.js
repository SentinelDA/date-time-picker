/**
 * date-time-picker-trigger.directive
 */
import { ChangeDetectorRef, Directive, Input } from '@angular/core';
import { OwlDateTimeComponent } from './date-time-picker.component';
import { merge, of as observableOf, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
var OwlDateTimeTriggerDirective = /** @class */ (function () {
    function OwlDateTimeTriggerDirective(changeDetector) {
        this.changeDetector = changeDetector;
        this.stateChanges = Subscription.EMPTY;
    }
    Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "disabled", {
        get: function () {
            return this._disabled === undefined ? this.dtPicker.disabled : !!this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "owlDTTriggerDisabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    OwlDateTimeTriggerDirective.prototype.ngOnInit = function () {
    };
    OwlDateTimeTriggerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.datepicker) {
            this.watchStateChanges();
        }
    };
    OwlDateTimeTriggerDirective.prototype.ngAfterContentInit = function () {
        this.watchStateChanges();
    };
    OwlDateTimeTriggerDirective.prototype.ngOnDestroy = function () {
        this.stateChanges.unsubscribe();
    };
    OwlDateTimeTriggerDirective.prototype.handleClickOnHost = function (event) {
        if (this.dtPicker) {
            this.dtPicker.open();
            event.stopPropagation();
        }
    };
    OwlDateTimeTriggerDirective.prototype.watchStateChanges = function () {
        var _this = this;
        this.stateChanges.unsubscribe();
        var inputDisabled = this.dtPicker && this.dtPicker.dtInput ?
            this.dtPicker.dtInput.disabledChange : observableOf();
        var pickerDisabled = this.dtPicker ?
            this.dtPicker.disabledChange : observableOf();
        this.stateChanges = merge(pickerDisabled, inputDisabled)
            .subscribe(function () {
            _this.changeDetector.markForCheck();
        });
    };
    OwlDateTimeTriggerDirective.ɵfac = function OwlDateTimeTriggerDirective_Factory(t) { return new (t || OwlDateTimeTriggerDirective)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    OwlDateTimeTriggerDirective.ɵdir = i0.ɵɵdefineDirective({ type: OwlDateTimeTriggerDirective, selectors: [["", "owlDateTimeTrigger", ""]], hostVars: 2, hostBindings: function OwlDateTimeTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function OwlDateTimeTriggerDirective_click_HostBindingHandler($event) { return ctx.handleClickOnHost($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-trigger-disabled", ctx.owlDTTriggerDisabledClass);
        } }, inputs: { dtPicker: ["owlDateTimeTrigger", "dtPicker"], disabled: "disabled" }, features: [i0.ɵɵNgOnChangesFeature] });
    return OwlDateTimeTriggerDirective;
}());
export { OwlDateTimeTriggerDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDateTimeTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[owlDateTimeTrigger]',
                host: {
                    '(click)': 'handleClickOnHost($event)',
                    '[class.owl-dt-trigger-disabled]': 'owlDTTriggerDisabledClass'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { dtPicker: [{
            type: Input,
            args: ['owlDateTimeTrigger']
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL2RhdGUtdGltZS1waWNrZXItdHJpZ2dlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFHSCxPQUFPLEVBRUgsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBS1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0Q7SUEyQkkscUNBQXVCLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUZoRCxpQkFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFHMUMsQ0FBQztJQWhCRCxzQkFDSSxpREFBUTthQURaO1lBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BGLENBQUM7YUFFRCxVQUFjLEtBQWM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxrRUFBeUI7YUFBN0I7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFPTSw4Q0FBUSxHQUFmO0lBQ0EsQ0FBQztJQUVNLGlEQUFXLEdBQWxCLFVBQW9CLE9BQXNCO1FBQ3RDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFTSx3REFBa0IsR0FBekI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0saURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSx1REFBaUIsR0FBeEIsVUFBMEIsS0FBWTtRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFTyx1REFBaUIsR0FBekI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVsRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDO2FBQ25ELFNBQVMsQ0FBQztZQUNQLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOzBHQTVEUSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7Ozs7c0NBekJ4QztDQXNGQyxBQXBFRCxJQW9FQztTQTdEWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQVB2QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsSUFBSSxFQUFFO29CQUNGLFNBQVMsRUFBRSwyQkFBMkI7b0JBQ3RDLGlDQUFpQyxFQUFFLDJCQUEyQjtpQkFDakU7YUFDSjs7a0JBR0ksS0FBSzttQkFBQyxvQkFBb0I7O2tCQUcxQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGRhdGUtdGltZS1waWNrZXItdHJpZ2dlci5kaXJlY3RpdmVcclxuICovXHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbb3dsRGF0ZVRpbWVUcmlnZ2VyXScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJyhjbGljayknOiAnaGFuZGxlQ2xpY2tPbkhvc3QoJGV2ZW50KScsXHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtdHJpZ2dlci1kaXNhYmxlZF0nOiAnb3dsRFRUcmlnZ2VyRGlzYWJsZWRDbGFzcydcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE93bERhdGVUaW1lVHJpZ2dlckRpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgnb3dsRGF0ZVRpbWVUcmlnZ2VyJykgZHRQaWNrZXI6IE93bERhdGVUaW1lQ29tcG9uZW50PFQ+O1xyXG5cclxuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuZHRQaWNrZXIuZGlzYWJsZWQgOiAhIXRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkaXNhYmxlZCggdmFsdWU6IGJvb2xlYW4gKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRUcmlnZ2VyRGlzYWJsZWRDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlQ2hhbmdlcyA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJvdGVjdGVkIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmRhdGVwaWNrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaFN0YXRlQ2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIHRoaXMud2F0Y2hTdGF0ZUNoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlQ2xpY2tPbkhvc3QoIGV2ZW50OiBFdmVudCApOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kdFBpY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLmR0UGlja2VyLm9wZW4oKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2F0Y2hTdGF0ZUNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXREaXNhYmxlZCA9IHRoaXMuZHRQaWNrZXIgJiYgdGhpcy5kdFBpY2tlci5kdElucHV0ID9cclxuICAgICAgICAgICAgdGhpcy5kdFBpY2tlci5kdElucHV0LmRpc2FibGVkQ2hhbmdlIDogb2JzZXJ2YWJsZU9mKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpY2tlckRpc2FibGVkID0gdGhpcy5kdFBpY2tlciA/XHJcbiAgICAgICAgICAgIHRoaXMuZHRQaWNrZXIuZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMgPSBtZXJnZShwaWNrZXJEaXNhYmxlZCwgaW5wdXREaXNhYmxlZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=