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
  ['loop', 'shift', 6, 7, 1000, 'method'], //[ [] ] 2 levels deep
  ['concat', false, true, 'spread', 'array',['deep']], //[  [ [] ]  ] //3 levels deep 
  ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]], //[ [ [  []   ]    ]   ] 4 levels deep
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]] // [[[[[]]]]] 5 levels deep
 ]

/*
At their most basic, objects are just collections of key-value pairs, or simply pieces of data mapped to unique identifiers that are 
called properties or keys. The code defines an object called FCC_User that has four properties, each of which map to a specific value.
In short, they are key-value stores which provide a flexible, intuitive way to structure data, and, they provide very fast lookup time.

Using dot notation, I can access the number of followers FCC_User has.  
let userData = FCC_User.followers

Alternatively, I can also access the property with bracket notation.  followers is enclosed in quotes. This is because the brackets 
actually allow us to pass a variable in to be evaluated as a property name. 
let userData = FCC_User['followers']
*/

let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
}

//Can also add new key-value pairs to object. Adding entries for bananas, grapes and strawberries. Dot notation does not work when adding multiple entries?
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
}
foods['bananas'] = 13
foods['grapes'] = 35
foods['strawberries'] = 27
console.log(foods)

/*
Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays 
and even other objects.  nestedObject has three unique keys: id, whose value is a number, date whose value is a string, and data, whose 
value is an object which has yet another object nested within it. While structures can quickly become complex, we can still use the same 
notations to access the information we need.
*/

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
}

//Using dot notation to change the value of the online key to 45.
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
}
userActivity.data.online = 45
console.log(userActivity);

//checkInventory receives a scanned item as an argument. Program returns the current value of the scannedItem key in the foods2 object.
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
}
function checkInventory(scannedItem) {
  return foods2[scannedItem]
}
// change code below this line to test different cases:
console.log(checkInventory("plums"))

/*Can use the delete keyword to remove a key-value pair from an object. Using delete to remove the oranges, plums, and strawberries 
keys from the foods3 object.
*/
let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
}
delete foods3.oranges
delete foods3.plums
delete foods3.strawberries
console.log(foods3);

/*
To check if an object has a specific property, you can use the hasOwnProperty() method and the 'in' keyword. 
If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
*/

//Returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and returns false otherwise
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
}

function isEveryoneHere(obj) { //receives users as argument and referred to as 'obj'
 if (
     obj.hasOwnProperty('Alan') &&
     obj.hasOwnProperty('Jeff') &&
     obj.hasOwnProperty('Sarah') &&
     obj.hasOwnProperty('Ryan')
 ) {
   return true
 }else {
   return false
 }
}
console.log(isEveryoneHere(users)) // calling function and passing the users object as an argument.

/* To Iterate Through the Keys of an Object, use a for...in Statement

Statement defines a variable user, and the variable resets during each iteration to each of the object's keys as the statement loops
through the object, resulting in each user's name being printed to the console. 

NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order 
in which it appears, is irrelevant when referencing or accessing that key.

for (let user in users) {
  console.log(user);
}

logs:
Alan
Jeff
Sarah
Ryan

*/

/*
countOnline accepts one argument (a users object). Using a for...in statement within this function to loop through the users object 
passed into the function and return the number of users whose online property is set to true. 
Each user will have an online property with either a true or false value.

dot-notation will cause errors with this program. [square-bracket] notation must be used to call a variable property name.
*/

let users2= {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: false
  }
}
function countOnline(obj) { //receives user2 as argument and refers to as 'obj'
  let result = 0;
  for (let user in obj) {
    if (obj[user].online === true) { //dot notation will not work. []notation must be used to call a variable property name 
      result++ //increasing results by 1 for each iteration of the loop 
    }
  }
  return result
}
console.log(countOnline(users2)) //calling function and passing the users2 object as an argument.

/*
Generate an Array of All Object Keys with Object.keys()

Can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as 
the argument. This will return an array with strings representing each property in the object. 
There will be no specific order to the entries in the array.
*/

//getArrayOfUsers function returns an array containing all the properties in the object it receives as an argument.
let users3 = { 
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Smitty: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj)
}
console.log(getArrayOfUsers(users3))

/*
The user4 object contains three keys. The data key contains five keys, one of which contains an array of friends. 
Function takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
*/
let user4 = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
}
function addFriend(userObj, friend) {
userObj.data.friends.push(friend)
return userObj.data.friends
}
console.log(addFriend(user4, 'Stone'))

/* Summary
//to retrieve the "a" from ourArray and assign it to a variable.
let ourArray = ["a", "b", "c"]
let ourVariable = ourArray[0] 

//Using bracket notation, can reset the item at index 1 from "b", to "not b anymore". 
ourArray[1] = "not b anymore"

the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. 
 
let twentyThree = 'XXIII'
let romanNumerals = ['XXI', 'XXII']

romanNumerals.unshift('XIX', 'XX')
romanNumerals.push(twentyThree)

pop() removes an element from the END of an array, while shift() removes an element from the BEGINNING. 
pop() and shift() returns the value of the removed element:
let greetings = ['whats up?', 'hello', 'see ya!']
greetings.pop()
greetings.shift()

splice() allows you to remove any number of consecutive elements from ANYWHERE in an array.
splice() also returns a new array containing the value of the removed elements
removes 2 elements beginning with the 3rd element
let array = ['today', 'was', 'not', 'so', 'great']
array.splice(2, 2)

splice() can take a 3rd parameter. here adding the numbers 13 and 14 to an array
numbers.splice(startIndex, amountToDelete, 13, 14)

slice() copies, or extracts, a given number of elements to a new array, leaving the array it is called upon 
untouched. (extraction will occur up to, but NOT including the element at this index)

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear']
let todaysWeather = weatherConditions.slice(1, 3) //slice beginning at index 1 up to but not including index 3

The spread operator allows for copying all of an array's elements, in order. 
The spread syntax simply looks like this: ...
 
let thisArray = [true, true, undefined, false, null]
let thatArray = [...thisArray]

indexOf() allows you to quickly and easily check for the presence of an element on an array. indexOf() takes an 
element as a parameter, and when called, it returns the position, or index, of that element, 
or -1 if the element does not exist on the array.

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears']
fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

*Iterate Through All an Array's Items Using For Loops.  Using a for loop, this function iterates through and 
accesses each element of the array, and subjects it to a simple test (if statement) Program easily and 
programmatically determines which data items are greater than 10, and returned a new array containing those items.
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

*myNestedArray has combination of strings, numbers, and booleans for data elements.  myNestedArray has five levels of depth.
The outer-most array is level 1.  On the third level, the string 'deep' is included.  On the fourth level, the string 'deeper' is incl
and on the fifth level, the string 'deepest' is included.  Logic for nested arrays as follows: 

let myNestedArray = [ //[] 1 level deep (outer most array )
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], //[ [] ] 2 levels deep 
  ['loop', 'shift', 6, 7, 1000, 'method'], //[ [] ] 2 levels deep
  ['concat', false, true, 'spread', 'array',['deep']], //[  [ [] ]  ] //3 levels deep 
  ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]], //[ [ [  []   ]    ]   ] 4 levels deep
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]] // [[[[[]]]]] 5 levels deep
 ]

*Using dot notation, I can access the number of followers FCC_User has.  
let userData = FCC_User.followers

Alternatively, I can also access the property with bracket notation.  
let userData = FCC_User['followers']


let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
}

*Can also add new key-value pairs to object. Adding entries for bananas, grapes and strawberries. Dot notation does not work when adding multiple entries?
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
}
foods['bananas'] = 13
foods['grapes'] = 35
foods['strawberries'] = 27
console.log(foods)

*Can use the delete keyword to remove a key-value pair from an object. Using delete to remove the oranges, plums, and strawberries 
keys from the foods3 object.

let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
}
delete foods3.oranges
delete foods3.plums
delete foods3.strawberries

*To check if an object has a specific property, you can use the hasOwnProperty() method and the 'in' keyword. 
If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

*To Iterate Through the Keys of an Object, use a for...in Statement

for (let user in users) {
  console.log(user);
}

*Generate an Array of All Object Keys with Object.keys()

Can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as 
the argument. This will return an array with strings representing each property in the object. 
There will be no specific order to the entries in the array.
*/












