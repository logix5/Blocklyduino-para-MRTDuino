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

goog.provide('Blockly.Blocks.conversion');

goog.require('Blockly.Blocks');

Blockly.Blocks.conversion.HUE = 165;
/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['conversion_tochar'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME")
        .appendField(Blockly.Msg.CONV_tochar);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Converts a value to the char data type.');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/CharCast');
  }
};

Blockly.Blocks['conversion_tobyte'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME")
        .appendField(Blockly.Msg.CONV_tobyte);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Converts a value to the Byte data type. ');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/ByteCast');
  }
};

Blockly.Blocks['conversion_toint'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME")
        .appendField(Blockly.Msg.CONV_toint);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Converts a value to the Int data type. ');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/IntCast');
  }
};

Blockly.Blocks['conversion_tofloat'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME")
        .appendField(Blockly.Msg.CONV_tofloat);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Converts a value to the float data type. ');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/floatCast');
  }
};