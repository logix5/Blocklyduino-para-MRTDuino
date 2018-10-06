/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.keypad');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_Keypad4x4'] = function(block) {
  var pin_r1 = this.getFieldValue('PIN_R1');
  var pin_r2 = this.getFieldValue('PIN_R2');
  var pin_r3 = this.getFieldValue('PIN_R3');
  var pin_r4 = this.getFieldValue('PIN_R4');
  var pin_c1 = this.getFieldValue('PIN_C1');
  var pin_c2 = this.getFieldValue('PIN_C2');
  var pin_c3 = this.getFieldValue('PIN_C3');
  var pin_c4 = this.getFieldValue('PIN_C4');
   
  Blockly.Arduino.definitions_['include_keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['init_keypad'] = 'byte Pins_Rows[]={'+pin_r4+','+pin_r3+','+pin_r2+','+pin_r1+'};\n'+
  'byte Pins_Columns[]={'+pin_c4+','+pin_c3+','+pin_c2+','+pin_c1+'};\n'+
  'char keys[4][4]={{\'1\',\'2\',\'3\',\'A\'},{\'4\',\'5\',\'6\',\'B\'},{\'7\',\'8\',\'9\',\'C\'},{\'*\',\'0\',\'#\',\'D\'}};\n'+
  'Keypad Keyboard= Keypad(makeKeymap(keys),Pins_Rows,Pins_Columns,4,4);\n'; 	 	 
  var code='';
  return code;
};

Blockly.Arduino['Init_Keypad4x3'] = function(block) {
  var pin_r1 = this.getFieldValue('PIN_R1');
  var pin_r2 = this.getFieldValue('PIN_R2');
  var pin_r3 = this.getFieldValue('PIN_R3');
  var pin_r4 = this.getFieldValue('PIN_R4');
  var pin_c1 = this.getFieldValue('PIN_C1');
  var pin_c2 = this.getFieldValue('PIN_C2');
  var pin_c3 = this.getFieldValue('PIN_C3');
   
  Blockly.Arduino.definitions_['include_keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['init_keypad'] = 'byte Pins_Rows[]={'+pin_r4+','+pin_r3+','+pin_r2+','+pin_r1+'};\n'+
  'byte Pins_Columns[]={'+pin_c3+','+pin_c2+','+pin_c1+'};\n'+
  'char keys[4][3]={{\'1\',\'2\',\'3\'},{\'4\',\'5\',\'6\'},{\'7\',\'8\',\'9\'},{\'*\',\'0\',\'#\'}};\n'+
  'Keypad Keyboard= Keypad(makeKeymap(keys),Pins_Rows,Pins_Columns,4,3);\n'; 	 	 
  var code='';
  return code;
};

Blockly.Arduino['keypad_keyreaded'] = function(block) {
  var code = 'Keyboard.getKey()';
     
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['keypad_key'] = function(block) {

  var key = this.getFieldValue('OUTPUT_VALUE');
  
  if(key=='NO_KEY')
	 var code = ''+key+'';
  else
   var code = '\''+key+'\'';
     
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


