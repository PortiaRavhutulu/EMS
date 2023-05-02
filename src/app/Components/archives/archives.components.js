document.querySelector('#tableID');

table.querySelectorAll('tbody td');
element.addEventListener('click', handler);

const table = document.querySelector('#tableID');
const rows = table.tBodies[0].rows;

Array.from(rows).forEach((row, idx) => {
    row.addEventListener('click', event => {
        const tds = Array.from(row.cells).map(td => td.textContent);

        console.clear();

        console.log('row index:', idx);

        console.log('tds content:', ...tds);

        console.log('tds string:', tds.join(' '));
    });
  });
