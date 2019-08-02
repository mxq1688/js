
import {MysqlDb} from "./dbs";

class articleClass {
    title: string| undefined;
    content: string| undefined;
}
var articleModel = new MysqlDb<articleClass>();
var article = new articleClass();
export {article, articleModel}
