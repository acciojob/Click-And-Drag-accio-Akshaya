// Your code here.
const itemsContainer = document.getElementById('.items');
const items = document.querySelectorAll('.item');

items.forEach(item => {
	item.style.position = 'absolute';
	item.addEventListener('mousedown', startDrag);
});

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

function startDrag(e) {
  activeItem = e.target;
  const rect = activeItem.getBoundingClientRect();
  const containerRect = itemsContainer.getBoundingClientRect();

  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
}
function drag(e) {
  if (!activeItem) return;

  const containerRect = itemsContainer.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // constrain within container
  x = Math.max(0, Math.min(x, containerRect.width - activeItem.offsetWidth));
  y = Math.max(0, Math.min(y, containerRect.height - activeItem.offsetHeight));

  activeItem.style.left = `${x}px`;
  activeItem.style.top = `${y}px`;
}

function stopDrag() {
  if (activeItem) {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    activeItem = null;
  }
}
