<template>
  <div>
    <div class="product-form">
      <template>
        <div class="product-form__options">
          <div class="option-item">
            <div class="option-item__title">Option 1</div>
            <div class="option-item__values">
              <a
                  href="javascript:void(0)"
                  class="option-item__values__button"
              >
                Value 1
              </a>
            </div>
          </div>
          <div class="option-item">
            <div class="option-item__title">Option 2</div>
            <div class="option-item__values">
              <a
                  href="javascript:void(0)"
                  class="option-item__values__button"
              >
                Value 2
              </a>
            </div>
          </div>
        </div>
      </template>
      <div class="product-form__buttons">
        <div class="product-price">
          <span>{{ this.PRODUCT.price }} руб</span>
        </div>
        <input type="hidden" value="1" min="1">
        <button class="button js-button-add-to-cart-2" @click="ADD_TO_CART(this.PRODUCT)" v-if="!isInCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Добавить в корзину
        </button>

        <button style="background-color: gray" class="button js-button-add-to-cart-2" @click="ADD_TO_CART(this.PRODUCT)" v-else-if="isInCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Товар в корзине
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "hetts-product-form",
  props: [
  ],

  data() {
    const settings = window.config;

    return {
      settings: settings,

      loadingCartButton: false,

      form: {
        product_id: null,
        product_name: '',
        product_price: null,
        product_qty: 1,
        product_options: []
      },

      optionValueIds: [],

      cart: null,
    }
  },
  computed: {
    ...mapGetters(['PRODUCT', "CART"]),
    isInCart() {
      return this.CART.some(item => item.id === this.PRODUCT.id);
    },
  },
  methods: {
    ...mapActions(["ADD_TO_CART"])
  }
}
</script>
