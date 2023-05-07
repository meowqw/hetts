<template>
  <div class="">
    <div v-if="CART.length" class="cart-total">
      <div class="cart-total__h">
        <h3>Ваш заказ</h3>
        <a @click="$router.push('/cart')">Изменить</a>
      </div>
      <div class="cart-total__row">
        <span>Товары <b class="badge">{{ CART.length }}</b></span>
      </div>
      <div class="cart-total__row">
        <span>Товаров на сумму</span>
        {{ getCartTotalCost() }}
        <!--            {{ MoneyHelper.format(cart.total, settings.currency) }}-->
      </div>
      <div class="cart-total__row">
        <span>Стоимость доставки</span>
        0 ₽
      </div>
      <div class="cart-total__row">
        Итого
        <span class="total">1000</span>
      </div>
      <a href="javascript:void(0)" class="button" :class="{'button--disabled': 1}">
        Оформить заказ
      </a>
    </div>
  </div>
</template>

<script>
import {mapGetters } from "vuex";
export default {
  name: "hetts-ordering-result",
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {
    getCartTotalCost() {
      let total = 0
      for (let product of this.CART) {
        if (product['checked']) {
          total += (product['price'] * product['quantity'])
        }
      }

      return total
    },
  }
}
</script>

<style scoped>

</style>