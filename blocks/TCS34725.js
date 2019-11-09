/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.TCS34725');

goog.require('Blockly.Blocks');

Blockly.Blocks['init_tcs34725'] = {
   init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TCS34725.png",62,38))
        .appendField(Blockly.Msg.TCS34725_name_init)
		.appendField(Blockly.Msg.TCS34725_name_init2)
	 this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['No Gain configured ','TCS34725_GAIN_1X '],['4x Gain','TCS34725_GAIN_4X '],['16x Gain','TCS34725_GAIN_16X ']]), "Gain")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init tcs34725 functions');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['read_tcs34725'] = {
   init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TCS34725.png",49,38))
        .appendField(Blockly.Msg.TCS34725_name)
		.appendField(Blockly.Msg.TCS34725_read)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Read tcs34725 values');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['tcs34725_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	 this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TCS34725.png",49,38))
		.appendField(Blockly.Msg.TCS34725_name)
    this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['Red Raw','10'],['Green Raw','11'],['Blue Raw','12'],['Red (RGB)','0'],['Green (RGB)','1'],['Blue (RGB)','2'],['Clarity','3'],['Hue (HSV)','4'],['Saturation (HSV)','5'],['Value (HSV)','6'],['Lux','7'],['Temp ','8']]), "TypeValue")
		.appendField(Blockly.Msg.TCS34725_values)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund several values of the tcs34725 sensor ');
  }
};

Blockly.Blocks['tcs34725_color'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	 this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TCS34725.png",49,38))
		.appendField(Blockly.Msg.TCS34725_name)
    this.appendDummyInput()
		.appendField(Blockly.Msg.TCS34725_color)
		.appendField(new Blockly.FieldDropdown([['Red','0'],['Orange','1'],['Yellow','2'],['Green','3'],['Cyan','4'],['Blue','5'],['Violet','6']]), "TypeColor")
		.appendField(Blockly.Msg.TCS34725_color2)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('Refund the color selected ');
  }
};



