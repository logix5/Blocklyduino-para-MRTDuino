/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.motorMRT');

goog.require('Blockly.Blocks');

Blockly.Arduino['motor_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_pwmsoft'] = '#include <SoftPWM.h>\n';
  
  
  if(motor_pin == 'ML1')
  {
	   //Blockly.Arduino.setups_['setup_output'] = 'pinMode(3,OUTPUT);';
	   Blockly.Arduino.setups_['setup_output1'] = 'pinMode(7,OUTPUT);';
	   
	   if (motor_direction == 'STOP') 
		   var code = 'pinMode(3,OUTPUT);\ndigitalWrite(3,LOW);\n'+'SoftPWMSet(7,0);\n';
	   else
	       var code = 'pinMode(3,OUTPUT);\ndigitalWrite(3,'+motor_direction+');\n'+'SoftPWMSet(7,'+motor_speed+');\n';
  }
  else
   if(motor_pin == 'ML2')
    {
	   //Blockly.Arduino.setups_['setup_output2'] = 'pinMode(1,OUTPUT);';
	   Blockly.Arduino.setups_['setup_output3'] = 'pinMode(8,OUTPUT);';
	   
	   if (motor_direction == 'STOP') 
		   var code = 'pinMode(1,OUTPUT);\ndigitalWrite(1,LOW);\n'+'SoftPWMSet(8,0);\n';
	   else
	       var code = 'pinMode(1,OUTPUT);\ndigitalWrite(1,'+motor_direction+');\n'+'SoftPWMSet(8,'+motor_speed+');\n';
    }
	else
	  if(motor_pin == 'MR1')
		{
			//Blockly.Arduino.setups_['setup_output4'] = 'pinMode(2,OUTPUT);';
			Blockly.Arduino.setups_['setup_output5'] = 'pinMode(4,OUTPUT);';
	   
			if (motor_direction == 'STOP') 
			   var code = 'pinMode(2,OUTPUT);\ndigitalWrite(2,LOW);\n'+'SoftPWMSet(4,0);\n';
			else
			   var code = 'pinMode(2,OUTPUT);\ndigitalWrite(2,'+motor_direction+');\n'+'SoftPWMSet(4,'+motor_speed+');\n';
		}
		else
			if(motor_pin == 'MR2')
				{
					//Blockly.Arduino.setups_['setup_outpu6'] = 'pinMode(0,OUTPUT);';
					Blockly.Arduino.setups_['setup_output7'] = 'pinMode(6,OUTPUT);';
	   
					if (motor_direction == 'STOP') 
						var code = 'pinMode(0,OUTPUT);\ndigitalWrite(0,LOW);\n'+'SoftPWMSet(6,0);\n';
					else
						var code = 'pinMode(0,OUTPUT);\ndigitalWrite(0,'+motor_direction+');\n'+'SoftPWMSet(6,'+motor_speed+');\n';
				}
			else
				var code = '';
   Blockly.Arduino.setups_['setup_pwminit'] = 'SoftPWMBegin();';
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

