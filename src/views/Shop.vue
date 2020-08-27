<template>
  <section>
    <Navbar/>
    <h1 class="p-3 text-center my-3">ALL PRODUCTS</h1>
    <div class="row">
      <div class="col p-2" v-for="product in products" :key="product.id">
        <div class="card border-0" style="width: 18rem;">
          <img :src="product.image_url" class="card-img-top" alt="...">
          <div href="" class="q-view btn " data-toggle="modal" data-target="#exampleModal" @click.prevent="qview(product.id, product.name, product.price, product.stock, product.image_url)">Quick View</div>
          <h5 class="text-center small">{{product.name}}</h5>
          <p class="text-center small">Rp {{ new Intl.NumberFormat('de-DE').format(product.price) }}</p>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-body">
            <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="row">
              <div class="col-6">
                <img :src="img" class="rounded float-left" alt="...">  
              </div>
              <div class="col-6">
                <h4>{{name}}</h4>
                <div class="lead mb-2">Rp {{ new Intl.NumberFormat('de-DE').format(price)}}</div>
                <div class="small mb-4">{{stock}} available stock</div>
                <div class="btm">
                  <div class="input-group mb-2">
                    <button class="btn btn-outline-dark" type="button" id="button-addon1"><span class="fas fa-minus" @click.prevent="decrease"></span></button>
                    <input disabled :value="amount" type="number" class="form-control text-center" placeholder="1" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <button class="btn btn-outline-dark" type="button" id="button-addon1"><span class="fas fa-plus" @click.prevent="increase"></span></button>
                  </div>
                  <div class="btn btn-dark btn-block mb-2" @click.prevent="addToCart">Add to cart</div>
                  <a href="" class="small" @click.prevent="">View More Details</a>
                  <!-- <router-link :to="/products/`${product.id}`"> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Shop',
  data () {
    return {
      id: '',
      name: '',
      price: '',
      stock: '',
      img: '',
      amount: 0
    }
  },
  components: {
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    },
  },
  methods: {
    qview(id, name, price, stock, img) {
      this.id = id
      this.name = name
      this.price = price
      this.stock = stock
      this.img = img
    },
    decrease () {
      if (!amount) this.amount = this.amount-1
      else this.amount = 0
    },
    increase () {
      if (this.amount >= this.stock) this.amount = this.stock
      else this.amount = this.amount+1
    },
    addToCart () {
      let payload = {
        UserId: localStorage.id,
        ProductId: this.id,
        quantity: this.amount,
        status: true
      }
      this.$store.dispatch('addToCart', payload)
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }

}
</script>

<style scoped>
.q-view {
  opacity: 0;
  text-align: center;
  position: relative;
  bottom: 40px;
  padding: 5px;
  width: 100%;
  line-height: 40px;
  height: 40px;
  color: black;
  border-style: none !important;
  border-radius: 0% !important;
}
.q-view:hover {
  visibility: visible;
  background-color: rgba(255, 255, 255, 0.808);
  opacity: 1;
  transition: opacity .2s,background-color .2s;
  z-index: 5;
}

.btm {
  position: absolute;
  bottom: 0;
}
</style>