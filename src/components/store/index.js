import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './Router'
import Vuex from 'vuex'
import store from './components/store/store.js'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router :router,
  store,
  render: h => h(App),
}).$mount('#app')
