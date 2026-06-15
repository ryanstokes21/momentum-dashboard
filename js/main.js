const currentPage = window.location.pathname.split('/').pop();
const links = document.querySelectorAll('.nav-list a');

links.forEach((link) => {
  if (link.getAttribute('href').includes(currentPage)) {
    link.classList.add('active');
  }
});
