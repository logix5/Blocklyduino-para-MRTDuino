/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.TCS3200');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_ColorSensor_TCS3200'] = function(block) {
  
  var number = this.getFieldValue('SC_NUMBER');
  var s0_pin = this.getFieldValue('S0');
  var s1_pin = this.getFieldValue('S1');
  var s2_pin = this.getFieldValue('S2');
  var s3_pin = this.getFieldValue('S3');
  var out_pin = this.getFieldValue('OUT');
  var escale = this.getFieldValue('ESCALE');
  
  
Blockly.Arduino.definitions_['colorvariables'+number] = 'int red_'+number+'=0;\n'+ 'int green_'+number+'=0;\n'+ 'int blue_'+number+'=0;\n';
  
Blockly.Arduino.definitions_['readcolor'+number] ='void readcolor_'+number+'()\n'+
'  { \n'+   
'  digitalWrite('+s2_pin+', LOW); \n'+ 
'  digitalWrite('+s3_pin+', LOW); \n'+  
'  rojo_'+number+' = pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH); \n'+ 
'  digitalWrite('+s3_pin+', HIGH); \n'+  
'  azul_'+number+' = pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH); \n'+ 
'  digitalWrite('+s2_pin+', HIGH); \n'+   
'  verde_'+number+' = pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH); \n'+ 
'}\n';
      
  Blockly.Arduino.setups_['setup_output_'+s0_pin] = 'pinMode('+s0_pin+', OUTPUT);';  
  Blockly.Arduino.setups_['setup_output_'+s1_pin] = 'pinMode('+s1_pin+', OUTPUT);';  
  Blockly.Arduino.setups_['setup_output_'+s2_pin] = 'pinMode('+s2_pin+', OUTPUT);';  
  Blockly.Arduino.setups_['setup_output_'+s3_pin] = 'pinMode('+s3_pin+', OUTPUT);';  
  Blockly.Arduino.setups_['setup_output_'+out_pin] = 'pinMode('+out_pin+', INPUT);';  
  
  if (escale=='1')
    Blockly.Arduino.setups_['digital_write_color_'+out_pin] = 'digitalWrite('+s0_pin+',LOW);\ndigitalWrite('+s1_pin+',LOW);\n ';  
   else if (escale=='2')
	   Blockly.Arduino.setups_['digital_write_color_'+out_pin] = 'digitalWrite('+s0_pin+',LOW);\ndigitalWrite('+s1_pin+',HIGH);\n ';
    else if (escale=='3')
		Blockly.Arduino.setups_['digital_write_color_'+out_pin] = 'digitalWrite('+s0_pin+',HIGH);\ndigitalWrite('+s1_pin+',LOW);\n ';
	 else
		Blockly.Arduino.setups_['digital_write_color_'+out_pin] = 'digitalWrite('+s0_pin+',HIGH);\ndigitalWrite('+s1_pin+',HIGH);\n ';
   	 	 
  var code='';
  return code;
};


Blockly.Arduino['order_to_read_tcs3200_values'] = function(block) {
	
  var number = this.getFieldValue('SC_NUMBER');
    
  var code = 'redcolor_'+number+'();\n'
   
  return code;
};

Blockly.Arduino['tcs3200_values'] = function(block) {
  
  var number = this.getFieldValue('SC_NUMBER');
  var typeColor = this.getFieldValue('TypeColor');
  var code;
 
  switch (typeColor) {
    case '0':
      code = 'red_'+number+'';
      break;
    case '1':
      code = 'green_'+number+'';
      break;
    case '2':
      code = 'blue_'+number+'';
      break;
    default:
			code = 'red_'+number+'';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};


