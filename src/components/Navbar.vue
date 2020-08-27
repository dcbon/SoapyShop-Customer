<template>
  <div class="">
    <!-- Just an image -->
    <div class="justify-content-center">
      <img src="../assets/soapyshop.svg" width="50" height="50" alt="" loading="lazy">
    </div>
    <nav class="navbar navbar-light bg-light justify-content-center">
      <div class="">
        <ul class="nav justify-content-between lead h5">
          <li class="nav-item px-3">
            <a class="nav-link" v-bind:class="{ disabled: logged }" href="#" @click.prevent="changePage('Login')"><span class="far fa-user-circle mr-2"></span>{{name}}</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link active" href="#" @click.prevent="changePage('Home')">Home</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="" @click.prevent="changePage('Shop')">Shop</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link disabled" href="#">About</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link disabled" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="changePage('Order')"><span class="far fa-shopping-bag"></span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      logged: false
    }
  },
  computed: {
    name () {
      this.logged = true
      let name = this.$store.state.user
      if (!name) return 'Log In'
      else return name 
    }
  },
  methods: {
    changePage (name) {
      this.$router.push({ name: `${name}` })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 50px;
}
</style>
