const itemsContainer = document.querySelector('.items');
    const cubes = document.querySelectorAll('.item');

    cubes.forEach(cube => {
      let isDragging = false;
      let offsetX, offsetY;

      cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        cube.style.zIndex = 1000;
        const rect = cube.getBoundingClientRect();
        const containerRect = itemsContainer.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e) {
          if (!isDragging) return;

          const x = e.clientX - containerRect.left - offsetX;
          const y = e.clientY - containerRect.top - offsetY;

          // Constrain within the container
          const maxX = itemsContainer.clientWidth - cube.offsetWidth;
          const maxY = itemsContainer.clientHeight - cube.offsetHeight;

          cube.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
          cube.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
        }

        function onMouseUp() {
          isDragging = false;
          cube.style.zIndex = 1;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        }
      });
    });