<template>
<v-card elevation="0" dark>
  <v-card-text>
    <h1 :class="title">CRUD BASED ON JPH API</h1>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name:"home-page",
  computed:{
    title: function () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return 'display-1 d-flex justify-center white--text'
          case 'sm':
          case 'md':
            return 'display-2 d-flex justify-center white--text'
          case 'lg':
            return 'display-3 d-flex justify-center white--text'
          case 'xl':
            return 'display-4 d-flex justify-center white--text'
        }
      },
  }
}
</script>

<style lang="scss" scoped>
  h1{
    margin-top: 20%;
  }
</style>
