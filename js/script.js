

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