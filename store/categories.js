const state = {
  categories: [],
  category: {}
}

const mutations = {
  SET_CATEGORIS(state, payload) {
    state.categories = payload
  },
  CATEGORY(state, payload) {
    state.category = payload
  }

}

const actions = {
  async getCategories({
    commit
  }) {
    const res = await this.$axios.get('GATEFORIES_ENDPOINT')
    const data = await res.data
    commit('SET_CATEGORIS', data)
  },
  async category({
    commit
  }) {
    const res = await this.$axios.get('CATEGORY_ENDPOINT')
    const data = await res.data
    commit('CATEGORY', data)
  },
}

const getters = {
  categoriesLinks(state) {
    return state.categories.map(cat => {
      return {
        name: cat.name,
        id: cat.id,
        img: cat.image
      }
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
