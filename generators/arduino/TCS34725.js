/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.TCS34725');

goog.require('Blockly.Blocks');

Blockly.Arduino['init_tcs34725'] = function(block) {
	
 Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>\n';
 Blockly.Arduino.definitions_['define_adafruit_tcs34725'] = '#include "Adafruit_TCS34725.h"\n';
 Blockly.Arduino.definitions_['define_colorconverter'] = '#include "ColorConverterLib.h"\n';
 
 Blockly.Arduino.definitions_['define_tcs34725'] = 'Adafruit_TCS34725 tcs34725 = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);\n';
  
 Blockly.Arduino.definitions_['define_tcs34725_variables'] = 'double  tcs34725_r=0;\n'+
'double  tcs34725_g=0;\n'+
'double  tcs34725_b=0;\n'+
'uint16_t  tcs34725_clear=0;\n'+
'double  tcs34725_h=0;\n'+
'double  tcs34725_s=0;\n'+
'double  tcs34725_v=0;\n';

Blockly.Arduino.definitions_['define_tcs34725_capturecolor'] = 'void fnc_tcs34725_capturecolor()\n'+
'{\n'+
'	uint16_t tcs_red, tcs_green, tcs_blue;\n'+
'	tcs34725.getRawData(&tcs_red, &tcs_green, &tcs_blue, &tcs34725_clear);\n'+
'	if (tcs34725_clear == 0) {\n'+
'		tcs34725_r=tcs34725_g=tcs34725_b=0;\n'+
'		return;\n'+
'	}\n'+
'	tcs34725_r = ((float)tcs_red / (float)(tcs34725_clear)) * 255.0;\n'+
'	tcs34725_g = ((float)tcs_green / (float)(tcs34725_clear)) * 255.0;\n'+
'	tcs34725_b = ((float)tcs_blue / (float)(tcs34725_clear)) * 255.0;\n'+
'	ColorConverter::RgbToHsv(static_cast<uint8_t>(tcs34725_r), static_cast<uint8_t>(tcs34725_g), static_cast<uint8_t>(tcs34725_b), tcs34725_h, tcs34725_s,tcs34725_v);\n'+
'	tcs34725_h=tcs34725_h*360;\n'+
'	tcs34725_s=tcs34725_s*100;\n'+
'	tcs34725_v=tcs34725_v*100;\n'+
'}\n';
  
  Blockly.Arduino.setups_['setup_tcs34725'] = 'tcs34725.begin();\n';

  var code='';
  return code;
};

Blockly.Arduino['read_tcs34725'] = function(block) {
	
  var code='fnc_tcs34725_capturecolor();\n';
  return code;
};


Blockly.Arduino['tcs34725_values'] = function(block) {
  
  var typeValue = block.getFieldValue('TypeValue');  
  
   switch (typeValue) {
    case '0':
      code = 'tcs34725_r';
      break;
    case '1':
      code = 'tcs34725_g';
      break;
    case '2':
      code = 'tcs34725_b';
      break;
	case '3':
      code = 'tcs34725_clear';
      break;
	case '4':
      code = 'tcs34725_h';
      break;
	case '5':
      code = 'tcs34725_s';
      break;
	case '6':
      code = 'tcs34725_v';
      break;
    default:
	  code = 'tcs34725_r';
	  break;
  }
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino['tcs34725_color'] = function(block) {
	
Blockly.Arduino.definitions_['define_tcs34725_iscolor'] = 'bool fnc_tcs34725_iscolor(int _color)\n'+
'{\n'+
'	if(tcs34725_h > 330 || tcs34725_h < 20){ if(_color==2) return true; } //red\n'+
'	else if(tcs34725_h < 45){ if(_color==3) return true; }  //orange\n'+
'	else if(tcs34725_h < 90){ if(_color==4) return true; }  //yellow\n'+
'	else if(tcs34725_h < 150){ if(_color==5) return true; } //green\n'+
'	else if(tcs34725_h < 210){ if(_color==6) return true; } //cyan\n'+
'	else if(tcs34725_h < 270){ if(_color==7) return true; } //blue\n'+
' 	else if(tcs34725_h < 330){ if(_color==8) return true; } //violet\n'+
'	return false;\n'+
'}\n';
	 
  var typeColor = block.getFieldValue('TypeColor');  
  
   switch (typeColor) {
    case '0':
      code = 'fnc_tcs34725_iscolor(2)';
      break;
    case '1':
      code = 'fnc_tcs34725_iscolor(3)';
      break;
    case '2':
      code = 'fnc_tcs34725_iscolor(4)';
      break;
	case '3':
      code = 'fnc_tcs34725_iscolor(5)';
      break;
	case '4':
      code = 'fnc_tcs34725_iscolor(6)';
      break;
	case '5':
      code = 'fnc_tcs34725_iscolor(7)';
      break;
	case '6':
      code = 'fnc_tcs34725_iscolor(8)';
      break;
    default:
	  code = 'fnc_tcs34725_iscolor(2)';
	  break;
  }
 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
