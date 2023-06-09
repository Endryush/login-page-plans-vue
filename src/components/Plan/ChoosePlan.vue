<template>
  <div class="box-plan">
    <div class="box-header">
      <badge v-if="plan.moreUsed || choosedPlan" :choosed-plan="choosedPlan" />

      <h1 
        :class="{ 'alternative-header' :plan.moreUsed || choosedPlan}"
        class="box-header__name color-alternative"
      >
        {{ plan.name }}
      </h1>

      <template v-if="isPriceFree()">
        <h1 class="box-header__price">
          {{ plan.price }}
        </h1>
      </template>
      <template v-else>
        <h1 class="box-header__price d-flex">
          <span class="box-header__price--small">R$</span> 
          {{ plan.price }}
          <span class="box-header__price--small">/mês</span>
        </h1>
      </template>
      <span class="box-header__price-text color-alternative" v-html="plan.priceText" /> 

      <div class="box-header__ideal">
        <span class="subtext">
          {{ plan.ideal }}
        </span>
      </div>

      <div 
        v-if="!choosedPlan" 
        class="box-header__button"
      >
        <Button
          type-button="button"
          text-button="Escolher esse plano"
          is-button-alternative
          @click="choosePlan"
        />
      </div>
    </div>

    <div class="box-body mobile-hidden-area" :id='`list-items${plan.id}`'>
      <list-items 
        v-if="plan.serverLocation" 
        :title="plan.serverLocation" 
      />

      <list-items 
        v-if="plan.serverEspecifications" 
        :items="plan.serverEspecifications" 
      />

      <list-items 
        v-if="plan.support" 
        :title="plan.support" 
      />

      <list-items 
        v-if="plan.availableApps" 
        title="Aplicativos disponíveis;" 
        :items="plan.availableApps" 
      />
      <div :class="{'list-item__blur' : choosedPlan}">
        <list-items 
          v-if="plan.freeMigration" 
          title="Migração Gratuita;" 
          :items="plan.freeMigration" 
        />
  
        <list-items 
          v-if="plan.moreServices" 
          title="Você ainda tem" 
          :items="plan.moreServices" 
        />
      </div>

    </div>

    <div
      v-if="!choosedPlan"
      class="mobile-show-area"
    >
      <a 
        href="#" 
        class="underline"
        @click.prevent="() =>seeMoreLess = !seeMoreLess"
      >
      {{ !seeMoreLess ? 'Ver mais' : 'Ver menos' }}
      </a>
    </div>
    <div 
      v-if="choosedPlan" 
      class="change-plan d-flex"
    >
      <button-outline 
        text-button="Trocar plano"
        @click="() => this.$router.go(-1)"
      />
    </div>
  </div>
</template>
<script>
import Button from '../Button/Button.vue';
import ListItems from './List/ListItems.vue';
import Badge from './Badge/Badge.vue';
import ButtonOutline from '../Button/ButtonOutline/ButtonOutline.vue';

export default {
  name: 'ChossePlanBox',

  components: {
    Button,
    ListItems,
    Badge,
    ButtonOutline
  },

  props: {
    plan: {
      required: true,
      type: Object
    },
    choosedPlan: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      seeMoreLess: false
    }
  },

  watch: {
    /**
     *  Watches for user clicks to see more or less plan details.
     *
     * @param {boolean} value - The new value of the 'seeMoreLess' data property.
     * @returns {void}
     */
    seeMoreLess (value) {
      const divElement = document.getElementById(`list-items${this.plan.id}`)
      const display = value ? 'block' : 'none'
      
      
      divElement.style.display = display
    }
  },

  methods: {
    /**
     *  Determines if the plan is free
     *
     * @returns {Boolean}
     */
    isPriceFree () {
      return typeof(this.plan?.price) !== 'number'
    },

    /**
     *  Emits an event to the parent component with the selected plan
     *
     * @emits choose-plan
     * @returns {void}
     */
    choosePlan () {
      this.$emit('choose-plan', this.plan );
    }
  }
}
</script>
<style scoped>
/* COMMON STYLES */
.color-alternative {
  color: var(--color-dark-alternative);
}
/* COMMON STYLES */

/* BOX HEADER */
.box-plan {
  background: var(--color-white);
  border-radius: 5px;
  padding: 40px;
  border: 1px solid var(--color-white-secondary);
}

.box-header {
  text-align: center;
}

.box-header__name {
  font-weight: var(--font-weight-bold);
  font-size: 26px;
  line-height: 33px;
}

.alternative-header {
  margin-top: 1.15rem;
}

.box-header__price {
  color: var(--color-pink);
  font-weight: var(--font-weight-bold);
  font-size: 34px;
  line-height: 43px;
  margin-top: 21px;
  margin-bottom: 13px;
}

.box-header__price-text {
  font-weight: var(--font-weight-light);
  font-size: 14px;
  line-height: var(--font-size-large);
}

.box-header__price--small {
  font-weight: var(--font-weight-light);
  font-size: 20px;
  line-height: 25px;
}

.box-header__ideal {
  border-top: 1px solid rgba(196, 196, 196, 0.5);
  border-bottom: 1px solid rgba(196, 196, 196, 0.5);
  padding: 16px;
  margin-top: 24px;
}

.box-header__button {
  padding: 0 16px;
}
/* BOX HEADER */

/* BOX BODY */
.box-body__subtitle {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small-alternative);
  line-height: var(--font-line-height-small--alternative);
  margin-top: 24px;
}
/* BOX BODY */

.change-plan {
  padding: 0 16px;
}

.list-item__blur {
  height: 96px;
  overflow: hidden;
  position: relative;
}

.list-item__blur::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,rgba(255, 255, 255, 0.5) 100%, #FFFFFF 0%);
  z-index: 1;
}

.mobile-show-area {
  display: none;
}

@media only screen and (max-width: 600px) {
  .box-plan {
    padding: 16px;
    margin-bottom: 32px;
  }
  .box-header__name {
    font-size: 22px;
  }

  .box-header__price {
    font-size: var(--font-size-large);
  }

  .mobile-show-area {
    display: block;
    display: flex;
    justify-content: center;
    color: var(--color-pink);
    margin-top: 16px;
  }

  .mobile-hidden-area {
    display: none;
  }
}
</style>