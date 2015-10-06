var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

var validBlogs = [];

function filterByTitle(obj) {
  if ('title' in obj && typeof(obj.title) === 'string') {
    validBlogs.push(obj);
    return true;
  } else {
    return false;
  }
}

/* GET All Blogs */
router.get('/', function(req, res) {
  mongoose.model('Blog').find({}, function(err, blogs){
    if(err){
      return console.log(err);
    } else {
      var arrByTitle = blogs.filter(filterByTitle);
      res.json(arrByTitle);
    }
  });
});
router.post('/', function(req, res){
    var title = req.body.title;
    var body = req.body.body;

    mongoose.model('Blog').create({
      title: title,
      body: body
    }, function(err, blog){
      if(err){
        res.send("houston we have a problem")
      } else{
        console.log("New blog named " + blog + "created!");
        res.send(blog);
      }
    });
  });


router.delete('/:id', function(req, res){
  var id = req.params.id;

  mongoose.model('Blog').remove({_id:id}, function(err, post){
    if(err){
      console.log('Error', err)
      res.status(500).send('Error')
      return
    }

    console.log('Post with id ', id, ' was deleted')
    res.status(200).send({id:id})


  })

})

module.exports = router;
