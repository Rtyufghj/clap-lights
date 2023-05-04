input.onSound(DetectedSound.Loud, function () {
    A = !(A)
    if (A) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let A = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
