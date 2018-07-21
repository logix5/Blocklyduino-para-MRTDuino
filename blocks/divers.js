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

goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');

Blockly.Blocks['base_delayms'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
     this.setColour(150);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField(Blockly.Msg.DelayMs)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in Ms');
  }
};

Blockly.Blocks['millis'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Millis',
  init: function() {
     this.setColour(150);
      this.appendDummyInput()
          .appendField(Blockly.Msg.SinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('Number of milliseconds since the program started (unsigned long)');
  }
};

Blockly.Blocks['var_random'] = {
  init: function() {
    this.setColour(150);
    this.setHelpUrl('');
    this.appendValueInput("rand_min")
        .setCheck("Number")
        .appendField(Blockly.Msg.RandomBetween);
    this.appendValueInput("rand_max")
        .setCheck("Number")
        .appendField(Blockly.Msg.And);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['various_constrain'] = {
  init: function() {
      this.setColour(150);
    this.setHelpUrl('http://arduino.cc/en/Reference/Constrain');
    this.appendDummyInput()
        .appendField(Blockly.Msg.Constrain);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg.Number);
    this.appendValueInput("a")
        .setCheck("Number")
        .appendField(Blockly.Msg.NumberA);
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField(Blockly.Msg.NumberB);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Constrains a number to be within a range. ');
  }
};