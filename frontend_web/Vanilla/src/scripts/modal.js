// Abrir modal
document.querySelectorAll('[data-open]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = btn.getAttribute('data-open');
    document.getElementById(target)?.classList.add('show-modal');
  });
});

// Cerrar modal
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = btn.getAttribute('data-close');
    document.getElementById(target)?.classList.remove('show-modal');
  });
});
