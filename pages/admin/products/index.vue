<template>
  <div class="card">
    <div class="card-header">Your Products <nuxt-link :to="'/admin/products/create'" :class="'btn btn-primary btn-sm float-lg-right'">Add new</nuxt-link> </div>
    <div class="card-body">

      <div class="list-group">

        <div class="list-group-item" v-for="loadedProduct in loadedProducts">
          <nuxt-link :to="'/admin/products/'+loadedProduct.id" class="links-no-style">
            <div class="row">
              <div class="col-md-10">
                {{loadedProduct.title}}
              </div>
              <div class="col-md-1">
                <div class="float-right">
                  <nuxt-link style="display: inline; padding: 0;" :class="'nav-link'" :to="'/admin/products/'+loadedProduct.id+'/edit'">Edit</nuxt-link>
                </div>
              </div>

              <div class="col-md-1">
                <div class="float-right">
                  <button onclick="return confirm('Are you sure ? This cannot be undone!')" type="submit" role="button" aria-pressed="true" class="btn btn-danger btn-sm ">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

  export default {
    layout: 'admin',

    asyncData(context){
      return context.store.dispatch('getMyProducts').then((result) => {
        return {
          loadedProducts: result
        }
      });
    },
  }
</script>
