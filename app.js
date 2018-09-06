document.addEventListener('DOMContentLoaded', function() {

var friends = ['Nadia', 'Jo', 'Lizzy', 'Madie', 'Lisa'];
let button = document.getElementsByTagName('button');

button[0].addEventListener('click', function () {
// nadia

let nadiaDiv = document.createElement('div');
let nadiaHeader = document.createElement('h3');
let nadiaName = document.createTextNode('Nadia');
nadiaDiv.className = 'friend';
document.body.appendChild(nadiaDiv);
nadiaDiv.appendChild(nadiaHeader);
nadiaHeader.appendChild(nadiaName);

    for (var j = 99; j >= 1; j--) {
        if (j > 2) {
            let nadiaParagraphs = document.createElement('p');
            let nadiaTextOne = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Nadia strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file');
            nadiaDiv.appendChild(nadiaParagraphs);
            nadiaParagraphs.appendChild(nadiaTextOne);
        } else if (j == 2) {
            let nadiaParagraphs = document.createElement('p');
            let nadiaTextTwo = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Nadia strikes one out, clears it all out, one line of code in the file');
            nadiaDiv.appendChild(nadiaParagraphs);
            nadiaParagraphs.appendChild(nadiaTextTwo);
        } else if (j == 1) {
            let nadiaParagraphs = document.createElement('p');
            let nadiaTextThree = document.createTextNode(j + ' line of code in the file, ' + j + ' line of code; Nadia strikes one out, clears it all out, no more lines of code in the file');
            nadiaDiv.appendChild(nadiaParagraphs);
            nadiaParagraphs.appendChild(nadiaTextThree);
        }
    }

// Jo

let joDiv = document.createElement('div');
let joHeader = document.createElement('h3');
let joName = document.createTextNode('Jo');
joDiv.className = 'friend';
document.body.appendChild(joDiv);
joDiv.appendChild(joHeader);
joHeader.appendChild(joName);

    for (var j = 99; j >= 1; j--) {
        if (j > 2) {
            let joParagraphs = document.createElement('p');
            let joTextOne = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Jo strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file');
            joDiv.appendChild(joParagraphs);
            joParagraphs.appendChild(joTextOne);
        } else if (j == 2) {
            let joParagraphs = document.createElement('p');
            let joTextTwo = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Jo strikes one out, clears it all out, one line of code in the file');
            joDiv.appendChild(joParagraphs);
            joParagraphs.appendChild(joTextTwo);
        } else if (j == 1) {
            let joParagraphs = document.createElement('p');
            let joTextThree = document.createTextNode(j + ' line of code in the file, ' + j + ' line of code; Jo strikes one out, clears it all out, no more lines of code in the file');
            joDiv.appendChild(joParagraphs);
            joParagraphs.appendChild(joTextThree);
        }
    }

// Lizzy

let lizzyDiv = document.createElement('div');
let lizzyHeader = document.createElement('h3');
let lizzyName = document.createTextNode('Lizzy');
lizzyDiv.className = 'friend';
document.body.appendChild(lizzyDiv);
lizzyDiv.appendChild(lizzyHeader);
lizzyHeader.appendChild(lizzyName);

    for (var j = 99; j >= 1; j--) {
        if (j > 2) {
            let lizzyParagraphs = document.createElement('p');
            let lizzyTextOne = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Lizzy strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file');
            lizzyDiv.appendChild(lizzyParagraphs);
            lizzyParagraphs.appendChild(lizzyTextOne);
        } else if (j == 2) {
            let lizzyParagraphs = document.createElement('p');
            let lizzyTextTwo = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Lizzy strikes one out, clears it all out, one line of code in the file');
            lizzyDiv.appendChild(lizzyParagraphs);
            lizzyParagraphs.appendChild(lizzyTextTwo);
        } else if (j == 1) {
            let lizzyParagraphs = document.createElement('p');
            let lizzyTextThree = document.createTextNode(j + ' line of code in the file, ' + j + ' line of code; Lizzy strikes one out, clears it all out, no more lines of code in the file');
            lizzyDiv.appendChild(lizzyParagraphs);
            lizzyParagraphs.appendChild(lizzyTextThree);
        }
    }

// Madie

let madieDiv = document.createElement('div');
let madieHeader = document.createElement('h3');
let madieName = document.createTextNode('Madie');
madieDiv.className = 'friend';
document.body.appendChild(madieDiv);
madieDiv.appendChild(madieHeader);
madieHeader.appendChild(madieName);

    for (var j = 99; j >= 1; j--) {
        if (j > 2) {
            let madieParagraphs = document.createElement('p');
            let madieTextOne = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Madie strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file');
            madieDiv.appendChild(madieParagraphs);
            madieParagraphs.appendChild(madieTextOne);
        } else if (j == 2) {
            let madieParagraphs = document.createElement('p');
            let madieTextTwo = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Madie strikes one out, clears it all out, one line of code in the file');
            madieDiv.appendChild(madieParagraphs);
            madieParagraphs.appendChild(madieTextTwo);
        } else if (j == 1) {
            let madieParagraphs = document.createElement('p');
            let madieTextThree = document.createTextNode(j + ' line of code in the file, ' + j + ' line of code; Madie strikes one out, clears it all out, no more lines of code in the file');
            madieDiv.appendChild(madieParagraphs);
            madieParagraphs.appendChild(madieTextThree);
        }
    }

// Lisa

let lisaDiv = document.createElement('div');
let lisaHeader = document.createElement('h3');
let lisaName = document.createTextNode('Lisa');
lisaDiv.className = 'friend';
document.body.appendChild(lisaDiv);
lisaDiv.appendChild(lisaHeader);
lisaHeader.appendChild(lisaName);

    for (var j = 99; j >= 1; j--) {
        if (j > 2) {
            let lisaParagraphs = document.createElement('p');
            let lisaTextOne = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Lisa strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file');
            lisaDiv.appendChild(lisaParagraphs);
            lisaParagraphs.appendChild(lisaTextOne);
        } else if (j == 2) {
            let lisaParagraphs = document.createElement('p');
            let lisaTextTwo = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; Lisa strikes one out, clears it all out, one line of code in the file');
            lisaDiv.appendChild(lisaParagraphs);
            lisaParagraphs.appendChild(lisaTextTwo);
        } else if (j == 1) {
            let lisaParagraphs = document.createElement('p');
            let lisaTextThree = document.createTextNode(j + ' line of code in the file, ' + j + ' line of code; Lisa strikes one out, clears it all out, no more lines of code in the file');
            lisaDiv.appendChild(lisaParagraphs);
            lisaParagraphs.appendChild(lisaTextThree);
        }
    }



})

})
