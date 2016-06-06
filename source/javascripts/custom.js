$(function() {
  new WOW().init();

  $('.carousel-inner').ready(function(){
    $('.carousel-item:eq(1)').removeClass('active');
  })

  $('.carousel').carousel({
    interval: 3000
  });

  $('.carousel-control.left').click(function() {
    $('#myCarousel').carousel('prev');
  });

  $('.carousel-control.right').click(function() {
    $('#myCarousel').carousel('next');
  });

  $('[data-toggle="tooltip"]').tooltip()

  $('li.manila').hover(
    function(){
    cityName = $(this)[0].className;
    iconName = '.' + cityName + '-icon'
      $(iconName).removeClass('hidden').addClass('tada');
    },
    function(){
      console.log(iconName);
      $(iconName).removeClass('tada').addClass('hidden');
    }
  )
});