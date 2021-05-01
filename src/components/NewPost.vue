<template>
  <v-row no-gutters>
    <v-col class="pa-4">
    <v-text-field 
      v-model="title" 
      :error-messages="titleErrors" 
      label="Title" 
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
      :rules="rules"
      @input="$v.body.$touch()"
      @blur="$v.body.$touch()">
    </v-textarea>
    
    <v-card-actions class="d-flex justify-space-between mt-4">
      <v-btn
        @click="onCreate"
        color="success"
      >
      <v-icon>
          mdi-share
        </v-icon>
      </v-btn>
      <v-btn color="red darken-3" @click="status.value = false">
        <v-icon>
          mdi-close-box
        </v-icon>
      </v-btn>
    </v-card-actions>
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
    props:{
      status:{
        type:Object
      }
    },
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
      onCreate: function(){
        this.$emit('onCreate', {title:this.title, body:this.body})
        this.status.value = false
        this.title = ''
        this.body = ''
      }
    }
  }
</script>

<style lang="scss">

</style>