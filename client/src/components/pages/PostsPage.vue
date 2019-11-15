
<template>
  <div class="posts">
    <h1>Posts</h1>This file will list all the posts.
    <div v-for="post in posts">
      <p>
        <span>
          <b>{{ post.title }}</b>
        </span>
        <br />
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "PostsPage",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data.posts;
      console.log(this.posts);
    },
    async removePost(value) {
      await PostsService.deletePost(value);
      this.getPosts();
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>
