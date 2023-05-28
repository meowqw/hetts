<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="order">
          <div>
            <div class="section__title">
              <h2>Мои заказы</h2>
            </div>

            <div class="row" v-if="empty">
              <div class="col">
                <form>
                  <div>
                    <table class="order__table">
                      <thead class="view--desktop">
                      <tr>
                        <th>Номер</th>
                        <th>Продукты</th>
                        <th>Сумма</th>
                        <th>Статус</th>
                        <th class="td-created_at">Дата создания</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="order in orders" :key="order.id">
                        <td class="td-number">
                          <a>
<!--                          <a :href="`${$router.resolve({ path: '/account/orders' })-->
<!--                                    .href-->
<!--                                }/1`"-->
<!--                          >-->
                             {{ "#" + order.id }}
                          </a>
                        </td>
                        <td>
                          <div  v-for="product in order.products" :key="product.id">

                            <!-- <img /> -->
                            <img style="width: 30px; height: 30çpx" src="@/assets/images/product-full-image.jpg" alt="img"/>
                          </div>
                        </td>
                        <td class="td-price">
                          <span class="view--mobile">total:</span>
                          {{ getCartTotalCost(order.products) }}
                        </td>
                        <td class="td-status">
                          <span class="view--mobile">order_status:</span>
<!--                          {{ order.status }}-->Создан
                        </td>
                        <td class="td-created_at">
                              <span class="view--mobile"
                              >date_of_creation:</span
                              >
                          {{ order.created_at.split('T')[0] }}
                          <!-- {{ order.created_at_format }} -->
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="mt-10">
                  </div>
                </form>
              </div>
            </div>


            <div v-else>
              <p>У вас нет заказов</p>
            </div>


            <div>
              <a @click="perfomLogout" href="javascript:void(0)">Выйти</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="account">
          <div class="row">
            <div class="col">
              <div class="col page-title">
                <h2>Персональные данные</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 pb-5">
              <div class="personal-data">
                <div class="form-group mt-4">
                  <input
                      type="text"
                      name="contact_name"
                      placeholder="Имя и Фамилия"
                      class="form-control"
                      readonly
                      :value="ACCOUNT.name"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                      type="text"
                      name="email"
                      placeholder="E-mail"
                      class="form-control"
                      readonly
                      :value="ACCOUNT.email"

                  />
                </div>
                <div class="form-group mt-3">
                  <input
                      type="text"
                      name="contact_phone"
                      id="contact_phone"
                      placeholder="Телефон"
                      class="form-control phone-masked"
                      readonly
                  />
                </div>
                <div class="mt-4">
                  <a
                      class="button"
                      href="#" @click.prevent="$router.push('/account-edit')"
                  >Изменить</a
                  >
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "hetts-account-main",
  data() {
    return {
      empty: false,
      orders: []
    }
  },
  methods: {
    ...mapActions(['GET_ACCOUNT']),
    getCartTotalCost(products) {
      let total = 0
      for (let product of products) {
        {
            total += (Number(product['price']) * Number(product['quantity']))
        }
      }
      return total
    },
  },
  computed: {
    ...mapGetters(['ACCOUNT', 'TOKEN']),
  },
  components: {},
  mounted() {
    this.GET_ACCOUNT(this.TOKEN).then(() => {
      this.empty = true;
      console.log(this.ORDER)
      this.orders = this.ACCOUNT.orders;
    })
  }
};
</script>