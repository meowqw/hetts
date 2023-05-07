<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="cart" v-if="CART.length">
          <h1 class="cart-title">Кол-во товар</h1>

          <div class="cart__products" >
            <div class="cart-product" v-for="product in CART" :key="product.id">
              <div class="cart-product__check">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @click="CHECK_CART_ITEM(product.id)"
                    value=""
                    id="flexCheckDefa§ult"
                    checked

                  />
                  <label class="form-check-label" for="flexCheckDefault">
                  </label>
                </div>
              </div>
              <div class="cart-product__image">
                <img src="@/assets/images/product-full-image.jpg" />
              </div>
              <div class="cart-product__info">
                <div class="cart-product__info__t">{{ product.title }}</div>
                <div class="cart-product__info__option">
                  <!--<div>
                                              <span>Размер</span>
                                              <select class="custom-select">
                                                  <option>M</option>
                                                  <option>XL</option>
                                              </select>
                                          </div>-->
                  <div>
                    <span>Количество</span>
                    <div class="input-custom-number">
                      <button @click="INCREMENT_CART_ITEM(product.id)">+</button>
                      <div>
                        <input type="hidden" min="0" />
                        {{product.quantity}}
                      </div>
                      <button @click="DECREMENT_CART_ITEM(product.id)">-</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart-product__price">
                <a class="remove" @click="DELETE_FROM_CART(product.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </a>
                <span>Цена</span>
                <div class="cart-product__price__sum">
                  <!-- {{ MoneyHelper.format(product.price, settings.currency) }} -->
                  {{ product.price * product.quantity}}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cart" v-else>
          <h1 class="cart-title">Корзина пуста</h1>
          <p class="mb-5">В корзине нет товаров</p>
        </div>


      </div>
      <div class="col-md-4" v-if="CART.length">
        <div class="cart-total">
          <h3>Итоговая стоимость</h3>
          <div class="cart-total__sum">
            <!-- {{ MoneyHelper.format(cart.total, settings.currency) }} -->
            {{ getCartTotalCost() }}
          </div>
          <a @click="$router.push('/checkout')" class="button"
            >Оформить заказ</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "hetts-cart-main",
  components: {},
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
      "CHECK_CART_ITEM",
    ]),

    getCartTotalCost() {
      let total = 0
      for (let product of this.CART) {
        if (product['checked']) {
          total += (product['price'] * product['quantity'])
        }
      }

      return total
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },

};
</script>