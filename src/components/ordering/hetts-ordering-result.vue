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
    ...mapGetters(['CART', 'ORDER_DELIVERY', 'ORDER_PAYMENT', 'ACCOUNT', 'TOKEN'])
  },
  methods: {
    ...mapActions(['POST_ORDER_API', 'GET_ACCOUNT', "CLEAR_CART"]),
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
      this.POST_ORDER_API({user_id: this.ACCOUNT.id, order_status_id: 1, products: this.CART, token: this.TOKEN})
      this.CLEAR_CART();
      this.$router.push('/account');

    },


  },
  mounted() {
    this.GET_ACCOUNT(this.TOKEN);
  }
}
</script>

<style scoped>

</style>