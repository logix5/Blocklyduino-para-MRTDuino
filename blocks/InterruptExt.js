 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.InterruptExt');

goog.require('Blockly.Blocks');

Blockly.Blocks['interrupts_attach'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField('Attach Interrupt');
        this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
        this.appendDummyInput().appendField('Mode').appendField(new Blockly.FieldDropdown([['Low', "LOW"], ['Change', "CHANGE"], ['Rising', "RISING"],['High', "HIGH"],['Falling', "FALLING"]]), "MODE");
        this.appendStatementInput("CONTENT");
        this.setInputsInline(true);
        this.setHelpUrl("")
    }};

Blockly.Blocks['interrupts_detach'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField("Detach");
        this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl("")
    }};

Blockly.Blocks['interrupts'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField('Interrupts');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl("")
    }};

Blockly.Blocks['interrupts_no'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField("No Interrupts");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl("")
    }};


