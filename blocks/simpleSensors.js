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

goog.provide('Blockly.Blocks.simpleSensors');
goog.require('Blockly.Blocks');

Blockly.Blocks['button_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/button.png",65,38))
	    .appendField(Blockly.Msg.BUTTON_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_BUTTON")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.BUTTON_LOGIC)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
		this.setOutput(true, 'Boolean');
		this.appendDummyInput()
		.appendField(Blockly.Msg.BUTTON_PRESSED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};
