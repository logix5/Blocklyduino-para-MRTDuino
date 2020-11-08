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

goog.provide('Blockly.Blocks.CCS811');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_CCS811'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/CCS811.png",50,38))
		.appendField(Blockly.Msg.CCS811)
		.appendField(Blockly.Msg.CCS811_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to read the values in the CCS811 sensors');
  }
};

Blockly.Blocks['CCS811_available'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/CCS811.png",50,38))
		.appendField(Blockly.Msg.CCS811_name)
	    .appendField(Blockly.Msg.CCS811_available)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['CCS811_readed'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/CCS811.png",50,38))
		.appendField(Blockly.Msg.CCS811_name)
	    .appendField(Blockly.Msg.CCS811_readed)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['CCS811_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/CCS811.png",50,38))
		.appendField(Blockly.Msg.CCS811_name)
		.appendField(new Blockly.FieldDropdown([['eCO2 ppm','0'],['TVOC ppb','1']]), "TypeMeasure")
	    .appendField(Blockly.Msg.ADXL345_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the parameter selected. eCO2 (equivalent calculated carbon-dioxide) or TVOC (Total Volatile Organic Compound)');
  }
};



