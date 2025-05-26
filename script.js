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


// FAQ Section  to toggle the Answers Open
const faqitems = document.querySelector('.faqitems')
const question = faqitems.querySelectorAll('.question')

question.forEach( (question) => {
 
  question.addEventListener('click',  () => {
const arrow = question.querySelector('svg')
arrow.classList.toggle('spin')

     const answer = question.nextElementSibling;
  answer.classList.toggle('faqactive')
  })
})


