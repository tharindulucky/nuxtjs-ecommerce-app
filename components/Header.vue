<template>
  <header id="header">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <nuxt-link class="navbar-brand" :to="'/'">CatShop</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link :class="'nav-link'" :to="'/'" data-toggle="collapse" data-target="#navbarCollapse"  >Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link  :class="'nav-link'" :to="'/products'" data-toggle="collapse" data-target="#navbarCollapse">Products</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link  :class="'nav-link'" :to="'/about'" data-toggle="collapse" data-target="#navbarCollapse">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link v-if="!isLoggedIn" :class="'nav-link'" :to="'/login'" data-toggle="collapse" data-target="#navbarCollapse">Login</nuxt-link>
            <nuxt-link v-else :class="'nav-link'" :to="'/admin'" data-toggle="collapse" data-target="#navbarCollapse">Admin</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link v-if="isLoggedIn" :to="'#'" :class="'nav-link'" @click.native="logout" data-toggle="collapse" data-target="#navbarCollapse">Logout</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
  #header{
    margin-bottom: 100px;
  }

  .nav-item a.nuxt-link-exact-active{
    color: #ffffff !important;
  }
</style>

<script>
  export default {

    computed: {
      isLoggedIn:{
        get(){
          return this.$store.getters.isAuthenticated;
        },

        set(val){
          return val;
        },
      }
    },

    methods: {
      logout(){
        this.$store.dispatch('logout');
        this.$router.push("/login");
      }
    }
  }
</script>
