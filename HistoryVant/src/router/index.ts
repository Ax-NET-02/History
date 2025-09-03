import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Order from "../views/Order.vue";
import Checkout from "../views/Checkout.vue";
import { useCartStore } from "../stores/cart";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Order", component: Order },
  { path: "/checkout", name: "Checkout", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由守卫：刷新页面自动跳回首页并清空购物车
router.beforeEach((to, from, next) => {
  // 刷新页面时 from.name 为 undefined
  if (!from.name && to.path !== "/") {
    const cartStore = useCartStore();
    cartStore.clearCart(); // 清空购物车
    next("/");             // 跳转到首页
  } else {
    next();
  }
});

export default router;
