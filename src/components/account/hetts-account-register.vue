<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="register-form">
          <h1>Регистрация</h1>
          <p>
            Создание учетной записи у нас происходит быстро и легко, и позволит
            вам просто получить доступ к вашим данным, когда вы вернетесь на
            сайт. Вы можете добавить несколько адресов доставки, отслеживать ваш
            заказ и многое другое.
          </p>
          <!-- <template v-if="!register_success"> -->
          <form>
            <div class="form-group">
              <input
                  required
                  type="text"
                  v-model="form.name"
                  class="form-control"
                  placeholder="Имя *"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  type="text"
                  v-model="form.surname"
                  class="form-control"
                  placeholder="Фамилия"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="E-mail *"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="Пароль *"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  v-model="form.confirmation_password"
                  type="password"
                  class="form-control"
                  placeholder="Повторить пароль *"
              />
            </div>
            <button class="button" @click="registration" type="button">Зарегистрироваться</button>

            <div v-if="errorMessage">
              <div class="alert alert-danger mt-3">
                <div>Email уже зарегистрирован</div>
              </div>
            </div>
          </form>
          <!-- </template> -->
          <!-- <template v-else> -->
          <p v-if="messageSend">Вам на E-mail отправлено письмо для активации аккаунта.</p>
          <!-- </template> -->
        </div>
      </div>
      <div class="col-md-5">
        <div class="reg-to-login-form">
          <h2>Есть аккаунт? Войдите</h2>
          <form>
            <div class="form-group">
              <input
                  required
                  type="email"
                  class="form-control"
                  placeholder="E-mail *"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Пароль *"
              />
            </div>
            <div class="reg-to-login-form__btns">
              <button class="button" type="button">Войти</button>
              <a href="#">Забыли пароль?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "hetts-account-register",
  data() {
    return {
      messageSend: false,
      errorMessage: false,
      form: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmation_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['POST_ACCOUNT_API', "GET_ACCOUNT_BY_EMAIL_FROM_API"]),

    async registration() {
      let account = await this.GET_ACCOUNT_BY_EMAIL_FROM_API(this.form.email);
      if (account.data.length) {
        this.errorMessage = true;
      } else {
        this.POST_ACCOUNT_API(this.form);
        this.messageSend = true;
        this.$router.push('/login')
      }
    }
  },
  components: {},
};
</script>