import Vue from "vue";
import Router from "vue-router";
import 'font-awesome/css/font-awesome.min.css'

const routerOptions = [
  { path: "/", component: "Hello" },
  { path: "/helloworld", component: "HelloWorld" },
  { path: "/scoreboard", component: "ScoreBoard" },
  { path: "/signin", component: "SignIn" },
//   { path: "/signin", component: "SignIn" },
//   { path: "/signup", component: "SignUp" },
//   { path: "/home", component: "Home", meta: { requiresAuth: true } },
   { path: "*", component: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
