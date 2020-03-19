/**
 * date-time.module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { OwlDateTimeTriggerDirective } from './date-time-picker-trigger.directive';
import { OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER, OwlDateTimeComponent } from './date-time-picker.component';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
import { OwlDateTimeInputDirective } from './date-time-picker-input.directive';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { OwlMonthViewComponent } from './calendar-month-view.component';
import { OwlCalendarBodyComponent } from './calendar-body.component';
import { OwlYearViewComponent } from './calendar-year-view.component';
import { OwlMultiYearViewComponent } from './calendar-multi-year-view.component';
import { OwlTimerBoxComponent } from './timer-box.component';
import { OwlTimerComponent } from './timer.component';
import { NumberFixedLenPipe } from './numberedFixLen.pipe';
import { OwlCalendarComponent } from './calendar.component';
import { OwlDateTimeInlineComponent } from './date-time-inline.component';
import { OwlDialogModule } from '../dialog/dialog.module';
import * as i0 from "@angular/core";
var OwlDateTimeModule = /** @class */ (function () {
    function OwlDateTimeModule() {
    }
    OwlDateTimeModule.ɵmod = i0.ɵɵdefineNgModule({ type: OwlDateTimeModule });
    OwlDateTimeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OwlDateTimeModule_Factory(t) { return new (t || OwlDateTimeModule)(); }, providers: [
            OwlDateTimeIntl,
            OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
        ], imports: [[CommonModule, OverlayModule, OwlDialogModule, A11yModule]] });
    return OwlDateTimeModule;
}());
export { OwlDateTimeModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OwlDateTimeModule, { declarations: [OwlDateTimeTriggerDirective,
        OwlDateTimeInputDirective,
        OwlDateTimeComponent,
        OwlDateTimeContainerComponent,
        OwlMultiYearViewComponent,
        OwlYearViewComponent,
        OwlMonthViewComponent,
        OwlTimerComponent,
        OwlTimerBoxComponent,
        OwlCalendarComponent,
        OwlCalendarBodyComponent,
        NumberFixedLenPipe,
        OwlDateTimeInlineComponent], imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule], exports: [OwlCalendarComponent,
        OwlTimerComponent,
        OwlDateTimeTriggerDirective,
        OwlDateTimeInputDirective,
        OwlDateTimeComponent,
        OwlDateTimeInlineComponent,
        OwlMultiYearViewComponent,
        OwlYearViewComponent,
        OwlMonthViewComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDateTimeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule],
                exports: [
                    OwlCalendarComponent,
                    OwlTimerComponent,
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeInlineComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                ],
                declarations: [
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeContainerComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                    OwlTimerComponent,
                    OwlTimerBoxComponent,
                    OwlCalendarComponent,
                    OwlCalendarBodyComponent,
                    NumberFixedLenPipe,
                    OwlDateTimeInlineComponent,
                ],
                providers: [
                    OwlDateTimeIntl,
                    OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [
                    OwlDateTimeContainerComponent,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL2RhdGUtdGltZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTFEO0lBQUE7S0FxQ0M7eURBRFksaUJBQWlCO3FIQUFqQixpQkFBaUIsbUJBUmY7WUFDUCxlQUFlO1lBQ2YscUNBQXFDO1NBQ3hDLFlBOUJRLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDOzRCQXpCdkU7Q0E2REMsQUFyQ0QsSUFxQ0M7U0FEWSxpQkFBaUI7d0ZBQWpCLGlCQUFpQixtQkF0QnRCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLDBCQUEwQixhQXpCcEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxhQUU5RCxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtrREF5QmhCLGlCQUFpQjtjQXBDN0IsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQztnQkFDbkUsT0FBTyxFQUFFO29CQUNMLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQiwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQiwwQkFBMEI7b0JBQzFCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixxQkFBcUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRTtvQkFDViwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQiw2QkFBNkI7b0JBQzdCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQiwwQkFBMEI7aUJBQzdCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxlQUFlO29CQUNmLHFDQUFxQztpQkFDeEM7Z0JBQ0QsZUFBZSxFQUFFO29CQUNiLDZCQUE2QjtpQkFDaEM7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBkYXRlLXRpbWUubW9kdWxlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLXRyaWdnZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT1dMX0RUUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUiwgT3dsRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE93bERhdGVUaW1lSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbnRsIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZSc7XHJcbmltcG9ydCB7IE93bE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPd2xDYWxlbmRhckJvZHlDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWJvZHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3dsWWVhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXllYXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPd2xNdWx0aVllYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1tdWx0aS15ZWFyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3dsVGltZXJCb3hDb21wb25lbnQgfSBmcm9tICcuL3RpbWVyLWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPd2xUaW1lckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnVtYmVyRml4ZWRMZW5QaXBlIH0gZnJvbSAnLi9udW1iZXJlZEZpeExlbi5waXBlJztcclxuaW1wb3J0IHsgT3dsQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE93bERhdGVUaW1lSW5saW5lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRpbWUtaW5saW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE93bERpYWxvZ01vZHVsZSB9IGZyb20gJy4uL2RpYWxvZy9kaWFsb2cubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBPd2xEaWFsb2dNb2R1bGUsIEExMXlNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE93bENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgICAgIE93bFRpbWVyQ29tcG9uZW50LFxyXG4gICAgICAgIE93bERhdGVUaW1lVHJpZ2dlckRpcmVjdGl2ZSxcclxuICAgICAgICBPd2xEYXRlVGltZUlucHV0RGlyZWN0aXZlLFxyXG4gICAgICAgIE93bERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgIE93bERhdGVUaW1lSW5saW5lQ29tcG9uZW50LFxyXG4gICAgICAgIE93bE11bHRpWWVhclZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgT3dsWWVhclZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgT3dsTW9udGhWaWV3Q29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE93bERhdGVUaW1lVHJpZ2dlckRpcmVjdGl2ZSxcclxuICAgICAgICBPd2xEYXRlVGltZUlucHV0RGlyZWN0aXZlLFxyXG4gICAgICAgIE93bERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgIE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIE93bE11bHRpWWVhclZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgT3dsWWVhclZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgT3dsTW9udGhWaWV3Q29tcG9uZW50LFxyXG4gICAgICAgIE93bFRpbWVyQ29tcG9uZW50LFxyXG4gICAgICAgIE93bFRpbWVyQm94Q29tcG9uZW50LFxyXG4gICAgICAgIE93bENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgICAgIE93bENhbGVuZGFyQm9keUNvbXBvbmVudCxcclxuICAgICAgICBOdW1iZXJGaXhlZExlblBpcGUsXHJcbiAgICAgICAgT3dsRGF0ZVRpbWVJbmxpbmVDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgT3dsRGF0ZVRpbWVJbnRsLFxyXG4gICAgICAgIE9XTF9EVFBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfUFJPVklERVIsXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgT3dsRGF0ZVRpbWVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xEYXRlVGltZU1vZHVsZSB7XHJcbn1cclxuIl19