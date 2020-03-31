// dependencies
var express = require("express");
var path = require("path");
var app = express();
// define port
var PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// direct to routes
// require("app/routing/apiRoutes.js")(app);
// require("app/routing/htmlRoutes.js")(app);

// start server
app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});