export default {
  name: 'isUserMobile',

  methods: {
    /**
     * identifies if the user is mobile
     *
     * @returns {boolean}
     */
    isMobileUser () {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
      return isMobile
    }
  }
}