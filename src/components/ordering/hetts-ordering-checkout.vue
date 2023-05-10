<template>
  <div class="checkout">
    <div class="row">
      <div class="col-md-8">
        <router-view></router-view>


<!--        <div>-->
<!--          <a v-if="screen !== 0" style="cursor: pointer" @click="backScreen()">Назад</a>-->
<!--          <a v-if="screen !== 3" style="cursor: pointer" @click="nextScreen()" class="button">Далее</a>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "hetts-cart-checkout",
  components: {
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