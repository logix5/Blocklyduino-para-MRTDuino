goog.provide('Blockly.Blocks.simpleActuators');

goog.require('Blockly.Blocks');

Blockly.Arduino['actuator_led'] = function(block) {
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STATUS');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};

Blockly.Arduino['actuator_ledlevel'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // TODO: Assemble JavaScript into code variable.
  
  if (value<=0)
   value=0;
  if (value>255)
   value=255;
  
   var code = 'analogWrite('+dropdown_pin+','+value+');\n';
 
  return code;
};

Blockly.Arduino['actuator_laser'] = function(block) {
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STATUS');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};

Blockly.Arduino['actuator_rele'] = function(block) {
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STATUS');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};

Blockly.Arduino['actuator_tonedure'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var duration = Blockly.Arduino.valueToCode(this, 'DUR', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  
  var code = 'tone('+dropdown_pin+','+value+','+duration+');\n';
  return code;
};

Blockly.Arduino['actuator_notone'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone('+dropdown_pin+');\n';
  return code;
};
