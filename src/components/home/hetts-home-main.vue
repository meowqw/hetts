<template>
  <main>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Slider />
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <a
              href="#"
              class="banner"
              style="background: url('/images/banner1.jpg')"
            >
              <div class="banner__content">
                <h2>
                  Свитера<br />
                  для собак
                </h2>
                <div class="arrow">
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.85833 15.9996L26.3032 15.9996L18.4133 23.9008C17.6326 24.6814 17.6355 25.9485 18.4161 26.7292C19.1967 27.5098 20.4625 27.5084 21.2431 26.7278L21.2445 26.7264L32.479 15.4749C33.2554 14.6956 33.2569 13.4384 32.4861 12.6564L21.2516 1.28042C20.4766 0.494115 19.2095 0.485631 18.4232 1.26345L18.4147 1.27193C17.6369 2.04975 17.634 3.3084 18.4062 4.09188L26.2155 12.0002L2.85833 12.0002C2.30679 12.0002 1.80616 12.2236 1.44412 12.5856C1.08208 12.9477 0.858636 13.4483 0.858636 13.9999C0.858636 15.1058 1.75242 15.9996 2.85833 15.9996Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <a
              href="#"
              class="banner"
              style="background: url('/images/banner2.jpg')"
            >
              <div class="banner__content">
                <h2>
                  Сумки<br />
                  переноски
                </h2>
                <div class="arrow">
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.85833 15.9996L26.3032 15.9996L18.4133 23.9008C17.6326 24.6814 17.6355 25.9485 18.4161 26.7292C19.1967 27.5098 20.4625 27.5084 21.2431 26.7278L21.2445 26.7264L32.479 15.4749C33.2554 14.6956 33.2569 13.4384 32.4861 12.6564L21.2516 1.28042C20.4766 0.494115 19.2095 0.485631 18.4232 1.26345L18.4147 1.27193C17.6369 2.04975 17.634 3.3084 18.4062 4.09188L26.2155 12.0002L2.85833 12.0002C2.30679 12.0002 1.80616 12.2236 1.44412 12.5856C1.08208 12.9477 0.858636 13.4483 0.858636 13.9999C0.858636 15.1058 1.75242 15.9996 2.85833 15.9996Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">Вам может понравится</h2>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  class="carousel-item active"
                  v-for="carousel in products"
                  :key="carousel.id"
                >
                  <div class="row">
                    <div
                      class="col-md-3"
                      v-for="product in carousel"
                      :key="product.id"
                    >
                      <ProductItem :product="product" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
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
                  class="feather feather-arrow-left"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
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
                  class="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="feedback-form">
              <h2>Вопросы и предложения</h2>
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ваш телефон"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mt-3">
                      <input
                        required
                        type="email"
                        class="form-control"
                        placeholder="Ваше E-mail"
                      />
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ваш вопрос"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mt-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Я даю свое согласие на обработку персональных данных
                    </label>
                  </div>
                  <div class="col-md-6 mt-5">
                    <button class="button">Отправить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
    
<script>
import Slider from "@/components/carousel/hetts-carouser-slider.vue";
import ProductItem from "@/components/product/hetts-product-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "up-home-home",
  data() {
    return {
      products: [],
    };
  },
  components: {
    Slider,
    ProductItem,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(() => {
      const result = this.PRODUCTS.reduce((acc, cur, i) => {
        const index = Math.floor(i / 4);
        if (!acc[index]) {
          acc[index] = [];
        }
        acc[index].push(cur);
        return acc;
      }, []);
      this.products = result; // An array of arrays, each containing 4 elements
    });
  },
};
</script>