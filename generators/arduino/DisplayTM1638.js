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


/*

Blockly.Arduino['DisplayTM1637_clear'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 		

  var code = 'tm1637_'+numberdisplay+'.clear();\n';
  return code;
};

Blockly.Arduino['DisplayTM1637_set_numberall'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
 var value = Blockly.Arduino.valueToCode(this, 'valuenumber', Blockly.Arduino.ORDER_ATOMIC);
 var pos = Blockly.Arduino.valueToCode(this, 'Digit', Blockly.Arduino.ORDER_ATOMIC);
 var length = Blockly.Arduino.valueToCode(this, 'Length', Blockly.Arduino.ORDER_ATOMIC);
 var leading = this.getFieldValue('TM1637_LEADING');
 
  var code = 'tm1637_'+numberdisplay+'.showNumberDec('+value+','+leading+','+length+','+pos+');\n';
 
 return code;
};

Blockly.Arduino['DisplayTM1637_setsegment'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 		
 var digit = Blockly.Arduino.valueToCode(this, 'SegmentDigit', Blockly.Arduino.ORDER_ATOMIC);
 var value = Blockly.Arduino.valueToCode(this, 'SegmentValue', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'segmentTM1637_'+numberdisplay+'['+digit+']='+value+';\n';;
  return code;
};


Blockly.Arduino['DisplayTM1637_segments'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
 var pos = Blockly.Arduino.valueToCode(this, 'Digit', Blockly.Arduino.ORDER_ATOMIC);
 var length = Blockly.Arduino.valueToCode(this, 'Length', Blockly.Arduino.ORDER_ATOMIC);

 
  var code = 'tm1637_'+numberdisplay+'.setSegments(segmentTM1637_'+numberdisplay+','+length+','+pos+');\n';
 
 return code;
};



*/










