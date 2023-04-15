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
    <div class="box-body">
      <list-items v-if="plan.serverLocation" :title="plan.serverLocation" />

      <list-items v-if="plan.serverEspecifications" :items="plan.serverEspecifications" />

      <list-items v-if="plan.support" :title="plan.support" />

      <list-items v-if="plan.availableApps" title="Aplicativos disponíveis;" :items="plan.availableApps" />

      <list-items v-if="plan.freeMigration" title="Migração Gratuita;" :items="plan.freeMigration" />

      <list-items v-if="plan.moreServices" title="Você ainda tem" :items="plan.moreServices" />
    </div>
  </div>
</template>
<script>
import Button from '../Button/Button.vue';
import ListItems from './List/ListItems.vue';
import Badge from './Badge/Badge.vue';

export default {
  name: 'ChossePlanBox',

  components: {
    Button,
    ListItems,
    Badge
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

  methods: {
    isPriceFree () {
      return typeof(this.plan?.price) !== 'number'
    },

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

.subtext {
  color: var(--color-dark-alternative);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small-alternative);
  line-height: var(--font-line-height-small--alternative);
}
/* COMMON STYLES */

/* BOX HEADER */
.box-plan {
  background: #FFFFFF;
  border-radius: 5px;
  padding: 40px;
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
</style>