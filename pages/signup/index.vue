<template>
  <div class="login-form">
    <form @submit.prevent="submitSignupForm" method="post" id="signupForm">
      <h2 class="text-center">Sign up!</h2>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Full Name" v-model="newUser.fullname" required="required">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Email" v-model="newUser.email" required="required">
      </div>
      <div class="form-group">
        <input type="number" class="form-control" placeholder="Phone" v-model="newUser.phone" required="required">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="newUser.password" required="required">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Log in</button>
      </div>
    </form>
    <p class="text-center">Already a member? <nuxt-link :to="'/login'">Login</nuxt-link></p>
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
        newUser: {
          fullname:'',
          email:'',
          phone:'',
          password:''
        }
      }
    },

    methods: {
      submitSignupForm(){
        $('#signupForm :input').prop('disabled', true);

        this.$store.dispatch('createUser', this.newUser).then((result) => {
          if(result){
            this.$router.push("/login");
          }else{
            $('#signupForm :input').prop('disabled', false);
          }
        });

      }
    }
  }
</script>
