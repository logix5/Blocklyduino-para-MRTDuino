/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.Temp-ds18b20');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_Temp_ds18b20'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
   
  Blockly.Arduino.definitions_['include_oneWire'] = '#include <OneWire.h>';
  Blockly.Arduino.definitions_['include_DallasTemperature'] = '#include <DallasTemperature.h>';
  Blockly.Arduino.definitions_['init_ds18b20'] = 'OneWire oneWireBus('+dropdown_pin+');\nDallasTemperature sensors(&oneWireBus);\n';
  Blockly.Arduino.setups_['setup_ds18b20'] = 'sensors.begin();\n';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['order_read_temeperature_ds18b20'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var code = 'sensors.requestTemperatures();\n'
   
  return code;
};


Blockly.Arduino['read_temeperature_ds18b20'] = function(block) {
  var num_sensor =Blockly.Arduino.valueToCode(this, 'Sensor', Blockly.Arduino.ORDER_ATOMIC); 
    
  var code = 'sensors.getTempCByIndex('+num_sensor+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
