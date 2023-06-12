<template>
      <div class="checkout__products">
        <template v-if="CART.length">
          <div v-for="(product, key) in CART" :key="key" class="cart-product">
            <div class="cart-product__image">
              <img :src="product.image" alt="img"/>
            </div>
            <div class="cart-product__info">
              <div v-html="product.title" class="cart-product__info__t"></div>
              <div class="cart-product__info__option">
                <div>
                  <span>Количество</span>
                  <div>{{ product.quantity }}</div>
                </div>
                <div>
                  <span>Цена</span>
                  <div>{{ product.quantity * product.price }}</div>
                </div>
              </div>
            </div>
          </div>

        </template>
      </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "hetts-ordering-products",
  computed: {
    ...mapGetters(['CART'])
  },
}
</script>

<style scoped>

</style>