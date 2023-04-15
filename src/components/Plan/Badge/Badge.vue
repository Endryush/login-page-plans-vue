<template>
  <div 
    :class="{'badge__choosed-plan': choosedPlan}"
    class="badge__more-used"
  > 
    {{ choosedPlan ? 'Plano escolhido' : ' Mais usado' }}
  </div>

</template>
<script>
export default {
  name: 'BadgePlan',

  props: {
    choosedPlan: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.badge__more-used {
  position: relative;
  width: fit-content;
  margin-top: -50px;
  padding: 8px 16px;
  background: #10C300;
  border-radius: 10px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
}

.badge__choosed-plan {
  background-color: #000000;
}
</style>