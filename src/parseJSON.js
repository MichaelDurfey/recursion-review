// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var result;  
  var newJson = json.slice(1, -1);

  if (json[0] === '{') {
    result = {};
    // parseJSON(newJson);
    //split
    var objSplit = newJson.split(', ').map( function(item) {
      return item.split(':');
    });

    objSplit.forEach(function(item) {
      result[item[0].slice(1, -1)] = parseJSON(item[1].trim());
    });
    // console.log(objSplit)

    console.log(result);
    return result;


  } else if (json[0] === '[') {
    result = [];
    if (newJson.length > 0) {
      var commaSepJSon = newJson.split(',');
    }
    commaSepJSon.forEach( function(item) { 
      result.push(parseJSON(item.trim()));
    });
    return result;
  }

  if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;  
  } else if (json === 'null') {
    return null;
  } else if (json.startsWith('"')) {
    // go through each char until we find closing "
    // for (var i=1; i<json.length; i++) {
    //   if (json[i] === '"') {
    return json.slice(1, json.indexOf('"', 1));
    // }
    // }
  } else {
    // if number
    return Number(json);
  }
    
    // commaSepJSon.forEach(function(item) {
    //   result.push(parseJSON(item));
    // });

    // json.join();
    // splitElements = json.split(', ');
    // console.log(splitElements);
  // json.slice(1).forEach( function(elem, index) {
      
  
  //   });
    // if (elem ===) {

    // }
  
  //use startsWith method to check first element
    //make result element type;
    //split json 
    //invoke matching function with element

  // if (json.match(/true/g)) {
  //   return true;
  // } 

  var myMethods = {
    'parseArray': function () {
  
    },
    'parseObj': function () {
  
    },
    'parseString': function () {
  
    },
    'parseNumber': function () {
  
    },
    'parseBoolean': function () {
  
    },
    'parseNull': function () { 

    }
  };
  
};

console.log(parseJSON('{"foo": true, "bar": false, "baz": null}'))


//[]