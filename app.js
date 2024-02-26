let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["rock", "paper", "scissor"];
    const randVal=Math.floor(Math.random()* 3);

    return options[randVal];
}

const gameDraw=()=>{
    msg.innerText="Game Draw .Play Again";
    msg.style.backgroundColor="#160029";
    msg.style.color="#d2a2fe";
}

const showWinner=(userWin ,userChoice,compChoice)=>{

    if(userWin){
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#259654";
        msg.style.color="f0ffff";
    }
    else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#ad220c";
        msg.style.color="f0ffff";
    }
}


const playGame =(userChoice)=>{
    // Generate Comp choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        //Draw 
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissor, paper

            userWin= compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //rock, scissor

            userWin=compChoice==="scissor" ? false:true;
        }
        else{
            // rock, paper
            userWin=compChoice==="rock" ? false:true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    
        playGame(userChoice);
    });
});