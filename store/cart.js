const state = {
  cart: []
}

const mutations = {
  ADD_TO_CART(state, payload) {
    state.cart.push(payload)
  },
  CHANGE_QUANTITY(state, payload) {
    const index = state.cart.findIndex(item => item.id == payload.id)
    if (index == -1) return
    state.cart[index].quantity = payload
  },
  DELETE_FROM_CART(state, payload) {
    const index = state.cart.findIndex(item => item.id == payload.id)
    state.cart.splice(index, 1)
  }
}


const actions = {
  async addToCart({
    commit,
    state
  }, payload) {
    const index = state.cart.findIndex(item => item.id === payload.id)
    if (index == -1) {
      commit('ADD_TO_CART', payload)
      return {
        success: true,
        msg: 'product Added to the basket'
      }
    } else {
      return {
        success: false,
        msg: 'product already in the basket'
      }
    }
  },
  changeQuantity({
    commit
  }, payload) {
    commit('CHANGE_QUANTITY', payload)
  },
  async deleteFromCart({
    commit
  }, payload) {
    commit('DELETE_FROM_CART', payload)
  }
}


const getters = {
  cartLength(state) {
    return state.cart.length
  },
  cartList() {
    return state.cart
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
