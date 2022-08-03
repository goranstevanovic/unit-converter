'use strict';

// initial values
const initialAmount = 42;
const initialDecimals = 2;
const allowedSignificantDigits = 6;
const allowedDecimalDigits = 2;
const inputFieldCharacterLimit =
  allowedSignificantDigits + allowedDecimalDigits + 1; // 1 is for the separator

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

function getNavigatorLanguage() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return (
      navigator.userLanguage ||
      navigator.language ||
      navigator.browserLanguage ||
      'en-US'
    );
  }
}

function formatNumberDisplay(number, decimals) {
  const locale = getNavigatorLanguage();
  const options = {
    style: 'decimal',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };
  return new Intl.NumberFormat(locale, options).format(number);
}

function convertMetersToFeet(amount) {
  return amount * 3.280839895;
}

function convertFeetToMeters(amount) {
  return amount * 0.3048;
}

function convertLitersToGallons(amount) {
  return amount * 0.2641720524;
}

function convertGallonsToLiters(amount) {
  return amount * 3.785411784;
}

function convertKilogramsToPounds(amount) {
  return amount * 2.20462262185;
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
      formatNumberDisplay(amount, decimals);
}

function updateOutputValues(amount, decimals) {
  const feet = convertMetersToFeet(amount);
  outputFeetEl.textContent = formatNumberDisplay(feet, decimals);

  const meters = convertFeetToMeters(amount);
  outputMetersEl.textContent = formatNumberDisplay(meters, decimals);

  const gallons = convertLitersToGallons(amount);
  outputGallonsEl.textContent = formatNumberDisplay(gallons, decimals);

  const liters = convertGallonsToLiters(amount);
  outputLitersEl.textContent = formatNumberDisplay(liters, decimals);

  const pounds = convertKilogramsToPounds(amount);
  outputPoundsEl.textContent = formatNumberDisplay(pounds, decimals);

  const kilograms = convertPoundsToKilograms(amount);
  outputKilogramsEl.textContent = formatNumberDisplay(kilograms, decimals);
}

function handleAmountChange(e) {
  if (e.target.value.length > inputFieldCharacterLimit) {
    e.target.value = e.target.value.substr(0, inputFieldCharacterLimit);
  }
}

function handleConvertClick(e) {
  if (amountInput.value.length === 0 || amountInput.value <= 0) {
    return;
  }
  const amount = Number.parseFloat(amountInput.value);

  updateInputValues(amount, initialDecimals);
  updateOutputValues(amount, initialDecimals);
}

// Set default amount value on first start
amountInput.value = initialAmount.toFixed(initialDecimals);

// Update input and output values on first start
updateInputValues(initialAmount, initialDecimals);
updateOutputValues(initialAmount, initialDecimals);

amountInput.addEventListener('input', handleAmountChange);
convertBtn.addEventListener('click', handleConvertClick);
