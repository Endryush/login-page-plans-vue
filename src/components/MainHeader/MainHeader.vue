<template>
  <div
    :class="routeConditionLogout ? 'd-flex header-logout' : 'display-flex-column mt-32'"
  >
    <img 
      src="@/assets/img/logo/locaweb.svg" 
      class="header-image" 
      alt="logo-locaweb"
    />

    <div v-if="routeConditionLogout">
      <button 
        class="logout"
        @click="logout"
      >
        <label>Sair</label>
      </button>
    </div>

    <main-header-text v-if="routeConditionHeaderSubtext" />
  </div>
</template>
<script>
import MainHeaderText from '../MainHeaderText/MainHeaderText.vue';
import { ROUTES_NAME } from '@/enum/routeNames.js'
export default {
  name: 'MainHeader',

  components: { MainHeaderText },

  computed: {
    routeConditionHeaderSubtext () {
      return this.$route.name === ROUTES_NAME.SIGNUP
    },

    routeConditionLogout () {
      return this.$route.name === ROUTES_NAME.HOME
    }
  },

  methods: {
    logout () {
      this.$router.push('/');
    }
  }
}
</script>
<style scoped>
.header-image {
  height: 67px;
  width: auto;
}
.header-logout {
  width: 100vw;
  justify-content: space-between;
}

.header-logout img {
  margin-left: 32px;
} 

.header-logout div {
  margin-right: 32px;
} 

.logout {
  background: #FFFFFF;
  border-radius: 5px;
  padding: 16px 32px;
  cursor: pointer;
}
</style>