<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center mt-5">
      <button
        @click.prevent="$router.push('/admin/new-post')"
        class="btn btn-dark"
      >Yeni Bir Yazı Ekle</button>
    </div>
    <PostList :is-admin="true" :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";
export default {
  layout: "admin",
  components: {
    PostList
  },
  computed:{
    fetchedPosts(){
      return this.$store.getters.getPosts;
    }
  },
  
};
</script>

<style>
</style>
