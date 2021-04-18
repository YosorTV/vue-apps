import Vue from 'vue'
import Vuex from 'vuex'
import posts from './postStore';
import todos from './todoStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { posts, todos }
})
