$(".random-generator").click(function() {
  var recipes = ["recipe1", "recipe2", "recipe3", "recipe4"];
  var random = recipes[Math.floor(Math.random()*recipes.length)];
  alert(random)
});

$('.nav-link dropdown-toggle').on('click', function () {
  $('.dropdown-menu').dropdown('toggle')
});
