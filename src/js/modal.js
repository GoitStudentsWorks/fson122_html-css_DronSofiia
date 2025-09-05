document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal-subscription');
  const openBtn = document.querySelector('.subscription-open');
  const closeBtn = document.querySelector('.modal-btn');
  const closeIcon = document.querySelector('.modal-icon-close');

  if (!modal || !openBtn || !closeBtn || !closeIcon) return;

  function openModal() {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.addEventListener('transitionend', handleTransitionEnd);
  }

  function handleTransitionEnd(e) {
    if (e.propertyName === 'opacity') {
      modal.style.display = 'none';
      modal.removeEventListener('transitionend', handleTransitionEnd);
    }
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  closeIcon.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
});
