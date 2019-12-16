<template>
    <div>
        <div>
            {{msg}}
        </div>
        <div>
            {{ $store.state.count }}-{{count}}
        </div>
        <div>
            <button @click="$store.commit('add', 5)">+</button>
            <button @click="reduce">-</button>
        </div>
        <div>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store.js'
    import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
    export default {
        name: 'vuex',
        store,
        data(){
            return {
                msg: 'vuex学习',
            }
        },
        computed:{
            //读取state
            // 方法1：
            // count(){
            //     return this.$store.state.count;
            // },
        },
        // 方法2:
        // computed:mapState({
        //     count: state=> state.count
        // }),
        //方法3：
        // computed:mapState(['count']),
        computed:{
            ...mapState(['count']),
            ...mapGetters(['count']),

        },
        methods:{
           ...mapMutations([
               'add', 'reduce'
           ]),
           ...mapActions(['addAction', 'reduceAction']),
        }

    }
</script>
<style scoped>

</style>
