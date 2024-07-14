// 1 problem
// anaToVori
// 16 ana = 1 vori
/* function anaToVori(Ana) {
  let Vori = Ana / 16;
  return Vori;
}
let Anas = 64;
console.log(anaToVori(Anas)); */

// 2 problem
// pandaCost
/* let singgaraPrice = 7;
let chomucaPrice = 10;
let jilapiprice = 15;
function pandaCost(singgaraQuantity, chomucaQuantity, jilapQuantity) {
  let allSinggaraPrice = singgaraPrice * singgaraQuantity;
  let allChomucaPrice = chomucaPrice * chomucaQuantity;
  let allJilapiPrice = jilapiprice * jilapQuantity;
  let totallCost = allSinggaraPrice + allChomucaPrice + allJilapiPrice;
  return totallCost;
}
console.log(pandaCost(2, 2, 2)); */

// 3 PROBLEM
let firs100 = 100;
let second200 = 50;
let third300 = 20;

function picncbudget(person) {
  if (person <= 100) {
    let first = person * firs100;
    return first;
  } else if (person <= 200) {
    let first = 100 * firs100;
    let findPerson = person - 100;
    let second = findPerson * second200;
    let total = second + first;
    return total;
  } else {
    let first = 100 * firs100;
    let second = 100 * second200;
    let third = (person - 200) * third300;
    let total = first + second + third;
    return total;
  }
}

console.log(picncbudget(300));
