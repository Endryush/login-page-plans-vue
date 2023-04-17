<template>
  <div class="container">
    <div v-if="!step || step === 1">
      <h2 class="choose-plan">Escolha o seu plano</h2>
      <ul class="plan-list">
        <li v-for="(plan, index) in plans" :key="index">
          <choose-plan 
            :plan="plan" 
            @choose-plan='choosePlan' 
          />
        </li>
      </ul>
    </div>
    <div v-else-if="step === 2">
      <div class="register-plan">
        <div class="form-register">
          <signup-form 
            @sign-up="signUp"
          />
        </div>
        <div class="register-plan__choosed-plan">
          <choose-plan 
            :plan="choosedPlan" 
            choosed-plan
          />
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/config/axios.js';
import { COOKIE_NAMES } from '@/enum/cookieNames.js';
import { plans } from '@/utils/plan-list.js';
import ChoosePlan from '@/components/Plan/ChoosePlan.vue';
import SignupForm from '@/components/SignupForm/SignupForm.vue';
import Cookie from '@/mixins/cookie';


export default{
  name: 'SignupView',

  mixins: [Cookie],

  components: {
    ChoosePlan,
    SignupForm
  },

  data() {
    return {
      step: 1,
      plans: plans,
      choosedPlan: ''
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
    /**
     * Choose a plan to proceed with the subscription and update the step to 2
     * 
     * @param {Object} plan - The plan object with the plan's details
     * @returns {void}
     */
    choosePlan(plan) {
      this.choosedPlan = plan;
      this.step = 2;
      history.pushState({ step: 2 }, null, "?step=2");
    },

    /**
     * Performs a sign up request to the backend API with the provided data.
     * 
     * @param {Object} data - An object containing the user's sign up data.
     * @param {string} data.name - The user's name.
     * @param {string} data.email - The user's email.
     * @param {string} data.password - The user's password.
     * @param {string} data.numberPhone - The user's phone number.
     * @param {boolean} data.agreeTerms - Whether the user has agreed to the terms.
     * @param {string} data.siteDomain - The user's site domain.
     * 
     * @returns {void}
     * @throws {Error} If there's an error during the sign up request.
     */
    async signUp (data) {
      try {
        const response = await axios.post('/users', {
          username: data.name,
          email: data.email,
          password: data.password,
          phone: data.numberPhone,
          agreeTerms: data.agreeTerms,
          siteDomain: data.siteDomain
        }); 

        if (response.data) {
          this.setCookie(COOKIE_NAMES.IS_LOGGED_USER, true)
          this.$router.push('/home');
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
.container {
  width: 75vw;
}

.register-plan {
  display: flex;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  margin-top: 40px
}

.form-register {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: var(--color-white);
  border: 1px solid var(--color-white-secondary);
  border-radius: 5px;
  padding: 28px 30px;
}

.choose-plan {
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small);
  line-height: var(--font-line-height-small);
  text-align: center;
  color: #0F1522;
  margin: 24px 0 35px;
}

.register-plan__choosed-plan {
  width: 47%;
}

.plan-list {
  display: flex;
}

.plan-list li {
  margin: 12px;
}

@media only screen and (max-width: 600px) {
  .container {
    width: auto;
    padding: 0 24px;
  }
  .plan-list {
    flex-direction: column;
  }
  .plan-list li {
    margin: 0;
    order: 1;
  }

  .plan-list li:nth-child(2) {
    order: 0;
  }

  .register-plan { 
    flex-direction: column;
    padding: 0;
    gap: 0;
  }

  .register-plan div {
    order: 1;
  }

  .register-plan div:nth-child(2) {
    order: 0;
  }

  .register-plan__choosed-plan {
    width: 100%;
  }
}
</style>
