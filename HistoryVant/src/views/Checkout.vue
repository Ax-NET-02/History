<template>
  <van-nav-bar title="订单详情" left-text="返回" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-button
        plain
        icon="bag-o"
        type="primary"
        size="small"
      >
        单号
      </van-button>
    </template>
  </van-nav-bar>

  <div class="checkout-page">
    <!-- 订单商品 -->
    <van-card
      v-for="(item, index) in cartStore.cart"
      :key="index"
      :num="item.count"
      :price="item.price"
      :desc="item.desc"
      :title="item.name"
      :thumb="item.img"
      :currency="'¥'"
    >
    </van-card>

    <!-- 底部操作栏 -->
    <van-action-bar>
      <van-action-bar-icon icon="balance-list-o" text="合计" />
      <van-action-bar-button type="warning" :text="'¥' + cartStore.cartTotalPrice" />
      <van-action-bar-button type="danger" text="提交订单" @click="submitOrder" />
    </van-action-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { showToast } from 'vant'

interface OrderInfo {
  name: string
  phone: string
  address: string
}

const cartStore = useCartStore()
const router = useRouter()

const orderInfo = ref<OrderInfo>({
  name: '',
  phone: '',
  address: '',
})

// 提交订单
const submitOrder = () => {
  if (!orderInfo.value.name || !orderInfo.value.phone || !orderInfo.value.address) {
    showToast('请填写完整收货信息')
    return
  }

  console.log('订单提交：', {
    user: orderInfo.value,
    cart: cartStore.cart,
    total: cartStore.cartTotalPrice,
  })

  showToast(`下单成功！合计 ¥${cartStore.cartTotalPrice}`)
  cartStore.clearCart()
  router.push('/')
}

// 返回修改订单
const onClickLeft = () => {
  router.push('/') // Order.vue 会读取 cartStore.cart 并同步
}
</script>

<style scoped>
.checkout-page {
  padding: 16px;
  padding-bottom: 80px;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
