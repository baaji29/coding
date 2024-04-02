//find the max and min in an array

const arr = [1, 2, 3, 4, 5, 6, 123, 7, -1 ,9 ]


function min_max() {
    let min = arr[0] // 1
    let max = arr[0] // 1

    console.log (min, max)
    for(i = 1; i< arr.length; i++ ) {
        if(arr[i] < min) {
            min = arr[i]
        }else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return {min, max};
}

const {min, max} = min_max(arr);
console.log(min, max)
console.log(arr.length)
console.log(arr[arr.length -1])
// let i = 1
// console.log(i<1, i>1)