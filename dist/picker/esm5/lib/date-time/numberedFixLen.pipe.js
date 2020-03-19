/**
 * numberFixedLen.pipe
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var NumberFixedLenPipe = /** @class */ (function () {
    function NumberFixedLenPipe() {
    }
    NumberFixedLenPipe.prototype.transform = function (num, len) {
        var number = Math.floor(num);
        var length = Math.floor(len);
        if (num === null || isNaN(number) || isNaN(length)) {
            return num;
        }
        var numString = number.toString();
        while (numString.length < length) {
            numString = '0' + numString;
        }
        return numString;
    };
    NumberFixedLenPipe.ɵfac = function NumberFixedLenPipe_Factory(t) { return new (t || NumberFixedLenPipe)(); };
    NumberFixedLenPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "numberFixedLen", type: NumberFixedLenPipe, pure: true });
    return NumberFixedLenPipe;
}());
export { NumberFixedLenPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NumberFixedLenPipe, [{
        type: Pipe,
        args: [{
                name: 'numberFixedLen'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyZWRGaXhMZW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL251bWJlcmVkRml4TGVuLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7SUFBQTtLQW9CQztJQWhCRyxzQ0FBUyxHQUFULFVBQVcsR0FBVyxFQUFFLEdBQVc7UUFDL0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFbEMsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUM5QixTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUMvQjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7d0ZBaEJRLGtCQUFrQjsrRUFBbEIsa0JBQWtCOzZCQVQvQjtDQTBCQyxBQXBCRCxJQW9CQztTQWpCWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLGdCQUFnQjthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBudW1iZXJGaXhlZExlbi5waXBlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ251bWJlckZpeGVkTGVuJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyRml4ZWRMZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oIG51bTogbnVtYmVyLCBsZW46IG51bWJlciApOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IobnVtKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLmZsb29yKGxlbik7XHJcblxyXG4gICAgICAgIGlmIChudW0gPT09IG51bGwgfHwgaXNOYU4obnVtYmVyKSB8fCBpc05hTihsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbnVtU3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHdoaWxlIChudW1TdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG51bVN0cmluZyA9ICcwJyArIG51bVN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudW1TdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19