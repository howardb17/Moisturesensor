let reading = 0
radio.setTransmitSerialNumber(true)
radio.setGroup(4)
led.setBrightness(64)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    radio.sendNumber(reading / 4)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (reading >= 800) {
        basic.showNumber(reading)
    }
    basic.pause(10)
    if (reading <= 400) {
        basic.showNumber(reading)
    }
    basic.pause(10)
})
