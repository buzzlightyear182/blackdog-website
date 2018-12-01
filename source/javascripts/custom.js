$(function() {
  new WOW().init();

  $('.carousel-inner').ready(function(){
    $('.carousel-item:eq(0)').addClass('active');
  })

  $('.carousel').carousel()

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

  // $("#contactForm").validate({
  //   submitHandler: function(form) {
  //     $.ajax({
  //       url: "//crm.na1.insightly.com/WebToLead/Create",
  //       method: "POST",
  //       data: {
  //         formID: $(form).find("input[name='formId']").val(),
  //         firstname: $(form).find("input[name='FirstName']").val(),
  //         lastname: $(form).find("input[name='LastName']").val(),
  //         salutation: $(form).find("input[name='Salutation']").val(),
  //         organization: $(form).find("input[name='OrganizationName']").val(),
  //         email: $(form).find("input[name='email']").val(),
  //         subject: $(form).find("input[name='subject']").val(),
  //         country: $(form).find("input[name='country']").val(),
  //         message: $(form).find("textarea[name='message']").val()
  //       },
  //       dataType: "json",
  //       success: function() {
  //         $("#submitSuccess").fadeIn();
  //         // $("#contactForm").fadeOut();
  //       },
  //       error: function() {
  //         $("#submitErrors").fadeIn();
  //       }
  //     });
  //   }
  // });
});