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
        .appendField(new Blockly.FieldDropdown([["Frame Width", "1"], ["Frame Height", "2"]]), "Property")   
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

Blockly.Blocks['pixy2_getResolution'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.Pixy2_getResolution)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('gets the width and height of the frames used by the current program. After calling this function, the width and height can be found in the frameWidth and frameHeight member variables');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_getBlocks'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.Pixy2_getBlocks);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_Wait)
		.appendField(new Blockly.FieldDropdown([["True","true"],["False", "false"]]), "Wait")
	this.appendValueInput("sigmap")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_sigmap);
	this.appendValueInput("maxBlock")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_Blocks);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('getBlocks() gets all detected blocks in the most recent frame.');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_getBlockProperties'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_get)
		.appendField(new Blockly.FieldDropdown([["signature","1"],["pos x", "2"],["pos y", "3"],["width", "4"],["height", "5"],["angle", "6"],["index", "7"],["age", "8"]]), "BlockProperty")
	this.appendValueInput("block_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_fromblock);
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Properties of the selected block');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:general_api');
  }
};

Blockly.Blocks['pixy2_properties2'] = {
  helpUrl: '',
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
		.appendField(Blockly.Msg.PIXY2_name)
	this.appendDummyInput()
		.appendField(Blockly.Msg.Pixy2_properties2)
        .appendField(new Blockly.FieldDropdown([["Blocks", "1"], ["Vectors", "2"],["Intersections", "3"],["Barcodes", "4"]]), "Property")   
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('return  the number of color blocks detected, vectors, intersections or barcodes');
  }
};

Blockly.Blocks['pixy2_getVectorsProperties'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_get)
		.appendField(new Blockly.FieldDropdown([["the x location of the tail of the Vector","1"],["the y location of the tail of the Vector", "2"],["the x location of the head (arrow end) of the Vector", "3"],["the y location of the head (arrow end) of the Vector", "4"],["index", "5"],["flags", "6"]]), "VectorProperty")
	this.appendValueInput("vector_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_fromvector);
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Properties of the selected vector');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};

Blockly.Blocks['pixy2_getIntersectionProperties'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_get)
		.appendField(new Blockly.FieldDropdown([["the x location","1"],["the y location ", "2"],["number of lines(branches)", "3"]]), "IntersectionProperty")
	this.appendValueInput("intersection_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_fromintersections);
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Properties of the selected intersection');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};

Blockly.Blocks['pixy2_getIntersectionLineProperties'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_get)
		.appendField(new Blockly.FieldDropdown([["angle","1"],["index", "2"]]), "IntersectionLineProperty")
	this.appendValueInput("intersection_number2")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_fromintersections);
	this.appendValueInput("intersection_line_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_fromintersectionsline);
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Properties of the selected intersection line');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};

Blockly.Blocks['pixy2_getBarcodesProperties'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_get)
		.appendField(new Blockly.FieldDropdown([["x location","1"],["y location", "2"],["flags", "3"],["value", "4"]]), "BarcodeProperty")
	this.appendValueInput("barcode_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.Pixy2_frombarcode);
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('Properties of the selected barcode');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};


Blockly.Blocks['pixy2_getAllFeatures'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.Pixy2_getAllFeatures);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_Wait)
		.appendField(new Blockly.FieldDropdown([["True","true"],["False", "false"]]), "Wait")
	this.appendDummyInput()
        .appendField(Blockly.Msg.Pixy2_Features)
		.appendField(new Blockly.FieldDropdown([["All","1"],["Vectors","2"],["Intersections", "3"],["Barcodes", "4"],["Vectors+Intersections", "5"],["Vectors+Barcodes", "6"],["Intersections+Barcodes", "7"]]), "Features")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('This function returns all lines, intersections and barcodes that the line tracking algorithm detects. The results are returned in the variables vectors, intersections, and barcodes, respectively.');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};

Blockly.Blocks['pixy2_getMainFeatures'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.Pixy2_getMainFeatures);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.Pixy2_Wait)
		.appendField(new Blockly.FieldDropdown([["True","true"],["False", "false"]]), "Wait")
	this.appendDummyInput()
        .appendField(Blockly.Msg.Pixy2_Features)
		.appendField(new Blockly.FieldDropdown([["All","1"],["Vectors","2"],["Intersections", "3"],["Barcodes", "4"],["Vectors+Intersections", "5"],["Vectors+Barcodes", "6"],["Intersections+Barcodes", "7"]]), "Features")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('This function gets the latest features including the Vector, any intersection that connects to the Vector, and barcodes. The results are returned in the variables vectors, intersections, and barcodes, respectively.');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};


Blockly.Blocks['pixy2_setNextTurn'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SetAngle)
	this.appendValueInput("Angle")
        .setCheck("Number")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn angles are specified in degrees, with 0 being straight ahead, left being 90 and right being -90 (for example), although any valid angle value can be used. Valid angles are between -180 and 180.');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};

Blockly.Blocks['pixy2_setDefaultTurn'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SetDefaultAngle)
	this.appendValueInput("Angle")
        .setCheck("Number")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('This function tells the line tracking algorithm which path to choose by default upon encountering an intersection.Turn angles are specified in degrees, with 0 being straight ahead, left being 90 and right being -90 (for example), although any valid angle value can be used. Valid angles are between -180 and 180.');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};


Blockly.Blocks['pixy2_setVector'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SetVector)
	this.appendValueInput("Index")
        .setCheck("Number")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('If the LINE_MODE_MANUAL_SELECT_VECTOR mode bit is set, the line tracking algorithm will no longer choose the Vector automatically. Instead, setVector() will set the Vector by providing the index of the line.');
   this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};


Blockly.Blocks['pixy2_reverseVector'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_ReverseVector)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('The Vector has a direction. It normally points up, from the bottom of the camera frame to the top of the camera frame for a forward-moving robot. Calling reverseVector() will invert the vector. This will typically cause your robot to back-up and change directions.');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};

Blockly.Blocks['pixy2_setMode'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
        .appendField(Blockly.Msg.PIXY2_name)
		.appendField(Blockly.Msg.PIXY2_SelectMode)
	this.appendValueInput("Mode")
        .setCheck("Number")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('This function sets various modes in the line tracking algorithm. The mode argument consists of a bitwise-ORing.LINE_MODE_TURN_DELAYED 0x01,LINE_MODE_MANUAL_SELECT_VECTOR 0x02,LINE_MODE_WHITE_LINE 0x80');
    this.setHelpUrl('https://docs.pixycam.com/wiki/doku.php?id=wiki:v2:line_api');
  }
};


