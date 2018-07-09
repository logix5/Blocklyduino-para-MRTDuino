goog.provide('Blockly.Blocks.simpleActuators');

goog.require('Blockly.Blocks');

Blockly.Arduino['actuator_led'] = function(block) {
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STATUS');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};

Blockly.Arduino['advanced_tone'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone('+dropdown_pin+','+value+');\n';
  return code;
};

Blockly.Arduino['advanced_tonedure'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var duration = Blockly.Arduino.valueToCode(this, 'DUR', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone('+dropdown_pin+','+value+','+duration+');\n';
  return code;
};

Blockly.Arduino['advanced_notone'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone('+dropdown_pin+');\n';
  return code;
};
