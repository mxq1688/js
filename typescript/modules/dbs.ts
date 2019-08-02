interface Db<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
// 定义一个操作mysql数据库的类，注意要实现泛型接口，这个类也应该是一个泛型类
export class MysqlDb<T> implements Db<T>{
    add(info:T):boolean{
        console.log(info);
        return true;
    };
    update(info:T,id:number){
        return true;
    };
    delete(id:number){
        return true;
    };
    get(id:number){
        return [];
    };
}

