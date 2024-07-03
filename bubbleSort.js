

// Bubble sort compares the next element and swap 

sortArray = [5,7,83,43,7,-12,-1,0]

for (let i = 0; i < sortArray.length; i++) {
  console.log("Sorted array index", i,sortArray)
  for (let j = 0; j < sortArray.length -i -1; j++) {
    if(sortArray[j] > sortArray[j+1]){
      const temp = sortArray[j]
      sortArray[j] = sortArray[j + 1]
      sortArray[j + 1] = temp
    }
  } 
}

console.log(sortArray)