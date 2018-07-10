goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');

Blockly.Arduino['advanced_pulsein'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'pulseIn('+dropdown_pin+','+dropdown_stat+ ');';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_setup'] = function(block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'MySetup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'MyLoop');
 
  Blockly.Arduino.setups_['setup'] = statements_setup;
 
  var code = statements_loop;
  return code;
};