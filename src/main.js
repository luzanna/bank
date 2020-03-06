import Vue from 'vue';
import App from './App.vue';

import Router from "vue-router";
Vue.use(Router);


 const router = new Router({
  mode: 'history',
  routes: [
    {
      path:'/pay',
      component: () => import('./components/Pay.vue'),
    },
      {
          path:'/successful_pay',
          component: () => import('./components/History.vue'),
      },
    {
      path:'/history',
      component: () => import('./components/Successful_Pay.vue'),
    },
    {
        path: '/lk',
      component: () => import('./components/Empty_Page.vue')
    }
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

