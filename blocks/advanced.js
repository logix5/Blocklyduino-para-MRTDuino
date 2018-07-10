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

Blockly.Blocks['advanced_pulsein'] = {
  helpUrl: 'http://arduino.cc/en/Reference/pulseIn',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
                .appendField(Blockly.Msg.PulseIn)
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
            	.appendField(Blockly.Msg.INOUT_STAT)
                .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH_LEVEL, "HIGH"], [Blockly.Msg.INOUT_LOW_LEVEL, "LOW"]]), "STAT");
    this.setOutput(true, 'Number');
    this.setTooltip('Reads a pulse (either HIGH or LOW) on a pin. For example, if value is HIGH, pulseIn() waits for the pin to go HIGH, starts timing, then waits for the pin to go LOW and stops timing. Returns the length of the pulse in microseconds. Gives up and returns 0 if no pulse starts within a specified time out.');
  }
};


Blockly.Blocks['arduino_setup'] = {
  init: function() {
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