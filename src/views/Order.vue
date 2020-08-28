<template>
  <div>
    <Navbar/>
    <div class="row justify-content-center ">
      <div class="col-10">
        <h1 class="p-3 text-center my-3">Order Summary</h1>
        <div class="overflow-auto">
          <table class="table justify-content-center align-items-middle">
            <thead class="table-light">
              <tr>
                <th scope="col">Action</th>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td width="10%">
                  <a class="btn text-dark" href="" @click.prevent="deleteItem(order.id, order.ProductId)"><span class="fas fa-trash"></span></a>
                </td>
                <td width="50%">{{ order.Product.name }}</td>
                <td width="20%">
                  <div class="input-group mb-2">
                    <button class="btn btn-dark" type="button" id="button-addon1"><span class="fas fa-minus" @click.prevent="decrease(order.quantity, order.ProductId, order.id)"></span></button>
                    <input disabled :value="order.quantity" type="number" class="form-control text-center" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <button class="btn btn-dark" type="button" id="button-addon1"><span class="fas fa-plus" @click.prevent="increase(order.quantity, order.Product.stock, order.ProductId, order.id)"></span></button>
                  </div>
                </td>
                <td width="20%"> Rp {{ Intl.NumberFormat('id-ID').format(order.subtotal) }}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>Rp {{ total }}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <a href="" class="link-mve" @click.prevent="history">Order History</a>
            <div class="btn btn-dark float-right co" @click.prevent="checkout">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Order',
  data () {
    return {
      cart: 0,
      amount: 0,
      stock: 0
    }
  },
  components: {
    Navbar
  },
  computed: {
    orders () {
      console.log(this.$store.state.orders, '===state orders');
      return this.$store.state.orders
    },
    total () {
      console.log(this.$store.state.orders, '===state total');
      return this.$store.state.total.toLocaleString('id-ID')
    }
  },
  methods: {
    decrease (qty, pid, id) {
      this.cart = id
      if (qty > 1) {
        qty = qty-1
      } else qty = 1
      let payload = {
        id: id,
        ProductId: pid,
        quantity: qty
      }
      this.$store.dispatch('updateOrder', payload)
      this.$store.dispatch('getOrder')
    },
    increase (qty, stock, pid, id) {
      this.cart = id
      console.log(qty, stock, pid, id, '===qty,stock,pid,id');
      if (qty >= stock) qty = stock
      else qty = qty+1
      let payload = {
        id: id,
        ProductId: pid,
        quantity: qty
      }
      this.$store.dispatch('updateOrder', payload)
      this.$store.dispatch('getOrder')
    },
    deleteItem (id, pid) {
      this.cart = id
      let payload = {
        id: id,
        ProductId: pid
      }
      this.$store.dispatch('deleteItem', payload)
    },
    history () {
      this.$router.push({ name: 'History' })
    },
    checkout (id) {
      this.$store.dispatch('checkout', this.cart)
    }
  },
  created () {
    this.$store.dispatch('getOrder')
    this.$store.dispatch('getTotal')
  }
}
</script>

<style scoped>
.co {
  margin-right: 80px;
}
</style>