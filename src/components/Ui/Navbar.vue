<template>
<div>
  <!-- header-start -->
  <v-toolbar dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-row>
      <v-toolbar-title class="title font-weight-light mx-auto">Vue Apps</v-toolbar-title>
    </v-row>
    <v-btn text tile to="/">
      Home
    </v-btn>
  </v-toolbar>
  <!-- header-end -->
  <!-- side-menu-start -->
  <v-navigation-drawer v-model="drawer" absolute temporary dark>
    <v-list nav dense>
      <v-list-item-group v-model="group">
        <!-- sidebar-link-start -->
      <v-list-item v-for="(page, index) in pages" :key="index" :to="{path: page.path}">
        
        <v-icon>
          {{icons.mdiMessageText}}
        </v-icon>

          <v-list-item-title class="ml-2" >{{page.name}}</v-list-item-title>
      </v-list-item>
        <!-- sidebar-link-end -->
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
    <!-- side-menu-end -->
  </div>
</template>

<script>
import { mdiMessageText } from "@mdi/js";

export default {
  name:"Navbar",
  props:{
    pages:{
      type:Array,
      required:true
    },
  },
  data:() => ({
    group:false,
    drawer:false,
    icons:{
      mdiMessageText
    }
  }),
}
</script>

<style lang="scss" scoped>
.navLink{
  margin-left: 0.5rem;
  width: 100%;
}
</style>