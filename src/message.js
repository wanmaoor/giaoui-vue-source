import Message from "./components/Message/Message"

export default {
  install(Vue) {
    Vue.prototype.$message = ({type = "success", text = ""}) => {
      createMessage(Vue, {type, text})
    }
  }
}

function createMessage(Vue, propsData) {
  const Constructor = Vue.extend(Message)
  const msg = new Constructor({propsData})
  msg.$mount()
  document.body.appendChild(msg.$el)
  return msg
}

