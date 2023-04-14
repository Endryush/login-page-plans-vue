<template>
  <div class="box-login">
    <login-box />
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
<style>
.box-login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
