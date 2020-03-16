<template>
  <div class="card">
    <div class="card-header">View Product </div>
    <div class="card-body">

      <ProductForm :readonly='true' :product="dbProduct"/>

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
          title: 'ddd',
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
