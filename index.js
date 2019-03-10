$('.random-generator').on('click', function() {
  var recipes = ["recipe1", "recipe2", "recipe3", "recipe4"];
  var random = recipes[Math.floor(Math.random()*recipes.length)];
  alert(random)
});

$('.nav-link dropdown-toggle').on('click', function () {
  $('.dropdown-menu').dropdown('toggle')
});


        new fullpage('#fullpage', {
            anchors: ['page1', 'page2', 'page3', 'page4'],
            navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
            css3: true,
            scrollingSpeed: 1000,
            navigation: true,
            slidesNavigation: true,
            responsiveHeight: 330,
            dragAndMove: true,
            dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
            controlArrows: false
        });
