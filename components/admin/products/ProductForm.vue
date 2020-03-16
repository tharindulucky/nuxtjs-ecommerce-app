<template>
  <form @submit.prevent="saveProduct">
    <div class="form-group">
      <label>Title</label>
      <input name="title" v-model="newPost.title" type="text" class="form-control" placeholder="Enter here..." autocomplete="nope" :readonly="readonly">
    </div>

    <div class="form-group">
      <label>Description</label>
      <textarea name="description" v-model="newPost.description" class="form-control" placeholder="Enter here..." rows="5" :readonly="readonly"></textarea>
    </div>

    <div class="row">

      <div class="col-md-6">
        <div class="form-group">
          <label>Price</label>
          <input name="price" v-model="newPost.price" type="number" class="form-control" placeholder="Enter here..." autocomplete="nope" :readonly="readonly">
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>Parent Category</label>
          <select name="parent_category" v-model="newPost.parent_category" class="form-control" :readonly="readonly">
            <option selected disabled>--Select Position--</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>Sub Category</label>
          <select name="position" v-model="newPost.sub_category" class="form-control" :readonly="readonly">
            <option selected disabled>--Select Position--</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-group">
      <button v-if="!readonly" type="submit" class="btn btn-primary btn-custom">Save</button>
      <nuxt-link :to="'/admin/products'" v-if="readonly" type="submit" class="btn btn-primary btn-custom">Done</nuxt-link>
    </div>

  </form>
</template>

<script>

  export default {

    name:"ProductForm",

    props:{
      readonly: {type:Boolean, default:false},
      product: {type:Object, required:false},
    },

    data() {
      return {
        newPost: this.product ? {...this.product} : {
          title: '',
          description: '',
          parent_category: '',
          sub_category: '',
          price: ''
        }
      }
    },

    methods: {
      saveProduct() {
        console.log(this.newPost);
      }
    },
  }
</script>
