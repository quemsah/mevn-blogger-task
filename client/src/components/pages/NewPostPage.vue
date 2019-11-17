<template>
  <div class="posts">
    <h1>Add Post</h1>
    <div class="form">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          v-model="post.title"
        />
      </div>
      <div>
        <textarea
          rows="2"
          cols="15"
          placeholder="Categories"
          v-model="post.categories"
        ></textarea>
      </div>
      <div>
        <textarea
          rows="3"
          cols="15"
          placeholder="Content"
          v-model="post.content"
        ></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="addPost">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "NewPostPage",
  data() {
    return {
      post: {
        title: "",
        categories: "",
        content: ""
      }
    };
  },
  methods: {
    async addPost() {
      if (
        this.post.title !== "" &&
        this.post.categories !== "" &&
        this.post.content !== ""
      ) {
        await PostsService.addNewPost({
          title: this.post.title,
          categories: this.post.categories,
          content: this.post.content
        });
        this.$router.push({ name: "Posts" });
      } else {
        alert("Empty fields!");
      }
    },
    goBack() {
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
