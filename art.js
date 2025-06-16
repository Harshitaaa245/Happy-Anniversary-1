const book = document.getElementById('book');
const totalPages = 19; // 1 cover + 18 art pages

for (let i = 0; i < totalPages; i++) {
  const page = document.createElement('div');
  page.className = 'page';

  if (i === 0) {
    page.classList.add('cover');
    page.innerHTML = "Hersey’s Doodles";
  }

  book.appendChild(page);
}

// Flip logic
let currentPage = 0;
const pages = document.querySelectorAll('.page');

pages.forEach((page, i) => {
  page.addEventListener('click', () => {
    if (i === currentPage && i < pages.length - 1) {
      pages[i].classList.add('flipped');
      currentPage++;
    }
  });
});
