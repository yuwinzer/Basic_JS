function tableCreate(x,y,cellSize) {
    let tempTable = document.createElement('table');
    tempTable.setAttribute('id','chessT');
    tempTable.style.border = "0px solid black";
    tempTable.style.borderCollapse = "collapse";
    for (let i = 0; i < x; i++) {
        let tableTr = tempTable.insertRow();
        for(let j = 0; j < y; j++) {
            var tableTd = tableTr.insertCell();
            tableTd.style.border = "0px solid black";
            tableTd.style.textAlign = 'center';
            tableTd.style.backgroundColor = '#dab78d';
            tableTd.style.width = cellSize + 'px';
            tableTd.style.height = cellSize + 'px';

            if ((i % 2 == 0 && j % 2 != 0 && i != 0 && j != 0) || (i % 2 != 0 && j % 2 == 0 && i != 0 && j != 0)) {
                tableTd.style.backgroundColor = '#bb7c46';
                tableTd.style.border = "1px solid black";
            } else if (i != 0 && j != 0) {
                tableTd.style.border = "1px solid black";
            } else if (i == 0 && j != 0) {
                tableTd.appendChild(document.createTextNode(String.fromCharCode(64+j)));
                tableTd.style.backgroundColor = 'white';
            } else if (i != 0 && j == 0) {
                tableTd.appendChild(document.createTextNode(i));
                tableTd.style.backgroundColor = 'white';
            } else tableTd.style.backgroundColor = 'white';
        };
    };
    document.body.appendChild(tempTable);
};

tableCreate(9, 9, 20);