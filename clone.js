function cloneArr (arrObj) { // deep clone an array with potentially nested arrays or objects
  return arrObj.slice(0).map(function (m) {
   return Array.isArray(m) ? cloneArr(m) : typeof m === 'object' ? JSON.parse(JSON.stringify(m)) : m
  }) 
}

function cloneArrOrObj (arrObj) { // deep clone array or object
  return JSON.parse(JSON.stringify(arrObj))
}

var arr = [1,2,[3,[5,2]],{3:{4:0}}]
var cloned = cloneArr(arr);

cloned[2][1][0] = 'Buller';
cloned[3][3][4] = 'Buller';

console.log(arr)
console.log(cloned)