const popup = document.getElementById('anniversary-popup');
const yesButtons = document.querySelectorAll('.yes-btn');
const menu = document.getElementById('menu');

yesButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'none';
    menu.classList.remove('hidden');
  });
});
