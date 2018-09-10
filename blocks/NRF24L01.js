/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.NRF24L01');

goog.require('Blockly.Blocks');


Blockly.Blocks['nrf24l01_init'] = {
   init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nrf24l01.png",41,38))
        .appendField(Blockly.Msg.RF24L01_init)
		.appendField(Blockly.Msg.RF24L01_init2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.RF24L01_PIN_CE)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CE")
	this.appendDummyInput()	
        .appendField(Blockly.Msg.RF24L01_PIN_CS)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the RF  sensor');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nrf24l01_writepipe'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_writepipe);
    this.appendValueInput("writepipe")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nrf24l01_readpipe'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_readpipe);
    this.appendValueInput("readpipe")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nrf24l01_startlistening'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_startlistening);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nrf24l01_stoplistening'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_stoplistening);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nrf24l01_sendvar'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_sendvar);
	this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nrf24l01_recvvar'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_recvvar);
	this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nrf24l01_recv_available'] = {
  helpUrl: '',
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
	    .appendField(Blockly.Msg.RF24L01_datavailable)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

