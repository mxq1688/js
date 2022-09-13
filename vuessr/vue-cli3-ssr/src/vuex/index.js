import Vue from 'vue'
import Vuex from 'vuex'
import Test from './store'


Vue.use(Vuex);

let state = {}
let getters = {}
let mutations = {}
let actions = {}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        Test,
    }
});
