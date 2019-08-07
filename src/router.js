import Vue from "vue";
import Router from "vue-router";
import home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '',
          name: 'payWay',
          component: () => import(/* webpackChunkName: "pay-way" */ './views/pay-way.vue'),
        },
        {
          path: 'checkout/:way',
          name: 'checkout',
          component: () => import(/* webpackChunkName: "checkout" */ './views/checkout.vue'),
        },
        {
          path: 'done',
          name: 'done',
          component: () => import(/* webpackChunkName: "done" */ './views/done.vue'),
        },
      ],
    },
  ],
});
