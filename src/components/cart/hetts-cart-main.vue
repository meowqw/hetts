<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="cart">
          <h1 class="cart-title">
        
              Кол-во товар
     
             Корзина пуста 
          </h1>
     
            <div class="cart__products">
              <div
               
                class="cart-product"
              >
                <div class="cart-product__check">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                    </label>
                  </div>
                </div>
                <div class="cart-product__image">
                  <img />
                </div>
                <div class="cart-product__info">
                  <div
                    class="cart-product__info__t"
                  ></div>
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
                        <button>+</button>
                        <div>
                          <input
                            type="hidden"
                            min="0"
                          />
                          12
                        </div>
                        <button>-</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-product__price">
                  <a
                    href="javascript:void(0)"
                    class="remove"
                  >
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
                  </div>
                </div>
              </div>
            </div>

            <p class="mb-5">В корзине нет товаров</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="cart-total">
          <h3>Итоговая стоимость</h3>
          <div class="cart-total__sum">
            <!-- {{ MoneyHelper.format(cart.total, settings.currency) }} -->
          </div>
          <a :href="$router.resolve({ path: '/checkout' }).href" class="button"
            >Оформить заказ</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
//   import { mapActions } from "vuex";
export default {
  name: "hetts-cart-main",
  components: {},
};
</script>