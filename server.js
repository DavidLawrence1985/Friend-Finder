var path = require("path");
var express = require("express");


var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, "app/public/")))



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlroutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  