let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearOne(){
    display.value = display.value.substring(0,display.value.length - 1);
}