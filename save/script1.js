document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', function() {
    window.location.href = "typing.html";
  });

  const gameButtons = document.querySelectorAll('.gameButton');
  gameButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const page = button.getAttribute('data-page');
      window.location.href = page;
    });
  });
});
