/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.ST7735');

goog.require('Blockly.Blocks');


Blockly.Blocks['st7735_init'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_init)
		.appendField(Blockly.Msg.ST7735_init2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_PIN_CS)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_CS")
		.appendField(Blockly.Msg.ST7735_PIN_DC)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_DC")
		.appendField(Blockly.Msg.ST7735_PIN_RST)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_RST");
	 this.appendDummyInput()
        .appendField(Blockly.Msg.ST7735_WRAP)
		.appendField(new Blockly.FieldDropdown([["Black", "INITR_BLACKTAB"], ["Green", "INITR_GREENTAB"],["Red", "INITR_REDTAB"]]), "WRAP")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the TFT ST7735.Important the Led pin must be connected to 3.3V!!');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_backgroundcolor'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_FILLBACKGROUND)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fill the background of the color attached.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_rotatedisplay'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_Rotate)
		.appendField(new Blockly.FieldDropdown([["0º","0"],["90º", "1"],["180º", "2"],["270º","3"]]), "DEGREE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Rotate the display');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_invertdisplay'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_Invert)
		.appendField(new Blockly.FieldDropdown([["OFF","0"],["ON", "1"]]), "INVERT_DISPLAY")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Invert the display');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_setcursor'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_SetCursor)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set cursor in a position');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_settextcolor'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fill the color of the text.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_settextsize'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTsize)
		.appendField(new Blockly.FieldDropdown([["Little","1"],["Medium", "2"],["Large", "3"]]), "SIZE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Size of the letter.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_wraptext'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTwrap)
		.appendField(new Blockly.FieldDropdown([["OFF","false"],["ON", "true"]]), "WRAPTEXT")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Wrap text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_printTextln'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_PrintTextLN)
	this.appendValueInput("text_to_print")
        .setCheck("String")
	 this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_PrintTextLN2)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Print the text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_drawpixel'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_DrawPixel)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a pixel');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_drawline'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("images/RFIDreader.png",41,38))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawlinefrom)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.ST7735_Drawlineto)
	this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X1);
	this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y1);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a line');
    this.setHelpUrl('');
  }
};



/*



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

