<template>
  <v-sheet dark>
    <v-container fill-height fluid class="pt-2">
      <!-- Search-start -->
      <v-row no-gutters :justify="searchPos">
        <v-col :cols="searchCols">
          <v-text-field v-model="search" label="Search"></v-text-field>
        </v-col>
      </v-row>
      <!-- Search-end -->
      <!-- New-post-start -->
      <v-row no-gutters>
        <v-col cols="12">
          <v-btn @click="onOpenModal()" color="light-blue lighten-2 white--text">Add Post</v-btn>
          <v-fade-transition>
            <new-post v-if="openModal" />
          </v-fade-transition>
        </v-col>
      </v-row>
      <!-- New-post-end -->
      <!-- Posts-start -->
      <v-row dense class="mt-4 posts" >
        <v-col :cols="postCols" v-for="(post) in posts" :key="post.id">
          <Post :post="post" @onDelete="onDeletePost(post)" />
        </v-col>
      </v-row>
      <!-- Posts-end -->
    </v-container>
  </v-sheet>
</template>

<script>
  import Post from './Post.vue';
  import NewPost from './NewPost.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Posts',
    components: {Post,NewPost},
    data: () => ({
      search: '',
      openModal: false,
      page:1,
      limit:10
    }),

    computed: {
      ...mapGetters(['getPosts']),
      posts: function () {
        return this.getPosts.filter(({title}) => title.toLowerCase().includes(this.search.toLowerCase()))
      },
      
      postCols: function () {
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

      searchCols: function () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return 10
          case 'sm':
          case 'md':
            return 6
          case 'lg':
          case 'xl':
            return 3
        }
      },

      searchPos: function () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
          case 'md':
            return 'center'
        }
      }
    },
    methods: {
      ...mapActions(['deletePost']),

      onOpenModal: function () {
        return this.openModal = !this.openModal
      },
      
      onDeletePost: function (post) {
        this.deletePost(post)
      },
    },
  }
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>