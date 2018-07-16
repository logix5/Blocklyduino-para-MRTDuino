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

goog.provide('Blockly.Blocks.simpleSensors');
goog.require('Blockly.Blocks');

Blockly.Blocks['button_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/button.png",65,38))
	    .appendField(Blockly.Msg.BUTTON_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_BUTTON")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.BUTTON_LOGIC)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
		this.setOutput(true, 'Boolean');
		this.appendDummyInput()
		.appendField(Blockly.Msg.BUTTON_PRESSED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['button_touch_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/CapacitiveTouch.png",49,38))
	    .appendField(Blockly.Msg.BUTTON_TOUCH_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_BUTTON")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.BUTTON_LOGIC)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
		this.setOutput(true, 'Boolean');
		this.appendDummyInput()
		.appendField(Blockly.Msg.BUTTON_PRESSED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['tilt_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tilt.png",53,38))
	    .appendField(Blockly.Msg.TILT_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_BUTTON")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.TILT_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['photointerrupter_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/photointerrupter.png",52,38))
	    .appendField(Blockly.Msg.PHOTO_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_BUTTON")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.PHOTO_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['knock_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/knock.png",54,38))
	    .appendField(Blockly.Msg.KNOCK_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_BUTTON")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.KNOCK_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['ultrasonic_ranger_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/ultrasonic.png",45,38))
	    .appendField(Blockly.Msg.ultrasonic_ranger)
        .appendField(Blockly.Msg.TRIG)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_TRIG")
        .appendField(Blockly.Msg.Echo)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_ECHO");
    this.setOutput(true, 'Number');
    this.setTooltip('Non-contact distance measurement module');
  }
};

Blockly.Blocks['Analog_temperature_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/Analog_temperature.png",58,38))
        .appendField(Blockly.Msg.VAR_TemSens)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ºC');
  }
};

Blockly.Blocks['LM35_temperature_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/LM35_temperature.png",52,38))
        .appendField(Blockly.Msg.VAR_LM35)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ?C');
  }
};

Blockly.Blocks['potentiometer_ranger_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/potentiometer.png",47,38))
	    .appendField(Blockly.Msg.POTE_NAME)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN_POTENTIOMETER")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Potentiometer');
  }
};

Blockly.Blocks['LDR_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LDR.png",59,38))
	    .appendField(Blockly.Msg.LDR_NAME)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN_LDR")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('LDR Light sensor. Value');
  }
};

Blockly.Blocks['LDR_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LDR.png",59,38))
	    .appendField(Blockly.Msg.LDR_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_LDR")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.LDR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['IR_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/IR_simple.png",60,38))
	    .appendField(Blockly.Msg.IR_NAME)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN_IR")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Infrared sensor.Value');
  }
};

Blockly.Blocks['IR_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/IR_simple.png",60,38))
	    .appendField(Blockly.Msg.IR_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_IR")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.IR_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['Flame_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/flame.png",58,38))
	    .appendField(Blockly.Msg.FLAME_NAME)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN_FLAME")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Flame infrared sensor.Value');
  }
};

Blockly.Blocks['Flame_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/flame.png",58,38))
	    .appendField(Blockly.Msg.FLAME_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_FLAME")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.FLAME_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['Sound_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MIC.png",54,38))
	    .appendField(Blockly.Msg.SOUND_NAME)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN_SOUND")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PERCENT, "0"], [Blockly.Msg.VALUE, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('Analog sound sensor.Value');
  }
};

Blockly.Blocks['Sound_status_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MIC.png",54,38))
	    .appendField(Blockly.Msg.SOUND_NAME)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_SOUND")
	this.setOutput(true, 'Boolean');
   	this.appendDummyInput()
		.appendField(Blockly.Msg.SOUND_DETECTED)
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['dht_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/DHT.png",55,38))
	    .appendField(Blockly.Msg.DHT_NAME)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_DHT")
		.appendField(Blockly.Msg.DHT_Type)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Type11, "0"], [Blockly.Msg.DHT_Type21, "1"],[Blockly.Msg.DHT_Type22, "2"]]), "OUTPUT_TYPE")
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Temp, "0"], [Blockly.Msg.DHT_Humi, "1"],[Blockly.Msg.DHT_Head, "2"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
    this.setTooltip('DHT temperature, humidity and headindex sensor.Reading temperature or humidity takes about 250 milliseconds.OLD Sensor readings may also be up to 2 seconds (its a very slow sensor)');
  }
};


