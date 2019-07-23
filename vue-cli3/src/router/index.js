import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Hello1 from '../components/Hello1'
import Hello2 from '../components/Hello2'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'
import Count from '@/components/Count'

import Compon from '@/components/Compon'
import Slot from '@/components3/Slot'
import Dynamicc from '@/components4/Dynamicc'


Vue.use(Router);
const routers = {
    mode: 'history',//去除路由地址中的#
    //滚动行为
    scrollBehavior (to, from, savedPosition) {
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 0 }
        // }
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    routes: [
        //命名视图
        {
            path: '/',
            name: 'hello',
            components: {
                default: HelloWorld,
                left: Hello1,
                right: Hello2,
            },
            meta: {title: '主页'},
            // 路由独享的守卫
            beforeEnter(to, from, next){
                // console.log(to, from, next);
                next();
            }
        },
        //子路由
        {
            props: true,//如果 props 被设置为 true，route.params 将会被设置为组件属性
            // props: (route) => ({ query: route.query.q }),
            // props: {name: 'mxq', sex: 1,},
            path: '/Hi/:id',
            name: 'Hi',
            alias: '/HiAlias/:id',//path的别名，参数还是需要的
            component: resolve =>
                require(['../components/Hi.vue'], resolve),
            children: [
                {
                    // 当 /Hi/:id/Hi1 匹配成功，
                    // path: 'Hi1',
                    name: 'Hi1',path: '/Hi1/:m',component: Hi1,
                },
                {
                    name: 'Hi2',path: '/Hi2/:id(\\d+)',component: Hi2,
                },

            ]
        },
        {
            path: '/gohome',
            redirect: '/',
            //redirect: { name: 'hello' }重定向的目标也可以是一个命名的路由
            // 甚至是一个方法，动态返回重定向目标
            // redirect: to => {
            //     // 方法接收 目标路由 作为参数
            //     // return 重定向的 字符串路径/路径对象
            // }
        },
        {
            path: '/count',
            component: Count,
        },
        {
            path: '*',
            component: Error
        },

        {
            path: '/compon',
            component: Compon,
        },
        {
            path: '/slot',
            component: Slot,
        },
        {
            path: '/dynamicc',
            component: Dynamicc,
        },

    ]
};
const router  =new Router(routers);
// 全局前置守卫
router.beforeEach((to, from, next) => {
    // console.log(to);
    next();
})


export default router;
