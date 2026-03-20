input.onButtonPressed(Button.A, function () {
    music.ringTone(262)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    radio.setGroup(1)
    radio.sendNumber(0)
})
