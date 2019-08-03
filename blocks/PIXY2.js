/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.PIXY2');

goog.require('Blockly.Blocks');


Blockly.Blocks['pixy2_init'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/pixy2.png",53,38))
        .appendField(Blockly.Msg.PIXY2_init)
		.appendField(Blockly.Msg.PIXY2_init2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the Pixy2.Important the Reset pin must be connected to Reset pinout of mrtduino board.You need a male dupont connector');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_mode'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.PIXY2_mode)
		.appendField(new Blockly.FieldDropdown([["Color Connected Components","color_connected_components"],["Detect lines, intersections and barcodes", "line_tracking"],["Video", "video"]]), "MODE_OF_USE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Select the mode to use');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_setservos'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SetServos)
	this.appendValueInput("servoPAN")
        .setCheck("Number")
        .appendField(Blockly.Msg.SERVO_PAN);
	this.appendValueInput("servoTILT")
        .setCheck("Number")
        .appendField(Blockly.Msg.SERVO_TILT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Pan and Tilt servo position (0-1000)');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_SetBrightness'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SetBrightness)
	this.appendValueInput("Brightness")
        .setCheck("Number")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('SetBrightness of the camera(0-255)');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_setLed'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SetLed)
	this.appendValueInput("RedLed")
        .setCheck("Number")
        .appendField(Blockly.Msg.PIXY2_RED_LED);
	this.appendValueInput("GreenLed")
        .setCheck("Number")
        .appendField(Blockly.Msg.PIXY2_GREEN_LED);
	this.appendValueInput("BlueLed")
        .setCheck("Number")
        .appendField(Blockly.Msg.PIXY2_BLUE_LED);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set RGB LED (0-255) every led');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_setLamp'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SetLamp)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.LAMP_UP)
		.appendField(new Blockly.FieldDropdown([["OFF","0"],["ON", "1"]]), "Lamp_up")
	this.appendDummyInput()	
        .appendField(Blockly.Msg.LED_DOWN)
		.appendField(new Blockly.FieldDropdown([["OFF","0"],["ON", "1"]]), "Led_down")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('turns on/off Pixy2 integrated light source. The upper argument controls the two white LEDs. The lower argument sets the RGB LED, causing it to turn on all three color channels at full brightness, resulting in white light.');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_properties'] = {
  helpUrl: '',
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
		.appendField(Blockly.Msg.PIXY2_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.Pixy2_properties)
        .appendField(new Blockly.FieldDropdown([["Frame Width", "1"], ["Frame Height", "2"],["Num. Color blocks detected", "3"]]), "Property")   
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('return several properties of the camera and the number of color blocks detected');
  }
};

Blockly.Blocks['pixy2_getFPS'] = {
  helpUrl: '',
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
		.appendField(Blockly.Msg.PIXY2_name)
        .appendField(Blockly.Msg.Pixy2_getFPS)
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('return the Fram per Second');
  }
};


/*




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

