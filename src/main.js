import Vue from 'vue';
import App from './App';
import Home from './Page/Home';
import About from './Page/About';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'HomePage',
    component:Home,
  },
  {
    path:'/about',
    name:'AboutPage',
    component:About,
  },
]

const router = new VueRouter({
  mode:"history",
  routes,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
