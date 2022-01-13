##Written by Blaine Hord##
##This code will navigate through our custom obstacle course##

#Initializing the variables and neopixel lights##

lightspeed1 = 0
strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
# #Makes the neopixel lights under the robot alternate red/white at variable speeds##

def on_forever():
    global lightspeed1
    lightspeed1 = 0
    for index in range(6):
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)
        strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xffffff)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        basic.pause(200)
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xffffff)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
        strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
        basic.pause(200)
        lightspeed1 = 0
    for index2 in range(4):
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)
        strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xffffff)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        basic.pause(100)
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xffffff)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
        strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
        basic.pause(100)
    lightspeed1 = 0
    for index3 in range(6):
        for index4 in range(3):
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)
            strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
            cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
            strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
            basic.pause(50)
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)
            strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
            cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
            strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
            basic.pause(50)
        for index5 in range(3):
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xffffff)
            strip.show_color(neopixel.colors(NeoPixelColors.RED))
            cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xffffff)
            strip.show_color(neopixel.colors(NeoPixelColors.RED))
            basic.pause(50)
            cuteBot.closeheadlights()
            strip.clear()
            cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xffffff)
            strip.show_color(neopixel.colors(NeoPixelColors.RED))
            cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xffffff)
            strip.show_color(neopixel.colors(NeoPixelColors.RED))
            basic.pause(50)
basic.forever(on_forever)

# #Makes the robot follow and black lines##
# def on_forever2():
# if cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) <= 20:
# cuteBot.stopcar()
# cuteBot.move_time(cuteBot.Direction.BACKWARD, 100, 0.5)
# cuteBot.turnright()
# if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
# cuteBot.move_time(cuteBot.Direction.FORWARD, 85, 0.01)
# elif cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
# cuteBot.move_time(cuteBot.Direction.RIGHT, 85, 0.01)
# elif cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
# cuteBot.move_time(cuteBot.Direction.LEFT, 85, 0.01)
# else:
# cuteBot.move_time(cuteBot.Direction.BACKWARD, 100, 0.01)
# basic.forever(on_forever2)
# #Makes the display alternatly flash a warning pattern##

def on_forever2():
    global lightspeed1
    lightspeed1 = 0
    for index6 in range(6):
        basic.show_icon(IconNames.TARGET)
        basic.pause(200)
        basic.show_icon(IconNames.CHESSBOARD)
        basic.pause(200)
    lightspeed1 = 0
    for index7 in range(4):
        basic.show_icon(IconNames.TARGET)
        basic.show_icon(IconNames.CHESSBOARD)
        basic.show_icon(IconNames.TARGET)
        basic.show_icon(IconNames.CHESSBOARD)
    lightspeed1 = 0
    for index8 in range(9):
        basic.clear_screen()
        basic.pause(100)
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.clear_screen()
        basic.pause(200)
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
basic.forever(on_forever2)

# #Makes the lightspeed variable equal to the time in seconds##

def on_forever3():
    global lightspeed1
    basic.pause(1000)
    lightspeed1 += 1
basic.forever(on_forever3)

##START OF MAZE CODE##
##Code will repeat 1 time once button A is pressed##
def on_button_pressed_a():
    pause(1000)
    cuteBot.move_time(cuteBot.Direction.FORWARD, 75, 0.56)
    cuteBot.stopcar()
    cuteBot.move_time(cuteBot.Direction.LEFT, 50, 0.17)
    cuteBot.stopcar()
input.on_button_pressed(Button.A, on_button_pressed_a)
