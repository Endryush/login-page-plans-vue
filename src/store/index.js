import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: null
  },
  getters: {
    getUserid: (state) => state.userId
  },
  mutations: {
    SET_USER_ID(state, id) {
      state.userId = id;
    },
  },
  actions: {
    setUserId({ commit }, id) {
      commit('SET_USER_ID', id)
    }
  },
  modules: {
  }
})
