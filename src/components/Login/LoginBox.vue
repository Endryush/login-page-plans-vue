<template>
  <div class="login-box">
    <h2>
      Entre na sua conta
    </h2>

    <p class="mt-5">
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

      <a class="login-box__small-text small-texts">
        Esqueci minha senha
      </a>

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
import axios from '@/config/axios.js';
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

.login-box__small-text {
  color: var(--color-gray);
  float: right;
}
</style>