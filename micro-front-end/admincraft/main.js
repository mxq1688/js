// 导入Admincraft构造函数
import Admincraft from 'admincraft'
// 建立挂载DOM
let appElement = document.createElement('div')
document.body.appendChild(appElement)
// 实例化
let admincraft = new Admincraft()
admincraft.$mount(appElement)