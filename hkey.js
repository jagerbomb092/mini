const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector(".btn-play");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });


    };
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });

        const computerOptions = ['đấm','lá','kéo'];
        
        options.forEach(option =>{
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice= computerOptions[computerNumber];
                
                setTimeout(()=>{
                    compareHand(this.textContent,computerChoice);
                
                    playerHand.src= `./assets/${this.textContent}.png`;
                    computerHand.src=`./assets/${computerChoice}.png`;
                },2000)
                
                playerHand.style.animation= "shakePlayer 2s ease";
                computerHand.style.animation= "shakeComputer 2s ease";
            });
        });
    }
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHand = (playerChoice,computerChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent='Hòa!';
            return;
        }
        if(playerChoice === 'đấm'){
            if(computerChoice === 'kéo'){
                winner.textContent='Người chơi thắng!'
                pScore++;
                updateScore();
                return;
                
            }
            else{
                winner.textContent='Máy tính thắng!'
                cScore++;
                updateScore();
                return;
                
            }
        }
        if(playerChoice === 'lá'){
            if(computerChoice === 'kéo'){
                winner.textContent='Máy tính thắng!'
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Người chơi thắng!'
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'kéo'){
            if(computerChoice === 'đấm'){
                winner.textContent='Máy tính thắng!'
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Người chơi thắng!'
                pScore++;
                updateScore();
                return;
            }
        }
    }
    
    startGame();
    playMatch();
};
game();