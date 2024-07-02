let btns=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msgcontainer=document.querySelector(".msgcontainer");
let msg =document.querySelector(".msg")

let gameover = false;
const win=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

let turno=true;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        //console.log("clicked");
      
        if(turno){
            btn.innerText="O";
            turno=false;

        }else{
            btn.innerText="X";
            turno=true;
        }
        btn.disabled=true;

        winner();
    });
});

const winner=()=>{

    for(let pattern of win){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(btns[pattern[0]].innerText,btns[pattern[1]].innerText,btns[pattern[2]].innerText);

        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;

        if (pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("win",pos1);
                
                showwinner(pos1);
                gameover=true;
             

            }
        }
   }
   checkdraw();
};

const showwinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
};

const disablebtn=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }

};
const enablebtn=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }

};
const resetgame =()=>{
turno=true;
gameover = false;
enablebtn();
msgcontainer.classList.add("hide");



};

const checkdraw = () => {
    let alldisabled = true;
    btns.forEach((btn) => {
        if (btn.innerText === "") {
            alldisabled = false;
        }
    });
    if (!gameover && alldisabled) {
        showdraw();
    }
};


const showdraw = () => {
    msg.innerText = `It's a Draw!`;
    msgcontainer.classList.remove("hide");
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);