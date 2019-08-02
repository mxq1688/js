
import {MysqlDb} from "./dbs";

class userClass {
    username: string| undefined;
    password: string| undefined;
}
var userModel = new MysqlDb<userClass>();
var user = new userClass();
export {user, userModel}
