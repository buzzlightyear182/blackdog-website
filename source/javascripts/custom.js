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

  $("#contactForm").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/topdog@blackdog-consultants.com",
        method: "POST",
        data: {
          name: $(form).find("input[name='name']").val(),
          _replyto: $(form).find("input[name='_replyto']").val(),
          subject: $(form).find("input[name='_subject']").val(),
          country: $(form).find("input[name='_country']").val(),
          company: $(form).find("input[name='_company']").val(),
          message: $(form).find("textarea[name='message']").val()
        },
        dataType: "json",
        success: function() {
          $("#submit-success").fadeIn();
          $("#contact-form").fadeOut();
        },
        error: function() {
          $("#submit-errors").fadeIn();
        }
      });
    }
  )};
});