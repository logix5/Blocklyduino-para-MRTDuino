/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Arduino for text blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.texts');

goog.require('Blockly.Arduino');


Blockly.Arduino.text = function() {
  // Text value.
  var code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_char = function() {
  // Text value.
  var code = Blockly.Arduino.simplequote_(this.getFieldValue('TEXT'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['conversion_tochar'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 var code = 'char('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}


Blockly.Arduino['conversion_toString'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'String('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_toString2'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var decimals = Blockly.Arduino.valueToCode(block, 'Decimals', Blockly.Arduino.ORDER_ATOMIC);
	
	var code = 'String('+value_name+','+decimals+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['text_join'] = function(block) {
  var code;
  if (block.itemCount_ == 0) {
    return ['""', Blockly.Arduino.ORDER_ATOMIC];
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'ADD0',
        Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
    code = 'String(' + argument0 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  } else {
    var argument;
    code = [];
    for (var n = 0; n < block.itemCount_; n++) {
      argument = Blockly.Arduino.valueToCode(
          block, 'ADD' + n, Blockly.Arduino.ORDER_NONE);
      if (argument == '') {
        code[n] = '""';
      } else {
        code[n] = 'String(' + argument + ')';
      }
    }
    code = code.join(' + ');
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
};



