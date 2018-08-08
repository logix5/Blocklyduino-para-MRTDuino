/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.SD');

goog.require('Blockly.Blocks');

Blockly.Arduino['sd_init'] = function(block) {

   var pin_CS = block.getFieldValue('PIN_CS');  
    
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>\n';
   Blockly.Arduino.definitions_['define_SD'] = '#include <SD.h>\n';
   Blockly.Arduino.definitions_['define_dataFile'] = 'File dataFile;\n';
 
   Blockly.Arduino.setups_['setup_sd']='SD.begin('+pin_CS+');\n'
 
   var code = '';
   return code;
};

Blockly.Arduino['sd_mkdir'] = function(block) {
  
  var dirname = Blockly.Arduino.valueToCode(block, 'dirname', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'SD.mkdir('+dirname+');\n';
  return code;
};

Blockly.Arduino['sd_removedir'] = function(block) {
  
  var dirname = Blockly.Arduino.valueToCode(block, 'dirname', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'SD.rmdir('+dirname+');\n';
  return code;
};

Blockly.Arduino['sd_removefile'] = function(block) {
  
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'SD.remove('+filename+');\n';
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
