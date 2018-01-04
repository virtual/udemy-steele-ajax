let express = require('express');
let app = express();
let bodyParser = require('body-parser'); 

app.use(express.static('public'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res, next) {
  res.redirect('random.html');
});

app.get("/random", function(req, res, next) {
  res.sendfile('public/random.html');
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log('App is listening on ' + port);
});