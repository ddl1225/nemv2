import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
        import(/* webpackChunkName: "about" */ "@/layout/home/index.vue"),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import("@/views/index.vue"),
      },
      {
        path: 'user',
        name: 'user',
        component: () => import("@/views/user.vue"),
        // meta: { src: require('@/assets/about.jpg') },
      },
      {
        path: 'calculator',
        name: 'calculator',
        component: () => import("@/views/Calculator.vue"),
        // meta: { src: require('@/assets/about.jpg') },
      },
      {
        path: 'information',
        name: 'information',
        component: () => import("@/views/information.vue"),
        // meta: { src: require('@/assets/about.jpg') },
      },
      {
        path: 'address',
        name: 'address',
        component: () => import("@/views/address.vue"),
        // meta: { src: require('@/assets/about.jpg') },
      },
      {
        path: 'join',
        name: 'join',
        component: () => import("@/views/join.vue"),
        // meta: { src: require('@/assets/about.jpg') },
      },
      {
        path: 'mobile',
        name: 'mobile',
        component: () => import("@/views/mobile.vue"),
        // meta: { src: require('@/assets/about.jpg') },
      },



    ],
  },
  // {
  //   path: "/user",
  //   name: "사용자",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/user.vue")
  // },
  // {
  //   path: "/calculator",
  //   name: "계산기",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/Calculator.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
