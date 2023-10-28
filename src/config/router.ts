import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    component: () => import("@/templates/Auth.vue"),
    children: [
      {
        path: "",
        redirect: "/signin",
      },
      {
        path: "signin",
        component: () => import("@/pages/auth/SignIn.vue"),
        meta: { public: true },
      },
      {
        path: "signout",
        component: () => import("@/pages/auth/SignOut.vue"),
      },
      {
        path: "forget-password",
        component: () => import("@/pages/auth/ForgetPassword.vue"),
        meta: { public: true },
      },
      {
        path: "reset-password",
        component: () => import("@/pages/auth/ResetPassword.vue"),
        meta: { public: true },
      },
      {
        path: "signup",
        component: () => import("@/pages/auth/SignUp.vue"),
        meta: { public: true },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/templates/Member.vue"),
    children: [
      {
        path: "",
        redirect: "/recipes",
      },
      {
        path: "recipes",
        component: () => import("@/pages/Recipes.vue"),
      },
      {
        path: "recipes/:id",
        component: () => import("@/pages/Recipe.vue"),
      },
      {
        path: "feeds",
        component: () => import("@/pages/Feeds.vue"),
      },
      {
        path: "browser",
        component: () => import("@/pages/Browser.vue"),
      },
      {
        path: "friends",
        component: () => import("@/pages/Friends.vue"),
      },
      {
        path: "schedule",
        component: () => import("@/pages/Schedule.vue"),
      },
      {
        path: "list",
        component: () => import("@/pages/List.vue"),
      },
      {
        path: "api-test",
        component: () => import("@/pages/ApiTest.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
