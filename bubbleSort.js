array = [1, 232 , 3, 4345, 6, 1 ,-1, 0]
console.log(array.length)

function bubbleSort(arr) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i- 1); j++) {
              if(arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
              }
        }
    }
    console.log(arr)
}

bubbleSort(array);