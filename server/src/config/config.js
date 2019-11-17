module.exports = {
  port: 8081,
  dbURL: "mongodb+srv://dbus:dbus@cluster0-imy10.mongodb.net/test?retryWrites=true&w=majority",
  dbOptions: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
};
