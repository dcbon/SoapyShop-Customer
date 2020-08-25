import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: []
  },
  mutations: {
    setCategories (state, data) {
      state.categories = data.categories
      // console.log(state.categories, '======state');
    },
    setProducts (state, data) {
      state.products = data.products
      // console.log(state.products, '===state');
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
          localStorage.setItem('access_token', data.access_token)
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
        url: baseURL + '/categories',
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
        url: baseURL + '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data, '===get product');
          context.commit('setProducts', data)
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
    }
  },
  modules: {
  }
})
