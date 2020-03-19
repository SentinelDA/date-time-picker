import { NoopScrollStrategy } from '@angular/cdk/overlay';
let uniqueId = 0;
export class OwlDialogConfig {
    constructor() {
        /**
         * ID of the element that describes the dialog.
         */
        this.ariaDescribedBy = null;
        /**
         * Whether to focus the dialog when the dialog is opened
         */
        this.autoFocus = true;
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
        /** Data being injected into the child component. */
        this.data = null;
        /** Whether the user can use escape or clicking outside to close a modal. */
        this.disableClose = false;
        /**
         * The ARIA role of the dialog element.
         */
        this.role = 'dialog';
        /**
         * Custom class for the pane
         * */
        this.paneClass = '';
        /**
         * Mouse Event
         * */
        this.event = null;
        /**
         * Custom class for the backdrop
         * */
        this.backdropClass = '';
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * */
        this.closeOnNavigation = true;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        /**
         * The max-width of the overlay panel.
         * If a number is provided, pixel units are assumed.
         * */
        this.maxWidth = '85vw';
        /**
         * The scroll strategy when the dialog is open
         * Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
         * */
        this.scrollStrategy = new NoopScrollStrategy();
        this.id = `owl-dialog-${uniqueId++}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy1jb25maWcuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFrQixNQUFNLHNCQUFzQixDQUFDO0FBRTFFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQWlCakIsTUFBTSxPQUFPLGVBQWU7SUFnR3hCO1FBL0ZBOztXQUVHO1FBQ0ksb0JBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRTlDOztXQUVHO1FBQ0ksY0FBUyxHQUFJLElBQUksQ0FBQztRQUV6Qix5Q0FBeUM7UUFDbEMsZ0JBQVcsR0FBSSxJQUFJLENBQUM7UUFPM0Isb0RBQW9EO1FBQzdDLFNBQUksR0FBUyxJQUFJLENBQUM7UUFFekIsNEVBQTRFO1FBQ3JFLGlCQUFZLEdBQUksS0FBSyxDQUFDO1FBTzdCOztXQUVHO1FBQ0ksU0FBSSxHQUE4QixRQUFRLENBQUM7UUFFbEQ7O2FBRUs7UUFDRSxjQUFTLEdBQXVCLEVBQUUsQ0FBQztRQUUxQzs7YUFFSztRQUNFLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRWpDOzthQUVLO1FBQ0Usa0JBQWEsR0FBdUIsRUFBRSxDQUFDO1FBRTlDOzthQUVLO1FBQ0Usc0JBQWlCLEdBQWEsSUFBSSxDQUFDO1FBRTFDLDJCQUEyQjtRQUNwQixVQUFLLEdBQVksRUFBRSxDQUFDO1FBRTNCLDRCQUE0QjtRQUNyQixXQUFNLEdBQVksRUFBRSxDQUFDO1FBYzVCOzs7YUFHSztRQUNFLGFBQVEsR0FBcUIsTUFBTSxDQUFDO1FBVzNDOzs7YUFHSztRQUNFLG1CQUFjLEdBQW9CLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUs5RCxJQUFJLENBQUMsRUFBRSxHQUFHLGNBQWMsUUFBUSxFQUFFLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogZGlhbG9nLWNvbmZpZy5jbGFzc1xyXG4gKi9cclxuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb29wU2Nyb2xsU3RyYXRlZ3ksIFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxubGV0IHVuaXF1ZUlkID0gMDtcclxuXHJcbi8qKiBQb3NzaWJsZSBvdmVycmlkZXMgZm9yIGEgZGlhbG9nJ3MgcG9zaXRpb24uICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUG9zaXRpb24ge1xyXG4gICAgLyoqIE92ZXJyaWRlIGZvciB0aGUgZGlhbG9nJ3MgdG9wIHBvc2l0aW9uLiAqL1xyXG4gICAgdG9wPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBPdmVycmlkZSBmb3IgdGhlIGRpYWxvZydzIGJvdHRvbSBwb3NpdGlvbi4gKi9cclxuICAgIGJvdHRvbT86IHN0cmluZztcclxuXHJcbiAgICAvKiogT3ZlcnJpZGUgZm9yIHRoZSBkaWFsb2cncyBsZWZ0IHBvc2l0aW9uLiAqL1xyXG4gICAgbGVmdD86IHN0cmluZztcclxuXHJcbiAgICAvKiogT3ZlcnJpZGUgZm9yIHRoZSBkaWFsb2cncyByaWdodCBwb3NpdGlvbi4gKi9cclxuICAgIHJpZ2h0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3dsRGlhbG9nQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBkZXNjcmliZXMgdGhlIGRpYWxvZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFyaWFEZXNjcmliZWRCeT86IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBmb2N1cyB0aGUgZGlhbG9nIHdoZW4gdGhlIGRpYWxvZyBpcyBvcGVuZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF1dG9Gb2N1cz8gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBXaGV0aGVyIHRoZSBkaWFsb2cgaGFzIGEgYmFja2Ryb3AuICovXHJcbiAgICBwdWJsaWMgaGFzQmFja2Ryb3A/ID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbSBzdHlsZSBmb3IgdGhlIGJhY2tkcm9wXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIGJhY2tkcm9wU3R5bGU/OiBhbnk7XHJcblxyXG4gICAgLyoqIERhdGEgYmVpbmcgaW5qZWN0ZWQgaW50byB0aGUgY2hpbGQgY29tcG9uZW50LiAqL1xyXG4gICAgcHVibGljIGRhdGE/OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKiBXaGV0aGVyIHRoZSB1c2VyIGNhbiB1c2UgZXNjYXBlIG9yIGNsaWNraW5nIG91dHNpZGUgdG8gY2xvc2UgYSBtb2RhbC4gKi9cclxuICAgIHB1YmxpYyBkaXNhYmxlQ2xvc2U/ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJRCBmb3IgdGhlIG1vZGFsLiBJZiBvbWl0dGVkLCBhIHVuaXF1ZSBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBBUklBIHJvbGUgb2YgdGhlIGRpYWxvZyBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcm9sZT86ICdkaWFsb2cnIHwgJ2FsZXJ0ZGlhbG9nJyA9ICdkaWFsb2cnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9tIGNsYXNzIGZvciB0aGUgcGFuZVxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBwYW5lQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW91c2UgRXZlbnRcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgZXZlbnQ/OiBNb3VzZUV2ZW50ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbSBjbGFzcyBmb3IgdGhlIGJhY2tkcm9wXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgZGlhbG9nIHNob3VsZCBjbG9zZSB3aGVuIHRoZSB1c2VyIGdvZXMgYmFja3dhcmRzL2ZvcndhcmRzIGluIGhpc3RvcnkuXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIGNsb3NlT25OYXZpZ2F0aW9uPzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIFdpZHRoIG9mIHRoZSBkaWFsb2cuICovXHJcbiAgICBwdWJsaWMgd2lkdGg/OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAvKiogSGVpZ2h0IG9mIHRoZSBkaWFsb2cuICovXHJcbiAgICBwdWJsaWMgaGVpZ2h0Pzogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWluLXdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLlxyXG4gICAgICogSWYgYSBudW1iZXIgaXMgcHJvdmlkZWQsIHBpeGVsIHVuaXRzIGFyZSBhc3N1bWVkLlxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBtaW5XaWR0aD86IG51bWJlciB8IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtaW4taGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLlxyXG4gICAgICogSWYgYSBudW1iZXIgaXMgcHJvdmlkZWQsIHBpeGVsIHVuaXRzIGFyZSBhc3N1bWVkLlxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF4LXdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLlxyXG4gICAgICogSWYgYSBudW1iZXIgaXMgcHJvdmlkZWQsIHBpeGVsIHVuaXRzIGFyZSBhc3N1bWVkLlxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBtYXhXaWR0aD86IG51bWJlciB8IHN0cmluZyA9ICc4NXZ3JztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXgtaGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLlxyXG4gICAgICogSWYgYSBudW1iZXIgaXMgcHJvdmlkZWQsIHBpeGVsIHVuaXRzIGFyZSBhc3N1bWVkLlxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBtYXhIZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcblxyXG4gICAgLyoqIFBvc2l0aW9uIG92ZXJyaWRlcy4gKi9cclxuICAgIHB1YmxpYyBwb3NpdGlvbj86IERpYWxvZ1Bvc2l0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNjcm9sbCBzdHJhdGVneSB3aGVuIHRoZSBkaWFsb2cgaXMgb3BlblxyXG4gICAgICogTGVhcm4gbW9yZSB0aGlzIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Nkay9vdmVybGF5L292ZXJ2aWV3I3Njcm9sbC1zdHJhdGVnaWVzXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIHNjcm9sbFN0cmF0ZWd5PzogU2Nyb2xsU3RyYXRlZ3kgPSBuZXcgTm9vcFNjcm9sbFN0cmF0ZWd5KCk7XHJcblxyXG4gICAgcHVibGljIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBgb3dsLWRpYWxvZy0ke3VuaXF1ZUlkKyt9YDtcclxuICAgIH1cclxufVxyXG4iXX0=