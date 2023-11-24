let rows = 4;
let columns = 4;

let turns = 0;

let currPiece;
let otherPiece;


window.onload = function(){
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            let pieceImg = document.createElement("img");
            pieceImg.src = "img/puzzles/blank.png";
            pieceImg.addEventListener("dragstart", onDragStart);
            pieceImg.addEventListener("dragover", onDragOver);
            pieceImg.addEventListener("dragenter", onDragEnter);
            pieceImg.addEventListener("drop", onDrop);
            pieceImg.addEventListener("dragend", onDragEnd);
            document.querySelector("#board").append(pieceImg);
        }
    }

    let pieces = [];

    while(pieces.length<16){
        const piece = Math.floor(Math.random() * 16) + 1; 
        if(pieces.indexOf(piece)===-1) pieces.push(piece);
    }



    for(let i=0;i<pieces.length;i++){
        let pieceImg = document.createElement("img");
        pieceImg.src = "/img/puzzles/puzzle1/pieces/"+pieces[i]+".png";
        

        pieceImg.addEventListener("dragstart", onDragStart);
        pieceImg.addEventListener("dragover", onDragOver);
        pieceImg.addEventListener("dragenter", onDragEnter);
        pieceImg.addEventListener("drop", onDrop);
        pieceImg.addEventListener("dragend", onDragEnd);

        document.querySelector("#pieces").append(pieceImg);

    }
}

function onDragStart(){
    currPiece = this;
}

function onDragOver(e){
    e.preventDefault();
}

function onDragEnter(e){
    e.preventDefault();
}



function onDrop(){
    otherPiece = this;
}

function onDragEnd(){
    let img1 = otherPiece.src;
    let img2 = currPiece.src;
    currPiece.src = img1;
    otherPiece.src = img2;
    
    turns++;
    document.querySelector("#turns").innerText = turns;

    if(isPuzzleSolved()){
        alert("You win!");
        location.reload();
    }
    

}

function isPuzzleSolved() {
    let boardPieces = document.querySelector("#board").querySelectorAll("img");
    let pieceOrder = [];
    for(let i=0;i<16;i++){
        pieceOrder.push(0);
    }

    boardPieces.forEach((piece) => {
        let src = piece.src;
        if (src) {
            let filename = src.split("/").pop();
            let pieceNumber = parseInt(filename.replace(".png", ""), 10);
            pieceOrder[pieceNumber-1] = pieceNumber;
        }
    });

    for (let i = 0; i < pieceOrder.length - 1; i++) {
        if (pieceOrder[i] > pieceOrder[i + 1]) {
            return false;
        }
    }

    return true;
}

