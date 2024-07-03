const array = [5, 10, 7, 3, 1];

for (i = 0; i < array.length; i++) {
    let minIndex = i
    console.log("Array of Min Index -----", array[i])
    for(j = i + 1; j < array.length; j++) {
        console.log("array of current Min ---",array[minIndex], "Array of J", array[j])
        if(array[j] < array[minIndex]) {
            minIndex = j
        }
    }

    if(minIndex !== i) {
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
        console.log("Array i",array[i])
    }
}

console.log(array)