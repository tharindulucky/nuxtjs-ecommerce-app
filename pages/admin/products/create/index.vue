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
        this.$store.dispatch("addProduct", newProductData).then(() => {
          this.$router.push("/admin/products");
        });
      }
    },

    layout: 'admin'
  }
</script>
