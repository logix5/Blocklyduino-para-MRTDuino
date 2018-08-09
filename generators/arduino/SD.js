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

Blockly.Arduino['sd_fileexists'] = function(block) {
	
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'SD.exists('+filename+')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sd_printfile'] = function(block) {

  var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  var logic = this.getFieldValue('LOGIC');
  
   Blockly.Arduino.definitions_['define_sd_print'] = 'void sd_print(String file, String texttoprint, boolean lf)\n'+
'	{\n'+
'  	sd_file = SD.open(file, FILE_WRITE);\n'+
'	if(sd_file){\n'+
'		if(lf)sd_file.println(texttoprint);\n'+
'		else sd_file.print(texttoprint);\n'+
'		sd_file.close();\n'+
'	}\n'+
'}\n';

 if(logic=='TRUE')
	var code = 'sd_print('+filename+','+texttoprint+',true);\n';
 else
	 var code = 'sd_print('+filename+','+texttoprint+',false);\n';
 
   return code;
};

Blockly.Arduino['sd_filesize'] = function(block) {
	
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  
   Blockly.Arduino.definitions_['define_sd_filesize'] = 'unsigned long sd_filesize(String file)\n'+
'{\n'+
'	unsigned long s=0;\n'+
'	sd_file = SD.open(file, FILE_READ);\n'+
'	if(sd_file){\n'+
'		s=sd_file.size();\n'+
'		sd_file.close();\n'+
'	}\n'+
'	return s;\n'+
'}\n';
     
  
  var code = 'sd_filesize('+filename+')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sd_writefile'] = function(block) {

  var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
 
   Blockly.Arduino.definitions_['define_sd_write'] = 'void sd_write(String file,uint8_t value)\n'+
'	{\n'+
'  	sd_file = SD.open(file, FILE_WRITE);\n'+
'	if(sd_file){\n'+
'		sd_file.write(value);\n'+
'		sd_file.close();\n'+
'	}\n'+
'}\n';


   var code = 'sd_write('+filename+','+variable+');\n';
 
   return code;
};

Blockly.Arduino['sd_filereadbyte'] = function(block) {
	
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  var position = Blockly.Arduino.valueToCode(this, 'position', Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  Blockly.Arduino.definitions_['define_sd_readbyte'] = 'int sd_readbyte(String file, unsigned long pos)\n'+
'	{\n'+
'	int s=-1;\n'+
'  	sd_file = SD.open(file, FILE_READ);\n'+
'	if(sd_file){\n'+
'	if(sd_file.seek(pos)){\n'+
'			s=sd_file.peek();\n'+
'		}\n'+
'		sd_file.close();\n'+
'	}\n'+
'	return s;\n'+
'}\n';

 
  var code = 'sd_readbyte('+filename+','+position+')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sd_filereadall'] = function(block) {
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
  var statements_name = Blockly.Arduino.statementToCode(this, 'STATNAME');
  
  
  var code = 'sd_file = SD.open('+filename+', FILE_READ);\n'+
'if(sd_file)\n'+
' {\n'+
'  while(sd_file.available())\n'+
'   {\n'+
' 	  '+variable+'=sd_file.read();\n'+
'	  '+statements_name+' '+
'   }\n'+
'  sd_file.close();\n'+
' }\n';
  
  return code;
};

 


