/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.remoteControlMRT');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_remotecontrolMRT'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var Channel = this.getFieldValue('CHANNEL');
  
  Blockly.Arduino.definitions_['include_enableinterrupt'] = '#include <EnableInterrupt.h>\n';
  Blockly.Arduino.definitions_['defines_remoteMRT'] = '#define Timeout 500\n'+
'#define Shift 8\n' +
'unsigned long time, dtime,timeout_mark;\n' +
'unsigned long res = 0;\n' +
'unsigned long Button_ID = 0;\n' +
'unsigned int buf = 0;\n' +
'byte impuls = 1;\n' +
'byte Channl_ID = 1;\n' +
'byte Button_en = 0;\n' +
'byte state = 0;\n' +
'byte Channl_buf = 0;\n' +

'// Return if the key was pressed\n' +
'bool RC(long BT_ID)\n' +
'{ \n' +
'  if (Timeout < millis() - timeout_mark)\n' +
'   Button_ID = 0x733;\n' +
'  if (BT_ID == Button_ID) \n' +
'    return 1;\n' +
'  return 0;  \n' +  
'}\n' +
'\n' +
'//Configuration Remote Control\n' +
'\n' +
'void IRRC_setup(int pin, uint8_t Channl)\n' +
'{\n' +
'  \n' +
'  pinMode(pin, INPUT);     //set the pin to input\n' +
'  digitalWrite(pin, HIGH); //use the internal pullup resistor\n' +
'  \n' +
'  time = micros();  \n' +
'  \n' +
'  enableInterrupt(pin, change, CHANGE);\n' +
'  \n' +
' switch ( Channl )\n' +
'  {\n' +
'    case 1:\n' +
'   Channl_ID = 0xFC;\n' +
'    return;\n' +
'    case 2:\n' +
'    Channl_ID = 0x3C;\n' +
'    return;\n' +
'    case 3:\n' +
'    Channl_ID = 0xCC;\n' +
'    return;  \n' +      
'    case 4:\n' +
'    Channl_ID = 0x0C;\n' +
'    return;\n' +
'    case 5:\n' +
'    Channl_ID = 0xF0;\n' +
'    return;\n' +
'    case 6:\n' +
'    Channl_ID = 0x30;\n' +
'    return;\n' +
'    case 7:\n' +
'    Channl_ID = 0xC0;\n' +
'    return;\n' +
'    case 8:\n' +
'    Channl_ID = 0x00;\n' +
'    return;\n' +
'       //default:\n' +
'  }\n' +
'}\n' +
'\n' +
'//Interrupt function\n' +
'void change()\n' +
'{\n' +
'   \n' +
'  dtime = micros();\n' +
'  buf = dtime - time ;\n' +
'  time = dtime;\n' +
'\n' +
'  //procesar la duración del pulso (200 redondeando hacia arriba con buf% 200> 101 y (o) si el pulso es <101 asignación de una sola longitud)\n' +
'  if (buf % 200 > 101)\n' +
'  {\n' +
'    buf = (buf / 200) + 1;\n' +
'  }\n' +
'  else \n' +
'  {\n' +
'    buf = buf / 200;\n' +
'  }\n' +
'  if (buf == 0) buf = 1;\n' +
'\n' +
'  if (state == 0) // Initial state\n' +
'  {\n' +
'      if (!impuls) //Checking the first bits (000)\n' +
'      {\n' +
'        state++;\n' +
'        res = 0;\n' +
'        res = res << buf;\n' +
'        //Serial.println("Start");\n' +
'      }\n' +
'  } else {\n' +
'    if (impuls)\n' +
'    {\n' +
'      res = res << buf;\n' +
'      for (int i = 0; i < buf ; i++) \n' +
'     {\n' +
'        res |= 1 << i ;\n' +
'      }\n' +
'    }else{\n' +
'      res = res << buf;\n' +
'\n' +
'      if ((byte)(res & 0x7F) == 0x38)\n' +
'      { \n' +
'        buf = 1;\n' +
'        for (int i = 1; i < Shift; i ++)\n' +
'          buf = (buf << 1) + 1; \n' +
'\n' +
'        Channl_buf = (res >> 6) & buf ;\n' +
'\n' +
'        if (Channl_buf == Channl_ID)\n' +
'        {\n' +
'          Button_ID = res >> (6+Shift);\n' +
'          while(!(Button_ID & 1)) Button_ID = Button_ID >> 1; \n' +
'          timeout_mark = millis();\n' +
'              //Serial.println (Button_ID, HEX);\n' +
'        }\n' +
'        state = 0;\n' +
'        res = 0;\n' +
'      }\n' +
'    }  \n' +
'  }\n' +
'  impuls = !impuls;\n' +
'}	 \n';
	 	 
	 
  var code = 'IRRC_setup('+dropdown_pin+','+Channel+');\n';
  return code;
};


Blockly.Arduino['IR_Remote_Key'] = function(block) {
  var key_detected = this.getFieldValue('KEY');
    
  var code = 'RC('+key_detected+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
