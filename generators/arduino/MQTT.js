/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.MQTT');

goog.require('Blockly.Blocks');

Blockly.Arduino['mqtt_init'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var server = block.getFieldValue('SERVER');  
   var port = block.getFieldValue('PORT');  
   var usermqtt = block.getFieldValue('USER');  
   var APIKey = block.getFieldValue('APIKEY');  
   var Idclient = block.getFieldValue('IDCLIENT'); 
  
  Blockly.Arduino.definitions_['define_mqtt'] = '#include "IOTMQTTESP8266.h"\n';
  
  Blockly.Arduino.definitions_['define_mqtt_variables'] = 'double varNum;\n'+
'String vartext;\n'+
'char* TopicReceived;\n'+
'const char mqtt_wifi_ssid[]="'+ssid+'";\n'+
'const char mqtt_wifi_pass[]="'+wifipassword+'";\n'+
'const char mqtt_broker[]="'+server+'";\n'+
'const int mqtt_port='+port+';\n'+
'const char mqtt_user[]="'+usermqtt+'";\n'+
'const char mqtt_pass[]="'+APIKey+'";\n'+
'const char mqtt_clientid[]="'+Idclient+'";\n'+
'\n'+
'ESP8266 mqtt_esp8266_wifi(&Serial1);\n'+
'\n'+
'char mqtt_payload[32];\n';

  
Blockly.Arduino.definitions_['define_mqtt_functions'] = 'double mqtt_payload2double(unsigned char *_payload, int _length)\n'+
'{\n'+
'  int i;\n'+
'  for (i = 0; i<_length && i<32; i++){\n'+
'    mqtt_payload[i] = _payload[i];\n'+
'  }\n'+
'  mqtt_payload[i] = 0;\n'+
'  return atof(mqtt_payload);\n'+
'}\n'+
'\n'+
'String mqtt_payload2string(unsigned char *_payload, int _length)\n'+
'{\n'+
'  int i;\n'+
'  for (i = 0; i<_length && i<32; i++){\n'+
'    mqtt_payload[i] = _payload[i];\n'+
'  }\n'+
'  mqtt_payload[i] = 0;\n'+
'  return String(mqtt_payload);\n'+
'}\n'+
'\n'+
'void mqtt_callback(char* _topic, unsigned char* _payload, unsigned int _payloadlength)\n'+
'{\n'+
'  varNum=mqtt_payload2double(_payload,_payloadlength);\n'+
'  vartext=mqtt_payload2string(_payload,_payloadlength);\n'+
'  TopicReceived = _topic;\n'+
' \n'+ 
' Serial.println("topic received");\n'+
'}\n';
  
Blockly.Arduino.functionNamesIOT_['subscriber_vacio']  = '';  
  
  Blockly.Arduino.setups_['setup_MQTT_serial'] = 'Serial1.begin(9600);\n'+
'  IOT_MQTT.begin(mqtt_broker,mqtt_port, mqtt_user,mqtt_pass, mqtt_clientid, mqtt_esp8266_wifi, mqtt_wifi_ssid, mqtt_wifi_pass, mqtt_callback, mqtt_subscribe);\n'+
'  TopicReceived="";\n';

  var code='';
  return code;
};


Blockly.Arduino['mqtt_loop'] = function(block) {

  var code = 'IOT_MQTT.loop();\n';
  return code;
};

Blockly.Arduino['mqtt_topicReset'] = function(block) {

  var code = 'TopicReceived="";\n';
  return code;
};


Blockly.Arduino['mqtt_subscribe'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 
 Blockly.Arduino.functionNamesIOT_['subscriber_topic_'+topic]  = '  IOT_MQTT.Subscribe(String("'+topic+'"));';
    
  var code = '';
  return code;
};

Blockly.Arduino['mqtt_publish'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
    
  var code = 'IOT_MQTT.Publish(String("'+topic+'"), String('+variable+'));\n';
  return code;
};

Blockly.Arduino['mqtt_TopicReceived'] = function(block) {
  
  var topic = block.getFieldValue('TOPIC');  
  var code = '(strcmp(TopicReceived,"'+topic+'")==0)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mqtt_TopicValueNum'] = function(block) {
  
  var code = 'varNum';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mqtt_TopicValueString'] = function(block) {
  
  var code = 'vartext';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
