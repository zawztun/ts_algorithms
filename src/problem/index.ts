//Cartesian Porduct idea
// let  A =  [ 1,2]// let b = [3,4]
// Cartesian product  = [1,3],[1,4],[2,3],[2,4];

const cartesian = (arrA: number[], arrB: number[]) => {
  let res = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      res.push([arrA[i], arrB[j]]);
    }
  }
  return res;
};
let arrA = [1, 2];
let arrB = [3, 4];
// console.log(cartesian(arrA, arrB));

//climbing stair

const climbingStair = (n: number) => {
  let numOfway = [1, 2];

  for (let i = 2; i < n; i++) {
    numOfway[i] = numOfway[i - 1] + numOfway[i - 2];
  }
  return numOfway[n - 1];
};
// console.log(climbingStair(4));
// console.log(climbingStair(5));

// climbingStair ==>

const climbingStair1 = (n: number) => {
  let numberofStair = [1, 2];

  for (let i = 2; i < n; i++) {
    numberofStair[i] = numberofStair[i - 1] + numberofStair[i - 2];
  }
  return numberofStair[n - 1];
};

const towerOfHanoi = (
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
) => {
  if (n === 1) {
    console.log(` Moving disk 1 form ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(` Moving disk ${n} form ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

// console.log(towerOfHanoi(3, "A", "C", "B"));

//towerOfHanoi

const towerOfhanoi1 = (
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
) => {
  if (n === 1) {
    console.log(` Moving disk 1 form ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Moving disc ${n} from ${fromRod} to ${toRod}`);
  towerOfhanoi1(n - 1, usingRod, toRod, fromRod);
};

// console.log(towerOfhanoi1(4, "A", "C", "B"), "test2");
