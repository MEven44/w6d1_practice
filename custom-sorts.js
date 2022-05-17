

function ageSort(users) {   //it's like to sey users.a(represents the index of the array age tapping into the object)
  
  return users.sort((a,b)=> {return a.age - b.age})
  
}

function oddEvenSort(arr) {
  // Your code here
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}




function frequencySort(arr) {
  
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

