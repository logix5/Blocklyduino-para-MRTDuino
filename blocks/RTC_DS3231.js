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

goog.provide('Blockly.Blocks.RTC_DS3231');
goog.require('Blockly.Blocks');


Blockly.Blocks['Init_RTC_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour(190);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
		.appendField(Blockly.Msg.RTCDS3231_NAME)
    this.appendValueInput("DS3231_DAY")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_DAY);
	this.appendValueInput("DS3231_MONTH")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_MONTH);		
	this.appendValueInput("DS3231_YEAR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_YEAR);		
	this.appendValueInput("DS3231_HOUR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_HOUR);		
	this.appendValueInput("DS3231_MINUTE")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_MINUTE);		
	this.appendValueInput("DS3231_SECOND")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_SECOND);		
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init all to use the RTC_DS3231');
  }
};


Blockly.Blocks['order_read_rtc_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
	   .appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
        .appendField(Blockly.Msg.RTCDS3231_READ_RTC);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Order to read the rtc");
  }
};

Blockly.Blocks['values_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
		.appendField(Blockly.Msg.RTCDS3231_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_YEAR, "0"], [Blockly.Msg.RTCDS3231_MONTH, "1"],[Blockly.Msg.RTCDS3231_DAY, "2"],[Blockly.Msg.RTCDS3231_HOUR, "3"],[Blockly.Msg.RTCDS3231_MINUTE, "4"],[Blockly.Msg.RTCDS3231_SECOND, "5"],[Blockly.Msg.RTCDS3231_DOFWEEK, "6"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.RTCDS3231_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Refund the date or time parameter');
  }
};

Blockly.Blocks['values_text_ds3231'] = {
  helpUrl: '',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
		.appendField(Blockly.Msg.RTCDS3231_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_TEXT_DOFWEEK, "0"], [Blockly.Msg.RTCDS3231_TEXT_MONTH, "1"]]), "OUTPUT_VALUE")
	    //.appendField(Blockly.Msg.RTCDS3231_VALUES)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the text of day of week or month');
  }
};



