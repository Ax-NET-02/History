import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Product {
  name: string;
  price: number;
  desc?: string;
  img?: string;
  count?: number;
}

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Product[]>([]);

  // 添加商品
  const addToCart = (product: Product) => {
    const item = cart.value.find(c => c.name === product.name);
    if (item) {
      item.count! += 1;
    } else {
      cart.value.push({ ...product, count: 1 });
    }
    product.count = cart.value.find(c => c.name === product.name)?.count ?? 0;
  };

  // 减少商品数量
  const decreaseItem = (product: Product) => {
    const item = cart.value.find(c => c.name === product.name);
    if (!item) return;
    if ((item.count ?? 0) > 1) {
      item.count!--;
    } else {
      removeItem(product);
    }
    product.count = cart.value.find(c => c.name === product.name)?.count ?? 0;
  };

  // 移除商品
  const removeItem = (product: Product) => {
    cart.value = cart.value.filter(c => c.name !== product.name);
    product.count = 0;
  };

  // 清空购物车
  const clearCart = () => {
    cart.value = [];
  };

  // 总数量
  const cartTotalCount = computed(() =>
    cart.value.reduce((sum, item) => sum + (item.count ?? 0), 0)
  );

  // 总价格
  const cartTotalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + (item.count ?? 0) * item.price, 0)
  );

  return { cart, addToCart, decreaseItem, removeItem, clearCart, cartTotalCount, cartTotalPrice };
});
