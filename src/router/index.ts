import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import App from "/src/App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "App",
    component: App,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
