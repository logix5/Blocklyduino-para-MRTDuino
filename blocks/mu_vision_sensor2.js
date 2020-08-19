'use strict';

goog.provide('Blockly.Blocks.VisionSensor');
goog.require('Blockly.Blocks');

var lVisionCardType = [["Shape Card Detect", "VISION_SHAPE_CARD_DETECT"],
                      ["Traffic Card Detect", "VISION_TRAFFIC_CARD_DETECT"],
                      ["Num Card Detect", "VISION_NUM_CARD_DETECT"],
                      ];
var VS_VISION_TYPE = [["Color Detect", "VISION_COLOR_DETECT"],
                      ["Color Recognition", "VISION_COLOR_RECOGNITION"],
                      ["Ball Detect", "VISION_BALL_DETECT"],
                      ["Body Detect", "VISION_BODY_DETECT"],
                      ].concat(lVisionCardType);

var lVsMu = [["MU00", "0"],["MU01", "1"],["MU10", "2"],["MU11", "3"]];

Blockly.Blocks.VisionSensor.HUE = 140;
Blockly.Blocks.VisionSensor.HUE_SetupMode = 140;
Blockly.Blocks.VisionSensor.HUE_RunMode = 140;
Blockly.Blocks.VisionSensor.HUE_LightSensor = 160;
Blockly.Blocks.VisionSensor.HUE_AT = 170;


//Este bloque hay que revisarlo porque coge el inicio del puerto serie de otra manera

Blockly.Blocks['Vs2MuInit'] = {
  init: function() {
  var dropdown_list = [["I2C","Wire"],["Serial","Serial1"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_MU)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(' '+Blockly.LKL_VS2_SERIAL)
        .appendField(new Blockly.FieldDropdown(dropdown_list), "SERIAL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip(Blockly.LKL_VS2_HELP_INIT);
  },
  onchange:function(e) {
    if (this.getFieldValue("SERIAL") == "Serial") {
      this.setWarningText(Blockly.LKL_VS2_WARNING_MU_INIT);
    } else {
      this.setWarningText(null);
  }
 }
};


Blockly.Blocks['Vs2Setup'] = {
  init: function() {
     this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_SetupVS)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ");
    this.appendStatementInput('SETUP_BLOCK');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};

Blockly.Blocks['Vs2Reset'] = {
  init: function() {
     this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_RESET);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetLEDColor'] = {
  init: function() {
    var led_color = ['#fff','#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff'];
    var color_detected = new Blockly.FieldColour('#0000ff');
    color_detected.setColours(led_color).setColumns(3);
    var color_undetected = new Blockly.FieldColour('#ff0000');
    color_undetected.setColours(led_color).setColumns(3);

     this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField('LED')
        .appendField(new Blockly.FieldDropdown([["1", "kLed1"], ["2", "kLed2"], [Blockly.LKL_VS2_ALL, "kLedAll"]]), "LED_ID")
        .appendField(' '+Blockly.LKL_VS2_LED_DETECT_COLOR)
        .appendField(color_detected, "LEDColorDetect")
        .appendField(' '+Blockly.LKL_VS2_LED_UNDETECT_COLOR)
        .appendField(color_undetected, "LEDColorUndetect");
    this.appendValueInput("LEDLevel")
        .appendField(' '+Blockly.LKL_VS2_BRIGHTNESS+'(0~15)')
        .setCheck([Number, Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2VisionBegin'] = {
  init: function() {
    var lVs2VisionStatus = [[Blockly.LKL_VS2_ENABLE, "Begin"],[Blockly.LKL_VS2_DISABLE, "End"]];
     this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVs2VisionStatus), "VisionStatus")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(VS_VISION_TYPE), "VisionType");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  },
};

Blockly.Blocks['Vs2SetVisionLevel'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(VS_VISION_TYPE), "VisionType")
        .appendField(' '+Blockly.LKL_VS2_SET_VISION_LEVEL)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_VS2_AUTO,"kLevelDefault"],
                    [Blockly.LKL_VS2_HIGH_SPEED, "kLevelSpeed"],
                    [Blockly.LKL_VS2_NORMAL, "kLevelBalance"],
                    [Blockly.LKL_VS2_HIGH_ACCURACY, "kLevelAccuracy"],
                    ]), "VisionLevel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.LKL_VS2_HELP_VISION_LEVEL);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetVisionZoom'] = {
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_SET_VISION_ZOOM)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_VS2_AUTO,"kZoomDefault"],[Blockly.LKL_VS2_LEVEL+"1", "kZoom1"],
                  [Blockly.LKL_VS2_LEVEL+"2", "kZoom2"],[Blockly.LKL_VS2_LEVEL+"3", "kZoom3"],
                  [Blockly.LKL_VS2_LEVEL+"4", "kZoom4"],[Blockly.LKL_VS2_LEVEL+"5", "kZoom5"]
                  ]), "VisionZoom");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	 this.setTooltip(Blockly.LKL_VS2_HELP_VISION_ZOOM);
	 this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetColorRecognitionRegion'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_VISION_COLOR_RECOGNITION)
        .appendField(Blockly.LKL_VS2_SET_RECOGNITION_REGION);
    this.appendValueInput('Width')
        .setCheck(Number)
        .appendField(Blockly.LKL_VS2_STATE_VALUE_WIDTH+' =');
    this.appendValueInput('Height')
        .setCheck(Number)
        .appendField(Blockly.LKL_VS2_STATE_VALUE_HEIGHT+' =');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetColorBlockMinBlob'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_VISION_COLOR_DETECT)
        .appendField(Blockly.LKL_VS2_SET_MIN_RECOGNITION_SIZE);
    this.appendValueInput('Width')
        .setCheck(Number)
        .appendField(Blockly.LKL_VS2_STATE_VALUE_WIDTH+' =');
    this.appendValueInput('Height')
        .setCheck(Number)
        .appendField(Blockly.LKL_VS2_STATE_VALUE_HEIGHT+' =');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetUARTBaud'] = {
  init: function() {
		var BAUD = [["9600","kBaud9600"],["19200","kBaud19200"],["38400","kBaud38400"],["57600","kBaud57600"],
    ["115200","kBaud115200"],["230400","kBaud230400"],["460800","kBaud460800"],["921600","kBaud921600"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
				.appendField(Blockly.LKL_VS2_SET_UART_BAUD)
        .appendField(new Blockly.FieldDropdown(BAUD), "BAUD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetCameraRotate'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput('')
        .appendField(Blockly.LKL_VS2_SET_FRAME_ROTATE)
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'FRAME_ROTATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetCameraHFR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput('')
        .appendField(Blockly.LKL_VS2_SET_CAMERA_HFR)
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'CameraHFR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2SetCameraWhiteBalance'] = {
  init: function() {
    var lCameraAWB = [[Blockly.LKL_VS2_AUTO, "kAutoWhiteBalance"],[Blockly.LKL_VS2_LOCK_AWB, "kLockWhiteBalance"],
                      [Blockly.LKL_VS2_WHITE_LIGHT, "kWhiteLight"],[Blockly.LKL_VS2_YELLOW_LIGHT, "kYellowLight"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_SetupMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput('')
        .appendField(Blockly.LKL_VS2_SET_CAMERA_AWB)
        .appendField(new Blockly.FieldDropdown(lCameraAWB), 'CameraAWB');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'Vs2Setup') {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.LKL_VS2_WARNING_SETUP_ONLY);
    }
  }
};

Blockly.Blocks['Vs2Detected'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
				.appendField(Blockly.LKL_VS2_DETECTED)
        .appendField(new Blockly.FieldDropdown(VS_VISION_TYPE), "VISION_TYPE");
    this.setOutput(true, ['Number','Boolean']);
	this.setInputsInline(true);
  }
};

Blockly.Blocks['Vs2DetectedRegionColor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_RECOGNIZED)
        .appendField(Blockly.LKL_VS2_COORDINATE);
    this.appendValueInput('XValue')
        .setCheck(Number)
        .appendField('x=');
    this.appendValueInput('YValue')
        .setCheck(Number)
        .appendField('y=');
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_COLOR);
    this.setOutput(true, [Number,Boolean]);
    this.setInputsInline(true);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Vs2DetectedColorDetect'] = {
  init: function() {
    var led_color = ['#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff','#fff'];
    var color = new Blockly.FieldColour('#ff0000');
    color.setColours(led_color).setColumns(3);

    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_DETECTED)
        .appendField(color, 'DetectColor')
        .appendField(Blockly.LKL_VS2_COLOR_BLOCK);

    this.setOutput(true, ['Number','Boolean']);
	this.setInputsInline(true);
  }
};

Blockly.Blocks['Vs2GetColorLabel'] = {
  init: function() {
    var led_color = ['#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff','#fff'];
    var color = new Blockly.FieldColour('#ff0000');
    color.setColours(led_color).setColumns(3);

    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_GET_DETECTED_MESSAGE)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(Blockly.LKL_VS2_VISION_COLOR_RECOGNITION);
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_COLOR+"=")
        .appendField(color, 'RCGColor');
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['Vs2GetMessage'] = {
  init: function() {
  	this.DETECTED_MESSAGE = [[Blockly.LKL_VS2_STATE_VALUE_X,"kXValue"], 
                            [Blockly.LKL_VS2_STATE_VALUE_Y,"kYValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_WIDTH,"kWidthValue"], 
                            [Blockly.LKL_VS2_STATE_VALUE_HEIGHT,"kHeightValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_LABEL,"kLabel"]
                            ];
    this.ColorRCGMessage = [[Blockly.LKL_VS2_STATE_VALUE_R_CHANNEL,"kRValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_G_CHANNEL,"kGValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_B_CHANNEL,"kBValue"],
                            [Blockly.LKL_VS2_STATE_VALUE_LABEL,"kLabel"]
                            ];
    var vision_type = VS_VISION_TYPE.slice();

    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
				.appendField(Blockly.LKL_VS2_GET_DETECTED_MESSAGE)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(vision_type), "VISION_TYPE");
    this.vision_type_ = '';
    this.generateMessageType();
    this.setOutput(true, Number);
    this.setInputsInline(true);
  },
  onchange: function(e) {
    var vision_type = this.getFieldValue("VISION_TYPE");
    if (this.vision_type_ != vision_type) {
      if (this.vision_type_ == "VISION_COLOR_RECOGNITION"
        || vision_type == "VISION_COLOR_RECOGNITION") {
        this.generateMessageType();
      } else {
        this.vision_type_ = vision_type;
      }
    }
  },
  generateMessageType: function() {
    var type_index = -1;
    if (this.vision_type_ != '') {
      var last_message_type = this.getFieldValue("DETECTED_MESSAGE");
      var color_message = [];
      var other_message = [];
      for (var i = 0; i < this.ColorRCGMessage.length; i++) {
        color_message.push(this.ColorRCGMessage[i][1]);
      }
      for (var i = 0; i < this.DETECTED_MESSAGE.length; i++) {
        other_message.push(this.DETECTED_MESSAGE[i][1]);
      }
      if (color_message.indexOf(last_message_type) != -1) {
        type_index = color_message.indexOf(last_message_type);
      } else if (other_message.indexOf(last_message_type) != -1) {
        type_index = other_message.indexOf(last_message_type);
      }
    }

    this.vision_type_ = this.getFieldValue("VISION_TYPE");
    this.removeInput("DetectedMessage");
    if (this.vision_type_ == "VISION_COLOR_RECOGNITION") {
      this.appendDummyInput("DetectedMessage")
          .appendField(new Blockly.FieldDropdown(this.ColorRCGMessage), "DETECTED_MESSAGE")
          .appendField(Blockly.LKL_VS2_VALUE);
      if (type_index != -1) {
        if (type_index == this.DETECTED_MESSAGE.length-1) {
          this.setFieldValue(this.ColorRCGMessage[this.ColorRCGMessage.length-1][1], "DETECTED_MESSAGE");
        } else {
          this.setFieldValue(this.ColorRCGMessage[type_index][1], "DETECTED_MESSAGE");
        }
      }
    } else {
      this.appendDummyInput("DetectedMessage")
          .appendField(new Blockly.FieldDropdown(this.DETECTED_MESSAGE), "DETECTED_MESSAGE")
          .appendField(Blockly.LKL_VS2_VALUE);
      if (type_index != -1) {
        if (type_index == this.ColorRCGMessage.length-1) {
          this.setFieldValue(this.DETECTED_MESSAGE[this.DETECTED_MESSAGE.length-1][1], "DETECTED_MESSAGE");
        } else {
          this.setFieldValue(this.DETECTED_MESSAGE[type_index][1], "DETECTED_MESSAGE");
        }
      }
    }
  },
};

Blockly.Blocks['Vs2GetCardType'] = {
  init: function() {
    this.traffic_card_type_ = [["Foward", "MU_TRAFFIC_CARD_FORWARD"],
                              ["Left", "MU_TRAFFIC_CARD_LEFT"],
                              ["Right", "MU_TRAFFIC_CARD_RIGHT"],
                              ["Turn Around", "MU_TRAFFIC_CARD_TURN_AROUND"],
                              ["Park", "MU_TRAFFIC_CARD_PARK"]
                              ];
    this.number_card_type_ = [["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],
                            ["6", "6"],["7", "7"],["8", "8"],["9", "9"],["0", "0"]
                            ];
    this.shape_card_type_ = [["Tick", "MU_SHAPE_CARD_TICK"],
                            ["Cross", "MU_SHAPE_CARD_CROSS"],
                            ["Circle", "MU_SHAPE_CARD_CIRCLE"],
                            ["Square", "MU_SHAPE_CARD_SQUARE"],
                            ["Triangle", "MU_SHAPE_CARD_TRIANGLE"],
                            ];
    this.card_class_dic_ = {'VISION_SHAPE_CARD_DETECT':this.shape_card_type_,
                            'VISION_TRAFFIC_CARD_DETECT':this.traffic_card_type_,
                            'VISION_NUM_CARD_DETECT':this.number_card_type_
                            };
    this.setColour(Blockly.Blocks.VisionSensor.HUE_RunMode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera2.png",35,25))
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_GET_DETECTED_MESSAGE)
        .appendField(new Blockly.FieldDropdown(lVsMu), "MuObj")
        .appendField(Blockly.LKL_VS2_VISION_TYPE)
        .appendField(new Blockly.FieldDropdown(lVisionCardType), "VisionCardType")
        .appendField(" "+Blockly.LKL_VS2_CARD_TYPE+"=");
    this.vision_type_ = this.getFieldValue("VisionCardType");
    this.appendDummyInput("CARD_TYPE")
        .appendField(new Blockly.FieldDropdown(this.card_class_dic_[this.vision_type_]), "CardType");
    this.setInputsInline(true);
    this.setOutput(true, Boolean);
  },
  onchange: function(e) {
    var vision_type = this.getFieldValue("VisionCardType");
    if (this.vision_type_ != vision_type) {
      this.vision_type_ = vision_type;
      var last_card_type = this.getFieldValue("CardType");
      var traffic_card_type = [];
      var number_card_type = [];
      var shape_card_type = [];
      var type_index = -1;
      for (var i = 0; i < this.traffic_card_type_.length; i++) {
        traffic_card_type.push(this.traffic_card_type_[i][1]);
      }
      for (var i = 0; i < this.number_card_type_.length; i++) {
        number_card_type.push(this.number_card_type_[i][1]);
      }
      for (var i = 0; i < this.shape_card_type_.length; i++) {
        shape_card_type.push(this.shape_card_type_[i][1]);
      }
      if (traffic_card_type.indexOf(last_card_type) != -1) {
        type_index = traffic_card_type.indexOf(last_card_type);
      } else if (number_card_type.indexOf(last_card_type) != -1) {
        type_index = number_card_type.indexOf(last_card_type);
      } else if (shape_card_type.indexOf(last_card_type) != -1) {
        type_index = shape_card_type.indexOf(last_card_type);
      }
      this.removeInput("CARD_TYPE");
      this.appendDummyInput("CARD_TYPE")
          .appendField(new Blockly.FieldDropdown(this.card_class_dic_[this.vision_type_]), "CardType");
      this.setFieldValue(this.card_class_dic_[this.vision_type_][type_index][1], "CardType");
    }
  },
};

// AT command
Blockly.Blocks['Mu3LsBegin'] = {
  init: function() {
    var dropdown_ls_type = [[Blockly.LKL_VS2_PROXIMITY,"LS_PROXIMITY_ENABLE"],
                            [Blockly.LKL_VS2_ALS,"LS_AMBIENT_LIGHT_ENABLE"],
                            [Blockly.LKL_VS2_GESTURE_SENSOR,"LS_GESTURE_ENABLE"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_ENABLE)
        .appendField(new Blockly.FieldDropdown(dropdown_ls_type), "LS_TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3LsSetSensitivity'] = {
  init: function() {
    var dropdown_sensitivity = [[Blockly.LKL_VS2_DEFAULT,"kSensitivityDefault"],
                                [Blockly.LKL_VS2_LOW,"kSensitivity1"],
                                [Blockly.LKL_VS2_MID,"kSensitivity2"],
                                [Blockly.LKL_VS2_HIGH,"kSensitivity3"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_SET)
        .appendField(Blockly.LKL_VS2_SENSITIVITY)
        .appendField(new Blockly.FieldDropdown(dropdown_sensitivity), "SENSITIVITY");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
		this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3LsWhiteBalanceEnable'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_WB_CORRECTION);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3LsReadProximity'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_PROXIMITY);
    this.setOutput(true, Number);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3LsReadAmbientLight'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_ALS);
    this.setOutput(true, Number);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3LsDetectedGesture'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_DETECTED)
        .appendField(Blockly.LKL_VS2_GESTURE);
    this.setOutput(true, Number);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3LsDetectedGestureType'] = {
  init: function() {
    var dropdown_gesture = [[Blockly.LKL_VS2_GESTURE_UP,"kGestureUp"],
                            [Blockly.LKL_VS2_GESTURE_DOWN,"kGestureDown"],
                            [Blockly.LKL_VS2_GESTURE_LEFT,"kGestureLeft"],
                            [Blockly.LKL_VS2_GESTURE_RIGHT,"kGestureRight"],
                            [Blockly.LKL_VS2_GESTURE_LIFT_UP,"kGesturePush"],
                            [Blockly.LKL_VS2_GESTURE_PUSH_DOWN,"kGesturePull"]];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_LightSensor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(lVsMu), "MU_OBJ")
        .appendField(Blockly.LKL_VS2_LIGHT_SENSOR)
        .appendField(Blockly.LKL_VS2_GESTURE+' =')
        .appendField(new Blockly.FieldDropdown(dropdown_gesture), "GESTURE");
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
  },
};

// REvisar porque no cuadra este

// AT WiFi
Blockly.Blocks['Mu3AtWiFiInit'] = {
  init: function() {
    var dropdown_list = profile.default.serial_select;
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_MU)
        .appendField(Blockly.LKL_VS2_SERIAL)
        .appendField(new Blockly.FieldDropdown([["I2C","Wire"],["Serial","Serial1"]]), "SERIAL");
    this.appendValueInput("BAUD")
        .setCheck(Number)
        .appendField(Blockly.LKL_VS2_SET_UART_BAUD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  },
  onchange:function(e) {
    if (this.getFieldValue("SERIAL") == "Serial") {
      this.setWarningText(Blockly.LKL_VS2_WARNING_MU_INIT);
    } else {
      this.setWarningText();
    }
  }
}

Blockly.Blocks['Mu3AtWiFiSet'] = {
  init: function() {
    var dropdown_mode = [[Blockly.LKL_VS2_CLIENT,'"STA"'],[Blockly.LKL_VS2_HOT_SPOT,'"AP"']];
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_SET);
    this.appendValueInput("SSID")
        .setCheck(String)
        .appendField(Blockly.LKL_VS2_SSID);
    this.appendValueInput("PASSWORD")
        .setCheck(String)
        .appendField(Blockly.LKL_VS2_PASSWORD);
    this.appendDummyInput()
        .appendField(Blockly.LKL_VS2_MODE)
        .appendField(new Blockly.FieldDropdown(dropdown_mode), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3AtWiFiCon'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_WAIT_CONNECT+"?");
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3AtWiFiDiscon'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_DISCONNECT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3AtWiFiUDP'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_SET);
    this.appendValueInput("IP")
        .setCheck(String)
        .appendField(Blockly.LKL_VS2_TARGET_IP);
    this.appendValueInput("PORT")
        .setCheck(String)
        .appendField(Blockly.LKL_VS2_SERIAL);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3AtWiFiCip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_TARGET_IP)
    this.setOutput(true, String);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3AtWiFiSip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_READ)
        .appendField(Blockly.LKL_VS2_LOCAL_IP);
    this.setOutput(true, String);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3AtWiFiRead'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_READ);
    this.setOutput(true, Number);
	this.setInputsInline(true);
  },
};

Blockly.Blocks['Mu3AtWiFiWrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.VisionSensor.HUE_AT);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("NUMBER")
        .setCheck(Number)
        .appendField("MU WiFi")
        .appendField(Blockly.LKL_VS2_WRITE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  },
};