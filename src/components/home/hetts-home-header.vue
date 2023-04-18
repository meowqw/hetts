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
              <li>
                <a @click="goTo('/category')">Компания</a>
              </li>
              <li>
                <a @click="goTo('/category')">Свитера</a>
              </li>
              <li>
                <a @click="goTo('/category')">Сумки переноски</a>
              </li>
              <li>
                <a >Покупателям</a>
              </li>
              <li>
                <a >Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
            <div class="user-actions">
                <div>
        <a @click="goTo('/account')">
            <img src="@/assets/images/account-icon.svg" />
        </a>
    </div>
            <RouterLink to="/cart">
            <img src="@/assets/images/cart-icon.svg"/>
            <div class="badge">5</div>
            </RouterLink>
        </div>
        </div>
      </div>
    </div>
  </header>
</template>
  
  <script>
//   import { mapActions } from "vuex";
export default {
  name: "up-home-header",

  methods: {
    goTo(link) {
        this.$router.push(link);
    }
  }
};
</script>