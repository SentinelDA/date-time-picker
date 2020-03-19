import { __extends } from "tslib";
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
var zoomFadeIn = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})'
};
var zoomFadeInFrom = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
    transformOrigin: '{{ ox }} {{ oy }}'
};
var OwlDialogContainerComponent = /** @class */ (function (_super) {
    __extends(OwlDialogContainerComponent, _super);
    function OwlDialogContainerComponent(changeDetector, elementRef, focusTrapFactory, document) {
        var _this = _super.call(this) || this;
        _this.changeDetector = changeDetector;
        _this.elementRef = elementRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.document = document;
        /** ID of the element that should be considered as the dialog's label. */
        _this.ariaLabelledBy = null;
        /** Emits when an animation state changes. */
        _this.animationStateChanged = new EventEmitter();
        _this.isAnimating = false;
        _this.state = 'enter';
        // for animation purpose
        _this.params = {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%',
            scale: 0
        };
        // A variable to hold the focused element before the dialog was open.
        // This would help us to refocus back to element when the dialog was closed.
        _this.elementFocusedBeforeDialogWasOpened = null;
        return _this;
    }
    Object.defineProperty(OwlDialogContainerComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerTabIndex", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerId", {
        get: function () {
            return this._config.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerRole", {
        get: function () {
            return this._config.role || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaLabelledby", {
        get: function () {
            return this.ariaLabelledBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaDescribedby", {
        get: function () {
            return this._config.ariaDescribedBy || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAnimation", {
        get: function () {
            return { value: this.state, params: this.params };
        },
        enumerable: true,
        configurable: true
    });
    OwlDialogContainerComponent.prototype.ngOnInit = function () { };
    /**
     * Attach a ComponentPortal as content to this dialog container.
     */
    OwlDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach dialog content after content is already attached');
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
    };
    OwlDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        throw new Error('Method not implemented.');
    };
    OwlDialogContainerComponent.prototype.setConfig = function (config) {
        this._config = config;
        if (config.event) {
            this.calculateZoomOrigin(event);
        }
    };
    OwlDialogContainerComponent.prototype.onAnimationStart = function (event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
    };
    OwlDialogContainerComponent.prototype.onAnimationDone = function (event) {
        if (event.toState === 'enter') {
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.animationStateChanged.emit(event);
        this.isAnimating = false;
    };
    OwlDialogContainerComponent.prototype.startExitAnimation = function () {
        this.state = 'exit';
        this.changeDetector.markForCheck();
    };
    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     */
    OwlDialogContainerComponent.prototype.calculateZoomOrigin = function (event) {
        if (!event) {
            return;
        }
        var clientX = event.clientX;
        var clientY = event.clientY;
        var wh = window.innerWidth / 2;
        var hh = window.innerHeight / 2;
        var x = clientX - wh;
        var y = clientY - hh;
        var ox = clientX / window.innerWidth;
        var oy = clientY / window.innerHeight;
        this.params.x = x + "px";
        this.params.y = y + "px";
        this.params.ox = ox * 100 + "%";
        this.params.oy = oy * 100 + "%";
        this.params.scale = 0;
        return;
    };
    /**
     * Save the focused element before dialog was open
     */
    OwlDialogContainerComponent.prototype.savePreviouslyFocusedElement = function () {
        var _this = this;
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = this.document
                .activeElement;
            Promise.resolve().then(function () { return _this.elementRef.nativeElement.focus(); });
        }
    };
    OwlDialogContainerComponent.prototype.trapFocus = function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this._config.autoFocus) {
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    OwlDialogContainerComponent.prototype.restoreFocus = function () {
        var toFocus = this.elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
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
    return OwlDialogContainerComponent;
}(BasePortalOutlet));
export { OwlDialogContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyIsImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxVQUFVLEVBRVYsWUFBWSxFQUNaLE1BQU0sRUFFTixRQUFRLEVBQ1IsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDSCxPQUFPLEVBQ1AsWUFBWSxFQUVaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDVixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFHbEIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFHN0IsSUFBTSxVQUFVLEdBQUc7SUFDZixPQUFPLEVBQUUsQ0FBQztJQUNWLFNBQVMsRUFBRSwwREFBMEQ7Q0FDeEUsQ0FBQztBQUNGLElBQU0sY0FBYyxHQUFHO0lBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ1YsU0FBUyxFQUFFLDBEQUEwRDtJQUNyRSxlQUFlLEVBQUUsbUJBQW1CO0NBQ3ZDLENBQUM7QUFFRjtJQWtEaUQsK0NBQWdCO0lBZ0U3RCxxQ0FDWSxjQUFpQyxFQUNqQyxVQUFzQixFQUN0QixnQkFBa0MsRUFHbEMsUUFBYTtRQU56QixZQVFJLGlCQUFPLFNBQ1Y7UUFSVyxvQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JB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QUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQzNEO3FCQUNKLENBQUM7aUJBQ0w7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLHFCQUFxQixFQUFFLDBCQUEwQjtvQkFDakQsb0JBQW9CLEVBQUUseUJBQXlCO29CQUMvQyw4QkFBOEIsRUFBRSx5QkFBeUI7b0JBQ3pELGlCQUFpQixFQUFFLDRCQUE0QjtvQkFDL0MsV0FBVyxFQUFFLHNCQUFzQjtvQkFDbkMsYUFBYSxFQUFFLHdCQUF3QjtvQkFDdkMsd0JBQXdCLEVBQUUsa0NBQWtDO29CQUM1RCx5QkFBeUIsRUFBRSxtQ0FBbUM7b0JBQzlELGVBQWUsRUFBRSw2QkFBNkI7aUJBQ2pEO2FBQ0o7O3NCQXFFUSxRQUFROztzQkFDUixNQUFNO3VCQUFDLFFBQVE7O2tCQW5FbkIsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGRpYWxvZy1jb250YWluZXIuY29tcG9uZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEluamVjdCxcclxuICAgIE9uSW5pdCxcclxuICAgIE9wdGlvbmFsLFxyXG4gICAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBhbmltYXRlLFxyXG4gICAgYW5pbWF0ZUNoaWxkLFxyXG4gICAgQW5pbWF0aW9uRXZlbnQsXHJcbiAgICBrZXlmcmFtZXMsXHJcbiAgICBzdHlsZSxcclxuICAgIHRyYW5zaXRpb24sXHJcbiAgICB0cmlnZ2VyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge1xyXG4gICAgQmFzZVBvcnRhbE91dGxldCxcclxuICAgIENka1BvcnRhbE91dGxldCxcclxuICAgIENvbXBvbmVudFBvcnRhbCxcclxuICAgIFRlbXBsYXRlUG9ydGFsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IE93bERpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZy5jbGFzcyc7XHJcblxyXG5jb25zdCB6b29tRmFkZUluID0ge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoe3sgeCB9fSkgdHJhbnNsYXRlWSh7eyB5IH19KSBzY2FsZSh7e3NjYWxlfX0pJ1xyXG59O1xyXG5jb25zdCB6b29tRmFkZUluRnJvbSA9IHtcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKHt7IHggfX0pIHRyYW5zbGF0ZVkoe3sgeSB9fSkgc2NhbGUoe3tzY2FsZX19KScsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICd7eyBveCB9fSB7eyBveSB9fSdcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGlhbG9nLWNvbnRhaW5lcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignc2xpZGVNb2RhbCcsIFtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgICAgICd2b2lkID0+IGVudGVyJyxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh6b29tRmFkZUluRnJvbSksXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgnMzAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpJywgc3R5bGUoJyonKSksXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzE1MG1zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvZmZzZXQ6IDAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEuMDUpJywgb2Zmc2V0OiAwLjMgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKC45NSknLCBvZmZzZXQ6IDAuOCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvZmZzZXQ6IDEuMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUNoaWxkKClcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3g6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBveTogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgJ2VudGVyID0+IGV4aXQnLFxyXG4gICAgICAgICAgICAgICAgW2FuaW1hdGVDaGlsZCgpLCBhbmltYXRlKDIwMCwgc3R5bGUoem9vbUZhZGVJbikpXSxcclxuICAgICAgICAgICAgICAgIHsgcGFyYW1zOiB7IHg6ICcwcHgnLCB5OiAnMHB4Jywgb3g6ICc1MCUnLCBveTogJzUwJScgfSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdKVxyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKEBzbGlkZU1vZGFsLnN0YXJ0KSc6ICdvbkFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxyXG4gICAgICAgICcoQHNsaWRlTW9kYWwuZG9uZSknOiAnb25BbmltYXRpb25Eb25lKCRldmVudCknLFxyXG4gICAgICAgICdbY2xhc3Mub3dsLWRpYWxvZy1jb250YWluZXJdJzogJ293bERpYWxvZ0NvbnRhaW5lckNsYXNzJyxcclxuICAgICAgICAnW2F0dHIudGFiaW5kZXhdJzogJ293bERpYWxvZ0NvbnRhaW5lclRhYkluZGV4JyxcclxuICAgICAgICAnW2F0dHIuaWRdJzogJ293bERpYWxvZ0NvbnRhaW5lcklkJyxcclxuICAgICAgICAnW2F0dHIucm9sZV0nOiAnb3dsRGlhbG9nQ29udGFpbmVyUm9sZScsXHJcbiAgICAgICAgJ1thdHRyLmFyaWEtbGFiZWxsZWRieV0nOiAnb3dsRGlhbG9nQ29udGFpbmVyQXJpYUxhYmVsbGVkYnknLFxyXG4gICAgICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdvd2xEaWFsb2dDb250YWluZXJBcmlhRGVzY3JpYmVkYnknLFxyXG4gICAgICAgICdbQHNsaWRlTW9kYWxdJzogJ293bERpYWxvZ0NvbnRhaW5lckFuaW1hdGlvbidcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE93bERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXRcclxuICAgIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogdHJ1ZSB9KVxyXG4gICAgcG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XHJcblxyXG4gICAgLyoqIFRoZSBjbGFzcyB0aGF0IHRyYXBzIGFuZCBtYW5hZ2VzIGZvY3VzIHdpdGhpbiB0aGUgZGlhbG9nLiAqL1xyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcclxuXHJcbiAgICAvKiogSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyB0aGUgZGlhbG9nJ3MgbGFiZWwuICovXHJcbiAgICBwdWJsaWMgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8qKiBFbWl0cyB3aGVuIGFuIGFuaW1hdGlvbiBzdGF0ZSBjaGFuZ2VzLiAqL1xyXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XHJcblxyXG4gICAgcHVibGljIGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBPd2xEaWFsb2dDb25maWc7XHJcbiAgICBnZXQgY29uZmlnKCk6IE93bERpYWxvZ0NvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2V4aXQnID0gJ2VudGVyJztcclxuXHJcbiAgICAvLyBmb3IgYW5pbWF0aW9uIHB1cnBvc2VcclxuICAgIHByaXZhdGUgcGFyYW1zOiBhbnkgPSB7XHJcbiAgICAgICAgeDogJzBweCcsXHJcbiAgICAgICAgeTogJzBweCcsXHJcbiAgICAgICAgb3g6ICc1MCUnLFxyXG4gICAgICAgIG95OiAnNTAlJyxcclxuICAgICAgICBzY2FsZTogMFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBIHZhcmlhYmxlIHRvIGhvbGQgdGhlIGZvY3VzZWQgZWxlbWVudCBiZWZvcmUgdGhlIGRpYWxvZyB3YXMgb3Blbi5cclxuICAgIC8vIFRoaXMgd291bGQgaGVscCB1cyB0byByZWZvY3VzIGJhY2sgdG8gZWxlbWVudCB3aGVuIHRoZSBkaWFsb2cgd2FzIGNsb3NlZC5cclxuICAgIHByaXZhdGUgZWxlbWVudEZvY3VzZWRCZWZvcmVEaWFsb2dXYXNPcGVuZWQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lckNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJUYWJJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVySWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJSb2xlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5yb2xlIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lckFyaWFMYWJlbGxlZGJ5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJpYUxhYmVsbGVkQnk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lckFyaWFEZXNjcmliZWRieSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWcuYXJpYURlc2NyaWJlZEJ5IHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lckFuaW1hdGlvbigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLnN0YXRlLCBwYXJhbXM6IHRoaXMucGFyYW1zIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcclxuICAgICAgICBAT3B0aW9uYWwoKVxyXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpXHJcbiAgICAgICAgcHJpdmF0ZSBkb2N1bWVudDogYW55XHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2ggYSBDb21wb25lbnRQb3J0YWwgYXMgY29udGVudCB0byB0aGlzIGRpYWxvZyBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4oXHJcbiAgICAgICAgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD5cclxuICAgICk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnQXR0ZW1wdGluZyB0byBhdHRhY2ggZGlhbG9nIGNvbnRlbnQgYWZ0ZXIgY29udGVudCBpcyBhbHJlYWR5IGF0dGFjaGVkJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihcclxuICAgICAgICBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+XHJcbiAgICApOiBFbWJlZGRlZFZpZXdSZWY8Qz4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogT3dsRGlhbG9nQ29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlWm9vbU9yaWdpbihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFuaW1hdGlvblN0YXJ0KCBldmVudDogQW5pbWF0aW9uRXZlbnQgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZUNoYW5nZWQuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQW5pbWF0aW9uRG9uZSggZXZlbnQ6IEFuaW1hdGlvbkV2ZW50ICk6IHZvaWQge1xyXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZW50ZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhcEZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRFeGl0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZXhpdCc7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBvcmlnaW4gdXNlZCBpbiB0aGUgYHpvb21GYWRlSW5Gcm9tKClgXHJcbiAgICAgKiBmb3IgYW5pbWF0aW9uIHB1cnBvc2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVab29tT3JpZ2luKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG5cclxuICAgICAgICBjb25zdCB3aCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBoaCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgeCA9IGNsaWVudFggLSB3aDtcclxuICAgICAgICBjb25zdCB5ID0gY2xpZW50WSAtIGhoO1xyXG4gICAgICAgIGNvbnN0IG94ID0gY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnN0IG95ID0gY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJhbXMueCA9IGAke3h9cHhgO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLnkgPSBgJHt5fXB4YDtcclxuICAgICAgICB0aGlzLnBhcmFtcy5veCA9IGAke294ICogMTAwfSVgO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLm95ID0gYCR7b3kgKiAxMDB9JWA7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIHRoZSBmb2N1c2VkIGVsZW1lbnQgYmVmb3JlIGRpYWxvZyB3YXMgb3BlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZCA9IHRoaXMuZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvRm9jdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0b0ZvY3VzID0gdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZDtcclxuXHJcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUgY2FuIHNldCB0aGUgYGFjdGl2ZUVsZW1lbnRgIHRvIG51bGwgaW4gc29tZSBjYXNlcy5cclxuICAgICAgICBpZiAodG9Gb2N1cyAmJiB0eXBlb2YgdG9Gb2N1cy5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0b0ZvY3VzLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgY2RrUG9ydGFsT3V0bGV0PjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==