// Get the form element and success message element
const form = document.querySelector('form');
const successMessage = document.getElementById('success-message');

// Add submit event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the input values
  const email = document.getElementById('clientemail').value;
  const phone = document.getElementById('clientphone').value;
  const message = document.getElementById('clientmessage').value;

  // Perform any desired actions with the form data
  // For example, you can send the form data to a server using AJAX

  // Reset the form
  form.reset();

  // Show the success message
  successMessage.classList.add('show');
  
  // Hide the success message after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 2000);
});
