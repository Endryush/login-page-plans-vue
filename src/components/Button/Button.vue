<template>
  <button :type="typeButton" class="btn btn-primary">{{ textButton }}</button>
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