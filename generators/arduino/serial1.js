goog.provide('Blockly.Blocks.serial1');

goog.require('Blockly.Blocks');

Blockly.Arduino['serial1_init'] = function(block) {
  var dropdown_pinbaudios = this.getFieldValue('PINBAUDIOS');

  Blockly.Arduino.setups_['setup_sserial'] = 'Serial1.begin('+dropdown_pinbaudios+');\n';
  var code = '';
  return code;
};

Blockly.Arduino['serial1_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '(Serial1.read())';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial1_println'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'Serial1.println('+content+');\n';
  return code;
};

Blockly.Arduino['serial1_print'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'Serial1.print('+content+');\n';
  return code;
};

Blockly.Arduino['serial1_write'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
   
  var code = 'Serial1.write('+content+');\n';  //ORGINAL \nSerial.print(\'\\t\');
  return code;
};


Blockly.Arduino['serial1_available'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'Serial1.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial1_flush'] = function(block) {
    //Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  var code = 'Serial1.flush();\n';
  return code;
};
