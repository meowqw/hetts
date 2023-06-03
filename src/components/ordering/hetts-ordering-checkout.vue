<template>
  <div class="container">
    <div class="row">
      <hetts-menu-head></hetts-menu-head>
      <div class="checkout">
            <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HettsMenuHead from "@/components/menu/hetts-menu-head.vue";

export default {
  name: "hetts-cart-checkout",
  components: {HettsMenuHead},
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