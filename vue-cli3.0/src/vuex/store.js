
const state = {
    count: 3,
    name: 'mxq',
}
const mutations = {
    // 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
    add(state, payload){
        state.count++
        
        window.console.log(payload) //payload是@click="$store.commit('add', 5)"传递的参数
    },
    reduce(state){
        state.count--
    }
}
const getters = {
    // 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
    gcount(state, getters, rootState){ 
        //getters 当前getters对象，用于将getters下的其他getter拿来用
        //对于模块内部的 getter，根节点状态会作为第三个参数暴露出来
        window.console.log(getters, rootState) 
        return state.count + 10
    }
}
const actions = {
    addAction(context){
        context.commit('add', 10); //在组件中调用 this.$store.dispatch('addAction',{age:15})
        // actions中方法获取局部模块状态是context.state,根节点状态是context.rootState
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
