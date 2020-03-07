<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="onSubmit">
      <fieldset>
        <legend v-if="isUpdate">Kose Yazısı Düzenle</legend>
        <legend v-else>Yeni Köse Yazısı</legend>
        <div class="form-group">
          <label>Yazar Adı</label>
          <input
            v-model="fetchedPost.author"
            type="text"
            class="form-control"
            placeholder="Yazarın adını giriniz.."
          />
        </div>
        <div class="form-group">
          <label>Baslık</label>
          <input
            v-model="fetchedPost.title"
            type="text"
            class="form-control"
            placeholder="Yazının baslıgını giriniz.."
          />
        </div>
        <div class="form-group">
          <label>Alt Baslık</label>
          <input
            v-model="fetchedPost.subtitle"
            type="text"
            class="form-control"
            placeholder="Yazının alt baslıgını giriniz.."
          />
        </div>
        <div class="form-group">
          <label>Köse Yazısı</label>
          <textarea v-model="fetchedPost.text" class="form-control" rows="5"></textarea>
        </div>
        <button @click="$router.push('/admin')" class="btn btn-danger">İptal</button>
        <button type="submit" class="btn btn-primary">Kaydet</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchedPost = this.post
      ? this.post
      : {
          title: null,
          subtitle: null,
          author: null,
          text: null
        };
  },
  props: {
    isUpdate: {
      type: Boolean,
      required: false,
      default: false
    },
    post: {
      type: Object,
      required: false
    }
  },
  data(){
    return {
      fetchedPost : null
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.fetchedPost);
    }
  }
};
</script>