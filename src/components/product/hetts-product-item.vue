
<template>
    <div class="product-item">
        <div class="product-item__image">
          <ProductStickerDiscount :price="100" :compare_at_price="200" />
          <img src="@/assets/images/product-full-image.jpg" />
        </div>
        <div class="product-item__price">
            <span>{{ product.price }} руб</span>
            100 руб

            <div class="like">
                <img src="@/assets/images/heart-icon.svg" />
            </div>
        </div>
        <div class="product-item__title">
            <a href="/">
                {{ product.title }}
            </a>
        </div>

        <div class="product-item__actions">
            <div class="product-item__actions__btn">
                <a style="cursor: pointer;" class="button" @click="ADD_TO_CART(product)">Купить</a>
            </div>
        </div>
    </div>
</template>


<script>
import ProductStickerDiscount from './hetts-product-sticker-discount.vue';
import { mapActions } from "vuex";
export default {
  name: "hetts-product-item",
  props: {
    product: {
        type: [Array, Object],
        required: true
    }
  },
  components: {
    ProductStickerDiscount
  },
  methods: {
    ...mapActions(['ADD_TO_CART'])
  }
  
}

</script>