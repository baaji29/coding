const array = [6, 5, 10, 7, 3, 1];

for (let i = 1; i < array.length; i++) {
    key = array[i]
    j = i - 1
    while(j >= 0 && array[j] >= key) {
        array[j + 1] = array[j]
        j = j-1
    }
    array[j + 1] = key;
}

console.log(array)