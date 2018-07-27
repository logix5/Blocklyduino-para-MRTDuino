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

goog.provide('Blockly.Blocks.keypad');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Keypad4x4'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key4x4.png",51,38))
		.appendField(Blockly.Msg.KEYPAD_NAME)
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R3")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW4)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R4")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C3")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C4)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C4")	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init all to use the key pad 4x4');
  }
};

Blockly.Blocks['Init_Keypad4x3'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key4x3.png",36,38))
		.appendField(Blockly.Msg.KEYPAD_NAME2)
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R3")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW4)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R4")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C3")	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init all to use the key pad 4x3');
  }
};

Blockly.Blocks['keypad_keyreaded'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key.png",27,25))
		.appendField(Blockly.Msg.KEYPAD_KEYREADED)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the key pressed');
  }
};

Blockly.Blocks['keypad_key'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key.png",27,25))
		.appendField(Blockly.Msg.KEY)
		.appendField(new Blockly.FieldDropdown([['1', "1"], ['2', "2"],['3', "3"],['4', "4"],['5', "5"],['6', "6"],['7', "7"],['8', "8"],['9', "9"],['0', "0"],['A', "A"],['B', "B"],['C', "C"],['D', "D"],['*', "*"],['#', "#"],['No key', "NO_KEY"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Key');
  }
};

