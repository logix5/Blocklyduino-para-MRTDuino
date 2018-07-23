/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/


goog.provide('Blockly.Blocks.genericTime');

goog.require('Blockly.Blocks');

Blockly.Arduino['base_delayms'] = function(block) {
  var delay_time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['base_delays'] = function(block) {
  var delay_time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var code = 'delay(' + delay_time + '*1000);\n';
  return code;
};

Blockly.Arduino['base_delaymicros'] = function(block) {
  var delay_time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var code = 'delayMicroseconds(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['micros'] = function(block) {
  var code = 'micros()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['millis'] = function(block) {
  var code = 'millis()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['seconds'] = function(block) {
  var code = 'millis()/1000';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tempo_no_delay'] = function(block) {
    var _u = block.getFieldValue("unit");
    var delay_time = Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
	var faire = Blockly.Arduino.statementToCode(block, "branch");
	
    switch (_u) {
        case "us":
			var temps = "tempus"+delay_time;
			Blockly.Arduino.definitions_["temporization_us"+delay_time] = "long "+temps+" = 0 ;";
            var code = "if ((micros()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=micros();\n"+faire+"}\n";
            break;
        case "ms":
			var temps = "tempms"+delay_time;
			Blockly.Arduino.definitions_["temporization_ms"+delay_time] = "long "+temps+" = 0 ;";
            var code = "if ((millis()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=millis();\n"+faire+"}\n";
            break;
        case "s":
			var temps = "temps"+delay_time;
			Blockly.Arduino.definitions_["temporization_s"+delay_time] = "long "+temps+" = 0 ;";
            code = "if ((millis()-"+temps+")>=" + delay_time + "*1000) {\n  "+temps+"=millis();\n"+faire+"}\n";
            break
    };
    return code
};
