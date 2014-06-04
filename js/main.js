$(function(){
  // Check the initial Poistion of  Sticky Header
  var landingPageMiddle = $('#aboutMe').offset().top * 0.50;
  var projectsPageOffset = $('#projects').offset().top

  $('#aboutMe').waypoint(function(direction) {
    console.log('this was hit');
    if(direction === "down") {
      $('.aboutme-item').each(function() {

        var $this = $(this);

        $this.parent().queue(function(n) {
          $this.addClass('translateLeft');
          $this.animate({opacity:1}, 100, n);
        });

      }).parent().promise().done();
    }
  }, {offset: '50%'});

  var projectCounter = 1;

  $('#project-right-arrow').click(function() {
    projectCounter++;
    if(projectCounter == 5) {
      projectCounter = 1;
    }
    $('#inner-display').removeClass();
    $('#inner-display').addClass('project' + projectCounter.toString());
  });

  $('#project-left-arrow').click(function() {
    projectCounter--;
    if(projectCounter == 0) {
      projectCounter = 4;
    }
    $('#inner-display').removeClass();
    $('#inner-display').addClass('project' + projectCounter.toString());
  });

});