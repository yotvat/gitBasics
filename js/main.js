'use strict'
var ballSize = 100
var maxDiameter = 200
function onBallClick(elBall) {
    var randColor = getRandomColor()
    ballSize = getRandomInt(80,230)
    if (ballSize > maxDiameter) {
        ballSize = 100
    }
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerHTML = ballSize
    elBall.style.backgroundColor = randColor
}