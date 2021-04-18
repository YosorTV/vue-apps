<template>
  <v-row no-gutters>
    <v-col :cols="newPostCols">
    <v-card class="mt-4" color="grey darken-3" tile>
    <v-toolbar color="light-blue lighten-2">
      <v-toolbar-title>Send to us your post</v-toolbar-title>
    </v-toolbar>
    <v-card-text>

    <v-text-field 
      v-model="title" 
      :error-messages="titleErrors" 
      label="Title" 
      required
      :rules="rules"
      @input="$v.title.$touch()" 
      @blur="$v.title.$touch()">
    </v-text-field>
    
    <v-textarea
      class="mt-2"
      auto-grow
      v-model="body" 
      :error-messages="bodyErrors" 
      label="Description" 
      required
      :rules="rules"
      @input="$v.body.$touch()"
      @blur="$v.body.$touch()">
    </v-textarea>

    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="submit"
        color="success"
        depressed
      >
        Post
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';

  export default {
    name: 'NewPost',
    mixins: [validationMixin],
    data:() => ({
      title: '',
      body: '',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
    validations: {
      title: { required },
      body: { required },
    },
    computed:{
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.required && errors.push('Title is required.')
        return errors
      },
      bodyErrors () {
        const errors = []
        if (!this.$v.body.$dirty) return errors
        !this.$v.body.required && errors.push('Description is required')
        return errors
      },
      newPostCols:function(){
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': 
          return 12
        case 'sm': 
          return 6
        case 'md': 
          return 4
        case 'lg': 
        case 'xl': 
          return 3
      }
    },
    newPostHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm': 
        case 'md':
        case 'lg': 
        case 'xl': 
          return 210
      }
    },
    },
    methods:{
      ...mapActions(['createPost']),
      submit:function(){
        this.createPost({
          title: this.title,
          body: this.body,
        })

        this.title = ''
        this.body = ''
        
      }
    }
  }
</script>

<style lang="scss">

</style>