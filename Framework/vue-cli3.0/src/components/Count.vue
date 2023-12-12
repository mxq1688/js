<template>
  <div>
    <div>
      {{ msg }}
    </div>
    <div>
      模块话使用：
      <div>
        调用模块Test状态： $store.state.Test <br />
        调用模块Test getters： $store.getters <br />
        mutations & actions:
        <div>$store.commit('editKey') $store.dispatch('aEditKey')</div>
      </div>
    </div>
    <div>{{ $store.state.Test.count }}-{{ count }}</div>
    <div>getters: {{ $store.getters.gcount }}-{{ gcount }}</div>

    <p>mutations:</p>
    <div>
      <button @click="$store.commit('add', 5)">+</button>
      <button @click="$store.commit('reduce', 5)">-</button>
    </div>
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>

    <p>actions(支持异步调用):</p>
    <div>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>
    <div>
      <button @click="$store.dispatch('addAction', 5)">+</button>
      <button @click="$store.dispatch('reduceAction', 5)">-</button>
    </div>
  </div>
</template>

<script>
// import store from '@/vuex/index'//单独加载
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  metaInfo: {
    title: "this is Count",
    meta: [
      {
        name: "keywords",
        content: "关键字1,关键字2,关键字3",
      },
      {
        name: "description",
        content: "这是一段网页的描述",
      },
    ],
  },
  name: "vuex",
  // store,
  data() {
    return {
      msg: "vuex学习",
    };
  },
  created() {
    window.console.log("mapState", mapState(["count", "name"]));
    window.console.log(
      "mapState",
      mapState({ count: (state) => state.count, name: (state) => state.name })
    );

    window.console.log("mapGetters", mapGetters(["gcount", "name"]));
    window.console.log(
      "mapGetters",
      mapGetters({
        gcount: (state) => state.count,
        name: (state) => state.name,
      })
    );

    window.console.log("mapMutations", mapMutations(["add", "reduce"]));
    window.console.log("mapActions", mapActions(["addAction", "reduceAction"]));
  },
  // 读取state
  // 方法1：
  // computed:{
  //     count(){
  //         return this.$store.state.count;
  //     },
  // },
  // 方法2:
  // computed:mapState({
  //     count: state=> state.count
  // }),
  //方法3：
  // computed:mapState(['count']),
  //方法4：
  computed: {
    // ...mapState(['count']),
    ...mapState({ count: (state) => state.Test.count }), //modules必须使用这种方法
    ...mapGetters(["gcount"]),
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"]),
  },
};
</script>
<style scoped>
</style>
