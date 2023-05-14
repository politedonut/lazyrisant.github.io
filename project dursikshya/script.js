const toggleSwitch = document.querySelector('.switch input');

function switchTheme(event) {
  if (event.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

toggleSwitch.addEventListener('change', switchTheme);
