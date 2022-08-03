'use strict';

// initial values
const initialAmount = 42;
const initialDecimals = 2;

// form elements
const amountInput = document.getElementById('input');
const convertBtn = document.getElementById('convert');

// input value elements
const inputMetersEl = document.getElementById('input-meters');
const inputFeetEl = document.getElementById('input-feet');
const inputLitersEl = document.getElementById('input-liters');
const inputGallonsEl = document.getElementById('input-gallons');
const inputKilogramsEl = document.getElementById('input-kilograms');
const inputPoundsEl = document.getElementById('input-pounds');

// output values elements
const outputFeetEl = document.getElementById('output-feet');
const outputMetersEl = document.getElementById('output-meters');
const outputGallonsEl = document.getElementById('output-gallons');
const outputLitersEl = document.getElementById('output-liters');
const outputPoundsEl = document.getElementById('output-pounds');
const outputKilogramsEl = document.getElementById('output-kilograms');

// functions

function updateInputValues(amount, decimals) {
  inputMetersEl.textContent =
    inputFeetEl.textContent =
    inputLitersEl.textContent =
    inputGallonsEl.textContent =
    inputKilogramsEl.textContent =
    inputPoundsEl.textContent =
      amount.toFixed(decimals);
}

function handleConvertClick(e) {
  const amount = Number.parseFloat(amountInput.value);

  updateInputValues(amount, initialDecimals);
}

// Set default amount value on first start
amountInput.value = initialAmount.toFixed(initialDecimals);

// Update input values on first start
updateInputValues(initialAmount, initialDecimals);

convertBtn.addEventListener('click', handleConvertClick);
