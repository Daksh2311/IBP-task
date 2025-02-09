let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




let turnO = true;  //playerX,playerO
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= ""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner is player ", pos1Val);
                showWinner([pos1Val]);
            }
        }
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){ //playerO turn
            box.innerText = "O";
            turnO = false;
        }else{ //playerX turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

newGameBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);

