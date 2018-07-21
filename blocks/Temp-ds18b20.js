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

goog.provide('Blockly.Blocks.Temp-ds18b20');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Temp_ds18b20'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
		.appendField(Blockly.Msg.TempDS18B20)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to read the Temperature using the DS18B20 sensors');
  }
};

Blockly.Blocks['order_read_temeperature_ds18b20'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
        .appendField(Blockly.Msg.OrderReadTempDS18B20);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Order to read the temperature using the 1-wire protocol");
  }
};


Blockly.Blocks['read_temeperature_ds18b20'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
	    .appendField(Blockly.Msg.ReadTempDS18B20)
	this.appendValueInput("Sensor")
        .setCheck("Number");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Read the temperature of one sensor in the bus');
  }
};



