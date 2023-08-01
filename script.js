// method 1 using attr()
$("#title").attr("class", "attr-method");

// method 2 using prop()
$("#title").prop("class", "prop-method");
// This will add the class "new-class" to the element with the ID "title".

// You can also chain multiple class names together using the += operator amd attr

$("#title").attr("class", function(i, origValue){
   return origValue + " attr-class";
});