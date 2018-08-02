/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.RadioTEA5767');

goog.require('Blockly.Blocks');

Blockly.Arduino['RadioTEA5767_init'] = function(block) {
	
   
 Blockly.Arduino.definitions_['define_TEA5767_library'] = '#include <TEA5767N.h>';
 Blockly.Arduino.definitions_['define_TEA5767N'] = 'TEA5767N radio=TEA5767N();\n';
  
  var code='';
  return code;
   
};

Blockly.Arduino['RadioTEA5767_activate'] = function(block) {
 		
 var power = this.getFieldValue('TEA5767_POWER'); 	
  
 if (power==1) 
    var code = 'radio.setStandByOff();\n';
 else
	var code = 'radio.setStandByOn();\n';
 
  return code;
};

Blockly.Arduino['RadioTEA5767_mute'] = function(block) {
 		
 var mute = this.getFieldValue('TEA5767_MUTE'); 	
  
 if (mute==1) 
    var code = 'radio.mute();\n';
 else
	var code = 'radio.turnTheSoundBackOn();\n';
 
  return code;
};

Blockly.Arduino['RadioTEA5767_LevelSignal'] = function(block) {
         
  var code = 'radio.getSignalLevel()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['RadioTEA5767_Stereo'] = function(block) {
         
  var code = 'radio.isStereo()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['RadioTEA5767_setFrequency'] = function(block) {
 	
  var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
 
  
  var code = 'radio.selectFrequency((float)'+value+');\n';
  return code;
};

Blockly.Arduino['frequenciesMadrid'] = function(block) {
  var frequency_madrid = this.getFieldValue('FREQUENCY');
  var code=''+frequency_madrid+'';
  
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




