/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
 
goog.provide('Blockly.Blocks.InterruptExt');

goog.require('Blockly.Blocks');


Blockly.Arduino['interrupts_attach'] = function (block) {
    var a = this.getFieldValue("PIN"), b = this.getFieldValue("MODE"), c = Blockly.Arduino.statementToCode(this, "CONTENT");
    Blockly.Arduino.setups_["setup_interrupt_" + a] = 'attachInterrupt(digitalPinToInterrupt('+a+'),interrupt_' + a + ',' + b + ');';
    Blockly.Arduino.definitions_["define_interrupt_" + a] = "void interrupt_" + a + "(){\n" + c + "}\n";
	
    return ""
};

Blockly.Arduino.interrupts_detach = function () {
	
    return "detachInterrupt(" + this.getFieldValue("PIN") + ");\n"
};

Blockly.Arduino.interrupts = function () {
	
    return "interrupts();\n"
};

Blockly.Arduino.interrupts_no = function () {
	
    return "noInterrupts();\n"
};