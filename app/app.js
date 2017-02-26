"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//our root app component
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_drag_drop_1 = require("ng2-drag-drop");
var App = (function () {
    function App() {
        this.vegetables = [
            { name: "Carrot", type: "vegetable" },
            { name: "Onion", type: "vegetable" },
            { name: "Potato", type: "vegetable" },
            { name: "Capsicum", type: "vegetable" }
        ];
        this.fruits = [
            { name: "Apple", type: "fruit" },
            { name: "Orange", type: "fruit" },
            { name: "Mango", type: "fruit" },
            { name: "Banana", type: "fruit" },
            { name: "Pear", type: "fruit" }
        ];
        this.droppedFruits = [];
        this.droppedVegetables = [];
    }
    App.prototype.onFruitDrop = function (e) {
        this.droppedFruits.push(e.dragData);
        this.removeItem(e.dragData, this.fruits);
    };
    App.prototype.onVegetableDrop = function (e) {
        this.droppedVegetables.push(e.dragData);
        this.removeItem(e.dragData, this.vegetables);
    };
    App.prototype.removeItem = function (item, list) {
        var index = list.map(function (e) {
            return e.name;
        }).indexOf(item.name);
        list.splice(index, 1);
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n\n    <div class=\"row\">\n\n    <div class=\"col-sm-4 col-xs-4\">\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Drag Items from here</div>\n            <div class=\"panel-body scroll-list\">\n                \n                <ul class=\"list-group\">\n                    <li draggable *ngFor=\"let item of vegetables\"\n                        [dragOverClass]=\"'drag-over-border'\"\n                        [dragData]=\"item\" class=\"list-group-item\" \n                        [dragScope]=\"item.type\">\n                        {{item.name}} \n                    </li>\n                </ul>\n\n                <ul class=\"list-group\">\n                    <p class=\"text-justify\">The following items can only be dragged by their handle.</p>\n                    <li draggable *ngFor=\"let item of fruits\"\n                        [dragOverClass]=\"'drag-over-border'\"\n                        [dragData]=\"item\" class=\"list-group-item\" \n                        [dragScope]=\"item.type\"\n                        [dragHandle]=\"'.drag-handle'\">\n                        {{item.name}}\n                        <div class=\"pull-right\"><i class=\"drag-handle fa fa-bars fa-lg\" aria-hidden=\"true\"></i></div> \n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-4 col-xs-4\">\n        <div class=\"panel panel-info\" droppable  [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"'fruit'\"\n             (onDrop)=\"onFruitDrop($event)\">\n            <div class=\"panel-heading\">Drop Fruits here</div>\n            <div class=\"panel-body scroll-list\">\n                <li *ngFor=\"let item of droppedFruits\" class=\"list-group-item\">{{item.name}}</li>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"col-sm-4 col-xs-4\">\n        <div class=\"panel panel-success\" droppable [dragOverClass]=\"'drag-target-border-green'\" [dropScope]=\"'vegetable'\"\n             (onDrop)=\"onVegetableDrop($event)\">\n            <div class=\"panel-heading\">Drop Vegetables here</div>\n            <div class=\"panel-body scroll-list\">\n                <li *ngFor=\"let item of droppedVegetables\" class=\"list-group-item\">{{item.name}}</li>\n            </div>\n        </div>\n    </div>\n    \n</div>\n  ",
        styles: ["\n    div.scroll-list {\n      overflow: auto;\n      max-height: 70vh;\n    }\n    \n    .drag-over-border {\n      border: #ff525b dashed 2px;\n    }\n    \n    .drag-target-border {\n       border: #00bfff dashed 2px;\n    }\n\n    .drag-target-border-green {\n       border: #3c763d dashed 2px;\n    }\n\n    .drag-handle {\n        cursor: move;\n    }\n   "
        ]
    })
], App);
exports.App = App;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_2.NgModule({
        imports: [platform_browser_1.BrowserModule, ng2_drag_drop_1.Ng2DragDropModule],
        declarations: [App],
        bootstrap: [App]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map