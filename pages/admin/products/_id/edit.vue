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
            id: context.params.id,
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

        this.$store.dispatch("updateProduct", newProductData).then(() => {
          this.$router.push("/admin/products");
        });


      }
    },

    layout: 'admin'
  }
</script>
