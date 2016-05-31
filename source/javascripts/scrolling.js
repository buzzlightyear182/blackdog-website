$(window).scroll(function(){
  w = Math.floor( $(window).scrollTop() );

  if(w <= $('#training').offset().top){
    $('.shape-pawprint-nav').css( 'fill', '#d0442c' ); //primary
    $('.shape-pawprint-nav:hover').css( 'fill', '#fae5b8' );
  }
  else if(w <= $('#sellingPoints').offset().top){
    $('.shape-pawprint-nav').css( 'fill', '#fae5b8' ); //light
    $('.shape-pawprint-nav:hover').css( 'fill', '#a49d47' );
  }else if(w <= $('#whereWeAre').offset().top){
    $('.shape-pawprint-nav').css( 'fill', '#a49d47' ); //secondary
    $('.shape-pawprint-nav:hover').css( 'fill', '#fae5b8' );
  }else if(w<=$('#latestNews').offset().top){
    $('.shape-pawprint-nav').css( 'fill', '#d0442c' ); //primary
    $('.shape-pawprint-nav:hover').css( 'fill', '#fae5b8' );
  }else if(w<=$('#learningZone').offset().top){
    $('.shape-pawprint-nav').css( 'fill', '#a49d47' ); //secondary
    $('.shape-pawprint-nav:hover').css( 'fill', '#fae5b8' );
  }else if(w<=$('#contactUs').offset().top){
    $('.shape-pawprint-nav').css( 'fill', '#d0442c' ); //primary
    $('.shape-pawprint-nav:hover').css( 'fill', '#fae5b8' );
  }else{
       $('.shape-pawprint-nav').css( 'fill', '#a49d47' );
  }
});