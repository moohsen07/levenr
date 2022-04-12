export default ({

  route,
  store,
  redirect
}) => {

  if (route.path === '/checkout/') {
    redirect('/checkout/cart')
  }

  const userInfo = !!Object.keys(store.state.auth.userInfo).length
  if (route.path == '/checkout/payment') {
    userInfo ? next() : redirect('/checkout/address')
  }

}
