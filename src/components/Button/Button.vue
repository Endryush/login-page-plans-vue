<template>
  <button 
    :type="typeButton"
    :class="{'btn-alternative': isButtonAlternative}"
    class=" btn-primary small-texts mt-24"
  >
    {{ textButton }}
  </button>
</template>
<script>
export default {
  name: 'MainButton',

  props: {
    textButton: {
      required: true,
      type: String
    },
    typeButton: {
      required: false,
      type: String,
      default: 'submit'
    },
    isButtonAlternative: {
      required: false, 
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
  .btn-primary {
    padding: 30px 24px;
    width: 100%;
    gap: 24px;
    border-radius: 5px;
    background: var(--color-pink);
    text-transform: uppercase;
    color: var(--color-white);
  }

  .btn-primary:hover {
    background: var(--color-pink--secondary);
  }
  .btn-alternative {
    padding: 18px 24px;
  }

  @media only screen and (max-width: 600px) {
    .btn-primary {
      padding: 16px 8px;
    }
  }
</style>