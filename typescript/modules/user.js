"use strict";
exports.__esModule = true;
var dbs_1 = require("./dbs");
var userClass = /** @class */ (function () {
    function userClass() {
    }
    return userClass;
}());
var userModel = new dbs_1.MysqlDb();
exports.userModel = userModel;
var user = new userClass();
exports.user = user;
