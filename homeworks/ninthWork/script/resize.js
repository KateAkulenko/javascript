const resizableContainer = document.getElementById('js-box');
  const resizableContent = document.getElementById('js-box-content');
  let isResizing = false;
  resizableContainer.addEventListener('mousedown', (e) => {
    if (e.target === resizableContent) {
      isResizing = true;
    }
  });
  document.addEventListener('mousemove', (e) => {
    if (isResizing) {
      resizableContent.style.width = e.clientX - resizableContainer.getBoundingClientRect().left + 'px';
      resizableContent.style.height = e.clientY - resizableContainer.getBoundingClientRect().top + 'px';
    }
  });
  document.addEventListener('mouseup', () => {
    isResizing = false;
  });