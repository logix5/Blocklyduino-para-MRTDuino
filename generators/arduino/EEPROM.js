'use strict';

goog.provide('Blockly.Arduino.EEPROM');

goog.require('Blockly.Arduino');

Blockly.Arduino.eeprom_write_byte = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>';
	return 'EEPROM.write('+address+', '+data+');\n';
}

Blockly.Arduino.eeprom_read_byte = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>';
	var code ='EEPROM.read('+address+')';
	return [code,Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.eeprom_write_variable = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>';
	return 'EEPROM.put('+address+', '+data+');\n';
}

Blockly.Arduino.eeprom_read_variable = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>';
	return 'EEPROM.get('+address+', '+data+');\n';
}

