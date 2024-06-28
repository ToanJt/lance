import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import Staff from "./components/Staff.vue";
import Goods from "./components/Goods.vue";
import Menu from "./components/Menu.vue";
import App from "./App.vue";
import ReportSum from "./components/ReportSum.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/staff",
    component: Staff,
  },
  {
    path: "/goods",
    component: Goods,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/report",
    component: ReportSum,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
