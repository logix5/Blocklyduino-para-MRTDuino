/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.MP3YX5300');

goog.require('Blockly.Blocks');

Blockly.Arduino['YX5300Mp3_init_ss'] = function(block) {
	
 var dropdown_pin1 = this.getFieldValue('PIN1');
 var dropdown_pin2 = this.getFieldValue('PIN2');
  
 Blockly.Arduino.definitions_['define_yx5300mp3_library'] = '#include <MD_YX5300.h>\n';
 Blockly.Arduino.definitions_['setup_yx5300mp3'] = ' MD_YX5300 mp3('+dropdown_pin2+','+dropdown_pin1+');\n';
 
 Blockly.Arduino.setups_['init_yx5300mp3'] = ' mp3.begin();\n';
 Blockly.Arduino.setups_['mode_yx5300mp3'] = ' mp3.setSynchronous(true);\n';
  
  var code='';
  return code;
   
};

Blockly.Arduino['YX5300Mp3_set_equalizator'] = function(block) {
 		
  var eq = this.getFieldValue('MP3_EQ'); 	
  
  var code = 'mp3.equalizer('+eq+');\n';
 
  return code;
};

Blockly.Arduino['YX5300Mp3_set_volumen'] = function(block) {
 		
 var volumen = Blockly.Arduino.valueToCode(this, 'Volumen', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.volume('+volumen+');\n';
 
  return code;
};

Blockly.Arduino['YX5300Mp3_operation'] = function(block) {
 		
 var mp3_operation = this.getFieldValue('MP3_OPERATION'); 	
 
 if (mp3_operation==0) 
    var code = 'mp3.volumeInc();\n';
	else if (mp3_operation==1) 
		var code = 'mp3.volumeDec();\n';
		else if (mp3_operation==2) 
			 var code = 'mp3.playNext();\n';
			 else if (mp3_operation==3) 
				  var code = 'mp3.playPrev();\n';
				  else if (mp3_operation==4) 
						var code = 'mp3.playStart();\n';
						else if (mp3_operation==5) 
							var code = 'mp3.playPause();\n';
							else if (mp3_operation==6) 
								var code = 'mp3.playStop();\n';
						     	else 
								 var code = 'mp3.reset();\n';
    return code;
};

Blockly.Arduino['YX5300Mp3_running'] = function(block) {
 		
  var code = 'mp3.check();\n';
 
  return code;
};

Blockly.Arduino['YX5300Mp3_playsong'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.playTrack('+song+');\n';
 
  return code;
};

Blockly.Arduino['YX5300Mp3_playsongdirectiry'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 
 var directory = Blockly.Arduino.valueToCode(this, 'Directory', Blockly.Arduino.ORDER_ATOMIC); 
  
  var code = 'mp3.playSpecific('+directory+','+song+');\n';
 
  return code;
};



Blockly.Arduino['YX5300Mp3_playfolderrepeat'] = function(block) {
 		
 var folder = Blockly.Arduino.valueToCode(this, 'Folder', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.playFolderRepeat('+folder+');\n';
 
  return code;
};


Blockly.Arduino['YX5300Mp3_playFolderShuffle'] = function(block) {
 		
 var result = Blockly.Arduino.valueToCode(this, 'Folder', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.shuffle('+result+');\n';
 
  return code;
};

Blockly.Arduino['YX5300Mp3_playTrackRepeat'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3.playTrackRepeat('+song+');\n';
 
  return code;
};
















