<template>
  <div class="main-container">
    <main-header />
    <router-view/>
  </div> 
</template>
<script>
  import MainHeader from '@/components/MainHeader/MainHeader.vue';

  export default {
    name: 'DefaultPage',

    components: { MainHeader }
  }
</script>
<style src="@/assets/css/base/base.css"></style>