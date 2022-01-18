// #Written by Blaine Hord##
// #This code will navigate through our custom obstacle course##
// Initializing the variables and neopixel lights##
let lightspeed1 = 0
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
// #Makes the neopixel lights under the robot alternate red/white at variable speeds##
basic.forever(function on_forever() {
    
    lightspeed1 = 0
    for (let index = 0; index < 6; index++) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(200)
        lightspeed1 = 0
    }
    for (let index2 = 0; index2 < 4; index2++) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(100)
    }
    lightspeed1 = 0
    for (let index3 = 0; index3 < 6; index3++) {
        for (let index4 = 0; index4 < 3; index4++) {
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(50)
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(50)
        }
        for (let index5 = 0; index5 < 3; index5++) {
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(50)
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(50)
        }
    }
})
// #Makes the robot follow and black lines##
//  def on_forever2():
//  if cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) <= 20:
//  cuteBot.stopcar()
//  cuteBot.move_time(cuteBot.Direction.BACKWARD, 100, 0.5)
//  cuteBot.turnright()
//  if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
//  cuteBot.move_time(cuteBot.Direction.FORWARD, 85, 0.01)
//  elif cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
//  cuteBot.move_time(cuteBot.Direction.RIGHT, 85, 0.01)
//  elif cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
//  cuteBot.move_time(cuteBot.Direction.LEFT, 85, 0.01)
//  else:
//  cuteBot.move_time(cuteBot.Direction.BACKWARD, 100, 0.01)
//  basic.forever(on_forever2)
// #Makes the display alternatly flash a warning pattern##
basic.forever(function on_forever2() {
    
    lightspeed1 = 0
    for (let index6 = 0; index6 < 6; index6++) {
        basic.showIcon(IconNames.Target)
        basic.pause(200)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(200)
    }
    lightspeed1 = 0
    for (let index7 = 0; index7 < 4; index7++) {
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Chessboard)
    }
    lightspeed1 = 0
    for (let index8 = 0; index8 < 9; index8++) {
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        `)
        basic.clearScreen()
        basic.pause(200)
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        `)
    }
})
//  #Makes the lightspeed variable equal to the time in seconds##
basic.forever(function on_forever3() {
    
    basic.pause(1000)
    lightspeed1 += 1
})
// #START OF MAZE CODE##
// #Code will repeat 1 time once button A is pressed##
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    pause(1000)
    // Initial straight-away#
    cuteBot.moveTime(cuteBot.Direction.forward, 75, 0.65)
    cuteBot.stopcar()
    // First left turn#
    cuteBot.moveTime(cuteBot.Direction.left, 50, 0.2)
    cuteBot.stopcar()
    // Second straight-away#
    cuteBot.moveTime(cuteBot.Direction.forward, 75, 0.5)
    cuteBot.stopcar()
    // Second left turn#
    cuteBot.moveTime(cuteBot.Direction.left, 50, 0.19)
    cuteBot.stopcar()
    // Third straight-away#
    cuteBot.moveTime(cuteBot.Direction.forward, 75, 0.32)
    cuteBot.stopcar()
    // First right turn#
    cuteBot.moveTime(cuteBot.Direction.right, 50, 0.17)
    cuteBot.stopcar()
    // Fourth straight-away#
    cuteBot.moveTime(cuteBot.Direction.forward, 75, 0.32)
    cuteBot.stopcar()
    // Second right turn#
    cuteBot.moveTime(cuteBot.Direction.right, 50, 0.18)
    cuteBot.stopcar()
    // Fifth straight-away (big straight-away)#
    cuteBot.moveTime(cuteBot.Direction.forward, 75, 1.2)
    cuteBot.stopcar()
})
