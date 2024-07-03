const Input = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const results = document.getElementById('results-div');
check.addEventListener('click', () => {
  if (!Input.value) {
    alert('Please provide a phone number');
    return;
  }
});
clear.addEventListener('click', () => {
  results.textContent = '';
  Input.value = '';
});