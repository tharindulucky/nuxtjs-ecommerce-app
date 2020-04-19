<template>
  <div class="card">
    <div class="card-header">Your Products <nuxt-link :to="'/admin/products/create'" :class="'btn btn-primary btn-sm float-lg-right'">Add new</nuxt-link> </div>
    <div class="card-body">

      <div class="list-group">

        <div class="list-group-item" v-for="loadedProduct in loadedProducts">
          <nuxt-link :to="'/admin/products/'+loadedProduct.id" class="links-no-style">
            <div class="row">
              <div class="col-md-10">
                {{loadedProduct.title}}
              </div>
              <div class="col-md-1">
                <div class="float-right">
                  <nuxt-link style="display: inline; padding: 0;" :class="'nav-link'" :to="'/admin/products/'+loadedProduct.id+'/edit'">Edit</nuxt-link>
                </div>
              </div>

              <div class="col-md-1">
                <div class="float-right">
                  <button onclick="return confirm('Are you sure ? This cannot be undone!')" type="submit" role="button" aria-pressed="true" class="btn btn-danger btn-sm ">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    layout: 'admin',

    asyncData(context){

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZGVtby5jb20iLCJ1c2VySWQiOjEsInVzZXJMZXZlbCI6InVzZXIiLCJpYXQiOjE1ODcyODI3NjcsImV4cCI6MTU4NzI4NjM2N30.RHNhN2Ti0BN9N3DYjE6lEGpWA7ftQeU_XnWmOGhMyGI'
      };

      return axios.get('http://34.69.62.97:3000/products/myproducts?page=4', {headers: headers}).then(response => {
        return {
          loadedProducts: response.data.products
        };

      }).catch(e => {
        //context.error(e);
        console.log(e);
      });
    }
  }
</script>
