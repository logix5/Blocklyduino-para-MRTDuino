 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.DisplayTM1638');

goog.require('Blockly.Blocks');

Blockly.Blocks['DisplayTM1638_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1638.png",48,38))
        .appendField(Blockly.Msg.TM1638_init)
    this.appendDummyInput()
		.appendField(Blockly.Msg.TM1638_PinSTROBE)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_STROBE")
	 this.appendDummyInput()
		.appendField(Blockly.Msg.TM1638_PinCLOCK)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_CLOCK")
	this.appendDummyInput()
		.appendField(Blockly.Msg.TM1638_PinDATA)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_DATA")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1638_Reset'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1638.png",48,38))
        .appendField(Blockly.Msg.TM1638_name)
		.appendField(Blockly.Msg.TM1638_reset)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1638_set_leds'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1638.png",48,38))
		.appendField(Blockly.Msg.TM1638_name)
	this.appendValueInput("Position")
		.setCheck('Number')
		.appendField(Blockly.Msg.TM1638_SetLeds)
		.appendField(Blockly.Msg.TM1638_Position)
	this.appendDummyInput()
		.appendField(Blockly.Msg.TM1638_Led)
		.appendField(new Blockly.FieldDropdown([['ON','1'],['OFF','0']]), "TM1638_LED_ON_OFF")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1638_readbuttons'] = {
  helpUrl: '',
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1638.png",48,38))
		.appendField(Blockly.Msg.TM1638_name)   
	this.setOutput(true, 'Number');
	this.appendDummyInput()
		.appendField(Blockly.Msg.TM1638_Buttons)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['DisplayTM1638_text'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1638.png",48,38))
		.appendField(Blockly.Msg.TM1638_name)   
   	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.TM1638_Text);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['DisplayTM1638_hex'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1638.png",48,38))
		.appendField(Blockly.Msg.TM1638_name)
	this.appendValueInput("Position")
		.setCheck('Number')
		.appendField(Blockly.Msg.TM1638_Hex)
		.appendField(Blockly.Msg.TM1638_Position)
	this.appendValueInput("Number")
		.setCheck('Number')
		.appendField(Blockly.Msg.TM1638_Number)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Blocks['DisplayTM1638_digit'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1638.png",48,38))
		.appendField(Blockly.Msg.TM1638_name)
	this.appendValueInput("Position")
		.setCheck('Number')
		.appendField(Blockly.Msg.TM1638_Digit)
		.appendField(Blockly.Msg.TM1638_Position)
	this.appendValueInput("Number2")
		.setCheck('Number')
		.appendField(Blockly.Msg.TM1638_Value)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


