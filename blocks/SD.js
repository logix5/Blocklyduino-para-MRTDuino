/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.SD');

goog.require('Blockly.Blocks');


Blockly.Blocks['sd_init'] = {
   init: function() {
    this.setColour(100);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.SD_init)
		.appendField(Blockly.Msg.SD_init2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.SD_PIN_CS)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the microSD sensor');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/SD');
  }
};

Blockly.Blocks['sd_mkdir'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_Makedir);
    this.appendValueInput("dirname")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/SD');
  }
};

Blockly.Blocks['sd_removedir'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_Removedir);
    this.appendValueInput("dirname")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('The directory must be empty');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/SD');
  }
};

Blockly.Blocks['sd_removefile'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_removefile);
    this.appendValueInput("filename")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/SD');
  }
};





/*

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
	
*/
