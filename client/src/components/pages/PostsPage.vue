<template>
  <div class="posts">
    <h1>Posts</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="newpost"
          >Add a new post</router-link
        >
        <br /><br />
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Categories</td>
          <td width="550">Content</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts">
          <td>{{ post.title }}</td>
          <td>{{ post.categories }}</td>
          <td>{{ post.content }}</td>
          <td align="center">
            <router-link
              v-bind:to="{ name: 'EditPost', params: { id: post._id } }"
              ><font-awesome-icon icon="edit"
            /></router-link>
            |
            <a href="#" @click="removePost(post._id)"
              ><font-awesome-icon icon="trash-alt"
            /></a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link"
        >Add a new post</router-link
      >
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

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

.newpost {
  font-size: 22px;
}

table th,
table tr {
  text-align: left;
}

table thead {
  background: #f2f2f2;
}

table tr td {
  padding: 10px;
}

table tr:nth-child(odd) {
  background: #f2f2f2;
}

table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}

a {
  color: #4d7ef7;
  text-decoration: none;
}

a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
}
</style>
