import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import Home from "./components/Home"
import Tasks from "./components/Tasks"

Vue.use(BootstrapVue)
Vue.use(VueRouter);

//Load css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/style/index.css'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/tasks',
      component: Tasks
    }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')