import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import Message from "@/components/Message/Message.vue"

Vue.config.productionTip = false

interface IInput {
  type: string;
  text: string;
}

interface IMessage {
  (obj: IInput): void
}


const F: IMessage = ({type = "success", text = ""}) => {
  console.log(type, text)
  new Vue({
    render: h => h(Message)
  }).$mount("#app")
}

Vue.prototype.$message = F

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
