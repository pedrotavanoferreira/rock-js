function Abre_porta () {
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(5000)
    pins.servoWritePin(AnalogPin.P2, 90)
}
// P0->Buzzer
// P1-> Servo da entrada
// P2-> Servo de saída
// P3-> Botão
// P4-> Botão
// P5-> Botão
// P6
let errou_senha = false
pins.servoWritePin(AnalogPin.P1, 0)
pins.servoWritePin(AnalogPin.P2, 90)
pins.setPull(DigitalPin.P3, PinPullMode.PullDown)
pins.setPull(DigitalPin.P4, PinPullMode.PullDown)
pins.setPull(DigitalPin.P5, PinPullMode.PullDown)
pins.setPull(DigitalPin.P6, PinPullMode.PullDown)
basic.forever(function () {
    if (!(errou_senha)) {
        if (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P6) == 1) {
            Abre_porta()
        }
        if (pins.digitalReadPin(DigitalPin.P4) == 1 && pins.digitalReadPin(DigitalPin.P6) == 1) {
            pins.servoWritePin(AnalogPin.P1, 90)
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.ForeverInBackground)
        }
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            . # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            . # # # .
            . # # # .
            `)
        basic.pause(200)
    } else {
    	
    }
})
function Abre_porta () {
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(5000)
    pins.servoWritePin(AnalogPin.P2, 90)
}
// P0->Buzzer
// P1-> Servo da entrada
// P2-> Servo de saída
// P3-> Botão
// P4-> Botão
// P5-> Botão
// P6
let errou_senha = false
pins.servoWritePin(AnalogPin.P1, 0)
pins.servoWritePin(AnalogPin.P2, 90)
pins.setPull(DigitalPin.P3, PinPullMode.PullDown)
pins.setPull(DigitalPin.P4, PinPullMode.PullDown)
pins.setPull(DigitalPin.P5, PinPullMode.PullDown)
pins.setPull(DigitalPin.P6, PinPullMode.PullDown)
basic.forever(function () {
    if (!(errou_senha)) {
        if (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P6) == 1) {
            Abre_porta()
        }
        if (pins.digitalReadPin(DigitalPin.P4) == 1 && pins.digitalReadPin(DigitalPin.P6) == 1) {
            pins.servoWritePin(AnalogPin.P1, 90)
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.ForeverInBackground)
        }
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            . # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            . # # # .
            . # # # .
            `)
        basic.pause(200)
    } else {
    	
    }
})
