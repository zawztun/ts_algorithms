//bubble sort ==> sort the element inside the array; ascenting

import { log } from "console";

//[2,4,6,-2,-8] ===> [-8,-2,2,4,6]

const isBubbleSort = (arr: number[]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// console.log(isBubbleSort([1, 2, 4, 6, -2]));

const bubbleSort1 = (arr: number[]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

//bubbleSort ==>
//[-1,-3,2,3,9,5] ==> [-3,-1,2,3,5,9]
// check => arr[i] and arr[i+1] // if arr[i] is greater than arr[i+1], arr[i] = arr[i+1]
// loop iterate the arr.length -1 //

const bubbleSort2 = (arr: number[]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

//inSertSort ==> compare with next 1 , first  1 is starting // sorted

const insertSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
};

const insertSort1 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let insertNumber = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertNumber) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertNumber;
  }
  return arr;
};

// let arr = [-2, -4, -1, 3, 5, 6];
// insertSort(arr);

const insertSort2 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let insertNumber = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertNumber) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertNumber;
  }
  return arr;
};

const bubbleSort3 = (arr: number[]) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const bubbleSort4 = (arr: number[]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const insertSort3 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let insertNumber = arr[i]; //1
    let j = i - 1; //3
    while (j >= 0 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertNumber;
  }
  return arr;
};

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};
// console.log(bubbleSort([2, -2, -1, 5, 1, 3]));

// insertSort =>  acenting el inside the array
// start the left side // sorted part

// const insertSort = (arr: number[]) => {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
//   return arr;
// };

const inSertSort4 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let inSertNumber = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > inSertNumber) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = inSertNumber;
  }
  return arr;
};

const insertSort5 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let inSertNumber = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > inSertNumber) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = inSertNumber;
  }
  return arr;
};

// Acenting [2,1,0,-1] order
//
//compare left side to right every single number to the end
//if left int is greater than left change the integer the compare next int

const insertSort6 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let insertNumber = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > insertNumber) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertNumber;
  }
  return arr;
};
// console.log(insertSort6([2, 1, 5, 3, 6]));

//bubbleSort // compare left int right int
//if right is lower int swapp the left int and change the place till last index - 1

const bubbleSort5 = (arr: number[]) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

//quick sort => povit any int  inside the arry
// if greater than  to right  // if lower send

const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  let vipot = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < vipot) {
      left.push(arr[i] as number);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), vipot, ...quickSort(right)];
};

// console.log(quickSort([-1, -5, 5, 4, 3, 6]));
// function quickSort2(arr: number[]): number[] {
//   if (arr.length < 2) return arr;
//   let piot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] < piot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   let sortedLeft = quickSort2(left);
//   let sortedRight = quickSort2(right);
//   return sortedLeft.concat(piot, sortedRight);
// }
// console.log(quickSort2([-1, -5, 5, 4, 3, 6]));
// quicksort => vipor randon element ,  then

const quickSort1 = (arr: number[]) => {
  if (arr.length < 2) {
    return arr;
  }
  let vipot = arr[arr.length - 1];

  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < vipot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), vipot, ...quickSort(right)];
};

//sort el inside the array acenting or decenting
// take pivot = any number inside the array
// create the space for left and right array for  new el space
// if el is greater push in right of pivot else push in left
//concanated all together

// const quickSort3 = (arr: number[]): number[] => {
//   let vipot = arr[arr.length - 1];
//   let left: number[] = [];
//   let right: number[] = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < vipot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort3(left), vipot, ...quickSort3(right)];
// };
// console.log(quickSort3([1, 3, 4, 1, 2, 6]));

//Big-O => O(nlogn)
// const merge = (leftArr: number[], rightArr: number[]) => {
//   const sortedArr: number[] = [];
//   while (leftArr.length && rightArr.length) {
//     console.log(leftArr.shift());
//     console.log(rightArr.shift());
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// };

// function merge2(left: number[], right: number[]) {
//   let result = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift() as number);
//     } else {
//       result.push(right.shift() as number);
//     }
//   }
//   return result.concat(left, right);
// }
// console.log(mergeSort([1, 4, 2, 4, 5, 3]), "jelo");

const mergeSort3 = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  let midArr = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midArr);
  let rightArr = arr.slice(midArr);
  return merge(mergeSort3(leftArr), mergeSort3(rightArr));
};

const merge = (leftArr: number[], rightArr: number[]): number[] => {
  let sortedArr: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift() as number);
    } else {
      sortedArr.push(rightArr.shift() as number);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge1(mergeSort(leftArr), mergeSort(rightArr));
};

const merge1 = (leftArr: number[], rightArr: number[]): number[] => {
  let sorted: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr.shift() as number);
    } else {
      sorted.push(rightArr.shift() as number);
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
};

//bubbleSort

// sorting the el inside the arr [] , acenting or decenting
// compare the next el , if greater swapped
const bubbleSort6 = (arr: number[]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
// console.log(bubbleSort6([1, 4, 2, 5]));

//bubbleSort ==> sorting el inside the array incenting or decenting
//compare with next el

const bubbleSort8 = (arr: number[]) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// console.log(bubbleSort8([1, 4, 2, 5]));

//insertingSort ==> first 1 is starting compare next el then =>

// const insertSort6 = (arr: number[]) => {
//   for (let i = 1; i < arr.length; i++) {
//     let insertNumber = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > insertNumber) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = insertNumber;
//   }
//   return arr;
// };

// const insertingSort = (arr: number[]) => {
//   for (let i = 1; i < arr.length; i++) {
//     let insertNumber = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > insertNumber) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = insertNumber;
//   }
//   return arr;
// };

//quickSort ==> choice the pivot el , compare

// const quickSort4 = (arr: number[]): number[] => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort4(left), pivot, ...quickSort4(right)];
// };

//mergeSort ==> split the arr,

// const mergeSort = (arr: number[]): number[] => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, mid);
//   const rightArr = arr.slice(mid);
//   return merge1(mergeSort(leftArr), mergeSort(rightArr));
// };

// const merge1 = (leftArr: number[], rightArr: number[]): number[] => {
//   let sorted = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sorted.push(leftArr.shift() as number);
//     } else {
//       sorted.push(rightArr.shift() as number);
//     }
//   }
//   return [...sorted, ...leftArr, ...rightArr];
// };

const mergeSort4 = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  let midArr = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midArr);

  let rightArr = arr.slice(midArr);
  return sortMerge(mergeSort4(leftArr), mergeSort4(rightArr));
};

const sortMerge = (leftArr: number[], rightArr: number[]): number[] => {
  let sorted: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr.shift() as number);
    } else {
      sorted.push(rightArr.shift() as number);
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
};

// console.log(mergeSort4([2, 3, 5, 4]));

//bubbleSort

let arr = [2, 5, 7, 3, 4];

const bubbleSort9 = (arr: number[]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

bubbleSort9(arr);
// console.log(bubbleSort9([3, 1, 4, 2, 6, 0]));
//insertSort
const insertingSort1 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let insertNumber = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertNumber) {
      arr[i + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertNumber;
  }
};

// mergeSort

const mergeSort5 = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  let midArr = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midArr);

  let rightArr = arr.slice(midArr);
  return solveMerge(mergeSort4(leftArr), mergeSort4(rightArr));
};

const solveMerge = (leftArr: number[], rightArr: number[]): number[] => {
  let sorted: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr.shift() as number);
    } else {
      sorted.push(rightArr.shift() as number);
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
};

//mergeSort

const mergeSort6 = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  let midArr = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midArr);
  let rightArr = arr.slice(midArr);
  return mergeSolve(mergeSort6(leftArr), mergeSort6(rightArr));
};

const mergeSolve = (leftArr: number[], rightArr: number[]) => {
  let sortedArr: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift() as number);
    } else {
      sortedArr.push(rightArr.shift() as number);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};
// console.log(mergeSort6([3, 2, 1, 4]));

//quicksort

const quickSort5 = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr: number[] = [];
  let rightArr: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort5(leftArr), pivot, ...quickSort5(rightArr)];
};
console.log(quickSort5([2, 3, 1, 4, 5]));
