<template>
  <div class="card">
    <div class="card-header">Create new Product </div>
    <div class="card-body">

      <ProductForm :product="loadedProduct" @submit="updateProduct"/>

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

    asyncData(context){
      return axios.get('http://34.69.62.97:3000/products/'+ context.params.id).then(response => {
        return {
          loadedProduct: {
            title: response.data.title,
            description: response.data.title,
            price: response.data.price,
            parent_category: response.data.parent_category.id,
            sub_category: response.data.sub_category.id,
            images: response.data.images
          },
        };

      }).catch(e => {
        context.error(e);
      });
    },

    methods: {
      updateProduct(newProductData){

        console.log(newProductData);

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZGVtby5jb20iLCJ1c2VySWQiOjEsInVzZXJMZXZlbCI6InVzZXIiLCJpYXQiOjE1ODcyODI3NjcsImV4cCI6MTU4NzI4NjM2N30.RHNhN2Ti0BN9N3DYjE6lEGpWA7ftQeU_XnWmOGhMyGI'
        };

        console.log(newProductData);

        axios.patch('http://34.69.62.97:3000/products/' + this.$route.params.id, newProductData, {headers: headers}).then(result => {
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
