$(function(){(new WOW).init(),$(".carousel-inner").ready(function(){$(".carousel-item:eq(0)").addClass("active")}),$(".carousel").carousel(),$('[data-toggle="tooltip"]').tooltip(),$("li.country").hover(function(){for(var a=$(this).data("cities").split(","),e=0;e<a.length;e++){var t=a[e];console.log(t);var n="."+t+"-icon";$(n).removeClass("hidden").addClass("tada")}},function(){cities=$(this).data("cities").split(",");for(var a=0;a<cities.length;a++)cityName=cities[a],iconName="."+cityName+"-icon",$(iconName).removeClass("tada").addClass("hidden")}),$("#contactForm").validate({submitHandler:function(a){$.ajax({url:"//formspree.io/topdog@blackdog-consultants.com",method:"POST",data:{name:$(a).find("input[name='name']").val(),_replyto:$(a).find("input[name='_replyto']").val(),subject:$(a).find("input[name='_subject']").val(),country:$(a).find("input[name='_country']").val(),company:$(a).find("input[name='_company']").val(),message:$(a).find("textarea[name='message']").val()},dataType:"json",success:function(){$("#submitSuccess").fadeIn()},error:function(){$("#submitErrors").fadeIn()}})}})});