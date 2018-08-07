goog.provide('Blockly.Blocks.rotationservo');

goog.require('Blockly.Blocks');

Blockly.Blocks['servo_continuos_move'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/Servo.png",50,38))
		.appendField(Blockly.Msg.ROTSERVO_Servo)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROTSERVO_Direction)
		.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "SERVOMOTOR_DIR");
  	this.appendValueInput("SpeedServo")
        .setCheck('Number')
		.appendField(Blockly.Msg.ROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Move the servo motor');
  }
};


Blockly.Blocks['servo_continuos_stop'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/Servo.png",50,38))
        .appendField(Blockly.Msg.ROTSERVO_Servo)
		.appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROTSERVO_Stop)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Stop the rotation servomotor');
  }
};