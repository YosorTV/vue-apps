<template>
  <v-row no-gutters>
    <v-col class="ma-2 mx-auto" cols="8">
      <v-card class="d-flex" dark elevation="0">
        <v-card-actions>
          <v-checkbox 
          large
          v-model="done" 
          :success="todo.completed" 
          color="success" />
        </v-card-actions>
        <v-card-text>
          <v-text-field :readonly="edit" :value="todoValue" />
        </v-card-text>
        <v-card-actions>
        <v-btn @click="onEdit()" class="mx-2" depressed color="blue-grey darken-1">
          <v-icon aria-hidden="false">mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="onDelete(todo)" depressed color="error">
          <v-icon aria-hidden="false">mdi-delete</v-icon>
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name:'todo',
  props:{
    todo:{
      type:Object,
      required:true
    }
  },
  data:()=>({
    done:false,
    edit:true,
  }),
  methods:{
    onDelete:function(){
      return this.$emit('onDelete')
    },
    onEdit:function(){
      this.edit = !this.edit
    }
  },
  computed:{
    todoValue:function(){
      return this.todo.title.charAt(0).toUpperCase() + this.todo.title.slice(1);
    }
  }
}
</script>

