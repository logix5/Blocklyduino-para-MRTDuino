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

goog.provide('Blockly.Blocks.advanced');

goog.require('Blockly.Blocks');

Blockly.Blocks['actuator_led'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/led_diode.png",54,38))
        .appendField(Blockly.Msg.LedPin)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
     this.appendDummyInput()
        .appendField(Blockly.Msg.ONOFF)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "HIGH"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "LOW"]]), "STATUS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn ON or OFF the leds");
  }
};

Blockly.Blocks['actuator_laser'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/laser.png",34,38))
        .appendField(Blockly.Msg.LaserPin)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
     this.appendDummyInput()
        .appendField(Blockly.Msg.ONOFF)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "HIGH"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "LOW"]]), "STATUS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn ON or OFF the laser");
  }
};

Blockly.Blocks['actuator_rele'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/rele.png",47,38))
        .appendField(Blockly.Msg.RelePin)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
     this.appendDummyInput()
        .appendField(Blockly.Msg.ONOFF)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "HIGH"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "LOW"]]), "STATUS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn ON or OFF the rele");
  }
};

Blockly.Blocks['actuator_tonedure'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/buzzer.png",46,38))
        .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.Frequence)
        .setCheck("Number");
    this.appendValueInput("DUR", "Number")
        .appendField(Blockly.Msg.Duration)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Generate audio tones on a pin.NOTE: If servomotor is used then the port10 doesn´t work, you must use other port");
  }
};

Blockly.Blocks['actuator_notone'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/NoTone',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/buzzer.png",46,38))
        .appendField(Blockly.Msg.NoTonePin)
        .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Stops the generation of a square wave triggered by tone().Has no effect if no tone is being generated.NOTE: If servomotor is used then the port10 doesn´t work, you must use other port");
  }
};


/*
Blockly.Blocks['actuator_tone'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.Frequence)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Generate audio tones on a pin");
  }
};
/*

*/
