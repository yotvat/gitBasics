'use strict'
var ballSize = 100
var maxDiameter = 400
var elBall1 = document.querySelector('.ball')
var elBall2 = document.querySelector('.second-ball')
var elBall3 = document.querySelector('.third-ball')
var ball1Size = 100
var ball2Size = 100

function onBall1Click() {
    var randColor = getRandomColor()
    ball1Size = getRandomInt(80,401)
    if (ball1Size > maxDiameter) {
        ball1Size = 100
    }
    elBall1.style.width = ball1Size + 'px'
    elBall1.style.height = ball1Size + 'px'
    elBall1.innerHTML = ball1Size
    elBall1.style.backgroundColor = randColor
}

function onBall2Click() {
    var randColor = getRandomColor()
    ball2Size = getRandomInt(80,401)
    if (ball2Size > maxDiameter) {
        ball2Size = 100
    }
    elBall2.style.width = ball2Size + 'px'
    elBall2.style.height = ball2Size + 'px'
    elBall2.innerHTML = ball2Size
    elBall2.style.backgroundColor = randColor
}

function onBall3Click(elball){
    var ball1Color = elBall2.style.backgroundColor
    var ball2Color = elBall1.style.backgroundColor
    elBall1.style.width = ball2Size + 'px'
    elBall1.style.height = ball2Size + 'px'
    elBall1.innerHTML = ball2Size
    elBall1.style.backgroundColor = ball1Color

    elBall2.style.width = ball1Size + 'px'
    elBall2.style.height = ball1Size + 'px'
    elBall2.innerHTML = ball1Size
    elBall2.style.backgroundColor = ball2Color
}