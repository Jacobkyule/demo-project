document.getElementById('feature-btn').addEventListener('click', () => {
  const message = document.getElementById('dynamic-message');
  message.textContent = 'Surprise! This feature is now active!';
  message.style.color = '#007bff';
  message.style.fontWeight = 'bold';
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formMessage = document.getElementById('form-message');
  formMessage.textContent = 'Thank you for contacting us!';
  formMessage.style.color = 'green';
});
