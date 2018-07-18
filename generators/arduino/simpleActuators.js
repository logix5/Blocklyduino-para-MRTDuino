goog.provide('Blockly.Blocks.simpleActuators');

goog.require('Blockly.Blocks');

Blockly.Arduino['actuator_led'] = function(block) {
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STATUS');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};

Blockly.Arduino['actuator_ledlevel'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // TODO: Assemble JavaScript into code variable.
  
  if (value<=0)
   value=0;
  if (value>255)
   value=255;
  
   var code = 'analogWrite('+dropdown_pin+','+value+');\n';
 
  return code;
};


Blockly.Arduino['actuator_rgbled'] = function(block) {
  var RGB_Type = block.getFieldValue('RGB_TYPE');
  var dropdown_pinR = block.getFieldValue('PINRed');
  var dropdown_pinG = block.getFieldValue('PINGreen');
  var dropdown_pinB = block.getFieldValue('PINBlue');
  var colorall = block.getFieldValue('RGBCOLOR');
 
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16);
  
  if (RGB_Type=='1')
  {
	 red=255-red;
	 green=255-green;
	 blue=255-blue;
  }
	
  Blockly.Arduino.setups_['setup_output_'+dropdown_pinR] = 'pinMode('+dropdown_pinR+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pinG] = 'pinMode('+dropdown_pinG+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pinB] = 'pinMode('+dropdown_pinB+', OUTPUT);';
 
  var code = 'analogWrite('+dropdown_pinR+','+red+');\nanalogWrite('+dropdown_pinG+','+green+');\nanalogWrite('+dropdown_pinB+','+blue+');\n';
 
 
  return code;
}; 
Blockly.Arduino['actuator_laser'] = function(block) {
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STATUS');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};

Blockly.Arduino['actuator_rele'] = function(block) {
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STATUS');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};

Blockly.Arduino['actuator_tonedure'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var duration = Blockly.Arduino.valueToCode(this, 'DUR', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  
  var code = 'tone('+dropdown_pin+','+value+','+duration+');\n';
  return code;
};

Blockly.Arduino['actuator_notone'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone('+dropdown_pin+');\n';
  return code;
};

Blockly.Arduino['frequency'] = function(block) {
  var note = this.getFieldValue('NOTE');
  var octave = this.getFieldValue('OCTAVE');
  var code;
  
  switch(note)
  {
	  case 'C':
				switch(octave)
				{
				  case '2':
							code='65';
							break;
				  case '3':
							code='131';
							break;
				  case '4':
							code='262';
							break;
				  case '5':
							code='523';
							break;
				  case '6':
							code='1046';
							break;
				  case '7':
							code='2093';
							break;
				  case '8':
							code='4186';
							break;
				  default:
							code='4186';
						    break;					
				}
	    break;
	  case 'C#':
				switch(octave)
				{
				  case '2':
							code='69';
							break;
				  case '3':
							code='139';
							break;
				  case '4':
							code='277';
							break;
				  case '5':
							code='554';
							break;
				  case '6':
							code='1109';
							break;
				  case '7':
							code='2217';
							break;
				  case '8':
							code='4435';
							break;
				  default:
							code='4435';
						    break;					
				}
	    break;		
		case 'D':
				switch(octave)
				{
				  case '2':
							code='73';
							break;
				  case '3':
							code='147';
							break;
				  case '4':
							code='294';
							break;
				  case '5':
							code='587';
							break;
				  case '6':
							code='1175';
							break;
				  case '7':
							code='2349';
							break;
				  case '8':
							code='4699';
							break;
				  default:
							code='4699';
						    break;					
				}
	    break;		
		
		case 'D#':
				switch(octave)
				{
				  case '2':
							code='78';
							break;
				  case '3':
							code='156';
							break;
				  case '4':
							code='311';
							break;
				  case '5':
							code='622';
							break;
				  case '6':
							code='1245';
							break;
				  case '7':
							code='2489';
							break;
				  case '8':
							code='4978';
							break;
				  default:
							code='4978';
						    break;					
				}
	    break;				
		case 'E':
				switch(octave)
				{
				  case '2':
							code='82';
							break;
				  case '3':
							code='165';
							break;
				  case '4':
							code='330';
							break;
				  case '5':
							code='659';
							break;
				  case '6':
							code='1319';
							break;
				  case '7':
							code='2637';
							break;
				  case '8':
							code='5274';
							break;
				  default:
							code='5274';
						    break;					
				}
	    break;				
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	  default:
				break;
	  
  }
 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};







