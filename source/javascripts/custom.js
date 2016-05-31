$('.carousel-inner').ready(function(){
  $('.carousel-item:eq(1)').removeClass('active');
  console.log("removed")
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