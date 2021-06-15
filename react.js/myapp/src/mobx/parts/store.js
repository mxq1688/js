import { AppState } from '../common/app-state';
import { AppState2 } from '../common/app-state2';


// mobx 多个store 方法1
    const App = new AppState()
    const App2 = new AppState2()

    export default {
        AppState:App,
        AppState2:App2,
    }

// mobx 多个store 方法2
    // class Store{
    //     constructor(){
    //         this.AppState = new AppState()
    //         this.AppState2 = new AppState2()
    //     }
    // }
    // export default new Store()