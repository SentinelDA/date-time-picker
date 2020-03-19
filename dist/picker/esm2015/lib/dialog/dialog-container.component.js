/**
 * dialog-container.component
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, ViewChild } from '@angular/core';
import { animate, animateChild, keyframes, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/portal";
function OwlDialogContainerComponent_ng_template_0_Template(rf, ctx) { }
const zoomFadeIn = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})'
};
const zoomFadeInFrom = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
    transformOrigin: '{{ ox }} {{ oy }}'
};
export class OwlDialogContainerComponent extends BasePortalOutlet {
    constructor(changeDetector, elementRef, focusTrapFactory, document) {
        super();
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.document = document;
        /** ID of the element that should be considered as the dialog's label. */
        this.ariaLabelledBy = null;
        /** Emits when an animation state changes. */
        this.animationStateChanged = new EventEmitter();
        this.isAnimating = false;
        this.state = 'enter';
        // for animation purpose
        this.params = {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%',
            scale: 0
        };
        // A variable to hold the focused element before the dialog was open.
        // This would help us to refocus back to element when the dialog was closed.
        this.elementFocusedBeforeDialogWasOpened = null;
    }
    get config() {
        return this._config;
    }
    get owlDialogContainerClass() {
        return true;
    }
    get owlDialogContainerTabIndex() {
        return -1;
    }
    get owlDialogContainerId() {
        return this._config.id;
    }
    get owlDialogContainerRole() {
        return this._config.role || null;
    }
    get owlDialogContainerAriaLabelledby() {
        return this.ariaLabelledBy;
    }
    get owlDialogContainerAriaDescribedby() {
        return this._config.ariaDescribedBy || null;
    }
    get owlDialogContainerAnimation() {
        return { value: this.state, params: this.params };
    }
    ngOnInit() { }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     */
    attachComponentPortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach dialog content after content is already attached');
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        throw new Error('Method not implemented.');
    }
    setConfig(config) {
        this._config = config;
        if (config.event) {
            this.calculateZoomOrigin(event);
        }
    }
    onAnimationStart(event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
    }
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.animationStateChanged.emit(event);
        this.isAnimating = false;
    }
    startExitAnimation() {
        this.state = 'exit';
        this.changeDetector.markForCheck();
    }
    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     */
    calculateZoomOrigin(event) {
        if (!event) {
            return;
        }
        const clientX = event.clientX;
        const clientY = event.clientY;
        const wh = window.innerWidth / 2;
        const hh = window.innerHeight / 2;
        const x = clientX - wh;
        const y = clientY - hh;
        const ox = clientX / window.innerWidth;
        const oy = clientY / window.innerHeight;
        this.params.x = `${x}px`;
        this.params.y = `${y}px`;
        this.params.ox = `${ox * 100}%`;
        this.params.oy = `${oy * 100}%`;
        this.params.scale = 0;
        return;
    }
    /**
     * Save the focused element before dialog was open
     */
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = this.document
                .activeElement;
            Promise.resolve().then(() => this.elementRef.nativeElement.focus());
        }
    }
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this._config.autoFocus) {
            this.focusTrap.focusInitialElementWhenReady();
        }
    }
    restoreFocus() {
        const toFocus = this.elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
OwlDialogContainerComponent.ɵfac = function OwlDialogContainerComponent_Factory(t) { return new (t || OwlDialogContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FocusTrapFactory), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
OwlDialogContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlDialogContainerComponent, selectors: [["owl-dialog-container"]], viewQuery: function OwlDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(CdkPortalOutlet, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
    } }, hostVars: 8, hostBindings: function OwlDialogContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵcomponentHostSyntheticListener("@slideModal.start", function OwlDialogContainerComponent_animation_slideModal_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@slideModal.done", function OwlDialogContainerComponent_animation_slideModal_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.owlDialogContainerTabIndex)("id", ctx.owlDialogContainerId)("role", ctx.owlDialogContainerRole)("aria-labelledby", ctx.owlDialogContainerAriaLabelledby)("aria-describedby", ctx.owlDialogContainerAriaDescribedby);
        i0.ɵɵupdateSyntheticHostBinding("@slideModal", ctx.owlDialogContainerAnimation);
        i0.ɵɵclassProp("owl-dialog-container", ctx.owlDialogContainerClass);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function OwlDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OwlDialogContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [i2.CdkPortalOutlet], encapsulation: 2, data: { animation: [
            trigger('slideModal', [
                transition('void => enter', [
                    style(zoomFadeInFrom),
                    animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style('*')),
                    animate('150ms', keyframes([
                        style({ transform: 'scale(1)', offset: 0 }),
                        style({ transform: 'scale(1.05)', offset: 0.3 }),
                        style({ transform: 'scale(.95)', offset: 0.8 }),
                        style({ transform: 'scale(1)', offset: 1.0 })
                    ])),
                    animateChild()
                ], {
                    params: {
                        x: '0px',
                        y: '0px',
                        ox: '50%',
                        oy: '50%',
                        scale: 1
                    }
                }),
                transition('enter => exit', [animateChild(), animate(200, style(zoomFadeIn))], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%' } })
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDialogContainerComponent, [{
        type: Component,
        args: [{
                selector: 'owl-dialog-container',
                templateUrl: './dialog-container.component.html',
                animations: [
                    trigger('slideModal', [
                        transition('void => enter', [
                            style(zoomFadeInFrom),
                            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style('*')),
                            animate('150ms', keyframes([
                                style({ transform: 'scale(1)', offset: 0 }),
                                style({ transform: 'scale(1.05)', offset: 0.3 }),
                                style({ transform: 'scale(.95)', offset: 0.8 }),
                                style({ transform: 'scale(1)', offset: 1.0 })
                            ])),
                            animateChild()
                        ], {
                            params: {
                                x: '0px',
                                y: '0px',
                                ox: '50%',
                                oy: '50%',
                                scale: 1
                            }
                        }),
                        transition('enter => exit', [animateChild(), animate(200, style(zoomFadeIn))], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%' } })
                    ])
                ],
                host: {
                    '(@slideModal.start)': 'onAnimationStart($event)',
                    '(@slideModal.done)': 'onAnimationDone($event)',
                    '[class.owl-dialog-container]': 'owlDialogContainerClass',
                    '[attr.tabindex]': 'owlDialogContainerTabIndex',
                    '[attr.id]': 'owlDialogContainerId',
                    '[attr.role]': 'owlDialogContainerRole',
                    '[attr.aria-labelledby]': 'owlDialogContainerAriaLabelledby',
                    '[attr.aria-describedby]': 'owlDialogContainerAriaDescribedby',
                    '[@slideModal]': 'owlDialogContainerAnimation'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FocusTrapFactory }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { portalOutlet: [{
            type: ViewChild,
            args: [CdkPortalOutlet, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyIsImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFFVixZQUFZLEVBQ1osTUFBTSxFQUVOLFFBQVEsRUFDUixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILE9BQU8sRUFDUCxZQUFZLEVBRVosU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNWLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFDSCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUdsQixNQUFNLHFCQUFxQixDQUFDOzs7OztBQUc3QixNQUFNLFVBQVUsR0FBRztJQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1YsU0FBUyxFQUFFLDBEQUEwRDtDQUN4RSxDQUFDO0FBQ0YsTUFBTSxjQUFjLEdBQUc7SUFDbkIsT0FBTyxFQUFFLENBQUM7SUFDVixTQUFTLEVBQUUsMERBQTBEO0lBQ3JFLGVBQWUsRUFBRSxtQkFBbUI7Q0FDdkMsQ0FBQztBQW9ERixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCO0lBZ0U3RCxZQUNZLGNBQWlDLEVBQ2pDLFVBQXNCLEVBQ3RCLGdCQUFrQyxFQUdsQyxRQUFhO1FBRXJCLEtBQUssRUFBRSxDQUFDO1FBUEEsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGVBQVUsR0FBVixVQUFVLENB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LEVBQUUsNEJBQTRCO29CQUMvQyxXQUFXLEVBQUUsc0JBQXNCO29CQUNuQyxhQUFhLEVBQUUsd0JBQXdCO29CQUN2Qyx3QkFBd0IsRUFBRSxrQ0FBa0M7b0JBQzVELHlCQUF5QixFQUFFLG1DQUFtQztvQkFDOUQsZUFBZSxFQUFFLDZCQUE2QjtpQkFDakQ7YUFDSjs7c0JBcUVRLFFBQVE7O3NCQUNSLE1BQU07dUJBQUMsUUFBUTs7a0JBbkVuQixTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnRcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5qZWN0LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIGFuaW1hdGUsXHJcbiAgICBhbmltYXRlQ2hpbGQsXHJcbiAgICBBbmltYXRpb25FdmVudCxcclxuICAgIGtleWZyYW1lcyxcclxuICAgIHN0eWxlLFxyXG4gICAgdHJhbnNpdGlvbixcclxuICAgIHRyaWdnZXJcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb2N1c1RyYXAsIEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7XHJcbiAgICBCYXNlUG9ydGFsT3V0bGV0LFxyXG4gICAgQ2RrUG9ydGFsT3V0bGV0LFxyXG4gICAgQ29tcG9uZW50UG9ydGFsLFxyXG4gICAgVGVtcGxhdGVQb3J0YWxcclxufSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgT3dsRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnLmNsYXNzJztcclxuXHJcbmNvbnN0IHpvb21GYWRlSW4gPSB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCh7eyB4IH19KSB0cmFuc2xhdGVZKHt7IHkgfX0pIHNjYWxlKHt7c2NhbGV9fSknXHJcbn07XHJcbmNvbnN0IHpvb21GYWRlSW5Gcm9tID0ge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoe3sgeCB9fSkgdHJhbnNsYXRlWSh7eyB5IH19KSBzY2FsZSh7e3NjYWxlfX0pJyxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3t7IG94IH19IHt7IG95IH19J1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ293bC1kaWFsb2ctY29udGFpbmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdzbGlkZU1vZGFsJywgW1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgJ3ZvaWQgPT4gZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHpvb21GYWRlSW5Gcm9tKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCczMDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSknLCBzdHlsZSgnKicpKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMTUwbXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9mZnNldDogMCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMS4wNSknLCBvZmZzZXQ6IDAuMyB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoLjk1KScsIG9mZnNldDogMC44IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9mZnNldDogMS4wIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlQ2hpbGQoKVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBveDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG95OiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAnZW50ZXIgPT4gZXhpdCcsXHJcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZUNoaWxkKCksIGFuaW1hdGUoMjAwLCBzdHlsZSh6b29tRmFkZUluKSldLFxyXG4gICAgICAgICAgICAgICAgeyBwYXJhbXM6IHsgeDogJzBweCcsIHk6ICcwcHgnLCBveDogJzUwJScsIG95OiAnNTAlJyB9IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIF0pXHJcbiAgICBdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICcoQHNsaWRlTW9kYWwuc3RhcnQpJzogJ29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXHJcbiAgICAgICAgJyhAc2xpZGVNb2RhbC5kb25lKSc6ICdvbkFuaW1hdGlvbkRvbmUoJGV2ZW50KScsXHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZGlhbG9nLWNvbnRhaW5lcl0nOiAnb3dsRGlhbG9nQ29udGFpbmVyQ2xhc3MnLFxyXG4gICAgICAgICdbYXR0ci50YWJpbmRleF0nOiAnb3dsRGlhbG9nQ29udGFpbmVyVGFiSW5kZXgnLFxyXG4gICAgICAgICdbYXR0ci5pZF0nOiAnb3dsRGlhbG9nQ29udGFpbmVySWQnLFxyXG4gICAgICAgICdbYXR0ci5yb2xlXSc6ICdvd2xEaWFsb2dDb250YWluZXJSb2xlJyxcclxuICAgICAgICAnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XSc6ICdvd2xEaWFsb2dDb250YWluZXJBcmlhTGFiZWxsZWRieScsXHJcbiAgICAgICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ293bERpYWxvZ0NvbnRhaW5lckFyaWFEZXNjcmliZWRieScsXHJcbiAgICAgICAgJ1tAc2xpZGVNb2RhbF0nOiAnb3dsRGlhbG9nQ29udGFpbmVyQW5pbWF0aW9uJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3dsRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBvcnRhbE91dGxldFxyXG4gICAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChDZGtQb3J0YWxPdXRsZXQsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgICBwb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcclxuXHJcbiAgICAvKiogVGhlIGNsYXNzIHRoYXQgdHJhcHMgYW5kIG1hbmFnZXMgZm9jdXMgd2l0aGluIHRoZSBkaWFsb2cuICovXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xyXG5cclxuICAgIC8qKiBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHRoZSBkaWFsb2cncyBsYWJlbC4gKi9cclxuICAgIHB1YmxpYyBhcmlhTGFiZWxsZWRCeTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEVtaXRzIHdoZW4gYW4gYW5pbWF0aW9uIHN0YXRlIGNoYW5nZXMuICovXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxBbmltYXRpb25FdmVudD4oKTtcclxuXHJcbiAgICBwdWJsaWMgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9jb25maWc6IE93bERpYWxvZ0NvbmZpZztcclxuICAgIGdldCBjb25maWcoKTogT3dsRGlhbG9nQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGU6ICd2b2lkJyB8ICdlbnRlcicgfCAnZXhpdCcgPSAnZW50ZXInO1xyXG5cclxuICAgIC8vIGZvciBhbmltYXRpb24gcHVycG9zZVxyXG4gICAgcHJpdmF0ZSBwYXJhbXM6IGFueSA9IHtcclxuICAgICAgICB4OiAnMHB4JyxcclxuICAgICAgICB5OiAnMHB4JyxcclxuICAgICAgICBveDogJzUwJScsXHJcbiAgICAgICAgb3k6ICc1MCUnLFxyXG4gICAgICAgIHNjYWxlOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEEgdmFyaWFibGUgdG8gaG9sZCB0aGUgZm9jdXNlZCBlbGVtZW50IGJlZm9yZSB0aGUgZGlhbG9nIHdhcyBvcGVuLlxyXG4gICAgLy8gVGhpcyB3b3VsZCBoZWxwIHVzIHRvIHJlZm9jdXMgYmFjayB0byBlbGVtZW50IHdoZW4gdGhlIGRpYWxvZyB3YXMgY2xvc2VkLlxyXG4gICAgcHJpdmF0ZSBlbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lclRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWcuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lclJvbGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnJvbGUgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyQXJpYUxhYmVsbGVkYnkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcmlhTGFiZWxsZWRCeTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyQXJpYURlc2NyaWJlZGJ5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hcmlhRGVzY3JpYmVkQnkgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyQW5pbWF0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuc3RhdGUsIHBhcmFtczogdGhpcy5wYXJhbXMgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgICAgIEBPcHRpb25hbCgpXHJcbiAgICAgICAgQEluamVjdChET0NVTUVOVClcclxuICAgICAgICBwcml2YXRlIGRvY3VtZW50OiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhIENvbXBvbmVudFBvcnRhbCBhcyBjb250ZW50IHRvIHRoaXMgZGlhbG9nIGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcclxuICAgICAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPlxyXG4gICAgKTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgICAgICBpZiAodGhpcy5wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgICdBdHRlbXB0aW5nIHRvIGF0dGFjaCBkaWFsb2cgY29udGVudCBhZnRlciBjb250ZW50IGlzIGFscmVhZHkgYXR0YWNoZWQnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3J0YWxPdXRsZXQuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaFRlbXBsYXRlUG9ydGFsPEM+KFxyXG4gICAgICAgIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8Qz5cclxuICAgICk6IEVtYmVkZGVkVmlld1JlZjxDPiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBPd2xEaWFsb2dDb25maWcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVab29tT3JpZ2luKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQW5pbWF0aW9uU3RhcnQoIGV2ZW50OiBBbmltYXRpb25FdmVudCApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25BbmltYXRpb25Eb25lKCBldmVudDogQW5pbWF0aW9uRXZlbnQgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFwRm9jdXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdleGl0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZUNoYW5nZWQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEV4aXRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdleGl0JztcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIG9yaWdpbiB1c2VkIGluIHRoZSBgem9vbUZhZGVJbkZyb20oKWBcclxuICAgICAqIGZvciBhbmltYXRpb24gcHVycG9zZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZVpvb21PcmlnaW4oZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghZXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IGhoID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgICBjb25zdCB4ID0gY2xpZW50WCAtIHdoO1xyXG4gICAgICAgIGNvbnN0IHkgPSBjbGllbnRZIC0gaGg7XHJcbiAgICAgICAgY29uc3Qgb3ggPSBjbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY29uc3Qgb3kgPSBjbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnBhcmFtcy54ID0gYCR7eH1weGA7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMueSA9IGAke3l9cHhgO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLm94ID0gYCR7b3ggKiAxMDB9JWA7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMub3kgPSBgJHtveSAqIDEwMH0lYDtcclxuICAgICAgICB0aGlzLnBhcmFtcy5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgdGhlIGZvY3VzZWQgZWxlbWVudCBiZWZvcmUgZGlhbG9nIHdhcyBvcGVuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kb2N1bWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkID0gdGhpcy5kb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyYXBGb2N1cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9Gb2N1cykge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRvRm9jdXMgPSB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkO1xyXG5cclxuICAgICAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgICAgIGlmICh0b0ZvY3VzICYmIHR5cGVvZiB0b0ZvY3VzLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRvRm9jdXMuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSBjZGtQb3J0YWxPdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cclxuIl19