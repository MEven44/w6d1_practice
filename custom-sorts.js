

function ageSort(users) {   //it's like to sey users.a(represents the index of the array age tapping into the object)

  return users.sort((a, b) => { return a.age - b.age })

}

function oddEvenSort(arr) {

  let result = arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) { return -1 }
    if (b % 2 === 1 && a % 2 === 0) { return 1 }
    return a - b
  })

  return result
}

function validAnagrams(s, t) {

  let len1 = s.length;
  let len2 = t.length;
  if(len1 !== len2){

     return false;
  }
  let str1 = s.split('').sort().join('');

  console.log(str1);

  let str2 = t.split('').sort().join('');

  console.log(str2);
  if(str1 === str2){
    return true;
  } else {
    return false;
  }


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
