var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  morgan = require('morgan');
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(morgan(':method :url :status :res[content-length] - :response-time ms (Player 1 Salta)'));


app.post('/test', function (req, res) {
    if (req.body.jump == 1) 
    {
        res.send("Player 1 Salta");
    }
    
});

app.listen(port);


console.log('API server started on: ' + port);