var app = express();
var path = require('path');

var port     = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port);
console.log("App listening on port " + port);