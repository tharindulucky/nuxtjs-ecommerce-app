<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';

  export default {
    components: {
      Header: Header
    }
  }
</script>

<style>
  html {
    font-family: 'Open Sans', 'sans-serif';
  }

  body{
    margin: 0;
  }
</style>
