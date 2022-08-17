const form = document.getElementById('generate-form');
const qrCode = document.getElementById('qr-code');

const onGenerateSubmit = (e) => {
  e.preventDefault();
  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  if (url === '') {
    alert('Please enter a valid url');
  } else {
    showSpinner();
  }
}

const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
}
hideSpinner();

form.addEventListener('submit', onGenerateSubmit)
