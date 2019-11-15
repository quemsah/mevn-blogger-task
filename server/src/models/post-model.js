const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  categories: {
    type: String
  },
  content: {
    type: String
  }
});
const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;
