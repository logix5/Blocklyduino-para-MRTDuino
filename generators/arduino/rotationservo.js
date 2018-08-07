/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');


Blockly.Arduino['servo_continuos_move'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var servomotor_dir = this.getFieldValue('SERVOMOTOR_DIR');
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC); 
  
  if (SpeedServo>=90)
    SpeedServo=90;

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';

  if (servomotor_dir==1)
	var code = 'servo_'+dropdown_pin+'.write(90+'+SpeedServo+');\n';
  else
	var code = 'servo_'+dropdown_pin+'.write(90-'+SpeedServo+');\n';  
  
  return code;
};



Blockly.Arduino['servo_continuos_stop'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write(90);\n';
  return code;
};
