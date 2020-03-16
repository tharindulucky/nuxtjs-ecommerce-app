<template>
  <div class="card">
    <div class="card-header">Create new Product </div>
    <div class="card-body">

      <ProductForm/>

    </div>
  </div>
</template>

<script>
 import ProductForm from '@/components/admin/products/ProductForm';

  export default {

    components: {
      ProductForm: ProductForm
    },

    layout: 'admin'
  }
</script>
