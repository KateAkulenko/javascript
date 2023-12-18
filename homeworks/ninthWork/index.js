document.addEventListener('keydown', function (event) {
  const DOMDivtxt = document.getElementById('js-divtxt');
  const DOMTextarea = document.getElementById('js-txtar');
  if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    function Display() {
      document.getElementById('js-divtxt').style.display = 'none';
      document.getElementById('js-txtar').style.display = 'inline-block';
      DOMDivtxt.textContent = DOMTextarea.value;
    }
    Display();
  }
});

document.addEventListener('keydown', function (event) {
  const DOMDivtxt = document.getElementById('js-divtxt');
  const DOMTextarea = document.getElementById('js-txtar');
  if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    function DisplayReverse() {
      document.getElementById('js-divtxt').style.display = 'inline-block';
      document.getElementById('js-txtar').style.display = 'none';
      DOMTextarea.textContent = DOMDivtxt.value;
    }
    DisplayReverse();
  }
});

