/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
 
goog.provide('Blockly.Blocks.DisplayTM1638');

goog.require('Blockly.Blocks');

Blockly.Arduino['DisplayTM1638_init'] = function(block) {
	
 
  var pin_strobe = this.getFieldValue('PIN_STROBE');
  var pin_clock = this.getFieldValue('PIN_CLOCK');
  var pin_data = this.getFieldValue('PIN_DATA');
   
  
 Blockly.Arduino.definitions_['define_TM1638_library'] = '#include <TM1638lite.h>';
 Blockly.Arduino.definitions_['define_TM1638_tm'] = 'TM1638lite tm('+pin_strobe+','+pin_clock+','+pin_data+');\n';
  
  var code='';
  return code;
   
};

Blockly.Arduino['DisplayTM1638_Reset'] = function(block) {
  
  var code = 'tm.reset();\n';
  return code;
};


Blockly.Arduino['DisplayTM1638_set_leds'] = function(block) {
	
 var pos = Blockly.Arduino.valueToCode(this, 'Position', Blockly.Arduino.ORDER_ATOMIC);
 var led_on_off = this.getFieldValue('TM1638_LED_ON_OFF');
 
 var code = 'tm.setLED('+pos+','+led_on_off+');\n';
 
 return code;
};


Blockly.Arduino['DisplayTM1638_readbuttons'] = function(block) {
 

  var code= 'tm.readButtons()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['DisplayTM1638_text'] = function(block) {
 
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  
  var code ='tm.displayText('+value_texttoprint+');\n';
  return code;
};


Blockly.Arduino['DisplayTM1638_hex'] = function(block) {
	
 var pos = Blockly.Arduino.valueToCode(this, 'Position', Blockly.Arduino.ORDER_ATOMIC);
 var number = Blockly.Arduino.valueToCode(this, 'Number', Blockly.Arduino.ORDER_ATOMIC);
 
 var code = 'tm.displayHex('+pos+','+number+');\n';
 
 return code;
};


Blockly.Arduino['DisplayTM1638_digit'] = function(block) {
	
 var pos = Blockly.Arduino.valueToCode(this, 'Position', Blockly.Arduino.ORDER_ATOMIC);
 var number2 = Blockly.Arduino.valueToCode(this, 'Number2', Blockly.Arduino.ORDER_ATOMIC);
 
 var code = 'tm.displaySS('+pos+','+number2+');\n';
 
 return code;
};

