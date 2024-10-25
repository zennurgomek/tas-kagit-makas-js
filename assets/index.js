
let playerScore = 0;
let computerScore = 0;

const choices = ['Taş', 'Kağıt', 'Makas'];

document.getElementById('stone').addEventListener('click', () => playGame('Taş'));
document.getElementById('paper').addEventListener('click', () => playGame('Kağıt'));
document.getElementById('scissors').addEventListener('click', () => playGame('Makas'));

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  updateChoices(playerChoice, computerChoice);
  const result = scoreWinner(playerChoice, computerChoice);
  updateScore(result);
}

function getComputerChoice() {
 const randomOption = Math.floor(Math.random() * 3);
 return choices[randomOption];
}

function updateChoices(playerChoice, computerChoice) {
  document.getElementById('player-score').textContent = playerChoice;
  document.getElementById('computer-score').textContent = computerChoice;
  document.getElementById('computer').innerHTML = `<h4>${computerChoice}</h4>`;
}

function scoreWinner(player, computer) {
  if (player === computer) {
   return 'Berabere';
  } else if (
  (player === 'Taş' && computer === 'Makas') ||
  (player === 'Kağıt' && computer === 'Taş') ||
  (player === 'Makas' && computer === 'Kağıt')
   ) {
    return 'Oyuncu';
  } else {
   return 'Bilgisayar';
  }
}

function updateScore(result) {
   if (result === 'Oyuncu') {
    playerScore++;
  } else if (result === 'Bilgisayar') {
      computerScore++;
    }

   document.getElementById('player-score').textContent = playerScore;
   document.getElementById('computer-score').textContent = computerScore;

  if (result === 'Oyuncu') {
        document.getElementById('result').textContent = 'Kazanan: Oyuncu!';
    } else if (result === 'Bilgisayar') {
        document.getElementById('result').textContent = 'Kazanan: Bilgisayar!';
  } else {
        document.getElementById('result').textContent = 'Sonuç: Berabere!';
  }
}

document.getElementById('reset').addEventListener('click', resetGame);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = '';

}






//-------------------- // hocam yorum satırındakilerin hepsi deneme yanılma kalsın istedim //






// //  document.addEventListener('DOMContentLoaded', function() {



// //     const stone = document.getElementById('stone');
// //    stone.addEventListener('click', function() {
// //        console.log('taş');
// //        getRandomOption()
// //    });

// //  const paper = document.getElementById('paper');
// //    paper.addEventListener('click', function() {
// //      console.log('kağıt');
// //      getRandomOption()
// //    })

// //  const scissors = document.getElementById('scissors');
// //    scissors.addEventListener('click', function() {
// //      console.log('makas');
// //      getRandomOption()
// //    })

  
 

// //   const computerChoice = document.getElementById("computer");
// //     const options = ['taş', 'kağıt', 'makas'];
 
// //    function getRandomOption(){
// //       const randomOption = Math.floor(Math.random()*3);
// //       document.getElementById('computer-section').textContent = `Bilgisayar: ${randomOption}`;
// //    }

// //    function updateChoices(playerChoice, computerChoice) {
// //     document.getElementById('player-section').textContent = `Oyuncu: ${playerChoice}`;
// //     document.getElementById('computer-section').textContent = `Bilgisayar: ${computerChoice}`;
// //   }
// //   updateChoices();
// //  });






// // // // // // // const computerChoice = ["taş","kağıt","makas"];

// // // // // // // let pcSkor = 0;
// // // // // // // let playerSkor = 0;

// // // // // // // function getRandomOption() {    
// // // // // // //   const computer = computerChoice[Math.floor(Math.random()) *computerChoice.length];
// // // // // // // }



// // tanimlama islemlerim //


//  //oyuncu secimlerini tanimladim
//  const stone = document.getElementById('stone');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');

// //bilgisayar secimlerini tanimladim
//  const computerSecim = document.getElementById("computer");

// //player ve computerin skorlarini tanımladım
//  const playerScore = document.getElementById("player-score")[0];
//  const computerScore = document.getElementById("computer-score")[0];


// //kazanan oyuncu ve skorları sıfırla kısmını tanımladim
//  const result = document.getElementById("result");
//  const reset = document.getElementById("reset");



//  // dinamiklestirme //

//  let player = 0;
//  let computer = 0;

//  function computerChoice() {
//     const choice = ["taş","kağıt","makas"];
//    const randomOption = Math.floor(Math.random()*3);
//     computerSecim.textContent = `Bilgisayar: ${computerChoice}`;
//  }
//  computerChoice();