/* function areTheyAwesome(name) {
    var awesome;
    if (name === 'nico') {
        awesome = true;
    }
    return awesome
}
// console.log(areTheyAwesome('nico'));

// console.log(areTheyAwesome('agforl')); 
{
    {
        {
            {
                {
                    var insane = 'yes, you are'
                }
            }
        }
    }
}
// console.log(insane)
let outer = 'I am so eccentric!'
{
  let inner = 'I play with neighbors in my block and the sewers'
  {
    let innermost = 'I only play with neighbors in my block'
  }
  // accessing innermost here would throw
}
// accessing inner here would throw
// accessing innermost here would throw

{
  let _nested = 'secret';
  function nested () {
    return _nested
  }
}
console.log(nested())
var nested
{
  let _nested = 'secret'
  nested = function () {
    return _nested
  }
}
console.log(nested())
there = 'far away'
// <- ReferenceError: there is not defined
var there = 'dragons'
function readThere () {
  return there
}
let there

console.log(readThere())
function readThere () {
    return there
  }
  console.log(readThere())

  let x = 'outer value';
(function() {
  // start TDZ for x
  console.log(x);
  let x = 'inner value'; // declaration ends TDZ for x
}());
const cool = 'ponyfoo'
{
  const cool = 'dragons'  
  console.log(cool)
  // <- 'dragons'
}
console.log(cool)
// <- 'ponyfoo'
let x = 'outer value';
(function() {
  // start TDZ for x
  console.log(x);
  let x = 'inner value'; // declaration ends TDZ for x
}()); */

// const cool = 'ponyfoo'
// {
//   console.log(cool)
//   // <- 'dragons'
// }
// console.log(cool)
// <- 'ponyfoo'
// const cool = { people: ['you', 'me', 'tesla', 'musk'] }
// cool = {}
// // <- "cool" is read-only
// console.log(cool)

const cool = { people: ['you', 'me', 'tesla', 'musk'] }
cool.people.push('berners-lee')
console.log(cool)
// <- { people: ['you', 'me', 'tesla', 'musk', 'berners-lee'] }