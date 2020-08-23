'use strict';

goog.provide('Blockly.Blocks.otto_');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');
goog.provide('Blockly.Arduino.otto');
goog.require('Blockly.Arduino');

Blockly.Blocks['otto9_home'] = {init: function() {
    this.appendDummyInput("") 
		.appendField(new Blockly.FieldImage('images/otto_plus.png', 48, 48, "*"))
		.appendField(Blockly.Msg.OTTO9_HOME_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};

Blockly.Blocks['otto9_calibration']={init:function(){
  this.appendDummyInput()
	.appendField(new Blockly.FieldImage('images/otto_plus.png', 48, 48, "*"))
	.appendField(Blockly.Msg.OTTO9_CALIBRATION + Blockly.Msg.OTTO9_CALIBRATION_LEG + Blockly.Msg.left)
	.appendField(new Blockly.FieldTextInput('0'),'LL') 
	.appendField(Blockly.Msg.right)
	.appendField(new Blockly.FieldTextInput('0'), 'RL');
  this.appendDummyInput() 
	.setAlign(Blockly.ALIGN_RIGHT) 
	.appendField(Blockly.Msg.OTTO9_CALIBRATION_FOOT+  Blockly.Msg.left)
    .appendField(new Blockly.FieldTextInput('0'), 'LF')
	.appendField(Blockly.Msg.right)
	.appendField(new Blockly.FieldTextInput('0'), 'RF');
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_eeprom'] = {init: function() {
    this.appendDummyInput("")  .appendField(Blockly.Msg.OTTO9_EEPROM_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#ff6600");
    this.setTooltip(Blockly.Msg.OTTO9_EEEPROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};


Blockly.Blocks['otto9_move'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('images/otto_bend.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_MOVE_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
    this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_dance'] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/otto_moonwalk.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_DANCE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_CHOICE), "otto_dance_movement");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};

Blockly.Blocks['otto9_do'] = {init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('images/otto_do.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_DO_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_CHOICE), "otto_do_movement");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_DO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);  }
};


Blockly.Blocks['otto9_gesture'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('images/otto_emoji.png', 22, 22, "*")).appendField(Blockly.Msg.OTTO9_GESTURE_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GESTURE_CHOICE), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_GESTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};

Blockly.Blocks['otto9_sound'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('images/otto_music.png', 48, 48, "*")) .appendField(Blockly.Msg.OTTO9_SOUND_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); }
};

Blockly.Blocks['otto9_tone'] = {init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('images/otto_music.png', 48, 48, "*")) .appendField(Blockly.Msg.OTTO9_SOUND_NOTE) .appendField("🎼")
        .appendField(new Blockly.FieldDropdown([["C4", "262"], ["D4", "294"], ["E4", "330"], ["F4", "349"], ["G4", "392"], ["A4", "440"], ["B4", "494"], ["C5", "523"], ["D5", "587"] ,["E5", "659"], ["F5", "698"], ["G5", "784"], ["A5", "880"], ["B5", "988"], ["C6", "1047"], ["D6", "1175"], ["E6", "1319"], ["F6", "1397"], ["G6", "1568"], ["A6", "1760"], ["B6", "1976"]]), "otto_note");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(" ")
        .appendField(new Blockly.FieldDropdown([["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]]), "otto_note_duration");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

Blockly.Blocks['otto9_getdistance'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/sensor_ultrasound.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_obstacle'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/sensor_ultrasound.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_GETOBSTACLE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_OBSTACLE_CHOICE), "obstacle");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};


Blockly.Blocks['otto9_getnoise'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/sensor_noise.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_GETNOISE_TEXT);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETNOISE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks['otto9_touchbutton'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/sensor_touch.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_GETTOUCH_TEXT);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#2a93e8");
    this.setTooltip(Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks['otto9_gyro'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/sensor_gyro.png', 28, 28, "*")).appendField(Blockly.Msg.OTTO9_GETG_TEXT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#2a93e8");
    this.setTooltip("gyro read");
    this.setHelpUrl("http://www.mschoeffler.de/2017/10/05/tutorial-how-to-use-the-gy-521-module-mpu-6050-breakout-board-with-the-arduino-uno/");
  }
};

Blockly.Blocks['otto9_getg'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/sensor_gyro.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_GETG_TEXT).appendField(new Blockly.FieldDropdown([["ax", "ax"], ["ay", "ay"], ["az", "az"], ["gx", "gx"], ["gy", "gy"], ["gz", "gz"]]), "otto_getg");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#2a93e8");
    this.setTooltip("gyro read");
    this.setHelpUrl("http://www.mschoeffler.de/2017/10/05/tutorial-how-to-use-the-gy-521-module-mpu-6050-breakout-board-with-the-arduino-uno/");
  }
};

Blockly.Blocks['otto9_homeh'] = { init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('images/humanoid.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_HOME_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL); }
};


Blockly.Blocks['otto9_calibrationh']={ init:function(){
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_CALIBRATION + Blockly.Msg.OTTO9_CALIBRATION_LEG + Blockly.Msg.left) .appendField(new Blockly.FieldNumber("0"), "LL") .appendField(Blockly.Msg.right) .appendField(new Blockly.FieldNumber("0"), "RL")
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.OTTO9_CALIBRATION_FOOT + Blockly.Msg.left) .appendField(new Blockly.FieldNumber("0"), "LF") .appendField(Blockly.Msg.right) .appendField(new Blockly.FieldNumber("0"), "RF")
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OTTO9_CALIBRATION_ARM + Blockly.Msg.left).appendField(new Blockly.FieldNumber("0"), "LA").appendField(Blockly.Msg.right).appendField(new Blockly.FieldNumber("0"), "RA");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#59646f");
  this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);}
};

Blockly.Blocks['otto9_moveh'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/humanoid_bend.png', 48, 48, "*")) .appendField(Blockly.Msg.OTTO9_MOVE_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
    this.appendDummyInput().appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks['otto9_danceh'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/humanoid_moonwalk.png', 48, 48, "*")).appendField(Blockly.Msg.OTTO9_DANCE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_CHOICE), "otto_dance_movement");
    this.appendDummyInput().appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput().appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL); }
};


Blockly.Blocks['otto9_doh'] = { init: function() {
    this.appendDummyInput()   .appendField(new Blockly.FieldImage('images/humanoid_do.png', 48, 48, "*"))   .appendField(Blockly.Msg.OTTO9_DO_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_CHOICE), "otto_do_movement");
    this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.appendDummyInput().appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_DO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL); }
};


Blockly.Blocks['otto9_gestureh'] = {init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage('images/humanoid_emoji.png', 24, 24, "*")).appendField(Blockly.Msg.OTTO9_GESTURE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GESTURE_CHOICE), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_GESTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);  }
};



Blockly.Blocks['otto9_soundh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('images/humanoid_music.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_SOUND_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks['otto9_eyes'] = { init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('images/eyes.png', 58, 25, "*"))
     .appendField(Blockly.Msg.OTTO9_EYES_TEXT)  .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_EYES_CHOICE), "otto9_eyes_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks['otto9_eyes_text'] = {init: function() {
    this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYESTEXT_TEXT)  .appendField(new Blockly.FieldTextInput('I am Otto'), 'input');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL); }
};

Blockly.Blocks['otto9_eyes#'] = { init: function() {
    this.appendDummyInput()
    this.appendValueInput("eyes") .appendField(Blockly.Msg.OTTO9_EYES_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};



Blockly.Blocks['otto9_eyesp']={ init:function(){
  this.appendDummyInput() .appendField(". X")
  this.appendValueInput("X")  .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);}
};

Blockly.Blocks['otto9_eyesl']={ init:function(){
  this.appendDummyInput() .appendField("_ X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_eyesr']={ init:function(){
  this.appendDummyInput() .appendField("🔲 X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};


Blockly.Blocks['otto9_eyesf']={ init:function(){
  this.appendDummyInput() .appendField("⬛ X1")
  this.appendValueInput("X1") .setCheck("Number")
  this.appendValueInput("Y1") .setCheck("Number").appendField("Y1");
  this.appendValueInput("X2") .setCheck("Number").appendField("X2");
  this.appendValueInput("Y2") .setCheck("Number").appendField("Y2");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_eyesc']={ init:function(){
  this.appendDummyInput()  .appendField("⚪ X") 
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendValueInput("R") .setCheck("Number").appendField("R");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};


Blockly.Blocks['otto9_eyescf']={ init:function(){
  this.appendDummyInput()  .appendField("⚫ X") 
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y");
  this.appendValueInput("R") .setCheck("Number").appendField("R");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);}
};

Blockly.Blocks['otto9_eyes_clear'] = { init: function() {
    this.appendDummyInput()   .appendField(Blockly.Msg.OTTO9_EYES_CLEAR_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL); }
};


Blockly.Blocks['otto9_eyesm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('  ') .appendField('1') .appendField('  2').appendField('  3').appendField(' 4') .appendField(' 5')  .appendField('  6') .appendField(' 7')  .appendField(' 8')
        .appendField(' 9').appendField('10') .appendField('11') .appendField('12') .appendField('13') .appendField('14') .appendField('15') .appendField('16')
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
    this.appendDummyInput().appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel7')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel15')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel23')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel31')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel39')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel47')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel55')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel63')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel71')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel79')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel87')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel95')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel103')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel111')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel119')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel127');
    this.appendDummyInput().appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel6')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel14')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel22')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel30')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel38')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel46')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel54')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel62')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel70')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel78')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel86')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel94')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel102')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel110')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel118')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel126');
    this.appendDummyInput().appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel5')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel13')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel21')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel29')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel37')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel45')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel53')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel61')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel69')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel77')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel85')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel93')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel101')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel109')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel117')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel125');
    this.appendDummyInput().appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel4')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel12')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel20')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel36')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel44')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel52')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel60')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel68')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel76')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel84')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel92')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel100')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel108')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel116')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel124');
    this.appendDummyInput().appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel3')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel11')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel19')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel27')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel35')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel43')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel51')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel59')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel67')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel75')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel83')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel91')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel99')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel107')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel115')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel123');
        this.appendDummyInput().appendField('6 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel2')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel10')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel18')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel26')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel34')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel42')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel50')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel58')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel66')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel74')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel82')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel90')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel98')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel106')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel114')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel122');
        this.appendDummyInput().appendField('7 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel9')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel17')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel25')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel33')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel41')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel49')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel57')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel65')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel73')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel81')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel89')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel97')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'eyes_pixel105')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel113')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel121');
        this.appendDummyInput().appendField('8 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel0')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel8')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel16')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel32')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel40')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel48')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel56')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel64')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel72')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel80')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel88')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel96')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel104')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel112')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'eyes_pixel120');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_EYES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks['otto9_matrix'] = { init: function() {
    this.appendDummyInput() .appendField('  ') .appendField('1') .appendField('  2').appendField('  3') .appendField(' 4') .appendField(' 5') .appendField('  6')
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
    this.appendDummyInput().appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel0')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel2')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel3')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel4')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel5');
    this.appendDummyInput().appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel6')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel7')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel8')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel9')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel10')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel11');
    this.appendDummyInput().appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel12')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel13')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel14')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel15')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel16')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel17');
    this.appendDummyInput().appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel18')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel19')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel20')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel21')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel22')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel23');
    this.appendDummyInput().appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel25')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel26')
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'otto9_matrix_pixel27')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel29');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};

Blockly.Blocks["otto9_matrix8x8"] = {  init: function() {
  this.appendDummyInput().appendField('  ').appendField(' 0').appendField(' 1').appendField(' 2').appendField('  3').appendField('  4').appendField(' 5').appendField(' 6').appendField(' 7');
  Blockly.FieldCheckbox.CHECK_CHAR= '▉'
  this.appendDummyInput().appendField('0 ') 
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel0')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel1')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel2')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel3')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel4')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel5')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel6')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel7');
 this.appendDummyInput().appendField('1 ')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel8')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel9')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel10')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel11')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel12')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel13')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel14')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel15');
 this.appendDummyInput().appendField('2 ')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel16')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel17')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel18')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel19')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel20')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel21')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel22')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel23');
 this.appendDummyInput().appendField('3 ')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel24')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel25')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel26')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel27')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel28')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel29')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel30')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel31');
 this.appendDummyInput().appendField('4 ')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel32')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel33')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel34')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel35')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel36')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel37')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel38')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel39');
 this.appendDummyInput().appendField('5 ')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel40')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel41')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel42')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel43')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel44')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel45')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel46')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel47');
 this.appendDummyInput().appendField('6 ')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel48')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel49')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel50')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel51')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel52')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel53')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel54')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel55');
 this.appendDummyInput().appendField('7 ')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel56')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel57')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel58')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel59')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel60')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel61')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel62')
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'Pixel63');
 this.setInputsInline(false);
 this.setPreviousStatement(true, null);
 this.setNextStatement(true, null);
 this.setColour("#59646f");
 this.setTooltip('');
 this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use");
},
};

Blockly.Blocks['otto9_mouth'] = {  init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/matrix.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOUTH_CHOICE), "otto9_mouth_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MOUTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks['otto9_mouth#']={ init:function(){
  this.appendDummyInput()
  this.appendValueInput("mouth") .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#59646f");
  this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
}
};


Blockly.Blocks['otto9_matrixp']={ init:function(){
  this.appendDummyInput() .appendField("pixel X")
  this.appendValueInput("X") .setCheck("Number")
  this.appendValueInput("Y") .setCheck("Number").appendField("Y")
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#59646f");
  this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);}
};

Blockly.Blocks['otto9_matrix_text'] = { init: function() {
    this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_MATRIXTEXT_TEXT).appendField(new Blockly.FieldTextInput('I AM OTTO'), 'input');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks["otto9_matrix_brightness"]={init:function(){
    this.appendValueInput("brightness").setCheck("Number") .appendField(Blockly.Msg.matrice+" intensity");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
    this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};


Blockly.Blocks['otto9_clear'] = { init: function() {
    this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_CLEAR_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_CLEAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};


Blockly.Blocks['otto9_arms'] = { init: function() {
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/humanoid_arms.png', 48, 48, "*"))  
    .appendField(Blockly.Msg.OTTO9_ARMS_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_ARMS_CHOICE), "otto9_arms_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#59646f");
    this.setTooltip(Blockly.Msg.OTTO9_ARMS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
  }
};



/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author Sébastien Canet
 */
'use strict';

Blockly.Blocks['otto9_wheels'] = {  init: function() {
  this.appendDummyInput().appendField(new Blockly.FieldImage('images/otto_wheels.png', 48, 48, "*"))
      .appendField(Blockly.Msg.OTTO9_MOVE_TEXT).appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVEW_CHOICE), "otto_move_sens")
  this.appendDummyInput() .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT) .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE), "otto_move_speed");
  this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField(Blockly.Msg.m_pap_step) .appendField(new Blockly.FieldNumber("1"), "time");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour("#32D900");
  this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
}
};


Blockly.Blocks['otto9_smooth'] = {init: function() {
    this.appendDummyInput("") .appendField(new Blockly.FieldImage('images/smooth.png', 48, 48, "*"))  
		.appendField('Dance smooth criminal');
    this.setInputsInline(false);
	this.setColour("#32D900");
    this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
  }
};

