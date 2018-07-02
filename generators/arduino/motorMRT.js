goog.provide('Blockly.Blocks.motorMRT');

goog.require('Blockly.Blocks');

Blockly.Arduino['motor_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Arduino.setups_['setup_motormrt']='mrt.begin();\n'

  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

