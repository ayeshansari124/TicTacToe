let board=document.getElementById("board");
let message=document.getElementById("message");

let cells=[];
let currentPlayer="X";
let gameOver=false;

function createBoard(){
    board.innerHTML='';
    cells=[];
    gameOver=false;
    message.textContent="Player X's turn";

    for(let i=0;i<9;i++){
        let cell=document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click",()=>handleMove(i));
        board.appendChild(cell);
        cells.push(cell);
    }
}

function handleMove(index){
    if(cells[index].textContent || gameOver) return;
    cells[index].textContent=currentPlayer;

    if(checkwinner()){
        message.textContent=`Player ${currentPlayer} wins`;
        gameOver=true;
        disableBoard();
    }else if(cells.every(cell=>cell.textContent)){
        message.textContent=`This Game was a Draw`;
        gameOver=true;
        disableBoard();
    }else{
        currentPlayer=currentPlayer==="X"?"O":"X";
        message.textContent=`Player ${currentPlayer}'s turn`;
    }
};
function disableBoard(){
    cells.forEach(cell=>{
        cell.classList.add("disabled");
    })
}

function checkwinner(){
    const combos=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    return combos.some(combo=>{
        const [a,b,c]=combo;
        return(cells[a].textContent&&
            cells[a].textContent===cells[b].textContent &&
            cells[a].textContent===cells[c].textContent)
    });
}

function resetGame(){
    currentPlayer="X";
    createBoard();
}

createBoard();