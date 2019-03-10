// When the button is clicked, pick a random recipe and show that recipe in alert box
// Later on when we put the different recipes in different classes I'll change it to choose a random recipe class and go to that class
$(".random-generator").click(function() {
  var recipes = ["recipe1", "recipe2", "recipe3", "recipe4"];
  var random = recipes[Math.floor(Math.random()*recipes.length)];
  alert(random);
});

$('.nav-link dropdown-toggle').on('click', function () {
  $('.dropdown-menu').dropdown('toggle')
});
