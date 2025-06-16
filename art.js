document.querySelectorAll('.art-card').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = card.getAttribute('data-image');
    modal.style.display = "block";
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = "none";
});

