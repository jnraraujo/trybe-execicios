// exercicio 2

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);
// ----------------------------

// exercicio 3
 
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato');

// console.log(menu);
// ----------------------------

// exercicio 1 FOR

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }


// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let index of names){
//     console.log(index);
// }


// EXERCICIO MESMO AGORA VQV


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
// for (let number of numbers) {
//     console.log(number);
// }
// exercicio 2
let resultados = 0;
for (let index = 0; index < numbers.length; index +=1) {
    resultados += numbers[index];
}

console.log(resultados);

// exercicio 3
 let average = resultados / numbers.length;
console.log(average);
// exercicio 4

if (average > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20');
}
// exercicio 5
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

// exercicio 6
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// exercicio 7