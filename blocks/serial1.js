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

goog.provide('Blockly.Blocks.serial1');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['serial1_init'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(20);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendDummyInput()
	.appendField(Blockly.Msg.SERIAL1_Init)
    this.appendDummyInput()
    .appendField(Blockly.Msg.SERIAL1_BAUD)
	.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to SoftwareSerial(rxPin, txPin) creates a new SoftwareSerial object');
  }
};

Blockly.Blocks['serial1_available'] = {
	helpUrl: '',
  init: function() {
    this.setColour(20);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_Avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_read'] = {
	helpUrl: '',
  init: function() {
    this.setColour(20);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_Read);
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_Print);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_write'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_Write);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_flush'] = {
	helpUrl: 'http://arduino.cc/en/Serial/Flush',
  init: function() {
    this.setColour(20);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial1_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('Waits for the transmission of outgoing serial data to complete.');
  }
};




