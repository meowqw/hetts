<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="category-filter">
          <template>
            <div class="category-filter__block">
              <div class="category-filter__block__title">Категория</div>
              <div class="category-filter__block__list">
                <li>
                  <a :href="`${$router.resolve({ path: '/category' }).href}/`"
                    >Title</a
                  >
                </li>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Child title
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="category-filter__block">
            <div class="category-filter__block__title">Цена</div>
            <div class="category-filter__block__list">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  До 1000 ₽
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  От 1000 ₽ до 3000 ₽
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
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
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  М
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  XL
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
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
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Зеленый
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Красный
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Черный
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Коричневый
                </label>
              </div>
            </div>
          </div>
          <div class="category-filter__buttons">
            <button class="button">
              Применить фильтры
              <div class="badge">2</div>
            </button>
            <a href="#">
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
              <ProductItem :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./hetts-product-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      discount: 0,
    };
  },
  components: {
    ProductItem,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(() => {});
  },
};
</script>
