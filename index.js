const form = document.querySelector('form');
const volumeInput = document.getElementById('volume');
const procInput = document.getElementById('proc');
const title = document.querySelector('.form__title');

function handleSubmit(e) {
  e.preventDefault();
  const values = ((volumeInput.value/100*procInput.value) * 2.5);
  title.textContent = values;
  volumeInput.value = '';
  procInput.value = '';
}

form.addEventListener('submit', handleSubmit);