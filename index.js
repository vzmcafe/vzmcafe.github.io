<script>
// When the button is clicked, pick a random recipe and show that recipe in alert box
// Later on when we put the different recipes in different classes I'll change it to choose a random recipe class and go to that class
var recipes = ["recipe1", "recipe2", "recipe3", "recipe4"];

$(".random-generator").on(`click`(function(){
  alert(recipes[Math.floor(Math.random()*recipes.length)]);
});

</script>
