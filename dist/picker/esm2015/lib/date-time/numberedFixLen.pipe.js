/**
 * numberFixedLen.pipe
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberFixedLenPipe {
    transform(num, len) {
        const number = Math.floor(num);
        const length = Math.floor(len);
        if (num === null || isNaN(number) || isNaN(length)) {
            return num;
        }
        let numString = number.toString();
        while (numString.length < length) {
            numString = '0' + numString;
        }
        return numString;
    }
}
NumberFixedLenPipe.ɵfac = function NumberFixedLenPipe_Factory(t) { return new (t || NumberFixedLenPipe)(); };
NumberFixedLenPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "numberFixedLen", type: NumberFixedLenPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NumberFixedLenPipe, [{
        type: Pipe,
        args: [{
                name: 'numberFixedLen'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyZWRGaXhMZW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL251bWJlcmVkRml4TGVuLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGtCQUFrQjtJQUMzQixTQUFTLENBQUUsR0FBVyxFQUFFLEdBQVc7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFbEMsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUM5QixTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUMvQjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7O29GQWhCUSxrQkFBa0I7MkVBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBSDlCLElBQUk7ZUFBQztnQkFDRixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIG51bWJlckZpeGVkTGVuLnBpcGVcclxuICovXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnbnVtYmVyRml4ZWRMZW4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJGaXhlZExlblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSggbnVtOiBudW1iZXIsIGxlbjogbnVtYmVyICk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihudW0pO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguZmxvb3IobGVuKTtcclxuXHJcbiAgICAgICAgaWYgKG51bSA9PT0gbnVsbCB8fCBpc05hTihudW1iZXIpIHx8IGlzTmFOKGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBudW1TdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKG51bVN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgbnVtU3RyaW5nID0gJzAnICsgbnVtU3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bVN0cmluZztcclxuICAgIH1cclxufVxyXG4iXX0=