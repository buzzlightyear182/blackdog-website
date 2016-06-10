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

  $('li.country').hover(
    function(){
    var cities =$(this).data('cities').split(',');
    for (var i = 0; i < cities.length; i++){
      var cityName = cities[i];
      console.log(cityName)
      var iconName = '.' + cityName + '-icon'
        $(iconName).removeClass('hidden').addClass('tada');
      }
    },
    function(){
      cities =$(this).data('cities').split(',');
      for (var i = 0; i < cities.length; i++){
        cityName = cities[i];
        iconName = '.' + cityName + '-icon'
        $(iconName).removeClass('tada').addClass('hidden');
      }
    }
  )
});