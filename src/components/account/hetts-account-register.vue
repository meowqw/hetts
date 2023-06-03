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
            <div class="form-check">
              <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="legalForm"
                  v-model="form.legal_status"
              />
              <label class="form-check-label" for="legalForm">
                Юр. Лицо
              </label>
            </div>

            <div class="form-group">
              <input
                  required
                  type="text"
                  v-model="form.userForm.name"
                  class="form-control"
                  placeholder="Имя *"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  type="text"
                  v-model="form.userForm.surname"
                  class="form-control"
                  placeholder="Фамилия"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  v-model="form.userForm.email"
                  type="email"
                  class="form-control"
                  placeholder="E-mail *"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  v-model="form.userForm.password"
                  type="password"
                  class="form-control"
                  placeholder="Пароль *"
              />
            </div>
            <div class="form-group">
              <input
                  required
                  v-model="form.userForm.password_confirmation"
                  type="password"
                  class="form-control"
                  placeholder="Повторить пароль *"
              />
            </div>
            <template v-if="form.legal_status">
              <div class="form-group">
                <input
                    v-model="form.legal_data.company_name"
                    type="text"
                    class="form-control"
                    placeholder="Название организации"
                >
              </div>

              <div class="form-group">
                <input
                    v-model="form.legal_data.company_address"
                    type="text"
                    class="form-control"
                    placeholder="Юр. адрес"
                >
              </div>


              <div class="form-group">
                <input
                    v-model="form.legal_data.ogrn"
                    type="text"
                    class="form-control"
                    placeholder="ОГРН/ОГРНИП"
                >
              </div>

              <div class="form-group">
                <input
                    v-model="form.legal_data.inn"
                    type="text"
                    class="form-control"
                    placeholder="ИНН"
                >
              </div>

              <div class="form-group">
                <input
                    v-model="form.legal_data.kpp"
                    type="text"
                    class="form-control"
                    placeholder="КПП"
                >
              </div>


              <div class="form-group">
                <input v-model="form.legal_data.payment_account" type="text" class="form-control"
                       placeholder="Расчетный счет">
              </div>

              <div class="form-group">
                <input v-model="form.legal_data.correspondent_account" required type="text" class="form-control"
                       placeholder="Корреспондентский счет">
              </div>

              <div class="form-group">
                <input v-model="form.legal_data.bic" required type="text" class="form-control"
                       placeholder="БИК">
              </div>

              <div class="form-group">
                <input v-model="form.legal_data.bank" required type="text" class="form-control"
                       placeholder="Банк">
              </div>

              <div class="form-group">
                <input v-model="form.legal_data.ceo" required type="text" class="form-control"
                       placeholder="Генеральный директор">
              </div>
            </template>


            <button class="button" @click="registration" type="button">Зарегистрироваться</button>

            <div v-if="errorMessage">
              <div class="alert alert-danger mt-3">
                <div>Что то пошло не так</div>
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
        userForm: {
          name: '',
          surname: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        personalData: {
          middle_name: '',
          phone: '',
          region: '',
          email: '',
          city: '',
          country: '',
          delivery_company: '',
          type_shop: ''
        },
        legal_status: false,
        legal_data: {
          user_id: null,
          company_name: '',
          company_address: '',
          ogrn: '',
          inn: '',
          kpp: '',
          payment_account: '',
          correspondent_account: '',
          bic: '',
          bank: '',
          ceo: '',
          transport_company: '',
        },
      }
    }
  },
  methods: {
    ...mapActions(['POST_ACCOUNT_REGISTER_API', 'POST_LEGAL_API']),

    async registration() {
      let regData = await this.POST_ACCOUNT_REGISTER_API(this.form.userForm);
      console.log(regData.user.id);

      if (this.form.legal_status && 'status' in regData) {
        this.form.legal_data.user_id = regData.user.id
        await this.POST_LEGAL_API(this.form.legal_data);
      }

      if ('status' in regData) {
        this.$router.push('/login')
      } else {
        this.errorMessage = true;
      }
    }
  },
  components: {},
};
</script>