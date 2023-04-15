<template>
  <h2>Dados pessoais</h2>
  <h3 class="my-16">Informe seus dados pessoais para acesso à sua conta </h3>
  <form @submit.prevent="signup" >
    <div class="form-group">
      <label for="name">Nome completo</label>
      <input 
        type="text" 
        class="form-control" 
        id="name" 
        v-model="formData.name" 
        placeholder="Informe seu nome completo" 
        required
      />
    </div>

    <div class="form-group">
      <label for="number">Celular</label>
      <input 
        type="number" 
        class="form-control" 
        id="number" 
        v-model="formData.numberPhone"
        placeholder="(99) 99999-0000"
        required
      />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input 
        type="email" 
        class="form-control" 
        id="email" 
        v-model="formData.email" 
        placeholder="Informe seu e-mail" 
        required
      />
    </div>

    <div class="form-group">
      <label for="password">Senha</label>
      <input 
        type="password" 
        class="form-control" 
        id="password" 
        v-model="formData.password"
        required
      />
    </div>

    <div class="form-group">
      <label for="passwordConfirmation">Confirme sua senha</label>
      <input 
        type="password" 
        class="form-control" 
        id="passwordConfirmation" 
        v-model="formData.passwordConfirmation"
        required
      />
    </div>

    <error-message 
      v-if="errorPassword" 
      error-text="As senhas devem ser iguais!"
      class="mb-16"
    />

    <div class="site-data">
      <h2 class="my-16">Dados do seu site</h2>

      <div class="form-group mb-5">
        <label for="siteDomain">Nome do seu site</label>
        <input 
          type="text" 
          class="form-control" 
          id="siteDomain" 
          v-model="formData.siteDomain"
          placeholder="Meu site"
          required
        />
      </div>
      <small class="site-data__advice">Exatamente igual o título do seu site</small>
    </div>
    <div class="checkbox">
      <label for="agreeTerms">
        <input 
          type="checkbox" 
          id="agreeTerms" 
          name="agreeTerms"
          required
          @click="() => formData.agreeTerms = !this.formData.agreeTerms"
        >
        <span class="checkmark"/>
          Ao concluir com seu cadastro você concorda com nossos <br>
        <span class="underline">
          termos de uso e políticas de privacidade.
        </span>
      </label>
    </div>

    <Button
      type-button="submit"
      text-button="Criar conta"
    />
  </form>
</template>
<script>
  import Button from '@/components/Button/Button.vue';
  import ErrorMessage from '../Error/ErrorMessage.vue';

  export default {
    name: 'SignupForm',
    
    components: {
      Button,
      ErrorMessage
    },

    data() {
      return {
        formData: {
          name: '',
          email: '',
          numberPhone: '',
          password: '',
          passwordConfirmation: '',
          siteDomain: '',
          agreeTerms: false
        },
        errorPassword: false
      };
    },


    methods: {
      signup () {
        if (this.formData.password !== this.formData.passwordConfirmation) {
          this.errorPassword = true
          return
        }

        this.$emit('sign-up', this.formData );
      }
    }
  }
</script>
<style scoped>
.site-data{
  margin-left: -16px;
  margin-right: -16px;
  padding: 0 16px 16px;
  border-top: 1px solid rgba(81, 93, 116, 0.3);
  border-bottom: 1px solid rgba(81, 93, 116, 0.3);
  transform: matrix(1, 0, 0.01, 1, 0, 0);
}

.site-data__advice {
  font-weight: var(--font-weight-light);
  font-size: 14px;
  line-height: var(--font-size-normal);
  color: var(--color-gray);
}

.checkbox {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  margin-top: 16px;
  cursor: pointer;
  font-size: 22px; 
}
.checkbox input {
  position: absolute;
    opacity: 0;
    cursor: pointer;
    left: 0;
    display: inline;
    height: 15px;
    width: 15px;
    left: -4px;
    top: 2px;
}

.checkmark {
  position: absolute;
  top: 5px;
  left: 0;
  width: 14px;
  height: 16px;
  background: #FAF1F5;
  border: 1px solid #F30168;
  border-radius: 4px;
}

.checkbox:hover input ~ .checkmark {
  cursor: pointer;
}

.checkbox input:checked ~ .checkmark {
  background-color: #FAF1F5;
}

.checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 4px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid #F30168;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.container input:checked ~ .checkmark:after {
  display: block;
}
</style>