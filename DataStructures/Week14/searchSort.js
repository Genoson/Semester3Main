// sort and search algorithms, in order of time complexity

// the bubble sort

const defaultCompare = (a, b) => {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};


function bubbleSort(array, compareFn = defaultCompare) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) > 0) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// the bubble sort method above is not the best way to sort, 
// the nested for loops have awful time complexity

function selectionSort(array, compareFn = defaultCompare) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (compareFn(array[j], array[min]) < 0) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
    }
  }
  return array;
}

// much improved time complexity over bubble sort


function insertionSort(array, compareFn = defaultCompare) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && compareFn(array[j], array[j - 1]) < 0) {
        swap(array, j, j - 1);
        j--;
        }
    }
    return array;
    }


    // merge sort, a type of divide and conquer algorithm

    function mergeSort(array, compareFn = defaultCompare) {
        if (array.length < 2) {
            return array;
        }
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        return merge(mergeSort(left, compareFn), mergeSort(right, compareFn), compareFn);
    }

    function merge(left, right, compareFn) {
        const array = [];
        while (left.length && right.length) {
            if (compareFn(left[0], right[0]) <= 0) {
                array.push(left.shift());
            } else {
                array.push(right.shift());
            }
        }
        return array.concat(left.slice()).concat(right.slice());
    }

    // quick sort

    function quickSort(array, compareFn = defaultCompare) {
        if (array.length < 2) {
            return array;
        }
        const pivot = array[0];
        const left = [];
        const right = [];
        for (let i = 1; i < array.length; i++) {
            if (compareFn(array[i], pivot) < 0) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return quickSort(left, compareFn).concat(pivot, quickSort(right, compareFn));
    }

    // there are other sort alogythms, like heap sort, counting sort, bucket sort, radix sort, etc.
    // the above are the most common sort algorithms


    // sequential search

    function sequentialSearch(array, value, compareFn = defaultCompare) {
        for (let i = 0; i < array.length; i++) {
            if (compareFn(array[i], value) === 0) {
                return i;
            }
        }
        return -1;
    }


    // binary search

    function binarySearch(array, value, compareFn = defaultCompare) {
        let low = 0;
        let high = array.length - 1;
        while (low <= high) {
            const middle = Math.floor((low + high) / 2);
            if (compareFn(array[middle], value) === 0) {
                return middle;
            } else if (compareFn(array[middle], value) < 0) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
        return -1;
    }

    // interpolation search

    function interpolationSearch(array, value, compareFn = defaultCompare) {
        let low = 0;
        let high = array.length - 1;
        while (low <= high) {
            const middle = low + Math.floor((high - low) * ((value - array[low]) / (array[high] - array[low])));
            if (compareFn(array[middle], value) === 0) {
                return middle;
            } else if (compareFn(array[middle], value) < 0) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
        return -1;
    }

    // the above are the most common search algorithms
    // shuffle algorythms also exist, like the bogo shuffle, the fisher-yates shuffle, etc.