<template>
  <div class="card">
    <div class="card-header">Create new Product </div>
    <div class="card-body">

      <ProductForm :product="dbProduct"/>

    </div>
  </div>
</template>

<script>
  import ProductForm from '@/components/admin/products/ProductForm';

  export default {

    components: {
      ProductForm: ProductForm
    },

    data (){
      return {
        dbProduct: {
          title: 'ssss',
          description: '',
          parent_category: '',
          sub_category: '',
          price: ''
        }
      }
    },

    layout: 'admin'
  }
</script>
