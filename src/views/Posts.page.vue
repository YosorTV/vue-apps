<template>
  <div>
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'

export default {
  name: 'posts-page',
  components: {Posts}
}
</script>
