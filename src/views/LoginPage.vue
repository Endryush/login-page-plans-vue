<template>
  <div class="box-login mt-16">
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
<style scoped>
.box-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
}
</style>
