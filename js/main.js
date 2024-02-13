'use strict'
var ballSize = 100
function onBallClick(elBall) {
    ballSize = ballSize + 50
    if (ballSize > 400) {
        ballSize = 100
    }
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerHTML = ballSize
}