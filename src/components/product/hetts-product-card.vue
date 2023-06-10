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
          <HettsProductImages />
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
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-8">
          <div class="product-attributes">
            <ul>
              <li>
                <span>Цвет</span>
                <span>Белый</span>
              </li>
              <li>
                <span>Цвет</span>
                <span>Белый</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">Вам может понравится</h2>
            <div class="row">
              <div class="col-md-3">
              </div>
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
import {mapGetters} from "vuex";

export default {
  name: "hetts-product-card",
  components: {
    HettsMenuHead,
    HettsProductImages,
    HettsProductForm
  },
  methods: {
    selectColor(color) {
      this.color = color
    },
    selectSize(size) {
      this.size = size
    }
  },
  computed: {
    ...mapGetters(['PRODUCT'])
  },
  data() {
    return {
      color: 'green',
      size: 'L'
    }
  }
}
</script>