let boxes=document.querySelectorAll(".box");
let reset_button=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let turnO =true;
let count=0;
let match=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
    box.innerText="X";
    turnO=false;}
    else{
        box.innerText='O';
        turnO=true;}
        box.disabled=true;
        count=count+1;
    checkWinner();}); }
)
const checktie=()=>{
    if(count==9 && match==0){
        msg.innerText="No winner";
        msgContainer.classList.remove("hide");
    }
}
const resetGame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
count=0

}
const showWinner=(winner)=>{
    msg.innerText=`Congralutions,Winner is ${winner}`;
    msgContainer.classList.remove("hide");

}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner=()=>{
    for(pattern of winPatterns){
       let v1= boxes[pattern[0]].innerText;
       let v2= boxes[pattern[1]].innerText;
        let v3=boxes[pattern[2]].innerText;
        if(v1!="" && v2!="" && v3!=""){
            if(v1==v2 && v2==v3){
                disableBoxes();
                showWinner(v1);
                match=1;
            }
        }
        checktie(count,match);
    }
}


newGameBtn.addEventListener("click",()=>resetGame());
reset_button.addEventListener("click",()=>resetGame());


