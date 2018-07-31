/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.DisplayTM1637');

goog.require('Blockly.Blocks');

Blockly.Arduino['DisplayTM1637_init'] = function(block) {
	
  var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
  var pin_clk = this.getFieldValue('PIN_CLK');
  var pin_dio = this.getFieldValue('PIN_DIO');
  var britghness = Blockly.Arduino.valueToCode(this, 'Britghness', Blockly.Arduino.ORDER_ATOMIC);
  
  
 Blockly.Arduino.definitions_['define_TM1637_library'] = '#include <TM1637.h>';
 Blockly.Arduino.definitions_['define_TM1637_' + numberdisplay] = 'TM1637 tm1637_'+numberdisplay+'('+pin_clk+','+pin_dio+',4,'+britghness+');\n';
  
  var code='';
  return code;
   
};

Blockly.Arduino['DisplayTM1637_setBrightness'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 		
  var britghness = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'tm1637_'+numberdisplay+'.cambiar_brillo('+britghness+');\n';
  return code;
};


/*




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

*/











