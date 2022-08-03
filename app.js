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

function convertMetersToFeet(amount) {
  return amount * 3.28;
}

function convertFeetToMeters(amount) {
  return amount * 0.3;
}

function convertLitersToGallons(amount) {
  return amount * 0.264172;
}

function convertGallonsToLiters(amount) {
  return amount * 3.785412;
}

function convertKilogramsToPounds(amount) {
  return amount * 2.2;
}

function convertPoundsToKilograms(amount) {
  return amount * 0.45359237;
}

function updateInputValues(amount, decimals) {
  inputMetersEl.textContent =
    inputFeetEl.textContent =
    inputLitersEl.textContent =
    inputGallonsEl.textContent =
    inputKilogramsEl.textContent =
    inputPoundsEl.textContent =
      amount.toFixed(decimals);
}

function updateOutputValues(amount, decimals) {
  const feet = convertMetersToFeet(amount);
  outputFeetEl.textContent = feet.toFixed(decimals);

  const meters = convertFeetToMeters(amount);
  outputMetersEl.textContent = meters.toFixed(decimals);

  const gallons = convertLitersToGallons(amount);
  outputGallonsEl.textContent = gallons.toFixed(decimals);

  const liters = convertGallonsToLiters(amount);
  outputLitersEl.textContent = liters.toFixed(decimals);

  const pounds = convertKilogramsToPounds(amount);
  outputPoundsEl.textContent = pounds.toFixed(decimals);

  const kilograms = convertPoundsToKilograms(amount);
  outputKilogramsEl.textContent = kilograms.toFixed(decimals);
}

function handleConvertClick(e) {
  const amount = Number.parseFloat(amountInput.value);

  updateInputValues(amount, initialDecimals);
  updateOutputValues(amount, initialDecimals);
}

// Set default amount value on first start
amountInput.value = initialAmount.toFixed(initialDecimals);

// Update input and output values on first start
updateInputValues(initialAmount, initialDecimals);
updateOutputValues(initialAmount, initialDecimals);

convertBtn.addEventListener('click', handleConvertClick);
