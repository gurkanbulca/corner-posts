<template>
  <div class="card mr-3 mb-3 card-success" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{post.subtitle}}</h6>
      <p class="card-text">-{{post.author}}</p>
      <div class="admin-button-container" v-if="isAdmin">
        <a
          href="#"
          @click.prevent="$router.push('/admin/'+post.id)"
          class="btn btn-outline-warning btn-sm"
        >Düzenle</a>
        <a href="#" class="btn btn-outline-danger btn-sm" @click.prevent="removePost">Sil</a>
      </div>
      <a
        href="#"
        @click.prevent="$router.push('/posts/'+post.id)"
        class="btn btn-outline-info btn-sm"
        v-else
      >Görüntüle</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAdmin: {
      required: true,
      type: Boolean
    },
    post: {
      required: true,
      type: Object
    }
  },
  methods:{
    removePost(){
      this.$store.dispatch("removePost",this.post.id)
    }
  }
};
</script>

<style>
</style>