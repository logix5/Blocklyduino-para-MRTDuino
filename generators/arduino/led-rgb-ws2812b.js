'use strict';

goog.provide('Blockly.Blocks.led-rgb-ws2812b');

goog.require('Blockly.Blocks');

Blockly.Arduino['LedStrip_WS2812B_init'] = function(block) {
	
  var numberstrip = this.getFieldValue('LEDSTRIP_NUMBER'); 	
  var pin_ledrgb = this.getFieldValue('PIN');
  var numpixels = Blockly.Arduino.valueToCode(this, 'Number_of_Leds', Blockly.Arduino.ORDER_ATOMIC);
  
  
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>';
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B_' + numberstrip] = 'Adafruit_NeoPixel pixels_'+numberstrip+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n';
 
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B'+numberstrip] = 'pixels_'+numberstrip+'.begin();\n';
  
  var code='';
  return code;
   
};

/*

Blockly.Arduino.lp2i_ledRGB_WS2812B_setPixelColor = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixels_'+dropdown_name+'.setPixelColor('+pixel_number+', pixels_'+dropdown_name+'.Color('+red+','+green+','+blue+'));\n'
			+ 'pixels_'+dropdown_name+'.show();\n';
  return code;
};

Blockly.Arduino.lp2i_ledRGB_WS2812B_setBrightness = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'pixels_'+dropdown_name+'.setBrightness('+lumin+');\n';
  return code;
};

Blockly.Arduino.lp2i_ledRGB_WS2812B_show = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
    
  var code = 'pixels_'+dropdown_name+'.show();\n';
  return code;
};

Blockly.Arduino.lp2i_ledRGB_WS2812B_clear = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
    
  var code = 'pixels_'+dropdown_name+'.clear();\n';
  return code;
};

*/








