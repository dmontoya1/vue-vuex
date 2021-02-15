import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Memes",
    memes: []
  },
  mutations: {
    setMemes(state, payLoad) {
      state.memes = payLoad;
    }
  },
  actions: {
    async getMemes({commit}){
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();
        commit("setMemes", result.data.memes);
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  },
  getters: {

  }
})
