"use strict";
exports.__esModule = true;
var B;
(function (B) {
    var Chicken = /** @class */ (function () {
        function Chicken(name) {
            this.name = name;
        }
        Chicken.prototype.eat = function () {
            console.log(this.name + " \u5403\u7CAE\u98DF");
        };
        return Chicken;
    }());
    B.Chicken = Chicken;
    var Duck = /** @class */ (function () {
        function Duck(name) {
            this.name = name;
        }
        Duck.prototype.eat = function () {
            console.log(this.name + " \u5403\u7CAE\u98DF");
        };
        return Duck;
    }());
    B.Duck = Duck;
})(B = exports.B || (exports.B = {}));
