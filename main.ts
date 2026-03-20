input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showNumber(0)
music.rest(music.beat(BeatFraction.Whole))
basic.forever(function () {
    radio.setGroup(1)
    radio.sendNumber(0)
})
