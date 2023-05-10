<template>
  <hettsOrderingProducts></hettsOrderingProducts>
  <div class="checkout">
    <div class="row">
      <div class="col-md-8">
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
            <a @click="makeOrder" class="button" :class="{'button--disabled': 0}">
              Оформить заказ
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import hettsOrderingProducts from "@/components/ordering/hetts-ordering-products.vue";
export default {
  name: "hetts-ordering-result",
  components: {
    hettsOrderingProducts
  },
  computed: {
    ...mapGetters(['CART', 'ORDER_DELIVERY', 'ORDER_PAYMENT', 'ACCOUNT'])
  },
  methods: {
    ...mapActions(['POST_ORDER_API']),
    getCartTotalCost() {
      let total = 0
      for (let product of this.CART) {
        if (product['checked']) {
          total += (product['price'] * product['quantity'])
        }
      }

      return total
    },
    makeOrder() {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      this.POST_ORDER_API({date: formattedDate, account_id: this.ACCOUNT.id, products: this.CART})
      this.$router.push('/account');



    },
  }
}
</script>

<style scoped>

</style>