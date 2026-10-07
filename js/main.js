const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.global-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.global-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const revealTargets = document.querySelectorAll('.about-copy, .about-image, .commit-card, .menu-card, .message > div, .shop-panel');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  });
},{threshold:.12});
revealTargets.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
