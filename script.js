let expression = '';

function appendToResult(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    document.getElementById('result').value = 'I LOVE U PINAAAA';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}
