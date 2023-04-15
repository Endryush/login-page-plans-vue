<template>
  <div class="box-login display-flex-column mt-16">
    <login-box />
    <p class="box-login__account">
      Ainda não tem conta? 

      <router-link to="/signup" class="highlight">Cadastre-se</router-link> 
    </p>
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

.box-login__account {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-normal);
  line-height: var(--font-line-height-medium);
  color: var(--color-dark);
  margin-top: 32px;
}
</style>
