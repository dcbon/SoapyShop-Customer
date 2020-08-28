<template>
  <div>
    <Navbar/>
    <h1>Order History</h1>
    {{ history }}
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'History',
  components: {
    Navbar
  },
  computed: {
    history () {
      this.$store.state.history
    }
  },
  created () {
    this.$store.dispatch('getHistory')
  }
}
</script>

<style>

</style>