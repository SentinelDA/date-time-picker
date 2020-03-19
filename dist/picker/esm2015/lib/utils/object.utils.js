/**
 * object.utils
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
export function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (const source of sources) {
        if (source != null) {
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9vYmplY3QudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFHSDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVMsRUFBRSxHQUFHLE9BQWM7SUFDckQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2QsTUFBTSxTQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUNqRTtJQUVELEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzFCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogb2JqZWN0LnV0aWxzXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHRlbmRzIGFuIG9iamVjdCB3aXRoIHRoZSAqZW51bWVyYWJsZSogYW5kICpvd24qIHByb3BlcnRpZXMgb2Ygb25lIG9yIG1vcmUgc291cmNlIG9iamVjdHMsXHJcbiAqIHNpbWlsYXIgdG8gT2JqZWN0LmFzc2lnbi5cclxuICpcclxuICogQHBhcmFtIGRlc3QgVGhlIG9iamVjdCB3aGljaCB3aWxsIGhhdmUgcHJvcGVydGllcyBjb3BpZWQgdG8gaXQuXHJcbiAqIEBwYXJhbSBzb3VyY2VzIFRoZSBzb3VyY2Ugb2JqZWN0cyBmcm9tIHdoaWNoIHByb3BlcnRpZXMgd2lsbCBiZSBjb3BpZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kT2JqZWN0KGRlc3Q6IGFueSwgLi4uc291cmNlczogYW55W10pOiBhbnkge1xyXG4gICAgaWYgKGRlc3QgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xyXG4gICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3Rba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXN0O1xyXG59XHJcbiJdfQ==