/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ST7735');

goog.require('Blockly.Blocks');

Blockly.Arduino['st7735_init'] = function(block) {

   var pin_RST = block.getFieldValue('PIN_RST');  
   var pin_CS = block.getFieldValue('PIN_CS');  
   var pin_DC = block.getFieldValue('PIN_DC');  
   var wrap = block.getFieldValue('WRAP');  
    
	
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>\n';
   Blockly.Arduino.definitions_['define_Adafruit_GFX'] = '#include <Adafruit_GFX.h>\n';
   Blockly.Arduino.definitions_['define_Adafruit_ST7735'] = '#include <Adafruit_ST7735.h>\n';
    
   Blockly.Arduino.definitions_['define_st7735'] = 'Adafruit_ST7735 tft1=Adafruit_ST7735('+pin_CS+','+pin_DC+','+pin_RST+');\n';
 
   Blockly.Arduino.setups_['setup_st7735']='tft1.initR('+wrap+');\n'

  var code = '';
  return code;
};

Blockly.Arduino['st7735_backgroundcolor'] = function(block) {

  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.fillScreen('+Color+');\n';
  return code;
};

Blockly.Arduino['st7735_rotatedisplay'] = function(block) {

  var Degree = block.getFieldValue('DEGREE');
	   
  var code = 'tft1.setRotation('+Degree+');\n';
  return code;
};

Blockly.Arduino['st7735_invertdisplay'] = function(block) {

  var InvertON_OFF = block.getFieldValue('INVERT_DISPLAY');
	   
  var code = 'tft1.invertDisplay('+InvertON_OFF+');\n';
  return code;
};


Blockly.Arduino['st7735_setcursor'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
	   
  var code = 'tft1.setCursor('+x0+','+y0+');\n';
  return code;
};

Blockly.Arduino['st7735_settextcolor'] = function(block) {

  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.setTextColor('+Color+');\n';
  return code;
};

Blockly.Arduino['st7735_settextsize'] = function(block) {

  var size = block.getFieldValue('SIZE');
	   
  var code = 'tft1.setTextSize('+size+');\n';
  return code;
};

Blockly.Arduino['st7735_wraptext'] = function(block) {

  var wrapON_OFF = block.getFieldValue('WRAPTEXT');
	   
  var code = 'tft1.setTextWrap('+wrapON_OFF+');\n';
  return code;
};

Blockly.Arduino['st7735_printTextln'] = function(block) {

  var texttoprint = Blockly.Arduino.valueToCode(block, 'text_to_print', Blockly.Arduino.ORDER_ATOMIC);

	   
  var code = 'tft1.println('+texttoprint+');\n';
  return code;
};


/*

Blockly.Arduino['rfid_validationcard'] = function(block) {

   var pin_C1 = block.getFieldValue('C1');  
   var pin_C2 = block.getFieldValue('C2');  
   var pin_C3 = block.getFieldValue('C3');  
   var pin_C4 = block.getFieldValue('C4');  
   var Var_NAME = block.getFieldValue('NAME');
	   
   Blockly.Arduino.definitions_['define_validation_car_'+Var_NAME+''] = 'byte '+Var_NAME+'[4]= {'+pin_C1+','+pin_C2+','+pin_C3+','+pin_C4+'};\n';
 
  var code = '';
  return code;
};

Blockly.Arduino['RFID_detected'] = function(block) {
  
  var code = 'mfrc522.PICC_IsNewCardPresent()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['RFID_readed'] = function(block) {
  
  var code = 'mfrc522.PICC_ReadCardSerial()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['RFID_card_readed'] = function(block) {
	
  Blockly.Arduino.definitions_['define_card_readed'] = 'String cardreaded(byte *buffer,byte bufferSize) \n'+
' {\n'+
'	String card="";\n'+
'	for (byte i=0; i<bufferSize; i++)\n'+
'		{\n'+
'		card+=String(buffer[i]<0x10 ? \" 0\" : \" \");\n'+
'		card+=String(buffer[i],HEX);\n'+
'		}\n'+
'	return card;\n'+	
' }\n';
  
  var code = 'cardreaded(mfrc522.uid.uidByte, mfrc522.uid.size)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['RFID_check_card'] = function(block) {
	
 var Var_NAME = block.getFieldValue('NAME');	
	
  Blockly.Arduino.definitions_['compare_card_readed'] = 'bool isEqualArray(byte arrayA[],byte arrayB[],int length)\n'+
' {\n'+
'	for (int index=0; index<length; index++)\n'+
'		{\n'+
'		  if (arrayA[index]!=arrayB[index])\n'+
'		   return false;\n'+
'		}\n'+
'	return true;\n'+	
' }\n';
  
  var code = 'isEqualArray(mfrc522.uid.uidByte,'+Var_NAME+',4)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

*/
