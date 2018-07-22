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

goog.provide('Blockly.Blocks.RotaryEncoder');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_RotaryEncoderInterrupt'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderInit)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
	this.appendDummyInput()
		.appendField(Blockly.Msg.RE_Interrupt)
        .appendField(Blockly.Msg.RE_PINDT)
        .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PINDT");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.RE_PINCLK)
        .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PINCLK");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to manage rotary encoder using interrupts. More precision');
  }
};

Blockly.Blocks['Init_RotaryEncoder'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderInit)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
	this.appendDummyInput()
		.appendField(Blockly.Msg.RE_withoutInterrupt)
        .appendField(Blockly.Msg.RE_PINDT)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PINDT");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.RE_PINCLK)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PINCLK");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to manage rotary encoder without interrupts. Less precision');
  }
};


Blockly.Blocks['RotaryEncoder_Write'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_WRITE);
	this.appendValueInput("Writecounter")
        .setCheck("Number");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Write the internal counter of the rotary Encoder");
  }
};


Blockly.Blocks['RotaryEncoder_Read'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_READ)
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Read the internal counter of the rotary Encoder');
  }
};

Blockly.Blocks['rotaryencoder_button_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_Button)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RE_BUTTON");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RE_Pressed)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};




