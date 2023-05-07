<template>
  <div class="checkout">
    <div class="row">
      <div class="col-md-8">

        <HettsOrderingPersonal v-if="screen === 0"></HettsOrderingPersonal>

        <HettsOrderingDelivery v-if="screen === 1"></HettsOrderingDelivery>

        <HettsOrderingPayment v-if="screen === 2"></HettsOrderingPayment>

        <HettsOrderingResult v-if="screen === 3"></HettsOrderingResult>

        <HettsOrderingProducts v-if="screen === 3"></HettsOrderingProducts>

        <div>
          <a v-if="screen !== 0" style="cursor: pointer" @click="backScreen()">Назад</a>
          <a v-if="screen !== 3" style="cursor: pointer" @click="nextScreen()" class="button">Далее</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HettsOrderingProducts from "@/components/ordering/hetts-ordering-products.vue";
import HettsOrderingPayment from "@/components/ordering/hetts-ordering-payment.vue";
import HettsOrderingResult from "@/components/ordering/hetts-ordering-result.vue";
import HettsOrderingDelivery from "@/components/ordering/hetts-ordering-delivery.vue";
import HettsOrderingPersonal from "@/components/ordering/hetts-ordering-personal.vue";

export default {
  name: "hetts-cart-checkout",
  components: {
    HettsOrderingPersonal,
    HettsOrderingProducts,
    HettsOrderingResult,
    HettsOrderingPayment,
    HettsOrderingDelivery,
  },
  data() {
    return {
      screen: 0,
      errors: [],
      regions: [],
    }
  },
  methods: {
    // ...mapActions(['GET'])
    getCartTotalCost() {
      let total = 0
      for (let product of this.CART) {
        if (product['checked']) {
          total += (product['price'] * product['quantity'])
        }
      }

      return total
    },

    backScreen() {
      this.screen -= 1;
    },

    nextScreen() {
      this.screen += 1;

    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style scoped>

</style>