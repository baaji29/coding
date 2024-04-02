//bubble sort algorithm
const arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr, key) => {
    let left = 0;
    let right = arrayValue.length - 1
    // console.log(right, arr.length)
    
    while(left <= right) {
        const arrayMid = Math.floor((left + right) / 2);
        console.log(arrayMid, arr[arrayMid])
        console.log("right:",right,"left:", left)
        if(arr[arrayMid] == key) return true
        else if(arr[arrayMid] < key) {left = arrayMid + 1}
        else {right = arrayMid -1}
    }
    return false

}

const searchValue = binarySearch(arrayValue, 12);
console.log(searchValue)