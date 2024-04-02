const arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const linearSearch = (arr, key) => {
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] == key) {
            return arr[i]
        }
    }
    return false
}

const searchValue = linearSearch(arrayValue, 12);
console.log(searchValue);