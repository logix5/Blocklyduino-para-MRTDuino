/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.RFID');

goog.require('Blockly.Blocks');


Blockly.Blocks['rfid_init'] = {
   init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.RFID_init)
		.appendField(Blockly.Msg.RFID_init2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.RFID_PIN_SDA)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_SDA")
		.appendField(Blockly.Msg.RFID_PIN_RST)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RST");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Important The VCC must be connected to 3.3V!!');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['rfid_validationcard'] = {
   init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cardRFID.png",49,38))
        .appendField(Blockly.Msg.RFID_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_VALID_VAR)
        .appendField(new Blockly.FieldTextInput("cardx"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C1)
        .appendField(new Blockly.FieldTextInput("0x3F"), "C1");
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C2)
        .appendField(new Blockly.FieldTextInput("0x01"), "C2");
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C3)
        .appendField(new Blockly.FieldTextInput("0x23"), "C3");
		this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_C4)
        .appendField(new Blockly.FieldTextInput("0x44"), "C4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write validation cards or keys');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['RFID_detected'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cardRFID.png",49,38))
		.appendField(Blockly.Msg.RFID_name)
	    .appendField(Blockly.Msg.RFID_DETECTED)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['RFID_readed'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cardRFID.png",49,38))
		.appendField(Blockly.Msg.RFID_name)
	    .appendField(Blockly.Msg.RFID_READED)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['RFID_card_readed'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cardRFID.png",49,38))
		.appendField(Blockly.Msg.RFID_name)
	    .appendField(Blockly.Msg.RFID_CARD_READED)
	this.setOutput(true, 'String');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['RFID_check_card'] = {
  helpUrl: '',
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cardRFID.png",49,38))
		.appendField(Blockly.Msg.RFID_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_CHECK_CARD)
        .appendField(new Blockly.FieldTextInput("cardx"), "NAME")
		.appendField(Blockly.Msg.RFID_CHECK_CARD2)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};
	

