<template>
  <div class="box-plan">
    <div class="box-header">
      <h1 class="box-header__name color-alternative">
        {{ plan.name }}
      </h1>
  
      <h1 class="box-header__price">
        {{ plan.price }}
      </h1>
  
      <span class="box-header__price-text color-alternative">
        {{ plan.priceText }}
      </span> 

      <div class="box-header__ideal">
        <span class="subtext">
          {{ plan.ideal }}
        </span>
      </div>

      <div class="box-header__button">
        <Button
          type-button="button"
          text-button="Escolher esse plano"
          is-button-alternative 
        />
      </div>
    </div>
    <div class="box-body">
      <h4 class="box-body__subtitle color-alternative" v-html="plan.serverLocation" />

      <template v-if="plan.serverEspecifications">
        <ul v-for="(specification, index) in plan.serverEspecifications" :key="index">
          <li class="subtext mt-10">
            <img src="@/assets/img/icons/check.svg" alt="check-icon" />
            <span class="box-body__specifications" v-html="specification" />
          </li>
        </ul>
      </template>

      <h4 class="box-body__subtitle color-alternative"> 
        {{ plan.support }}
      </h4>

      <h4 class="box-body__subtitle color-alternative"> 
        Aplicativos disponíveis;
      </h4>
      <template  v-if="plan.availableApps">
        <ul v-for="(app, index) in plan.availableApps" :key="index">
          <li class="subtext mt-10">
            <img src="@/assets/img/icons/check.svg" alt="check-icon" />
            <span class="box-body__specifications" v-html="app" />
          </li>
        </ul>
      </template>

      <template v-if=plan.freeMigration> 
        <h4 class="box-body__subtitle color-alternative"> 
          Migração Gratuita;
        </h4>
        <ul v-for="(migration, index) in plan.freeMigration" :key="index">
          <li class="subtext mt-10">
            <img src="@/assets/img/icons/check.svg" alt="check-icon" />
            <span class="box-body__specifications" v-html="migration" />
          </li>
        </ul>
      </template>

      <h4 class="box-body__subtitle color-alternative"> 
        Você ainda tem
      </h4>

      <template  v-if="plan.moreServices">
        <ul v-for="(service, index) in plan.moreServices" :key="index">
          <li class="subtext mt-10">
            <img src="@/assets/img/icons/check.svg" alt="check-icon" />
            <span class="box-body__specifications" v-html="service" />
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>
import Button from '../Button/Button.vue';

export default {
  name: 'ChossePlanBox',

  components: {
    Button
},

  props: {
    plan: {
      required: true,
      type: Object
    }
  }
}
</script>
<style scoped>
/* COMMON STYLES */
.subtext {
  color: var(--color-dark-alternative);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small-alternative);
  line-height: var(--font-line-height-small--alternative);
}

.color-alternative {
  color: var(--color-dark-alternative);
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
  line-height: 18px;
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

.box-body__specifications {
  margin-left: 8px;
}
/* BOX BODY */
</style>