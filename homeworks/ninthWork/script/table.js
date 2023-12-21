import tableData from './table.data.js';

function generateTable(list, DOMTable) {
  list.forEach((item) => {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.innerText = item.id;
    const tdName = document.createElement('td');
    tdName.innerText = item.title;
    const tdTotal = document.createElement('td');
    tdTotal.innerText = item.total;
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdTotal);
    DOMTable.appendChild(tr);
  });
}

function table(htmlId) {
  const DOMTable = document.getElementById(htmlId),
    DOMtdId = document.getElementById('js-id'),
    DOMtdName = document.getElementById('js-name'),
    DOMtdTotal = document.getElementById('js-total');

  if (!DOMTable || !DOMtdId || !DOMtdName || !DOMtdTotal) {
    throw new Error('No such HTML element');
  }
  generateTable(tableData, DOMTable);

  DOMtdId.addEventListener('click', () => sortedBy('id', DOMTable));
  DOMtdName.addEventListener('click', () => sortedBy('title', DOMTable));
  DOMtdTotal.addEventListener('click', () => sortedBy('total', DOMTable));
}

function sortedBy(field, DOMTable) {
  DOMTable.innerHTML = '';
  if (field === 'title') {
    return generateTable(tableData.sort((a, b) => {
      return a.title.localeCompare(b.title)
    }), DOMTable)
  }
  generateTable(
    tableData.sort((a, b) => a[field] - b[field]),
    DOMTable
  );
}

export { table };

