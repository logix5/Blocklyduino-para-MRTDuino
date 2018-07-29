/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.MAX7219_ledmatrix');
goog.require('Blockly.Blocks');

Blockly.Arduino['Init_MAX7219_ledmatrix'] = function(block) {
  var pin_clk = this.getFieldValue('PIN_CLK');
  var pin_dat = this.getFieldValue('PIN_DAT');
  var pin_cs = this.getFieldValue('PIN_CS'); 
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  
  Blockly.Arduino.definitions_['include_LedControl'] = '#include <LedControl.h>\n';
  Blockly.Arduino.definitions_['init_Ledcontrol_LM'] = 'LedControl lclm=LedControl('+pin_dat+','+pin_clk+','+pin_cs+','+numberDisplays+');\n';
     	 	 
  var code='';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_shutdown'] = function(block) {

  var power = this.getFieldValue('power'); 
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.shutdown('+numberDisplays+','+power+');\n';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_brightness'] = function(block) {
  var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.setIntensity('+numberDisplays+','+brightness+');\n';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_clear'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
     	 	 
  var code='lclm.clearDisplay('+numberDisplays+');\n';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_draw'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var code = '';
  var rowcounter=0;
  var rowvalue='B';
  var rowline=0;
  for (var i=0; i<64; i++) {
	
	if (this.getFieldValue('Pixel' + i) != '#ffffff') 
		rowvalue=rowvalue+'1';
	else
		rowvalue=rowvalue+'0';
	
	rowcounter+=1;
	if (rowcounter==8)
		{
		 code+='lclm.setRow('+numberDisplays+','+rowline+','+rowvalue+');';
		 rowcounter=0;
		 rowvalue='B';
		 rowline=rowline+1;
		}
  };
  code+='\n';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_row'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var row = this.getFieldValue('Row');
  var value = this.getFieldValue('VALUE');
   
     	 	 
  var code='lclm.setRow('+numberDisplays+','+row+','+value+');\n';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_column'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var Column = this.getFieldValue('Column');
  var value = this.getFieldValue('VALUE');
   
     	 	 
  var code='lclm.setColumn('+numberDisplays+','+Column+','+value+');\n';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_led'] = function(block) {
  
  var numberDisplays = this.getFieldValue('NumberDisplays'); 
  var row = this.getFieldValue('Row');
  var Column = this.getFieldValue('Column');
  var value = this.getFieldValue('power');
   
     	 	 
  var code='lclm.setLed('+numberDisplays+','+row+','+Column+','+value+');\n';
  return code;
};

