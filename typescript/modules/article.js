"use strict";
exports.__esModule = true;
var dbs_1 = require("./dbs");
var articleClass = /** @class */ (function () {
    function articleClass() {
    }
    return articleClass;
}());
var articleModel = new dbs_1.MysqlDb();
exports.articleModel = articleModel;
var article = new articleClass();
exports.article = article;
