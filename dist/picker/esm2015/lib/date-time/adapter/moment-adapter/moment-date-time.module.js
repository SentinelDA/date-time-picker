/**
 * moment-date-time.module
 */
import { NgModule } from '@angular/core';
import { MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from './moment-date-time-adapter.class';
import { OWL_MOMENT_DATE_TIME_FORMATS } from './moment-date-time-format.class';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE } from '../date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from '../date-time-format.class';
import * as i0 from "@angular/core";
// import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE_PROVIDER } from 'ng-pick-datetime';
export class MomentDateTimeModule {
}
MomentDateTimeModule.ɵmod = i0.ɵɵdefineNgModule({ type: MomentDateTimeModule });
MomentDateTimeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MomentDateTimeModule_Factory(t) { return new (t || MomentDateTimeModule)(); }, providers: [
        {
            provide: DateTimeAdapter,
            useClass: MomentDateTimeAdapter,
            deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
        },
    ] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MomentDateTimeModule, [{
        type: NgModule,
        args: [{
                providers: [
                    {
                        provide: DateTimeAdapter,
                        useClass: MomentDateTimeAdapter,
                        deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
                    },
                ],
            }]
    }], null, null); })();
export class OwlMomentDateTimeModule {
}
OwlMomentDateTimeModule.ɵmod = i0.ɵɵdefineNgModule({ type: OwlMomentDateTimeModule });
OwlMomentDateTimeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OwlMomentDateTimeModule_Factory(t) { return new (t || OwlMomentDateTimeModule)(); }, providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS }], imports: [[MomentDateTimeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OwlMomentDateTimeModule, { imports: [MomentDateTimeModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlMomentDateTimeModule, [{
        type: NgModule,
        args: [{
                imports: [MomentDateTimeModule],
                providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS }],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9hZGFwdGVyL21vbWVudC1hZGFwdGVyL21vbWVudC1kYXRlLXRpbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBQ2xFLDRHQUE0RztBQVc1RyxNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0IsbUJBUmxCO1FBQ1A7WUFDSSxPQUFPLEVBQUUsZUFBZTtZQUN4QixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLElBQUksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9DQUFvQyxDQUFDO1NBQ3JFO0tBQ0o7a0RBRVEsb0JBQW9CO2NBVGhDLFFBQVE7ZUFBQztnQkFDTixTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLElBQUksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9DQUFvQyxDQUFDO3FCQUNyRTtpQkFDSjthQUNKOztBQVFELE1BQU0sT0FBTyx1QkFBdUI7OzJEQUF2Qix1QkFBdUI7NkhBQXZCLHVCQUF1QixtQkFGckIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQyxZQUQ1RSxDQUFDLG9CQUFvQixDQUFDO3dGQUd0Qix1QkFBdUIsY0FQdkIsb0JBQW9CO2tEQU9wQix1QkFBdUI7Y0FKbkMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQzthQUN4RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBtb21lbnQtZGF0ZS10aW1lLm1vZHVsZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vbWVudERhdGVUaW1lQWRhcHRlciwgT1dMX01PTUVOVF9EQVRFX1RJTUVfQURBUFRFUl9PUFRJT05TIH0gZnJvbSAnLi9tb21lbnQtZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBPV0xfTU9NRU5UX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnLi9tb21lbnQtZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciwgT1dMX0RBVEVfVElNRV9MT0NBTEUgfSBmcm9tICcuLi9kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XHJcbmltcG9ydCB7IE9XTF9EQVRFX1RJTUVfRk9STUFUUyB9IGZyb20gJy4uL2RhdGUtdGltZS1mb3JtYXQuY2xhc3MnO1xyXG4vLyBpbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIsIE9XTF9EQVRFX1RJTUVfRk9STUFUUywgT1dMX0RBVEVfVElNRV9MT0NBTEVfUFJPVklERVIgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IERhdGVUaW1lQWRhcHRlcixcclxuICAgICAgICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVUaW1lQWRhcHRlcixcclxuICAgICAgICAgICAgZGVwczogW09XTF9EQVRFX1RJTUVfTE9DQUxFLCBPV0xfTU9NRU5UX0RBVEVfVElNRV9BREFQVEVSX09QVElPTlNdXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb21lbnREYXRlVGltZU1vZHVsZSB7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTW9tZW50RGF0ZVRpbWVNb2R1bGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE9XTF9EQVRFX1RJTUVfRk9STUFUUywgdXNlVmFsdWU6IE9XTF9NT01FTlRfREFURV9USU1FX0ZPUk1BVFN9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE93bE1vbWVudERhdGVUaW1lTW9kdWxlIHtcclxufVxyXG4iXX0=