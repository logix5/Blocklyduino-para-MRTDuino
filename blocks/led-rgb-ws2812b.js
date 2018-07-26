 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.led-rgb-ws2812b');

goog.require('Blockly.Blocks');

Blockly.Blocks['LedStrip_WS2812B_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_init)
		.appendField(Blockly.Msg.ledstrip_WS2812B_init_Pin)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("Number_of_Leds")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_Number_of_Leds);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['LedStrip_WS2812B_setBrightness'] = {
  helpUrl: '',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
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



