const playerFirstTitle = document.querySelector("#playerFirstTitle");
const playerFirstScore = document.querySelector("#playerFirstScore");
const playerFirstPokemon = document.querySelector("#playerFirstPokemon");

const playerSecondTitle = document.querySelector("#playerSecondTitle");
const playerSecondScore = document.querySelector("#playerSecondScore");
const playerSecondPokemon = document.querySelector("#playerSecondPokemon");

 const btnstart=document.querySelector("#btnstart")
const informationtext=document.querySelector("#informationtext")

// let firstlose=document.querySelector("#firstlose")
// let firstwin=document.querySelector("#firstwin")

const pokemons = ["e", "w", "f"];

let player1Score = 0;
let player2Score = 0;

// let dubbleKey = "ctrl p"
let isRemoteControl = false;
window.onkeydown = startGame;

btnstart.addEventListener("click",function(){
  informationtext.setAttribute("class","display-block bg-white")  



  
})









// console.log(randomElement);

function isWin(isPlayer1Win) {
  playerFirstTitle.innerHTML = isPlayer1Win ? "WIN" : "LOSE";
  playerSecondTitle.innerHTML = !isPlayer1Win ? "WIN" : "LOSE";

  playerFirstTitle.classList.remove(
    `${isPlayer1Win ? "text-danger" : "text-success"}`
  );

  playerFirstTitle.classList.add(`${isPlayer1Win ? "text-success" : "text-danger"}`);

  //second
  playerSecondTitle.classList.add(
    `${!isPlayer1Win ? "text-success" : "text-danger"}`
  );

  playerSecondTitle.classList.remove(
    `${!isPlayer1Win ? "text-danger" : "text-success"}`
  );
}

function isdraw(isdraw){
  playerFirstTitle.innerHTML = isdraw ? "OOOPS!" : "OOOPS!";
  playerSecondTitle.innerHTML = isdraw ? "OOOPS" : "OOOPS";
  playerFirstTitle.classList.remove(
    `${isdraw? "text-danger" : "text-success"}`
  );

  playerFirstTitle.classList.add(`${isdraw ? "text-primary" : "text-primary"}`);

  //second
  playerSecondTitle.classList.remove(
    `${ isdraw? "text-danger" : "text-success"}`
  );

  playerSecondTitle.classList.add(
    `${isdraw ? "text-primary" : "text-primary"}`
  );

  
}









function showPokemon(item1,item2) {
  playerFirstScore.innerText = `Score: ${player1Score}`;
  playerSecondScore.innerText = `Score: ${player2Score}`;

  playerFirstPokemon.src = `./images/${item1}.jpg`;
  playerSecondPokemon.src = `./images/${item2}.jpg`;
}

function startGame(e) {


  if (isRemoteControl) return;

  const firstPlayerChoose = e.key;

  // dubbleKey += firstPlayerChoose + " "

  if (!pokemons.includes(firstPlayerChoose)) {
    alert("Please press correct key: 'e,w,f'");
    return;
  }

  const compPlayerChoose = randomElement(pokemons);

  console.log("firstPlayerChoose", firstPlayerChoose);
  console.log("compPlayerChoose", compPlayerChoose);

  if (
    (firstPlayerChoose === "e" && compPlayerChoose === "w") ||
    (firstPlayerChoose === "w" && compPlayerChoose === "f") ||
    (firstPlayerChoose === "f" && compPlayerChoose === "e") 
  ) {
    console.log("You WIN");
    console.log("COMP Lose");

    player1Score += 1;

    isWin(true);
    // var img1Src=firstlose.getAttribute("src")
    // firstlose.setAttribute("./images/first-player.webp")
    showPokemon(firstPlayerChoose, compPlayerChoose);
  } else if (
    (firstPlayerChoose === "e" && compPlayerChoose === "e") ||
    (firstPlayerChoose === "w" && compPlayerChoose === "w") ||
    (firstPlayerChoose === "f" && compPlayerChoose === "f")
  ) {
    console.log("You DRAW");
isdraw()
    showPokemon(firstPlayerChoose, compPlayerChoose);
  } else {
    console.log("You Lose");
    console.log("COMP WIN");
    player2Score += 1;
    isWin();
    // var imgSrc=firstwin.getAttribute("src")

// firstwin.setAttribute("class","display- none")
//     firstlose.setAttribute("class","display- block")
    // firstwin.setAttribute("src","./images/compyuter-player (1).webp")
    // firstlose.style.display="block " 
    showPokemon(firstPlayerChoose, compPlayerChoose);
  }

  // console.log("player1Score", player1Score);
  // console.log("player2Score", player2Score);
}


// window.navigator.getBattery().then((data) => {
//   console.log(data);
// });
