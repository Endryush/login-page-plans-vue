<template>
  <div class="error-message">
    <span>
      {{ errorText }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'ErrorMessage',

  props: {
    errorText: {
      required: true,
      type: String
    }
  }
}
</script>
<style scoped>
.error-message {
  display: block;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 16px 8px;
  border-radius: 4px;
  margin-top: 16px;
}
</style>