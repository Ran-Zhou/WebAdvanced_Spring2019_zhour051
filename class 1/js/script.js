console.log("Hello");

var GrreetingContainer;

GreetingContainer = "This is a new Variable";

console.log(GreetingContainer);

// alert('Greetings: ' + GreetingContainer);
document.write('<p>' + GreetingContainer + '</p>');

var attributes = ["Black", "Green", "Blue"];



var arrange = document.getElementsByClassName('msg');

for (var i = 0; i < arrange.length; i++){
  arrange[i].innerHTML = "new message";

}
