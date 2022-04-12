const state = {
  user: null,
  userInfo: {
    // name: 'ahmed'
  }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  USER_INFO(state, payload) {
    state.userInfo = payload
  }
}

const actions = {
  async auth({
    commit
  }, payload) {
    const mode = payload.mode
    let url = 'API_SIGNUP_ENDPOINT'

    if (mode == 'login') {
      url = 'API-LOGIN_ENDPOINT'
    }
    const res = await this.$axios.$post(url, payload.user)
    const data = await res.data

    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.id)
    commit('SET_USER', data)
  },
  async login({
    dispatch
  }, payload) {
    return dispatch('auth', {
      userData: payload,
      mode: 'login'
    })
  },
  async signup({
    dispatch
  }, payload) {
    return dispatch('auth', {
      userData: payload,
      mode: 'signup'
    })
  },
  autoLogin({
    commit
  }) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    if (token && userId) {
      axios.get('userId').then(res => {
        commit('SET_USER', res.data)
      })
    }
  },

  logout({
    commit
  }) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    commit('SET_USER', {})
  },
  userInfo({
    commit
  }, payload) {
    commit('USER_INFO', payload)
  }
}

const getters = {
  user(state) {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
