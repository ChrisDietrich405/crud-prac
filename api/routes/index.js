const PostApp = require("../app/post.js");

module.exports = (app) => {
  //we are exporting the app parameter which is a parameter for an anoynmous function
  app.route("/api/posts").post(PostApp.create);
};