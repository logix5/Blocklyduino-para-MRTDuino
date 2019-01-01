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

Blockly.Arduino['internal_button_sensor'] = function(block) {
 
 Blockly.Arduino.definitions_['include_mrtremote'] = '#include <MrtDuino.h>\n';
 Blockly.Arduino.definitions_['mrtremote_ir_id_set'] = 'MrtIdSetting ir_id_set;\n';
  var code= 'ir_id_set.isStartPressed()';
  
  
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

Blockly.Arduino['Flame_sensor'] = function(block) {
    var PinFlame = this.getFieldValue('PIN_FLAME'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinFlame+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinFlame+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Flame_status_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_FLAME');
  
  Blockly.Arduino.setups_['setup_flame_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Sound_sensor'] = function(block) {
    var PinSound = this.getFieldValue('PIN_SOUND'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinSound+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinSound+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Sound_status_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_SOUND');
  
  Blockly.Arduino.setups_['setup_sound_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dht_sensor'] = function(block) {
    var PinDHT = this.getFieldValue('PIN_DHT'); 
	var TypeDHT = this.getFieldValue('OUTPUT_TYPE');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	
	Blockly.Arduino.definitions_['include_dht'] = '#include "DHT.h" \n';
	
	if (TypeDHT=='0')
	{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT11   // DHT 11\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT11);\n';
		}
	else if (TypeDHT=='1')
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT21   // DHT 21\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT21);\n';
		}
	else
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT22   // DHT 22\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT22);\n';
		}
	//Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHTTYPE);\n';
	Blockly.Arduino.setups_['setup_input_'+PinDHT] = 'dht_'+PinDHT+'.begin();\n';
	
    if(Status=='0')
      var code = 'dht_'+PinDHT+'.readTemperature()';  
    else if (Status=='1')
      var code = 'dht_'+PinDHT+'.readHumidity()';
    else
		var code= 'dht_'+PinDHT+'.computeHeatIndex(dht_'+PinDHT+'.readTemperature(),dht_'+PinDHT+'.readHumidity(),true)';	
  
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Gas_sensor'] = function(block) {
    var PinGas = this.getFieldValue('PIN_GAS'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinGas+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinGas+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Gas_status_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_GAS');
  
  Blockly.Arduino.setups_['setup_gas_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Alcohol_sensor'] = function(block) {
    var PinAlcohol = this.getFieldValue('PIN_ALCOHOL'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinAlcohol+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinAlcohol+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Alcohol_status_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_ALCOHOL');
  
  Blockly.Arduino.setups_['setup_Alcohol_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Vibration_sensor'] = function(block) {
    var PinVibration = this.getFieldValue('PIN_VIBRATION'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinVibration+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinVibration+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Vibration_status_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_VIBRATION');
  
  Blockly.Arduino.setups_['setup_Vibration_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['hall_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_HALL');
  
  Blockly.Arduino.setups_['setup_hall_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pir_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_PIR');
  
  Blockly.Arduino.setups_['setup_pir_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Vapor_sensor'] = function(block) {
    var PinVapor = this.getFieldValue('PIN_VAPOR'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinVapor+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinVapor+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['AmbientLight_sensor'] = function(block) {
    var PinAlight = this.getFieldValue('PIN_ALIGHT'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinAlight+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinAlight+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Water_sensor'] = function(block) {
    var PinWater = this.getFieldValue('PIN_WATER'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinWater+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinWater+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['Moisture_sensor'] = function(block) {
    var PinMoisture = this.getFieldValue('PIN_MOISTURE'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinMoisture+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinMoisture+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['Joystick_axis_sensor'] = function(block) {
    var PinJoystick = this.getFieldValue('PIN_JOYSTICK'); 
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
    //Blockly.Arduino.setups_['setup_input_'+PinPotentiometer] = 'pinMode('+PinPotentiometer+', INPUT);';
    if(Status=='0')
      var code = 'map(analogRead('+PinJoystick+'),0,1023,0,100)';
    else
      var code = 'analogRead('+PinJoystick+')';
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}; 

Blockly.Arduino['joystick_button_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN_JOYSTICK_BUTTON');
  
  Blockly.Arduino.setups_['setup_btntouch_'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT_PULLUP);';
  
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



