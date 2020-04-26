export default function (ctx) {
  console.log("Local Auth");
  ctx.store.dispatch('initAuth', ctx.req);
}
