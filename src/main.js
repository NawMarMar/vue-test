import Vue from 'vue';
import App from './App';
import router from './route/index'

new Vue({
  data() {
    return {
      cart: [],
    }
  },
  router,
  render: (h) => h(App),
}).$mount('#app')
