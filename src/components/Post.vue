<template>
  <v-row dense>
    <v-col>
      <v-card
      class="d-flex flex-column"
      elevation="2"
      tile
      :height="height"
      color="grey darken-3" >
        <v-card-title>
          <h1 class="title text-capitalize">
            {{post.title}}
          </h1>
        </v-card-title>
      <v-row>
        <v-col cols="10">
          <v-card-text>
          <p class="body-2 text-capitalize text-justify">
            {{post.body}}
          </p>
        </v-card-text>
        </v-col>
      </v-row>
        <v-card-actions>
          <v-spacer />
          <v-btn bottom color="red darken-3 white--text" @click="onDelete(post)">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name:"Post",
  props:{
    post:{
      type:Object,
      required:true,
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
          case 'sm': return 370
          case 'md':
          case 'lg': 
          case 'xl': 
            return 350
      }
    },
  },
  methods:{
    onDelete:function(){
      return this.$emit('onDelete')
    },
  }
}
</script>

<style lang="scss" scoped>

</style>