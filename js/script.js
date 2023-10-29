const btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", play);
console.log(btnPlay);

// funzione al play del button
function play() {
  // aggiungo class grid 
  const elemGrid = document.querySelector(".wrapper > div");
  elemGrid.classList.add("grid");
  console.log(elemGrid);

  // seleziono i valori dell'input choice
  let valInput = document.querySelector("select").value;
  console.log(valInput);

  // scegliamo il tipo di difficoltà, e poi passiamo al ciclo for
  let newArray = "";

  if(valInput === "facile"){
    newArray = gridGame(100);
  } else if (valInput === "avanzato") {
      newArray = gridGame(81);
  } else if (valInput === "difficile") {
      newArray = gridGame(49)
  };

};

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