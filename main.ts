input.onButtonPressed(Button.A, function () {
    meny = 0
})
input.onButtonPressed(Button.B, function () {
    meny += 1
    if (meny >= 4) {
        meny = 0
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "B") {
        batteryMv = value
    }
    if (name == "G") {
        gravity = value
    }
    if (name == "T") {
        throttle = value
    }
})
let throttle = 0
let gravity = 0
let batteryMv = 0
let meny = 0
let radioGroup = 7
basic.showNumber(radioGroup)
radio.setGroup(radioGroup)
meny = 0
basic.forever(function () {
    if (meny == 0) {
        basic.showNumber(throttle)
    }
    if (meny == 1) {
        led.plotBarGraph(
        gravity,
        1023
        )
    }
    if (meny == 2) {
        led.plotBarGraph(
        batteryMv - 3300,
        900
        )
    }
    if (meny == 3) {
        basic.showNumber(batteryMv)
    }
})
