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

Blockly.Arduino['pixy2_getIntersectionLineProperties'] = function(block) {
	
  var NumIntersection = Blockly.Arduino.valueToCode(this, 'intersection_number2', Blockly.Arduino.ORDER_ATOMIC) || '0';  	
  var NumBlock = Blockly.Arduino.valueToCode(this, 'intersection_line_number', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  var property = block.getFieldValue('IntersectionLineProperty');  
  
  if (property==1)	
	 var code = 'pixy.line.intersections['+NumIntersection+'].m_intLines['+NumBlock+'].m_index';  
	else 
	 var code = 'pixy.line.intersections['+NumIntersection+'].m_intLines['+NumBlock+'].m_angle';		
		
			
									
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pixy2_getBarcodesProperties'] = function(block) {
	
	
  var NumBlock = Blockly.Arduino.valueToCode(this, 'barcode_number', Blockly.Arduino.ORDER_ATOMIC) || '0';  
  var property = block.getFieldValue('BarcodeProperty');  
  
  if (property==1)	
	var code = 'pixy.line.barcodes['+NumBlock+'].m_x';  
	else if (property==2)
		var code = 'pixy.line.barcodes['+NumBlock+'].m_y';		
		else if (property==3)
			 var code = 'pixy.line.barcodes['+NumBlock+'].m_flags';	
			else 
			 var code = 'pixy.line.barcodes['+NumBlock+'].m_code';	
												
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pixy2_getAllFeatures'] = function(block) {

  var waitmode = block.getFieldValue('Wait');  
  var features = block.getFieldValue('Features');  
  
    if (features==1)	
	var code = 'pixy.line.getAllFeatures((LINE_VECTOR | LINE_INTERSECTION | LINE_BARCODE),'+waitmode+');\n';  
	else if (features==2)
		var code = 'pixy.line.getAllFeatures(LINE_VECTOR,'+waitmode+');\n';		
		else if (features==3)
			var code = 'pixy.line.getAllFeatures(LINE_INTERSECTION,'+waitmode+');\n';	
			else if (features==4)
				var code = 'pixy.line.getAllFeatures(LINE_BARCODE,'+waitmode+');\n';
				else if (features==5)
					var code = 'pixy.line.getAllFeatures((LINE_VECTOR | LINE_INTERSECTION),'+waitmode+');\n';	
					else if (features==6)
						var code = 'pixy.line.getAllFeatures((LINE_VECTOR | LINE_BARCODE),'+waitmode+');\n';
						else 
						var code = 'pixy.line.getAllFeatures((LINE_INTERSECTION | LINE_BARCODE),'+waitmode+');\n';			
  
  return code;
};

Blockly.Arduino['pixy2_getMainFeatures'] = function(block) {

  var waitmode = block.getFieldValue('Wait');  
  var features = block.getFieldValue('Features');  
  
    if (features==1)	
	var code = 'pixy.line.getMainFeatures((LINE_VECTOR | LINE_INTERSECTION | LINE_BARCODE),'+waitmode+');\n';  
	else if (features==2)
		var code = 'pixy.line.getMainFeatures(LINE_VECTOR,'+waitmode+');\n';		
		else if (features==3)
			var code = 'pixy.line.getMainFeatures(LINE_INTERSECTION,'+waitmode+');\n';	
			else if (features==4)
				var code = 'pixy.line.getMainFeatures(LINE_BARCODE,'+waitmode+');\n';
				else if (features==5)
					var code = 'pixy.line.getMainFeatures((LINE_VECTOR | LINE_INTERSECTION),'+waitmode+');\n';	
					else if (features==6)
						var code = 'pixy.line.getMainFeatures((LINE_VECTOR | LINE_BARCODE),'+waitmode+');\n';
						else 
						var code = 'pixy.line.getMainFeatures((LINE_INTERSECTION | LINE_BARCODE),'+waitmode+');\n';			
  
  return code;
};

Blockly.Arduino['pixy2_setNextTurn'] = function(block) {

  var Angle = Blockly.Arduino.valueToCode(this, 'Angle', Blockly.Arduino.ORDER_ATOMIC) || '0';
  

  var code = 'pixy.line.setNextTurn('+Angle+');\n';
  return code;
};

Blockly.Arduino['pixy2_setDefaultTurn'] = function(block) {

  var Angle = Blockly.Arduino.valueToCode(this, 'Angle', Blockly.Arduino.ORDER_ATOMIC) || '0';
  

  var code = 'pixy.line.setDefaultTurn('+Angle+');\n';
  return code;
};

Blockly.Arduino['pixy2_setVector'] = function(block) {

  var Index = Blockly.Arduino.valueToCode(this, 'Index', Blockly.Arduino.ORDER_ATOMIC) || '0';
  

  var code = 'pixy.line.setVector('+Index+');\n';
  return code;
};

Blockly.Arduino['pixy2_reverseVector'] = function(block) {

  var code = 'pixy.line.reverseVector();\n';
  return code;
};

Blockly.Arduino['pixy2_setMode'] = function(block) {

  var Mode = Blockly.Arduino.valueToCode(this, 'Mode', Blockly.Arduino.ORDER_ATOMIC) || '0';
  

  var code = 'pixy.line.setMode('+Mode+');\n';
  return code;
};






