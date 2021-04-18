import api from '../api/index';

export default {
  state:{
    posts:[],
  },
  getters:{
    getPosts:function({ posts }){
      return posts;
    }
  },
  mutations:{
    GET_POSTS:function(state, payload){
      return state.posts = payload;
    },
    CREATE_POST:function(state, payload){
      return state.posts.unshift(payload)
    },
    DELETE_POST:function(state, payload){
      const post = state.posts.findIndex(item => item.id == payload.id);
        return state.posts.splice(post, 1);
    },
  },
  actions:{
    async fetchPosts({ commit }, limit){
      const { data } = await api.get(`posts?_limit=${limit}`)
        return commit('GET_POSTS', data);
    },
    async createPost({commit}, payload){
      await api.post('posts');
        return commit('CREATE_POST', payload)
    },
    async deletePost({commit}, payload){
      await api.delete(`posts/${payload.id}`);
        return commit('DELETE_POST', payload)
    }
  },
}