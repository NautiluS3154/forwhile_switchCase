
for (let i = 1; i <= 50; i++) {
    console.log(i);
  }
  

  let number = 1;
  while (number <= 50) {
    console.log(number);
    number++;
  }
  
// -----------------------------------------------------------------


  let start = parseInt(prompt('Введите начало промежутка:'));
  let end = parseInt(prompt('Введите конец промежутка:'));
  

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log(i);
    }
  }
  

  let number = start;
  while (number <= end) {
    if (number % 2 === 0 && number % 3 === 0) {
      console.log(number);
    }
    number++;
  }
// ***************************************************************
let sum = 0;


for (let i = 1; i <= 100; i++) {
  sum += i;
}


let number = 1;
while (number <= 100) {
  sum += number;
  number++;
}

console.log(sum); 
