<template>
  <form @submit.prevent="saveProduct" id="productForm">
    <div class="form-group">
      <label>Title</label>
      <input name="title" v-model="newProduct.title" type="text" class="form-control" placeholder="Enter here..." autocomplete="nope" :readonly="readonly">
    </div>

    <div class="form-group">
      <label>Description</label>
      <textarea name="description" v-model="newProduct.description" class="form-control" placeholder="Enter here..." rows="5" :readonly="readonly"></textarea>
    </div>

    <div class="row">

      <div class="col-md-6">
        <div class="form-group">
          <label>Price</label>
          <input name="price" v-model="newProduct.price" type="number" class="form-control" placeholder="Enter here..." autocomplete="nope" :readonly="readonly">
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>Parent Category</label>
          <select name="parent_category" v-model="newProduct.parent_category" @change="getSubcategories(newProduct.parent_category)" class="form-control" :readonly="readonly" required>
            <option selected disabled>--Select Position--</option>
            <option v-for="singleCategory in categories" :value="singleCategory.id">{{singleCategory.name}}</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>Sub Category</label>
          <select name="position" v-model="newProduct.sub_category" class="form-control" :readonly="readonly" required>
            <option v-for="subCategory in subCategories" :value="subCategory.id">{{subCategory.name}}</option>
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
  import axios from 'axios';

  export default {

    name:"ProductForm",

    props:{
      readonly: {type:Boolean, default:false},
      product: {type:Object, required:false},
    },

    data() {
      return {
        newProduct: this.product ? {...this.product} : {
          title: '',
          description: '',
          parent_category: '',
          sub_category: '',
          price: ''
        },
        parentCategory:'',
      }
    },

    computed: {
      categories:{
        get(){
          return this.$store.getters.getCategories;
        },

        set(val){
          return val;
        },
      },

      subCategories: {
        get(){
          return this.getInitSubcategories(this.newProduct.parent_category);
        },

        set(val){
          return val;
        },
      }
    },

    watch:{

    },

    methods: {
      saveProduct() {
        $('#productForm :input').prop('disabled', true);
        this.$emit('submit', this.newProduct);
      },

      getSubcategories(parent_id){
        if(parent_id !== null){
          this.categoryObj = this.categories.find(x => x.id === parent_id);
          this.subCategories = this.categoryObj.subCategories;
        }
      },

      getInitSubcategories(parent_id){
        if(parent_id !== '') {
          this.categoryObj = this.categories.find(x => x.id === parent_id);
          return this.categoryObj.subCategories;
        }
      },
    },
  }
</script>
