<template>
  <div>
    <v-card elevation="0">
      <v-row dense>
        <v-col>
          <v-card-actions >
            <v-text-field label="Type what todo..." v-model="title" :rules="rules" hide-details="auto"></v-text-field>
            <v-btn text @click="submit">Add</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>

    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name:'AddTodo',
  data:() => ({
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    title:"",
  }),
  methods:{
    ...mapActions(['createTodo']),
    submit:function(){
      this.createTodo({title: this.title,})
        return this.title = ''
    }
  }
}
</script>