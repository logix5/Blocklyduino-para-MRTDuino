/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
 
 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
 
'use strict';

goog.provide('Blockly.Blocks.MAX7219_ledmatrix');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_MAX7219_ledmatrix'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME)
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_DAT)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_DAT")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_CLK)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CLK")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_CS)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_Number)
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'],['3', '3'],['4', '4']]), "NumberDisplays")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the library to use the led matrixs');
  }
};

Blockly.Blocks['MAX7219_ledmatrix_shutdown'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_SHUTDOWN)
		.appendField(new Blockly.FieldDropdown([['ON', 'false'], ['OFF', 'true']]), "power")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('The device will switch off/on all the LEDs on the matrix, but the data is retained!!.');
  }
};

Blockly.Blocks['MAX7219_ledmatrix_brightness'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("BRIGHTNESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_LM_Brightness)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Config the brigthness of the leds');
  }
};

Blockly.Blocks['MAX7219_ledmatrix_clear'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
		.appendField(Blockly.Msg.MAX7219_LM_CLEAR)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Clear the display');
  }
};


Blockly.Blocks['MAX7219_ledmatrix_draw'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
		.appendField(Blockly.Msg.MAX7219_LM_PAINT);
    this.appendDummyInput()
        .appendField('  ')
        .appendField(' 0')
        .appendField('    1')
        .appendField('   2')
        .appendField('    3')
        .appendField('   4')
        .appendField('    5')
        .appendField('   6')
        .appendField('    7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel0')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel1')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel2')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel3')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel4')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel5')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel6')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel8')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel9')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel10')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel11')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel12')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel13')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel14')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel16')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel17')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel18')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel19')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel20')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel21')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel22')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel24')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel25')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel26')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel27')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel28')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel29')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel30')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel32')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel33')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel34')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel35')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel36')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel37')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel38')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel40')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel41')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel42')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel43')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel44')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel45')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel46')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel48')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel49')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel50')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel51')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel52')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel53')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel54')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel55');
    this.appendDummyInput()
        .appendField('7 ')
		.appendField(new Blockly.FieldColour('#ffffff'), 'Pixel56')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel57')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel58')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel59')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel60')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel61')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel62')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Paint a image drawn in this block');
  }
};

Blockly.Blocks['MAX7219_ledmatrix_row'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_Row)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3'],['5', '4'], ['6', '5'],['7', '6'],['8', '7']]), "Row")	
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_value)	
		.appendField(new Blockly.FieldTextInput('B00010000'), 'VALUE')
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['MAX7219_ledmatrix_column'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_Column)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3'],['5', '4'], ['6', '5'],['7', '6'],['8', '7']]), "Column")	
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_value)	
		.appendField(new Blockly.FieldTextInput('B00010000'), 'VALUE')
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['MAX7219_ledmatrix_led'] = {
  helpUrl: 'https://playground.arduino.cc/Main/LedControl',
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_lm.png",42,38))
		.appendField(Blockly.Msg.MAX7219_LM_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_Row)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3'],['5', '4'], ['6', '5'],['7', '6'],['8', '7']]), "Row")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_LM_Column)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3'],['5', '4'], ['6', '5'],['7', '6'],['8', '7']]), "Column")	
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_Led)
		.appendField(new Blockly.FieldDropdown([['ON', 'true'], ['OFF', 'false']]), "power")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


