

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
  return arr.sort((a,b)=>{
   let baseA = Math.floor(Math.log10(a))
   let baseB = Math.floor(Math.log10(b))
    if (baseA === 2 && baseB ===2) return a - b
    if (baseA === 1 && baseB === 1) return a - b
    if (baseA === 0 && baseB === 0) return a - b
     
    return  b - a
  })
 
}




function frequencySort(arr) {

  let obj = {}
  for (let ele of arr) {
    !obj[ele] ? obj[ele] = 1: obj[ele]++;
  }
  arr.sort((a,b)=> {
    if (obj[a] === obj[b]) return b - a
    else return obj[a] - obj[b]
  })
    return arr

  }



module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
