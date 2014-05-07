$(function(){
  // Check the initial Poistion of  Sticky Header
  var landingPageMiddle = $('#aboutMe').offset().top * 0.50;
  var landingPageBottom = $('#aboutMe').offset().top;

  $(window).scroll(function() {
    if($(window).scrollTop() < landingPageBottom) {
      $('#navbar').css('position', 'static');
      $('#navbar').css('margin-left', '0px');
      var opacity = $(window).scrollTop() / landingPageBottom;
      $('#navbar').css('opacity', opacity);
    } else {
      $('#navbar').css('position', 'fixed');
      $('#navbar').css('top', '5px');
      $('#navbar').css('opacity', '0.9');
    }

    if($(window).scrollTop() >= landingPageMiddle) {
      $('.aboutme-item').each(function() {

        var $this = $(this);

        $this.parent().queue(function(n) {
          $this.addClass('translateLeft');
          $this.animate({opacity:1}, 300, n);
        });

      }).parent().promise().done();
    } 
    // else if($(window).scrollTop() < landingPageMiddle ) {
    //   $('.hobby-item').css('opacity', '0');
    //   $('.hobby-item').removeClass('translateLeft');
    // }

  }); 

});