//5 simple tips to write better arrow functions

// 1. arrow function name inferencce

( name => name +1).name; // => ''
// th name property of the function is empty string ''.

// Here’s a debug session of a code that executes anonymous functions:

/* let counter = 0;
document.getElementById('button').addEventListener('click',()=>{
    setTimeout(() => {
        debugger;
        counter++;
    },1000)
}); */
// call stack : anonymous
// setTimeout : anonymous


// ________________________________________

//Lets see hous does func name inference work :
const increaseNumber = number => number + 1;
increaseNumber.name; // => increaseNumber
console.log(increaseNumber.name);

// Now let’s check a debug session with code that uses name inference:

/* let count = 0;
const increaseCount = () =>{
    debugger;
    count++;
}
const handleButtonClick = () =>{
    setTimeout(() => {
        increaseCount;
    }, 1000);
}
document.getElementById('button')
    .addEventListener('click', handleButtonClick);

 */

// 2.When the function has one expression, a good practice is to inline the arrow function.

const arr = [1,2,3];
arr.map((nums) => {
    return nums *2;
})
//inline arr func 
arr.map(nums => nums *2 );

//3. Fat arrow and comparison operators

const negativeToZero = nums => nums <= 0 ? 0 : nums;
console.log(negativeToZero(3));
const negativeToZero_ = number => (number <= 0 ? 0 : number);
//The second option is to deliberately define the arrow function using a longer form:
const negativeToZero__ = number => {
    return number <= 0 ? 0 : number;
};

// 4. Constructing plain objects


const array = [1,2,3];

// throws SyntaxError!
// array.map(number => { 'number': number });

// Works!
array.map(number => ({ 'number': number }));
//[ { number: 1 }, { number: 2 }, { number: 3 } ]
let arr_literal = array.map((number,key) => ({
    'number' : number,
    'propA': 'value A',
    'propB' : 'value B',
    'propC' : key
    
}));

console.log(arr_literal);

//5. Be aware of excessive nesting


myButton.addEventListener('click', () => {
    fetch('/items.json')
      .then(response => response.json())
      .then(json => {
        json.forEach(item => {
          console.log(item.name);
        });
      });
  });

  //alter :
  const readItemsJson = json => {
    json.forEach(item => console.log(item.name));
  };
  const handleButtonClick = () => {
    fetch('/items.json')
      .then(response => response.json())
      .then(readItemsJson);
  };
  myButton.addEventListener('click', handleButtonClick);
  
  //alter :
  const handleButtonClick = async () => {
    const response = await fetch('/items.json');
    const json = await response.json();
    json.forEach(item => console.log(item.name));
  };
  myButton.addEventListener('click', handleButtonClick);