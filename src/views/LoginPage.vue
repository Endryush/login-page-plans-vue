<template>
  <div class="box-login mt-16">
    <login-box />
    <p class="box-login__account">Ainda não tem conta? <span class="box-login__account--highlight">Cadastre-se</span> </p>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40vw;
}
.box-login__account {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-normal);
  line-height: var(--font-line-height-medium);
  color: var(--color-dark);
  margin-top: 32px;
}

.box-login__account--highlight {
  color: var(--color-pink);
  text-decoration: underline;
}
</style>
