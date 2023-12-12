
import {action, observable, computed} from 'mobx';
import { inject } from 'mobx-react';

export class AppState2 {

    // @observable countNumber = []

    // @action changeCount(){
        
    // }

    @observable list = []

    @action createItem(title){
        this.list.unshift({
            id: Math.random(1, 100),
            title: title,
            finished: false,
        })
    }
    @action toggle(index){
        this.list[index].finished = !this.list[index].finished
    }
    @computed get count(){
        return this.list.filter((vo)=>{
            return vo.finished
        }).length +10;
    }
}

export function withAppState2(c) {
    return inject('appState2')(c);
}
