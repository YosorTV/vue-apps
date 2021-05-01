<template>
  <v-sheet dark>
    <v-container fill-height fluid class="pt-2">
      <!-- Search-start -->
      <v-row no-gutters class="align-center px-4">
        <v-col :cols="searchCols" :justify="searchPos">
          <v-text-field v-model="search" label="Search"></v-text-field>
        </v-col>
        <!-- Search-end -->
        <v-spacer></v-spacer>
          <!-- New-post-start -->
        <v-col class="d-flex justify-end">
          <v-dialog transition="slide-y-transition" max-width="600" dark>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on" @click="openModal=true">
                <v-icon>
                  mdi-note-plus
                </v-icon>
              </v-btn>
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark>Send to us your new post</v-toolbar>
                <new-post :status="dialog" @onCreate="onCreatePost" v-if="openModal" />
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
      <!-- New-post-end -->
      <!-- Posts-start -->
      <v-row dense class="mt-4">
        <v-col :cols="postCols" v-for="(post) in posts" :key="post.id">
          <Post :post="post" @onDelete="onDeletePost(post)" />
        </v-col>
      </v-row>
      <!-- Posts-end -->
      <!-- Pagination-start -->
      <v-row>
        <v-col>
          <v-pagination :total-visible="5" :length="10" v-model="page" class="my-4" @input="onSetPage" />
        </v-col>
      </v-row>
    <!-- Pagination-end -->
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
    data(){
      return{
      search: '',
      openModal: false,
      page:1,
      limit:8
      }
    },
    async mounted() {
      await this.fetchPosts({page: this.page, limit:this.limit});
    },
    computed: {
      ...mapGetters(['getPosts']),
      posts: function () {
        return this.getPosts.filter(({title}) => title.toLowerCase().includes(this.search.toLowerCase()))
      },

      postPages:function(){
        return this.getPosts.length
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
            return 9
          case 'sm':
          case 'md':
            return 8
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
      ...mapActions(['fetchPosts','deletePost', 'createPost']),

      onOpenModal: function () {
        return this.openModal = !this.openModal
      },
      
      onCreatePost:function(payload){
        this.createPost(payload)
      },
      
      onSetPage(page){
        this.fetchPosts({page, limit:this.limit});
      },
      
      onDeletePost: function (post) {
        this.deletePost(post)
      },
    },
  }
</script>

<style lang="scss" scoped>
.custom{
  flex: 1;
}

</style>