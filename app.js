let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let Tie=document.querySelector(".tiemsg");
let msg = document.querySelector("#msg");
let turnO =true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [2,4,6],
    [2,5,8],
    [6,7,8]
];
const resetgame = () =>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    Tie.classList.add("tie");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box clicked");
         if(turnO){
            box.innerText="O";
            turnO=false;
         }else{
            box.innerText="X";
            turnO=true;
         }
         box.disabled=true;
         checkWinner();
    });
});
const showwinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showtie=()=>{
    Tie.classList.remove("tie");
    disableboxes();
}
const checkWinner = () =>{
    let winnerfound=false;
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!=="" && p2!=="" && p3!==""){
            if(p1===p2 && p2===p3){
                // console.log(`winner ${p1}`);
                winnerfound=true;
                showwinner(p1);
                return;
            }
        }
    }
    let allfilled=Array.from(boxes).every(box=>box.innerText!="");
    if(!winnerfound && allfilled){
        showtie();
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
