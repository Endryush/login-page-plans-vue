<template>
  <div>
    <h2 class="subtext-header"> 
      Você está muito próximo de mudar a forma de <br>
      <span class="highlight">{{ highlight }}</span> 
    </h2>
  </div>
</template>
<script>
import isUserMobile from '@/mixins/is-user-mobile.js';

export default {
  name: 'MainHeader',

  mixins: [isUserMobile],

  data () {
    return {
      highlight: ''
    }
  },

  mounted () {
    this.highlight = this.isMobileUser() ? 'Vender online' : 'hospedar seu site'
  }
}
</script>
<style scoped>
.subtext-header {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .subtext-header {
    padding: 0 24px;
  }
}
</style>