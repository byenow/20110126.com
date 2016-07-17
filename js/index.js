var countAnimation = (function () {

  // Returns a random integer between min (included) and max (excluded)
  // Using Math.round() will give you a non-uniform distribution!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function foo() {
    var _countList = document.querySelectorAll('[data-count]')

    var queueCountAnimation0 = new countUp(_countList[0], 0, 2011, 0, 3)
    var queueCountAnimation1 = new countUp(_countList[1], 0, 01, 0, 3)
    var queueCountAnimation2 = new countUp(_countList[2], 0, 26, 0, 6)
    var queueCountAnimation3 = new countUp(_countList[3], 0, 2016, 0, 3)
    var queueCountAnimation4 = new countUp(_countList[4], 0, 07, 0, 3)
    var queueCountAnimation5 = new countUp(_countList[5], 0, 18, 0, 6)
    queueCountAnimation0.start()
    queueCountAnimation1.start()
    queueCountAnimation2.start()
    queueCountAnimation3.start()
    queueCountAnimation4.start()
    queueCountAnimation5.start()
  }

  return {
    startCount: foo
  };

})();

// http://imakewebthings.com/waypoints/
// https://github.com/imakewebthings/waypoints
var waypoint = new Waypoint({
  element: document.getElementById('p1'),
  handler: function(direction) {
    if (direction === 'down') {
      countAnimation.startCount()
    }
  },
  offset: '50%'
})

// https://github.com/cferdinandi/smooth-scroll
smoothScroll.init();
