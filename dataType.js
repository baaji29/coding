// Object are mutuable. This is in contrast to primitive data types (like numbers, strings, booleans, etc.), 
// Check it out 

let me = {firstName: 'Baljai', age: 29, occupation: 'Vetti Guy'};
const fullname = 'alaji Kamraj';
const person = me;
person.occupation = 'IT Professional';

function newJoinee(props) {
    props = 'Balaji';
    return props;
}

const joiner = newJoinee(fullname);
console.log(joiner)
console.log(fullname);