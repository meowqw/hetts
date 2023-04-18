<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="footer-logo">
            <img src="@/assets/images/logo-mini.png" />
          </div>
        </div>
        <div class="col-md-8">
          <div class="menu-list">
            <div class="footer-menu">
              <h3>Свитера</h3>
              <ul>
                <li>
                  <a href="">Для кошек</a>
                </li>
                <li>
                  <a href="">Для собак</a>
                </li>
              </ul>
            </div>
            <div class="footer-menu">
              <h3>Переноски</h3>
              <ul>
                <li>
                  <a href="">Большие переноски</a>
                </li>
                <li>
                  <a href="">Маленькие переноски</a>
                </li>
              </ul>
            </div>
            <div class="footer-menu">
              <h3>Покупателям</h3>
              <ul>
                <li>
                  <a href="">Оплата и доставка</a>
                </li>
                <li>
                  <a href="">Условия возврата</a>
                </li>
                <li>
                  <a href="">Акции</a>
                </li>
              </ul>
            </div>
            <div class="footer-menu">
              <h3>О компании</h3>
              <ul>
                <li>
                  <a href="">Контакты</a>
                </li>
                <li>
                  <a href="">Новости</a>
                </li>
                <li>
                  <a href="">Отзывы</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-contact">
            <div class="footer-contact__links">
              <a href="tel:+7 800 223 45 67">+7 800 223 45 67</a>
              <a href="mailto:info@hetts.ru">info@hetts.ru</a>
            </div>
            <div class="social-links">
              <nav>
                <a href="">
                  <img src="@/assets/images/vk.png" />
                </a>
                <a href="">
                  <img src="@/assets/images/instagram.png" />
                </a>
                <a href="">
                  <img src="@/assets/images/facebook.png" />
                </a>
                <a href="">
                  <img src="@/assets/images/telegram.png" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="copyright">Hetts. Все права защищены © 2021</div>
        </div>
        <div class="col-md-6">
          <div class="bottom-menu">
            <ul>
              <li>
                <a href="#">Политика конфеденциальности</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  <script>
//   import { mapActions } from "vuex";
export default {
  name: "up-home-footer",
};
</script>