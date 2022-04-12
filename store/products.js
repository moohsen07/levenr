const state = {
  products: [],
  product: {}
}

const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_PRODUCT(state, payload) {
    state.product = payload
  }
}

const actions = {
  async getProducts({
    commit
  }) {
    const res = await this.$axios.$api('PRODUCT_ENDPOINT')
    const data = await res.data
    commit('SET_PRODUCTS', data)
  },
  async getProduct({
    commit
  }, payload) {
    const res = await this.$axios.$api('PRODUCT_ENDPOINT' + payload)
    const data = await res.data
    commit('SET_PRODUCT', data)
  }
}

const getters = {
  products(state) {
    return state.products
  },
  product(state) {
    return state.product
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
