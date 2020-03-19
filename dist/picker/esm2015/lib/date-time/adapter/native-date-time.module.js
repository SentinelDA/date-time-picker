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
export class NativeDateTimeModule {
}
NativeDateTimeModule.ɵmod = i0.ɵɵdefineNgModule({ type: NativeDateTimeModule });
NativeDateTimeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NativeDateTimeModule_Factory(t) { return new (t || NativeDateTimeModule)(); }, providers: [
        { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
    ], imports: [[PlatformModule]] });
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
export class OwlNativeDateTimeModule {
}
OwlNativeDateTimeModule.ɵmod = i0.ɵɵdefineNgModule({ type: OwlNativeDateTimeModule });
OwlNativeDateTimeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OwlNativeDateTimeModule_Factory(t) { return new (t || OwlNativeDateTimeModule)(); }, providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS }], imports: [[NativeDateTimeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OwlNativeDateTimeModule, { imports: [NativeDateTimeModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlNativeDateTimeModule, [{
        type: NgModule,
        args: [{
                imports: [NativeDateTimeModule],
                providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS }],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9hZGFwdGVyL25hdGl2ZS1kYXRlLXRpbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQVEvRSxNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0IsbUJBSmxCO1FBQ1AsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztLQUM5RCxZQUhRLENBQUMsY0FBYyxDQUFDO3dGQUtoQixvQkFBb0IsY0FMbkIsY0FBYztrREFLZixvQkFBb0I7Y0FOaEMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDekIsU0FBUyxFQUFFO29CQUNQLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUM7aUJBQzlEO2FBQ0o7O0FBUUQsTUFBTSxPQUFPLHVCQUF1Qjs7MkRBQXZCLHVCQUF1Qjs2SEFBdkIsdUJBQXVCLG1CQUZyQixDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBQyxDQUFDLFlBRDVFLENBQUMsb0JBQW9CLENBQUM7d0ZBR3RCLHVCQUF1QixjQVB2QixvQkFBb0I7a0RBT3BCLHVCQUF1QjtjQUpuQyxRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBQyxDQUFDO2FBQ3hGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIG5hdGl2ZS1kYXRlLXRpbWUubW9kdWxlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcclxuaW1wb3J0IHsgTmF0aXZlRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9uYXRpdmUtZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBPV0xfREFURV9USU1FX0ZPUk1BVFMgfSBmcm9tICcuL2RhdGUtdGltZS1mb3JtYXQuY2xhc3MnO1xyXG5pbXBvcnQgeyBPV0xfTkFUSVZFX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnLi9uYXRpdmUtZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1BsYXRmb3JtTW9kdWxlXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiBEYXRlVGltZUFkYXB0ZXIsIHVzZUNsYXNzOiBOYXRpdmVEYXRlVGltZUFkYXB0ZXJ9LFxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdGl2ZURhdGVUaW1lTW9kdWxlIHtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVEYXRlVGltZU1vZHVsZV0sXHJcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogT1dMX0RBVEVfVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogT1dMX05BVElWRV9EQVRFX1RJTUVfRk9STUFUU31dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUge1xyXG59XHJcbiJdfQ==