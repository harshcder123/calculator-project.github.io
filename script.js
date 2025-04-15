let display = document.getElementById('display');
let memory = 0;

// Append value to display
function appendValue(val) {
  display.value += val;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    let result = eval(display.value);
    if (!isFinite(result)) {
      throw "Math Error";
    }
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}

// Square root function
function calculateSquareRoot() {
  try {
    let value = eval(display.value);
    if (value < 0) throw "Math Error";
    display.value = Math.sqrt(value);
  } catch (e) {
    display.value = 'Error';
  }
}

// Percentage calculation
function calculatePercentage() {
  try {
    let value = eval(display.value);
    display.value = value / 100;
  } catch (e) {
    display.value = 'Error';
  }
}

// Memory Functions
function memoryAdd() {
  try {
    memory += eval(display.value);
    display.value = '';
  } catch {
    display.value = 'Error';
  }
}

function memorySubtract() {
  try {
    memory -= eval(display.value);
    display.value = '';
  } catch {
    display.value = 'Error';
  }
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}

// ✅ Keyboard input handling
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Allow numbers and basic operators
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  }

  // Enter key for calculation
  if (key === "Enter") {
    event.preventDefault(); // prevent form submission if any
    calculate();
  }

  // Backspace to delete last character
  if (key === "Backspace") {
    deleteLast();
  }

  // Escape key to clear the display
  if (key === "Escape") {
    clearDisplay();
  }

  // Percentage key
  if (key === "%") {
    calculatePercentage();
  }
});
