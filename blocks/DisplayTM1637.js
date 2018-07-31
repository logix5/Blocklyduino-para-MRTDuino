 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.DisplayTM1637');

goog.require('Blockly.Blocks');

Blockly.Blocks['DisplayTM1637_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.TM1637_init)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
    this.appendDummyInput()
		.appendField(Blockly.Msg.TM1637_PinCLK)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_CLK")
	 this.appendDummyInput()
		.appendField(Blockly.Msg.TM1637_PinDIO)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_DIO")
    this.appendValueInput("Britghness")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Brightness);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1637_setBrightness'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
    this.appendValueInput("Brightness")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Brightness);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};






/*

Blockly.Blocks['LedStrip_WS2812B_setBrightness'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "LEDSTRIP_NUMBER")
    this.appendValueInput("Brightness")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_Brightness);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['LedStrip_WS2812B_show'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_Show)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['LedStrip_WS2812B_clear'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_Clear)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['LedStrip_WS2812B_setPixelColor'] = {
  helpUrl: '',
  
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_setPixelColor)
		.appendField(new Blockly.FieldColour('#ff0000'), 'RGBCOLOR');	
    this.appendValueInput("Pixel_number")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_Led_Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

*/


