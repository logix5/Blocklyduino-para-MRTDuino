/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL354');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_Accel_ADXL354'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <Adafruit_Sensor.h>\n';
  Blockly.Arduino.definitions_['include_Adafruit_ADXL345_U'] = '#include <Adafruit_ADXL345_U.h>\n';
  
  Blockly.Arduino.definitions_['init_ADXL354'] = 'Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);\n';
  Blockly.Arduino.definitions_['init_var1_ADXL354'] = 'sensors_event_t event;\n';
    
  Blockly.Arduino.setups_['setup_ADXL354'] = 'accel.begin();\n';
  	 	 
  var code='';
  return code;
};


Blockly.Arduino['config_adxl354_range'] = function(block) {
 
  var rangeAccel=this.getFieldValue('ADXL354_RANGE');
 
  var code = 'accel.setRange('+rangeAccel+');\n'
   
  return code;
};

Blockly.Arduino['order_to_read_adxl354_values'] = function(block) {
   
  var code = 'accel.getEvent(&event);\n'
   
  return code;
};

Blockly.Arduino['adxl354_values'] = function(block) {
  
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



