$('.random-generator').on('click', function() {
  var recipes = ["Pasta bolognese", "Hamburger", "Soup", "A spoonful of Nutella"];
  var random = recipes[Math.floor(Math.random()*recipes.length)];
  alert(random);
});

$('.nav-link dropdown-toggle').on('click', function () {
  $('.dropdown-menu').dropdown('toggle')
});
