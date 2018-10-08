// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 3

// *************
// * PROBLEM 1 *
// *************

// For this question, you are asked to make a function called 'callBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the update function
// with the animal as the context, and 'Trogdor' as a parameter.
// return the result of your updateAnimal invocation

// CODE HERE...
function callBinding(magicAnimals, updateAnimal, id)
{
  // console.log('updateAnimal is a', typeof updateAnimal);
  let i = magicAnimals.findIndex(e => e.id === id);

  //apply the given animal as the context of the function
  updateAnimal.bind(magicAnimals[i]);
  return updateAnimal('Trogdor');
  // console.log('this', magicAnimals[i].updateAnimal('Trogdor'));
}


// *************
// * PROBLEM 2 *
// *************

// For this question, you are asked to make a function called 'applyBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the function
// with the context of the animal, and the array ['being majestic', 'eating rainbows'] as a parameter.
// return the result of your updateAnimal invocation


function applyBinding(magicAnimals, updateAnimal, id)
{
  //unfinished. I don't see how this is different from the previous puzzle

  // console.log('magicAnimals', magicAnimals);
  let i = magicAnimals.findIndex(e => e.id === id);
  
  updateAnimal.bind(magicAnimals[i]);
  return updateAnimal(['being majestic', 'eating rainbows']);
  // console.log('x', x);
}


// *************
// * PROBLEM 3 *
// *************

// For this question, you are asked to make a function called 'promiseMe'.
// This function will take in 1 parameter:
// $q (Custom promise object).
// NOTE: $q is an injected library, that works like angular's $q object.
// promiseMe will be invoked by a test and the test will expect a promise back.
// In your function, create a custom promise, then create a timeout with a duration of 20 ms.
// The timeout function should update the variable foo (seen below) to equal 'bar'.
// After the timeout is completed, the promise should be resolved with the new updated foo variable.
// NOTE: Manually invoking your function here will alter the 'foo' variable before tests run, causing them to fail.

var foo;

// CODE HERE...
function promiseMe($q)
{
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(foo = 'bar')}, 20);
  });
}


// *************
// * PROBLEM 4 *
// *************

// For this question, you are asked to make a function called 'emailList'.
// This function will take in 2 parameters:
// $q (Custom promise object), $http (Custom request function).
// NOTE: $http is a function created to simulate the angular $http.
// Set up your custom promise, then make a GET request using $http to '/api/users'.
// Make an array of emails (array of strings) from the returned data (You will need to console log or debug to figure this out),
// and then resolve the array as you complete your promise.

// CODE HERE...
function emailList($q, $http)
{
  //Unfinished
  $q = new Promise((resolve, reject) => {
    let arr = [];
    $http.get('/api/users')
    .then(response => arr = response.data.map(e => e.email));
    resolve(arr);
  });
  console.log('$q', $q);
  return $q;
}