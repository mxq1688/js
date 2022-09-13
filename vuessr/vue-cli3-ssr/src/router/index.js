import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
// import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
// import Error from '@/components/Error'
import Count from '@/components/Count'

import Compon from '@/components/Compon'
import Slot from '@/components3/Slot'
import Dynamicc from '@/components4/Dynamicc'
import Fcom from '@/eventBus/Fcom'
import customInstruction from '@/customInstruction/Index'
import plugs from '@/plugs/Index'
import render from '@/render/Index'


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
        window.console.log(from, savedPosition)
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
            meta:{
                title: 'this is couunt no metaInfo'
            }
        },
        {
            path: '*',
            // component: Error,
            // 或者跳转到主页
            redirect: '/'
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
            meta:{
                title: 'this is dynamicc'
            }
        },
        {
            path: '/eventbus',
            component: Fcom,
        },
        {
            path: '/customInstruction',
            component: customInstruction
        },
        {
            path: '/plugs',
            component: plugs,
        },
        {
            path: '/render',
            component: render,
        }

    ],
    base: window.__MICRO_APP_BASE_ROUTE__ || '/',
};
const router  =new Router(routers);
// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
      }
    // console.log(to);
    next();

    // next(): 进行管道中的下一个钩子
    // next(false): 中断当前的导航
    // next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址
    //next(vm => {
        // 通过 `vm` 访问组件实例
    //})

})


export default router;
