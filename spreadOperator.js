const a = [1,2,3,19,7,8,9]
const b = [4,5,6]

// const x = [a, b]
// console.log(x)

// const [one, ...rest ] = a
// console.log(one, rest)

// var fruits = ["Mango", "Banana", "Apple"];
//     var moreFruits = [...fruits, "Orange",
//                 "Pineapple", "Watermelon"];
//     console.log(moreFruits);
console.log(a)
const x = Math.min(...a)
console.log(Math.max(...a), 'x:' +x);