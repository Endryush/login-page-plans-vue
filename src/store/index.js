import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    userId: null
  },
  getters: {
    getUserToken: (state) => state.userToken,
    getUserid: (state) => state.userId
  },
  mutations: {
    SET_USER_TOKEN(state, token) {
      state.token = token;
    },

    SET_USER_ID(state, id) {
      state.userId = id;
    },
  },
  actions: {
    setUserToken ({ commit }, token) {
      commit('SET_USER_TOKEN', token)
    },

    setUserId({ commit }, id) {
      commit('SET_USER_ID', id)
    }
  },
  modules: {
  }
})
