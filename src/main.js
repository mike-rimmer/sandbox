import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

Vue.config.productionTip = false

const bus= new Vue()
export default (bus)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
