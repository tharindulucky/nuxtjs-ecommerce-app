<template>
  <section class="cards">
    <ProductThumbnail v-for="product in products" :key="product.id" :id="product.id" :title="product.title" :description="product.description" :thumbnail="typeof product.images[0] === 'undefined' ? '1583575524974.png' : product.images[0].url "/>
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
