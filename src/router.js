import { defineAsyncComponent } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

const component = {
  template: '<component :is="comp" />',
  computed: {
    comp() {
      let { comp } = this.$route.params;
      return defineAsyncComponent(() => import(`./pages/${comp}.vue`));
    },
  },
};

const routes = [
  {
    path: '/',
    component: () => import('./components/HelloWorld.vue'),
  },
  {
    path: '/:comp',
    component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




// #1#
// import {
//   createWebHashHistory,
//   createRouter,
//   createWebHistory,
// } from "vue-router";
// import Computed from './components/Computed.vue';
// import Conditional from './components/Conditional.vue';
// import Count from "./components/Count.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import PostCode from "./components/PostCode.vue";

// const routes = [
//   {
//     path: "/",
//     component: HelloWorld,
//   },
//   {
//     path: '/conditional',
//     component: Conditional,
//   },
//   {
//     path: '/computed',
//     component: Computed,
//   },
//   {
//     path: "/count",
//     component: Count,
//   },
//   {
//     path: "/postcode",
//     component: PostCode,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
