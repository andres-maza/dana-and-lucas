$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  var pinMainNav = new ScrollMagic.Scene({
        triggerElement: '#main-nav',
        triggerHook: 0
    })
    .setPin("#main-nav") // pins the element for the the scene's duration
    .setClassToggle('#main-nav', 'is-fixed')
    .addTo(controller); // assign the scene to the controller

  $('.fade-in').each(function() {
    var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, ease:Linear.easeNone});

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8
    })
    .setTween(tween)
    .reverse(false)
    .addTo(controller);
  })
})
