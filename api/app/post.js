
class PostApp {
    create(req, res) {
      console.log(req.body);
      res.send("Created a new post successfully").sendStatus(200);
    }
  }
  
  module.exports = new PostApp();