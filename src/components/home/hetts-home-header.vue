<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="logo">
            <a @click="goTo('/')">
              <img src="@/assets/images/logo.png" />
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="top-menu">
            <ul>
<!--              <li>-->
<!--&lt;!&ndash;                <a @click="goTo('/category')">Компания</a>&ndash;&gt;-->
<!--              </li>-->
              <li>
                <a @click="goTo('/category', 1)">Свитера</a>
              </li>
              <li>
                <a @click="goTo('/category', 2)">Сумки переноски</a>
              </li>
<!--              <li>-->
<!--                <a>Покупателям</a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a>Контакты</a>-->
<!--              </li>-->
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="user-actions">
            <div>
              <a @click="goToAccount()">
                <img src="@/assets/images/account-icon.svg" />
              </a>
            </div>
            <RouterLink to="/cart">
              <img src="@/assets/images/cart-icon.svg" />
              <div class="badge">{{ CART.length }}</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
  
  <script>
  import {mapActions, mapGetters} from "vuex";
export default {
  name: "up-home-header",

  methods: {
    ...mapActions(["SET_CATEGORY"]),
    goTo(link, category) {
      this.SET_CATEGORY(category);
      this.$router.push(link);
    },
    goToAccount() {
      if (this.TOKEN !== '') {
        this.$router.push('/account');
      } else {
        this.$router.push('/login');
      }
    }
  },
  computed: {
    ...mapGetters(['CART', 'ACCOUNT', 'TOKEN'])
  },
};
</script>