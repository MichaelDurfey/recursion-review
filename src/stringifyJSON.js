// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj !== 'object' || obj === null) {
    if (typeof obj === 'string') {
      return String(`"${obj}"`);
    }
    return String(obj);
  } else {
    // Arrays
    if (Array.isArray(obj)) {
      return '[' + obj.map(function(item) {
        return stringifyJSON(item);
      }).join(',') + ']';
    }
    // Objects
    var objArr = [];
    
    for (let x in obj) {
      if (typeof obj[x] === 'function' || typeof obj[x] === 'undefined') {
        continue;
      }
      objArr.push(`"${x}":${stringifyJSON(obj[x])}`);
    }
    return '{' + objArr.join(',') + '}';
  }
};
