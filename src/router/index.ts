import { createRouter, createWebHistory } from "vue-router";

import HomeWorld from "../components/HelloWorld.vue";
import login from "../components/login.vue";
import EmployeesView from "../components/EmployeesView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeWorld,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/employees",
      name: "employees",
      component: EmployeesView,
    },
  ],
});

export default router;
