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
        component: () => import("@/pages/Dashboard.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
