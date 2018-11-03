/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.MQTT');

goog.require('Blockly.Blocks');

Blockly.Blocks['mqtt_init'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/esp8266.png",62,38))
        .appendField(Blockly.Msg.MQTT_name_init)
		.appendField(Blockly.Msg.MQTT_name_init2)
		.appendField(Blockly.Msg.MQTT_name_init3);
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_ssid)
        .appendField(new Blockly.FieldTextInput("Red Wifi"), "SSID")
		.appendField(Blockly.Msg.MQTT_password)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx"), "PASSWORD");			
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_server)
        .appendField(new Blockly.FieldTextInput("io.adafruit.com"), "SERVER")
		.appendField(Blockly.Msg.MQTT_port)
        .appendField(new Blockly.FieldTextInput("1883"), "PORT");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_user)
        .appendField(new Blockly.FieldTextInput(" "), "USER")
		.appendField(Blockly.Msg.MQTT_APIkey)
        .appendField(new Blockly.FieldTextInput(" "), "APIKEY")	
		.appendField(Blockly.Msg.MQTT_client)
        .appendField(new Blockly.FieldTextInput("LX5_"), "IDCLIENT");	
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init mqtt functions');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mqtt_loop'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicattend)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic attend in the loop');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mqtt_topicReset'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicreset)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Attended topic');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['mqtt_subscribe'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicsubscribe)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicsubscribe2)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic subscription');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mqtt_publish'] = {
   init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicpublish)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicpublish2)
	this.appendValueInput("variable");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Topic subscription');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mqtt_TopicReceived'] = {
  init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
		.appendField(Blockly.Msg.MQTT_name)
	    .appendField(Blockly.Msg.MQTT_topicreceived)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicreceived2)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl('');
  }
};

Blockly.Blocks['mqtt_TopicValueNum'] = {
  init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
		.appendField(Blockly.Msg.MQTT_name)
	    .appendField(Blockly.Msg.MQTT_topicValueNum)
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl('');
  }
};

Blockly.Blocks['mqtt_TopicValueString'] = {
  init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
		.appendField(Blockly.Msg.MQTT_name)
	    .appendField(Blockly.Msg.MQTT_topicValueString)
	this.setOutput(true, 'String');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl('');
  }
};
