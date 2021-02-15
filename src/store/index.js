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
    async getMemes({commit}, params){
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();

        if(!params?.total) {
          commit("setMemes", result.data.memes);
        } else {
          const resultTemp = [];
          result.data.memes.forEach((meme, index) => {
            if (index < params.total) resultTemp.push(meme);
          });
          commit("setMemes", resultTemp);
        }
        
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
