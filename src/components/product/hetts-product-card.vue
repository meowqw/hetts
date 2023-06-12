<template>
  <div>
    <div class="container mb-4">
      <div class="row">
        <HettsMenuHead></HettsMenuHead>
        <div class="col-md-12">
          <h1 class="product-title">{{ this.PRODUCT.title }}</h1>
        </div>
      </div>
    </div>
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-6">
          <HettsProductImages :img="this.PRODUCT.image"/>
        </div>
        <div class="col-md-6">
          <div class="product-options mb-4">
            <h3 class="product-desc-title">Размер</h3>
            <div class="product-options__list">
              <a href="#" @click="selectSize('M')" :class="this.size === 'M' ? 'selected' : ''">М</a>
              <a href="#" @click="selectSize('XL')" :class="this.size === 'XL' ? 'selected' : ''">XL</a>
              <a href="#" @click="selectSize('L')" :class="this.size === 'L' ? 'selected' : ''">L</a>
              <a href="#" @click="selectSize('S')" :class="this.size === 'S' ? 'selected' : ''">S</a>
            </div>
          </div>
          <div class="product-options mb-4">
            <h3 class="product-desc-title">Цвет</h3>
            <div class="product-options__list">
              <a href="#" @click="selectColor('green')"
                 :class="this.color === 'green' ? 'option-color option-color--green selected' : 'option-color option-color--green'">green</a>
              <a href="#" @click="selectColor('red')"
                 :class="this.color === 'red' ? 'option-color option-color--red selected' : 'option-color option-color--red'">red</a>
              <a href="#" @click="selectColor('yellow')"
                 :class="this.color === 'yellow' ? 'option-color option-color--yellow selected' : 'option-color option-color--yellow'">yellow</a>
              <a href="#" @click="selectColor('black')"
                 :class="this.color === 'black' ? 'option-color option-color--black selected' : 'option-color option-color--black'">black</a>
              <a href="#" @click="selectColor('grey')"
                 :class="this.color === 'grey' ? 'option-color option-color--grey selected' : 'option-color option-color--grey'">grey</a>
            </div>
          </div>
          <HettsProductForm />
          <div class="product-description">
            <h3 class="product-desc-title">Описание</h3>
            <p>{{ this.PRODUCT.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-8">
          <div class="product-attributes">
            <ul>
              <li v-for="(value, key) in JSON.parse(this.PRODUCT.characteristics)" v-bind:key="key">
                <span>{{ key }}</span>
                <span>{{ value }}</span>
              </li>
            </ul>
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
                <template v-for="(carousel, index) in products"
                          :key="carousel.id">
                  <div
                      :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                    <div class="row">
                      <div
                          class="col-md-3"
                          v-for="product in carousel"
                          :key="product.id">
                        <HettsProductItem :product="product"/>
                      </div>
                    </div>
                  </div>
                </template>
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
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-12">
          <div class="subscription">
            <div class="row">
              <div class="col-md-6">
                <h3>
                  Узнайте первым<br>
                  о специальных предложениях
                </h3>
                <p>Оставьте ваш адрес электронной почты и мы Вас оповестим</p>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group mt-3">
                      <input required type="email" class="form-control" placeholder="Ваш E-mail" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <button class="button">Подписаться</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-check mt-3">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                      <label class="form-check-label" for="flexCheckDefault">
                        Я даю свое согласие на обработку персональных данных
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HettsProductImages from "@/components/product/hetts-product-images.vue";
import HettsProductForm from "@/components/product/hetts-product-form.vue";
import HettsMenuHead from "@/components/menu/hetts-menu-head.vue";
import HettsProductItem from "@/components/product/hetts-product-item.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "hetts-product-card",
  components: {
    HettsMenuHead,
    HettsProductImages,
    HettsProductForm,
    HettsProductItem
  },
  methods: {
    ...mapActions(['SELECT_PRODUCT_COLOR_CART', 'SELECT_PRODUCT_SIZE_CART', 'GET_PRODUCTS_FROM_API']),
    selectColor(color) {
      this.color = color
      this.SELECT_PRODUCT_COLOR_CART(color);
    },
    selectSize(size) {
      this.size = size
      this.SELECT_PRODUCT_SIZE_CART(size);
    }
  },
  computed: {
    ...mapGetters(['PRODUCT', 'PRODUCTS'])
  },
  data() {
    return {
      color: 'green',
      size: 'L',
      products: [],
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(() => {
      this.products = this.PRODUCTS.reduce((acc, cur, i) => {
        const index = Math.floor(i / 4);
        if (!acc[index]) {
          acc[index] = [];
        }
        acc[index].push(cur);
        return acc;
      }, []); // An array of arrays, each containing 4 elements
    });
  },
}
</script>