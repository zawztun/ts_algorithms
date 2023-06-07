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
console.log(cartesian(arrA, arrB));
