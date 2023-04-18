<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="logo">
            <a href="/">
              <img src="@/assets/images/logo.png" />
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="top-menu">
            <ul>
              <li>
                <a href="/category">Компания</a>
              </li>
              <li>
                <a href="/category">Свитера</a>
              </li>
              <li>
                <a href="/category">Сумки переноски</a>
              </li>
              <li>
                <a href="/">Покупателям</a>
              </li>
              <li>
                <a href="/">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
            <div class="user-actions">
                <div>
        <a href="/account">
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
};
</script>