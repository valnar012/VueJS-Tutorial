import Vue from 'vue'
import App from './App.vue'

new Vue({
  methods: {
    title: function () {
      return this.title;
    },
  },
  render: h => h(App),
}).$mount('#app')