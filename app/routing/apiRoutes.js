// dependencies
var path = require("path");

// routes
app.get("/api/friends", function (req, res){
    res.sendFile(path.join(__dirname, "../data/friends.js"));
});

