import {
  initMixin
} from './init'
import {
  stateMixin
} from './state'
import {
  renderMixin
} from './render'
import {
  eventsMixin
} from './events'
import {
  lifecycleMixin
} from './lifecycle'
import {
  warn
} from '../util/index'

function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
//添加_init 构造函数
//其中data，props被_data , _props代理,
//根部属性代理访问 '_data' ， '_props'
initMixin(Vue)
//添加原型方法和属性 $data 代理访问 _data, $props 代理访问 _props,
//定义$set，$delete, $watch等
stateMixin(Vue)
//添加原型事件监听函数$on,$off,$emit,$once
//vm._event实例对象存储事件回调函数，或者一个回调函数数组
eventsMixin(Vue)
//生命周期 _update, $forceUpdate, $destroy
//vm.$destroy()  会触发beforeDestroy 和 destroyed 的钩子
lifecycleMixin(Vue)
//render函数,$nextTick ,_render
renderMixin(Vue)

export default Vue
