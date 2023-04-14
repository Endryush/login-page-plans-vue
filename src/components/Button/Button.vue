<template>
  <button 
    :type="typeButton" 
    class="btn btn-primary small-texts mt-24"
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
</style>