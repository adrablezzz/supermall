import Toast from 'components/common/toast/Toast'

const obj = {}

obj.install = function(Vue) {
  // console.log('执行了toast的install函数')
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.根据构造器创建一个toast对象
  const toast = new toastConstructor()
  //3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  //4.将toast元素添加到body上
  document.body.appendChild(toast.$el)
  //5.在Vue原型上添加toast
  Vue.prototype.$toast = toast
}

export default obj