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
 * @fileoverview Generating Arduino for math blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.math');

goog.require('Blockly.Arduino');


Blockly.Arduino.math_number = function() {
  // Numeric value.
  var code = window.parseFloat(this.getFieldValue('NUM'));
  // -4.abs() returns -4 in Dart due to strange order of operation choices.
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Arduino.math_arithmetic = function() {
  // Basic arithmetic operators, and power.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code;
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Arduino.math_arithmetic.OPERATORS = {
  ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
  MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
  MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  POWER: [null, Blockly.Arduino.ORDER_NONE]  // Handle power separately.
};

Blockly.Arduino['base_map'] = function(block) {
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var value_fromlow = Blockly.Arduino.valueToCode(block, 'fromLow', Blockly.Arduino.ORDER_ATOMIC);
  var value_fromhigh = Blockly.Arduino.valueToCode(block, 'fromHigh', Blockly.Arduino.ORDER_ATOMIC);
  var value_tolow = Blockly.Arduino.valueToCode(block, 'toLow', Blockly.Arduino.ORDER_ATOMIC);
  var value_tohigh = Blockly.Arduino.valueToCode(block, 'toHigh', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //map(value, fromLow, fromHigh, toLow, toHigh)
  var code = 'map('+value_value+','+value_fromlow+','+value_fromhigh+','+value_tolow+ ','+value_tohigh+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

/*
Blockly.Arduino.math_trig = function() {
    var mode = this.getFieldValue('OP');
    var argument = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
    var code = mode+'('+argument+')';
    return [code, Blockly.Arduino.ORDER_NONE];
};*/

Blockly.Arduino['math_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    var code = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_UNARY_SIGN) || '0';
    return ['-' + code, Blockly.Arduino.ORDER_UNARY_SIGN];
  }
  //Blockly.Arduino.definitions_['include_math'] = '#include <math.h>';
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  } else {
    arg = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'abs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'sqrt(' + arg + ')';
      break;
    case 'LN':
      code = 'log(' + arg + ')';
      break;
    case 'LOG10':
      code = 'log10(' + arg + ')';
      break;
    case 'EXP':
      code = 'exp(' + arg + ')';
      break;
    case 'POW10':
      code = 'pow(10,' + arg + ')';
      break;
    case 'ROUND':
      code = 'round(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'ceil(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'floor(' + arg + ')';
      break;
    case 'SIN':
      code = 'sin(' + arg + ')';
      break;
    case 'COS':
      code = 'cos(' + arg + ')';
      break;
    case 'TAN':
      code = 'tan(' + arg + ')';
      break;
  }
  if (code) {
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ASIN':
      code = 'asin(' + arg + ')';
      break;
    case 'ACOS':
      code = 'acos(' + arg + ')';
      break;
    case 'ATAN':
      code = 'atan(' + arg + ')';
      break;
    default:
      throw 'Unknown math operator: ' + operator;
  }
  return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Arduino['var_random'] = function(block) {
  var value_rand_min = Blockly.Arduino.valueToCode(this, 'rand_min', Blockly.Arduino.ORDER_ATOMIC);
  var value_rand_max = Blockly.Arduino.valueToCode(this, 'rand_max', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'random('+value_rand_min+','+value_rand_max+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['var_randomseed'] = function(block) {
  var value_rand_seed = Blockly.Arduino.valueToCode(this, 'randomseed', Blockly.Arduino.ORDER_ATOMIC);
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'randomSeed('+value_rand_seed+');\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Arduino['various_constrain'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_a = Blockly.Arduino.valueToCode(this, 'a', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(this, 'b', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'constrain('+value_x+','+value_a+','+value_b+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['conversion_tobyte'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'byte('+value_name+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['conversion_toint'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'int('+value_name+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}

Blockly.Arduino['conversion_tounsignedint'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'unsigned int('+value_name+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}

Blockly.Arduino['conversion_tofloat'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'float('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['math_binary_number'] = function(block) {
  // Numeric value.
  var code = this.getFieldValue('NUM');
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['math_hex_number'] = function(block) {
  // Numeric value.
  var code = this.getFieldValue('NUM');
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['math_constant'] = function() {
  // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
  var CONSTANTS = {
    'PI': ['PI', Blockly.Arduino.ORDER_MEMBER],
    'E': ['EULER', Blockly.Arduino.ORDER_MEMBER],
    'GOLDEN_RATIO':
        ['(1 + sqrt(5)) / 2', Blockly.Arduino.ORDER_DIVISION],
    'SQRT2': ['sqrt(2)', Blockly.Arduino.ORDER_MEMBER],
    'SQRT1_2': ['sqrt(0.5)', Blockly.Arduino.ORDER_MEMBER],
    'INFINITY': ['INFINITY', Blockly.Arduino.ORDER_ATOMIC]
  };
  return CONSTANTS[this.getFieldValue('CONSTANT')];
};

Blockly.Arduino['math_number_property'] = function() {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = Blockly.Arduino.valueToCode(this, 'NUMBER_TO_CHECK',
      Blockly.Arduino.ORDER_MODULUS) || '0';
  var dropdown_property = this.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    // Prime is a special case as it is not a one-liner test.
    var functionName = Blockly.Arduino.provideFunction_(
        'math_isPrime',
        [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
          '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
          '  if (n == 2 || n == 3) {',
          '    return true;',
          '  }',
          '  // False if n is NaN, negative, is 1, or not whole.',
          '  // And false if n is divisible by 2 or 3.',
          '  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
            ' n % 3 == 0) {',
          '    return false;',
          '  }',
          '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
          '  for (var x = 6; x <= sqrt(n) + 1; x += 6) {',
          '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
          '      return false;',
          '    }',
          '  }',
          '  return true;',
          '}']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.Arduino.valueToCode(this, 'DIVISOR',
          Blockly.Arduino.ORDER_MODULUS) || '0';
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.Arduino.ORDER_EQUALITY];
};

Blockly.Arduino['math_on_list'] = function() {
  // Math functions for lists.
  var func = this.getFieldValue('OP');
  var list, code;
  switch (func) {
    case 'SUM':
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_MEMBER) || '[]';
      code = list + '.reduce(function(x, y) {return x + y;})';
      break;
    case 'MIN':
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_COMMA) || '[]';
      code = 'min.apply(null, ' + list + ')';
      break;
    case 'MAX':
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_COMMA) || '[]';
      code = 'max.apply(null, ' + list + ')';
      break;
    case 'AVERAGE':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.Arduino.provideFunction_(
          'math_mean',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  return myList.reduce(function(x, y) {return x + y;}) / ' +
                  'myList.length;',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MEDIAN':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.Arduino.provideFunction_(
          'math_median',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  var localList = myList.filter(function (x) ' +
              '{return typeof x == \'number\';});',
            '  if (!localList.length) return null;',
            '  localList.sort(function(a, b) {return b - a;});',
            '  if (localList.length % 2 == 0) {',
            '    return (localList[localList.length / 2 - 1] + ' +
              'localList[localList.length / 2]) / 2;',
            '  } else {',
            '    return localList[(localList.length - 1) / 2];',
            '  }',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MODE':
      // As a list of numbers can contain more than one mode,
      // the returned result is provided as an array.
      // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
      var functionName = Blockly.Arduino.provideFunction_(
          'math_modes',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(values) {',
            '  var modes = [];',
            '  var counts = [];',
            '  var maxCount = 0;',
            '  for (var i = 0; i < values.length; i++) {',
            '    var value = values[i];',
            '    var found = false;',
            '    var thisCount;',
            '    for (var j = 0; j < counts.length; j++) {',
            '      if (counts[j][0] === value) {',
            '        thisCount = ++counts[j][1];',
            '        found = true;',
            '        break;',
            '      }',
            '    }',
            '    if (!found) {',
            '      counts.push([value, 1]);',
            '      thisCount = 1;',
            '    }',
            '    maxCount = max(thisCount, maxCount);',
            '  }',
            '  for (var j = 0; j < counts.length; j++) {',
            '    if (counts[j][1] == maxCount) {',
            '        modes.push(counts[j][0]);',
            '    }',
            '  }',
            '  return modes;',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'STD_DEV':
      var functionName = Blockly.Arduino.provideFunction_(
          'math_standard_deviation',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(numbers) {',
            '  var n = numbers.length;',
            '  if (!n) return null;',
            '  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;',
            '  var variance = 0;',
            '  for (var j = 0; j < n; j++) {',
            '    variance += pow(numbers[j] - mean, 2);',
            '  }',
            '  variance = variance / n;',
            '  return sqrt(variance);',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'RANDOM':
      var functionName = Blockly.Arduino.provideFunction_(
          'math_random_list',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(list) {',
            '  var x = floor(random() * list.length);',
            '  return list[x];',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    default:
      throw 'Unknown operator: ' + func;
  }
  return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino['math_modulo'] = function() {
  // Remainder computation.
  var argument0 = Blockly.Arduino.valueToCode(this, 'DIVIDEND',
      Blockly.Arduino.ORDER_MODULUS) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'DIVISOR',
      Blockly.Arduino.ORDER_MODULUS) || '0';
  var code ='(int)'+ argument0 + ' % (int)' + argument1;
  return [code, Blockly.Arduino.ORDER_MODULUS];
};
