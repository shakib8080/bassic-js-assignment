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
/* let firs100 = 100;
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
 */




/* let first100 = 100; 
let second100 = 50; 
let third100 = 20;
function tourbudge (man){
  if(man <=100){
    let firstCost = man *first100;
    return firstCost;
  }
  else if(man <=200){
    let firstCost = 100 *first100;
    let distance = man -100;
    let secondCost = distance *second100;
    let total = firstCost+secondCost;
    return total;
  }
  else if(man <=300){
    let firstCost = 100 * first100;
    let secondCost = 100 * second100;
    let thirdCost = (man - 200) *third100;
    let intotall = firstCost + secondCost +thirdCost;
    return intotall;
  }
}
console.log(tourbudge(201)); */


// function totalAnimals (mile){
//   let first10 = 10;
//   let second20 = 20;
//   let third30 = 30;
//   if(mile <=10){
//     let firstCount = mile *first10;
//     return firstCount;
//   }
//   else if(mile <=20){
//     let firstCount = 10 * first10;
//     let firstdic = mile - 10 ;
//     let secondCound = firstdic *mile;
//     let totall = firstCount + secondCound ;
//     return totall ;
//   }
//   else if(mile <=30){
//     let firstCount = 10 * first10 ;
//     let secondCound = 10 * second20 ;
//     let secdic = mile - 20;
//     let thirdCound = secdic *third30;
//     let intotall = firstCount +secondCound +thirdCound;
//     return intotall;
//   }

// }
// console.log(totalAnimals(21));

/* function getoddname(name) {

  for (let i = 0; i < name.length; i++) {
    if (name[i].length % 2 == 0) {
      return name[i]
    }
  }
  return "not found"

}
 */



function getEvenName(name) {
let evenFriend = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i].length % 2 !== 0) {
      evenFriend.push(name[i])
    } 
  }
  return evenFriend;

}



let names = ['shaki', 'rakiba', 'habib', 'mujammel'];
console.log(getEvenName(names))