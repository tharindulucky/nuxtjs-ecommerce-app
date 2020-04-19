<template>
  <div class="card">
    <div class="card-header">Create new Product </div>
    <div class="card-body">

      <ProductForm @submit="saveProduct"/>

    </div>
  </div>
</template>

<script>
 import axios from 'axios';
 import ProductForm from '@/components/admin/products/ProductForm';

  export default {

    components: {
      ProductForm: ProductForm
    },

    methods:{
      saveProduct(newProductData){

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZGVtby5jb20iLCJ1c2VySWQiOjEsInVzZXJMZXZlbCI6InVzZXIiLCJpYXQiOjE1ODcyODI3NjcsImV4cCI6MTU4NzI4NjM2N30.RHNhN2Ti0BN9N3DYjE6lEGpWA7ftQeU_XnWmOGhMyGI'
        };

        axios.post('http://34.69.62.97:3000/products', newProductData, {headers: headers}).then(result => {
          console.log(result);
          this.$router.push('/admin/products');
        }).catch(e => {
          console.log(e);
        });
      }
    },

    layout: 'admin'
  }
</script>
