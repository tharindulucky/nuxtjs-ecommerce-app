<template>
  <article class="card">
    <nuxt-link :to="'/products/'+ id">
      <figure class="thumbnail">
        <img :src="'http://34.69.62.97:3000/uploads/'+thumbnail" alt="meow">
      </figure>
      <div class="card-content">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
      </div>
      <!-- .card-content -->
    </nuxt-link>
  </article>
</template>

<script>
  export default {
    name: "ProductThumbnail",
    props: {
      id:{type: Number, required: true},
      title:{type: String, required: true},
      description:{type: String, required: true},
      thumbnail:{type: String, required: true},
    }
  }
</script>

<style scoped>
  .card {
    background: white;
    margin-bottom: 2em;
  }

  .card a {
    color: black;
    text-decoration: none;
  }

  .card a:hover {
    box-shadow: 3px 3px 8px hsl(0, 0%, 70%);
  }

  .card-content {
    padding: 1.4em;
  }

  .card-content h2 {
    margin-top: 0;
    margin-bottom: .5em;
    font-weight: normal;
  }

  .card-content p {
    font-size: 95%;
  }

  /* Flexbox styles */
  @media screen and (min-width: 40em) {

    .card {
      margin-bottom: 1em;
      display: flex;
      flex: 0 1 calc(50% - 0.5em);
      /* width: calc(50% - 1em); */
    }
  } /* mq 40em*/

  @media screen and (min-width: 60em) {

    .card {
      margin-bottom: 2em;
      display: flex;
      flex: 0 1 calc(33% - 0.5em);
      /* width: calc(33% - 1em); */
    }
  } /* mq 60em*/
</style>
