$('.random-generator').on('click', function() {
  var recipes = ["#recipe1", "#recipe2", "#recipe3", "#recipe4"];
  var random = recipes[Math.floor(Math.random()*recipes.length)];
  $("#recipe1").slideDown("slow", function() {
    // Animation complete.
  });
});

$('.nav-link dropdown-toggle').on('click', function () {
  $('.dropdown-menu').dropdown('toggle')
});
