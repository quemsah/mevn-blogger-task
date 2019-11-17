import api from "../services/Api"
//    Module not found: Error: Can't resolve '@/services/Api' 
export default {
  fetchPosts() {
    return api().get("api/posts");
  },
  addNewPost(params) {
    return api().post("api/posts", params);
  },
  getPost(params) {
    return api().get(`api/posts/${params.id}`);
  },
  updatePost(params) {
    return api().put(`api/posts/${params.id}`, params);
  },
  deletePost(id) {
    return api().delete(`api/posts/${id}`);
  }
};
