<template>
  <div class="products-page">
    <!-- .masthead -->

    <main class="main-area">
      <div class="centered">
        <ProductsList :products="loadedProducts"/>
      </div>
    </main>
  </div>
</template>

<script>
  import ProductsList from '@/components/products/ProductsList';

  export default {
    components: {
      ProductsList: ProductsList
    },

    computed: {
      loadedProducts(){
        return this.$store.getters.getLoadedProducts;
      }
    }
  }
</script>
