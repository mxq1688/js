
import component1 from './component1'
import component2 from './component2'
import component3 from './component3'
// export default (Vue)=>{
//     Vue.component(component1.name,component1);
//     Vue.component(component2.name,component2);
//     Vue.component(component3.name,component3);
// }

export default {
    install: (Vue)=>{
        Vue.component(component1.name,component1);
        Vue.component(component2.name,component2);
        Vue.component(component3.name,component3);
    }
}