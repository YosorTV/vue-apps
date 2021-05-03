<template>
  <div>
    <v-card elevation="0">
      <v-row dense>
        <v-col :cols="newTodoCols" class="mx-auto">
          <v-card-actions >
            <v-text-field label="Type what todo..." v-model="title" hide-details="auto"></v-text-field>
            <v-btn text @click="onCreate">Add</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>

    </v-card>
  </div>
</template>

<script>
export default {
  name:'AddTodo',
  data(){
    return {
      title:"",
    }
  },
  methods:{
    onCreate(){
      this.$emit('onCreate', {title:this.title})
      this.title = ''
    }
  },
  computed:{
    newTodoCols:function(){
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