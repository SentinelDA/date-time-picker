/**
 * calendar-body.component
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["owl-date-time-calendar-body", ""];
var _c1 = function (a0, a1, a2) { return { "owl-dt-calendar-cell-out": a0, "owl-dt-calendar-cell-today": a1, "owl-dt-calendar-cell-selected": a2 }; };
function OwlCalendarBodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵlistener("click", function OwlCalendarBodyComponent_tr_0_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r113); var item_r110 = ctx.$implicit; var ctx_r112 = i0.ɵɵnextContext(2); return ctx_r112.selectCell(item_r110); });
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r110 = ctx.$implicit;
    var colIndex_r111 = ctx.index;
    var rowIndex_r108 = i0.ɵɵnextContext().index;
    var ctx_r109 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("owl-dt-calendar-cell ", item_r110.cellClass, "");
    i0.ɵɵstyleProp("width", 100 / ctx_r109.numCols, "%")("padding-top", 50 * ctx_r109.cellRatio / ctx_r109.numCols, "%")("padding-bottom", 50 * ctx_r109.cellRatio / ctx_r109.numCols, "%");
    i0.ɵɵclassProp("owl-dt-calendar-cell-active", ctx_r109.isActiveCell(rowIndex_r108, colIndex_r111))("owl-dt-calendar-cell-disabled", !item_r110.enabled)("owl-dt-calendar-cell-in-range", ctx_r109.isInRange(item_r110.value))("owl-dt-calendar-cell-range-from", ctx_r109.isRangeFrom(item_r110.value))("owl-dt-calendar-cell-range-to", ctx_r109.isRangeTo(item_r110.value));
    i0.ɵɵproperty("tabindex", ctx_r109.isActiveCell(rowIndex_r108, colIndex_r111) ? 0 : 0 - 1);
    i0.ɵɵattribute("aria-label", item_r110.ariaLabel)("aria-disabled", !item_r110.enabled || null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(24, _c1, item_r110.out, item_r110.value === ctx_r109.todayValue, ctx_r109.isSelected(item_r110.value)));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r110.displayValue, " ");
} }
function OwlCalendarBodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 1);
    i0.ɵɵtemplate(1, OwlCalendarBodyComponent_tr_0_td_1_Template, 3, 28, "td", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r107 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r107);
} }
var CalendarCell = /** @class */ (function () {
    function CalendarCell(value, displayValue, ariaLabel, enabled, out, cellClass) {
        if (out === void 0) { out = false; }
        if (cellClass === void 0) { cellClass = ''; }
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.out = out;
        this.cellClass = cellClass;
    }
    return CalendarCell;
}());
export { CalendarCell };
var OwlCalendarBodyComponent = /** @class */ (function () {
    function OwlCalendarBodyComponent(elmRef, ngZone) {
        this.elmRef = elmRef;
        this.ngZone = ngZone;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * The number of columns in the table.
         * */
        this.numCols = 7;
        /**
         * The ratio (width / height) to use for the cells in the table.
         */
        this.cellRatio = 1;
        /**
         * Emit when a calendar cell is selected
         * */
        this.select = new EventEmitter();
    }
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "owlDTCalendarBodyClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInSingleMode", {
        get: function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInRangeMode", {
        get: function () {
            return (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom' ||
                this.selectMode === 'rangeTo');
        },
        enumerable: true,
        configurable: true
    });
    OwlCalendarBodyComponent.prototype.ngOnInit = function () { };
    OwlCalendarBodyComponent.prototype.selectCell = function (cell) {
        this.select.emit(cell);
    };
    OwlCalendarBodyComponent.prototype.isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        return cellNumber === this.activeCell;
    };
    /**
     * Check if the cell is selected
     */
    OwlCalendarBodyComponent.prototype.isSelected = function (value) {
        if (!this.selectedValues || this.selectedValues.length === 0) {
            return false;
        }
        if (this.isInSingleMode) {
            return value === this.selectedValues[0];
        }
        if (this.isInRangeMode) {
            var fromValue = this.selectedValues[0];
            var toValue = this.selectedValues[1];
            return value === fromValue || value === toValue;
        }
    };
    /**
     * Check if the cell in the range
     * */
    OwlCalendarBodyComponent.prototype.isInRange = function (value) {
        if (this.isInRangeMode) {
            var fromValue = this.selectedValues[0];
            var toValue = this.selectedValues[1];
            if (fromValue !== null && toValue !== null) {
                return value >= fromValue && value <= toValue;
            }
            else {
                return value === fromValue || value === toValue;
            }
        }
    };
    /**
     * Check if the cell is the range from
     * */
    OwlCalendarBodyComponent.prototype.isRangeFrom = function (value) {
        if (this.isInRangeMode) {
            var fromValue = this.selectedValues[0];
            return fromValue !== null && value === fromValue;
        }
    };
    /**
     * Check if the cell is the range to
     * */
    OwlCalendarBodyComponent.prototype.isRangeTo = function (value) {
        if (this.isInRangeMode) {
            var toValue = this.selectedValues[1];
            return toValue !== null && value === toValue;
        }
    };
    /**
     * Focus to a active cell
     * */
    OwlCalendarBodyComponent.prototype.focusActiveCell = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(function () {
                _this.elmRef.nativeElement
                    .querySelector('.owl-dt-calendar-cell-active')
                    .focus();
            });
        });
    };
    OwlCalendarBodyComponent.ɵfac = function OwlCalendarBodyComponent_Factory(t) { return new (t || OwlCalendarBodyComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    OwlCalendarBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OwlCalendarBodyComponent, selectors: [["", "owl-date-time-calendar-body", ""]], hostVars: 2, hostBindings: function OwlCalendarBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("owl-dt-calendar-body", ctx.owlDTCalendarBodyClass);
        } }, inputs: { activeCell: "activeCell", rows: "rows", numCols: "numCols", cellRatio: "cellRatio", todayValue: "todayValue", selectedValues: "selectedValues", selectMode: "selectMode" }, outputs: { select: "select" }, exportAs: ["owlDateTimeCalendarBody"], attrs: _c0, decls: 1, vars: 1, consts: [["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], [3, "class", "tabindex", "owl-dt-calendar-cell-active", "owl-dt-calendar-cell-disabled", "owl-dt-calendar-cell-in-range", "owl-dt-calendar-cell-range-from", "owl-dt-calendar-cell-range-to", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], [3, "tabindex", "click"], [1, "owl-dt-calendar-cell-content", 3, "ngClass"]], template: function OwlCalendarBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OwlCalendarBodyComponent_tr_0_Template, 2, 1, "tr", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.rows);
        } }, directives: [i1.NgForOf, i1.NgClass], styles: [""], changeDetection: 0 });
    return OwlCalendarBodyComponent;
}());
export { OwlCalendarBodyComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlCalendarBodyComponent, [{
        type: Component,
        args: [{
                selector: '[owl-date-time-calendar-body]',
                exportAs: 'owlDateTimeCalendarBody',
                templateUrl: './calendar-body.component.html',
                styleUrls: ['./calendar-body.component.scss'],
                host: {
                    '[class.owl-dt-calendar-body]': 'owlDTCalendarBodyClass'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, { activeCell: [{
            type: Input
        }], rows: [{
            type: Input
        }], numCols: [{
            type: Input
        }], cellRatio: [{
            type: Input
        }], todayValue: [{
            type: Input
        }], selectedValues: [{
            type: Input
        }], selectMode: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9jYWxlbmRhci1ib2R5LmNvbXBvbmVudC50cyIsImxpYi9kYXRlLXRpbWUvY2FsZW5kYXItYm9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0lDZGxDLDZCQWNJO0lBREEseU9BQTBCO0lBQzFCLCtCQU1JO0lBQUEsWUFDSjtJQUFBLGlCQUFPO0lBQ1gsaUJBQUs7Ozs7OztJQXJCRCwyRUFBK0M7SUFTL0Msb0RBQStCLGdFQUFBLG1FQUFBO0lBUC9CLGtHQUFzRSxxREFBQSxzRUFBQSwwRUFBQSxzRUFBQTtJQUR0RSwwRkFBc0Q7SUFNdEQsaURBQWtDLDZDQUFBO0lBTzVCLGVBSUU7SUFKRixtSkFJRTtJQUNKLGVBQ0o7SUFESSx1REFDSjs7O0lBdEJSLDZCQUNJO0lBQUEsNkVBY0k7SUFTUixpQkFBSzs7O0lBdkJHLGVBQThDO0lBQTlDLGtDQUE4Qzs7QURnQnREO0lBQ0ksc0JBQ1csS0FBYSxFQUNiLFlBQW9CLEVBQ3BCLFNBQWlCLEVBQ2pCLE9BQWdCLEVBQ2hCLEdBQW9CLEVBQ3BCLFNBQXNCO1FBRHRCLG9CQUFBLEVBQUEsV0FBb0I7UUFDcEIsMEJBQUEsRUFBQSxjQUFzQjtRQUx0QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFFB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M0Q7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7O2tCQUtJLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogY2FsZW5kYXItYm9keS5jb21wb25lbnRcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0TW9kZSB9IGZyb20gJy4vZGF0ZS10aW1lLmNsYXNzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNlbGwge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHZhbHVlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRpc3BsYXlWYWx1ZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgb3V0OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgcHVibGljIGNlbGxDbGFzczogc3RyaW5nID0gJydcclxuICAgICkge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1tvd2wtZGF0ZS10aW1lLWNhbGVuZGFyLWJvZHldJyxcclxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVDYWxlbmRhckJvZHknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItYm9keS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgaG9zdDp7XHJcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtY2FsZW5kYXItYm9keV0nOiAnb3dsRFRDYWxlbmRhckJvZHlDbGFzcydcclxuICAgIH0sXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xDYWxlbmRhckJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2VsbCBudW1iZXIgb2YgdGhlIGFjdGl2ZSBjZWxsIGluIHRoZSB0YWJsZS5cclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGFjdGl2ZUNlbGwgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNlbGxzIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlLlxyXG4gICAgICogKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICByb3dzOiBDYWxlbmRhckNlbGxbXVtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSB0YWJsZS5cclxuICAgICAqICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgbnVtQ29scyA9IDc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmF0aW8gKHdpZHRoIC8gaGVpZ2h0KSB0byB1c2UgZm9yIHRoZSBjZWxscyBpbiB0aGUgdGFibGUuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBjZWxsUmF0aW8gPSAxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRvZGF5LlxyXG4gICAgICogKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICB0b2RheVZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLlxyXG4gICAgICogKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZWxlY3RlZFZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXJyZW50IHBpY2tlciBzZWxlY3QgbW9kZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2VsZWN0TW9kZTogU2VsZWN0TW9kZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXQgd2hlbiBhIGNhbGVuZGFyIGNlbGwgaXMgc2VsZWN0ZWRcclxuICAgICAqICovXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyQ2VsbD4oKTtcclxuXHJcbiAgICBnZXQgb3dsRFRDYWxlbmRhckJvZHlDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJblNpbmdsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3NpbmdsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzSW5SYW5nZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2UnIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlRnJvbScgfHxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2VUbydcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxtUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdENlbGwoY2VsbDogQ2FsZW5kYXJDZWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdChjZWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNBY3RpdmVDZWxsKHJvd0luZGV4OiBudW1iZXIsIGNvbEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBjZWxsTnVtYmVyID0gcm93SW5kZXggKiB0aGlzLm51bUNvbHMgKyBjb2xJbmRleDtcclxuICAgICAgICByZXR1cm4gY2VsbE51bWJlciA9PT0gdGhpcy5hY3RpdmVDZWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGNlbGwgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2VsZWN0ZWQodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZFZhbHVlcyB8fCB0aGlzLnNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0luU2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZXNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0luUmFuZ2VNb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzWzFdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBmcm9tVmFsdWUgfHwgdmFsdWUgPT09IHRvVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGNlbGwgaW4gdGhlIHJhbmdlXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIGlzSW5SYW5nZSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJblJhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlc1sxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IG51bGwgJiYgdG9WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID49IGZyb21WYWx1ZSAmJiB2YWx1ZSA8PSB0b1ZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBmcm9tVmFsdWUgfHwgdmFsdWUgPT09IHRvVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgY2VsbCBpcyB0aGUgcmFuZ2UgZnJvbVxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBpc1JhbmdlRnJvbSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJblJhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4gZnJvbVZhbHVlICE9PSBudWxsICYmIHZhbHVlID09PSBmcm9tVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGNlbGwgaXMgdGhlIHJhbmdlIHRvXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIGlzUmFuZ2VUbyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJblJhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlc1sxXTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvVmFsdWUgIT09IG51bGwgJiYgdmFsdWUgPT09IHRvVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9jdXMgdG8gYSBhY3RpdmUgY2VsbFxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBmb2N1c0FjdGl2ZUNlbGwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZVxyXG4gICAgICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm93bC1kdC1jYWxlbmRhci1jZWxsLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPHRyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93czsgbGV0IHJvd0luZGV4ID0gaW5kZXhcIiByb2xlPVwicm93XCI+XHJcbiAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93OyBsZXQgY29sSW5kZXggPSBpbmRleFwiXHJcbiAgICAgICAgY2xhc3M9XCJvd2wtZHQtY2FsZW5kYXItY2VsbCB7e2l0ZW0uY2VsbENsYXNzfX1cIlxyXG4gICAgICAgIFt0YWJpbmRleF09XCJpc0FjdGl2ZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KSA/IDAgOiAtMVwiXHJcbiAgICAgICAgW2NsYXNzLm93bC1kdC1jYWxlbmRhci1jZWxsLWFjdGl2ZV09XCJpc0FjdGl2ZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KVwiXHJcbiAgICAgICAgW2NsYXNzLm93bC1kdC1jYWxlbmRhci1jZWxsLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxyXG4gICAgICAgIFtjbGFzcy5vd2wtZHQtY2FsZW5kYXItY2VsbC1pbi1yYW5nZV09XCJpc0luUmFuZ2UoaXRlbS52YWx1ZSlcIlxyXG4gICAgICAgIFtjbGFzcy5vd2wtZHQtY2FsZW5kYXItY2VsbC1yYW5nZS1mcm9tXT1cImlzUmFuZ2VGcm9tKGl0ZW0udmFsdWUpXCJcclxuICAgICAgICBbY2xhc3Mub3dsLWR0LWNhbGVuZGFyLWNlbGwtcmFuZ2UtdG9dPVwiaXNSYW5nZVRvKGl0ZW0udmFsdWUpXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIml0ZW0uYXJpYUxhYmVsXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWQgfHwgbnVsbFwiXHJcbiAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwiMTAwIC8gbnVtQ29sc1wiXHJcbiAgICAgICAgW3N0eWxlLnBhZGRpbmdUb3AuJV09XCI1MCAqIGNlbGxSYXRpbyAvIG51bUNvbHNcIlxyXG4gICAgICAgIFtzdHlsZS5wYWRkaW5nQm90dG9tLiVdPVwiNTAgKiBjZWxsUmF0aW8gLyBudW1Db2xzXCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0Q2VsbChpdGVtKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNhbGVuZGFyLWNlbGwtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAgICAgJ293bC1kdC1jYWxlbmRhci1jZWxsLW91dCc6IGl0ZW0ub3V0LFxyXG4gICAgICAgICAgICAgICAgJ293bC1kdC1jYWxlbmRhci1jZWxsLXRvZGF5JzogaXRlbS52YWx1ZSA9PT0gdG9kYXlWYWx1ZSxcclxuICAgICAgICAgICAgICAgICdvd2wtZHQtY2FsZW5kYXItY2VsbC1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQoaXRlbS52YWx1ZSlcclxuICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgIHt7aXRlbS5kaXNwbGF5VmFsdWV9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvdGQ+XHJcbjwvdHI+XHJcbiJdfQ==