/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.APDS9960');

goog.require('Blockly.Blocks');

Blockly.Arduino['APDS9960_init'] = function(block) {
	
 Blockly.Arduino.definitions_['define_sparkfun_APDS9960'] = '#include <SparkFun_APDS9960.h>';
 Blockly.Arduino.definitions_['define_sparkfun_APDS9960_variable'] = 'SparkFun_APDS9960 apds = SparkFun_APDS9960();\n';
 
 Blockly.Arduino.setups_['setup_sparkfun_APDS9960'] = 'apds.init();\n';
   
  var code='';
  return code;

};

Blockly.Arduino['APDS9960_gesture_init'] = function(block) {
	
	
 var enable = this.getFieldValue('ENABLE'); 

  if(enable==1)
   var code='apds.enableGestureSensor(false);\n';
  else
   var code='apds.disableGestureSensor();\n';

  return code;

};

Blockly.Arduino['APDS9960_color_init'] = function(block) {
	
	
 var enable = this.getFieldValue('ENABLE'); 
 
 Blockly.Arduino.definitions_['define_APDS9960_color_variables'] = 'uint16_t ambient_light=0;\nuint16_t red_light=0;\nuint16_t green_light=0;\nuint16_t blue_light=0;\n';

  if(enable==1)
   var code='apds.enableLightSensor(false);\n';
  else
   var code='apds.disableLightSensor();\n';

  return code;

};

Blockly.Arduino['APDS9960_gesture_gain'] = function(block) {
	
	
  var gain = this.getFieldValue('GAIN'); 

  var code='apds.setGestureGain('+gain+');\n';

  return code;

};

Blockly.Arduino['APDS9960_color_gain'] = function(block) {
	
	
  var gain = this.getFieldValue('GAIN'); 

  var code='apds.setAmbientLightGain('+gain+');\n';

  return code;

};

Blockly.Arduino['APDS9960_gesture_detected'] = function(block) {
 		
   var code = 'apds.isGestureAvailable()';
 
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['APDS9960_readgesture'] = function(block) {
 		
   var code = 'apds.readGesture()';
 
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['APDS9960_gesture'] = function(block) {
  var direction = this.getFieldValue('DIRECTION');
  var code;
  
 code= ''+direction+'';
 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['APDS9960_read_colors'] = function(block) {
	
	
   var code='apds.readBlueLight(blue_light);\n'+
' 	apds.readGreenLight(green_light);\n'+
'	apds.readRedLight(red_light);\n'+
'	apds.readAmbientLight(ambient_light);\n';

  return code;

};

Blockly.Arduino['APDS9960_color'] = function(block) {
	
	
 var color = this.getFieldValue('color'); 
 
 
  if(color ==0)
   var code='red_light';
  else  if(color ==1)
   var code='green_light';
	else  if(color ==2)
		 var code='blue_light';
		else
	      var code='ambient_light';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};

