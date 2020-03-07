<template>
  <PostForm :is-update="true" :post="fetchedPost" @submit="updatePost($event)" />
</template>
<script>
import {DB_URL} from "@/private/keys"
import PostForm from "@/components/admin/PostForm";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    PostForm
  },
  asyncData(context) {
    return axios
      .get(
        DB_URL+"posts/" +
          context.params.postId +
          ".json"
      )
      .then(res => {
        return {
          fetchedPost: res.data
        };
      });
  },
  methods: {
    updatePost(editedPost) {
      this.$store.dispatch("updatePost",{...editedPost,id:this.$route.params.postId})
      .then(res=>{
        this.$router.push("/admin");
      })
    }
  }
};
</script>