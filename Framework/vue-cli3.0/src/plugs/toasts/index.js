import ToastComponent from './index.vue'

const Toast = {};

// 注册Toast
Toast.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(ToastComponent)
    // 生成一个该子类的实例
    const instance = new ToastConstructor();
    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    window.console.log(222, instance.$el)
    
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    Vue.prototype.$toast = (msg, duration = 2000) => {
     
        instance.message = msg;
        instance.show = true;
        window.console.log(333, instance.show)
        setTimeout(() => {
            
            instance.show = false;
        }, duration);
    }
}

export default Toast

/* 
MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      ...
    })
  
    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      ...
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
  */