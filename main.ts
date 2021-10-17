input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    basic.showString("11OSv1.0SmartwatchledMircobitv2")
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.showString("11OS")
let app = 0
music.setBuiltInSpeakerEnabled(true)
soundExpression.giggle.play()
