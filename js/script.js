// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: May 2025
// This file contains the JS functions for index.html


'use-strict'


/**
* This function
*/
// eslint-disable-next-line no-unused-vars

function calculateCost() {
  const TAX_RATE = 0.13;
  let sizePrice = 0;
  let size = "";

  // Check which size is selected by ID
  if (document.getElementById("regular").checked) {
    size = "regular"
    sizePrice = 5.00
  } else if (document.getElementById("large").checked) {
    size = "large"
    sizePrice = 7.00
  }

  // Check how many toppings by ID
  let toppingCount = 0;
  if (document.getElementById("1").checked) {
    toppingCount = 1
  } else if (document.getElementById("2").checked) {
    toppingCount = 2
  } else if (document.getElementById("3").checked) {
    toppingCount = 3
  }

  const toppingPrice = toppingCount * 0.50;

  // Calculate subtotal, tax, total
  const subtotal = sizePrice + toppingPrice;
  const taxAmount = subtotal * TAX_RATE;
  const totalCost = Math.round((subtotal + taxAmount) * 100) / 100;

  // Output result
  document.getElementById("result").innerHTML = `
    <p>You selected a ${size} bubble tea with ${toppingCount} topping(s).</p>
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax (13%): $${taxAmount.toFixed(2)}</p>
    <p>Total: $${totalCost.toFixed(2)}</p>
  `;
}
