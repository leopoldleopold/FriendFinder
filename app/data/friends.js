$(document).ready(function(){
var friends = [];
    
$("#getanswer").on("click", function() {
    event.preventDefault();
    var friend = {
        name: $("#name").val().trim(),
        photo: $("#email").val().trim(),
        score: [$("#q").val().trim()]
    }
    console.log(friend);
    friends.push(friend);
    console.log(friends);
});



});