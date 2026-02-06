import './styles/keyframes.scss';

const lonely = document.getElementById('loneliness')
const repulse = document.getElementById('repulsion')
const peace = document.getElementById('peace')
const home = document.getElementById('home')

const peaceTitle = document.getElementById('peacetitle')
const point1 = document.getElementById('space-point1')
const point2 = document.getElementById('space-point2')
const point3 = document.getElementById('space-point3')
const exitText = document.getElementById('exit-text');


const observerEntry = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('blur');
    }
  });
});

const observerSettle = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('settle');
    }
  });
});


observerEntry.observe(lonely);
observerEntry.observe(repulse);
observerEntry.observe(peace);
observerEntry.observe(home);

observerSettle.observe(peaceTitle);
observerSettle.observe(point1);
observerSettle.observe(point2);
observerSettle.observe(point3);
observerSettle.observe(exitText);



