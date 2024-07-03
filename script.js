const Input = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const results = document.getElementById('results-div');
check.addEventListener('click', () => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  if (!Input.value) {
    alert('Please provide a phone number');
    return;
  } else if (regex.test(Input.value)) {
    results.innerText = `Valid US number: ${Input.value}`;
  } else {
    results.innerText = `Invalid US number: ${Input.value}`;
  }
});
clear.addEventListener('click', () => {
  results.textContent = '';
  Input.value = '';
});
// regex explanitiona
// optional one with a space (1/s?)?
// 3digits(\(\d{3}\)|\d{3})
//optional hyphen or space ([\s-]?)
// three digit \d{3}
// optional hyphen or space ([\s-]?)
// four digit \d{4}
