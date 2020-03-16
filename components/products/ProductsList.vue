<template>
  <section class="cards">
    <ProductThumbnail id="1" title="Pancha" description="Meow meow meow 1" thumbnail="http://placekitten.com/800/610"/>
    <ProductThumbnail id="2" title="Zimba" description="Meow meow meow 2" thumbnail="http://placekitten.com/800/600"/>
    <ProductThumbnail id="3" title="Sudu" description="Meow meow meow 3" thumbnail="http://placekitten.com/800/620"/>
  </section>
</template>

<script>
  import ProductThumbnail from '@/components/products/ProductThumbnail';

  export default {
    components: {
      ProductThumbnail: ProductThumbnail,
    }
  }
</script>
