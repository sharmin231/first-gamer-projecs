const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const submit = document.querySelector("#submit")
const resetB = document.querySelector("#reset")
const winningPlayer = document.querySelector("#winner")
const wScore = document.querySelector("#score")
const input = document.querySelector("#input")
const player1 = document.querySelector("#payer1")
const player2 = document.querySelector("#payer2")

// let score = 0;
let winningScore = 5;
let p1Elm = 0;
let p2Elm = 0;
let gameOver = false;
let p1Turn = true;
let p2Turn = false;


// function updateScore() {
//     return score++}

function initialPlayerStart() {
    p1Turn = false;
    p2Turn = false;
    const players = ["player1", "player2"]
    const randomIndex = Math.floor(Math.random() * players.length);
    const player = players[randomIndex];
    if (player === players[0]) {
        p1Turn = true
    } else {
        p2Turn = true
    }
    if (!p1Turn) {
        btn1.setAttribute("disabled", "disabled")
        btn2.removeAttribute("disabled")
    } else if(!p2Turn){
        btn2.setAttribute("disabled", "disabled")
        btn1.removeAttribute("disabled")
    }
}
// initialPlayerStart()

function disabledButton() {
    if (p1Elm === winningScore || p2Elm === winningScore) {
        // gameOver = true;

        btn1.setAttribute("disabled", "disabled")
        btn2.setAttribute("disabled", "disabled")
    }
}
// function disable() {
//     btn1.setAttribute("disabled", "disabled")
//     btn2.setAttribute("disabled", "disabled")
    
// }

function identifyWinner() {
    if (p1Elm === winningScore) {
        winningPlayer.textContent="player- 1 is winner !!"
    } else if (p2Elm === winningScore) {
        winningPlayer.textContent="player- 2 is winner !!"
    }
}

function reset() {
    winningScore = 5;
    p1Elm = 0;
    p2Elm = 0;
    p2Turn = false;
    p1Turn = true;
    
    // gameOver = false;
    btn1.removeAttribute("disabled")
    btn2.removeAttribute("disabled")
    player1.textContent = p1Elm;
    player2.textContent = p2Elm;
    winningPlayer.textContent = '';
    wScore.textContent = winningScore;
    input.value = "";
}

wScore.textContent = winningScore;
btn1.addEventListener("click", (e) => {
    if (p1Turn) {
        p1Elm++
    player1.textContent = p1Elm;
    identifyWinner()
   
        p1Turn = false
        p2Turn = true
        btn1.setAttribute("disabled", "disabled")
        btn2.removeAttribute("disabled")
    }
    // if (gameOver) {
    //     disable()
    //     }
    disabledButton()
})

btn2.addEventListener("click", (e) => {
    if (p2Turn) {
        p2Elm++
    player2.textContent = p2Elm;
    identifyWinner()
        p2Turn = false
        p1Turn = true
        btn2.setAttribute("disabled", "disabled")
        btn1.removeAttribute("disabled")
    }
    // if (gameOver) {
    //     disable()
    //     }
    disabledButton()

})


submit.addEventListener("click", (e) => {
    e.preventDefault()
    
    const inputValue = +input.value;
    if (inputValue == "" || Number(inputValue) !== Number(inputValue) ||inputValue <= 0) {
        console.log("invalid number")
        alert("please enter a valid number")
        // winningScore = 5
        // wScore.textContent = winningScore
        reset() 
        return
    }
    reset() 
    initialPlayerStart()
    winningScore = inputValue;
    wScore.textContent = winningScore;
})
resetB.addEventListener("click",(e)=> {
    reset()
})
// initialPlayerStart()