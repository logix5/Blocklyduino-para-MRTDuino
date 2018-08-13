 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.APDS9960');

goog.require('Blockly.Blocks');

Blockly.Blocks['APDS9960_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/APDS9960.png",43,38))
        .appendField(Blockly.Msg.APDS9960_init)
		.appendField(Blockly.Msg.APDS9960_init2)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the APDS9960 sensor to use to detect gestures or color frequencies');
  }
};

Blockly.Blocks['APDS9960_gesture_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour(240);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/gesture.png",34,25))
        .appendField(Blockly.Msg.APDS9960_name_gesture)
		.appendField(Blockly.Msg.APDS9960_detection)
		.appendField(new Blockly.FieldDropdown([['Enable','1'],['Disable','0']]), "ENABLE")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Enable or disable the gesture module in the APDS9960');
  }
};


Blockly.Blocks['APDS9960_color_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour(260);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/color.png",26,25))
        .appendField(Blockly.Msg.APDS9960_name_color)
		.appendField(Blockly.Msg.APDS9960_detection)
		.appendField(new Blockly.FieldDropdown([['Enable','1'],['Disable','0']]), "ENABLE")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Enable or disable the color module in the APDS9960');
  }
};

Blockly.Blocks['APDS9960_gesture_gain'] = {
  helpUrl: '',
  init: function() {
	this.setColour(240);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/gesture.png",34,25))
        .appendField(Blockly.Msg.APDS9960_name_gesture)
		.appendField(Blockly.Msg.APDS9960_gesture_gain)
		.appendField(new Blockly.FieldDropdown([['Gain x1','0'],['Gain x2','1'],['Gain x4','2'],['Gain x8','3']]), "GAIN")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Config gain for gesture detection in the APDS9960');
  }
};

Blockly.Blocks['APDS9960_color_gain'] = {
  helpUrl: '',
  init: function() {
	this.setColour(260);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/color.png",26,25))
        .appendField(Blockly.Msg.APDS9960_name_color)
		.appendField(Blockly.Msg.APDS9960_color_gain)
		.appendField(new Blockly.FieldDropdown([['Gain x1','0'],['Gain x2','1'],['Gain x4','2'],['Gain x8','3']]), "GAIN")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Config gain for color detection in the APDS9960');
  }
};

Blockly.Blocks['APDS9960_gesture_detected'] = {
  helpUrl: '',
  init: function() {
	this.setColour(240);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/gesture.png",34,25))
        .appendField(Blockly.Msg.APDS9960_name_gesture)		
		.appendField(Blockly.Msg.APDS9960_gesture_detected)
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip('true if a gesture is detected');
  }
};

Blockly.Blocks['APDS9960_readgesture'] = {
  helpUrl: '',
  init: function() {
	this.setColour(240);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/gesture.png",34,25))
        .appendField(Blockly.Msg.APDS9960_name_gesture)		
		.appendField(Blockly.Msg.APDS9960_readgesture)
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Read gesture');
  }
};

Blockly.Blocks['APDS9960_gesture'] = {
  helpUrl: '',
  init: function() {
    this.setColour(240);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/gesture.png",34,25))
	    .appendField(Blockly.Msg.APDS9960_name_gesture)
        .appendField(new Blockly.FieldDropdown([['Dir Up','DIR_UP'],['Dir Down','DIR_DOWN'],['Dir Left','DIR_LEFT'],['Dir Right','DIR_RIGHT'],['Dir Far','DIR_FAR'],['Dir Near','DIR_NEAR']]), "DIRECTION");
   	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Gesture');
  }
};


Blockly.Blocks['APDS9960_read_colors'] = {
  helpUrl: '',
  init: function() {
	this.setColour(260);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/color.png",26,25))
        .appendField(Blockly.Msg.APDS9960_name_color)
		.appendField(Blockly.Msg.APDS9960_readcolors)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Read colors in the APDS9960 sensor');
  }
};

Blockly.Blocks['APDS9960_color'] = {
  helpUrl: '',
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/color.png",26,25))
	    .appendField(Blockly.Msg.APDS9960_name_color)
        .appendField(new Blockly.FieldDropdown([['Red','0'],['Green','1'],['Blue','2'],['Ambient light','3']]), "color")
		.appendField(Blockly.Msg.APDS9960_colors);
   	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('Color');
  }
};
