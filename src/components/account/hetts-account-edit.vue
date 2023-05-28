<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button :class="tab === 1 ? 'nav-link active' : 'nav-link'" id="home-tab" data-bs-toggle="tab" data-bs-target="#contacts" type="button"
                    role="tab" aria-controls="home" aria-selected="true"
                    @click="switchTab(1)">
              Контактная информация
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button :class="tab === 2 ? 'nav-link active' : 'nav-link'" ref="shipping_item" id="shipping-tab" data-bs-toggle="tab"
                    data-bs-target="#shipping" type="button" role="tab" aria-controls="shipping" aria-selected="false"
                    @click="switchTab(2)">
              Доставка
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button :class="tab === 3 ? 'nav-link active' : 'nav-link'" ref="payment_item" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payments"
                    type="button" role="tab" aria-controls="contact" aria-selected="false"
                    @click="switchTab(3)">
              Оплата
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div :class="tab === 1 ? 'tab-pane fade show active' : 'tab-pane fade'" id="contacts" role="tabpanel" aria-labelledby="home-tab" >
            <div class="register-form">
              <div class="row mt-5">
                <div class="col-md-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" value="1" id="type0" v-model="isLegal">
                    <label class="form-check-label" for="type0">
                      Физ. лицо
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" value="2" id="type1" v-model="isLegal">
                    <label class="form-check-label" for="type1">
                      Юр. лицо
                    </label>
                  </div>
                </div>
              </div>

              <!-- <template v-if="form.legal_status == 2"> -->

              <!-- </template> -->

              <div class="row">
                <div class="col-md-4">
                  <div class="form-group mt-5">
                    <input

                        type="text"
                        class="form-control"
                        v-model="form.personalData.surname"
                        placeholder="Фамилия"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group mt-5">
                    <input

                        type="text"
                        class="form-control"
                        v-model="form.personalData.name"
                        placeholder="Имя"
                    >
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group mt-5">
                    <input

                        type="text"
                        class="form-control"
                        v-model="form.personalData.middle_name"
                        placeholder="Отчество"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mt-5">
                    <input

                        type="text"
                        class="form-control"
                        v-model="form.personalData.phone"
                        placeholder="Телефон"
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mt-5">
                    <input

                        type="text"
                        class="form-control"
                        v-model="form.personalData.email"
                        placeholder="E-mail"
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group mt-5">
                    <input

                        type="text"
                        class="form-control"
                        v-model="form.personalData.city"
                        placeholder="Город"
                    >
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group mt-5">
                    <select

                        class="form-control"
                        v-model="form.personalData.region"
                    >
                      <option selected>Регион</option>
                      <option>
                        region
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group mt-5">
                    <select class="form-control"
                            v-model="form.personalData.country">
                      <option value="2">Россия</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mt-5">
                    <input

                        type="text"
                        class="form-control"
                        v-model="form.personalData.delivery_company"
                        placeholder="Желаемая транспортная компания (для регионов)"
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mt-5">
                    <select
                        v-model="form.personalData.type_shop"
                        class="form-control"

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
              <template v-if="isLegal === '2'">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input

                          type="text"
                          class="form-control"
                          v-model="form.legal_data.company_name"
                          placeholder="Название организации"
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input

                          type="text"
                          class="form-control"
                          v-model="form.legal_data.company_address"
                          placeholder="Юр. адрес"
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input

                          type="text"
                          class="form-control"
                          v-model="form.legal_data.ogrn"
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
                      <input type="text"
                             v-model="form.legal_data.payment_account"
                             class="form-control" placeholder="Расчетный счет">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input required type="text"
                             v-model="form.legal_data.correspondent_account"
                             class="form-control" placeholder="Корреспондентский счет">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input required type="text"
                             v-model="form.legal_data.bic"
                             class="form-control" placeholder="БИК">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input required type="text"
                             v-model="form.legal_data.bank"
                             class="form-control" placeholder="Банк">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group mt-5">
                      <input required type="text"
                             v-model="form.legal_data.ceo"
                             class="form-control" placeholder="Генеральный директор">
                    </div>
                  </div>
                </div>
              </template>


              <div class="mt-5">
                <button class="button"  @click="switchTab(2)" type="button">Далее</button>
              </div>
            </div>
          </div>
          <div :class="tab === 2 ? 'tab-pane fade show active' : 'tab-pane fade'" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
            <div class="register-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mt-5">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="flexRadioDefault`">
                      <label class="form-check-label" for="flexRadioDefault">
                        Доставка 1
                        <div class="text-muted">Доставка 1</div>
                      </label>
                    </div>
                  </div>
                  <div class="mt-5">
                    <button class="button"  @click="switchTab(3)" type="button">Далее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="tab === 3 ? 'tab-pane fade show active' : 'tab-pane fade'" id="payments" role="tabpanel" aria-labelledby="payment-tab">
            <div class="register-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mt-5">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="flexDefault">
                      <label class="form-check-label" for="flexDefault">
                        Оплата 1
                        <div class="text-muted">Оплата 1</div>
                      </label>
                    </div>
                  </div>
                  <div class="mt-5">
                    <button

                        class="button"
                        @click="save()"
                        type="button">Сохранить данные
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//   import { mapActions } from "vuex";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "hetts-account-edit",
  data() {
    return {
      tab: 1,
      isLegal: 1,
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
    }
  },
  components: {},
  computed: {
    ...mapGetters(['ACCOUNT', 'TOKEN']),
  },
  methods: {
    ...mapActions(['POST_ACCOUNT_LOGIN_API', 'POST_LEGAL_API', "POST_PERSONAL_API", "UPDATE_PERSONAL_API", "UPDATE_LEGAL_API"]),
    save() {

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

    },
    switchTab(num) {
      this.tab = num;
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
};
</script>