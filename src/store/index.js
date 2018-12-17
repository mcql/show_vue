import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login_to_regist: false,
  leftShow: false,
  showDialog: false
}

const mutations = {
  changeLoginRegist(state, status) {
    state.login_to_regist = status
  },
  changeLeftShow(state, status) {
    state.leftShow = status
  },
  changeDialog(state, status){
    state.showDialog = status
  }
}

const store = new Vuex.Store({
  state: state,
  mutations: mutations
})

export default store
