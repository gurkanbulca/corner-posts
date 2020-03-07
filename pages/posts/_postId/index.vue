<template>
  <PostDetail :post="fetchedPost" />
</template>
<script>
import {DB_URL} from "@/private/keys"
import PostDetail from "@/components/post/PostDetail";
import axios from "axios"
export default {
  components: {
    PostDetail
  },
  asyncData(context){
    return axios.get(DB_URL+"posts/"+context.params.postId+".json")
      .then(res=>{
        return {
          fetchedPost : res.data
        }
      })

  }
};
</script>