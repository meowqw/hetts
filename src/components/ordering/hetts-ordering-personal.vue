<template>
  <div class="checkout">
    <div class="row">
      <div class="col-md-8">
        <div class="mt-5">
          <ul v-if="!isLoggedIn" class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="new-tab" data-bs-toggle="tab" data-bs-target="#new" type="button"
                      role="tab" aria-controls="home" aria-selected="true">
                Я новый покупатель
              </button>
            </li>
            <li class="nav-item" role="presentation" v-if="TOKEN === ''">
              <button class="nav-link" ref="shipping_item" id="old-tab" data-bs-toggle="tab" data-bs-target="#old"
                      type="button" role="tab" aria-controls="shipping" aria-selected="false">
                У меня есть аккаунт
              </button>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="new" role="tabpanel" aria-labelledby="new-tab">
              <div class="col-md-12 checkout__form">
                <h3>Персональная информация</h3>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <div class="form-check">
                        <input v-model="form.legal_status" class="form-check-input" type="radio" value="1" id="type0">
                        <label class="form-check-label" for="type0">
                          Физ. лицо
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <div class="form-check">
                        <input v-model="form.legal_status" class="form-check-input" type="radio" value="2" id="type1">
                        <label class="form-check-label" for="type1">
                          Юр. лицо
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <template v-if="form.legal_status === '2'">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input
                            v-model="form.legal_data.company_name"
                            type="text"
                            class="form-control"
                            :class="{'is-invalid': errors.indexOf('company_name') !== -1}"
                            placeholder="Название организации"
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input
                            v-model="form.legal_data.company_address"
                            type="text"
                            class="form-control"
                            :class="{'is-invalid': errors.indexOf('company_address') !== -1}"
                            placeholder="Юр. адрес"
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input
                            v-model="form.legal_data.ogrn"
                            type="text"
                            class="form-control"
                            :class="{'is-invalid': errors.indexOf('ogrn') !== -1}"
                            placeholder="ОГРН/ОГРНИП"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input
                            v-model="form.legal_data.inn"
                            type="text"
                            class="form-control"
                            :class="{'is-invalid': errors.indexOf('inn') !== -1}"
                            placeholder="ИНН"
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input
                            v-model="form.legal_data.kpp"
                            type="text"
                            class="form-control"
                            placeholder="КПП"
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input v-model="form.legal_data.payment_account" type="text" class="form-control"
                               placeholder="Расчетный счет">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input v-model="form.legal_data.correspondent_account" required type="text" class="form-control"
                               placeholder="Корреспондентский счет">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input v-model="form.legal_data.bic" required type="text" class="form-control"
                               placeholder="БИК">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input v-model="form.legal_data.bank" required type="text" class="form-control"
                               placeholder="Банк">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group mt-5">
                        <input v-model="form.legal_data.ceo" required type="text" class="form-control"
                               placeholder="Генеральный директор">
                      </div>
                    </div>
                  </div>
                </template>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input
                          v-model="form.personalData.surname"
                          type="text"
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('last_name') !== -1}"
                          placeholder="Фамилия"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input
                          v-model="form.personalData.name"
                          type="text"
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('first_name') !== -1}"
                          placeholder="Имя"
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input
                          v-model="form.personalData.middle_name"
                          type="text"
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('middle_name') !== -1}"
                          placeholder="Отчество"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mt-5">
                      <input
                          v-model="form.personalData.phone"
                          type="text"
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('contact_phone') !== -1}"
                          placeholder="Телефон"
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mt-5">
                      <input
                          v-model="form.personalData.email"
                          type="text"
                          disabled
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('contact_email') !== -1}"
                          placeholder="E-mail"
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input
                          v-model="form.personalData.city"
                          type="text"
                          class="form-control"
                          placeholder="Город"
                          :class="{'is-invalid': errors.indexOf('city') !== -1}"

                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <select
                          v-model="form.personalData.region"
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('area') !== -1}"
                      >
                        <option selected>Регион</option>
                        <option v-for="region in regions" :key="region">
                          {{ region }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <select v-model="form.personalData.country" class="form-control">
                        <option value="2">Россия</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mt-5">
                      <input
                          v-model="form.personalData.delivery_company"
                          type="text"
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('transport_company') !== -1}"
                          placeholder="Желаемая транспортная компания (для регионов)"
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mt-5">
                      <select
                          v-model="form.personalData.type_shop"
                          class="form-control"
                          :class="{'is-invalid': errors.indexOf('type_shop') !== -1}"
                      >
                        <option selected>Тип места продажи товара</option>
                        <option>Зоомагазин (Торговая точка)</option>
                        <option>Интернет магазин</option>
                        <option>Зоосалон</option>
                        <option>Питомник</option>
                        <option>Сеть магазинов</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade show" id="old" role="tabpanel" aria-labelledby="old-tab">
              <div class="checkout__form" v-if="TOKEN === ''">
                <h3>Вход в аккаунт</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mt-5">
                      <input
                          type="text"
                          v-model="account.email"
                          class="form-control"
                          placeholder="E-mail"
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mt-5">
                      <input
                          type="password"
                          v-model="account.password"
                          class="form-control"
                          placeholder="Пароль"
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <a type="button" @click="login" class="button">
                    Войти в аккаунт
                  </a>
                </div>
              </div>
              <div class="checkout__form" v-else>
                  Вы аторизованы
              </div>
            </div>
          </div>
        </div>
        <a style="cursor: pointer" @click="next()" class="button">Далее</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "hetts-ordering-personal",
  data() {
    return {
      isLoggedIn: false,
      regions: ["Московская область"],
      form: {
        legal_status: 1,
        legal_data: {
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
        personalData: {
          surname: '',
          name: '',
          middle_name: '',
          phone: '',
          region: '',
          email: '',
          city: '',
          country: '',
          delivery_company: '',
          type_shop: ''
        }
      },
      account: {
        email: '',
        password: ''
      },
      errors: [],
    }
  },
  computed: {
    ...mapGetters(['ACCOUNT', 'TOKEN']),


  },
  methods: {
    ...mapActions(['POST_ACCOUNT_LOGIN_API', 'POST_LEGAL_API', "POST_PERSONAL_API", "UPDATE_PERSONAL_API", "UPDATE_LEGAL_API"]),
    next() {

      this.form.personalData['token'] = this.TOKEN;
      this.form.legal_data['token'] = this.TOKEN;

      this.form['id'] = this.ACCOUNT.id;
      if (!this.ACCOUNT['personal']) {

        this.POST_PERSONAL_API(this.form.personalData)
      } else {
        this.UPDATE_PERSONAL_API(this.form.personalData)
      }

      if (!this.ACCOUNT['legal']) {
        this.POST_LEGAL_API(this.form.legal_data)
      } else {
        this.UPDATE_LEGAL_API(this.form.legal_data)

      }
      // this.UPDATE_ACCOUNT_API(this.form);

      this.$router.push('/checkout/delivery')

    },
    async login() {
      await this.POST_ACCOUNT_LOGIN_API(this.account);
    }
  },
  mounted() {
    if (this.TOKEN === '') {
      this.$router.push('/');
    }

    if ('id' in this.ACCOUNT) {
      this.form.personalData.email = this.ACCOUNT.email;
      this.form.personalData.user_id = this.ACCOUNT.id;
      this.form.legal_data.user_id = this.ACCOUNT.id;

      if (this.ACCOUNT['personal']) {
        this.form.personalData = this.ACCOUNT['personal'][0];
      }

      if (this.ACCOUNT['legal']) {
        this.form.legal_data = this.ACCOUNT['legal'][0];
      }
    }
  }
}
</script>

<style scoped>

</style>