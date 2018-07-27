goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');

Blockly.Arduino['arduino_setup'] = function(block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'MySetup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'MyLoop');
 
  Blockly.Arduino.setups_['setup'] = statements_setup;
 
  var code = statements_loop;
  return code;
};

Blockly.Arduino['arduino_codeall'] = function(block) {
    
  var text_received = this.getFieldValue('TEXT');
 
  var code = ''+text_received+'\n';
  return code;
};

Blockly.Arduino['arduino_waitforever'] = function(block) {
      
  var code = 'while(1);\n';
  return code;
};