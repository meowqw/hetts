<template>
  <div style="margin-bottom: 10px"><span @click="$router.push('/')"
                                         style="color: gray; cursor: pointer">Главная</span><span> – {{ getCategory }}</span>
  </div>
  <div v-if="$route.path !== '/cart' && $route.path !== '/product'" style="margin-bottom: 10px">
    <h2>{{ getCategory }}</h2>
    <h2>{{ }}</h2>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "hetts-menu-head",
  computed: {
    ...mapGetters(['CATEGORY']),
    getCategory: function () {
      if (this.$route.path === '/category') {
        if (this.CATEGORY === 1) {
          return 'Свитера для собак';
        } else if (this.CATEGORY === 2) {
          return 'Переноски для собак';
        } else {
          return ''
        }
      } else if (this.$route.path === '/cart') {
        return 'Корзина'
      } else if (this.$route.path === '/product') {
        if (this.CATEGORY === 1) {
          return 'Свитера для собак';
        } else if (this.CATEGORY === 2) {
          return 'Переноски для собак';
        } else {
          return ''
        }
      } else {
        return 'Оформление заказа'
      }
    }
  }
}
</script>

<style scoped>

</style>