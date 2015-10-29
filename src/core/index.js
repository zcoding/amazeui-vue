var rAF = window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          function(callback) {
            return window.setTimeout(callback, 1000 / 60);
          };

var cFA = window.cancelAnimationFrame ||
          window.webkitCancelAnimationFrame ||
          window.mozCancelAnimationFrame ||
          window.oCancelAnimationFrame ||
          function(id) {
            window.clearTimeout(id);
          };

var support = exports.support = {};

var element = document.body || document.documentElement;

// support transition check
support.transition = false;
var transEndEventNames = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend',
  transition: 'transitionend'
};
for (var name in transEndEventNames) {
  if (element.style[name] !== undefined) {
    support.transition = {end: transEndEventNames[name]};
    break;
  }
}
// support animation check
support.animation = false;
var animEndEventNames = {
  WebkitAnimation: 'webkitAnimationEnd',
  MozAnimation: 'animationend',
  OAnimation: 'oAnimationEnd oanimationend',
  animation: 'animationend'
};
for (var name in animEndEventNames) {
  if (element.style[name] !== undefined) {
    support.animation = {end: animEndEventNames[name]};
    break;
  }
}
