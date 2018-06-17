$(document).ready(function(){
  var veight;
  var controller = new ScrollMagic.Controller();

  var pinMainNav = new ScrollMagic.Scene({
        triggerElement: '#main-nav',
        triggerHook: 0
    })
    .setPin("#main-nav") // pins the element for the the scene's duration
    .setClassToggle('#main-nav', 'is-fixed')
    .addTo(controller); // assign the scene to the controller

})
