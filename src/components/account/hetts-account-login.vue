<template>
  <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="login-form">
                    <h2>Вход</h2>
                    <form >
                        <div v-if="errorMessage" class="alert alert-danger" style="margin-bottom: 15px">
                            <div>
                                Введенный данный не верны
                            </div>
                        </div>

                        <div class="form-group">
                            <p>Введите E-mail и пароль в поля ниже:</p>
                            <input required v-model=form.email type="text" class="form-control" placeholder="Введите E-mail" />
                            <div class="mt-4">
                                <input v-model="form.password" required type="password" class="form-control" placeholder="Введите пароль" />
                            </div>
                        </div>
                        <div class="login-form__buttons">
                            <button @click="login" type="button" class="button">Далее</button>
                            <a @click="$router.push('/register')" class="button-outline">Регистрация</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
      
  <script>
  import {mapActions, mapGetters} from "vuex";
export default {
  name: "hetts-account-login",
  data() {
    return {
      errorMessage: false,
      form: {
        email: '',
        password: ''
      }

    }
  },
  methods: {
    ...mapActions(['GET_ACCOUNT_BY_EMAIL_FROM_API', 'SET_ACCOUNT']),
    async login() {
      let account = await this.GET_ACCOUNT_BY_EMAIL_FROM_API(this.form.email);
      if (account.data.length) {
        if (account.data[0].password === this.form.password) {
          this.SET_ACCOUNT(account.data[0])
          this.$router.push('/account');
        } else {
          this.errorMessage = true;
        }
      }
    }
  },
  computed: {
    ...mapGetters(['ACCOUNT'])
  },
  components: {},
};
</script>