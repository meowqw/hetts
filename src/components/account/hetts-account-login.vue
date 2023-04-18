<template>
  <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="login-form">
                    <h2>Вход</h2>
                    <form >
                        <div class="alert alert-danger" style="margin-bottom: 15px">
                            <div>
                                errors
                            </div>
                        </div>

                        <div class="form-group">
                            <p>Введите E-mail и пароль в поля ниже:</p>
                            <input required type="text" class="form-control" placeholder="Введите E-mail" />
                            <div class="mt-4">
                                <input required type="password" class="form-control" placeholder="Введите пароль" />
                            </div>
                        </div>
                        <div class="login-form__buttons">
                            <button type="submit" class="button">Далее</button>
                            <a href="/register" class="button-outline">Регистрация</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
      
  <script>
//   import { mapActions } from "vuex";
export default {
  name: "hetts-account-login",
  components: {},
};
</script>