/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.simpleSensors');

goog.require('Blockly.Blocks');

Blockly.Arduino['button_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_BUTTON');
  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  if(logic=='TRUE')
    var code = '(!digitalRead('+dropdown_pin+'))';
  else
   var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['button_touch_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_BUTTON');
  var logic = this.getFieldValue('LOGIC');
  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  if(logic=='TRUE')
    var code = '(!digitalRead('+dropdown_pin+'))';
  else
   var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['tilt_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_BUTTON');
  
  Blockly.Arduino.setups_['setup_tilt_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['photointerrupter_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_BUTTON');
  
  Blockly.Arduino.setups_['setup_photointerrupter_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['knock_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_BUTTON');
  
  Blockly.Arduino.setups_['setup_knock_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ultrasonic_ranger_sensor'] = function(block) {
    var PIN_TRIG = this.getFieldValue('PIN_TRIG'); 
    var PIN_ECHO = this.getFieldValue('PIN_ECHO');
    Blockly.Arduino.setups_['setup_output_'+PIN_TRIG] = 'pinMode('+PIN_TRIG+', OUTPUT);';
    Blockly.Arduino.setups_['setup_input_'+PIN_ECHO] = 'pinMode('+PIN_ECHO+', INPUT);';
    Blockly.Arduino.definitions_['var_ultrasonic'+PIN_TRIG] = 'long ultrason_'+PIN_TRIG+ '() {\n'+
        '   long duration, distance;\n'+
        '   digitalWrite('+PIN_TRIG+',LOW);\n'+
        '   delayMicroseconds(2);\n'+
        '   digitalWrite('+PIN_TRIG+', HIGH);\n'+
        '   delayMicroseconds(10);\n'+
        '   digitalWrite('+PIN_TRIG+', LOW);\n'+
        '   duration = pulseIn('+ PIN_ECHO +', HIGH);\n'+
        '   distance = duration/58;\n'+
        '   return distance;\n'+
        '}\n';;
    var code;
    code = 'ultrason_'+PIN_TRIG+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Analog_temperature_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
    //Blockly.Arduino.definitions_['include_math'] = '#include <math.h>\n';
	//Blockly.Arduino.setups_['setup_Analog_Temp'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
    Blockly.Arduino.definitions_['define_thermister'] = "double Thermister(int RawADC) \n"+
"{\n"+
     "  double Temp;\n"+
     "  Temp = log(((10240000/RawADC) - 10000));\n"+
     "  Temp = 1 / (0.001129148 + (0.000234125 + (0.0000000876741 * Temp * Temp ))* Temp );\n"+
     "  Temp = Temp - 273.15; // Convert Kelvin to Celcius\n"+
     "  return Temp;\n"+
"}\n";
     
  var code = 'Thermister(analogRead('+dropdown_pin+'))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LM35_temperature_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  //Blockly.Arduino.setups_['setup_LM35_Temp'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
        
  var code = '((analogRead('+dropdown_pin+')*500)/1024)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['potentiometer_ranger_sensor'] = function(block) {
    var PinPotentiometer = this.getFieldValue('PIN_POTENTIOMETER'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinPotentiometer+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinPotentiometer+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LDR_sensor'] = function(block) {
    var PinLDR = this.getFieldValue('PIN_LDR'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinLDR+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinLDR+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LDR_status_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_LDR');
  
  Blockly.Arduino.setups_['setup_ldr_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['IR_sensor'] = function(block) {
    var PinIR = this.getFieldValue('PIN_IR'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinIR+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinIR+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['IR_status_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_IR');
  
  Blockly.Arduino.setups_['setup_ir_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
