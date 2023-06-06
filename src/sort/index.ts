//bubble sort ==> sort the element inside the array; ascenting

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
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < vipot) {
      left.push(arr[i]);
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

  let left = [];
  let right = [];
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
const quickSort3 = (arr: number[]): number[] => {
  let vipot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < vipot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(right), vipot, ...quickSort3(left)];
};

console.log(quickSort1([2, 4, 6, 1, -5]));
