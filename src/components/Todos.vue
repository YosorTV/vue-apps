<template>
  <v-sheet dark>
    <v-container fluid fill-height>
      <v-row dense>
        <v-col>
          <AddTodo @onCreate="pushTodo" />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="pa-2">
          <Todo 
            v-for="(todo) in todos" 
            :todo="todo" 
            :key="todo.id"
            @onSave="saveTodo(todo)"
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
  data(){
    return{
      page:1,
      limit:10
    }
  },
  created(){
    this.fetchTodos({page:this.page, limit:this.limit})
  },
  methods:{
    ...mapActions(['fetchTodos', 'deleteTodo', 'editTodo', 'createTodo']),
    
    pushTodo:function(todo){
      this.createTodo(todo)
    },
    removeTodo:function(todo){
      return this.deleteTodo(todo)
    },
    saveTodo:function(todo){
      return this.editTodo(todo)
    }
  },
  computed:{
    ...mapGetters(['getTodos']),
    todos:function(){
      return this.getTodos
    },
  },
}
</script>