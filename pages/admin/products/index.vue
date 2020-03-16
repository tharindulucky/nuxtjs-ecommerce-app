<template>
  <div class="card">
    <div class="card-header">Your Products <nuxt-link :to="'/admin/products/create'" :class="'btn btn-primary btn-sm float-lg-right'">Add new</nuxt-link> </div>
    <div class="card-body">

      <div class="list-group">

        <div class="list-group-item">
          <nuxt-link :to="'/admin/products/1'" class="links-no-style">
            <div class="row">
              <div class="col-md-10">
                AAAAAAAAAa
              </div>
              <div class="col-md-2">
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
    layout: 'admin'
  }
</script>
