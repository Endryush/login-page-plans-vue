<template>
  <div class="container">
    <div v-if="!step || step === 1">
      <h2 class="choose-plan">Escolha o seu plano</h2>
      <ul class="plan-list">
        <li v-for="(plan, index) in plans" :key="index">
          <choose-plan :plan="plan" />
        </li>
      </ul>
    </div>
    <div v-else-if="step === 2">
      <h2>Formulário de cadastro:</h2>
      <p>Plano escolhido: {{ planoEscolhido }}</p>
      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <br>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required>
        <br>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import ChoosePlan from '@/components/Plan/ChoosePlan.vue'
import { plans } from '@/utils/plan-list.js' 
export default {
  components: {
    ChoosePlan
  },

  data() {
    return {
      step: 1,
      plans: plans,
      choosedPlan: '',
      nome: '',
      email: '',
      senha: ''
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
