"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimeFieldComponent = /** @class */ (function () {
    function TimeFieldComponent() {
    }
    TimeFieldComponent.prototype.ngOnInit = function () {
    };
    TimeFieldComponent.prototype.onPickerLoaded = function (args) {
        var timePicker = args.object;
        var displayDate = new Date();
        console.log(displayDate);
        timePicker.hour = 9;
        timePicker.minute = 25;
    };
    TimeFieldComponent.prototype.onTimeChanged = function (args) {
        console.log(args.value);
    };
    TimeFieldComponent.prototype.onchange = function (args) {
        var textField = args.object;
        console.log('jhvjhv', textField.text);
    };
    TimeFieldComponent = __decorate([
        core_1.Component({
            selector: 'ns-time-field',
            templateUrl: './time-field.component.html',
            styleUrls: ['./time-field.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], TimeFieldComponent);
    return TimeFieldComponent;
}());
exports.TimeFieldComponent = TimeFieldComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1lLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVVsRDtJQUVFO0lBQWdCLENBQUM7SUFFakIscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFDRCwyQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUVqQixJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXpDLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUcsMENBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBekJNLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxrQkFBa0IsQ0E0QjlCO0lBQUQseUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGltZS1waWNrZXIvdGltZS1waWNrZXInO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkL3RleHQtZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10aW1lLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lLWZpZWxkLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgVGltZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICBcbiAgICBsZXQgdGltZVBpY2tlciA9IDxUaW1lUGlja2VyPmFyZ3Mub2JqZWN0O1xuXG4gICAgdmFyIGRpc3BsYXlEYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXlEYXRlKTtcblxuICAgIHRpbWVQaWNrZXIuaG91ciA9IDk7XG4gICAgdGltZVBpY2tlci5taW51dGUgPSAyNTtcbn1cblxuICAgIG9uVGltZUNoYW5nZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBvbmNoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZygnamh2amh2JywgdGV4dEZpZWxkLnRleHQpO1xuICAgICAgfVxuICAgIFxuXG59XG4iXX0=