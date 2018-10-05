/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_Accel_ADXL345'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <Adafruit_Sensor.h>';
  Blockly.Arduino.definitions_['include_Adafruit_ADXL345_U'] = '#include <Adafruit_ADXL345_U.h>';
  
  Blockly.Arduino.definitions_['init_ADXL345'] = 'Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);\n';
  Blockly.Arduino.definitions_['init_var1_ADXL345'] = 'sensors_event_t event;\n';
    
  Blockly.Arduino.setups_['setup_ADXL345'] = 'accel.begin();\n';
  	 	 
  var code='';
  return code;
};


Blockly.Arduino['config_adxl345_range'] = function(block) {
 
  var rangeAccel=this.getFieldValue('ADXL345_RANGE');
 
  var code = 'accel.setRange('+rangeAccel+');\n'
   
  return code;
};

Blockly.Arduino['order_to_read_adxl345_values'] = function(block) {
   
  var code = 'accel.getEvent(&event);\n'
   
  return code;
};

Blockly.Arduino['adxl345_values'] = function(block) {
  
  var typeAccel = this.getFieldValue('TypeAccel');
  var code;
 
  switch (typeAccel) {
    case '0':
      code = 'event.acceleration.x';
      break;
    case '1':
      code = 'event.acceleration.y';
      break;
    case '2':
      code = 'event.acceleration.z';
      break;
    default:
			code = 'event.acceleration.x';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};



