import Vue from "vue";
import VueRouter from "vue-router";
import Comp1 from "./views/Comp1";
import Comp2 from "./views/Comp2";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Comp1
    },
    {
      path: "/a",
      component: Comp2
    },
    {
      path: "**",
      component: Comp1
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 0 }
      };
    }
  }
});

export default router;
