import {
  createWebHashHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import Computed from './components/Computed.vue';
import Conditional from './components/Conditional.vue';
import Count from "./components/Count.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: '/conditional',
    component: Conditional,
  },
  {
    path: '/computed',
    component: Computed,
  },
  {
    path: "/count",
    component: Count,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
