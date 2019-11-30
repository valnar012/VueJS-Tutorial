import Vue from 'vue'
import App from './App.vue'

require('./style/foundation.min.css')
require('./style/app.css')

new Vue({
  methods: {
    title: function () {
      return this.title;
    }
  },
  render: h => h(App),
}).$mount('#app')