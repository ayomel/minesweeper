let square = document.getElementsByClassName('square');
for(var i = 0; i < square.length; i++) {
    var element = square[i];
    element.setAttribute('id', 'square'+i); 
}
for (var index = 0; index < square.length; index++) {
    var number = Math.floor(Math.random() * 3) + 1;  
    var element = square[index];
    if (number === 3) {
        element.innerHTML = "<img src='minesweeper.png' />";
        element.classList.add("bomb");
    }
    let surroundCells = surroundingBlocks(element);
    if (number !== 3) {
        let counter = 0;
        surroundCells.forEach((cell) => {
            let surroundCellElement;
            surroundCellElement = document.getElementById(cell);
                if (surroundCellElement) {
                    console.dir(surroundCellElement);
                }
        });
    }
}

function surroundingBlocks(element) {
    let surroundingBlocks = [];
    let diagonalRightTop;
    let diagonalLeftTop;
    let diagonalLeftBottom;
    let diagonalRightBottom;
    let id = element.id.match(/[0-9]+/g)[0].split('-').join('');
    id = parseInt(id, 10);
    // if(!id % 8 === 0) {
        diagonalLeftTop = "square"+(id - 9);
    // }
    let left = "square"+(id - 8);
    if (!id % 7 === 0) {
        diagonalLeftBottom = "square"+(id - 7);
    }
    let top = "square"+(id - 1);
    let bottom = "square"+(id + 1);
    if (!id % 8 === 0) {
        diagonalRightTop = "square"+(id + 7);
    }
    let right = "square"+(id + 8);
    // if (!id % 7 === 0) {
        diagonalRightBottom = "square"+(id + 9);
    // }
    surroundingBlocks.push(diagonalLeftTop, left, diagonalLeftBottom, top, bottom, diagonalRightTop, right, diagonalRightBottom);
    return surroundingBlocks;
}

$('.bomb').on('click', function(e) {
    console.log(e.currentTarget);
});