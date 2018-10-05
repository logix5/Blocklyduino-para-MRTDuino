/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.stepper');

goog.require('Blockly.Blocks');

Blockly.Arduino['stepper_configuration'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var steeper_pin1 = this.getFieldValue('PIN_STEEPER1');
  var steeper_pin2 = this.getFieldValue('PIN_STEEPER2');
  var steeper_pin3 = this.getFieldValue('PIN_STEEPER3');
  var steeper_pin4 = this.getFieldValue('PIN_STEEPER4');
  var stepper_steprev = Blockly.Arduino.valueToCode(this, 'STEP_RPM', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_stepper'] = '#include <Stepper.h>\n';
  Blockly.Arduino.definitions_['define_stepper_'+steeper_number] = 'Stepper stepper_'+steeper_number+'('+stepper_steprev+','+steeper_pin1+','+steeper_pin2+','+steeper_pin3+','+steeper_pin4+');\n';
    
  var code = '';
  
  return code;
};


Blockly.Arduino['stepper_speed'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var stepper_speed = Blockly.Arduino.valueToCode(this, 'STEPPER_SPEED', Blockly.Arduino.ORDER_ATOMIC);
   
  var code = 'stepper_'+steeper_number+'.setSpeed('+stepper_speed+');\n'
   
  return code;
};

Blockly.Arduino['stepper_steps'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var stepper_steps = Blockly.Arduino.valueToCode(this, 'STEPPER_STEP', Blockly.Arduino.ORDER_ATOMIC);
   
  var code = 'stepper_'+steeper_number+'.step('+stepper_steps+');\n'
   
  return code;
};
