let boxes= document.querySelectorAll(".box");
//let resetbtn= document.querySelector("#resetgame");
let newgame= document.querySelector("#newbtn");
let msgcontainer= document.querySelector(".msg");
let msg=document.querySelector("#messages");
let turnO=true;//playerX, playerO
const winPattrn =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
  
boxes.forEach( (box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){//playerO
        box.innerText="O";
        turnO = false;
    }else{//playerX
    box.innerText="X";
    turnO= true;
   }
   box.disabled = true;
   checkWinner();
    });
});
const showWinner = (winner) => {
    messages.innerHtml =`Congo,winner is ${winner}`;
    messages.remove("hide");
    disableboxes();
};
const checkWinner = () =>{
    for(let pattern of winPattrn){
        let pos1Value= boxes[pattern[0]].innerText;
        let pos2Value= boxes[pattern[1]].innerText;
        let pos3Value= boxes[pattern[2]].innerText;
        if(pos1Value!="" && pos2Value != "" && pos3Value !=""){
            if(pos1Value===pos2Value && pos2Value===pos3Value){
                console.log("winner",pos1Value);
              showWinner(pos1Value);
            }
        }

    }
}
const reset=()=>{
    turnO=true;
    enableboxes();
    
} 
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}
newbtn.addEventListener("click",reset);
