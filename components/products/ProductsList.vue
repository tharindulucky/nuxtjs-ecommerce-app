<template>
  <section class="cards">
    <ProductThumbnail v-for="product in products" :key="product.id" :id="product.id" :title="product.title" :description="product.description" :thumbnail="'1583575524974.png'"/>
  </section>
</template>

<script>
  import ProductThumbnail from '@/components/products/ProductThumbnail';

  export default {
    components: {
      ProductThumbnail: ProductThumbnail,
    },

    props: {
      products: {type: Array, required: true}
    }
  }
</script>
