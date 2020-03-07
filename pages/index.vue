<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";
export default {
  components: {
    PostList
  },
  // data() {
  //   return {
  //     fetchedPosts: []
  //   };
  // },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    }
  },
};
</script>

<style>
</style>
