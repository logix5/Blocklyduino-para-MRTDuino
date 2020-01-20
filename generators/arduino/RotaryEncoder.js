/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.RotaryEncoder');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_RotaryEncoderInterrupt'] = function(block) {
  var number = this.getFieldValue('RE_NUMBER');
  var dropdown_pinDT = this.getFieldValue('PINDT');
  var dropdown_pinCLK = this.getFieldValue('PINCLK');
   
  Blockly.Arduino.definitions_['include_encoder'] = '#include <Encoder.h>';
  Blockly.Arduino.definitions_['rotaryencoder_'+number] = 'Encoder encoder_'+number+'('+dropdown_pinDT+','+dropdown_pinCLK+');\n';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['Init_RotaryEncoder'] = function(block) {
  var number = this.getFieldValue('RE_NUMBER');
  var dropdown_pinDT = this.getFieldValue('PINDT');
  var dropdown_pinCLK = this.getFieldValue('PINCLK');
   
  Blockly.Arduino.definitions_['include_encoder'] = '#include <Encoder.h>';
  Blockly.Arduino.definitions_['rotaryencoder_'+number] = 'Encoder encoder_'+number+'('+dropdown_pinDT+','+dropdown_pinCLK+');\n';
   	 	 
  var code='';
  return code;
};

Blockly.Arduino['RotaryEncoder_Write'] = function(block) {
  // TODO: Assemble Python into code variable.
  var number = this.getFieldValue('RE_NUMBER');
  var writenumber =Blockly.Arduino.valueToCode(this, 'Writecounter', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'encoder_'+number+'.write('+writenumber+'*4);\n'
   
  return code;
};


Blockly.Arduino['RotaryEncoder_Read'] = function(block) {
   
  var number = this.getFieldValue('RE_NUMBER');  
  var code = '(encoder_'+number+'.read()/4)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['rotaryencoder_button_sensor'] = function(block) {
  var number = this.getFieldValue('RE_NUMBER');
  var dropdown_pin = this.getFieldValue('PIN_RE_BUTTON');
  
  Blockly.Arduino.setups_['setup_re_'+number] = 'pinMode('+dropdown_pin+',INPUT_PULLUP);';
  
  var code = '!digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
