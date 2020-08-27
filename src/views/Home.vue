<template>
  <div class="">
    <!-- <h1>ini home</h1> -->
    <!-- navbar -->
    <Navbar/>

    <!-- carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.etsystatic.com/8661303/r/il/ab00d4/2315783357/il_794xN.2315783357_oj2e.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" v-for="(item, i) in carousel" :key="i">
          <img :src="item" class="d-block w-100" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- preview -->
    <div class="row mt-3">
      <div class="text-center"></div>
      <div class="col prv-1 rounded mx-auto d-block p-3 m-3 op-6">
        <div class="display-6 text-center py-5 text-light font-weight-bold">Artisan Soap</div>
      </div>
      <div class="col prv-1 rounded mx-auto d-block p-3 m-3 op-6">
        <div class="display-6 text-center py-5 text-light font-weight-bold">Artisan Soap</div>
      </div>
      <div class="col prv-1 rounded mx-auto d-block p-3 m-3 op-6">
        <div class="display-6 text-center py-5 text-light font-weight-bold">Artisan Soap</div>
      </div>
    </div>

    <!-- content -->
    <!-- <div class="row justify-content-center">
      <div class="col-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image_url" alt="">
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  data () {
    return {
      carousel: [
        "https://i.etsystatic.com/8661303/r/il/802bef/2267074412/il_1588xN.2267074412_jkx6.jpg",
        "https://i.etsystatic.com/10219658/r/il/01ae94/2510450125/il_1588xN.2510450125_77ay.jpg",
      ]
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
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
.prv-1 {
  background-image: url(https://i.etsystatic.com/16299588/r/il/955353/2254125445/il_1588xN.2254125445_3c92.jpg);
  background-position: center;
  height: 200px;
  background-size: cover;
}

.op-6:hover {
  opacity: 0.8;
}
</style>
