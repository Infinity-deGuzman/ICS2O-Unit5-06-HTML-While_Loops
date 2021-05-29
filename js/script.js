// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // This code will multiply your two numbers with while loops (repeated addition)

  const firstNumber = parseInt(document.getElementById('first-number').value)
	const secondNumber = parseInt(document.getElementById('second-number').value)
  var addedNumber = 0
  var answer = 0

  while (addedNumber <= secondNumber || addedNumber >= secondNumber) {
    if (firstNumber > 0 && secondNumber > 0) {
      addedNumber = addedNumber + 1;
      answer = answer + firstNumber;
    } else if (firstNumber < 0 && secondNumber < 0) {
      addedNumber = addedNumber - 1;
      answer = answer - firstNumber;
    } else if (firstNumber > 0 && secondNumber < 0) {
      addedNumber = addedNumber - 1;
      answer = answer - firstNumber;
    } else if (firstNumber < 0 && secondNumber > 0) {
      addedNumber = addedNumber + 1;
      answer = answer + firstNumber;
    }
  }
  
  document.getElementById('answer').innerHTML = firstNumber + " x " + addedNumber + " = " + answer;
}
