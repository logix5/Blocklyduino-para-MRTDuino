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

goog.provide('Blockly.Blocks.ADXL354');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Accel_ADXL354'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
		.appendField(Blockly.Msg.ADXL354)
		.appendField(Blockly.Msg.ADXL354_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to read the accel values in the ADXL354 sensors');
  }
};

Blockly.Blocks['config_adxl354_range'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	   // .appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
        .appendField(Blockly.Msg.ADXL354_config)
		.appendField(new Blockly.FieldDropdown([['2g','ADXL345_RANGE_2_G'],['4g','ADXL345_RANGE_4_G'],['8g','ADXL345_RANGE_8_G'],['16g','ADXL345_RANGE_16_G']]), "ADXL354_RANGE");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Config the range of the ADXL354 sensor");
  }
};

Blockly.Blocks['order_to_read_adxl354_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	   // .appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
        .appendField(Blockly.Msg.ADXL354_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Read the values of the ADXL354 sensor. The values are store in internal variable");
  }
};

Blockly.Blocks['adxl354_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
		.appendField(new Blockly.FieldDropdown([['Ax','0'],['Ay','1'],['Az','2']]), "TypeAccel")
	    .appendField(Blockly.Msg.ADXL354_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the parameter selected. Ax, Ay, Az, Roll and Pitch');
  }
};




