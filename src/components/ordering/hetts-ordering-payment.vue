<template>
  <div class="checkout__form">
    <h3>Способ оплаты</h3>
    <div class="form-group">
      <div v-for="payment_method in payment_methods" :key="payment_method.id" class="form-group mt-3">
        <div class="form-check">
          <input v-model="payment_method_id" :value="payment_method.id" class="form-check-input"
                 type="radio" :id="`flexDefault${payment_method.id}`">
          <label class="form-check-label" :for="`flexDefault${payment_method.id}`">
            {{ payment_method.title }}
            <div class="text-muted">{{ payment_method.description }}</div>
          </label>
        </div>
      </div>
    </div>

    <!--<div class="pay-logos">
        <img src="/shop/themes/you-hetts/images/pay-logos.png" />
    </div>-->

    <!--<div class="form-check mt-5">
        <input class="form-check-input" type="checkbox" value="" id="checkPrivacy" checked disabled>
        <label class="form-check-label text-muted" for="checkPrivacy">
            Нажимая кнопку «Оформить заказ», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных
        </label>
    </div>-->
  </div>

</template>

<script>
export default {
  name: "hetts-ordering-payment",
  data() {
    return {
      payment_methods: [
        {
          id: 1, title: 'ОПЛАТА ПО КВИТАНЦИИ ЧЕРЕЗ СБЕРБАНК И ПРИЛОЖЕНИЕ СБЕРБАНК ОНЛАЙН',
          description: 'Оплата по квитанции для физических лиц (РФ). Отсканируйте QR code в приложении Сбербанк Онлайн или в банкомате Сбербанка.'
        },
        {
          id: 2, title: 'ОПЛАТА ПО СЧЕТУ',
          description: 'Оплата безналичным расчетом для юридических лиц (РФ) СЧЕТ ВЫСЫЛАЕТ МЕНЕДЖЕР ПОСЛЕ ПОДТВЕРЖДЕНИЯ ЗАКАЗА.'
        }
      ],
      payment_method_id: ''
    }
  }
}
</script>

<style scoped>

</style>