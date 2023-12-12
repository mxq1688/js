import LoadingComponent from './index.vue'

let Loading = {};

Loading.install = (Vue) => {
    Vue.component('loading', LoadingComponent)
}

export default Loading;