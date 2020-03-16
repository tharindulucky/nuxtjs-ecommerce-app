<template>
  <div class="products-page">
    <!-- .masthead -->

    <main class="main-area">
      <div class="centered">
        <ProductsList/>
      </div>
    </main>
  </div>
</template>

<script>
  import ProductsList from '@/components/products/ProductsList';

  export default {
    components: {
      ProductsList: ProductsList
    }
  }
</script>
