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


  if(valInput === 'Easy'){
    newArray = numArray(100);
  } else if (valInput === 'Medium') {
    newArray = numArray(81);
  } else if (valInput === 'Hard') {
    newArray = numArray(49)
  };

  // creo la griglia
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  // creo il ciclo for per l'array
  for (let i = 0; i < newArray.length; i++) {
    const arrayI = newArray[i];
    const div = document.createElement("div");
    div.innerHTML = `<span>${arrayI}</span>`;
    div.classList.add('cell');
    grid.append(div);

    console.log(div);

    if(valInput === 'Easy'){
      div.classList.add('easy');

    } else if (valInput === 'Medium') {
      div.classList.add('medium');

    } else if (valInput === 'Hard') {
      div.classList.add('hard');

    };

    // al click di ogni casella si colora di blue
    div.addEventListener("click", function () {
      this.classList.add("blue");
      console.log(this);
    });

    grid.append(div);

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