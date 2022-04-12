import Vuex from 'vuex'
import auth from './auth'
import categories from './categories'
import products from './products'
import cart from './cart'
import orders from './orders'
const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      categories,
      products,
      cart,
      orders
    }
  })
}

export default createStore
