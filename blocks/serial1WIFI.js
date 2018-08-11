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

goog.provide('Blockly.Blocks.serial1WIFI');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['serial1_wifi_init'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERIAL1_WIFI_Init)
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERIAL1_WIFI_BAUD)
		.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to Serial1 creates a new Serial1 object');
  }
};

Blockly.Blocks['serial1_wifi_printfor'] = {
  helpUrl: 'http://arduino.cc/en/Serial/Println',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.Serial1_WIFI_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.Serial1_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial1_Print_ForHexa, "HEX"],[Blockly.Msg.Serial1_Print_ForBin, "BIN"],[Blockly.Msg.Serial1_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port with a specific format.');
  }
};

Blockly.Blocks['serial1_wifi_available'] = {
	helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_WIFI_Avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_read'] = {
	helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_WIFI_Read);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_println'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_WIFI_Println);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_WIFI_Print);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_write'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.SERIAL1_WIFI_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes to send the characters representing the digits of a number use the print() function instead. ');
  }
};

Blockly.Blocks['serial1_wifi_flush'] = {
	helpUrl: 'http://arduino.cc/en/Serial/Flush',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial1_WIFI_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('Waits for the transmission of outgoing serial data to complete.');
  }
};


