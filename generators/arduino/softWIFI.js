/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.softWIFI');

goog.require('Blockly.Blocks');

Blockly.Arduino['soft_wifi_init'] = function(block) {
  var dropdown_pin1 = this.getFieldValue('PIN1');
  var dropdown_pin2 = this.getFieldValue('PIN2');
  var dropdown_pinbaudios = this.getFieldValue('PINBAUDIOS');
  
  Blockly.Arduino.definitions_['define_ssWIFI'] = '#include <SoftwareSerial.h>\nSoftwareSerial mySerialWIFI('+dropdown_pin1+','+dropdown_pin2+');\n';
  Blockly.Arduino.setups_['setup_sserialWIFI'] = 'mySerialWIFI.begin('+dropdown_pinbaudios+');\n';
  var code = '';
  return code;
};

Blockly.Arduino['soft_wifi_printfor'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
      
  var code = 'mySerialWIFI.print('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['soft_wifi_available'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mySerialWIFI.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['soft_wifi_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '(mySerialWIFI.read())';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['soft_wifi_println'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'mySerialWIFI.println('+content+');\n';
  return code;
};

Blockly.Arduino['soft_wifi_print'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'mySerialWIFI.print('+content+');\n';
  return code;
};

Blockly.Arduino['soft_wifi_write'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
   
  var code = 'mySerialWIFI.write('+content+');\n';  
  return code;
};


