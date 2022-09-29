// import axios from "axios";

// export const state = () => ({
//   loadedPosts: []
// });

// export const mutations = {
//   setPosts(state, posts){
//     state.loadedPosts = posts;
//   }
// };

// export const actions = {
//   async nuxtServerInit(vuexContext, posts){
//     let data = await this.$axios.get('https://jsonplaceholder.typicode.com/todos')
//     posts = data.data
//     vuexContext.commit("setPosts",posts)
//   }
// }

// export const getters = {
//   //นำ state ไปใช้งาน
//   getAllPosts(state){
//     return state.loadedPosts
//   }
// };
export const state = () => ({
  toolbarActions : [ 'My project', 'Home', 'About', 'Contact' ],
  loadedPosts: [],
  count: 0,
});

export const mutations = {
  setPosts(state, posts){
    state.loadedPosts = posts;
  },
  increment(state){
    state.count++
  }
};


export const actions = {
  async nuxtServerInit(vuexContext, posts){
    // let data = await this.$axios.get('https://jsonplaceholder.typicode.com/todos')
    // posts = data.data
    posts = toolbarActions
    vuexContext.commit("setPosts",posts)
  }
}

export const getters = {
  getAllPosts(state){
    return state.loadDatas
  }
};