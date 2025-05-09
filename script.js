
  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', function (e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.clientX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', function () {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', function () {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    const x = e.clientX;
    const walk = (x - startX) * 2; // speed factor
    slider.scrollLeft = scrollLeft - walk;
  });

