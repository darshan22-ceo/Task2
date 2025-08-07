const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const summary = btn.previousElementSibling;
    const moreText = summary.querySelector('.more-text');

    if (moreText.style.display === 'inline') {
      moreText.style.display = 'none';
      btn.textContent = 'Read More';
    } else {
      moreText.style.display = 'inline';
      btn.textContent = 'Read Less';
    }
  });
});
