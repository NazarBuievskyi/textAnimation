const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'Power3.ease'}});

tl.fromTo('.hero-img', {scale: 1.3, borderRadius: '0rem'}, {scale: 1, borderRadius: '2rem', delay: 0.35, duration: 2.5, ease: 'elastic.out(1.5,1)'});
tl.fromTo('.cta1', {x: '100%', opacity: 0}, {x: 0, opacity: 1, delay: 0.1}, '<20%');
tl.fromTo('.cta3', {x: '-100%', opacity: 0}, {x: 0, opacity: 1, delay: 0.1}, '<20%');
tl.fromTo('.cta2', {y: '100%', opacity: 0}, {y: 0, opacity: 1, delay: 0.1}, '<20%');
tl.fromTo('.cta4', {x: '100%', opacity: 0}, {x: 0, opacity: 1, delay: 0.1}, '<20%');
tl.fromTo('.cta6', {x: '-100%', opacity: 0}, {x: 0, opacity: 1, delay: 0.1}, '<20%');
tl.fromTo('.cta5', {y: '100%', opacity: 0}, {y: 0, opacity: 1, delay: 0.1}, '<20%');
tl.fromTo('.cta-button', {y: 20, opacity: 0}, {y: 0, opacity: 1}, '<');

//split text alternative

const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent = '';

letters.forEach(item => {
    logo.innerHTML += '<span class = "letter">' + item + '</span>';
});

gsap.set('.letter', {display: 'inline-block'});
gsap.fromTo('.letter', {y: '-100%', }, {y: 0, delay: 2, stagger: 0.1, ease: 'back.out(3)'})