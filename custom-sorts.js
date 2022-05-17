

function ageSort(users) {   //it's like to sey users.a(represents the index of the array age tapping into the object)
  
  return users.sort((a,b)=> {return a.age - b.age})
  
}

function oddEvenSort(arr) {
  
  let result = users.sort ((a,b)=> {
    if (a.age % 2 === 1 && b.age % 2 ===0) return 1
    if (b.age % 2 === 1 && a.age % 2 ===0) return -1
    return a.age - b.age
  })

  return result
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

