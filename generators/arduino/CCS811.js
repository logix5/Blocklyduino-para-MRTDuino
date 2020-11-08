/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.CCS811');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_CCS811'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Adafruit_CCS811'] = '#include <Adafruit_CCS811.h>';
  Blockly.Arduino.definitions_['init_CCS811'] = 'Adafruit_CCS811 ccs;\n';
      
  Blockly.Arduino.setups_['setup_CCS811'] = 'ccs.begin();\n';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['CCS811_available'] = function(block) {
  
  var code = 'ccs.available()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['CCS811_readed'] = function(block) {
  
  var code = '!ccs.readData()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['CCS811_values'] = function(block) {
  
  var typeMeasure = this.getFieldValue('TypeMeasure');
  var code;
 
  switch (typeMeasure) {
    case '0':
      code = 'ccs.geteCO2()';
      break;
    case '1':
      code = 'ccs.getTVOC()';
      break;
    default:
			code = 'ccs.geteCO2()';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};

