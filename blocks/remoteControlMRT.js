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

goog.provide('Blockly.Blocks.remoteControlMRT');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_remotecontrolMRT'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("images/Servo.png",50,38))
		.appendField(Blockly.Msg.MRT_IR)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
  	 this.appendDummyInput()
        .appendField(Blockly.Msg.MRT_CHANNEL)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'], ]), "CHANNEL");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Select the channel and the pin');
  }
};

Blockly.Blocks['IR_Remote_Key'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("images/joystick.png",46,38))
	    .appendField(Blockly.Msg.MRT_KEY)
		.appendField(new Blockly.FieldDropdown([["UP", "0x1FC3"], ["DOWN", "0x1F"],["LEFT", "0x07"],["RIGHT", "0x73"],["UP and LEFT", "0x7C3"],["UP and RIGHT", "0x7F"],["DOWN and LEFT", "0x70F"],["DOWN and RIGHT", "0x1CF"],["F1", "0x7CF"],["F2", "0x1C3F"],["F3", "0x7F3"],["F4", "0x1CCF"],["F5", "0x1F0F"],["F6", "0x703"],["OFF", "0x733"]]), "KEY")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MRT_PRESSED)
    this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('Check if the MRT remote control ir key is pressed');
  }
};



