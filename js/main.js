'use strict'
var ballSize = 100
function onBallClick(elBall) {
    ballSize = getRandomInt(20,61)
    // if (ballSize > 400) {
    //     ballSize = 100
    // }
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerHTML = ballSize
}