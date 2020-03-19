/**
 * date-time-picker-intl.service
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var OwlDateTimeIntl = /** @class */ (function () {
    function OwlDateTimeIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** A label for the up second button (used by screen readers).  */
        this.upSecondLabel = 'Add a second';
        /** A label for the down second button (used by screen readers).  */
        this.downSecondLabel = 'Minus a second';
        /** A label for the up minute button (used by screen readers).  */
        this.upMinuteLabel = 'Add a minute';
        /** A label for the down minute button (used by screen readers).  */
        this.downMinuteLabel = 'Minus a minute';
        /** A label for the up hour button (used by screen readers).  */
        this.upHourLabel = 'Add a hour';
        /** A label for the down hour button (used by screen readers).  */
        this.downHourLabel = 'Minus a hour';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 21 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 21 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Change to month view';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
        /** A label for the cancel button */
        this.cancelBtnLabel = 'Cancel';
        /** A label for the set button */
        this.setBtnLabel = 'Set';
        /** A label for the range 'from' in picker info */
        this.rangeFromLabel = 'From';
        /** A label for the range 'to' in picker info */
        this.rangeToLabel = 'To';
        /** A label for the hour12 button (AM) */
        this.hour12AMLabel = 'AM';
        /** A label for the hour12 button (PM) */
        this.hour12PMLabel = 'PM';
    }
    OwlDateTimeIntl.ɵfac = function OwlDateTimeIntl_Factory(t) { return new (t || OwlDateTimeIntl)(); };
    OwlDateTimeIntl.ɵprov = i0.ɵɵdefineInjectable({ token: OwlDateTimeIntl, factory: OwlDateTimeIntl.ɵfac, providedIn: 'root' });
    return OwlDateTimeIntl;
}());
export { OwlDateTimeIntl };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OwlDateTimeIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7SUFBQTtRQUdJOzs7V0FHRztRQUNNLFlBQU8sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV0RCxrRUFBa0U7UUFDbEUsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFFL0Isb0VBQW9FO1FBQ3BFLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFFbkMsa0VBQWtFO1FBQ2xFLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBRS9CLG9FQUFvRTtRQUNwRSxvQkFBZSxHQUFHLGdCQUFnQixDQUFDO1FBRW5DLGdFQUFnRTtRQUNoRSxnQkFBVyxHQUFHLFlBQVksQ0FBQztRQUUzQixrRUFBa0U7UUFDbEUsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFFL0Isc0VBQXNFO1FBQ3RFLG1CQUFjLEdBQUcsZ0JBQWdCLENBQUM7UUFFbEMsa0VBQWtFO1FBQ2xFLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBRTlCLHFFQUFxRTtRQUNyRSxrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUVoQyxpRUFBaUU7UUFDakUsa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFFNUIsMkVBQTJFO1FBQzNFLHVCQUFrQixHQUFXLG1CQUFtQixDQUFDO1FBRWpELHVFQUF1RTtRQUN2RSx1QkFBa0IsR0FBVyxlQUFlLENBQUM7UUFFN0MsOEVBQThFO1FBQzlFLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO1FBRWhELDZFQUE2RTtRQUM3RSwrQkFBMEIsR0FBVyx1QkFBdUIsQ0FBQztRQUU3RCxvQ0FBb0M7UUFDcEMsbUJBQWMsR0FBRyxRQUFRLENBQUM7UUFFMUIsaUNBQWlDO1FBQ2pDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXBCLGtEQUFrRDtRQUNsRCxtQkFBYyxHQUFHLE1BQU0sQ0FBQztRQUV4QixnREFBZ0Q7UUFDaEQsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIseUNBQXlDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXJCLHlDQUF5QztRQUN6QyxrQkFBYSxHQUFHLElBQUksQ0FBQztLQUN4QjtrRkFuRVksZUFBZTsyREFBZixlQUFlLFdBQWYsZUFBZSxtQkFESCxNQUFNOzBCQVAvQjtDQTJFQyxBQXBFRCxJQW9FQztTQW5FWSxlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVTtlQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBkYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBPd2xEYXRlVGltZUludGwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIGxhYmVscyBoZXJlIGFyZSBjaGFuZ2VkLiBVc2UgdGhpcyB0byBub3RpZnlcclxuICAgICAqIGNvbXBvbmVudHMgaWYgdGhlIGxhYmVscyBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgdXAgc2Vjb25kIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICAqL1xyXG4gICAgdXBTZWNvbmRMYWJlbCA9ICdBZGQgYSBzZWNvbmQnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgZG93biBzZWNvbmQgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXHJcbiAgICBkb3duU2Vjb25kTGFiZWwgPSAnTWludXMgYSBzZWNvbmQnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgdXAgbWludXRlIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICAqL1xyXG4gICAgdXBNaW51dGVMYWJlbCA9ICdBZGQgYSBtaW51dGUnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgZG93biBtaW51dGUgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXHJcbiAgICBkb3duTWludXRlTGFiZWwgPSAnTWludXMgYSBtaW51dGUnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgdXAgaG91ciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cclxuICAgIHVwSG91ckxhYmVsID0gJ0FkZCBhIGhvdXInO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgZG93biBob3VyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICAqL1xyXG4gICAgZG93bkhvdXJMYWJlbCA9ICdNaW51cyBhIGhvdXInO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgcHJldmlvdXMgbW9udGggYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cclxuICAgIHByZXZNb250aExhYmVsID0gJ1ByZXZpb3VzIG1vbnRoJztcclxuXHJcbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIG5leHQgbW9udGggYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cclxuICAgIG5leHRNb250aExhYmVsID0gJ05leHQgbW9udGgnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgcHJldmlvdXMgeWVhciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xyXG4gICAgcHJldlllYXJMYWJlbCA9ICdQcmV2aW91cyB5ZWFyJztcclxuXHJcbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIG5leHQgeWVhciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xyXG4gICAgbmV4dFllYXJMYWJlbCA9ICdOZXh0IHllYXInO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgcHJldmlvdXMgbXVsdGkteWVhciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xyXG4gICAgcHJldk11bHRpWWVhckxhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMgMjEgeWVhcnMnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCBtdWx0aS15ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXHJcbiAgICBuZXh0TXVsdGlZZWFyTGFiZWw6IHN0cmluZyA9ICdOZXh0IDIxIHllYXJzJztcclxuXHJcbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlICdzd2l0Y2ggdG8gbW9udGggdmlldycgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cclxuICAgIHN3aXRjaFRvTW9udGhWaWV3TGFiZWwgPSAnQ2hhbmdlIHRvIG1vbnRoIHZpZXcnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgJ3N3aXRjaCB0byB5ZWFyIHZpZXcnIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXHJcbiAgICBzd2l0Y2hUb011bHRpWWVhclZpZXdMYWJlbDogc3RyaW5nID0gJ0Nob29zZSBtb250aCBhbmQgeWVhcic7XHJcblxyXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbiAgICBjYW5jZWxCdG5MYWJlbCA9ICdDYW5jZWwnO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgc2V0IGJ1dHRvbiAqL1xyXG4gICAgc2V0QnRuTGFiZWwgPSAnU2V0JztcclxuXHJcbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHJhbmdlICdmcm9tJyBpbiBwaWNrZXIgaW5mbyAqL1xyXG4gICAgcmFuZ2VGcm9tTGFiZWwgPSAnRnJvbSc7XHJcblxyXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSByYW5nZSAndG8nIGluIHBpY2tlciBpbmZvICovXHJcbiAgICByYW5nZVRvTGFiZWwgPSAnVG8nO1xyXG5cclxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgaG91cjEyIGJ1dHRvbiAoQU0pICovXHJcbiAgICBob3VyMTJBTUxhYmVsID0gJ0FNJztcclxuXHJcbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIGhvdXIxMiBidXR0b24gKFBNKSAqL1xyXG4gICAgaG91cjEyUE1MYWJlbCA9ICdQTSc7XHJcbn1cclxuIl19