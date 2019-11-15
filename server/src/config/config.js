module.exports = {
  port: 8081,
  dbURL: "mongodb://localhost:27017/posts",
  dbOptions: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
};
