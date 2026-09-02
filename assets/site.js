
(() => {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-button');
  const links = document.querySelector('.nav-links');

  const setScrolled = () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, {passive:true});

  if (button && links) {
    button.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
