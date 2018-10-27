/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.stepper28BYJ');

goog.require('Blockly.Blocks');

Blockly.Arduino['stepper28BYJ_configuration'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var steeper_pin1 = this.getFieldValue('PIN_STEEPER1');
  var steeper_pin2 = this.getFieldValue('PIN_STEEPER2');
  var steeper_pin3 = this.getFieldValue('PIN_STEEPER3');
  var steeper_pin4 = this.getFieldValue('PIN_STEEPER4');
    
  Blockly.Arduino.definitions_['define_stepper28BYJ'] = '#include <CheapStepper.h>\n';
  Blockly.Arduino.definitions_['define_stepper28BYJ_'+steeper_number] = 'CheapStepper stepper28BYJ_'+steeper_number+'('+steeper_pin1+','+steeper_pin2+','+steeper_pin3+','+steeper_pin4+');\n';

  var code = '';
  
  return code;
};


Blockly.Arduino['stepper28BYJ_speed'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var stepper_speed = Blockly.Arduino.valueToCode(this, 'STEPPER_SPEED', Blockly.Arduino.ORDER_ATOMIC);
   
  var code = 'stepper28BYJ_'+steeper_number+'.setRpm('+stepper_speed+');\n'
   
  return code;
};

Blockly.Arduino['stepper28BYJ_steps'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var steeper_way = this.getFieldValue('STEEPER_WAY');
  var stepper_steps = Blockly.Arduino.valueToCode(this, 'STEPPER_STEP', Blockly.Arduino.ORDER_ATOMIC);
  
  if (steeper_way == '1')
    var code = 'stepper28BYJ_'+steeper_number+'.move(true,'+stepper_steps+');\n'
  else
	var code = 'stepper28BYJ_'+steeper_number+'.move(false,'+stepper_steps+');\n'  
   
  return code;
};
