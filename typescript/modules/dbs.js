"use strict";
exports.__esModule = true;
// 定义一个操作mysql数据库的类，注意要实现泛型接口，这个类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    ;
    MysqlDb.prototype.update = function (info, id) {
        return true;
    };
    ;
    MysqlDb.prototype["delete"] = function (id) {
        return true;
    };
    ;
    MysqlDb.prototype.get = function (id) {
        return [];
    };
    ;
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
