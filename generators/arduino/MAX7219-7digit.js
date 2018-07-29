/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.MAX7219_7digit');
goog.require('Blockly.Blocks');

Blockly.Arduino['Init_MAX7219_7digit'] = function(block) {
  var pin_clk = this.getFieldValue('PIN_CLK');
  var pin_dat = this.getFieldValue('PIN_DAT');
  var pin_cs = this.getFieldValue('PIN_CS'); 
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  
  Blockly.Arduino.definitions_['include_LedControl'] = '#include <LedControl.h>\n';
  Blockly.Arduino.definitions_['init_Ledcontrol_7d'] = 'LedControl lc7d=LedControl('+pin_dat+','+pin_clk+','+pin_cs+','+numberDisplays+');\n';
     	 	 
  var code='';
  return code;
};

Blockly.Arduino['MAX7219_7digit_shutdown'] = function(block) {

  var power = this.getFieldValue('power'); 
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lc7d.shutdown('+numberDisplays+','+power+');\n';
  return code;
};

Blockly.Arduino['MAX7219_7digit_brightness'] = function(block) {
  var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lc7d.setIntensity('+numberDisplays+','+brightness+');\n';
  return code;
};

Blockly.Arduino['MAX7219_7digit_clear'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lc7d.clearDisplay('+numberDisplays+');\n';
  return code;
};

Blockly.Arduino['MAX7219_7digit_digit'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var digit = this.getFieldValue('Digit');
  var point = this.getFieldValue('dp');
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
     	 	 
  var code='lc7d.setDigit('+numberDisplays+','+digit+','+value+','+point+');\n';
  return code;
};

Blockly.Arduino['MAX7219_7digit_char'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var digit = this.getFieldValue('Digit');
  var chartopaint = this.getFieldValue('Chartopaint');
  var point = this.getFieldValue('dp');
 
     	 	 
  var code='lc7d.setChar('+numberDisplays+','+digit+',\''+chartopaint+'\','+point+');\n';
  return code;
};

Blockly.Arduino['MAX7219_7digit_custom'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var digit = this.getFieldValue('Digit');
  var value = this.getFieldValue('VALUE');

     	 	 
  var code='lc7d.setRow('+numberDisplays+','+digit+','+value+');\n';
  return code;
};

