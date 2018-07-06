goog.provide('Blockly.Blocks.simpleSensors');

goog.require('Blockly.Blocks');

Blockly.Arduino['button_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_BUTTON');
  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  if(logic=='TRUE')
    var code = '(!(digitalRead('+dropdown_pin+')==1))';
  else
   var code = '(digitalRead('+dropdown_pin+')==1)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['button_touch_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_BUTTON');
  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  if(logic=='TRUE')
    var code = '(!(digitalRead('+dropdown_pin+')==1))';
  else
   var code = '(digitalRead('+dropdown_pin+')==1)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
