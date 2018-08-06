 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.DFPlayerMp3');

goog.require('Blockly.Blocks');

Blockly.Blocks['DFPplayerMp3_init_ss'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio.png",53,38))
        .appendField(Blockly.Msg.MP3_init)
	 this.appendDummyInput()
		.appendField(Blockly.Msg.MP3_TX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN1");
    this.appendDummyInput()
		.appendField(Blockly.Msg.MP3_RX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN2");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the DFPlayer mini MP3 module');
  }
};

Blockly.Blocks['DFPplayerMp3_init_serial1'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio.png",53,38))
        .appendField(Blockly.Msg.MP3_init2)
		.appendField(Blockly.Msg.MP3_init3);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the DFPlayer mini MP3 module');
  }
};

Blockly.Blocks['DFPplayerMp3_set_equalizator'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_equalizer)
		.appendField(new Blockly.FieldDropdown([['Normal','0'],['Pop','1'],['Rock','2'],['Jazz','3'],['Classic','4'],['Bass','5']]), "MP3_EQ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the equalizer of MP3');
  }
};

Blockly.Blocks['DFPplayerMp3_set_volumen'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_volumen)
	this.appendValueInput("Volumen")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the volumen of MP3');
  }
};

Blockly.Blocks['DFPplayerMp3_get_values'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_property)
		.appendField(new Blockly.FieldDropdown([['Volumen Level','0'],['Equalizer value','1'],['MP3 status','2']]), "MP3_PROPERTY")
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Get mp3 property');
  }
};

Blockly.Blocks['DFPplayerMp3_operation'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_operation)
		.appendField(new Blockly.FieldDropdown([['Increase Volumen','0'],['Decrease Volumen','1'],['Reproduce next Song','2'],['Reproduce before Song','3'],['Pause Song','4'],['Resume Song','5'],['Reproduce random all songs','6']]), "MP3_OPERATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Make an operation');
  }
};

Blockly.Blocks['DFPplayerMp3_repeatoperation'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_repeatoperation)
		.appendField(new Blockly.FieldDropdown([['Enable repeat one song','1'],['Disable repeat one song','2'],['Enable repeat all songs','3'],['Disable repeat all songs','4']]), "MP3_REPEATOPERATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set repeat mode');
  }
};

Blockly.Blocks['DFPplayerMp3_playsong'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_playsong)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one song');
  }
};

Blockly.Blocks['DFPplayerMp3_playsongdirectiry'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
	this.appendValueInput("Song")
		.appendField(Blockly.Msg.MP3_playsong)
		.setCheck('Number')
	this.appendValueInput("Directory")
		.appendField(Blockly.Msg.MP3_playsongdirectory)
		.setCheck('Number')	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one song in one directory');
  }
};

Blockly.Blocks['DFPplayerMp3_repeatsong'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_repeatsong)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Repeat one song');
  }
};
