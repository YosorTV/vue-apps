import api from '../api/index';

export default{
  state:{
    todos:[],
  },
  getters:{
    getTodos:function({ todos }){
      return todos
    }
  },
  mutations:{
    GET_TODOS:function(state, payload){
      return state.todos = payload
    },
    CREATE_TODO:function(state, payload){
      return state.todos.unshift(payload)
    },
    EDIT_TODO:function(state, payload){
      return state.todos.map((todo => (todo.id === payload.id ? payload : todo)))
    },
    DELETE_TODO:function(state, payload){
      const todo = state.todos.map(todo => todo.id == payload.id);
        return state.todos.splice(todo, 1);
    },
  },
  actions:{
    async fetchTodos({ commit }, limit){
      const { data } = await api.get(`todos?_limit=${limit}`)
        return commit('GET_TODOS', data)
    },
    async createTodo({commit}, payload){
      await api.post('todos')
        return commit('CREATE_TODO', payload)
    },
    async deleteTodo({commit}, payload){
      await api.delete(`todos/${payload.id}`);
        return commit('DELETE_TODO', payload)
    },
    async editTodo({commit}, payload){
      await api.put('todos')
        return commit('EDIT_TODO', payload)
    }
  }
}