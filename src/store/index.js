import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    orders: {},
    total: 0,
    history: {},
    detail: {}
  },
  mutations: {
    setCategories (state, data) {
      state.categories = data.categories
      // console.log(state.categories, '======state');
    },
    setProducts (state, data) {
      state.products = data.products
      // console.log(state.products, '===state');
    },
    setOrders (state, data) {
      state.orders = data.carts
      // console.log(state.orders, '===state');
    },
    setTotal (state, data) {
      let total = 0
      data.carts.forEach(e => {
        total += e.subtotal
      });
      state.total = total
      console.log(state.total, '===state');
    },
    setHistory (state, data) {
      state.history = data.carts
      // console.log(state.orders, '===state');
    },
    setDetail (state, data) {
      state.detail = data
    }
  },
  actions: {
    register (context, payload) {
      axios({
        url: '/users/register',
        method: 'POST',
        data: payload
      })
        .then(data => {
          console.log(data, '===data register');
          let payloadLogin = {
            email: payload.email,
            password: payload.password
          }
          context.dispatch('login', payloadLogin)
        })
        .catch(err => {
          console.log(err, '===err register');
          console.log(err.response.data.msg, '===err register');
        })
    },
    login (context, payload) {
      axios({
        url: '/users/login',
        method: 'POST',
        data: payload
      })
        .then(data => {
          console.log(data, '===data login');
          localStorage.setItem('access_token', data.data.access_token)
          localStorage.setItem('id', data.data.id)
          localStorage.setItem('name', data.data.name)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err, '===err login');
        })
    },
    logout () {
      localStorage.clear()
      router.push({ name: 'Home' })
    },
    getCategories (context) {
      axios({
        url: '/categories',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data, '===get category');
          context.commit('setCategories', data)
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    getProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, '===get product');
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err, '===err get prods');
          // const errs = err.response.data.msg
          // errs.forEach(element => {
          //   Vue.notify({
          //     group: 'foo',
          //     type: 'error',
          //     title: 'Error!',
          //     text: element
          //   })
          // })
        })
    },
    addToCart (context, payload) {
      console.log(payload, '===payload add to cart');
      axios({
        url: `/cart`,
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({data}) => {
          console.log(data, '===add order');
          // context.commit('setOrder', data)
        })
        .catch(err => console.log(err, 'err add order'))
    },
    getOrder (context) {
      let id = localStorage.id
      axios({
        url: `/cart`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => {
          console.log(data, '===get order');
          context.commit('setOrders', data)
          context.commit('setTotal', data)
        })
        .catch(err => console.log(err, 'err read order'))
    },
    getHistory (context) {
      let id = localStorage.id
      axios({
        url: `/cart/history`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => {
          console.log(data, '===get order');
          context.commit('setHistory', data)
        })
        .catch(err => console.log(err, 'err read order'))
    },
    updateOrder (context, payload) {
      axios({
        url: `/cart/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.ProductId,
          quantity: payload.quantity
        }
      })
        .then(data => {
          console.log(data, '===updte order')
          context.dispatch('getOrder')
        })
        .catch(err => console.log(err, '===err update order'))
    },
    deleteItem (context, payload) {
      axios({
        url: `/cart/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload.ProductId
      })
        .then(data => { 
          context.dispatch('getOrder')
          console.log(data)
        })
        .catch(err => console.log(err))
    },
    getHistory (context) {
      axios({
        url: `/cart/history`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => {
          console.log(data, '===get history');
          // context.commit('setOrders', data)
        })
        .catch(err => console.log(err, 'err read history'))
    },
    getDetails (context, payload) {
      context.commit('setDetail', payload)
      router.push(`/products/${payload.id}`)
    },
    checkout (context, id) {
      axios({
        url: '/cart/checkout',
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: id
      })
        .then (data => console.log('checkout success'))
        .catch(err => console.log(err, 'err checkout'))
    }
  },
  modules: {
  }
})
