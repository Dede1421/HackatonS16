import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home";
import VideoList from "../views/Video/VideoList";
import VideoAdd from "../views/Video/VideoAdd";
import VideoEdit from "../views/Video/VideoEdit";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/videolist",
    name: "VideoList",
    component: VideoList,
  },
  {
    path: "/videoadd",
    name: "VideoAdd",
    component: VideoAdd,
  },
  {
    path: "/videoedit",
    name: "VideoEdit",
    component: VideoEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
