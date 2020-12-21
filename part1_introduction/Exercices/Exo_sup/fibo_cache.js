// On peut ajouter un tableau à la fonction fibo_v1, c'est un objet ...
function fibo_v1(n) {
  if (!fibo_v1.cache[n]) {
    fibo_v1.cache[n] =
      n === 2 || n === 1 || n === 0 ? 1 : fibo_v1(n - 1) + fibo_v1(n - 2);
  }

  return fibo_v1.cache[n];
}

fibo_v1.cache = [];

console.log(fibo_v1(10));
console.log(fibo_v1(12));

console.log('spread avec fibo_v1', [ ...fibo_v1.cache]);

// Mais on peut également considérer la fonction comme un tableau ...
function fibo(n) {
  if (!fibo[n]) {
    // console.log('calcul', n);
    fibo[n] = n === 2 || n === 1 || n === 0 ? 1 : fibo(n - 1) + fibo(n - 2);
  }

  return fibo[n];
}

const fib10 = fibo(10);
console.log(fib10);
const fib12 = fibo(12);
console.log(fib12);

for (let index = 0; index <= 12; index++) {
  const element = fibo[index];
  console.log(element);
}

// On peut implémenter un itérator à la fonciton pour utilisez le spread operator ou for ...of 

/*
Le symbole Symbol.iterator définit l'itérateur 
par défaut d'un objet. C'est l'itérateur qui sera utilisé par for...of.

*/
fibo[Symbol.iterator] = function* () {
    let i = 1;
    while (i <= Object.keys(fibo).length) {
        yield fibo[i++];
    }
};
console.log('spread avec fibo', [ ...fibo]);
