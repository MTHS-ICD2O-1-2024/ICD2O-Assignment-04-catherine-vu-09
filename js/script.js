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

  // Get selected size
  const size = document.querySelector('input[name="size"]:checked').value;
  let sizeCost = (size === "regular") ? 5.00 : 7.00;

  // Get number of toppings
  const toppingCount = parseInt(document.querySelector('input[name="number-of-toppings"]:checked').value);
  const toppingCost = 0.50;
  const totalToppingCost = toppingCount * toppingCost;

  // Calculate subtotal and tax
  const subtotal = sizeCost + totalToppingCost;
  const taxAmount = subtotal * TAX_RATE;

  // Display result using <p> tags
  document.getElementById("result").innerHTML = `
    <p>You selected a ${size} bubble tea with ${toppingCount} topping(s).</p>
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax (13%): $${taxAmount.toFixed(2)}</p>
    <p>Total (rounded up): $${totalCost.toFixed(2)}</p>
  `;
}

