'use strict'
var ballSize = 100
function onBallClick(elBall) {
    var randColor = getRandomColor()
    ballSize = getRandomInt(20,61)
    // if (ballSize > 400) {
    //     ballSize = 100
    // }
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerHTML = ballSize
    elBall.style.backgroundColor = randColor
}