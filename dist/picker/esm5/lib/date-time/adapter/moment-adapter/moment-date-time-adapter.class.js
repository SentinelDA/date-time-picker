import { __extends, __read, __spread } from "tslib";
/**
 * moment-date-time-adapter.class
 */
import { Inject, Injectable, Optional, InjectionToken } from '@angular/core';
// import { DateTimeAdapter, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import * as _moment from 'moment/moment';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE } from '../date-time-adapter.class';
import * as i0 from "@angular/core";
var moment = _moment.default ? _moment.default : _moment;
/** InjectionToken for moment date adapter to configure options. */
export var OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS = new InjectionToken('OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY
});
/** @docs-private */
export function OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var MomentDateTimeAdapter = /** @class */ (function (_super) {
    __extends(MomentDateTimeAdapter, _super);
    function MomentDateTimeAdapter(owlDateTimeLocale, options) {
        var _this = _super.call(this) || this;
        _this.owlDateTimeLocale = owlDateTimeLocale;
        _this.options = options;
        _this.setLocale(owlDateTimeLocale || moment.locale());
        return _this;
    }
    MomentDateTimeAdapter.prototype.setLocale = function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        var momentLocaleData = moment.localeData(locale);
        this._localeData = {
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
        };
    };
    MomentDateTimeAdapter.prototype.getYear = function (date) {
        return this.clone(date).year();
    };
    MomentDateTimeAdapter.prototype.getMonth = function (date) {
        return this.clone(date).month();
    };
    MomentDateTimeAdapter.prototype.getDay = function (date) {
        return this.clone(date).day();
    };
    MomentDateTimeAdapter.prototype.getDate = function (date) {
        return this.clone(date).date();
    };
    MomentDateTimeAdapter.prototype.getHours = function (date) {
        return this.clone(date).hours();
    };
    MomentDateTimeAdapter.prototype.getMinutes = function (date) {
        return this.clone(date).minutes();
    };
    MomentDateTimeAdapter.prototype.getSeconds = function (date) {
        return this.clone(date).seconds();
    };
    MomentDateTimeAdapter.prototype.getTime = function (date) {
        return this.clone(date).valueOf();
    };
    MomentDateTimeAdapter.prototype.getNumDaysInMonth = function (date) {
        return this.clone(date).daysInMonth();
    };
    MomentDateTimeAdapter.prototype.differenceInCalendarDays = function (dateLeft, dateRight) {
        return this.clone(dateLeft).diff(dateRight, 'days');
    };
    MomentDateTimeAdapter.prototype.getYearName = function (date) {
        return this.clone(date).format('YYYY');
    };
    MomentDateTimeAdapter.prototype.getMonthNames = function (style) {
        return style === 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    MomentDateTimeAdapter.prototype.getDayOfWeekNames = function (style) {
        if (style === 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style === 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    MomentDateTimeAdapter.prototype.getDateNames = function () {
        return this._localeData.dates;
    };
    MomentDateTimeAdapter.prototype.toIso8601 = function (date) {
        return this.clone(date).format();
    };
    MomentDateTimeAdapter.prototype.isEqual = function (dateLeft, dateRight) {
        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight));
        }
        return dateLeft === dateRight;
    };
    MomentDateTimeAdapter.prototype.isSameDay = function (dateLeft, dateRight) {
        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight), 'day');
        }
        return dateLeft === dateRight;
    };
    MomentDateTimeAdapter.prototype.isValid = function (date) {
        return this.clone(date).isValid();
    };
    MomentDateTimeAdapter.prototype.invalid = function () {
        return moment.invalid();
    };
    MomentDateTimeAdapter.prototype.isDateInstance = function (obj) {
        return moment.isMoment(obj);
    };
    MomentDateTimeAdapter.prototype.addCalendarYears = function (date, amount) {
        return this.clone(date).add({ years: amount });
    };
    MomentDateTimeAdapter.prototype.addCalendarMonths = function (date, amount) {
        return this.clone(date).add({ months: amount });
    };
    MomentDateTimeAdapter.prototype.addCalendarDays = function (date, amount) {
        return this.clone(date).add({ days: amount });
    };
    MomentDateTimeAdapter.prototype.setHours = function (date, amount) {
        return this.clone(date).hours(amount);
    };
    MomentDateTimeAdapter.prototype.setMinutes = function (date, amount) {
        return this.clone(date).minutes(amount);
    };
    MomentDateTimeAdapter.prototype.setSeconds = function (date, amount) {
        return this.clone(date).seconds(amount);
    };
    MomentDateTimeAdapter.prototype.createDate = function (year, month, date, hours, minutes, seconds) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        if (hours < 0 || hours > 23) {
            throw Error("Invalid hours \"" + hours + "\". Hours has to be between 0 and 23.");
        }
        if (minutes < 0 || minutes > 59) {
            throw Error("Invalid minutes \"" + minutes + "\". Minutes has to between 0 and 59.");
        }
        if (seconds < 0 || seconds > 59) {
            throw Error("Invalid seconds \"" + seconds + "\". Seconds has to be between 0 and 59.");
        }
        var result = this.createMoment({ year: year, month: month, date: date, hours: hours, minutes: minutes, seconds: seconds }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    MomentDateTimeAdapter.prototype.clone = function (date) {
        return this.createMoment(date).clone().locale(this.locale);
    };
    MomentDateTimeAdapter.prototype.now = function () {
        return this.createMoment().locale(this.locale);
    };
    MomentDateTimeAdapter.prototype.format = function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateTimeAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    MomentDateTimeAdapter.prototype.parse = function (value, parseFormat) {
        if (value && typeof value === 'string') {
            return this.createMoment(value, parseFormat, this.locale);
        }
        return value ? this.createMoment(value).locale(this.locale) : null;
    };
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    MomentDateTimeAdapter.prototype.deserialize = function (value) {
        var date;
        if (value instanceof Date) {
            date = this.createMoment(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this.createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return date;
        }
        return _super.prototype.deserialize.call(this, value);
    };
    /** Creates a Moment instance while respecting the current UTC settings. */
    MomentDateTimeAdapter.prototype.createMoment = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (this.options && this.options.useUtc) ? moment.utc.apply(moment, __spread(args)) : moment.apply(void 0, __spread(args));
    };
    MomentDateTimeAdapter.ɵfac = function MomentDateTimeAdapter_Factory(t) { return new (t || MomentDateTimeAdapter)(i0.ɵɵinject(OWL_DATE_TIME_LOCALE, 8), i0.ɵɵinject(OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, 8)); };
    MomentDateTimeAdapter.ɵprov = i0.ɵɵdefineInjectable({ token: MomentDateTimeAdapter, factory: MomentDateTimeAdapter.ɵfac });
    return MomentDateTimeAdapter;
}(DateTimeAdapter));
export { MomentDateTimeAdapter };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MomentDateTimeAdapter, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [OWL_DATE_TIME_LOCALE]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUtdGltZS1hZGFwdGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvYWRhcHRlci9tb21lbnQtYWRhcHRlci9tb21lbnQtZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSw0RUFBNEU7QUFDNUUsT0FBTyxLQUFLLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVuRixJQUFNLE1BQU0sR0FBSSxPQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBRSxPQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFZN0UsbUVBQW1FO0FBQ25FLE1BQU0sQ0FBQyxJQUFNLG9DQUFvQyxHQUFHLElBQUksY0FBYyxDQUNsRSxzQ0FBc0MsRUFBRTtJQUNwQyxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsNENBQTRDO0NBQ3hELENBQUMsQ0FBQztBQUVQLG9CQUFvQjtBQUNwQixNQUFNLFVBQVUsNENBQTRDO0lBQ3hELE9BQU87UUFDSCxNQUFNLEVBQUUsS0FBSztLQUNoQixDQUFDO0FBQ04sQ0FBQztBQUVELGlEQUFpRDtBQUNqRCxTQUFTLEtBQUssQ0FBSSxNQUFjLEVBQUUsYUFBbUM7SUFDakUsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFB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QU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFWLE1BQU0sV0FBUSxJQUFJLEdBQUUsQ0FBQyxDQUFDLE1BQU0sd0JBQUksSUFBSSxFQUFDLENBQUM7SUFDekYsQ0FBQzs4RkF4T1EscUJBQXFCLGNBV0csb0JBQW9CLGtCQUNwQixvQ0FBb0M7aUVBWjVELHFCQUFxQixXQUFyQixxQkFBcUI7Z0NBL0NsQztDQXdSQyxBQTFPRCxDQUMyQyxlQUFlLEdBeU96RDtTQXpPWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxVQUFVOztzQkFZTyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLG9CQUFvQjs7c0JBQ3ZDLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIG1vbWVudC1kYXRlLXRpbWUtYWRhcHRlci5jbGFzc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IERhdGVUaW1lQWRhcHRlciwgT1dMX0RBVEVfVElNRV9MT0NBTEUgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQvbW9tZW50JztcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50L21vbWVudCc7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciwgT1dMX0RBVEVfVElNRV9MT0NBTEUgfSBmcm9tICcuLi9kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XHJcblxyXG5jb25zdCBtb21lbnQgPSAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgPyAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgOiBfbW9tZW50O1xyXG5cclxuLyoqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciB7QHNlZSBNb21lbnREYXRlQWRhcHRlcn0uICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3dsTW9tZW50RGF0ZVRpbWVBZGFwdGVyT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFR1cm5zIHRoZSB1c2Ugb2YgdXRjIGRhdGVzIG9uIG9yIG9mZi5cclxuICAgICAqIENoYW5naW5nIHRoaXMgd2lsbCBjaGFuZ2UgaG93IHRoZSBEYXRlVGltZVBpY2tlciBvdXRwdXQgdmFsdWUuXHJcbiAgICAgKiB7QGRlZmF1bHQgZmFsc2V9XHJcbiAgICAgKi9cclxuICAgIHVzZVV0YzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqIEluamVjdGlvblRva2VuIGZvciBtb21lbnQgZGF0ZSBhZGFwdGVyIHRvIGNvbmZpZ3VyZSBvcHRpb25zLiAqL1xyXG5leHBvcnQgY29uc3QgT1dMX01PTUVOVF9EQVRFX1RJTUVfQURBUFRFUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPE93bE1vbWVudERhdGVUaW1lQWRhcHRlck9wdGlvbnM+KFxyXG4gICAgJ09XTF9NT01FTlRfREFURV9USU1FX0FEQVBURVJfT1BUSU9OUycsIHtcclxuICAgICAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbiAgICAgICAgZmFjdG9yeTogT1dMX01PTUVOVF9EQVRFX1RJTUVfQURBUFRFUl9PUFRJT05TX0ZBQ1RPUllcclxuICAgIH0pO1xyXG5cclxuLyoqIEBkb2NzLXByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9XTF9NT01FTlRfREFURV9USU1FX0FEQVBURVJfT1BUSU9OU19GQUNUT1JZKCk6IE93bE1vbWVudERhdGVUaW1lQWRhcHRlck9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VVdGM6IGZhbHNlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKiogQ3JlYXRlcyBhbiBhcnJheSBhbmQgZmlsbHMgaXQgd2l0aCB2YWx1ZXMuICovXHJcbmZ1bmN0aW9uIHJhbmdlPFQ+KGxlbmd0aDogbnVtYmVyLCB2YWx1ZUZ1bmN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSB7XHJcbiAgICBjb25zdCB2YWx1ZXNBcnJheSA9IEFycmF5KGxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5O1xyXG59XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9tZW50RGF0ZVRpbWVBZGFwdGVyIGV4dGVuZHMgRGF0ZVRpbWVBZGFwdGVyPE1vbWVudD4ge1xyXG5cclxuICAgIHByaXZhdGUgX2xvY2FsZURhdGE6IHtcclxuICAgICAgICBsb25nTW9udGhzOiBzdHJpbmdbXSxcclxuICAgICAgICBzaG9ydE1vbnRoczogc3RyaW5nW10sXHJcbiAgICAgICAgbG9uZ0RheXNPZldlZWs6IHN0cmluZ1tdLFxyXG4gICAgICAgIHNob3J0RGF5c09mV2Vlazogc3RyaW5nW10sXHJcbiAgICAgICAgbmFycm93RGF5c09mV2Vlazogc3RyaW5nW10sXHJcbiAgICAgICAgZGF0ZXM6IHN0cmluZ1tdLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQEluamVjdChPV0xfREFURV9USU1FX0xPQ0FMRSkgcHJpdmF0ZSBvd2xEYXRlVGltZUxvY2FsZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoT1dMX01PTUVOVF9EQVRFX1RJTUVfQURBUFRFUl9PUFRJT05TKSBwcml2YXRlIG9wdGlvbnM/OiBPd2xNb21lbnREYXRlVGltZUFkYXB0ZXJPcHRpb25zICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUob3dsRGF0ZVRpbWVMb2NhbGUgfHwgbW9tZW50LmxvY2FsZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TG9jYWxlKCBsb2NhbGU6IHN0cmluZyApIHtcclxuICAgICAgICBzdXBlci5zZXRMb2NhbGUobG9jYWxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9tZW50TG9jYWxlRGF0YSA9IG1vbWVudC5sb2NhbGVEYXRhKGxvY2FsZSk7XHJcbiAgICAgICAgdGhpcy5fbG9jYWxlRGF0YSA9IHtcclxuICAgICAgICAgICAgbG9uZ01vbnRoczogbW9tZW50TG9jYWxlRGF0YS5tb250aHMoKSxcclxuICAgICAgICAgICAgc2hvcnRNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzU2hvcnQoKSxcclxuICAgICAgICAgICAgbG9uZ0RheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXMoKSxcclxuICAgICAgICAgICAgc2hvcnREYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzU2hvcnQoKSxcclxuICAgICAgICAgICAgbmFycm93RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c01pbigpLFxyXG4gICAgICAgICAgICBkYXRlczogcmFuZ2UoMzEsIChpKSA9PiB0aGlzLmNyZWF0ZURhdGUoMjAxNywgMCwgaSArIDEpLmZvcm1hdCgnRCcpKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0WWVhciggZGF0ZTogTW9tZW50ICk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkueWVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb250aCggZGF0ZTogTW9tZW50ICk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkubW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF5KCBkYXRlOiBNb21lbnQgKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5kYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZSggZGF0ZTogTW9tZW50ICk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIb3VycyggZGF0ZTogTW9tZW50ICk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuaG91cnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWludXRlcyggZGF0ZTogTW9tZW50ICk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkubWludXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTZWNvbmRzKCBkYXRlOiBNb21lbnQgKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5zZWNvbmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpbWUoIGRhdGU6IE1vbWVudCApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGUpLnZhbHVlT2YoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TnVtRGF5c0luTW9udGgoIGRhdGU6IE1vbWVudCApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGUpLmRheXNJbk1vbnRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyggZGF0ZUxlZnQ6IE1vbWVudCwgZGF0ZVJpZ2h0OiBNb21lbnQgKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlTGVmdCkuZGlmZihkYXRlUmlnaHQsICdkYXlzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFllYXJOYW1lKCBkYXRlOiBNb21lbnQgKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW9udGhOYW1lcyggc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93JyApOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlID09PSAnbG9uZycgPyB0aGlzLl9sb2NhbGVEYXRhLmxvbmdNb250aHMgOiB0aGlzLl9sb2NhbGVEYXRhLnNob3J0TW9udGhzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXlPZldlZWtOYW1lcyggc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93JyApOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgaWYgKHN0eWxlID09PSAnbG9uZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZURhdGEubG9uZ0RheXNPZldlZWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZSA9PT0gJ3Nob3J0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF0YS5zaG9ydERheXNPZldlZWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLm5hcnJvd0RheXNPZldlZWs7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZURhdGEuZGF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvSXNvODYwMSggZGF0ZTogTW9tZW50ICk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuZm9ybWF0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRXF1YWwoIGRhdGVMZWZ0OiBNb21lbnQsIGRhdGVSaWdodDogTW9tZW50ICk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoZGF0ZUxlZnQgJiYgZGF0ZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGVMZWZ0KS5pc1NhbWUodGhpcy5jbG9uZShkYXRlUmlnaHQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlTGVmdCA9PT0gZGF0ZVJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1NhbWVEYXkoIGRhdGVMZWZ0OiBNb21lbnQsIGRhdGVSaWdodDogTW9tZW50ICk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoZGF0ZUxlZnQgJiYgZGF0ZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGVMZWZ0KS5pc1NhbWUodGhpcy5jbG9uZShkYXRlUmlnaHQpLCAnZGF5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0ZUxlZnQgPT09IGRhdGVSaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCggZGF0ZTogTW9tZW50ICk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGUpLmlzVmFsaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW52YWxpZCgpOiBNb21lbnQge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQuaW52YWxpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RhdGVJbnN0YW5jZSggb2JqOiBhbnkgKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudC5pc01vbWVudChvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxlbmRhclllYXJzKCBkYXRlOiBNb21lbnQsIGFtb3VudDogbnVtYmVyICk6IE1vbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuYWRkKHt5ZWFyczogYW1vdW50fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGVuZGFyTW9udGhzKCBkYXRlOiBNb21lbnQsIGFtb3VudDogbnVtYmVyICk6IE1vbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuYWRkKHttb250aHM6IGFtb3VudH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxlbmRhckRheXMoIGRhdGU6IE1vbWVudCwgYW1vdW50OiBudW1iZXIgKTogTW9tZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5hZGQoe2RheXM6IGFtb3VudH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIb3VycyggZGF0ZTogTW9tZW50LCBhbW91bnQ6IG51bWJlciApOiBNb21lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGUpLmhvdXJzKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1pbnV0ZXMoIGRhdGU6IE1vbWVudCwgYW1vdW50OiBudW1iZXIgKTogTW9tZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5taW51dGVzKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNlY29uZHMoIGRhdGU6IE1vbWVudCwgYW1vdW50OiBudW1iZXIgKTogTW9tZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5zZWNvbmRzKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZURhdGUoIHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyICk6IE1vbWVudDtcclxuICAgIHB1YmxpYyBjcmVhdGVEYXRlKCB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cnM6IG51bWJlciA9IDAsIG1pbnV0ZXM6IG51bWJlciA9IDAsIHNlY29uZHM6IG51bWJlciA9IDAgKTogTW9tZW50IHtcclxuICAgICAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBkYXRlIFwiJHtkYXRlfVwiLiBEYXRlIGhhcyB0byBiZSBncmVhdGVyIHRoYW4gMC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChob3VycyA8IDAgfHwgaG91cnMgPiAyMykge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBob3VycyBcIiR7aG91cnN9XCIuIEhvdXJzIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDIzLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBtaW51dGVzIFwiJHttaW51dGVzfVwiLiBNaW51dGVzIGhhcyB0byBiZXR3ZWVuIDAgYW5kIDU5LmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAwIHx8IHNlY29uZHMgPiA1OSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBzZWNvbmRzIFwiJHtzZWNvbmRzfVwiLiBTZWNvbmRzIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDU5LmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jcmVhdGVNb21lbnQoe3llYXIsIG1vbnRoLCBkYXRlLCBob3VycywgbWludXRlcywgc2Vjb25kc30pLmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSByZXN1bHQgaXNuJ3QgdmFsaWQsIHRoZSBkYXRlIG11c3QgaGF2ZSBiZWVuIG91dCBvZiBib3VuZHMgZm9yIHRoaXMgbW9udGguXHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoIGRhdGU6IE1vbWVudCApOiBNb21lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1vbWVudChkYXRlKS5jbG9uZSgpLmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vdygpOiBNb21lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1vbWVudCgpLmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdCggZGF0ZTogTW9tZW50LCBkaXNwbGF5Rm9ybWF0OiBhbnkgKTogc3RyaW5nIHtcclxuICAgICAgICBkYXRlID0gdGhpcy5jbG9uZShkYXRlKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChkYXRlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTW9tZW50RGF0ZVRpbWVBZGFwdGVyOiBDYW5ub3QgZm9ybWF0IGludmFsaWQgZGF0ZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KGRpc3BsYXlGb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZSggdmFsdWU6IGFueSwgcGFyc2VGb3JtYXQ6IGFueSApOiBNb21lbnQgfCBudWxsIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNb21lbnQodmFsdWUsIHBhcnNlRm9ybWF0LCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHRoaXMuY3JlYXRlTW9tZW50KHZhbHVlKS5sb2NhbGUodGhpcy5sb2NhbGUpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGlmIGdpdmVuIGEgdmFsaWQgTW9tZW50IG9yIG51bGwuIERlc2VyaWFsaXplcyB2YWxpZCBJU08gODYwMSBzdHJpbmdzXHJcbiAgICAgKiAoaHR0cHM6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzMzMzkudHh0KSBhbmQgdmFsaWQgRGF0ZSBvYmplY3RzIGludG8gdmFsaWQgTW9tZW50cyBhbmQgZW1wdHlcclxuICAgICAqIHN0cmluZyBpbnRvIG51bGwuIFJldHVybnMgYW4gaW52YWxpZCBkYXRlIGZvciBhbGwgb3RoZXIgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBkZXNlcmlhbGl6ZSggdmFsdWU6IGFueSApOiBNb21lbnQgfCBudWxsIHtcclxuICAgICAgICBsZXQgZGF0ZTtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLmNyZWF0ZU1vbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLmNyZWF0ZU1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS5sb2NhbGUodGhpcy5sb2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZSAmJiB0aGlzLmlzVmFsaWQoZGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdXBlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYSBNb21lbnQgaW5zdGFuY2Ugd2hpbGUgcmVzcGVjdGluZyB0aGUgY3VycmVudCBVVEMgc2V0dGluZ3MuICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1vbWVudCguLi5hcmdzOiBhbnlbXSk6IE1vbWVudCB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnVzZVV0YykgPyBtb21lbnQudXRjKC4uLmFyZ3MpIDogbW9tZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==