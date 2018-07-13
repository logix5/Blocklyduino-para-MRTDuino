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

goog.provide('Blockly.Blocks.motorMRT');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['motor_run'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/MotorMRT.png",45,29))
	this.appendDummyInput()
	.appendField(Blockly.Msg.MOTOR_Connector)
	.appendField(new Blockly.FieldDropdown([['ML1'],['MR1'],['ML2'],['MR2']]), "MOTOR_CON");
    this.appendDummyInput()
    .appendField(Blockly.Msg.MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Foward', 'HIGH'],['Backward', 'LOW'],['Stop', 'STOP']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to SoftwareSerial(rxPin, txPin) creates a new SoftwareSerial object');
  }
};


