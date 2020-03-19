/**
 * dialog.service
 */
import { Inject, Injectable, InjectionToken, Injector, Optional, SkipSelf, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { OwlDialogConfig } from './dialog-config.class';
import { OwlDialogRef } from './dialog-ref.class';
import { OwlDialogContainerComponent } from './dialog-container.component';
import { extendObject } from '../utils';
import { defer, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Overlay, OverlayConfig, OverlayContainer } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/common";
import * as i3 from "./dialog-config.class";
export var OWL_DIALOG_DATA = new InjectionToken('OwlDialogData');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 * */
export var OWL_DIALOG_SCROLL_STRATEGY = new InjectionToken('owl-dialog-scroll-strategy');
export function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    var fn = function () { return overlay.scrollStrategies.block(); };
    return fn;
}
/** @docs-private */
export var OWL_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: OWL_DIALOG_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/** I
 * njection token that can be used to specify default dialog options.
 * */
export var OWL_DIALOG_DEFAULT_OPTIONS = new InjectionToken('owl-dialog-default-options');
var OwlDialogService = /** @class */ (function () {
    function OwlDialogService(overlay, injector, location, scrollStrategy, defaultOptions, parentDialog, overlayContainer) {
        var _this = this;
        this.overlay = overlay;
        this.injector = injector;
        this.location = location;
        this.defaultOptions = defaultOptions;
        this.parentDialog = parentDialog;
        this.overlayContainer = overlayContainer;
        this.ariaHiddenElements = new Map();
        this._openDialogsAtThisLevel = [];
        this._afterOpenAtThisLevel = new Subject();
        this._afterAllClosedAtThisLevel = new Subject();
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = defer(function () {
            return _this._openDialogsAtThisLevel.length
                ? _this._afterAllClosed
                : _this._afterAllClosed.pipe(startWith(undefined));
        });
        this.scrollStrategy = scrollStrategy;
        if (!parentDialog && location) {
            location.subscribe(function () { return _this.closeAll(); });
        }
    }
    Object.defineProperty(OwlDialogService.prototype, "openDialogs", {
        /** Keeps track of the currently-open dialogs. */
        get: function () {
            return this.parentDialog
                ? this.parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogService.prototype, "afterOpen", {
        /** Stream that emits when a dialog has been opened. */
        get: function () {
            return this.parentDialog
                ? this.parentDialog.afterOpen
                : this._afterOpenAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogService.prototype, "_afterAllClosed", {
        get: function () {
            var parent = this.parentDialog;
            return parent
                ? parent._afterAllClosed
                : this._afterAllClosedAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    OwlDialogService.prototype.open = function (componentOrTemplateRef, config) {
        var _this = this;
        config = applyConfigDefaults(config, this.defaultOptions);
        if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
        }
        var overlayRef = this.createOverlay(config);
        var dialogContainer = this.attachDialogContainer(overlayRef, config);
        var dialogRef = this.attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        if (!this.openDialogs.length) {
            this.hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef
            .afterClosed()
            .subscribe(function () { return _this.removeOpenDialog(dialogRef); });
        this.afterOpen.next(dialogRef);
        return dialogRef;
    };
    /**
     * Closes all of the currently-open dialogs.
     */
    OwlDialogService.prototype.closeAll = function () {
        var i = this.openDialogs.length;
        while (i--) {
            this.openDialogs[i].close();
        }
    };
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    OwlDialogService.prototype.getDialogById = function (id) {
        return this.openDialogs.find(function (dialog) { return dialog.id === id; });
    };
    OwlDialogService.prototype.attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        var dialogRef = new OwlDialogRef(overlayRef, dialogContainer, config.id, this.location);
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(function () {
                if (!dialogRef.disableClose) {
                    dialogRef.close();
                }
            });
        }
        if (componentOrTemplateRef instanceof TemplateRef) {
        }
        else {
            var injector = this.createInjector(config, dialogRef, dialogContainer);
            var contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    };
    OwlDialogService.prototype.createInjector = function (config, dialogRef, dialogContainer) {
        var userInjector = config &&
            config.viewContainerRef &&
            config.viewContainerRef.injector;
        var injectionTokens = new WeakMap();
        injectionTokens.set(OwlDialogRef, dialogRef);
        injectionTokens.set(OwlDialogContainerComponent, dialogContainer);
        injectionTokens.set(OWL_DIALOG_DATA, config.data);
        return new PortalInjector(userInjector || this.injector, injectionTokens);
    };
    OwlDialogService.prototype.createOverlay = function (config) {
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    OwlDialogService.prototype.attachDialogContainer = function (overlayRef, config) {
        var containerPortal = new ComponentPortal(OwlDialogContainerComponent, config.viewContainerRef);
        var containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.setConfig(config);
        return containerRef.instance;
    };
    OwlDialogService.prototype.getOverlayConfig = function (dialogConfig) {
        var state = new OverlayConfig({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this.scrollStrategy(),
            panelClass: dialogConfig.paneClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    };
    OwlDialogService.prototype.removeOpenDialog = function (dialogRef) {
        var index = this._openDialogsAtThisLevel.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this.ariaHiddenElements.forEach(function (previousValue, element) {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this.ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    };
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     */
    OwlDialogService.prototype.hideNonDialogContentFromAssistiveTechnology = function () {
        var overlayContainer = this.overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            var siblings = overlayContainer.parentElement.children;
            for (var i = siblings.length - 1; i > -1; i--) {
                var sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this.ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    };
    OwlDialogService.ɵfac = function OwlDialogService_Factory(t) { return new (t || OwlDialogService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.Location, 8), i0.ɵɵinject(OWL_DIALOG_SCROLL_STRATEGY), i0.ɵɵinject(OWL_DIALOG_DEFAULT_OPTIONS, 8), i0.ɵɵinject(OwlDialogService, 12), i0.ɵɵinject(i1.OverlayContainer)); };
    OwlDialogService.ɵprov = i0.ɵɵdefineInjectable({ token: OwlDialogService, factory: OwlDialogService.ɵfac });
    return OwlDialogService;
}());
export { OwlDialogService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDialogService, [{
        type: Injectable
    }], function () { return [{ type: i1.Overlay }, { type: i0.Injector }, { type: i2.Location, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [OWL_DIALOG_SCROLL_STRATEGY]
            }] }, { type: i3.OwlDialogConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [OWL_DIALOG_DEFAULT_OPTIONS]
            }] }, { type: OwlDialogService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: i1.OverlayContainer }]; }, null); })();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default config setting
 * @returns The new configuration object.
 */
function applyConfigDefaults(config, defaultOptions) {
    return extendObject(new OwlDialogConfig(), config, defaultOptions);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFFSCxNQUFNLEVBQ04sVUFBVSxFQUNWLGNBQWMsRUFDZCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNILE9BQU8sRUFDUCxhQUFhLEVBQ2IsZ0JBQWdCLEVBR25CLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUNILGVBQWUsRUFFZixjQUFjLEVBQ2pCLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRTdCLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBTSxlQUFlLENBQUMsQ0FBQztBQUV4RTs7S0FFSztBQUNMLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUUxRCw0QkFBNEIsQ0FBQyxDQUFDO0FBRWhDLE1BQU0sVUFBVSwyQ0FBMkMsQ0FDdkQsT0FBZ0I7SUFFaEIsSUFBTSxFQUFFLEdBQUcsY0FBTSxPQUFBLE9BQU8sQ0FB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QUFtQixDQUN4QixNQUF3QixFQUN4QixjQUFnQztJQUVoQyxPQUFPLFlBQVksQ0FBQyxJQUFJLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN2RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGRpYWxvZy5zZXJ2aWNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudFJlZixcclxuICAgIEluamVjdCxcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3Rpb25Ub2tlbixcclxuICAgIEluamVjdG9yLFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBTa2lwU2VsZixcclxuICAgIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT3dsRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnLmNsYXNzJztcclxuaW1wb3J0IHsgT3dsRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgT3dsRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGV4dGVuZE9iamVjdCB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgZGVmZXIsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gICAgT3ZlcmxheSxcclxuICAgIE92ZXJsYXlDb25maWcsXHJcbiAgICBPdmVybGF5Q29udGFpbmVyLFxyXG4gICAgT3ZlcmxheVJlZixcclxuICAgIFNjcm9sbFN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50UG9ydGFsLFxyXG4gICAgQ29tcG9uZW50VHlwZSxcclxuICAgIFBvcnRhbEluamVjdG9yXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcblxyXG5leHBvcnQgY29uc3QgT1dMX0RJQUxPR19EQVRBID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ093bERpYWxvZ0RhdGEnKTtcclxuXHJcbi8qKlxyXG4gKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBkZXRlcm1pbmVzIHRoZSBzY3JvbGwgaGFuZGxpbmcgd2hpbGUgdGhlIGRpYWxvZyBpcyBvcGVuLlxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgT1dMX0RJQUxPR19TQ1JPTExfU1RSQVRFR1kgPSBuZXcgSW5qZWN0aW9uVG9rZW48XHJcbiAgICAoKSA9PiBTY3JvbGxTdHJhdGVneVxyXG4+KCdvd2wtZGlhbG9nLXNjcm9sbC1zdHJhdGVneScpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9XTF9ESUFMT0dfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSX0ZBQ1RPUlkoXHJcbiAgICBvdmVybGF5OiBPdmVybGF5XHJcbik6ICgpID0+IFNjcm9sbFN0cmF0ZWd5IHtcclxuICAgIGNvbnN0IGZuID0gKCkgPT4gb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcbiAgICByZXR1cm4gZm47XHJcbn1cclxuXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmV4cG9ydCBjb25zdCBPV0xfRElBTE9HX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUiA9IHtcclxuICAgIHByb3ZpZGU6IE9XTF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLFxyXG4gICAgZGVwczogW092ZXJsYXldLFxyXG4gICAgdXNlRmFjdG9yeTogT1dMX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVJfRkFDVE9SWVxyXG59O1xyXG5cclxuLyoqIElcclxuICogbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGRlZmF1bHQgZGlhbG9nIG9wdGlvbnMuXHJcbiAqICovXHJcbmV4cG9ydCBjb25zdCBPV0xfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxPd2xEaWFsb2dDb25maWc+KFxyXG4gICAgJ293bC1kaWFsb2ctZGVmYXVsdC1vcHRpb25zJ1xyXG4pO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT3dsRGlhbG9nU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGFyaWFIaWRkZW5FbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgc3RyaW5nIHwgbnVsbD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vcGVuRGlhbG9nc0F0VGhpc0xldmVsOiBPd2xEaWFsb2dSZWY8YW55PltdID0gW107XHJcbiAgICBwcml2YXRlIF9hZnRlck9wZW5BdFRoaXNMZXZlbCA9IG5ldyBTdWJqZWN0PE93bERpYWxvZ1JlZjxhbnk+PigpO1xyXG4gICAgcHJpdmF0ZSBfYWZ0ZXJBbGxDbG9zZWRBdFRoaXNMZXZlbCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzLiAqL1xyXG4gICAgZ2V0IG9wZW5EaWFsb2dzKCk6IE93bERpYWxvZ1JlZjxhbnk+W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudERpYWxvZ1xyXG4gICAgICAgICAgICA/IHRoaXMucGFyZW50RGlhbG9nLm9wZW5EaWFsb2dzXHJcbiAgICAgICAgICAgIDogdGhpcy5fb3BlbkRpYWxvZ3NBdFRoaXNMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhIGRpYWxvZyBoYXMgYmVlbiBvcGVuZWQuICovXHJcbiAgICBnZXQgYWZ0ZXJPcGVuKCk6IFN1YmplY3Q8T3dsRGlhbG9nUmVmPGFueT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnREaWFsb2dcclxuICAgICAgICAgICAgPyB0aGlzLnBhcmVudERpYWxvZy5hZnRlck9wZW5cclxuICAgICAgICAgICAgOiB0aGlzLl9hZnRlck9wZW5BdFRoaXNMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX2FmdGVyQWxsQ2xvc2VkKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnREaWFsb2c7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudFxyXG4gICAgICAgICAgICA/IHBhcmVudC5fYWZ0ZXJBbGxDbG9zZWRcclxuICAgICAgICAgICAgOiB0aGlzLl9hZnRlckFsbENsb3NlZEF0VGhpc0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbGwgb3BlbiBkaWFsb2cgaGF2ZSBmaW5pc2hlZCBjbG9zaW5nLlxyXG4gICAgICogV2lsbCBlbWl0IG9uIHN1YnNjcmliZSBpZiB0aGVyZSBhcmUgbm8gb3BlbiBkaWFsb2dzIHRvIGJlZ2luIHdpdGguXHJcbiAgICAgKi9cclxuXHJcbiAgICBhZnRlckFsbENsb3NlZDogT2JzZXJ2YWJsZTx7fT4gPSBkZWZlcihcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLl9vcGVuRGlhbG9nc0F0VGhpc0xldmVsLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9hZnRlckFsbENsb3NlZFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9hZnRlckFsbENsb3NlZC5waXBlKHN0YXJ0V2l0aCh1bmRlZmluZWQpKVxyXG4gICAgKTtcclxuXHJcbiAgICBwcml2YXRlIHNjcm9sbFN0cmF0ZWd5OiAoKSA9PiBTY3JvbGxTdHJhdGVneTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgQEluamVjdChPV0xfRElBTE9HX1NDUk9MTF9TVFJBVEVHWSkgc2Nyb2xsU3RyYXRlZ3k6IGFueSxcclxuICAgICAgICBAT3B0aW9uYWwoKVxyXG4gICAgICAgIEBJbmplY3QoT1dMX0RJQUxPR19ERUZBVUxUX09QVElPTlMpXHJcbiAgICAgICAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogT3dsRGlhbG9nQ29uZmlnLFxyXG4gICAgICAgIEBPcHRpb25hbCgpXHJcbiAgICAgICAgQFNraXBTZWxmKClcclxuICAgICAgICBwcml2YXRlIHBhcmVudERpYWxvZzogT3dsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSBzY3JvbGxTdHJhdGVneTtcclxuICAgICAgICBpZiAoIXBhcmVudERpYWxvZyAmJiBsb2NhdGlvbikge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZUFsbCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW48VD4oXHJcbiAgICAgICAgY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxyXG4gICAgICAgIGNvbmZpZz86IE93bERpYWxvZ0NvbmZpZ1xyXG4gICAgKTogT3dsRGlhbG9nUmVmPGFueT4ge1xyXG4gICAgICAgIGNvbmZpZyA9IGFwcGx5Q29uZmlnRGVmYXVsdHMoY29uZmlnLCB0aGlzLmRlZmF1bHRPcHRpb25zKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5pZCAmJiB0aGlzLmdldERpYWxvZ0J5SWQoY29uZmlnLmlkKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBEaWFsb2cgd2l0aCBpZCBcIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmlkXHJcbiAgICAgICAgICAgICAgICB9XCIgZXhpc3RzIGFscmVhZHkuIFRoZSBkaWFsb2cgaWQgbXVzdCBiZSB1bmlxdWUuYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShjb25maWcpO1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IHRoaXMuYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXlSZWYsIGNvbmZpZyk7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5hdHRhY2hEaWFsb2dDb250ZW50PFQ+KFxyXG4gICAgICAgICAgICBjb21wb25lbnRPclRlbXBsYXRlUmVmLFxyXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIsXHJcbiAgICAgICAgICAgIG92ZXJsYXlSZWYsXHJcbiAgICAgICAgICAgIGNvbmZpZ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vcGVuRGlhbG9ncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlTm9uRGlhbG9nQ29udGVudEZyb21Bc3Npc3RpdmVUZWNobm9sb2d5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9wZW5EaWFsb2dzLnB1c2goZGlhbG9nUmVmKTtcclxuICAgICAgICBkaWFsb2dSZWZcclxuICAgICAgICAgICAgLmFmdGVyQ2xvc2VkKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbW92ZU9wZW5EaWFsb2coZGlhbG9nUmVmKSk7XHJcbiAgICAgICAgdGhpcy5hZnRlck9wZW4ubmV4dChkaWFsb2dSZWYpO1xyXG4gICAgICAgIHJldHVybiBkaWFsb2dSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgYWxsIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLm9wZW5EaWFsb2dzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2dzW2ldLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZHMgYW4gb3BlbiBkaWFsb2cgYnkgaXRzIGlkLlxyXG4gICAgICogQHBhcmFtIGlkIElEIHRvIHVzZSB3aGVuIGxvb2tpbmcgdXAgdGhlIGRpYWxvZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldERpYWxvZ0J5SWQoaWQ6IHN0cmluZyk6IE93bERpYWxvZ1JlZjxhbnk+IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuRGlhbG9ncy5maW5kKGRpYWxvZyA9PiBkaWFsb2cuaWQgPT09IGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaERpYWxvZ0NvbnRlbnQ8VD4oXHJcbiAgICAgICAgY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxyXG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lcjogT3dsRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXHJcbiAgICAgICAgY29uZmlnOiBPd2xEaWFsb2dDb25maWdcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IG5ldyBPd2xEaWFsb2dSZWY8VD4oXHJcbiAgICAgICAgICAgIG92ZXJsYXlSZWYsXHJcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lcixcclxuICAgICAgICAgICAgY29uZmlnLmlkLFxyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNCYWNrZHJvcCkge1xyXG4gICAgICAgICAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaWFsb2dSZWYuZGlzYWJsZUNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3RvcjxUPihcclxuICAgICAgICAgICAgICAgIGNvbmZpZyxcclxuICAgICAgICAgICAgICAgIGRpYWxvZ1JlZixcclxuICAgICAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50UmVmID0gZGlhbG9nQ29udGFpbmVyLmF0dGFjaENvbXBvbmVudFBvcnRhbChcclxuICAgICAgICAgICAgICAgIG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCBpbmplY3RvcilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlID0gY29udGVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZlxyXG4gICAgICAgICAgICAudXBkYXRlU2l6ZShjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpXHJcbiAgICAgICAgICAgIC51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5qZWN0b3I8VD4oXHJcbiAgICAgICAgY29uZmlnOiBPd2xEaWFsb2dDb25maWcsXHJcbiAgICAgICAgZGlhbG9nUmVmOiBPd2xEaWFsb2dSZWY8VD4sXHJcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyOiBPd2xEaWFsb2dDb250YWluZXJDb21wb25lbnRcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmplY3RvciA9XHJcbiAgICAgICAgICAgIGNvbmZpZyAmJlxyXG4gICAgICAgICAgICBjb25maWcudmlld0NvbnRhaW5lclJlZiAmJlxyXG4gICAgICAgICAgICBjb25maWcudmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcclxuICAgICAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgICAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KE93bERpYWxvZ1JlZiwgZGlhbG9nUmVmKTtcclxuICAgICAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KE93bERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCwgZGlhbG9nQ29udGFpbmVyKTtcclxuICAgICAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KE9XTF9ESUFMT0dfREFUQSwgY29uZmlnLmRhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKFxyXG4gICAgICAgICAgICB1c2VySW5qZWN0b3IgfHwgdGhpcy5pbmplY3RvcixcclxuICAgICAgICAgICAgaW5qZWN0aW9uVG9rZW5zXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBPd2xEaWFsb2dDb25maWcpOiBPdmVybGF5UmVmIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2hEaWFsb2dDb250YWluZXIoXHJcbiAgICAgICAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZixcclxuICAgICAgICBjb25maWc6IE93bERpYWxvZ0NvbmZpZ1xyXG4gICAgKTogT3dsRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFxyXG4gICAgICAgICAgICBPd2xEaWFsb2dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGNvbmZpZy52aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxcclxuICAgICAgICAgICAgT3dsRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgICAgICAgPiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XHJcbiAgICAgICAgY29udGFpbmVyUmVmLmluc3RhbmNlLnNldENvbmZpZyhjb25maWcpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhkaWFsb2dDb25maWc6IE93bERpYWxvZ0NvbmZpZyk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKSxcclxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dDb25maWcuc2Nyb2xsU3RyYXRlZ3kgfHwgdGhpcy5zY3JvbGxTdHJhdGVneSgpLFxyXG4gICAgICAgICAgICBwYW5lbENsYXNzOiBkaWFsb2dDb25maWcucGFuZUNsYXNzLFxyXG4gICAgICAgICAgICBoYXNCYWNrZHJvcDogZGlhbG9nQ29uZmlnLmhhc0JhY2tkcm9wLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogZGlhbG9nQ29uZmlnLm1pbldpZHRoLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGRpYWxvZ0NvbmZpZy5taW5IZWlnaHQsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBkaWFsb2dDb25maWcubWF4V2lkdGgsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogZGlhbG9nQ29uZmlnLm1heEhlaWdodFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZGlhbG9nQ29uZmlnLmJhY2tkcm9wQ2xhc3MpIHtcclxuICAgICAgICAgICAgc3RhdGUuYmFja2Ryb3BDbGFzcyA9IGRpYWxvZ0NvbmZpZy5iYWNrZHJvcENsYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlT3BlbkRpYWxvZyhkaWFsb2dSZWY6IE93bERpYWxvZ1JlZjxhbnk+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9vcGVuRGlhbG9nc0F0VGhpc0xldmVsLmluZGV4T2YoZGlhbG9nUmVmKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9ncy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAvLyBJZiBhbGwgdGhlIGRpYWxvZ3Mgd2VyZSBjbG9zZWQsIHJlbW92ZS9yZXN0b3JlIHRoZSBgYXJpYS1oaWRkZW5gXHJcbiAgICAgICAgICAgIC8vIHRvIGEgdGhlIHNpYmxpbmdzIGFuZCBlbWl0IHRvIHRoZSBgYWZ0ZXJBbGxDbG9zZWRgIHN0cmVhbS5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wZW5EaWFsb2dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmlhSGlkZGVuRWxlbWVudHMuZm9yRWFjaCgocHJldmlvdXNWYWx1ZSwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJpYUhpZGRlbkVsZW1lbnRzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZnRlckFsbENsb3NlZC5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlcyBhbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCBpc24ndCBhbiBvdmVybGF5IGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3kuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGlkZU5vbkRpYWxvZ0NvbnRlbnRGcm9tQXNzaXN0aXZlVGVjaG5vbG9neSgpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5Q29udGFpbmVyID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIG92ZXJsYXkgY29udGFpbmVyIGlzIGF0dGFjaGVkIHRvIHRoZSBET00uXHJcbiAgICAgICAgaWYgKG92ZXJsYXlDb250YWluZXIucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IG92ZXJsYXlDb250YWluZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzaWJsaW5ncy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpYmxpbmcgPSBzaWJsaW5nc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc2libGluZyAhPT0gb3ZlcmxheUNvbnRhaW5lciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcubm9kZU5hbWUgIT09ICdTQ1JJUFQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5ub2RlTmFtZSAhPT0gJ1NUWUxFJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFzaWJsaW5nLmhhc0F0dHJpYnV0ZSgnYXJpYS1saXZlJylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJpYUhpZGRlbkVsZW1lbnRzLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGRlZmF1bHQgb3B0aW9ucyB0byB0aGUgZGlhbG9nIGNvbmZpZy5cclxuICogQHBhcmFtIGNvbmZpZyBDb25maWcgdG8gYmUgbW9kaWZpZWQuXHJcbiAqIEBwYXJhbSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IGNvbmZpZyBzZXR0aW5nXHJcbiAqIEByZXR1cm5zIFRoZSBuZXcgY29uZmlndXJhdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBseUNvbmZpZ0RlZmF1bHRzKFxyXG4gICAgY29uZmlnPzogT3dsRGlhbG9nQ29uZmlnLFxyXG4gICAgZGVmYXVsdE9wdGlvbnM/OiBPd2xEaWFsb2dDb25maWdcclxuKTogT3dsRGlhbG9nQ29uZmlnIHtcclxuICAgIHJldHVybiBleHRlbmRPYmplY3QobmV3IE93bERpYWxvZ0NvbmZpZygpLCBjb25maWcsIGRlZmF1bHRPcHRpb25zKTtcclxufVxyXG4iXX0=