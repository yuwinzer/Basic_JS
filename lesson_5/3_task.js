function fillByFigures() {
    let figures = ['Л', 'К', 'С', 'Ф', 'К', 'С', 'К', 'Л'];
    var chessTable = document.getElementById('chessT');
    let trs = chessTable.getElementsByTagName('tr');
    
    // insert white П*8
    let tds = trs[2].getElementsByTagName('td');
    for (let i = 1; i < 9; i++) {
        tds[i].style.color = 'white';
        tds[i].innerHTML = "П";
    };
    
    // insert black П*8
    tds = trs[7].getElementsByTagName('td');
    for (let i = 1; i < 9; i++) {
        tds[i].style.color = 'black';
        tds[i].innerHTML = "П";
    };
    
    // insert white figures
    tds = trs[1].getElementsByTagName('td');
    for (let i = 1; i < 9; i++) {
        tds[i].style.color = 'white';
        tds[i].innerHTML = figures[i-1];
        if (i == 5) {
            tds[i].style.fontWeight = 'bold'; //king is fat!
            tds[i].style.fontStyle = 'italic';
        };
    };

    // insert black figures
    tds = trs[8].getElementsByTagName('td');
    for (let i = 1;  i < 9; i++) {
        tds[i].style.color = 'black';
        tds[i].innerHTML = figures[i-1];
        if (i == 5) {
            tds[i].style.fontWeight = 'bold'; //king is fat!
            tds[i].style.fontStyle = 'italic';
        };
    };
};

fillByFigures();