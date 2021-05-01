<template>
  <v-sheet dark>
    <v-container fluid fill-height>
      <v-row dense>
        <v-col cols="3" class="mx-auto">
          <AddTodo />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="pa-2">
          <Todo 
            v-for="(todo) in todos" 
            :todo="todo" 
            :key="todo.id"
            @onEdit="editTodo(todo)"
            @onDelete="removeTodo(todo)"
            />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue';

export default {
  name:'Todos',
  components: {Todo, AddTodo},
  data:() => ({

  }),
  computed:{
    ...mapGetters(['getTodos']),
    todos:function(){
      return this.getTodos
    }
  },
  methods:{
    ...mapActions(['deleteTodo', 'editTodo']),
    removeTodo:function(todo){
      return this.deleteTodo(todo)
    },
    editTodo:function(todo){
      return this.editTodo(todo)
    }
  }
}
</script>