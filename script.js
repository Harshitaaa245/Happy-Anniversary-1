
const yesBtn1 = document.getElementById('yesBtn1');
const yesBtn2 = document.getElementById('yesBtn2');
const popup = document.getElementById('anniversary-popup'); // Fixed ID
const menu = document.getElementById('menu');

function showMenu() {
  popup.style.display = 'none';
  menu.classList.remove('hidden');
}

const closeMenuBtn = document.getElementById('close-menu');

closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
});


yesBtn1.addEventListener('click', showMenu);
yesBtn2.addEventListener('click', showMenu);

window.onload = function () {
  dragElement(document.getElementById("anniversary-popup"));

  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      // Don't allow dragging when clicking a button
      if (e.target.tagName === "BUTTON") return;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.transform = "none"; // Disable centering transform after moving
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
};

document.querySelector('.menu-item:nth-child(1)').addEventListener('click', () => {
  window.open('gallery.html', '_blank');
});

document.querySelector('.menu-item:nth-child(6)').addEventListener('click', () => {
  window.open('songs.html', '_blank');
});

document.querySelector('.menu-item:nth-child(5)').addEventListener('click', () => {
  window.open('art.html', '_blank');
});




