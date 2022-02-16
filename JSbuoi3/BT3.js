// Bài 1 :afterNYears

function afterNYears(obj, n) {
  let resultObj = {};
  for (const key in obj) {
    resultObj[key] = obj[key] + n;
  }
  return resultObj;
}
const myFamily = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};
console.log(afterNYears(myFamily, 1));

// Bài 2 freeShipping
function freeShipping(order) {
  let total = 0;
  for (const key in order) {
    total += order[key];
  }
  if (total < 50) {
    return false;
  } else {
    return true;
  }
}
const order = { Shampoo: 5.99, "Rubber Ducks": 15.99 };
const order1 = { "Flatscreen TV": 399.9 };
console.log(freeShipping(order));
console.log(freeShipping(order1));

// Bài 3 nameScore

function nameScore(name) {
  const scores = {
    A: 100,
    B: 14,
    C: 9,
    D: 28,
    E: 145,
    F: 12,
    G: 3,
    H: 10,
    I: 200,
    J: 100,
    K: 114,
    L: 100,
    M: 25,
    N: 450,
    O: 80,
    P: 2,
    Q: 12,
    R: 400,
    S: 113,
    T: 405,
    U: 11,
    V: 10,
    W: 10,
    X: 3,
    Y: 210,
    Z: 23,
  };
  let totalScore = 0;
  name = name.toUpperCase();
  for (let i = 0; i < name.length; i++) {
    let tempScore = scores[name.charAt(i)];
    totalScore += tempScore;
  }
  if (totalScore <= 60) {
    console.log("NOT TOO GOOD");
  } else if (totalScore <= 300) {
    console.log("PRETTY GOOD");
  } else if (totalScore <= 599) {
    console.log("VERY GOOD");
  } else {
    console.log("THE BEST");
  }
}
nameScore("mubaSHir"); // "THE BEST"
nameScore("YOU"); // "VERY GOOD"
nameScore("MATT"); // "THE BEST"
nameScore("PUBg"); // "NOT TOO GOOD"

//Bài 4 : invert();
function invert(object) {
  const newObj = {};
  for (key in object) {
    const value = object[key];
    newObj[value] = key;
  }

  return newObj;
}
const obj = { a: 1, b: 2, c: 3 };
console.log(invert(obj));

//Bài 5 totalAmountLost
function totalAmountLost(object) {
  let totalAmount = 0;
  for (const key in object) {
    let value = object[key];
    totalAmount += value;
  }
  if (totalAmount === 0) {
    return console.log("lucky you");
  } else {
    return console.log(totalAmount);
  }
}

const stolentItems = { tv: 30, skate: 20, stereo: 50 };
totalAmountLost(stolentItems);

//Bài 6 :greeting

function greeting(name) {
  if (name in GUEST_LIST) {
    console.log(`Hi! I'm" + ${name} and I'm from ${GUEST_LIST[name]}`);
  } else {
    console.log("Hi! I'm a guest.");
  }
}
const myFamily = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};
greeting("Rand");
greeting("Karla");

//Bài 7 findOldestPPL()

function findOldestPPL(object) {
  let max = Number.MIN_VALUE;
  let result = "";
  for (key in object) {
    let value = object[key];
    if (value > max) {
      max = value;
      result = key;
    }
  }
  return result;
}
//test
const oldest = {
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29,
};
console.log(findOldestPPL(oldest)); //Emma
