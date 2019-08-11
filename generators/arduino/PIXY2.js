/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.PIXY2');

goog.require('Blockly.Blocks');

Blockly.Arduino['pixy2_init'] = function(block) {

   Blockly.Arduino.definitions_['define_pixy2_library'] = '#include <Pixy2.h>\n';
       
   Blockly.Arduino.definitions_['define_pixy2'] = 'Pixy2 pixy;\n';
 
   Blockly.Arduino.setups_['setup_pixy2']='pixy.init();\n'

  var code = '';
  return code;
};

Blockly.Arduino['pixy2_mode'] = function(block) {

  var ModeOfUse = block.getFieldValue('MODE_OF_USE');
	   
  var code = 'pixy.changeProg("'+ModeOfUse+'");\n';
  
  return code;
};

Blockly.Arduino['pixy2_setservos'] = function(block) {

  var servoPan = Blockly.Arduino.valueToCode(this, 'servoPAN', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
  var servoTilt = Blockly.Arduino.valueToCode(this, 'servoTILT', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
   
  var code = 'pixy.setServos('+servoPan+','+servoTilt+');\n';
  return code;
};

Blockly.Arduino['pixy2_SetBrightness'] = function(block) {

  var brightness = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC) || '0';
  

  var code = 'pixy.setCameraBrightness('+brightness+');\n';
  return code;
};

Blockly.Arduino['pixy2_setLed'] = function(block) {

  var RedLed = Blockly.Arduino.valueToCode(this, 'RedLed', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
  var GreenLed = Blockly.Arduino.valueToCode(this, 'GreenLed', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  var BlueLed = Blockly.Arduino.valueToCode(this, 'BlueLed', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  
   
  var code = 'pixy.setLED('+RedLed+','+GreenLed+','+BlueLed+');\n';
  return code;
};

Blockly.Arduino['pixy2_setLamp'] = function(block) {

  var Lamp_UP = block.getFieldValue('Lamp_up');
  var Lamp_DOWN = block.getFieldValue('Led_down');
  
	   
  var code = 'pixy.setLamp('+Lamp_UP+','+Lamp_DOWN+');\n';
  return code;
};

Blockly.Arduino['pixy2_properties'] = function(block) {
	
	var property = block.getFieldValue('Property');  
	
  if (property==1)	
	var code = 'pixy.frameWidth';  
	else 
	 var code = 'pixy.frameHeight';		
		
			
				
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pixy2_getFPS'] = function(block) {
         
  var code = 'pixy.getFPS()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pixy2_getResolution'] = function(block) {

  var code = 'pixy.getResolution();\n';
  return code;
};

Blockly.Arduino['pixy2_getBlocks'] = function(block) {

  var waitmode = block.getFieldValue('Wait');  
  var Signatures = Blockly.Arduino.valueToCode(this, 'sigmap', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  var MaxBlocks = Blockly.Arduino.valueToCode(this, 'maxBlock', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  
   
  var code = 'pixy.ccc.getBlocks('+waitmode+','+Signatures+','+MaxBlocks+');\n';
  return code;
};

Blockly.Arduino['pixy2_getBlockProperties'] = function(block) {
	
	
  var NumBlock = Blockly.Arduino.valueToCode(this, 'block_number', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  var property = block.getFieldValue('BlockProperty');  
  
  if (property==1)	
	var code = 'pixy.ccc.blocks['+NumBlock+'].m_signature';  
	else if (property==2)
		var code = 'pixy.ccc.blocks['+NumBlock+'].m_x';		
		else if (property==3)
			var code = 'pixy.ccc.blocks['+NumBlock+'].m_y';	
			else if (property==4)
				var code = 'pixy.ccc.blocks['+NumBlock+'].m_width';	
				else if (property==5)
					var code = 'pixy.ccc.blocks['+NumBlock+'].m_height ';	
					else if (property==6)
						var code = 'pixy.ccc.blocks['+NumBlock+'].m_angle';	
						else if (property==7)
							var code = 'pixy.ccc.blocks['+NumBlock+'].m_index';	
							else
							var code = 'pixy.ccc.blocks['+NumBlock+'].m_age';
			
				
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pixy2_properties2'] = function(block) {
	
	var property = block.getFieldValue('Property');  
	
  if (property==1)	
	var code = 'pixy.ccc.numBlocks';  
	else if (property==2)
		var code = 'pixy.line.numVectors';		
		else if (property==3)
			 var code = 'pixy.line.numIntersections';
		     else 
		     var code = 'pixy.line.numBarcodes'; 
			
				
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pixy2_getVectorsProperties'] = function(block) {
	
	
  var NumBlock = Blockly.Arduino.valueToCode(this, 'vector_number', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  var property = block.getFieldValue('VectorProperty');  
  
  if (property==1)	
	var code = 'pixy.line.vectors['+NumBlock+'].m_x0';  
	else if (property==2)
		var code = 'pixy.line.vectors['+NumBlock+'].m_y0';		
		else if (property==3)
			var code = 'pixy.line.vectors['+NumBlock+'].m_x1';	
			else if (property==4)
				var code = 'pixy.line.vectors['+NumBlock+'].m_y1';	
				else if (property==5)
					var code = 'pixy.line.vectors['+NumBlock+'].m_index';	
					else 
					 var code = 'pixy.line.vectors['+NumBlock+'].m_flags';	
						
			
				
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pixy2_getIntersectionProperties'] = function(block) {
	
	
  var NumBlock = Blockly.Arduino.valueToCode(this, 'intersection_number', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  var property = block.getFieldValue('IntersectionProperty');  
  
  if (property==1)	
	var code = 'pixy.line.intersections['+NumBlock+'].m_x';  
	else if (property==2)
		var code = 'pixy.line.intersections['+NumBlock+'].m_y';		
		else 
		var code = 'pixy.line.intersections['+NumBlock+'].m_n';	
			
									
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};





/*



Blockly.Arduino['st7735_icon'] = function(block) {

   var IconName = block.getFieldValue('NAME');  
   var Var_Codes = block.getFieldValue('CODES');

   Blockly.Arduino.definitions_['define_pgmspace'] = '#include <avr/pgmspace.h>\n';   
   Blockly.Arduino.definitions_['define_iconvalus_'+IconName+''] = 'const unsigned char '+IconName+'[] PROGMEM= {'+Var_Codes+'};\n';
 
  var code = '';
  return code;
};

Blockly.Arduino['st7735_rotatedisplay'] = function(block) {

  var Degree = block.getFieldValue('DEGREE');
	   
  var code = 'tft1.setRotation('+Degree+');\n';
  return code;
};





Blockly.Arduino['st7735_settextcolor'] = function(block) {

  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.setTextColor('+Color+');\n';
  return code;
};

Blockly.Arduino['st7735_settextsize'] = function(block) {

  var size = block.getFieldValue('SIZE');
	   
  var code = 'tft1.setTextSize('+size+');\n';
  return code;
};

Blockly.Arduino['st7735_wraptext'] = function(block) {

  var wrapON_OFF = block.getFieldValue('WRAPTEXT');
	   
  var code = 'tft1.setTextWrap('+wrapON_OFF+');\n';
  return code;
};

Blockly.Arduino['st7735_printTextln'] = function(block) {

  var texttoprint = Blockly.Arduino.valueToCode(block, 'text_to_print', Blockly.Arduino.ORDER_ATOMIC);
  var logic = this.getFieldValue('LOGIC');
  
  if(logic=='TRUE')
     var code = 'tft1.println('+texttoprint+');\n';
  else
    var code = 'tft1.print('+texttoprint+');\n';	   
 
  return code;
};

Blockly.Arduino['st7735_drawpixel'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.drawPixel('+x0+','+y0+','+Color+');\n';
  return code;
};


Blockly.Arduino['st7735_drawline'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var x1 = Blockly.Arduino.valueToCode(this, 'x1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y1 = Blockly.Arduino.valueToCode(this, 'y1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.drawLine('+x0+','+y0+','+x1+','+y1+','+Color+');\n';
  return code;
};

Blockly.Arduino['st7735_drawrectangle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');

	var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillRect('+x0+','+y0+','+width+','+height+','+Color+');\n';
  else
     var code = 'tft1.drawRect('+x0+','+y0+','+width+','+height+','+Color+');\n';
 
  return code;
};

Blockly.Arduino['st7735_drawroundrectangle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var round = Blockly.Arduino.valueToCode(this, 'round', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
  var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillRoundRect('+x0+','+y0+','+width+','+height+','+round+','+Color+');\n';
  else
    var code = 'tft1.drawRoundRect('+x0+','+y0+','+width+','+height+','+round+','+Color+');\n';
    
  return code;
};

Blockly.Arduino['st7735_drawcircle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var radius = Blockly.Arduino.valueToCode(this, 'radius', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
  var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillCircle('+x0+','+y0+','+radius+','+Color+');\n';
  else
    var code = 'tft1.drawCircle('+x0+','+y0+','+radius+','+Color+');\n';	   
	   
  return code;
};

Blockly.Arduino['st7735_drawtriangle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var x1 = Blockly.Arduino.valueToCode(this, 'x1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y1 = Blockly.Arduino.valueToCode(this, 'y1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var x2 = Blockly.Arduino.valueToCode(this, 'x2', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y2 = Blockly.Arduino.valueToCode(this, 'y2', Blockly.Arduino.ORDER_ATOMIC) || '0';
 
  var Color = block.getFieldValue('COLOR');

  var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'tft1.fillTriangle('+x0+','+y0+','+x1+','+y1+','+x2+','+y2+','+Color+');\n';
  else
    var code = 'tft1.drawTriangle('+x0+','+y0+','+x1+','+y1+','+x2+','+y2+','+Color+');\n';
 
  return code;
};



Blockly.Arduino['st7735_drawicon'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var IconName = block.getFieldValue('NAME');
  var Color = block.getFieldValue('COLOR');


  
  var code = 'tft1.drawBitmap('+x0+','+y0+','+IconName+','+width+','+height+','+Color+');\n';
 
  return code;
};

*/
