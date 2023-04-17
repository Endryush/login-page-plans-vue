export default {
  name: 'Cookie',

  methods: {
    setCookie (key,value) {
      this.$cookies.set(key, value)
    },

    getCookie (key) {
      return this.$cookies.get(key)
    },

    removeCookie (key) {
      this.$cookies.remove(key)
    }
  }
}