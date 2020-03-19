/**
 * dialog.module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { OWL_DIALOG_SCROLL_STRATEGY_PROVIDER, OwlDialogService } from './dialog.service';
import { OwlDialogContainerComponent } from './dialog-container.component';
import * as i0 from "@angular/core";
var OwlDialogModule = /** @class */ (function () {
    function OwlDialogModule() {
    }
    OwlDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: OwlDialogModule });
    OwlDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OwlDialogModule_Factory(t) { return new (t || OwlDialogModule)(); }, providers: [
            OWL_DIALOG_SCROLL_STRATEGY_PROVIDER,
            OwlDialogService,
        ], imports: [[CommonModule, A11yModule, OverlayModule, PortalModule]] });
    return OwlDialogModule;
}());
export { OwlDialogModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OwlDialogModule, { declarations: [OwlDialogContainerComponent], imports: [CommonModule, A11yModule, OverlayModule, PortalModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, A11yModule, OverlayModule, PortalModule],
                exports: [],
                declarations: [
                    OwlDialogContainerComponent,
                ],
                providers: [
                    OWL_DIALOG_SCROLL_STRATEGY_PROVIDER,
                    OwlDialogService,
                ],
                entryComponents: [
                    OwlDialogContainerComponent,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFM0U7SUFBQTtLQWVDO3VEQURZLGVBQWU7aUhBQWYsZUFBZSxtQkFSYjtZQUNQLG1DQUFtQztZQUNuQyxnQkFBZ0I7U0FDbkIsWUFSUSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQzswQkFicEU7Q0EyQkMsQUFmRCxJQWVDO1NBRFksZUFBZTt3RkFBZixlQUFlLG1CQVZwQiwyQkFBMkIsYUFIckIsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWTtrREFhdEQsZUFBZTtjQWQzQixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO2dCQUNoRSxPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUU7b0JBQ1YsMkJBQTJCO2lCQUM5QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsbUNBQW1DO29CQUNuQyxnQkFBZ0I7aUJBQ25CO2dCQUNELGVBQWUsRUFBRTtvQkFDYiwyQkFBMkI7aUJBQzlCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogZGlhbG9nLm1vZHVsZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBPV0xfRElBTE9HX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUiwgT3dsRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPd2xEaWFsb2dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBMTF5TW9kdWxlLCBPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW10sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBPd2xEaWFsb2dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgT1dMX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVIsXHJcbiAgICAgICAgT3dsRGlhbG9nU2VydmljZSxcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBPd2xEaWFsb2dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xEaWFsb2dNb2R1bGUge1xyXG59XHJcbiJdfQ==