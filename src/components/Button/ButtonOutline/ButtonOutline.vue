<template>
  <button
    class="btn-outline"
  >
    {{ textButton }}
  </button>
</template>
<script>
  export default {
    name: 'ButtonOutline',

    props: {
      textButton: {
        required: true,
        default: String
      }
    }
  }
</script>
<style scoped>
  .btn-outline {
    box-sizing: border-box;
    padding: 18px 24px;
    gap: 24px;
    border: 1px solid #000000;
    border-radius: 5px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    .btn-outline {
      margin-top: 16px;
    }
  }
</style>