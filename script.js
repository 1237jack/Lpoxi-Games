document.querySelector('.button-confirm').addEventListener('click', function(event) {
  event.preventDefault();
  
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  
  // Check if the username and password match
  if (username === 'Admin' && password === 'Rockclimbing2024') {
    alert('Login successful!');
    // Redirect or show the next page/content here
  } else {
    alert('Invalid username or password!');
  }
});
