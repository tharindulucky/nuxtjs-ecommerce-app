<template>
  <div class="single-product">

    <main class="main-area">
      <div class="centered">
        <section class="products">
          <h1>{{loadedProduct.title}}</h1>
          <p style="display: inline;">Posted on
            <nuxt-link style="display:inline; padding: 0;" :class="'nav-link'" :to="'/categories/'+loadedProduct.parent_category.id">{{loadedProduct.parent_category.name}}</nuxt-link>
            >
            <nuxt-link style="display: inline; padding: 0;" :class="'nav-link'" :to="'/sub-category/'+loadedProduct.sub_category.id">{{loadedProduct.sub_category.name}}</nuxt-link>

            by

            <nuxt-link style="display: inline; padding: 0;" :class="'nav-link'" :to="'/users/'+loadedProduct.user.name">{{loadedProduct.user.name}}</nuxt-link>

          </p>
          <br> <br>
          <img :src="'http://34.69.62.97:3000/uploads/'+ (typeof loadedProduct.images[0] === 'undefined' ? '1583575524974.png' : loadedProduct.images[0].url) " alt="meow">
          <br><br>
          <p>Rs.{{loadedProduct.price}}/-</p>
          <p>{{loadedProduct.description}}</p>
        </section>
      </div>
    </main>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    asyncData(context){
      return axios.get('http://34.69.62.97:3000/products/'+ context.params.id).then(response => {
        return {
          loadedProduct: response.data
        };

      }).catch(e => {
        context.error(e);
      });
    }
  }
</script>

<style>

</style>
