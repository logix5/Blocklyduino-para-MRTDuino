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

goog.provide('Blockly.Blocks.genericTime');

goog.require('Blockly.Blocks');

Blockly.Blocks['base_delayms'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(230);
	this.appendValueInput("DELAY_TIME", 'Number')
		.appendField(new Blockly.FieldImage("images/crono.png",19,20))
        .appendField(Blockly.Msg.DelayMs)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in milisecond');
  }
};

Blockly.Blocks['base_delays'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
     this.setColour(230);
    this.appendValueInput("DELAY_TIME", 'Number')
		.appendField(new Blockly.FieldImage("images/crono.png",19,20))
        .appendField(Blockly.Msg.DelayS)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in second');
  }
};

Blockly.Blocks['base_delaymicros'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
     this.setColour(230);
    this.appendValueInput("DELAY_TIME", 'Number')
		.appendField(new Blockly.FieldImage("images/crono.png",19,20))
        .appendField(Blockly.Msg.DelayMicros)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in microsenconds');
  }
};

Blockly.Blocks['micros'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Millis',
  init: function() {
     this.setColour(230);
      this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("images/crono.png",19,20))
          .appendField(Blockly.Msg.MicroSecondSinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('Number of microseconds since the program started (unsigned long)');
  }
};

Blockly.Blocks['millis'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Millis',
  init: function() {
     this.setColour(230);
      this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("images/crono.png",19,20))
          .appendField(Blockly.Msg.SinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('Number of milliseconds since the program started (unsigned long)');
  }
};

Blockly.Blocks['seconds'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Millis',
  init: function() {
     this.setColour(230);
      this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("images/crono.png",19,20))
          .appendField(Blockly.Msg.SecondSinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('Number of seconds since the program started (unsigned long)');
  }
};

Blockly.Blocks['tempo_no_delay'] = {
	init: function() {
		this.setColour(230);
		this.appendValueInput("DELAY_TIME")
			.setCheck("Number")
			.appendField(new Blockly.FieldImage("images/crono.png",19,20))
			.appendField(Blockly.Msg.ARDUINO_BASE_TEMPO1);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ARDUINO_BASE_TEMPO_TIME), "unit")
			.appendField(Blockly.Msg.ARDUINO_BASE_TEMPO2);
		this.appendStatementInput("branch");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

