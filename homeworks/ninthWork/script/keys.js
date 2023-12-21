document.addEventListener('keydown', function (event) {
  const DOMDivtxt = document.getElementById('js-divtxt');
  const DOMTextarea = document.getElementById('js-txtar');
  if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    DOMDivtxt.style.display = 'none';
    DOMTextarea.style.display = 'inline-block';
    DOMTextarea.value = DOMDivtxt.innerText;
  }
  if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    console.log(DOMDivtxt.value);
    document.getElementById('js-divtxt').style.display = 'inline-block';
    document.getElementById('js-txtar').style.display = 'none';
    DOMDivtxt.innerText = DOMTextarea.value;
  }
});
