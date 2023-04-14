<template>
  <div class="login-box">
    <h1 class="login-box__main-title">Entre na sua conta</h1>
    <p class="login-box__main-text" >Para acessar sua conta informe seu e-mail e senha</p>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <button class="btn btn-primary" @click.prevent="login">Entrar</button>
    </form>
  </div>
</template>

<script>
 export default {
  name: 'LoginBox',

    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login () {
        // TODO
      }
    }
  }
</script>
<style scoped>
.login-box {
  box-sizing: border-box;
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-white-secondary);
  border-radius: 5px;
  padding: 28px 35px 33px;
}
.login-box__main-title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
  line-height: var( --font-line-height-large);
  color: var(--color-dark);
}
.login-box__main-text {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-normal);
  line-height: var(--font-line-height-medium);
  color: var(--color-dark);
}
</style>