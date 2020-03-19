/**
 * native-date-time.module
 */
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { DateTimeAdapter } from './date-time-adapter.class';
import { NativeDateTimeAdapter } from './native-date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './date-time-format.class';
import { OWL_NATIVE_DATE_TIME_FORMATS } from './native-date-time-format.class';
import * as i0 from "@angular/core";
var NativeDateTimeModule = /** @class */ (function () {
    function NativeDateTimeModule() {
    }
    NativeDateTimeModule.ɵmod = i0.ɵɵdefineNgModule({ type: NativeDateTimeModule });
    NativeDateTimeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NativeDateTimeModule_Factory(t) { return new (t || NativeDateTimeModule)(); }, providers: [
            { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
        ], imports: [[PlatformModule]] });
    return NativeDateTimeModule;
}());
export { NativeDateTimeModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NativeDateTimeModule, { imports: [PlatformModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NativeDateTimeModule, [{
        type: NgModule,
        args: [{
                imports: [PlatformModule],
                providers: [
                    { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
                ],
            }]
    }], null, null); })();
var OwlNativeDateTimeModule = /** @class */ (function () {
    function OwlNativeDateTimeModule() {
    }
    OwlNativeDateTimeModule.ɵmod = i0.ɵɵdefineNgModule({ type: OwlNativeDateTimeModule });
    OwlNativeDateTimeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OwlNativeDateTimeModule_Factory(t) { return new (t || OwlNativeDateTimeModule)(); }, providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS }], imports: [[NativeDateTimeModule]] });
    return OwlNativeDateTimeModule;
}());
export { OwlNativeDateTimeModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OwlNativeDateTimeModule, { imports: [NativeDateTimeModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlNativeDateTimeModule, [{
        type: NgModule,
        args: [{
                imports: [NativeDateTimeModule],
                providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS }],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9hZGFwdGVyL25hdGl2ZS1kYXRlLXRpbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUUvRTtJQUFBO0tBT0M7NERBRFksb0JBQW9COzJIQUFwQixvQkFBb0IsbUJBSmxCO1lBQ1AsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztTQUM5RCxZQUhRLENBQUMsY0FBYyxDQUFDOytCQVo3QjtDQWtCQyxBQVBELElBT0M7U0FEWSxvQkFBb0I7d0ZBQXBCLG9CQUFvQixjQUxuQixjQUFjO2tEQUtmLG9CQUFvQjtjQU5oQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUN6QixTQUFTLEVBQUU7b0JBQ1AsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztpQkFDOUQ7YUFDSjs7QUFJRDtJQUFBO0tBS0M7K0RBRFksdUJBQXVCO2lJQUF2Qix1QkFBdUIsbUJBRnJCLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFDLENBQUMsWUFENUUsQ0FBQyxvQkFBb0IsQ0FBQztrQ0FyQm5DO0NBeUJDLEFBTEQsSUFLQztTQURZLHVCQUF1Qjt3RkFBdkIsdUJBQXVCLGNBUHZCLG9CQUFvQjtrREFPcEIsdUJBQXVCO2NBSm5DLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFDLENBQUM7YUFDeEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogbmF0aXZlLWRhdGUtdGltZS5tb2R1bGVcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBOYXRpdmVEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL25hdGl2ZS1kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XHJcbmltcG9ydCB7IE9XTF9EQVRFX1RJTUVfRk9STUFUUyB9IGZyb20gJy4vZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XHJcbmltcG9ydCB7IE9XTF9OQVRJVkVfREFURV9USU1FX0ZPUk1BVFMgfSBmcm9tICcuL25hdGl2ZS1kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUGxhdGZvcm1Nb2R1bGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IERhdGVUaW1lQWRhcHRlciwgdXNlQ2xhc3M6IE5hdGl2ZURhdGVUaW1lQWRhcHRlcn0sXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlRGF0ZVRpbWVNb2R1bGUge1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZURhdGVUaW1lTW9kdWxlXSxcclxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBPV0xfREFURV9USU1FX0ZPUk1BVFMsIHVzZVZhbHVlOiBPV0xfTkFUSVZFX0RBVEVfVElNRV9GT1JNQVRTfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSB7XHJcbn1cclxuIl19