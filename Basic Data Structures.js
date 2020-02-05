/*Example of a one-dimensional array; meaning just array contains one level with no other arrays nested in it.
Array contains booleans, strings, and numbers, among other valid JavaScript data types */
let simpleArray = ['one', 2, 'three', true, false, undefined, null]
console.log(simpleArray.length)
// logs 7

/*This is an example of a multi-dimensional array, or an array that contains other arrays. This array contains
two arrays and also contains JavaScript objects.  Arrays are capable of storing complex objects.
*/
let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ]

/*In an array, each array item has an index. This index doubles as the position of that item in the array, and how 
you reference it. JavaScript arrays are zero-indexed (first element of an array is at the zeroth position).  
In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an 
array, or more commonly, to a variable which references an array object. This is known as bracket notation. 
*/
let ourArray = ["a", "b", "c"]
let ourVariable = ourArray[0] //to retrieve the "a" from ourArray and assign it to a variable.
// ourVariable equals "a"

/* In addition to accessing the value associated with an index, you can also set an index to a value using the 
same notation.  Using bracket notation, can reset the item at index 1 from "b", to "not b anymore". */
ourArray[1] = "not b anymore"
// ourArray now equals ["a", "not b anymore", "c"]

/* An array's length, like the data types it can contain, is not fixed. Arrays are mutable. 
Array.push() and Array.unshift() take one or more elements as parameters and ADD those elements to the
array the method is being called on; the push() method adds elements to the end of an array, and unshift() 
adds elements to the beginning. 
 */
let twentyThree = 'XXIII'
let romanNumerals = ['XXI', 'XXII']

romanNumerals.unshift('XIX', 'XX')
//now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree)
//now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

/*Both push() and unshift() REMOVES an elements from an array. 
pop() removes an element from the END of an array, while shift() removes an element from the BEGINNING. 
Neither pop(), shift(), push() and unshift(), accepts parameters.  And each only allows an array to be 
modified by a single element at a time.
 */

let greetings = ['whats up?', 'hello', 'see ya!']
greetings.pop()
// now equals ['whats up?', 'hello']
greetings.shift()
// now equals ['hello']

//pop() and shift() returns the value of the removed element:
let popped = greetings.pop()
// returns 'hello'
// greetings now equals []

/*pop(), shift(), push() and unshift() allow you to remove a single element from the beginning and ending of arrays. 
splice() allows you to remove any number of consecutive elements from ANYWHERE in an array.

splice() can take up to 3 parameters. The first two parameters of splice() are integers which represent indexes, 
or positions, of the array that splice() is being called upon. splice()'s first parameter represents the index on 
the array from which to begin removing elements, while the second parameter indicates the number of elements 
to delete. 
*/
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

//splice() also returns a new array containing the value of the removed elements
let array2 = ['I', 'am', 'feeling', 'really', 'happy']
let newArray = array2.splice(3, 2)
// newArray equals ['really', 'happy']

/*
splice() can take up to three parameters. you can use the third parameter, comprised of one or more element(s), 
to add to the array. This can be useful for quickly switching out an element, or a set of elements, for another.

Here are an array of numbers. We then pass the following to splice(). The index at which to begin deleting 
elements (3), the number of elements to be deleted (1), and the elements (13, 14) to be inserted at that SAME index. 
There can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.
*/
const numbers = [10, 11, 12, 12, 15]
const startIndex = 3
const amountToDelete = 1

numbers.splice(startIndex, amountToDelete, 13, 14)
// the second entry of 12 is removed, and add 13 and 14 at the same index
console.log(numbers)
// returns [ 10, 11, 12, 13, 14, 15 ]

//removing first 2 elements of array and add DarkSalmon and BlanchedAlmond
function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond')
    return arr
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']))

/*slice() copies, or extracts, a given number of elements to a new array, leaving the array it is called upon 
untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second 
is the index at which to stop extraction (extraction will occur up to, but NOT including the element at this index). 
slice() basically creates a new array by extracting elements from an existing array.
*/
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear']
let todaysWeather = weatherConditions.slice(1, 3) //slice beginning at index 1 up to but not including index 3
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

//returns new array with just elements 'warm' and 'sunny'
function forecast(arr) {  
    return arr.slice(2,4)
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']))

/*The spread operator allows for copying all of an array's elements, in order. 
The spread syntax simply looks like this: ...
 */
let thisArray = [true, true, undefined, false, null]
let thatArray = [...thisArray]
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

/* The spread operator copies all elements into a new empty object.
   
   The code below will copy all of the elements into newArr but will also reinitialise newArr with every new 
   iteration of the while loop.

   A new variable should first be initialised using the spread operator - let obj = [...arr]; - then this variable 
   should be added to the newArr for every iteration of the while loop.
*/
function copyMachine(arr, num) {
    let newArr = []
    while (num >= 1) { 
      newArr.push([...arr]) //pushes a copy of the array for each iteration of the loop. arr is passed as array when function called
      num--;  //decreases loop by each iteration 
    }
    return newArr; //returns a new array made up of num copies of arr.
  }
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 7))

/*The spread operator allows you the ability to combine arrays, or to insert all the elements of one array into 
another, at any index
*/
let thisArray2 = ['sage', 'rosemary', 'parsley', 'thyme']

let thatArray2 = ['basil', 'cilantro', ...thisArray2, 'coriander']
// thatArray2 now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

/*
indexOf() allows you to quickly and easily check for the presence of an element on an array. indexOf() takes an 
element as a parameter, and when called, it returns the position, or index, of that element, 
or -1 if the element does not exist on the array.
*/
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears']
fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

//returns true if the passed element exists on the array, and false if it does not.
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) == -1) {
      return false  
    } else {
      return true
    }
  }
  // change code here to test different cases:
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'shallots'))

/*Iterate Through All an Array's Items Using For Loops.  Using a for loop, this function iterates through and 
accesses each element of the array, and subjects it to a simple test (if statement) Program easily and 
programmatically determines which data items are greater than 10, and returned a new array containing those items.*/
  function greaterThanTen(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i])
      }
    }
    return newArr
  } 
  console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]))
  // returns [12, 14, 80]
  
//return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
    let newArr = []

     for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {  //Checks every parameter for the element and if NOT there continues the code
        newArr.push(arr[i]) //Inserts the element of the array in the new filtered array
      }
    }
    return newArr
  }
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 13))

  /* Arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth.
   In this way, an array can very quickly become a very complex data structure, known as a multi-dimensional, or nested array. 
   */
  let nestedArray = [ // top, or first level - the outer most array
    ['deep'], // an array within an array, 2 levels of depth
    [
      ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
    ],
    [
      [
        ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
      ],
      [
        [
          ['deepest-est?'] // an array nested 5 levels deep
        ]
      ]
    ]
  ]
 
  // access the deepest levels of an array this complex with bracket notation:
console.log(nestedArray[2][1][0][0][0])
// logs: deepest-est?

//resetting to
nestedArray[2][1][0][0][0] = 'deeper still'
console.log(nestedArray[2][1][0][0][0])
// now logs: deeper still

/*
myNestedArray has combination of strings, numbers, and booleans for data elements.  myNestedArray has five levels of depth.
The outer-most array is level 1.  On the third level, the string 'deep' is included.  On the fourth level, the string 'deeper' is incl
and on the fifth level, the string 'deepest' is included.  Logic for nested arrays as follows: 

let threeLevelArray = ["first level",
  
  ["Two levels deep", ["Three levels deep"]]
]
 */
let myNestedArray = [ //[] 1 level deep (outer most array )
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], //[ [] ] 2 levels deep 
  ['loop', 'shift', 6, 7, 1000, 'method'], //[ [] ]
  ['concat', false, true, 'spread', 'array',['deep']], //[  [ [] ]  ] //3 levels deep 
  ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]], //[ [ [  []   ]    ]   ] 4 levels deep
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]] // [[[[[]]]]] 5 levels deep
 ]
