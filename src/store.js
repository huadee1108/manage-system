import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: '',
    token: ''
  },
  getters: {
    getUserId: state => state.userId,
    getToken: state => state.token
  },
  mutations: {

  },
  actions: {

  }
})
