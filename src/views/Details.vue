<template>
  <section>
    <Navbar/>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a class="link-mve" href="#" @click.prevent="changePage('Home')">Home</a></li>
        <li class="breadcrumb-item"><a class="link-mve" href="#" @click.prevent="changePage('Shop')">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">Detail Product</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col">
            <img :src="detail.img" class="rounded float-left" alt="...">  
          </div>
          <div class="col"><p class="text-justify">{{detail.desc || 'No Description'}}</p></div>
        </div>
      </div>
      <div class="col-6">
        <h4>{{detail.name}}</h4>
        <div class="lead mb-2">Rp {{ new Intl.NumberFormat('de-DE').format(detail.price)}}</div>
        <div class="small mb-4">{{detail.stock}} available stock</div>
        <star-rating :star-size="20" :rating="detail.rate || 0"></star-rating>
        <div class="btm">
          <div class="input-group mb-2">
            <button class="btn btn-dark" type="button" id="button-addon1"><span class="fas fa-minus" @click.prevent="decrease"></span></button>
            <input disabled :value="amount || 0" type="number" class="form-control text-center" placeholder="1" aria-label="Example text with button addon" aria-describedby="button-addon1">
            <button class="btn btn-dark" type="button" id="button-addon1"><span class="fas fa-plus" @click.prevent="increase"></span></button>
          </div>
          <div class="btn btn-dark btn-block mb-2" @click.prevent="addToCart">Add to cart</div>
          <a href="" class="link-mve" @click.prevent="toDetails(id)">View More Details</a> 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import StarRating from 'vue-star-rating'
export default {
  name: 'Details',
  components: {
    Navbar, StarRating
  },
  computed: {
    detail () {
      console.log(this.$store.state.detail, '===detail');
      return this.$store.state.detail
    }
  },
  methods: {
    changePage (name) {
      this.$router.push({ name: `${name}` })
    }
  }
}
</script>

<style>

.btm {
  position: absolute;
  bottom: 0;
}
</style>