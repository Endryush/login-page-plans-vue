<template>
  <div 
    class="main-container"
    :class="{ 'main-container__home' : this.isMobileAndHome() }"
  >
    <main-header />
    <router-view/>
  </div> 
</template>
<script>
  import MainHeader from '@/components/MainHeader/MainHeader.vue';
  import isUserMobile from '@/mixins/is-user-mobile.js';
  import { ROUTES_NAME } from '@/enum/routeNames.js'

  export default {
    name: 'DefaultPage',

    mixins: [isUserMobile],

    components: { MainHeader },

    methods: {
      /**
       * Checks if the user is on a mobile device and currently on the home page
       * 
       * @returns {Boolean} - Returns true if the user is on a mobile device and currently on the home page
       */
      isMobileAndHome () {
        return this.isMobileUser() &&
        this.$route.name === ROUTES_NAME.HOME
      }
    }
  }
</script>
<style src="@/assets/css/base/base.css"></style>