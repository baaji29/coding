// reduce method Javascript

// The reduce method in JavaScript (and other programming languages) is a powerful tool for working with arrays. 
// It allows you to reduce an array to a single value by applying a function to each element of the array (from left to right) and accumulating the results. 
// Here's how it works and some examples to illustrate its usage:

// Removing the repeated value starts here

// const sequence = [1, 2,3,5,67,94,2,1,2]

// const norepeat = sequence.reduce((accumulator, currentValue) => {
//     if(accumulator.indexOf(currentValue) === -1) {
//         accumulator.push(currentValue);
//     }
//     return accumulator
// }, [])

// console.log(norepeat)

// Removing the repeated value End here

//flatening the 
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];


const result = inventory.reduce((acummulator, currentValue) => {
  let key = currentValue.type;
  console.log("acummulator  key",acummulator[key])
  if(!acummulator[key]) {
    acummulator[key] = []
  }
  // acummulator[key].push(currentValue);
  return acummulator;
},{})

console.log("result",result)