<template>
  <div class="login-form">
    <form @submit.prevent="submitLoginForm" method="post" id="loginForm">
      <h2 class="text-center">Log in</h2>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Username" v-model="user.email" required="required">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="user.password" required="required">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Log in</button>
      </div>
    </form>
    <p class="text-center"><nuxt-link :to="'/signup'">Create an Account</nuxt-link></p>
  </div>
</template>

<style scoped>
  .login-form {
    width: 340px;
    margin: 50px auto;
  }
  .login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
  .login-form h2 {
    margin: 0 0 15px;
  }
  .form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
  }
  .btn {
    font-size: 15px;
    font-weight: bold;
  }
</style>

<script>
  import axios from 'axios';

  export default {

    middleware: ['auth-local', 'auth-inverse'],

    data(){
      return {
        user: {
          email:'',
          password:''
        }
      }
    },

    methods: {
      submitLoginForm(){
        $('#loginForm :input').prop('disabled', true);

        this.$store.dispatch('authenticateUser', this.user).then((result) => {
          if(result){
            this.$router.push("/admin");
          }else{
            $('#loginForm :input').prop('disabled', false);
          }
        });
      }
    }
  }
</script>
