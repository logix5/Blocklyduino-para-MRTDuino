/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.GPS');

goog.require('Blockly.Blocks');

Blockly.Arduino['GPS_init_ss'] = function(block) {
	
 var dropdown_pin1 = this.getFieldValue('PIN1');
 var dropdown_pin2 = this.getFieldValue('PIN2');
  
 Blockly.Arduino.definitions_['define_softwareserial_library'] = '#include <SoftwareSerial.h>';
 Blockly.Arduino.definitions_['define_gps_library'] = '#include <TinyGPS.h>';
 Blockly.Arduino.definitions_['define_GPS_variable'] = 'TinyGPS gps;\n';
 Blockly.Arduino.definitions_['define_softwareserial_gps'] = 'SoftwareSerial mySoftwareSerialgps('+dropdown_pin1+','+dropdown_pin2+');\n';
 Blockly.Arduino.definitions_['gps_variables'] ='float flat,flon,falt,fc,fk,fmph,fmps,fkmph;\n'+
'int year;\n'+ 
'byte month, day, hour, minutes, second, hundredths,nsat;\n'+ 
'unsigned long fix_age; \n';   
 
 Blockly.Arduino.setups_['setup_sserial_gps_baudios'] = 'mySoftwareSerialgps.begin(9600);\n';
 

  var code='';
  return code;
   
};

Blockly.Arduino['GPS_init_serial1'] = function(block) {
	

 Blockly.Arduino.definitions_['define_gps_library'] = '#include <TinyGPS.h>';
 Blockly.Arduino.definitions_['define_GPS_variable'] = 'TinyGPS gps;\n';
 Blockly.Arduino.definitions_['gps_variables'] ='float flat,flon,falt,fc,fk,fmph,fmps,fkmph;\n'+
'int year;\n'+ 
'byte month, day, hour, minutes, second, hundredths,nsat;\n'+ 
'unsigned long fix_age; \n';   
 
 Blockly.Arduino.setups_['setup_serial1_baudios'] = 'Serial1.begin(9600);\n';
  
  var code='';
  return code;
   
};


Blockly.Arduino['GPS_read_save_values'] = function(block) {
 		
 var code = 'while (mySoftwareSerialgps.available())\n'+
' {\n'+ 
'  int c = mySoftwareSerialgps.read();\n'+ 
'  if (gps.encode(c)) \n'+
'   {\n'+
'     gps.f_get_position(&flat, &flon, &fix_age);\n'+
'     falt = gps.f_altitude(); // +/- altitude in meters \n'+
'     fc = gps.f_course(); // course in degrees \n'+
'     fk = gps.f_speed_knots(); // speed in knots \n'+
'     fmph = gps.f_speed_mph(); // speed in miles/hr \n'+
'     fmps = gps.f_speed_mps(); // speed in m/sec \n'+
'     fkmph = gps.f_speed_kmph(); // speed in km/hr \n'+
'     gps.crack_datetime(&year, &month, &day,&hour, &minutes, &second, &hundredths, &fix_age);\n'+
'     nsat=gps.satellites();\n'+
'   }\n'+
'  }\n';

  return code;
};

Blockly.Arduino['GPS_read_save_values2'] = function(block) {
 		
 var code = 'while (Serial1.available())\n'+
' {\n'+ 
'  int c = Serial1.read();\n'+ 
'  if (gps.encode(c)) \n'+
'   {\n'+
'     gps.f_get_position(&flat, &flon, &fix_age);\n'+
'     falt = gps.f_altitude(); // +/- altitude in meters \n'+
'     fc = gps.f_course(); // course in degrees \n'+
'     fk = gps.f_speed_knots(); // speed in knots \n'+
'     fmph = gps.f_speed_mph(); // speed in miles/hr \n'+
'     fmps = gps.f_speed_mps(); // speed in m/sec \n'+
'     fkmph = gps.f_speed_kmph(); // speed in km/hr \n'+
'     gps.crack_datetime(&year, &month, &day,&hour, &minutes, &second, &hundredths, &fix_age);\n'+
'     nsat=gps.satellites();\n'+
'   }\n'+
'  }\n';

  return code;
};

Blockly.Arduino['GPS_location'] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS1'); 
 
 
  if(parameter ==0)
   var code='flat';
  else  if(parameter ==1)
   var code='flon';
	else  if(parameter ==2)
		 var code='falt';
	 else if(parameter ==3)
		 var code='fc';
		else
	      var code='nsat';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Arduino['GPS_speed'] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS2'); 
 
 
  if(parameter ==0)
   var code='fk';
  else  if(parameter ==1)
   var code='fmph';
	else  if(parameter ==2)
		 var code='fmps';
		else
	      var code='fkmph';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Arduino['GPS_datetime'] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS3'); 
 
 
  if(parameter ==0)
   var code='year';
  else  if(parameter ==1)
   var code='month';
	else  if(parameter ==2)
		 var code='day';
	 else if(parameter ==3)
		 var code='hour';
		else if(parameter ==4)
			var code='minutes';
			else
				var code='second';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};