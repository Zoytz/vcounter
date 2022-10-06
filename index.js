const form = document.querySelector('form');
const volumeInput = document.getElementById('volume');
const procInput = document.getElementById('proc');
const formTitle = document.querySelector('.form__title');

function valuesSetter() {
  const values = ((volumeInput.value/100*procInput.value) * 2.5);
  formTitle.textContent = values;
  formTitle.classList.add('form__title_type_visible');
  volumeInput.value = '';
  procInput.value = '';
}

function handleSubmit(e) {
  e.preventDefault();
  formTitle.textContent = '';
  formTitle.classList.remove('form__title_type_visible');
  setTimeout(valuesSetter, 200);
}

form.addEventListener('submit', handleSubmit);