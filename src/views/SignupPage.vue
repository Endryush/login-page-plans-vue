<template>
  <div class="container">
    <div v-if="!step || step === 1">
      <h2 class="choose-plan">Escolha o seu plano</h2>
      <ul class="plan-list">
        <li v-for="(plan, index) in plans" :key="index">
          <choose-plan :plan="plan" @choose-plan='choosePlan' />
        </li>
      </ul>
    </div>
    <div v-else-if="step === 2">
      <div class="d-flex">
        <div class="form-register">
          <h2>Formulário de cadastro:</h2>
          <p>Plano escolhido</p>
          <form @submit.prevent="register" >
            <div class="form-group">
              <label for="name">Nome completo</label>
              <input 
                type="text" 
                class="form-control" 
                id="name" 
                v-model="name" 
                placeholder="Informe seu nome completo" 
                required
              />
            </div>

            <div class="form-group">
              <label for="number">Celular</label>
              <input 
                type="text" 
                class="form-control" 
                id="number" 
                v-model="numberPhone"
                v-mask="'(##) #####-####'"
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
                v-model="email" 
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
                v-model="password"
                required
              />
            </div>

            <div class="form-group">
              <label for="passwordConfirmation">Confirme sua senha</label>
              <input 
                type="password" 
                class="form-control" 
                id="passwordConfirmation" 
                v-model="passwordConfirmation"
                required
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <choose-plan :plan="choosedPlan" />
      </div>
    </div>
  </div>
</template>

<script>
import ChoosePlan from '@/components/Plan/ChoosePlan.vue';
import { plans } from '@/utils/plan-list.js';

export default{
  components: {
    ChoosePlan,
  },

  data() {
    return {
      step: 1,
      plans: plans,
      choosedPlan: '',
      name: '',
      email: '',
      numberPhone: '',
      password: '',
      passwordConfirmation: ''
    };
  },

  mounted() {
    window.addEventListener("popstate", (event) => {
      if (event.state) {
        this.step = event.state.step;
      } else {
        this.step = 1;
        history.pushState({ step: 1 }, null, "");
      }
    });
  },

  methods: {
    choosePlan(plan) {
      this.choosedPlan = plan;
      this.step = 2;
      history.pushState({ step: 2 }, null, "?step=2");
    }
  },
};
</script>

<style scoped>
.container {
  width: 75vw;
}

.choose-plan {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small);
  line-height: var(--font-line-height-small);
  text-align: center;
  color: #0F1522;
  margin: 24px 0 35px;
}

.plan-list {
  display: flex;
}

.plan-list li {
  margin: 12px;
}
</style>
