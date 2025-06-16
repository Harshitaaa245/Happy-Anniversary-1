const images = Array.from({ length: 18 }, (_, i) => `images/art${i + 1}.jpg`);
const book = document.querySelector('.book');

images.forEach((imgSrc, i) => {
  const page = document.createElement('div');
  page.className = 'page';

  const left = document.createElement('div');
  left.className = 'left-page';

  const right = document.createElement('div');
  right.className = 'right-page';

  const img = document.createElement('img');
  img.src = imgSrc;
  right.appendChild(img);

  const pageNumber = document.createElement('span');
  pageNumber.className = 'page-number';
  pageNumber.textContent = `Page ${i + 1}`;
  right.appendChild(pageNumber);

  page.appendChild(left);
  page.appendChild(right);
  book.appendChild(page);

  page.addEventListener('click', () => {
    page.classList.toggle('flipped');
  });
});
