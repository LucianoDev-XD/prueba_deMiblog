document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tooltip').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const tip = el.querySelector('.tooltip-text');
        const rect = el.getBoundingClientRect();
        const headerHeight = 90; // px
  
        if (rect.top - tip.offsetHeight < headerHeight) {
          tip.style.top = '160%'; // abajo
        } else {
          tip.style.top = '-40px'; // arriba
        }
      });
    });
  });
  const headerHeight = document.querySelector('header').offsetHeight;
  document.querySelectorAll('.tooltip').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < headerHeight) {
      el.style.marginTop = headerHeight + 'px';
    }
  });

