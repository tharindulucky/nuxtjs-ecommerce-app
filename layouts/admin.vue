<template>
  <div>
    <Header/>
    <main class="py-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-2">
            <Nav/>
          </div>
          <div class="col-md-10">
            <nuxt />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Nav from '@/components/admin/nav';

  export default {

    middleware: ['auth-local', 'auth'],

    components: {
      Header: Header,
      Nav: Nav
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
