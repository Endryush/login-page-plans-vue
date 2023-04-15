<template>
  <div class="display-flex-column">
    <img 
      src="@/assets/img/logo/locaweb.svg" 
      class="header-image" 
      alt="logo-locaweb"
    />

    <main-header-text v-if="routeCondition" />
  </div>
</template>
<script>
import MainHeaderText from '../MainHeaderText/MainHeaderText.vue';
import { ROUTES_NAME } from '@/enum/routeNames.js'
export default {
  name: 'MainHeader',

  components: { MainHeaderText },

  computed: {
    routeCondition () {
      return this.$route.name !== ROUTES_NAME.LOGIN
    }
  }
}
</script>
<style scoped>
.header-image {
  height: 67px;
}
</style>