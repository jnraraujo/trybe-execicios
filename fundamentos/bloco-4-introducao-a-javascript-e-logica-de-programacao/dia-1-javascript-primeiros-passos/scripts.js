const a = 10;
const b = 5;
const c = 15;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
  console.log("A é maior que b")
} else if (b > a) {
  console.log("B é maior que a")
} else {
  console.log("Valor não aplicado")
}

if (a > b && a > c) {
  console.log("A é maior que b e c")
} else if (b > a && b > c) {
  console.log("B é maior que 'a' e 'c'")
} else if (c > a && c > b) {
  console.log("C é maior que 'a' e 'c'")
} else {
  console.log("valor não aplicado")
}

const num1 = 0;

if (num1 > 0) {
  console.log("positive")
} else if (num1 < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

const anguloA = "90";
const anguloB = 45;
const anguloC = 45;

if (anguloA + anguloB + anguloC === 180) {
  console.log(true);
} else if (anguloA + anguloB + anguloC < 180 && anguloA + anguloB + anguloC > 180) {
  console.log(false)
} else {
  console.log("Error 404")
}

const chessPiece = 'cavalo';
switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log(' Rei -> uma casa apenas para qualquer direção');
    break;
  case 'bispo':
    console.log('Bispo -> anda em diagonais');
    break;
  case 'cavalo':
    console.log('Cavalo -> anda em L')
    break;
  case 'torre':
    console.log('Torre -> anda em horizontais e verticais');
    break;
  case 'rainha':
    console.log('Rainha -> anda em diagonais e horizontais e verticais');
    break;
  case 'peao':
    console.log('Peão -> apenas uma casa pra frente ou duas casas pra frente se for o primeiro passo')
  default:
    console.log('Error 404');
    break;
}

// 7

const nota = 103;

if (nota >= 90 && nota == 100) {
  console.log('A');
} else if (nota >= 80 && nota < 90) {
  console.log('B');
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log('D');
} else if (nota >= 50 && nota < 60) {
  console.log('E');
} else if (nota < 50 && nota >= 0) {
  console.log('F')
} else {
  console.log('Error 404')
}

// 8

const numeroA = 10;
const numeroB = 15;
const numeroC = 19;

if ((numeroA % 2) === 0  || (numeroB % 2) === 0 || (numeroC % 2) === 0) {
  console.log(true)
} else {
  console.log(false)
}

// 9
let valorCusto = -10;
let impostoSobreOCusto= valorCusto * 1.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let valorDeVenda = 20;
let lucro = valorDeVenda - valorCustoTotal;

if (valorCusto < 0 || valorDeVenda < 0 || lucro < 0) {
  console.log('Error 404');
} else {
  console.log(lucro * 1000);
}

// 10

let aliquotINSS;
let aliquotIR;

let grossSalary = 3000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
}

console.log('salario liquido: ' + (baseSalary - aliquotIR));