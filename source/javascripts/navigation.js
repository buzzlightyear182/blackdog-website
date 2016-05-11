//Scrolling effect
$(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
  menuRight = document.getElementById( 'cbp-spmenu-s2' ),
  // menuTop = document.getElementById( 'cbp-spmenu-s3' ),
  // menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
  showLeft = document.getElementById( 'showLeft' ),
  showRight = document.getElementById( 'showRight' ),
  // showTop = document.getElementById( 'showTop' ),
  // showBottom = document.getElementById( 'showBottom' ),
  showLeftPush = document.getElementById( 'showLeftPush' ),
  showRightPush = document.getElementById( 'showRightPush' ),
  closeMenu = document.getElementById('closeMenu'),
  body = document.body;

// showLeft.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( menuLeft, 'cbp-spmenu-open' );
//   disableOther( 'showLeft' );
// };
// showRight.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( menuRight, 'cbp-spmenu-open' );
//   disableOther( 'showRight' );
// };
// showTop.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( menuTop, 'cbp-spmenu-open' );
//   disableOther( 'showTop' );
// };
// showBottom.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( menuBottom, 'cbp-spmenu-open' );
//   disableOther( 'showBottom' );
// };
// showLeftPush.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( body, 'cbp-spmenu-push-toright' );
//   classie.toggle( menuLeft, 'cbp-spmenu-open' );
//   disableOther( 'showLeftPush' );
// };
showRightPush.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( body, 'cbp-spmenu-push-toleft' );
  classie.toggle( menuRight, 'cbp-spmenu-open' );
  // disableOther( 'showRightPush' );
};

closeMenu.onclick = function(){
  classie.toggle( body, 'cbp-spmenu-push-toleft' );
  classie.toggle( menuRight, 'cbp-spmenu-open' );
}

// function disableOther( button ) {
//   if( button !== 'showLeft' ) {
//       classie.toggle( showLeft, 'disabled' );
//   }
//   if( button !== 'showRight' ) {
//       classie.toggle( showRight, 'disabled' );
//   }
//   if( button !== 'showTop' ) {
//       classie.toggle( showTop, 'disabled' );
//   }
//   if( button !== 'showBottom' ) {
//       classie.toggle( showBottom, 'disabled' );
//   }
//   if( button !== 'showLeftPush' ) {
//       classie.toggle( showLeftPush, 'disabled' );
//   }
//   if( button !== 'showRightPush' ) {
//       classie.toggle( showRightPush, 'disabled' );
//   }
// }