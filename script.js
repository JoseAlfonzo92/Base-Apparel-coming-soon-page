// To handle submit 

const form = document.getElementById('notify-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const errorIcon = document.querySelector('.error-icon');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  clearFeedback();

  if (!email) {
    return setFeedback('Email field cannot be empty', true);
  }

  if (!emailRegex.test(email)) {
    return setFeedback('Please provide a valid email', true);
  }

  setFeedback('Thank you! You’ll be notified.', false);
  emailInput.value = '';
});

// Live validation: remove error state as user types valid email
emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();

  if (emailRegex.test(email)) {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';
  }
});

function clearFeedback() {
  emailInput.classList.remove('error');
  errorMessage.classList.remove('success');
  errorMessage.style.display = 'none';
  errorIcon.style.display = 'none';
}

function setFeedback(message, isError) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';

  if (isError) {
    emailInput.classList.add('error');
    errorIcon.style.display = 'block';
  } else {
    errorMessage.classList.add('success');
  }
}
