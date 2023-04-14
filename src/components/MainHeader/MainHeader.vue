<template>
  <div class="main-header">
    <img src="@/assets/img/logo/locaweb.svg" class="main-header--image" alt="logo-locaweb">
    <main-header-text v-if="routeCondition" />
  </div>
</template>
<script>
import MainHeaderText from '../MainHeaderText/MainHeaderText.vue';
import { ROUTES_NAME } from '@/config/routeNames.js'
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
.main-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-header--image {
  height: 67px;
}
</style>