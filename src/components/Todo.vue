<template>
  <v-row no-gutters>
    <v-col class="ma-2 mx-auto" :cols="todoCols">
      <v-card class="d-flex" dark elevation="0">
        <v-card-actions>
          <v-checkbox 
          large
          :readonly="edit"
          v-model="todo.completed" 
          :color="todo.completed ? 'success' : 'primary' " />
        </v-card-actions>
        <v-card-text class="d-flex align-center pa-0 ma-0">
          <h3 v-if="edit">{{todo.title}}</h3>
          <v-text-field v-if="!edit" v-model="todo.title"/>
        </v-card-text>
        <v-card-actions>

        <v-btn @click="onEdit()" v-if="edit" class="mx-2" depressed color="blue-grey darken-1">
          <v-icon aria-hidden="false">mdi-pencil</v-icon>
        </v-btn>

        <v-btn @click="onSave()" v-if="!edit" class="mx-2" depressed color="success">
          <v-icon aria-hidden="false">mdi-check</v-icon>
        </v-btn>

        <v-btn @click="onDelete()" depressed color="error">
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
  data(){
    return{
      edit:true,
    }
  },
  methods:{
    onDelete:function(){
      return this.$emit('onDelete')
    },
    onEdit:function(){
      this.edit = !this.edit
    },
    onSave:function(){
      this.$emit('onSave')
      this.edit = true
    }
  },
  computed:{
    todoCols:function(){
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': 
          return 12
        case 'sm': 
          return 10
        case 'md': 
          return 8
        case 'lg': 
        case 'xl': 
          return 8
      }
    },
  }
}
</script>

