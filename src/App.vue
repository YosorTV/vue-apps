<template>
  <v-app>
    <!-- sidebar-start -->
    <Navbar :pages="pages"/>
    <!-- sidebar-end -->
      <v-main>
        <router-view/>
      </v-main>
    <!-- footer-start -->
    <Footer/>
    <!-- footer-end -->
  </v-app>
</template>

<script>
import Navbar from '@/components/Ui/Navbar';
import Footer from '@/components/Ui/Footer';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components:{ Navbar, Footer },
  async mounted() {
    this.fetchPosts(12);
    this.fetchTodos(5);
  },
  data:() => ({
    pages:[
      { path:'/posts', name:'Posts' },
      { path:'/todos', name:'Todos' }
    ],
  }),
  methods:{
    ...mapActions(['fetchTodos', 'fetchPosts'])
  }
};
</script>

<style lang="scss" scoped>
  #app{
    background: #1e1e1e;
  }
</style>
