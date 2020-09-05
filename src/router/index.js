import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home";
import VideoList from "../views/Video/VideoList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/videolist",
    name: "VideoLIst",
    component: VideoList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
