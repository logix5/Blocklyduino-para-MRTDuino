/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.IOT');

goog.require('Blockly.Blocks');

Blockly.Blocks['iot_init_iot'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/esp8266.png",62,38))
        .appendField(Blockly.Msg.IOT_name_init)
		.appendField(Blockly.Msg.IOT_name_init2)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init iot functions');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_init_ifttt'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
		.appendField(Blockly.Msg.IOT_name_initIFTTT);
	this.appendValueInput("APIwrite")
		.appendField(Blockly.Msg.IOT_APIKEY)
        .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init API IFTTT');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_init_thinkspeak'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
		.appendField(Blockly.Msg.IOT_name_initThinkspeak);
	this.appendValueInput("APIwrite")
		.appendField(Blockly.Msg.IOT_APIKEY)
        .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init API Thinkspeak');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_reset_esp8266'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
		.appendField(Blockly.Msg.IOT_Reset);
	this.appendValueInput("delaytime")
        .setCheck('Number');
	this.appendDummyInput()
	    .appendField(Blockly.Msg.IOT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('reset wifi');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_configbaudios_esp8266'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.IOT_Baudios)
		.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
	this.appendValueInput("delaytime")
		.appendField(Blockly.Msg.IOT_delaytime)
        .setCheck('Number');
	this.appendDummyInput()
	    .appendField(Blockly.Msg.IOT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('config baudios');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['iot_confignetwork_esp8266'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.IOT_config_network)
	this.appendValueInput("ssid")
		.appendField(Blockly.Msg.IOT_ssid)
        .setCheck('String');
	this.appendValueInput("password")
		.appendField(Blockly.Msg.IOT_Password)
        .setCheck('String');		
	this.appendValueInput("delaytime")
		.appendField(Blockly.Msg.IOT_delaytime)
        .setCheck('Number');
	this.appendDummyInput()
	    .appendField(Blockly.Msg.IOT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('config network');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_configmode_esp8266'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.IOT_config_mode)
		.appendField(new Blockly.FieldDropdown([['Station mode (client)', '1'],['AP mode (host)', '2'],['AP + Station mode', '3']]), "MODE");
	this.appendValueInput("delaytime")
		.appendField(Blockly.Msg.IOT_delaytime)
        .setCheck('Number');
	this.appendDummyInput()
	    .appendField(Blockly.Msg.IOT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('config mode');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_sendifttt_esp8266'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.IOT_sendifft)
	this.appendValueInput("event")
		.appendField(Blockly.Msg.IOT_eventname)
        .setCheck('String');
	this.appendValueInput("value1")
		.appendField(Blockly.Msg.IOT_value1)
        .setCheck('Number');	
	this.appendValueInput("value2")
		.appendField(Blockly.Msg.IOT_value2)
        .setCheck('Number');
	this.appendValueInput("value3")
		.appendField(Blockly.Msg.IOT_value3)
        .setCheck('Number');
	this.appendDummyInput()
	    .appendField(Blockly.Msg.IOT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('send to iftt');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_sendthinkspeak_esp8266'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png",34,25))
        .appendField(Blockly.Msg.IOT_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.IOT_sendthinkspeak)
	this.appendValueInput("field")
		.appendField(Blockly.Msg.IOT_field)
        .setCheck('String');
	this.appendValueInput("value")
		.appendField(Blockly.Msg.IOT_value)
        .setCheck('Number');	
	this.appendDummyInput()
	    .appendField(Blockly.Msg.IOT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('send to thinkspeak');
    this.setHelpUrl('');
  }
};


