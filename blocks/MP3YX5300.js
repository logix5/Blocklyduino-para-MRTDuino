 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
'use strict';

goog.provide('Blockly.Blocks.MP3YX5300');

goog.require('Blockly.Blocks');

Blockly.Blocks['YX5300Mp3_init_ss'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/dfplayer.png",43,38))
        .appendField(Blockly.Msg.MP3YK_init)
	 this.appendDummyInput()
		.appendField(Blockly.Msg.MP3YK_TX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN1");
    this.appendDummyInput()
		.appendField(Blockly.Msg.MP3YK_RX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN2");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the YX5300 MP3 module');
  }
};

Blockly.Blocks['YX5300Mp3_set_equalizator'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_equalizer)
		.appendField(new Blockly.FieldDropdown([['Normal','0'],['Pop','1'],['Rock','2'],['Jazz','3'],['Classic','4'],['Base','5']]), "MP3_EQ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the equalizer of MP3');
  }
};

Blockly.Blocks['YX5300Mp3_set_volumen'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_volumen)
	this.appendValueInput("Volumen")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the volumen of MP3');
  }
};

Blockly.Blocks['YX5300Mp3_operation'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_operation)
		.appendField(new Blockly.FieldDropdown([['Increase Volumen','0'],['Decrease Volumen','1'],['Reproduce next Song','2'],['Reproduce previous Song','3'],['Start Song','4'],['Pause Song','5'],['Stop Song','6'],['Reset mp3','7']]), "MP3_OPERATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Make an operation');
  }
};

Blockly.Blocks['YX5300Mp3_running'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_check);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('mp3 check need to be running in the main loop');
  }
};

Blockly.Blocks['YX5300Mp3_playsong'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_playsong)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one track');
  }
};

Blockly.Blocks['YX5300Mp3_playsongdirectiry'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
	this.appendValueInput("Song")
		.appendField(Blockly.Msg.MP3YK_playsong)
		.setCheck('Number')
	this.appendValueInput("Directory")
		.appendField(Blockly.Msg.MP3YK_playsongdirectory)
		.setCheck('Number')	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play one track in one folder');
  }
};



Blockly.Blocks['YX5300Mp3_playfolderrepeat'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_folderrepeat)
	this.appendValueInput("Folder")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play folder repeat');
  }
};

Blockly.Blocks['YX5300Mp3_playFolderShuffle'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_foldershuffle)
	this.appendValueInput("Folder")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play folder shuffle');
  }
};


Blockly.Blocks['YX5300Mp3_playTrackRepeat'] = {
  helpUrl: 'https://majicdesigns.github.io/MD_YX5300/index.html',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3YK_name)
		.appendField(Blockly.Msg.MP3YK_songrepeat)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play track repeat');
  }
};










