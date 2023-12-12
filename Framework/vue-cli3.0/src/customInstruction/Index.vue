<template>
    <div>
        <div v-for="(item, index) in imageList" :key="index">
            <img  src="../assets/logo.png" alt="默认图" v-image="item.url">
        </div>
        <input type="text" v-focus>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.directive("image", {
        inserted: function(el, binding) {
            window.console.log(111, binding)
            //为了真实体现效果，用了延时操作
            setTimeout(function(){
                el.setAttribute("src", binding.value);
            }, Math.random() * 1200)
        }
    })
    export default {
        name: 'aaa',
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el, binding, vnode, oldVnode) {
                    window.console.log(111, el, binding, vnode, oldVnode)
                    el.focus()
                }
            }
        },
        data(){
            return {
                list:[
                    111,222,333,
                ],
                imageList: [
                    {
                        url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg"
                    },
                    {
                        url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg"
                    },
                    {
                        url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg"
                    }
                ]
            }
        },
        methods:{
     
        }

    }
</script>
<style scoped>

</style>
