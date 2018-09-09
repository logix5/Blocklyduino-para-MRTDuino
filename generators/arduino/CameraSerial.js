/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.CameraSerial');

goog.require('Blockly.Blocks');

Blockly.Arduino['Camera_init_ss'] = function(block) {
	
 var dropdown_pin1 = this.getFieldValue('PIN1');
 var dropdown_pin2 = this.getFieldValue('PIN2');
  
 Blockly.Arduino.definitions_['define_softwareserial_library'] = '#include <SoftwareSerial.h>';
 Blockly.Arduino.definitions_['define_AdafruitVC0706_library'] = '#include <Adafruit_VC0706.h>';
 Blockly.Arduino.definitions_['define_softwareserial_camera'] = 'SoftwareSerial mySoftwareSerialcamera('+dropdown_pin1+','+dropdown_pin2+');\n';
 Blockly.Arduino.definitions_['define_Camera_variable'] = 'Adafruit_VC0706 cam=Adafruit_VC0706(&mySoftwareSerialcamera);\n';
 
  var code='';
  return code;
   
};

Blockly.Arduino['Camera_init_serial1'] = function(block) {
	

 Blockly.Arduino.definitions_['define_AdafruitVC0706_library'] = '#include <Adafruit_VC0706.h>';
 Blockly.Arduino.definitions_['define_Camera_variable'] = 'Adafruit_VC0706 cam=Adafruit_VC0706(&Serial1);\n';
  
  var code='';
  return code;
   
};

Blockly.Arduino['Camera_begin'] = function(block) {
 		
 var code = 'cam.begin();\n';

  return code;
};


Blockly.Arduino['Camera_Resolution'] = function(block) {
 		
 var resolution = this.getFieldValue('Resolution'); 		
		
 var code = 'cam.setImageSize('+resolution+');\n';

  return code;
};

Blockly.Arduino['Camera_takepicture'] = function(block) {
 		
 var code = 'cam.takePicture();\n';

  return code;
};

Blockly.Arduino['Camera_resumevideo'] = function(block) {
 		
 var code = 'cam.resumeVideo();\n';

  return code;
};

Blockly.Arduino['Camera_SetMotionDetect'] = function(block) {
 		
 var setmotion = this.getFieldValue('Status'); 		
		
 var code = 'cam.setMotionDetect('+setmotion+');\n';

  return code;
};

Blockly.Arduino['Camera_OutputTV'] = function(block) {
 		
 var setoutputTV = this.getFieldValue('Status'); 	

  if (setoutputTV==0) 
	 var code = 'cam.TVoff();\n';
  else
	 var code = 'cam.TVon();\n';

  return code;
};


Blockly.Arduino['Camera_SizePicture'] = function(block) {
	
 var code='(double)cam.frameLength()';
 	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Arduino['Camera_MotionDetected'] = function(block) {
	
 var code='cam.motionDetected()';
 	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};


Blockly.Arduino['Camera_Readbytes'] = function(block) {
	
var numBytes= Blockly.Arduino.valueToCode(this, 'NUMBYTES', Blockly.Arduino.ORDER_ATOMIC);	
	
 var code='cam.readPicture('+numBytes+')';
 	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Arduino['Camera_SavePicture'] = function(block) {

  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  var logic = this.getFieldValue('LOGIC');
  
   Blockly.Arduino.definitions_['define_sd_savefile'] = 'void SavePicture (String filename, boolean logs)\n'+
'	{\n'+
'// Open the file for writing\n'+
'  File imgFile = SD.open(filename, FILE_WRITE);\n'+
'\n'+
'  // Get the size of the image (frame) taken \n'+ 
'  uint16_t jpglen = cam.frameLength();\n'+
'  if (logs) {\n'+
'	Serial.print("Storing ");\n'+
'	Serial.print(jpglen, DEC);\n'+
'	Serial.print(" byte image.");\n'+
'	}\n'+
'	\n'+
'  // Read all the data up to # bytes!\n'+
'  byte wCount = 0; // For counting # of writes\n'+
'  while (jpglen > 0) {\n'+
'    // read 32 bytes at a time;\n'+
'    uint8_t *buffer;\n'+
'    uint8_t bytesToRead = min(32, jpglen); // change 32 to 64 for a speedup but may not work with all setups!\n'+
'    buffer = cam.readPicture(bytesToRead);\n'+
'    imgFile.write(buffer, bytesToRead);\n'+
'	\n'+
'    if((++wCount >= 64) && (logs) ){ // Every 2K, give a little feedback so it does not appear locked up\n'+
'     Serial.print(\'.\');\n'+
'     wCount = 0;\n'+
 '   }\n'+
'   \n'+
'    jpglen -= bytesToRead;\n'+
'  }\n'+
'  imgFile.close();\n'+
'  \n'+
'}\n';

 if(logic=='TRUE')
	var code = 'SavePicture('+filename+',true);\n';
 else
	 var code = 'SavePicture('+filename+',false);\n';
 
   return code;
};



