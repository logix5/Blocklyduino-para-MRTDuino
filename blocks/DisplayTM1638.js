﻿ /***************************************************************
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
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
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
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
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
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
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




/*



Blockly.Blocks['DisplayTM1637_clear'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.M1637_Clear)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1637_set_numberall'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
	this.appendValueInput("valuenumber")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_number)
	this.appendValueInput("Digit")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Digit)
	this.appendValueInput("Length")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Length)
	this.appendDummyInput()
		.appendField(Blockly.Msg.M1637_fill)
		.appendField(new Blockly.FieldDropdown([['ON','true'],['OFF','false']]), "TM1637_LEADING")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1637_setsegment'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
	this.appendValueInput("SegmentDigit")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_digitsegment)
	this.appendValueInput("SegmentValue")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_value)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1637_segments'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
		.appendField(Blockly.Msg.M1637_arraysegment)
	this.appendValueInput("Digit")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Digit)
	this.appendValueInput("Length")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Length)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


*/



