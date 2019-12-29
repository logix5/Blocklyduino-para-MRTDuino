/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.Nextion');

goog.require('Blockly.Blocks');


Blockly.Blocks['nextion_init'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nextion.png",53,38))
        .appendField(Blockly.Msg.Nextion_Init)
		.appendField(Blockly.Msg.Nextion_Init2)
		.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the Nextion library to communicate with the display');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nextion_sendcommand_value'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nextion.png",35,25))
        .appendField(Blockly.Msg.Nextion_name);
	this.appendDummyInput()
		.appendField(Blockly.Msg.Nextion_sendcommnad)
        .appendField(new Blockly.FieldTextInput("t0.val="), "command_v")
		.appendField(Blockly.Msg.Nextion_value);
    this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Send command to Nextion display with value to show ');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['nextion_sendcommand_text'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nextion.png",35,25))
        .appendField(Blockly.Msg.Nextion_name);
	this.appendDummyInput()
		.appendField(Blockly.Msg.Nextion_sendcommnad)
        .appendField(new Blockly.FieldTextInput("t0.txt="), "command_t")
		.appendField(Blockly.Msg.Nextion_text);
    this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Send command to Nextion display with text to show ');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['nextion_color'] = {
  helpUrl: '',
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nextion.png",35,25))
	    .appendField(Blockly.Msg.Nextion_color)
		.appendField(new Blockly.FieldDropdown([['Black','0'],['Blue', '31'],['Brown', '48192'],['Green', '2016'],['Yellow', '65504'],['Red', '63488'],['Gray', '33840'],['White', '65535']]), "Nextion_Color")
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


/*


Blockly.Blocks['st7735_backgroundcolor'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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


Blockly.Blocks['st7735_icon'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
         .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_IconName)
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_ValueList)
        .appendField(new Blockly.FieldTextInput("0x00,0xff,0xaf,0x00"), "CODES");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write icon bmp image in memory');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['st7735_rotatedisplay'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_DrawPixel)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
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
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
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
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a line');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_drawrectangle'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawrectangle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectanglewidth);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectangleheight);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a rectangle');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_drawroundrectangle'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawroundrectangle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectanglewidth);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectangleheight);
	this.appendValueInput("round")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawroundrectangleradius);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a round rectangle');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_drawcircle'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawcircle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawcircleradius);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a circle');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_drawtriangle'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_Drawtriangle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
	this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X1);
	this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y1);
	this.appendValueInput("x2")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X2);
	this.appendValueInput("y2")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ST7735_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a line');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['st7735_properties'] = {
  helpUrl: '',
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
		.appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_properties)
        .appendField(new Blockly.FieldDropdown([["Width", "1"], ["Height", "2"],["X cursor position", "3"],["Y cursor position", "4"],["Rotatation value", "5"]]), "Property")   
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['st7735_drawicon'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tft7735.png",35,25))
        .appendField(Blockly.Msg.ST7735_name)
		.appendField(Blockly.Msg.ST7735_DrawiconName)
	this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Y0);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectanglewidth);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST7735_Drawrectangleheight);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST7735_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Draw a bmp icon');
    this.setHelpUrl('');
  }
};

*/

