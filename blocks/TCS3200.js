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

goog.provide('Blockly.Blocks.TCS3200');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_ColorSensor_TCS3200'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2']]), "SC_NUMBER")
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S0PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S0");
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S1PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S1");
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S2PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S2");
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S3PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S3");
	this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_OUTPIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "OUT")
	this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_config)
        .appendField(new Blockly.FieldDropdown([['100%','4'],['20%','3'],['2%','2'],['Power Down','1']]), "ESCALE")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the signals to TCS3200 color sensor');
  }
};


Blockly.Blocks['order_to_read_tcs3200_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_name)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2']]), "SC_NUMBER")
	 this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Read the values of the TCS3200 sensor. The values are store in internal variable");
  }
};

Blockly.Blocks['tcs3200_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	 this.appendDummyInput()
	 //.appendField(new Blockly.FieldImage("images/ADXL345.png",50,38))
		.appendField(Blockly.Msg.TCS3200_name)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2']]), "SC_NUMBER")
    this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_values)
		.appendField(new Blockly.FieldDropdown([['Red','0'],['Green','1'],['Blue','2']]), "TypeColor")
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the color  selected. Red, blue and green');
  }
};




