// dependencies
var express = require("express");
var app = express();
// define port
var PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// direct to routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// start server
app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});