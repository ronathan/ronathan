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
          $this.animate({opacity:1}, 300, n);
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

});