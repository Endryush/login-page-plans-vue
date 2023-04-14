import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null
  },
  getters: {
  },
  mutations: {
    SET_USER_TOKEN(state, token) {
      debugger
      state.token = token;
    },
  },
  actions: {
    setUserToken ({ commit }, token) {
      debugger
      commit('SET_USER_TOKEN', token)
    }
  },
  modules: {
  }
})
