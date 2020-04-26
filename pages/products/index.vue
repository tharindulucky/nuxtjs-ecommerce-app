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
  export default {
    computed: {
      loadedProducts(){
        const products = this.$store.getters.getLoadedProducts;
        products.sort((a, b) => b.id - a.id);
        return products;
      }
    }
  }
</script>
