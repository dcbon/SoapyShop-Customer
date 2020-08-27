<template>
  <div>
    <Navbar/>
    <h1>ini order</h1>
    {{orders}}
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
  created () {
    this.$store.dispatch('getOrder')
  }
}
</script>

<style>

</style>