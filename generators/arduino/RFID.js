/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.RFID');

goog.require('Blockly.Blocks');

Blockly.Arduino['rfid_init'] = function(block) {

   var pin_RST = block.getFieldValue('PIN_RST');  
   var pin_SDA = block.getFieldValue('PIN_SDA');  
    
	
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
   Blockly.Arduino.definitions_['define_MRFC522'] = '#include <MFRC522.h>';
    
   Blockly.Arduino.definitions_['define_mrfc522'] = 'MFRC522 mfrc522('+pin_SDA+','+pin_RST+');\n';
 
   Blockly.Arduino.setups_['setup_spi']='SPI.begin();\n'
   Blockly.Arduino.setups_['setup_mrfc522']='mfrc522.PCD_Init();\n'

  var code = '';
  return code;
};

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

Blockly.Arduino['rfid_stopread'] = function(block) {

var code = 'mfrc522.PICC_HaltA();\n'+
'mfrc522.PCD_StopCrypto1();\n';
	 
	 
  return code;
};


