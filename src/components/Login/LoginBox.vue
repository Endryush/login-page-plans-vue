<template>
  <div class="login-box">
    <h1 class="login-box__title">
      Entre na sua conta
    </h1>

    <p class="login-box__main-text mt-5">
      Para acessar sua conta informe seu e-mail e senha
    </p>

    <form 
      @submit.prevent="login" 
      class="mt-24"
    >
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          class="form-control" 
          id="email" 
          v-model="email" placeholder="Seu e-mail" 
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input 
          type="password" 
          class="form-control" 
          id="password" 
          v-model="password" 
          placeholder="Sua senha" 
          required
        />
      </div>

      <span class="login-box__small-text small-texts">
        Esqueci minha senha
      </span>

      <Button 
        text-button="Fazer Login" 
      />

      <error-message 
        v-if="userUnauthorized" 
        error-text="Credenciais inválidas. Tente novamente!" 
      />
    </form>
  </div>
</template>

<script>
import axios from '@/utils/axios.js';
import Button from '../Button/Button.vue';
import ErrorMessage from '../Error/ErrorMessage.vue';

export default {
  name: 'LoginBox',

  components: {
    Button,
    ErrorMessage
  },

  data() {
    return {
      email: '',
      password: '',
      userUnauthorized: false
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/auth/login', {
          username: this.email,
          password: this.password
        }); 
        if (response.data?.token) {
          this.$store.dispatch('setUserToken', response.data.token);
          this.$router.push('/home');
        }
      } catch (error) {
        this.userUnauthorized = true
        console.log(error);
      }
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
  padding: 28px 33px 35px;
}

.login-box__title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
  line-height: var(--font-line-height-large);
  color: var(--color-dark);
}

.login-box__main-text {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-normal);
  line-height: var(--font-line-height-medium);
  color: var(--color-dark);
}

.login-box__small-text {
  color: var(--color-gray);
  float: right;
}
</style>