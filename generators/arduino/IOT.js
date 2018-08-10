/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.IOT');

goog.require('Blockly.Blocks');

Blockly.Arduino['iot_init_iot'] = function(block) {

  Blockly.Arduino.definitions_['define_iot'] = '#include <IOT_ts.h>\n';
  Blockly.Arduino.definitions_['define_iot_variable'] = 'Iot_device iot;\n';
  Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(115200);\n';
  
  var code='';
  return code;
};


Blockly.Arduino['iot_init_ifttt'] = function(block) {

  var apiwrite = Blockly.Arduino.valueToCode(block, 'APIwrite', Blockly.Arduino.ORDER_ATOMIC);
    
  var code = 'iot.Iot_ifttt('+apiwrite+');\n';
  return code;
};

Blockly.Arduino['iot_init_thinkspeak'] = function(block) {

  var apiwrite = Blockly.Arduino.valueToCode(block, 'APIwrite', Blockly.Arduino.ORDER_ATOMIC);
    
  var code = 'iot.Iot_thinkspeak('+apiwrite+');\n';
  return code;
};


Blockly.Arduino['iot_reset_esp8266'] = function(block) {

  var delay_time = Blockly.Arduino.valueToCode(block, 'delaytime', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
   var code = 'iot.Reset_ESP8266('+delay_time+',true);\n';
  else
   var code = 'iot.Reset_ESP8266('+delay_time+',false);\n';
    
  
  return code;
};

Blockly.Arduino['iot_configbaudios_esp8266'] = function(block) {

  var dropdown_pinbaudios = this.getFieldValue('PINBAUDIOS');
  var delay_time = Blockly.Arduino.valueToCode(block, 'delaytime', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
   var code = 'iot.Baudios_ESP8266('+dropdown_pinbaudios+','+delay_time+',true);\n';
  else
   var code = 'iot.Baudios_ESP8266('+dropdown_pinbaudios+','+delay_time+',false);\n';
    
  
  return code;
};

Blockly.Arduino['iot_confignetwork_esp8266'] = function(block) {

  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var delay_time = Blockly.Arduino.valueToCode(block, 'delaytime', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
   var code = 'iot.Credentials_ESP8266('+ssid+','+pass+','+delay_time+',true);\n';
  else
   var code = 'iot.Credentials_ESP8266('+ssid+','+pass+','+delay_time+',false);\n';
    
  
  return code;
};

Blockly.Arduino['iot_configmode_esp8266'] = function(block) {

  var configmode = this.getFieldValue('MODE');
  var delay_time = Blockly.Arduino.valueToCode(block, 'delaytime', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
   var code = 'iot.Mode_ESP8266('+configmode+','+delay_time+',true);\n';
  else
   var code = 'iot.Mode_ESP8266('+configmode+','+delay_time+',false);\n';
    
  
  return code;
};

Blockly.Arduino['iot_sendifttt_esp8266'] = function(block) {

  var event_ifttt = Blockly.Arduino.valueToCode(block, 'event', Blockly.Arduino.ORDER_ATOMIC);
  var value1 = Blockly.Arduino.valueToCode(block, 'value1', Blockly.Arduino.ORDER_ATOMIC);
  var value2 = Blockly.Arduino.valueToCode(block, 'value2', Blockly.Arduino.ORDER_ATOMIC);
  var value3 = Blockly.Arduino.valueToCode(block, 'value3', Blockly.Arduino.ORDER_ATOMIC);
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
   var code = 'iot.iftttWrite('+event_ifttt+','+value1+','+value2+','+value3+',true);\n';
  else
   var code = 'iot.iftttWrite('+event_ifttt+','+value1+','+value2+','+value3+',false);\n';
    
  
  return code;
};

Blockly.Arduino['iot_sendthinkspeak_esp8266'] = function(block) {

  var field = Blockly.Arduino.valueToCode(block, 'field', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
 
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
   var code = 'iot.thingSpeakWrite('+field+','+value+',true);\n';
  else
   var code = 'iot.thingSpeakWrite('+field+','+value+',false);\n';
    
  
  return code;
};

