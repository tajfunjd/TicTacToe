let b0 = document.querySelector('#left-top');
let b1 = document.querySelector('#mid-top');
let b2 = document.querySelector('#right-top');
let b3 = document.querySelector('#left-center');
let b4 = document.querySelector('#mid-center');
let b5 = document.querySelector('#right-center');
let b6 = document.querySelector('#left-bot');
let b7 = document.querySelector('#mid-bot');
let b8 = document.querySelector('#right-bot');

let currentMove = 'X';
let remis = 0;

b0.addEventListener('click', () => {
  playGame(b0);
});

b1.addEventListener('click', () => {
  playGame(b1);
});

b2.addEventListener('click', () => {
  playGame(b2);
});

b3.addEventListener('click', () => {
  playGame(b3);
});

b4.addEventListener('click', () => {
  playGame(b4);
});

b5.addEventListener('click', () => {
  playGame(b5);
});

b6.addEventListener('click', () => {
  playGame(b6);
});

b7.addEventListener('click', () => {
  playGame(b7);
});

b8.addEventListener('click', () => {
  playGame(b8);
});

function changeEmpty(place){
  if(place.innerHTML === ''){
    return true;
  } else {
    alert('To miejsce jest już zajęte!!')
    return false;
  }
}

function changeMove(){
  if(currentMove === 'X'){
    currentMove = 'O';
  } else {
    currentMove = 'X';
  }
}

function playGame(place){
  
  setTimeout(() => {
    winRows();
  }, 200);

  if(changeEmpty(place) === true) {
    place.innerHTML = currentMove;
    changeMove();
  }

}

function winRows(){
  if((b0.innerHTML === 'X' && b1.innerHTML === 'X' && b2.innerHTML === 'X') || (b0.innerHTML === 'O' && b1.innerHTML === 'O' && b2.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else if ((b3.innerHTML === 'X' && b4.innerHTML === 'X' && b5.innerHTML === 'X') || (b3.innerHTML === 'O' && b4.innerHTML === 'O' && b5.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else if ((b6.innerHTML === 'X' && b7.innerHTML === 'X' && b8.innerHTML === 'X') || (b6.innerHTML === 'O' && b7.innerHTML === 'O' && b8.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else {
    winCols();
  }
}

function winCols(){
  if((b0.innerHTML === 'X' && b3.innerHTML === 'X' && b6.innerHTML === 'X') || (b0.innerHTML === 'O' && b3.innerHTML === 'O' && b6.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else if ((b1.innerHTML === 'X' && b4.innerHTML === 'X' && b7.innerHTML === 'X') || (b1.innerHTML === 'O' && b4.innerHTML === 'O' && b7.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else if ((b2.innerHTML === 'X' && b5.innerHTML === 'X' && b8.innerHTML === 'X') || (b2.innerHTML === 'O' && b5.innerHTML === 'O' && b8.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else {
    winObliq();
  }
}

function winObliq(){
  if((b0.innerHTML === 'X' && b4.innerHTML === 'X' && b8.innerHTML === 'X') || (b0.innerHTML === 'O' && b4.innerHTML === 'O' && b8.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else if ((b2.innerHTML === 'X' && b4.innerHTML === 'X' && b6.innerHTML === 'X') || (b2.innerHTML === 'O' && b4.innerHTML === 'O' && b6.innerHTML === 'O')){
    alert('Koniec gry!');
    endGame();
  } else {
    remis++;
    draw();
  }
}

function draw(){
  if(remis === 9){
    setTimeout(alert('Remis'), 200);
    endGame();
  }
}

function endGame(){
  b0.innerHTML = '';
  b1.innerHTML = '';
  b2.innerHTML = '';
  b3.innerHTML = '';
  b4.innerHTML = '';
  b5.innerHTML = '';
  b6.innerHTML = '';
  b7.innerHTML = '';
  b8.innerHTML = '';
  currentMove = 'X';
  remis = 0;
}