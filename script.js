const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

const closebtn = document.getElementById('closebtn')

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('showing');
  navLinks.classList.toggle('active');
  document.body.classList.add('no-scroll');
});


closebtn.addEventListener('click', () => {
    navLinks.classList.remove('showing');
  navLinks.classList.remove('active');
  document.body.classList.remove('no-scroll');
})

