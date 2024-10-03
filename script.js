document.getElementById('addRow').addEventListener('click',function() {
    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
     const newRow = table.insertRow();
     const idCell = newRow.insertCell(0);
     const nameCell = newRow.insertCell(1);
     const priceCell = newRow.insertCell(2);
     const quantityCell = newRow.insertCell(3);

     const id = table.rows.length;
     idCell.textcontent = id;
     nameCell.textcontent = `Produto ${string.fromCharcode(65 + id - 1)}`;
     priceCell.textcontent = `R$ ${(Math.random() * 100).toFixed(2)}`;
     quantityCell.textcontent = Math.floor(Math.random() * 10) + 1;
});

