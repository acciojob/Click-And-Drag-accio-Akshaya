
  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  // Use pointer events instead of mouse events
  slider.addEventListener('pointerdown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('pointerleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('pointerup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

