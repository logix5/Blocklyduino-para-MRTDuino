/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.RTC_DS1302');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_RTC_ds1302'] = function(block) {
  var pin_rst = this.getFieldValue('PIN_RST');
  var pin_dat = this.getFieldValue('PIN_DAT');
  var pin_clk = this.getFieldValue('PIN_CLK'); 
  
  Blockly.Arduino.definitions_['include_DS1302'] = '#include <DS1302.h>\n';
  
  Blockly.Arduino.definitions_['init_ds1302'] = 'DS1302 rtc('+pin_rst+','+pin_dat+','+pin_clk+');\n'+
  'Time t;\n';
    
  Blockly.Arduino.setups_['setup_ds1302'] = 'rtc.halt(false);\nrtc.writeProtect(false);\n';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['DateTime_RTC_ds1302'] = function(block) {
	
	
  var day = Blockly.Arduino.valueToCode(this, 'DS1302_DAY', Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, 'DS1302_MONTH', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'DS1302_YEAR', Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, 'DS1302_HOUR', Blockly.Arduino.ORDER_ATOMIC); 
  var min = Blockly.Arduino.valueToCode(this, 'DS1302_MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var sec = Blockly.Arduino.valueToCode(this, 'DS1302_SECOND', Blockly.Arduino.ORDER_ATOMIC);
  
  var DayOfWeek = this.getFieldValue('OUTPUT_VALUE'); 	
   
   var code='rtc.setTime('+hour+','+min+','+sec+');\n'+
   'rtc.setDate('+year+','+month+','+day+');\n'+
   'rtc.setDOW('+DayOfWeek+');\n';
   
  return code;
};


Blockly.Arduino['order_read_rtc_ds1302'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var code = 't=rtc.getTime();\n'
   
  return code;
};


Blockly.Arduino['values_ds1302'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==5)
	  var code = 't.sec';
  else if (Output_Value==4)
		var code = 't.min';
   else if (Output_Value==3)
			var code = 't.hour';
    else if (Output_Value==2)
				var code = 't.day';
	 else if (Output_Value==1)
				var code = 't.mon';
			else
					var code = 't.year';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['values_text_ds1302'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==1)
	  var code = 'rtc.getMonthStr()';
   else if (Output_Value==0)
	   var code = 'rtc.getDOWStr()';
    else if (Output_Value==2)
	    var code = 'rtc.getDateStr()';
     else 
	    var code = 'rtc.getTimeStr()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
