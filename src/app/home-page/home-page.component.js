"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
;
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.user = new User();
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'ns-home-page',
            moduleId: module.id,
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFJbEQ7SUFBQTtJQUdBLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxvQkFBSTtBQUdoQixDQUFDO0FBU0Y7SUFHRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFSVSxpQkFBaUI7UUFSN0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7O09BR1csaUJBQWlCLENBb0M3QjtJQUFELHdCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyICB7XG4gIG1lc3NhZ2UgOiBzdHJpbmc7XG4gIHRpbWUgOiBzdHJpbmc7XG59O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaG9tZS1wYWdlJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjogVXNlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuLy8gICBvblBpY2tlckxvYWRlZChhcmdzKSB7XG4gICAgXG4vLyAgICAgbGV0IHRpbWVQaWNrZXIgPSA8VGltZVBpY2tlcj5hcmdzLm9iamVjdDtcblxuLy8gICAgIHZhciBkaXNwbGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbi8vICAgICBjb25zb2xlLmxvZyhkaXNwbGF5RGF0ZSk7XG5cbi8vICAgICB0aW1lUGlja2VyLmhvdXIgPSA5O1xuLy8gICAgIHRpbWVQaWNrZXIubWludXRlID0gMjU7XG4vLyB9XG5cbi8vICAgICBvblRpbWVDaGFuZ2VkKGFyZ3MpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coYXJncy52YWx1ZSk7XG4vLyAgICAgfVxuXG4vLyAgICAgb25jaGFuZ2UoYXJncykge1xuLy8gICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4vLyAgICAgICBjb25zb2xlLmxvZygnamh2amh2JywgdGV4dEZpZWxkLnRleHQpO1xuLy8gICAgIH1cblxuLy8gICBjbGljaygpIHtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xuLy8gICB9XG5cbiAgXG59XG4iXX0=