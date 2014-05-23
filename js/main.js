$(function(){
  // Check the initial Poistion of  Sticky Header
  var landingPageMiddle = $('#aboutMe').offset().top * 0.50;
  var projectsPageOffset = $('#projects').offset().top

  // Effects for different sections on scroll
  $(window).scroll(function() {

    // Animate at middle of about me section
    if($(window).scrollTop() >= landingPageMiddle) {
      $('.aboutme-item').each(function() {

        var $this = $(this);

        $this.parent().queue(function(n) {
          $this.addClass('translateLeft');
          $this.animate({opacity:1}, 100, n);
        });

      }).parent().promise().done();
    } 

    // Animate arrows in when you reach projects page
    // if( $(window).scrollTop() >= projectsPageOffset) {
    //   $('.project-arrows').stop().animate({opacity:1}, 400);
    //   console.log("THIS WAS HIT");
    // } else if($(window).scrollTop() < projectsPageOffset) {
    //   $('.project-arrows').stop().animate({opacity:0}, 400);
    // }
  }); 

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