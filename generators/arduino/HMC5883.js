/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_Compass_HMC5883'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <Adafruit_Sensor.h>';
  Blockly.Arduino.definitions_['include_Adafruit_HMC5883_U'] = '#include <Adafruit_HMC5883_U.h>';
  
  Blockly.Arduino.definitions_['init_HMC5883'] = 'Adafruit_HMC5883_Unified mag = Adafruit_HMC5883_Unified(12345);\n';
  Blockly.Arduino.definitions_['init_var1_HMC5883'] = 'sensors_event_t eventmag;\n';
    
  Blockly.Arduino.setups_['setup_HMC5883'] = 'mag.begin();\n';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['order_to_read_HMC5883_values'] = function(block) {
   
  var code = 'mag.getEvent(&eventmag);\n'
   
  return code;
};

Blockly.Arduino['HMC5883_values'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;
 
  switch (typeMag) {
    case '0':
      code = 'eventmag.magnetic.x';
      break;
    case '1':
      code = 'eventmag.magnetic.y';
      break;
    case '2':
      code = 'eventmag.magnetic.z';
      break;
	 case '3':
      code = '(atan2(eventmag.magnetic.y, eventmag.magnetic.x)*(180/M_PI))';
      break;
    default:
			code = 'eventmag.magnetic.x';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};
	