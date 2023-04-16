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
    /**
     *  Rule to show header subtext if the user is in the signup page
     *
     * @returns {Boolean}
     */
    routeConditionHeaderSubtext () {
      return this.$route.name === ROUTES_NAME.SIGNUP
    },

    /**
     *  Rule to show header logout button if the user is in the home page
     *
     * @returns {Boolean}
     */
    routeConditionLogout () {
      return this.$route.name === ROUTES_NAME.HOME
    }
  },

  methods: {
    /**
     *  Logout user by redirecting to the home page.
     *
     * @returns {void}
     */
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

@media screen and (max-width: 600px) {
  .header-logout img {
    margin-left: 16px;
    width: 80px;
  } 

  .header-logout div {
    margin-right: 16px;
  } 

  .logout {
    padding: 8px 16px;
  }
}
</style>