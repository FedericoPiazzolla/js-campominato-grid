const btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", play);

// funzione al play del button
function play() {
  // aggiungo class grid 
  const elemGrid = document.querySelector(".wrapper > div");
  elemGrid.classList.add("grid");

  // seleziono i valori dell'input choice
  let level = document.getElementById("choose-level").value;

  // scegliamo il tipo di difficoltà, e poi passiamo al ciclo for
  let girdSize = "";

  if(level === 'Easy'){
    girdSize = numArray(100);
  } else if (level === 'Medium') {
    girdSize = numArray(81);
  } else if (level === 'Hard') {
    girdSize = numArray(49)
  };

  // creo la griglia
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  // creo il ciclo for per l'array
  for (let i = 0; i < girdSize.length; i++) {
    const arrayI = girdSize[i];
    const div = document.createElement("div");
    div.innerHTML = `<span>${arrayI}</span>`;
    div.classList.add('cell');

    if(level === 'Easy'){
      div.classList.add('easy');

    } else if (level === 'Medium') {
      div.classList.add('medium');
      
    } else if (level === 'Hard') {
      div.classList.add('hard');
    };

    // al click di ogni casella si colora di blue
    div.addEventListener("click", function () {
      this.classList.add("blue");
      const clickNumber = this.textContent;
      console.log(clickNumber);
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