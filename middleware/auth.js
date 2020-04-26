export default function (ctx) {
  console.log("Auth");
  if(!ctx.store.getters.isAuthenticated){
    ctx.redirect("/login");
  }
}
