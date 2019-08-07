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
          path: 'checkout',
          name: 'checkout',
          component: () => import(/* webpackChunkName: "checkout" */ './views/checkout.vue'),
          children: [
            {
              path: 'store',
              name: 'store',
              component: () => import(/* webpackChunkName: "store" */ './views/store.vue'),
            },
            {
              path: 'card',
              name: 'card',
              component: () => import(/* webpackChunkName: "card" */ './views/card.vue'),
            },
            {
              path: 'line',
              name: 'line',
              component: () => import(/* webpackChunkName: "line" */ './views/line.vue'),
            },
            {
              path: 'atm',
              name: 'atm',
              component: () => import(/* webpackChunkName: "atm" */ './views/atm.vue'),
            },
          ],
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
