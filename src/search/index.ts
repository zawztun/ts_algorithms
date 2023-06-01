const finderArr1 = (arr: number[], t: number) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == t) {
      return i;
    }
  }
  return -1;
};

const bianrySearch = (arr: number[], t: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[midIndex]) {
      return midIndex;
    }

    if (t < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
};

const recursiveBinarySearch1 = (arr: number[], target: number): number => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
): number => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((rightIndex + leftIndex) / 2);
  if (target === arr[midIndex]) {
    return midIndex;
  }
  if (target < arr[midIndex]) {
    return search(arr, target, leftIndex, midIndex - 1);
  } else {
    return search(arr, target, midIndex + 1, rightIndex);
  }
};

const bianrySearch3 = (arr: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    }
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
};

const linearSearch3 = (arr: number[], target: number) => {
  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

const recursiveBinarySearch2 = (arr: number[], target: number) => {
  return search34(arr, target, 0, arr.length - 1);
};

const search34 = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[midIndex]) {
    return midIndex;
  }
  if (target < arr[midIndex]) {
    return search(arr, target, leftIndex, midIndex - 1);
  } else {
    search(arr, target, midIndex + 1, rightIndex);
  }
};

const linearSearch4 = (arr: number[], target: number) => {
  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

// // console.log(linearSearch2([1, 2, 3, 4, 5, -90, -2], 5));

// //binary Search => find an target form the array.  divide the index

const binarySearch4 = (arr: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  for (let i = 0; i <= arr.length; i++) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === midIndex) {
      return midIndex;
    }
    if (target < midIndex) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
};

const recirsivebinarySearch3 = (arr: number[], target: number) => {
  return search5(arr, target, 0, arr.length - 1);
};

const search5 = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
) => {
  for (let i = 0; i <= arr.length; i++) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    }
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
};

const bianrySearch4 = (arr: number[], t: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[midIndex]) {
      return midIndex;
    }

    if (t < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
};

// const recursiveBinarySearch = (arr: number[], target: number): number => {
//   return search(arr, target, 0, arr.length - 1);
// };

const recursiveBinarySearch = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
): number => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((rightIndex + leftIndex) / 2);
  if (target === arr[midIndex]) {
    return midIndex;
  }
  if (target < arr[midIndex]) {
    return recursiveBinarySearch(arr, target, leftIndex, midIndex - 1);
  } else {
    return recursiveBinarySearch(arr, target, midIndex + 1, rightIndex);
  }
};
// console.log(recursiveBinarySearch([0, 2, 3, 5, 6, 7, 12], 0, 6, 12));

const bianrySearch2 = (arr: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    }
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
};

const linearSearch = (arr: number[], target: number) => {
  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

const recursiveBinarySearch4 = (arr: number[], target: number) => {
  return search6(arr, target, 0, arr.length - 1);
};

const search6 = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[midIndex]) {
    return midIndex;
  }
  if (target < arr[midIndex]) {
    return search(arr, target, leftIndex, midIndex - 1);
  } else {
    search(arr, target, midIndex + 1, rightIndex);
  }
};

const linearSearch2 = (arr: number[], target: number) => {
  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

const binarySearch2 = (arr: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  for (let i = 0; i <= arr.length; i++) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    }
    if (target < midIndex) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
};

const recirsivebinarySearch7 = (arr: number[], target: number) => {
  return search8(arr, target, 0, arr.length - 1);
};

const search8 = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
) => {
  for (let i = 0; i <= arr.length; i++) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    }
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
};

const recirsivebinarySearch = (arr: number[], target: number) => {
  return search3(arr, target, 0, arr.length - 1);
};

const search3 = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
) => {
  for (let i = 0; i <= arr.length; i++) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    }
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
};

const isLinearSearch = (arr: number[], target: number) => {
  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

//binary Search ==>  find target inside the array => divide and find midPoint and check the target is greater or less

const isBinarySearch = (arr: number[], target: number) => {
  let startPoint = 0;
  let endPoint = arr.length - 1;
  while (startPoint <= endPoint) {
    let midPoint = Math.floor((startPoint + endPoint) / 2);

    if (target === arr[midPoint]) {
      return midPoint;
    }
    if (target < arr[midPoint]) {
      endPoint = midPoint - 1;
    } else {
      startPoint = midPoint + 1;
    }
  }
  return -1;
};

//binaryRecursive Search
const bianryRecursiveSearch = (arr: number[], target: number) => {
  return search44(arr, target, 0, arr.length - 1);
};

const search44 = (
  arr: number[],
  target: number,
  startPoint: number,
  endPoint: number
): number => {
  if (startPoint > endPoint) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    let midIndex = Math.floor((startPoint + endPoint) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    }
    if (target < arr[midIndex]) {
      return search44(arr, target, startPoint, midIndex - 1);
    } else {
      return search44(arr, target, midIndex + 1, endPoint);
    }
  }
  return -1;
};

const binaryRecursive = (arr: number[], target: number) => {
  return search55(arr, target, 0, arr.length - 1);
};

const search55 = (
  arr: number[],
  target: number,
  startPoint: number,
  endPoint: number
): number => {
  if (startPoint > endPoint) {
    return -1;
  }
  for (let i = 0; i <= arr.length; i++) {
    let midPoint = Math.floor((startPoint + endPoint) / 2);
    if (target === arr[midPoint]) {
      return midPoint;
    }
    if (target < arr[midPoint]) {
      return search55(arr, target, startPoint, midPoint - 1);
    } else {
      return search55(arr, target, midPoint + 1, endPoint);
    }
  }
  return -1;
};
console.log(binaryRecursive([1, 2, 4, 5, 6], 6));
