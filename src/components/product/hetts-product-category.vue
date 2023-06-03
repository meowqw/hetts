<template>
  <div class="container">
    <div class="row">
      <hetts-menu-head></hetts-menu-head>
      <div class="col-md-3">
        <div class="category-filter">
          <div class="category-filter__block">
            <div class="category-filter__block__title">Категория</div>
            <div class="category-filter__block__list">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    id="category1"
                    v-model="category"
                />
                <label class="form-check-label" for="category1">
                  Свитера
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="2"
                    id="category2"
                    v-model="category"
                />
                <label class="form-check-label" for="category2">
                  Переноски для собак
                </label>
              </div>
            </div>
          </div>
          <div class="category-filter__block">
            <div class="category-filter__block__title">Цена</div>
            <div class="category-filter__block__list">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1000"
                    id="filterPriceOne"
                    v-model="priceFilter"
                />
                <label class="form-check-label" for="filterPriceOne">
                  До 1000 ₽
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1500"
                    id="filterPriceTwo"
                    v-model="priceFilter"
                />
                <label class="form-check-label" for="filterPriceTwo">
                  От 1000 ₽ до 3000 ₽
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="2000"
                    id="filterPriceThree"
                    v-model="priceFilter"
                />
                <label class="form-check-label" for="filterPriceThree">
                  От 3000 ₽
                </label>
              </div>
            </div>
          </div>
          <div class="category-filter__block">
            <div class="category-filter__block__title">Размер</div>
            <div class="category-filter__block__list">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    id="m"
                    v-model="sizeFilter"
                />
                <label class="form-check-label" for="m">
                  М
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="2"
                    id="xl"
                    v-model="sizeFilter"
                />
                <label class="form-check-label" for="xl">
                  XL
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="3"
                    id="l"
                    v-model="sizeFilter"
                />
                <label class="form-check-label" for="l">
                  L
                </label>
              </div>
            </div>
          </div>
          <div class="category-filter__block">
            <div class="category-filter__block__title">Цвет</div>
            <div class="category-filter__block__list">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    id="green"
                    v-model="colorFilter"
                />
                <label class="form-check-label" for="green">
                  Зеленый
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="2"
                    id="red"
                    v-model="colorFilter"
                />
                <label class="form-check-label" for="red">
                  Красный
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="3"
                    id="black"
                    v-model="colorFilter"
                />
                <label class="form-check-label" for="black">
                  Черный
                </label>
              </div>
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="4"
                    id="brown"
                    v-model="colorFilter"
                />
                <label class="form-check-label" for="brown">
                  Коричневый
                </label>
              </div>
            </div>
          </div>
          <div class="category-filter__buttons">
            <button class="button" @click="filterProduct">
              Применить фильтры
              <div class="badge">{{ countSelectedFilter() }}</div>
            </button>
            <a style="cursor: pointer" @click="filterClear()">
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
              Сбросить фильтры
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="category-products">
          <div class="row">
            <!-- <template v-if="loading">
                            Загрузка...
                        </template> -->

            <div
                class="col-md-4 mb-4"
                v-for="product in PRODUCTS"
                :key="product.id"
            >
              <ProductItem :product="product"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./hetts-product-item.vue";
import {mapActions, mapGetters} from "vuex";
import HettsMenuHead from "@/components/menu/hetts-menu-head.vue";

export default {
  data() {
    return {
      discount: 0,

      priceFilter: [],
      sizeFilter: [],
      colorFilter: [],

      category: [],
    };
  },
  components: {
    HettsMenuHead,
    ProductItem,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "GET_PRODUCTS_WITH_FILTER_FROM_API"]),

    countSelectedFilter() {
      return this.sizeFilter.length + this.colorFilter.length + this.priceFilter.length;
    },

    generateFilterLink() {
      let link = ''
      if (this.sizeFilter.length > 0) {
        link += ('size_id=' + this.sizeFilter.join(','))
      }

      if (this.colorFilter.length > 0) {
        if (link.length > 0) link += '&';
        link += ('color_id=' + this.colorFilter.join(','))
      }

      if (this.priceFilter.length > 0) {
        if (link.length > 0) link += '&';
        link += ('price_from=' + this.priceFilter.join(','))
      }

      if (this.category.length > 0) {
        if (link.length > 0) link += '&';
        link += ('category_id=' + this.category.join(','))
      }

      return link
    },

    filterProduct() {
      let link = this.generateFilterLink();
      if (link.length) {
        this.GET_PRODUCTS_WITH_FILTER_FROM_API(link);
      } else {
        this.GET_PRODUCTS_FROM_API();
      }

    },

    filterClear() {
      this.sizeFilter = []
      this.colorFilter = []
      this.priceFilter = []

      this.GET_PRODUCTS_FROM_API();
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CATEGORY"]),
  },
  mounted() {
    // this.GET_PRODUCTS_FROM_API().then(() => {
    // });

    this.category.push(this.CATEGORY);

    this.filterProduct();
  },
};
</script>
