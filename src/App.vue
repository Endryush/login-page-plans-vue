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
      isMobileAndHome () {
        return this.isMobileUser() &&
        this.$route.name === ROUTES_NAME.HOME
      }
    }
  }
</script>
<style src="@/assets/css/base/base.css"></style>