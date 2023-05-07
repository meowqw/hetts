<template>
  <div class="checkout__form">
    <h3>Доставка</h3>
    <div class="form-group">
      <div v-for="delivery_method in delivery_methods" v-bind:key="delivery_method.id" class="form-group mt-3">
        <div class="form-check">
          <input v-model="delivery_method_id" :value="delivery_method.id" class="form-check-input"
                 type="radio" :id="`flexRadioDefault${delivery_method.id}`">
          <label class="form-check-label" :for="`flexRadioDefault${delivery_method.id}`">
            {{ delivery_method.title }}
            <div class="text-muted">{{ delivery_method.description }}</div>
          </label>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "hetts-ordering-delivery",
  data() {
    return {
      delivery_methods: [
        {id: 1, title: 'САМОВЫВОЗ СКЛАД МОСКВА', description: 'Самовывоз со склада в Москве.'},
        {id: 2, title: 'ТРАНСПОРТНАЯ КОМПАНИЯ', description: 'Для регионов России и других стран'},
      ],
      delivery_method_id: ''
    }

  },

}
</script>

<style scoped>

</style>