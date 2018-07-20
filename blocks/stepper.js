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

goog.provide('Blockly.Blocks.stepper');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['stepper_configuration'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/stepper.png",60,38))
		.appendField(Blockly.Msg.STEEPER_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER")
	this.appendValueInput("STEP_RPM", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.STEEPER_steprev)
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin1)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER1")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin2)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER2")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin3)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER3")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin4)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER4")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to Stepper library with the configuration');
  }
};

Blockly.Blocks['stepper_speed'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/stepper.png",60,38))
	.appendField(Blockly.Msg.STEEPER2_name)
	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER")
	this.appendValueInput("STEPPER_SPEED", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.STEEPER_speed)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Speed configuration');
  }
};

Blockly.Blocks['stepper_steps'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/stepper.png",60,38))
	.appendField(Blockly.Msg.STEEPER2_name)
	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER")
	this.appendValueInput("STEPPER_STEP", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.STEEPER_step)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Speed configuration');
  }
};



