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
console.log(bubbleSort1([1, -2, -4, 4, 5]));

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
console.log(bubbleSort2([1, -2, -4, 4, 5]));

//inSertSort ==> compare with next 1 , first  1 is starting // sorted
const insertSort = (arr: number[]) => {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
    }
  }
};
