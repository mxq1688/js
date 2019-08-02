export namespace B{
    //命名空间
    interface Animal {
        name: string;
        eat():void;
    }
    export class Chicken implements Animal{
        name:string;
        eat():void {
            console.log(`${this.name} 吃粮食`);
        }
        constructor(name:string){
            this.name = name;
        }
    }
    export class Duck implements Animal{
        name:string;
        eat():void {
            console.log(`${this.name} 吃粮食`);
        }
        constructor(name:string){
            this.name = name
        }
    }
}
