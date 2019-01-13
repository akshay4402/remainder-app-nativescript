"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessageFieldComponent = /** @class */ (function () {
    function MessageFieldComponent() {
    }
    MessageFieldComponent.prototype.ngOnInit = function () {
    };
    MessageFieldComponent.prototype.click = function () {
        console.log(this.message);
    };
    MessageFieldComponent.prototype.onchange = function (args) {
        var textField = args.object;
        console.log('jhvjhv', textField.text);
    };
    MessageFieldComponent = __decorate([
        core_1.Component({
            selector: 'ns-message-field',
            templateUrl: './message-field.component.html',
            styleUrls: ['./message-field.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], MessageFieldComponent);
    return MessageFieldComponent;
}());
exports.MessageFieldComponent = MessageFieldComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVVsRDtJQUlFO0lBQWdCLENBQUM7SUFFakIsd0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxxQ0FBSyxHQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWhCVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FpQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkL3RleHQtZmllbGQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLW1lc3NhZ2UtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UtZmllbGQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBtZXNzYWdlOicnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xuICB9XG5cbiAgb25jaGFuZ2UoYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKCdqaHZqaHYnLCB0ZXh0RmllbGQudGV4dCk7XG4gIH1cbn1cbiJdfQ==