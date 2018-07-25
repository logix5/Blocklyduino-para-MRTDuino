/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.EEPROM');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['eeprom_write_byte'] = {		
  helpUrl: '',
  init: function() {
    this.setColour(200);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE);
    this.appendValueInput("DATA")
        .setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_DATA_BYTE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Write a byte into the EEPROM");
  }
};

Blockly.Blocks['eeprom_read_byte'] = {	
  init: function() {
    this.setColour(200);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_READ_BYTE);
    this.setOutput(true, Number);
	this.setInputsInline(true);
	this.setTooltip('Read a byte from the EEPROM');
  }
};

Blockly.Blocks['eeprom_write_variable'] = {		
  helpUrl: '',
  init: function() {
    this.setColour(200);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_VARIABLE);
    this.appendValueInput("DATA")
        //.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_DATA_VARIABLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Write a variable into the EEPROM.The sizeof of the variable");
  }
};

Blockly.Blocks['eeprom_read_variable'] = {	
  init: function() {
    this.setColour(200);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_READ_VARIABLE);
	this.appendValueInput("DATA")
        //.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_DATA_VARIABLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Read into the variable from the EEPROM.The size is the size of the variable");
  }
};

