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
          <img src="https://i.etsystatic.com/20723774/r/il/ac4bc3/1998624455/il_1588xN.1998624455_e7ek.jpg" class="d-block w-100" alt="...">
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
      <h1 class="p-3 text-center my-3">Shop Our Favorites</h1>
      <div class="text-center"></div>
      <div class="col prv-1 rounded mx-auto d-block p-3 m-3 op-6" @click.prevent="filter('Artisan Made')">
        <div class="display-6 text-center py-5 text-light font-weight-bold">Artisan Made</div>
      </div>
      <div class="col prv-2 rounded mx-auto d-block p-3 m-3 op-6" @click.prevent="filter('Gift Set')">
        <div class="display-6 text-center py-5 text-dark font-weight-bold">Gift Set</div>
      </div>
      <div class="col prv-3 rounded mx-auto d-block p-3 m-3 op-6" @click.prevent="filter('Organic Soap Bar')">
        <div class="display-6 text-center py-5 text-light font-weight-bold">Organic</div>
      </div>
    </div>

    <!-- content -->
    <div class="row">
      <h1 class="p-3 text-center my-3">{{categoryName || 'Our Products'}}</h1>
      <div class="col p-2" v-for="product in filtered" :key="product.id">
        <div class="card border-0 p-3" style="width: 18rem;">
          <img :src="product.image_url" class="card-img-top" alt="...">
          <!-- <p class="text-center small h5 link-mve" >{{product.name}}</p> -->
          <!-- <p class="text-center small">Rp {{ new Intl.NumberFormat('de-DE').format(product.price) }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  data () {
    return {
      categoryName: '',
      carousel: [
        "https://i.etsystatic.com/20723774/r/il/2eb1c8/1998588247/il_1588xN.1998588247_ro04.jpg",
        "https://i.etsystatic.com/20723774/r/il/3f18c2/1951245734/il_1588xN.1951245734_7y40.jpg",
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
    filtered () {
      if (this.categoryName === '') {
        return this.$store.state.products
      } else {
        return this.$store.state.products.filter(el => el.Category.name === this.categoryName)
      }
    }
  },
  methods: {
    filter (name) {
      if (name === 'all') this.categoryName = ''
      else this.categoryName = name
    }
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
.prv-2 {
  background-image: url(https://i.etsystatic.com/13758365/r/il/699e48/1925346781/il_794xN.1925346781_jey4.jpg);
  background-position: center;
  height: 200px;
  background-size: cover;
}
.prv-3 {
  background-image: url(https://i.etsystatic.com/10219658/r/il/5d4c2b/2462784558/il_794xN.2462784558_7grg.jpg);
  background-position: center;
  height: 200px;
  background-size: cover;
}

.op-6:hover {
  opacity: 0.8;
}
</style>
