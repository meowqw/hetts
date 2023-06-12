
<template>
    <div class="product-item">
        <div class="product-item__image">
<!--          <ProductStickerDiscount :price="product.discount_price" :compare_at_price="product.price" />-->
          <img :src="product.image" />
        </div>
        <div class="product-item__price">
            <span>{{ product.price }} руб</span>
<!--          {{ product.discount_price }} руб-->

            <div class="like">
                <img src="@/assets/images/heart-icon.svg" />
            </div>
        </div>
        <div class="product-item__title">
            <a href="/">
                {{ product.title }}
            </a>
        </div>

        <div class="product-item__actions" @click="goToProduct()">
            <div class="product-item__actions__btn" v-if="!isInCart">
                <a style="cursor: pointer;" class="button">Купить</a>
            </div>
          <div class="product-item__actions__btn" v-if="isInCart">
            <a style="cursor: pointer; background-color: gray" class="button">В корзине</a>
          </div>
        </div>
    </div>
</template>


<script>
// import ProductStickerDiscount from './hetts-product-sticker-discount.vue';
import {mapActions, mapGetters} from "vuex";
export default {
  name: "hetts-product-item",
  props: {
    product: {
        type: [Array, Object],
        required: true
    }
  },
  components: {
    // ProductStickerDiscount
  },
  methods: {
    ...mapActions(['ADD_TO_CART', "SET_PRODUCT"]),
    goToProduct() {
      this.SET_PRODUCT(this.product);
      this.$router.push('/product')
    }
  },
  computed: {
    ...mapGetters(['CART']),
    isInCart() {
      return this.CART.some(item => item.id === this.product.id);
    },
  }
  
}

</script>