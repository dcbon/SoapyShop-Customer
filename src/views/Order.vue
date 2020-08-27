<template>
  <div>
    <Navbar/>
    <div class="row justify-content-center ">
      <div class="col-8">
        <h1 class="p-3 text-center my-3">Order Summary</h1>
        <div class="overflow-auto">
          <table class="table">
            <thead class="table-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td>{{ order.Product.name }}</td>
                <td>
                  <div class="input-group mb-2">
                    <button class="btn btn-outline-dark" type="button" id="button-addon1"><span class="fas fa-minus" @click.prevent="decrease"></span></button>
                    <input disabled :value="amount" type="number" class="form-control text-center" :placeholder="order.quantity" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <button class="btn btn-outline-dark" type="button" id="button-addon1"><span class="fas fa-plus" @click.prevent="increase"></span></button>
                  </div>
                </td>
                <td><div class="btn btn-btm" href="" @click.prevent="deleteItem(order.ProductId)"><span class="fas fa-trash"></span></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Order',
  components: {
    Navbar
  },
  computed: {
    orders () {
      return this.$store.state.orders
    }
  },
  methods: {
    deleteItem (id) {

    }
  },
  created () {
    this.$store.dispatch('getOrder')
  }
}
</script>

<style>

</style>