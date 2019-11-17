<template>
  <div class="posts">
    <h1>Edit Post</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="Title" v-model="title" />
      </div>
      <div>
        <textarea
          rows="2"
          cols="15"
          placeholder="Categories"
          v-model="categories"
        ></textarea>
      </div>
      <div>
        <textarea
          rows="3"
          cols="15"
          placeholder="Content"
          v-model="content"
        ></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "EditPost",
  data() {
    return {
      title: "",
      categories: "",
      content: ""
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      });
      this.title = response.data.title;
      this.categories = response.data.categories;
      this.content = response.data.content;
    },
    async updatePost() {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        categories: this.categories,
        content: this.content
      });
      this.$router.push({ name: "Posts" });
    }
  }
};
</script>

<style type="text/css">
.form input,
.form textarea {
  width: 480px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 16px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  width: 480px;
  border: none;
  cursor: pointer;
}
</style>