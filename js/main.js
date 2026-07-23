// Shannon DiBiasi — site interactions
(function () {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.nav-links');

  // Sticky nav state
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('nav--scrolled');
    else nav.classList.remove('nav--scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (burger) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      })
    );
  }

  // Scroll reveal
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
