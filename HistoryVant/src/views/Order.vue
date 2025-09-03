<template>
  <van-nav-bar title="云朵舒芙蕾">
    <template #right>
      <van-button plain icon="bag-o" type="primary" size="small"> 单号 </van-button>
    </template>
  </van-nav-bar>

  <div class="order-page">
    <div class="product-list">
      <van-card
        v-for="(item, index) in products"
        :key="index"
        :num="item.count ?? 0"
        :price="item.price"
        :desc="item.desc"
        :title="item.name"
        :thumb="item.img"
      >
        <template #footer>
          <div class="counter">
            <van-button size="mini" round type="primary" @click="decrease(item)">-</van-button>
            <span class="count">{{ item.count ?? 0 }}</span>
            <van-button size="mini" round type="primary" @click="increase(item)">+</van-button>
          </div>
        </template>
      </van-card>
    </div>

    <van-action-bar>
      <van-action-bar-icon
        icon="shopping-cart-o"
        :badge="cartStore.cartTotalCount"
        @click="goCheckout"
      />
      <van-action-bar-button
        type="danger"
        :text="`去结算 ￥${cartStore.cartTotalPrice}`"
        @click="goCheckout"
      />
    </van-action-bar>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import type { Product as ProductType } from '../stores/cart'
import { showToast } from 'vant'

const cartStore = useCartStore()
const router = useRouter()

// 商品列表
const products: ProductType[] = reactive([
  {
    name: '黑糖珍珠舒芙蕾',
    price: 15,
    desc: '黑糖珍珠+松软舒芙蕾',
    img: 'https://picsum.photos/200/200?random=1',
    count: 0,
  },
  {
    name: '芒果舒芙蕾',
    price: 15,
    desc: '新鲜芒果果肉搭配舒芙蕾',
    img: 'https://picsum.photos/200/200?random=2',
    count: 0,
  },
  {
    name: '小熊猫猫舒芙蕾',
    price: 15,
    desc: '可爱造型+松软口感',
    img: 'https://picsum.photos/200/200?random=3',
    count: 0,
  },
  {
    name: '莓莓果果舒芙蕾',
    price: 18,
    desc: '草莓+蓝莓+舒芙蕾',
    img: 'https://picsum.photos/200/200?random=4',
    count: 0,
  },
  {
    name: '巧克力坚果舒芙蕾',
    price: 18,
    desc: '浓郁巧克力搭配坚果',
    img: 'https://picsum.photos/200/200?random=5',
    count: 0,
  },
  {
    name: '海苔肉松舒芙蕾',
    price: 15,
    desc: '咸香海苔配肉松',
    img: 'https://picsum.photos/200/200?random=6',
    count: 0,
  },
  {
    name: '躺平鸭鸭舒芙蕾',
    price: 14,
    desc: '趣味造型+松软舒芙蕾',
    img: 'https://picsum.photos/200/200?random=7',
    count: 0,
  },
  {
    name: '抹茶舒芙蕾',
    price: 13,
    desc: '清新抹茶风味，微苦回甘',
    img: 'https://picsum.photos/200/200?random=8',
    count: 0,
  },
])

// 同步购物车数量到商品列表
const syncProductCount = () => {
  products.forEach((product) => {
    const cartItem = cartStore.cart.find((c) => c.name === product.name)
    product.count = cartItem ? cartItem.count : 0
  })
}

onMounted(() => {
  syncProductCount()
})

// 增加数量
const increase = (item: ProductType) => {
  cartStore.addToCart(item)
  syncProductCount()
}

// 减少数量
const decrease = (item: ProductType) => {
  cartStore.decreaseItem(item)
  syncProductCount()
}

// 去结算
const goCheckout = () => {
  if (cartStore.cart.length === 0) {
    showToast('购物车为空')
    return
  }
  router.push('/checkout')
}
</script>

<style scoped>
.order-page {
  padding: 16px;
  padding-bottom: 80px;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.counter {
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.counter span.count {
  width: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

.counter .van-button {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
</style>
