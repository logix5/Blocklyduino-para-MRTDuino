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
'use strict';

goog.provide('Blockly.Blocks.advanced');

goog.require('Blockly.Blocks');

Blockly.Blocks['arduino_setup'] = {
  init: function() {
	  this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Setup);
    this.appendStatementInput("MySetup");
    this.appendDummyInput()
        .appendField(Blockly.Msg.Loop);
    this.appendStatementInput("MyLoop");
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/HomePage');
    this.setDeletable(true);
  }
};

Blockly.Blocks['arduino_codeall'] = {
  init: function() {
	this.setColour(150);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Writecode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput('         '), 'TEXT')
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
    this.setHelpUrl('');
    
  }
};