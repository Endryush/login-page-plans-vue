<template>
  <div class="box-login display-flex-column mt-16">
    <login-box />
    <h3 class="mt-32">
      Ainda não tem conta? 

      <router-link to="/signup" class="highlight">Cadastre-se</router-link> 
    </h3>
  </div>
</template>

<script>
import LoginBox from '@/components/Login/LoginBox.vue';

export default {
  name: 'LoginView',

  components: {
    LoginBox
  }
}
</script>
<style scoped>
.box-login {
  width: 40vw;
}

@media only screen and (max-width: 600px) {
  .box-login {
    width: auto;
    padding: 0 16px;
  }
}

</style>
