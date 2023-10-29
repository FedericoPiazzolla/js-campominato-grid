const btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", play);
console.log(btnPlay);

// funzione al play del button
function play() {
  // aggiungo class grid 
  const elemGrid = document.querySelector(".wrapper > div");
  elemGrid.classList.add("grid");
  console.log(elemGrid);

}

// Creiamo la funzione che mi dia come risultato un array che va da 1 fino a 100, 81, 49
function numArray(num) {
  const numbers = [];

  let i = 1;
  while (numbers.length < num) {
    numbers.push(i);
    i++;
  };
  return numbers;
};
console.log(numArray(100));