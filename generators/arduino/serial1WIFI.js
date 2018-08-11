/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.serial1WIFI');

goog.require('Blockly.Blocks');

Blockly.Arduino['serial1_wifi_init'] = function(block) {
  var dropdown_pinbaudios = this.getFieldValue('PINBAUDIOS');

  Blockly.Arduino.setups_['setup_sserial1wifi'] = 'Serial1.begin('+dropdown_pinbaudios+');\n';
  var code = '';
  return code;
};

Blockly.Arduino['serial1_wifi_printfor'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
  
 
  
  var code = 'Serial1.print('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['serial1_wifi_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '(Serial1.read())';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial1_wifi_println'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
 
  var code = 'Serial1.println('+content+');\n';
  return code;
};

Blockly.Arduino['serial1_wifi_print'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  var code = 'Serial1.print('+content+');\n';
  return code;
};

Blockly.Arduino['serial1_wifi_write'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
 
   
  var code = 'Serial1.write('+content+');\n';  //ORGINAL \nSerial.print(\'\\t\');
  return code;
};


Blockly.Arduino['serial1_wifi_available'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'Serial1.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial1_wifi_flush'] = function(block) {
    
  var code = 'Serial1.flush();\n';
  return code;
};
