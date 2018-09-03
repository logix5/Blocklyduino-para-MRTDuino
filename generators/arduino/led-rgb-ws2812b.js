/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
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

Blockly.Arduino['LedStrip_WS2812B_setBrightness'] = function(block) {
  var numberstrip = this.getFieldValue('LEDSTRIP_NUMBER'); 	
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'pixels_'+numberstrip+'.setBrightness('+lumin+');\n';
  return code;
};



Blockly.Arduino['LedStrip_WS2812B_show'] = function(block) {
  var numberstrip = this.getFieldValue('LEDSTRIP_NUMBER'); 	
     
  var code = 'pixels_'+numberstrip+'.show();\n';
  return code;
};

Blockly.Arduino['LedStrip_WS2812B_clear'] = function(block) {
  var numberstrip = this.getFieldValue('LEDSTRIP_NUMBER');
    
  var code = 'pixels_'+numberstrip+'.clear();\n';
  return code;
};



Blockly.Arduino['LedStrip_WS2812B_setPixelColor'] = function(block) {
  var numberstrip = this.getFieldValue('LEDSTRIP_NUMBER');
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  
  var colorall = block.getFieldValue('RGBCOLOR');
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16)
  

  var code = 'pixels_'+numberstrip+'.setPixelColor('+pixel_number+'-1, pixels_'+numberstrip+'.Color('+red+','+green+','+blue+'));\n';

  return code;
};


Blockly.Arduino['LedStrip_WS2812B_setPixelColor2'] = function(block) {
  var numberstrip = this.getFieldValue('LEDSTRIP_NUMBER');
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  
  var red = Blockly.Arduino.valueToCode(this, 'Pixel_R', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Pixel_G', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Pixel_B', Blockly.Arduino.ORDER_ATOMIC);
  

  var code = 'pixels_'+numberstrip+'.setPixelColor('+pixel_number+'-1, pixels_'+numberstrip+'.Color('+red+','+green+','+blue+'));\n';

  return code;
};










