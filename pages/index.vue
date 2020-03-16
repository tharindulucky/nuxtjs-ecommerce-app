<template>
  <div class="home-page">

    <main class="main-area">

      <center>
        <div class="centered">

          <br><br>

          <div class="row">
            <div class="col-md-12">
              <div class="site-logo"></div>
            </div>
          </div>


          <div class="row">
            <div class="col-md-12">
              <input type="text" class="form-control">
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-md-3">

            </div>
            <div class="col-md-3">
              <button type="submit" class="form-control btn btn-warning aduvta-btn">Search</button>
            </div>
            <br><br>
            <div class="col-md-3">
              <nuxt-link :to="'/products'" class="form-control btn btn-warning aduvta-btn">All Products</nuxt-link>
            </div>
            <div class="col-md-3">

            </div>
          </div>

        </div>
      </center>

    </main>
  </div>
</template>

<style scoped>
.site-logo{
  width: 380px;
  height: 100px;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center center;
  background: url('~assets/images/coverlogo.png');
}

.aduvta-btn{
  background: #f89829;
  border-color: #f89829;
  color: #fff;
}

</style>
