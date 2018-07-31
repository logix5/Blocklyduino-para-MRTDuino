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

goog.provide('Blockly.Blocks.HMC5883');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Compass_HMC5883'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/HMC5883.png",42,38))
		.appendField(Blockly.Msg.HMC5883)
		.appendField(Blockly.Msg.HMC5883_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the libraries to read the magnet values in the HMC5883 sensors');
  }
};

Blockly.Blocks['order_to_read_HMC5883_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/HMC5883.png",42,38))
        .appendField(Blockly.Msg.HMC5883_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Read the values of the HMC5883 sensor. The values are store in internal variable.The units are radians");
  }
};

Blockly.Blocks['HMC5883_values'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/HMC5883.png",42,38))
		.appendField(new Blockly.FieldDropdown([['magnetic vector.X','0'],['magnetic vector.Y','1'],['magnetic vector.Z','2'],['Heading ºdegree','3']]), "TypeMag")
	    .appendField(Blockly.Msg.HMC5883_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the parameter selected. x, y, z, and Orientation magnetic in degree(Heading).You must then add your Declination Angle. http://www.magnetic-declination.com/');
  }
};




