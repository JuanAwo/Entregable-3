const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', scrollToAnchor);
}

function scrollToAnchor(event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({
    behavior: 'smooth'
  });
}