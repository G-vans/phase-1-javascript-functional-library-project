function myEach(array, alert){
    Object.values(array).forEach(test => alert(test))
    return array

}

function myMap(testArr, callback) {
    const objectValues = Object.values(testArr);
  callback = objectValues.map(x => x * 3)
  return callback
}


const myReduce = function (testArr, callback, acc) {
    let objectValues = Object.values(testArr);
  
    if (!acc) {
      acc = objectValues[0];
      objectValues = objectValues.slice(1);
    }
  
    const newArr = objectValues.length;
  
    for (let i = 0; i < newArr; i++) {
      acc = callback(acc, objectValues[i], objectValues);
    }
    return acc;
  };

function myFind(testArr, target){
    let objectValues = Object.values(testArr)
    for(let i = 0; i < testArr.length; i++)
    if (target(objectValues[i])) return objectValues[i]
    return undefined
}

function myFilter(testArr, excluder){
    let objectValues = Object.values(testArr)
    return objectValues.filter(num => num > 10)
}

function mySize(testArr) {
    let objectValues = Object.values(testArr)
    const newArr = new Set(objectValues)
    return newArr.size
}

function myFirst(testArr, n) {
    let objectValues = Object.values(testArr)
    if (n) {
        return objectValues.slice(0, n)
    }
    return objectValues[0]
}

const myLast = function(testArr, start=false) {
    return (start) ? testArr.slice(testArr.length-start, testArr.length) : testArr[testArr.length-1];
  }


function myKeys(testArr) {
    return Object.keys(testArr)
    
}

function myValues(testArr) {
    return Object.values(testArr)
    
}