const state = {
  orders: null,
  tempOrders: null,
  filterType: null
}

const mutations = {
  SET_USER_ORDERS(state, payload) {
    state.orders = payload
    state.tempOrders = payload
  },
  FILTER_ORDERS(state, payload) {
    state.filterType = payload
  },
  SEARCH_ORDER(state, payload) {
    const searchValue = payload.toLowerCase()
    const orders = state.orders
    const searchedOrders = orders.filter((order) => {
      const orderId = '' + order.id
      return order.name.toLowerCase().match(searchValue) || orderId.match(searchValue)
    })
    state.tempOrders = searchedOrders
  }
}


const actions = {
  async getUserOrders({
    commit,
    rootState
  }) {
    const user = rootState.auth.user
    if (user == null) return
    const {
      id
    } = user
    const res = await this.$axios.$get(id + 'ORDERS_ENDPOINT')
    const data = await res.data
    commit('SET_USER_ORDERS', data)
  },
  filterOrders({
    commit
  }, payload) {
    commit('FILTER_ORDERS', payload)
  },
  searchOrder({
    commit
  }, payload) {
    commit('SEARCH_ORDER', payload)
  }
}


const getters = {
  orders(state) {
    const filterType = state.filterType
    return state.tempOrders.filter((order, _, orders) => {
      if (filterType == 'all' || !filterType) return orders
      return order.status == filterType
    })
  }

}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
