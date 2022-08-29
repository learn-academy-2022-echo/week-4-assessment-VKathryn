// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// Create a function that takes in an array and returns a shuffled array removing the initial item of the original array. Input is provided below, output for colors1 should be this array, scrambled; ["blue", "green", "yellow", "pink"]. Output for colors2 should be this array, scrambled; ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

// shuffle function?
// Psuedocoding: Create a function  that looks through an array and removes the first item, then shuffles the array, then return the new array. The test needs to be able to accommodate any order of the values in the new array.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('arrayRearrange', () => {
    it("Matches even if items are out of order", () => {
        expect(arrayRearrange(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]));
   
        expect(arrayRearrange(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]));
    });
});
    

// Jest Test: good fail! arrayRearrange is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// const arrayRearrange = (array) => {
//     let stepOne = array.pop()
//     let shuffle = (array) => {
//         return stepOne.sort(() => Math.random() - )
//     };
// };
 
// b) Create the function that makes the test pass.

// I can't sort this one out! I know I need .pop to remove the first indexed value, and I know that I need to shuffle the array, but I'm missing something that I'm not understanding.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// Pseudocoding: Create a function that contains an object that calls the key:value pairs of the data provided (ex: {upVotes: 13, downVotes: 2}) and subtracts the upVotes from the downVotes to return the total votes.

// a) Create a test with expect statements for each of the variables provided. 

describe("voteCounts", () => {
        it("takes in up and down votes and returns net votes", () => {
          expect(voteCounts(votes1)).toEqual(11);
          expect(voteCounts(votes2)).toEqual(-31);
        });
      });


// Good Fail, voteCounts is not defined

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

const voteCounts = (object) => {
    let voteSum = (object.upVotes - object.downVotes)
    return voteSum};

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Pseudocode: use destructuring to put the arrays into a new set & it will return no duplicates, because set is a built in method that doesn't support duplicates, this does the hard work for you! I really really understood this one!

// a) Create a test with an expect statement using the variables provided.

describe("dataArray3", () => {
    it("takes in two arrays and returns one array with no duplicates", () => {
      expect(dataArray3).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
    });
  });

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

// Good Fail, dataArray3 is not defined.
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.
let dataArray3 = [...new Set([...dataArray1, ...dataArray2])];