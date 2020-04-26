export default function (ctx) {
  console.log("Auth Inverse");
  if(ctx.store.getters.isAuthenticated){
    ctx.redirect("/admin");
  }
}
