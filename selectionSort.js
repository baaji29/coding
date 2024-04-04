const array = [5, 10, 7, 3, 1];

// for(i = array.length; i >0 ; i--) {
//     console.log(array[i])
// }

for (let i = 0; i < array.length; i++) {
    let currentMin = i;
    for (let j = i + 1 ; j < array.length; j++) {
        if(array[currentMin] > array[j+1]) {
            currentMin = array[j + 1]
        }
    }   
    [array[i], array[currentMin]] = [array[currentMin], array[i]]
}

console.log(array)