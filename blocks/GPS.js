 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.GPS');

goog.require('Blockly.Blocks');

Blockly.Blocks['GPS_init_ss'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/GPS.png",54,38))
        .appendField(Blockly.Msg.GPS_init)
	 this.appendDummyInput()
		.appendField(Blockly.Msg.GPS_TX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN1");
    this.appendDummyInput()
		.appendField(Blockly.Msg.GPS_RX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN2");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the GPS module');
  }
};

Blockly.Blocks['GPS_init_serial1'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/GPS.png",54,38))
        .appendField(Blockly.Msg.GPS_init2)
		.appendField(Blockly.Msg.GPS_init3);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the GPS module');
  }
};


Blockly.Blocks['GPS_read_save_values'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/GPSicon.png",25,25))
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_readvalues)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Read the GPS values and save in the variables');
  }
};

Blockly.Blocks['GPS_read_save_values2'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/GPSicon.png",25,25))
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_readvalues2)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Read the GPS values and save in the variables');
  }
};

Blockly.Blocks['GPS_location'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/GPSicon.png",25,25))
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_paramter)
		.appendField(new Blockly.FieldDropdown([['Latitude','0'],['Longitude','1'],['Altitude in meters','2'],['Course in degrees','3'],['Number of satellites','4']]), "PARAMETERS1")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Return location parameters');
  }
};


Blockly.Blocks['GPS_speed'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/GPSicon.png",25,25))
        .appendField(Blockly.Msg.GPS_name)
		.appendField(new Blockly.FieldDropdown([['Speed in knots','0'],['Speed in miles/h','1'],['Speed in m/sec','2'],['Speed in km/h','3']]), "PARAMETERS2")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Return speed parameters');
  }
};

Blockly.Blocks['GPS_datetime'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/GPSicon.png",25,25))
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_paramter3)
		.appendField(new Blockly.FieldDropdown([['Year','0'],['Month','1'],['Day','2'],['Hours','3'],['Minutes','4'],['Seconds','5']]), "PARAMETERS3")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Return datetime parameters');
  }
};






