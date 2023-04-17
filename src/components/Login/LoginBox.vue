<template>
  <div class="login-box">
    <h2>
      Entre na sua conta
    </h2>

    <p class="mt-10">
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
    /**
     *  Logs a user in with a email and password
     *  If the credentials are correct, save the user ID to the Vuex Store and redirect to the home page
     * 
     * @returns {Promise} A promise that resolves to an object with the user's access token
     * @throws {Error} If the email or password is incorrect
     */
    async login() {
      try {
        const response = await axios.post('/users', {
          email: this.email,
          password: this.password
        }); 
        if (response.data?.id) {
          this.$store.dispatch('setUserId', response.data.id);
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

@media only screen and (max-width: 600px) {
  .login-box {
    padding: 24px;
  }
}
</style>