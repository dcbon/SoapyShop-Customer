<template>
  <div class="">
    <nav class="navbar navbar-light bg-light justify-content-center">
      <div class="">
        <ul class="nav justify-content-between lead h5">
          <li class="nav-item px-3">
            <img src="../assets/soapyshop.svg" width="50" height="50" alt="" loading="lazy">
          </li>
          <li class="nav-item px-3">
            <a class="nav-link link-mve" href="#" @click.prevent="changePage('Login')"><span class="far fa-user-circle mr-2"></span>{{user}}</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link link-mve active" href="#" @click.prevent="changePage('Home')">Home</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link link-mve" href="" @click.prevent="changePage('Shop')">Shop</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link link-mve disabled" href="#">About</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link link-mve disabled" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-mve" href="#" @click.prevent="changePage('Order')"><span class="far fa-shopping-bag"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-mve" href="#" @click.prevent="logout"><span class="far fa-sign-out-alt"></span></a>
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
    }
  },
  computed: {
    user () {
      let user = localStorage.name
      if (!localStorage.access_token) {
        return 'Sign In'
      }
      else return user 
    }
  },
  methods: {
    changePage (name) {
      this.$router.push({ name: `${name}` })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
